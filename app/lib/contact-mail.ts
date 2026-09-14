import nodemailer from "nodemailer";

// Server-only: imported by the contact route, never by a client component.
export async function sendContactMail(fields: Record<string, unknown>) {
  if (process.env.CONTACT_EMAIL_PROVIDER === "smtp") return sendSmtpMail(fields);
  const tenant = process.env.M365_TENANT_ID;
  const client = process.env.M365_CLIENT_ID;
  const secret = process.env.M365_CLIENT_SECRET;
  const sender = process.env.M365_SENDER_EMAIL;
  const recipient = process.env.CONTACT_TO_EMAIL || "Digital@ggmsglobal.com";
  if (process.env.CONTACT_EMAIL_ENABLED !== "true" || !tenant || !client || !secret || !sender) {
    return "unconfigured";
  }

  const tokenResponse = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ client_id: client, client_secret: secret,
      scope: "https://graph.microsoft.com/.default", grant_type: "client_credentials" }),
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (!tokenResponse.ok) return "failed";
  const token = await tokenResponse.json();
  if (typeof token.access_token !== "string" || !token.access_token) return "failed";

  const labels: Record<string, string> = {
    purpose: "Enquiry type", name: "Name", organization: "Company", email: "Email",
    phone: "Phone", jobTitle: "Job title", service: "Service", stage: "Project stage",
    help: "Support required", timeline: "Timeline", message: "Message",
  };
  const content = Object.entries(labels).map(([key, label]) =>
    `${label}: ${typeof fields[key] === "string" ? fields[key].trim() || "Not supplied" : "Not supplied"}`,
  ).join("\n\n");
  const response = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token.access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message: {
      subject: "GGMS Analytics website enquiry",
      body: { contentType: "Text", content },
      toRecipients: [{ emailAddress: { address: recipient } }],
      replyTo: [{ emailAddress: { address: (fields.email as string).trim() } }],
    }, saveToSentItems: true }),
    signal: AbortSignal.timeout(10000),
  });
  // Graph acceptance means queued, not confirmed inbox delivery.
  return response.status === 202 ? "accepted" : "failed";
}

async function sendSmtpMail(fields: Record<string, unknown>) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const port = Number(process.env.SMTP_PORT || "465");
  if (process.env.CONTACT_EMAIL_ENABLED !== "true" || !host || !user || !pass) return "unconfigured";
  if (port !== 465 && port !== 587) return "failed";
  const transporter = nodemailer.createTransport({
    host, port, secure: port === 465, requireTLS: true,
    auth: { user, pass },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000,
    disableFileAccess: true, disableUrlAccess: true,
  });
  const labels: Record<string, string> = {
    purpose: "Enquiry type", name: "Name", organization: "Company", email: "Email",
    phone: "Phone", jobTitle: "Job title", service: "Service", stage: "Project stage",
    help: "Support required", timeline: "Timeline", message: "Message",
  };
  try {
    const result = await transporter.sendMail({
      from: { name: "GGMS Analytics", address: user },
      to: { address: process.env.CONTACT_TO_EMAIL || user, name: "GGMS Analytics" },
      replyTo: { address: (fields.email as string).trim() },
      subject: "GGMS Analytics website enquiry",
      text: Object.entries(labels).map(([key, label]) =>
        `${label}: ${typeof fields[key] === "string" ? fields[key].trim() || "Not supplied" : "Not supplied"}`,
      ).join("\n\n"),
    });
    return result.accepted.length > 0 && result.rejected.length === 0 ? "accepted" : "failed";
  } catch {
    // Do not expose SMTP credentials or enquiry content in logs or responses.
    return "failed";
  } finally {
    transporter.close();
  }
}

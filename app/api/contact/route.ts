import { NextResponse } from "next/server";
import { sendContactMail } from "../../lib/contact-mail";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Please submit a valid enquiry." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const limits: Record<string, number> = {
    name: 200, organization: 200, email: 254, message: 10000,
    purpose: 100, jobTitle: 200, phone: 100, service: 200,
    stage: 200, help: 2000, timeline: 200,
  };
  for (const [field, limit] of Object.entries(limits)) {
    const value = fields[field];
    const required = ["name", "organization", "email", "message"].includes(field);
    if ((required && (typeof value !== "string" || !value.trim())) ||
        (value !== undefined && (typeof value !== "string" || value.length > limit))) {
      return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((fields.email as string).trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const delivery = await sendContactMail(fields);
    if (delivery === "accepted") return NextResponse.json({ success: true }, { status: 202 });
  } catch {
    // Never log credentials or private enquiry content.
  }
  return NextResponse.json(
    { error: "Online enquiries are temporarily unavailable. Please contact us by email." },
    { status: 503 },
  );
}

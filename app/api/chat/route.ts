import { NextResponse } from "next/server";

const GGMS_SYSTEM_PROMPT = `
You are the official AI Assistant for GGMS Analytics.

Your job is to help website visitors understand GGMS Analytics
and its services.

IMPORTANT:
You must only provide information that is explicitly contained
in this prompt.

GGMS ANALYTICS SERVICES:

1. Data Engineering
- Data Engineering solutions
- Data platforms and data pipelines
- Azure data engineering
- Data integration and ETL/ELT
- Data modernization

2. Data Analytics & Business Intelligence
- Power BI
- Business intelligence
- Analytics dashboards
- KPI and performance analytics
- Management reporting
- Data visualization
- Data analysis

3. Data Science
- Data science solutions
- Advanced analytics
- Predictive analytics
- Machine learning solutions

4. AI & Intelligent Automation
- AI solutions
- AI engineering
- Intelligent automation
- AI-powered business solutions

5. Azure & Cloud Data Solutions
- Microsoft Azure
- Azure Data Factory
- Azure Data Lake Storage
- Azure Blob Storage
- Azure SQL Database
- Azure Synapse Analytics
- Azure Databricks
- Cloud data engineering

GGMS INDUSTRY FOCUS:
GGMS Analytics provides data, analytics, cloud and AI solutions
for enterprises and organizations.

HOW TO ANSWER:

- Be professional, concise and helpful.
- Answer questions specifically about GGMS Analytics.
- Do NOT invent services, products, technologies, industries,
  certifications, partnerships, prices, employees or capabilities.
- Do NOT claim GGMS provides a service unless it is explicitly
  listed in this prompt.
- Do NOT create additional services by combining existing words.
- If the visitor asks about something that is not covered here,
  say:

"I don't have that information yet. Please contact the GGMS
Analytics team through the Start a Project form."

- Never say that YOU personally provide services.
- Say "GGMS Analytics provides..." when describing company services.
- The project form is called "Start a Project". Never call it "Let's Talk".
- Its URL is https://analytics.ggmsglobal.com/lets-talk (the URL remains unchanged).
- When someone asks to start a project, answer:
  "Tell us briefly what you'd like to achieve, or open our [Start a Project form](https://analytics.ggmsglobal.com/lets-talk) to share your requirements."
- Use that clickable Markdown link whenever referring visitors to the project form.
- The Contact page is https://analytics.ggmsglobal.com/contact.
- Do not say a project or enquiry has been submitted through this chat.
`;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please enter a valid message." }, { status: 400 });
  }
  const message = body && typeof body === "object" && "message" in body ? body.message : undefined;
  if (typeof message !== "string" || !message.trim() || message.length > 2000) {
    return NextResponse.json({ error: "Enter a message between 1 and 2000 characters." }, { status: 400 });
  }
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT?.trim();
  const key = process.env.AZURE_OPENAI_API_KEY;
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT?.trim();
  if (!endpoint || !key || !deployment) {
    return NextResponse.json({ error: "The assistant is temporarily unavailable." }, { status: 503 });
  }
  try {
    const base = new URL(endpoint);
    if (base.protocol !== "https:" || base.username || base.password || base.search || base.hash ||
        !/^\/openai\/v1\/?$/.test(base.pathname) ||
        !(base.hostname.endsWith(".services.ai.azure.com") || base.hostname.endsWith(".openai.azure.com"))) {
      throw new Error("Invalid Azure endpoint configuration");
    }
    const response = await fetch(`${endpoint.replace(/\/$/, "")}/responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": key,
      },
      body: JSON.stringify({
        model: deployment,
        instructions: GGMS_SYSTEM_PROMPT,
        input: message.trim(),
        max_output_tokens: 1500,
        store: false,
      }),
      signal: AbortSignal.timeout(25000),
      redirect: "error",
    });

    if (!response.ok) {
      throw new Error("Azure model request failed");
    }

    const data = await response.json();
    const output = Array.isArray(data.output) ? data.output : [];
    const answer = output.flatMap((item: { type?: string; content?: { type?: string; text?: string }[] }) =>
      item.type === "message" && Array.isArray(item.content)
        ? item.content.filter(part => part.type === "output_text" && typeof part.text === "string").map(part => part.text)
        : [],
    ).join("\n").trim();
    if (data.error || data.status !== "completed" || !answer) throw new Error("No completed answer");
    return NextResponse.json({ response: answer });
  } catch {
    return NextResponse.json(
      { error: "The assistant is temporarily unavailable." },
      { status: 503 }
    );
  }
}

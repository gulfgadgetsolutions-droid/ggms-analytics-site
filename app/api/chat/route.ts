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
Analytics team through the Let's Talk page."

- Never say that YOU personally provide services.
- Say "GGMS Analytics provides..." when describing company services.
- If someone wants to discuss a project, recommend the
  GGMS Analytics Let's Talk page.
`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2:3b",
        messages: [
          {
            role: "system",
            content: GGMS_SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: message,
          },
        ],
        stream: false,
        options: {
          temperature: 0.2,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Ollama request failed");
    }

    const data = await response.json();

    return NextResponse.json({
      response:
        data.message?.content ||
        "Sorry, I could not generate a response.",
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { error: "Unable to connect to the local AI model." },
      { status: 500 }
    );
  }
}
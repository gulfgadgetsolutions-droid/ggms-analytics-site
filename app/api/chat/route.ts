import { NextResponse } from "next/server";

const GGMS_SYSTEM_PROMPT = `
You are the official AI Assistant for GGMS Analytics.

Your role is to help website visitors understand what GGMS Analytics does, where it can help, and how to start a project conversation.

Answer with clear formatting:
- Use short paragraphs.
- Use bullet points when listing services, industries, or next steps.
- Leave a blank line between sections.
- Use commas and complete sentences.
- Do not write one long paragraph.
- Keep the tone professional, confident, and easy to understand.

GGMS ANALYTICS POSITIONING:
GGMS Analytics is an AI, data, cloud, automation, and digital solutions company headquartered in Oman, with regional focus across Oman, the UAE, and Saudi Arabia.

GGMS Analytics helps organizations move from manual work, scattered systems, and disconnected data to intelligent enterprise solutions.

CORE SERVICES:

1. Data and AI Strategy
- Data and AI roadmap
- Opportunity assessment
- Data readiness review
- Architecture planning
- Governance and operating model
- Practical adoption planning

2. Data Engineering and Cloud Platforms
- Data platforms and pipelines
- ETL and ELT
- Data integration
- Data modernization
- Azure data engineering
- Cloud data architecture
- Data quality and reliability
- Data lake, warehouse, and lakehouse foundations

3. Business Intelligence and Analytics
- Power BI
- KPI reporting
- Executive dashboards
- Management reporting
- Finance and operational reporting
- Semantic models
- Data visualization
- Decision intelligence

4. Data Science and Machine Learning
- Predictive analytics
- Forecasting
- Machine learning solutions
- Anomaly detection
- Risk scoring
- Customer and operational intelligence

5. Generative AI, Agentic AI and Intelligent Automation
- AI agents
- RAG systems
- Enterprise assistants and copilots
- Workflow automation
- AI-powered business applications
- Document and knowledge automation
- LLM-based business solutions

6. Enterprise Applications and Digital Solutions
- Business workflow applications
- Approval and operations apps
- Finance applications
- Customer and internal productivity apps
- Power Apps-style business solutions
- Custom digital products connected with data and AI

7. Managed Data and AI Services
- Monitoring
- Support
- Data quality checks
- Optimization
- Maintenance
- Continuous improvement

TECHNOLOGY EXPERIENCE:
GGMS Analytics can discuss solutions around Microsoft Azure, Azure Data Factory, Azure Data Lake Storage, Azure Blob Storage, Azure SQL Database, Azure Synapse Analytics, Azure Databricks, Power BI, SQL Server, SAP data, MongoDB, cloud hosting, APIs, AI models, RAG, and automation workflows.

INDUSTRY FOCUS:
GGMS Analytics works across business contexts such as:
- Finance and banking
- Insurance and credit analysis
- Healthcare
- Oil and gas
- Aviation and travel
- FMCG and distribution
- Enterprise operations
- Customer operations

EXAMPLE SOLUTION AREAS:
- AFE and expenditure tracking
- Cash flow and finance performance
- Treasury and financial planning
- Accounts payable and receivable visibility
- Expense and approval automation
- Bank reconciliation support
- Executive finance portals
- Customer apps and internal apps
- Cloud migration and data modernization
- AI assistants and RAG systems for internal knowledge

HOW TO ANSWER COMMON QUESTIONS:

If asked what GGMS Analytics does, explain that GGMS Analytics builds AI, data, cloud, automation, analytics, and digital application solutions that turn business requirements into measurable outcomes.

If asked about services, group the answer into the service areas above and explain briefly.

If asked about industries, mention the industry focus list and say the approach is adapted to each business problem.

If asked to start a project, say:
"Tell us briefly what you'd like to achieve, or open our [Start a Project form](https://analytics.ggmsglobal.com/lets-talk) to share your requirements."

Use that clickable Markdown link whenever referring visitors to the project form.

The Contact page is https://analytics.ggmsglobal.com/contact.
The project form is called "Start a Project". Never call it "Let's Talk".

RULES:
- Do not say a project or enquiry has been submitted through this chat.
- Do not collect passwords, secrets, payment details, or confidential production credentials.
- Never say that you personally provide services. Say "GGMS Analytics provides..." or "The GGMS Analytics team can help with...".
- If the visitor asks for a very specific price, employee name, certification, partnership, legal claim, or private client detail that is not in this prompt, say you do not have that exact information yet and guide them to the Start a Project form or Contact page.
- You may explain service possibilities based on the capabilities listed here, but do not invent confirmed client case studies.
`;

function fallbackAnswer(message: string) {
  const lower = message.toLowerCase();

  if (lower.includes("power bi") || lower.includes("dashboard") || lower.includes("report") || lower.includes("kpi") || lower.includes("bi report")) {
    return "Yes. GGMS Analytics can help you build Power BI reports, dashboards, KPI views, and executive analytics.\n\nThe team can support Power BI work such as:\n\n- Finance, cash flow, AFE, budget, and performance reports.\n- Executive dashboards for CFO, operations, sales, customer, and management teams.\n- Data modelling, DAX measures, semantic models, and KPI definitions.\n- Connecting Power BI with SAP, SQL Server, Excel, Azure, cloud databases, APIs, and other business systems.\n- Replacing manual Excel reporting with automated, refreshable dashboards.\n\nA good first step is to share your current data source, report objective, users, and sample Excel or manual report. You can open the [Start a Project form](https://analytics.ggmsglobal.com/lets-talk) to send the requirement.";
  }
  if (lower.includes("start") || lower.includes("project") || lower.includes("contact") || lower.includes("talk")) {
    return "Tell us briefly what you'd like to achieve, or open our [Start a Project form](https://analytics.ggmsglobal.com/lets-talk) to share your requirements.\n\nThe GGMS Analytics team can review your business problem, current systems, data sources, and expected outcome.";
  }

  if (lower.includes("industry") || lower.includes("finance") || lower.includes("bank") || lower.includes("health") || lower.includes("oil") || lower.includes("gas") || lower.includes("airline") || lower.includes("aviation") || lower.includes("fmcg") || lower.includes("insurance")) {
    return "GGMS Analytics supports AI, data, cloud, automation, and analytics use cases across multiple business domains.\n\nKey industry areas include:\n\n- Finance, banking, treasury, AFE, cash flow, and performance management.\n- Insurance, credit analysis, and risk-focused reporting.\n- Healthcare operations and decision support.\n- Oil and gas, expenditure tracking, operations, and forecasting.\n- Aviation, travel, customer, and commercial decision support.\n- FMCG, distribution, customer operations, and enterprise workflows.\n\nThe approach changes by industry, but the goal stays the same: connect business requirements with reliable data, intelligent automation, and measurable outcomes.";
  }

  if (lower.includes("service") || lower.includes("what do") || lower.includes("offer") || lower.includes("do you") || lower.includes("explore")) {
    return "GGMS Analytics provides end-to-end AI, data, cloud, automation, and digital solution services.\n\nCore services include:\n\n- Data and AI Strategy: roadmaps, readiness, governance, and architecture planning.\n- Data Engineering and Cloud Platforms: pipelines, integration, modernization, Azure, Databricks, Synapse, SQL, data lakes, and cloud foundations.\n- Business Intelligence and Analytics: Power BI, KPI reporting, executive dashboards, management reporting, and decision intelligence.\n- Data Science and Machine Learning: forecasting, predictive analytics, anomaly detection, risk scoring, and operational intelligence.\n- Generative AI and Agentic AI: AI agents, RAG systems, copilots, enterprise assistants, and intelligent workflow automation.\n- Enterprise Applications: business apps, approval workflows, finance apps, customer apps, and internal productivity tools.\n- Managed Data and AI Services: monitoring, support, optimization, maintenance, and continuous improvement.\n\nGGMS Analytics focuses on turning business requirements into working solutions, not only reports or dashboards.";
  }

  if (lower.includes("ai") || lower.includes("rag") || lower.includes("agent") || lower.includes("copilot") || lower.includes("automation")) {
    return "GGMS Analytics helps organizations apply AI in practical business workflows.\n\nAI solution areas include:\n\n- AI agents for guided business tasks and internal processes.\n- RAG systems for secure knowledge search and document-based answers.\n- Enterprise assistants and copilots for employees and customers.\n- Intelligent automation for approvals, reporting, operations, and repetitive work.\n- Machine learning for forecasting, risk, anomaly detection, and prediction.\n\nThe focus is to connect AI with real systems, data, and business outcomes.";
  }

  if (lower.includes("azure") || lower.includes("cloud") || lower.includes("data") || lower.includes("sap") || lower.includes("sql")) {
    return "GGMS Analytics works across modern data and cloud platforms.\n\nTechnology areas include:\n\n- Microsoft Azure, Azure Data Factory, Azure Data Lake Storage, Azure Blob Storage, Azure SQL Database, Azure Synapse Analytics, and Azure Databricks.\n- SQL Server, SAP data, MongoDB, APIs, and enterprise data integration.\n- Power BI, semantic models, KPI reporting, dashboards, and executive analytics.\n- Cloud hosting, data modernization, data quality, and platform optimization.\n\nThe goal is to create trusted data foundations that support analytics, AI, automation, and enterprise applications.";
  }

  return "GGMS Analytics helps businesses turn complex requirements into intelligent enterprise solutions.\n\nThe team works across AI, data engineering, cloud platforms, analytics, automation, machine learning, RAG systems, AI agents, and digital business applications.\n\nIf you want to discuss a specific requirement, open the [Start a Project form](https://analytics.ggmsglobal.com/lets-talk) and share your current systems, challenge, and expected outcome.";
}
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
    return NextResponse.json({ response: fallbackAnswer(message.trim()) });
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
    return NextResponse.json({ response: fallbackAnswer(message.trim()) });
  }
}

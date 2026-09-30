import { insightNotes, type EditorialSource } from "./editorial";

export type InsightCategory = "Data Engineering" | "Analytics & BI" | "AI & Automation" | "Industry Intelligence";

export type InsightSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightArticle = {
  slug: string;
  category: InsightCategory;
  format: "Practical guide" | "Architecture perspective";
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  published: string;
  datePublished: string;
  author: string;
  dateModified: string;
  sources: EditorialSource[];
  featured?: boolean;
  keyTakeaway: string;
  flow: string[];
  technologyContext: string[];
  sections: InsightSection[];
};

export const insightCategories: Array<"All" | InsightCategory> = [
  "All",
  "Data Engineering",
  "Analytics & BI",
  "AI & Automation",
  "Industry Intelligence",
];

const articleDrafts: Omit<InsightArticle, "dateModified" | "sources" | "readTime">[] = [
  {
    slug: "enterprise-ai-agent-workflows-human-in-the-loop",
    category: "AI & Automation",
    format: "Architecture perspective",
    title: "AI agent workflows: turn requirements into governed action",
    excerpt:
      "Modern AI agents create value when they connect intake, knowledge, tools, approvals, and audit trails inside a controlled business workflow.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=86",
    alt: "Abstract AI system with connected digital intelligence nodes",
    published: "October 2026",
    datePublished: "2026-10-01",
    author: "GGMS Analytics",
    keyTakeaway:
      "An AI agent should not be launched as a general chatbot. It should sit inside a clear workflow with trusted context, bounded tools, human approval where needed, and measurable outcomes.",
    flow: ["Request intake", "Context retrieval", "Agent reasoning", "Tool action", "Human approval", "Logged outcome"],
    technologyContext: ["Azure AI Foundry", "Azure OpenAI", "RAG", "APIs", "Power Automate", "Power Apps", "Databricks", "Power BI"],
    sections: [
      {
        id: "agent-is-a-workflow-participant",
        heading: "An AI agent is a workflow participant",
        paragraphs: [
          "Many teams start with a chatbot and then expect it to transform operations. A stronger approach starts with the business workflow: what arrives, who owns it, what evidence is required, which systems must be checked, and what action closes the loop.",
          "The agent then becomes one participant in that workflow. It can classify requests, retrieve knowledge, draft responses, call approved tools, prepare summaries, and route exceptions. The operating model around it decides whether the result is safe, useful, and repeatable.",
        ],
      },
      {
        id: "reference-agent-workflow",
        heading: "A practical enterprise agent workflow",
        paragraphs: ["A first agent should be narrow enough to explain and important enough to remove real friction."],
        bullets: [
          "Capture the request from a form, email, portal, Teams message, or business application.",
          "Classify the task and retrieve only the approved documents, data, and prior cases required for that task.",
          "Ask the model to prepare a plan, draft, recommendation, or next-best action with evidence links.",
          "Use deterministic rules for amounts, dates, thresholds, permissions, and mandatory fields.",
          "Send high-risk or uncertain items to a named reviewer before any system update is made.",
          "Log the final action, evidence, reviewer decision, and outcome for future improvement.",
        ],
      },
      {
        id: "human-approval",
        heading: "Place human approval where the risk changes",
        paragraphs: [
          "Human review is not a weakness in the design. It is how teams keep judgment, accountability, and customer or financial impact under control. The agent can prepare the work; the business decides when a person must approve it.",
          "Approval is especially important when the workflow touches finance, HR, customer commitments, regulated documents, system changes, or external communication. The interface should show the evidence, the recommended action, and the reason the item was routed for review.",
        ],
      },
      {
        id: "measure-agent-value",
        heading: "Measure whether the workflow improves",
        paragraphs: [
          "The right success measures are operational: time to first response, manual steps removed, exception ageing, rework, reviewer correction rate, user adoption, and successful system updates. If those do not improve, the agent is only a demo.",
        ],
      },
    ],
  },
  {
    slug: "rag-systems-for-enterprise-knowledge-workflows",
    category: "AI & Automation",
    format: "Practical guide",
    title: "RAG systems: connect enterprise knowledge to daily work",
    excerpt:
      "A useful RAG system needs content ownership, retrieval quality, access control, citations, feedback, and workflow integration.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=86",
    alt: "Digital workspace representing connected enterprise knowledge and search",
    published: "October 2026",
    datePublished: "2026-10-01",
    author: "GGMS Analytics",
    keyTakeaway:
      "RAG becomes valuable when it is designed around one business process and maintained like a knowledge product, not when every document is uploaded into a search index without ownership.",
    flow: ["Content sources", "Preparation", "Indexing", "Retrieval", "Grounded answer", "Feedback loop"],
    technologyContext: ["Azure AI Search", "Azure OpenAI", "Vector search", "SharePoint", "Blob Storage", "APIs", "Data governance"],
    sections: [
      {
        id: "rag-is-more-than-upload",
        heading: "RAG is more than uploading documents",
        paragraphs: [
          "Retrieval-augmented generation helps an AI system answer with company-specific context, but the quality depends on what it retrieves. A weak knowledge base produces weak answers even when the model is strong.",
          "The first decision is scope. Choose a process such as sales support, policy guidance, project delivery, finance close support, service desk triage, or compliance evidence. Then define which documents are approved, who owns them, and how users will verify answers.",
        ],
      },
      {
        id: "knowledge-operating-model",
        heading: "Build a knowledge operating model",
        paragraphs: ["The system needs clear responsibilities before it needs more documents."],
        bullets: [
          "Name the owner for each knowledge source and define how often it is reviewed.",
          "Keep drafts, expired policies, duplicate files, and uncontrolled exports out of the approved answer path.",
          "Preserve permissions so users cannot retrieve material they should not see.",
          "Show citations and source dates in the answer so a user can check the evidence.",
          "Collect feedback when the answer is weak, missing, outdated, or unsupported.",
        ],
      },
      {
        id: "workflow-not-search-box",
        heading: "Put RAG inside the workflow",
        paragraphs: [
          "The strongest RAG experience is rarely a blank search box. It appears inside a task: preparing a proposal, reviewing a contract, answering a customer question, checking a policy, or summarizing a project handover.",
          "When the interface knows the task, it can retrieve better context, ask better follow-up questions, and present the answer in a format that is easier to act on.",
        ],
      },
      {
        id: "measure-rag-quality",
        heading: "Measure retrieval before generation",
        paragraphs: [
          "Teams often judge only the final answer. A better test separates retrieval quality from writing quality: did the system find the right source, respect permissions, use current material, and cite the evidence clearly?",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-workflows-from-email-to-action",
    category: "AI & Automation",
    format: "Practical guide",
    title: "AI automation workflows: from email and documents to action",
    excerpt:
      "Combine AI extraction, business rules, approvals, and system updates so manual intake becomes a controlled operating workflow.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=86",
    alt: "Team working with business applications and automation workflows",
    published: "October 2026",
    datePublished: "2026-10-01",
    author: "GGMS Analytics",
    keyTakeaway:
      "The value of AI automation is not that it reads a message. The value is that it extracts the right information, validates it, routes it, secures approval, updates the business system, and shows what happened.",
    flow: ["Trigger", "Extract", "Validate", "Route", "Approve", "Update systems", "Monitor"],
    technologyContext: ["Power Automate", "Azure AI", "Document Intelligence", "Power Apps", "SAP", "Dynamics", "ServiceNow", "APIs"],
    sections: [
      {
        id: "workflow-before-model",
        heading: "Start with the workflow, then choose the model",
        paragraphs: [
          "A business email, form, PDF, or spreadsheet often starts a process that touches several people and systems. AI can help read and summarize the input, but the automation must still decide what happens next.",
          "Map the existing path first: who receives the request, what fields are checked, which approvals are needed, what system is updated, and which exceptions cause delays. That map becomes the blueprint for AI automation.",
        ],
      },
      {
        id: "what-ai-should-do",
        heading: "Use AI where interpretation is needed",
        paragraphs: ["AI is useful for messy inputs; rules are better for exact control."],
        bullets: [
          "Classify the request type and urgency from unstructured text.",
          "Extract fields from emails, attachments, scanned documents, and customer messages.",
          "Summarize the request and identify missing information for follow-up.",
          "Find related policies, historical cases, contracts, or knowledge articles.",
          "Draft a response or action plan for a reviewer to approve.",
        ],
      },
      {
        id: "controls-for-action",
        heading: "Keep controls around the system update",
        paragraphs: [
          "The final update to SAP, CRM, finance, HR, service desk, or another system should be protected by validation rules and approval thresholds. AI can propose the action, but the workflow decides whether it is allowed.",
          "This design gives teams speed without losing auditability. It also helps leaders see how much work is automated, where exceptions remain, and which inputs cause rework.",
        ],
      },
      {
        id: "where-to-begin",
        heading: "Good places to begin",
        paragraphs: [
          "Strong candidates include invoice intake, vendor onboarding, customer support triage, project request intake, employee expense checks, sales proposal preparation, contract review support, and operational exception routing.",
        ],
      },
    ],
  },
  {
    slug: "trusted-finance-analytics-from-source-to-decision",
    category: "Analytics & BI",
    format: "Architecture perspective",
    title: "Finance reporting from SAP to Power BI: a reconciliation checklist",
    excerpt:
      "Finance reporting becomes dependable when definitions, controls, data grain, and ownership are designed before the executive dashboard.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=86",
    alt: "Finance leaders reviewing business performance around a meeting table",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "A finance dashboard is the final interface of a control system. Trust is created upstream through reconciled sources, governed definitions, and a model that preserves financial meaning.",
    flow: ["SAP, OneStream & files", "Controlled ingestion", "Finance data model", "Reconciliation", "Executive view"],
    technologyContext: ["SAP", "SAP HANA", "OneStream", "SQL", "Power BI", "Tableau"],
    sections: [
      {
        id: "dashboard-is-not-the-start",
        heading: "The dashboard is not the starting point",
        paragraphs: [
          "Finance teams rarely struggle because they lack charts. They struggle because the same measure can carry different meanings across ledgers, planning systems, spreadsheets, business units, and reporting periods. A polished visual layer cannot resolve those differences by itself.",
          "The first design conversation should define the decision being supported, the reporting grain, the approved source for each measure, the close calendar, and the path for resolving exceptions. Only then can the technical architecture reinforce the finance operating model instead of creating another version of the truth.",
        ],
      },
      {
        id: "controlled-data-path",
        heading: "Design a controlled data path",
        paragraphs: [
          "A practical pattern may connect SAP or SAP HANA actuals, OneStream planning data, SQL-based operational sources, and controlled spreadsheet inputs. The objective is not to move everything into one place. It is to preserve traceability while standardizing the information required for analysis.",
          "Ingestion should retain source identifiers and load timestamps. Transformation should isolate mapping logic, currency treatment, calendar rules, organizational hierarchies, and allocation assumptions. The semantic model should then expose business-ready measures without forcing every report author to rebuild finance logic.",
        ],
        bullets: [
          "Retain lineage from the visual back to the source record or approved aggregate.",
          "Separate source corrections from analytical adjustments and make both visible.",
          "Reconcile at agreed control points before data reaches leadership reporting.",
          "Assign owners to definitions, mappings, exceptions, and release approval.",
        ],
      },
      {
        id: "design-for-decisions",
        heading: "Design the executive view around decisions",
        paragraphs: [
          "An executive view should reveal direction, material variance, business drivers, and the action that requires attention. It should not reproduce every page of a monthly reporting pack. Summary and diagnostic views need different levels of detail but must use the same governed measures.",
          "Power BI, Tableau, or another visualization platform can provide the interface. The more important design choice is how a user moves from an enterprise signal to business-unit context, account or cost-center explanation, and an accountable next step.",
        ],
      },
      {
        id: "questions-to-test-readiness",
        heading: "Questions that test reporting readiness",
        paragraphs: [
          "Before selecting a new tool, finance and data leaders should be able to answer a short set of operating questions. Unclear answers indicate where the real reporting work begins.",
        ],
        bullets: [
          "Which source is authoritative for actuals, plans, forecasts, and operational drivers?",
          "Where are mappings and business rules maintained, approved, and versioned?",
          "How are late adjustments and restatements reflected across published views?",
          "Who investigates a variance, and what evidence must be available to them?",
        ],
      },
    ],
  },
  {
    slug: "supply-chain-visibility-needs-an-operating-model",
    category: "Industry Intelligence",
    format: "Practical guide",
    title: "Supply chain visibility: track the promise, shipment, and receipt",
    excerpt:
      "Connect assets, materials, manufacturing, inventory, and logistics around shared events, decisions, and exceptions.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1800&q=86",
    alt: "Industrial manufacturing environment with modern production equipment",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "Visibility creates value only when a signal has business context, an accountable owner, and a defined response. The analytical model should reflect how the supply chain actually operates.",
    flow: ["Assets & materials", "Operational events", "Shared model", "Exceptions", "Owner action"],
    technologyContext: ["SAP", "Azure Data Factory", "Databricks", "PySpark", "SQL", "Power BI"],
    sections: [
      {
        id: "visibility-is-not-a-screen",
        heading: "Visibility is not a screen",
        paragraphs: [
          "Supply chain programs often begin with the ambition to create a control tower or a unified dashboard. The screen is useful, but it is not the operating model. Teams still need a shared interpretation of demand, supply, production, material availability, asset condition, and delivery risk.",
          "A useful analytical product connects those signals at the level where a decision can be made. That may be a plant, asset, material, supplier, order, route, or time bucket. Without this common grain, teams can see more data while remaining unable to coordinate a response.",
        ],
      },
      {
        id: "model-events-and-decisions",
        heading: "Model events and decisions—not departmental extracts",
        paragraphs: [
          "Source systems are organized around transactions and functions. Operational decisions cut across them. An analytics model should therefore connect events such as a demand change, purchase-order delay, production interruption, quality hold, stock movement, or maintenance requirement.",
          "This event-centered approach makes it possible to distinguish an informative change from an actionable exception and to show which downstream commitments may be affected.",
        ],
        bullets: [
          "Create stable identifiers across assets, materials, suppliers, orders, and locations.",
          "Align planning calendars and units of measure before comparing signals.",
          "Define thresholds with operations teams, not only with report developers.",
          "Record acknowledgement, ownership, and resolution for critical exceptions.",
        ],
      },
      {
        id: "architecture-pattern",
        heading: "A practical architecture pattern",
        paragraphs: [
          "SAP, manufacturing systems, warehouse data, maintenance sources, spreadsheets, and external logistics feeds can be ingested through cloud pipelines. SQL, Databricks, PySpark, or warehouse transformations can then standardize master data and construct reusable operational facts.",
          "The serving layer should support both leadership indicators and detailed investigation. Forecasting and anomaly detection can be introduced after historical data, exception labels, and operational feedback are sufficiently reliable.",
        ],
      },
      {
        id: "measure-the-response",
        heading: "Measure the response, not only the condition",
        paragraphs: [
          "A mature supply chain product measures whether exceptions are being detected early enough, routed to the right owner, resolved consistently, and used to improve future planning. That closes the loop between analytics and operations.",
        ],
      },
    ],
  },
  {
    slug: "distributor-analytics-decisions",
    category: "Industry Intelligence",
    format: "Practical guide",
    title: "Distributor analytics: reconcile stock and secondary sales",
    excerpt:
      "Move beyond sales totals to understand territory execution, product movement, inventory exposure, and channel action.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=86",
    alt: "Organized distribution warehouse representing channel and inventory analytics",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "Distributor reporting should connect movement, inventory, territory, target, and product context so commercial teams can decide where to intervene—not merely observe totals.",
    flow: ["Sales & stock feeds", "Distributor mapping", "Channel model", "Performance signals", "Commercial action"],
    technologyContext: ["SAP", "Excel & CSV", "SQL", "Power BI", "Tableau", "Qlik Sense"],
    sections: [
      {
        id: "why-totals-mislead",
        heading: "Why sales totals can mislead",
        paragraphs: [
          "A distributor can appear to perform well while inventory accumulates in the channel, a small number of products drive the result, or one territory masks weakness elsewhere. The model must distinguish sell-in, sell-out, returns, opening stock, closing stock, targets, and the timing of each measure.",
          "The goal is not a larger dashboard. It is a consistent commercial view that makes comparison fair and exceptions explainable.",
        ],
      },
      {
        id: "five-decisions",
        heading: "The five decisions to design around",
        paragraphs: ["A useful channel model should help commercial teams decide where attention and action are required."],
        bullets: [
          "Which distributors and territories are ahead or behind a comparable target?",
          "Which products are moving through the channel, and which are accumulating?",
          "Where is stock coverage inconsistent with recent demand or sales velocity?",
          "Which customers, outlets, or routes are contributing to a change in performance?",
          "What action should sales, supply, or channel teams take next—and who owns it?",
        ],
      },
      {
        id: "foundation",
        heading: "Build the foundation for fair comparison",
        paragraphs: [
          "Distributor names, product hierarchies, territories, calendars, units, currencies, and targets often arrive in different formats. A governed mapping layer is therefore part of the analytical product, not a background cleanup task.",
          "Once the model is stable, Power BI, Tableau, Qlik Sense, or Looker Studio can provide role-specific views for executives, sales managers, territory owners, and analysts.",
        ],
      },
      {
        id: "close-the-loop",
        heading: "Close the loop with commercial action",
        paragraphs: [
          "The strongest design records commentary, ownership, or follow-up outside or alongside the dashboard. This turns a monthly review into a repeatable management process and creates better evidence for future forecasting and recommendation models.",
        ],
      },
    ],
  },
  {
    slug: "airline-sales-analytics-beyond-route-performance",
    category: "Industry Intelligence",
    format: "Practical guide",
    title: "Airline sales analytics: compare bookings at the same horizon",
    excerpt:
      "A commercial model should connect route, market, channel, booking behavior, and sales activity without losing time context.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=86",
    alt: "Commercial aircraft in flight representing airline sales analytics",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "Airline performance must be understood across departure date, booking date, route, market, channel, and commercial activity. Losing any of those perspectives can produce the wrong signal.",
    flow: ["Booking & sales data", "Market hierarchy", "Time-aware model", "Commercial signals", "Sales action"],
    technologyContext: ["Cloud storage", "SQL", "Data warehouse", "Python", "Power BI", "Tableau"],
    sections: [
      {
        id: "time-has-more-than-one-meaning",
        heading: "Time has more than one meaning",
        paragraphs: [
          "Airline sales data is inherently time-sensitive. Booking date explains when demand materialized; departure date explains when capacity is consumed; reporting date determines what was knowable at a particular moment. Treating these as one calendar can distort comparison and trend analysis.",
          "A dependable model preserves those perspectives and supports like-for-like analysis across booking windows, travel periods, and prior snapshots.",
        ],
      },
      {
        id: "commercial-context",
        heading: "Route performance needs commercial context",
        paragraphs: [
          "A route total alone does not explain whether change came from a market, point of sale, agency, direct channel, cabin, fare family, customer segment, or sales initiative. The analytical model should connect these dimensions without overwhelming the user.",
        ],
        bullets: [
          "Separate flown, booked, cancelled, and adjusted measures clearly.",
          "Preserve route direction, market definitions, and network hierarchies.",
          "Compare performance at consistent booking horizons.",
          "Make channel and sales-owner context available for follow-up.",
        ],
      },
      {
        id: "from-view-to-action",
        heading: "Move from performance view to sales action",
        paragraphs: [
          "The executive layer should surface material changes and commercial risk. Diagnostic views can then help analysts and sales teams understand which markets, channels, or periods contributed to the movement.",
          "Forecasting can add value when the historical snapshots, event context, and capacity assumptions are sufficiently consistent. The model should support human commercial judgment rather than hide it behind a single prediction.",
        ],
      },
      {
        id: "governance",
        heading: "Treat definitions as part of the product",
        paragraphs: [
          "Revenue, bookings, passengers, segments, targets, and market groupings need explicit definitions and owners. That semantic governance is what allows sales, finance, network, and leadership teams to use the same analytical product confidently.",
        ],
      },
    ],
  },
  {
    slug: "build-the-pipeline-before-the-prediction",
    category: "Data Engineering",
    format: "Architecture perspective",
    title: "Data pipelines for AI: replay, reconcile, and validate",
    excerpt:
      "Why AI-ready data depends on observable pipelines, stable definitions, quality controls, and ownership—not model choice alone.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=86",
    alt: "Enterprise data center infrastructure supporting reliable data pipelines",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "A model cannot compensate for unstable inputs. AI readiness starts with observable ingestion, reproducible transformation, governed features, and evidence that the data represents the business process correctly.",
    flow: ["Source contracts", "Observable ingestion", "Quality controls", "Reusable data products", "Model-ready features"],
    technologyContext: ["AWS Glue", "Azure Data Factory", "Synapse", "Databricks", "PySpark", "BigQuery"],
    sections: [
      {
        id: "ai-failures-start-upstream",
        heading: "Many AI failures begin upstream",
        paragraphs: [
          "When a model produces unreliable output, attention naturally goes to the algorithm. But the cause is often a changing source extract, an undocumented business rule, missing historical context, inconsistent labels, or a pipeline that cannot reproduce the training dataset.",
          "Data engineering is therefore not a preliminary phase that ends when the first dataset arrives. It is the operational foundation that allows analysis and models to be trusted over time.",
        ],
      },
      {
        id: "design-for-observability",
        heading: "Design pipelines for observability",
        paragraphs: [
          "Whether the platform uses Azure Data Factory, AWS services, Google Cloud, Databricks, SQL, or PySpark, every critical pipeline should make freshness, volume, schema, quality, and failure state visible.",
          "A successful run is not enough. Teams need to know whether the delivered data is complete, timely, structurally valid, and consistent with the business process it represents.",
        ],
        bullets: [
          "Define a data contract for important sources and analytical products.",
          "Separate raw history from corrected and business-ready layers.",
          "Test business rules as well as technical schemas.",
          "Retain run metadata, lineage, and a clear path for incident ownership.",
        ],
      },
      {
        id: "create-reusable-products",
        heading: "Create reusable data products",
        paragraphs: [
          "Dashboards, forecasting, anomaly detection, and AI assistants often need the same core entities and measures. Reusable, documented data products reduce duplicated logic and make it easier to compare outputs across use cases.",
          "A warehouse, lakehouse, BigQuery, Synapse, Azure SQL, SQL Server, or MongoDB may form part of the platform. The architectural choice should follow workload, governance, cost, latency, and team capability—not fashion.",
        ],
      },
      {
        id: "test-readiness",
        heading: "Test readiness with operational questions",
        paragraphs: [
          "Can the team reproduce the data used for a model decision? Can it explain a missing record? Can it detect a source change before users do? Can it identify the owner of a failed quality rule? If not, the next investment should probably strengthen the pipeline before expanding the model.",
        ],
      },
    ],
  },
  {
    slug: "where-ai-automation-belongs-in-reporting",
    category: "AI & Automation",
    format: "Practical guide",
    title: "AI in reporting: automate the draft, keep the evidence",
    excerpt:
      "Use AI to reduce repetitive work, surface context, and coordinate action—while preserving review where judgment matters.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=86",
    alt: "Corporate team collaborating on an AI-enabled reporting workflow",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "The best first automation is a bounded workflow with trusted inputs, an explicit owner, visible evidence, and a clear handoff to a person when confidence or risk requires it.",
    flow: ["Trusted reporting data", "Business trigger", "AI-assisted task", "Human review", "Logged action"],
    technologyContext: ["Power Automate", "Power Apps", "Azure AI", "Python", "APIs", "Power BI"],
    sections: [
      {
        id: "find-the-repetition",
        heading: "Begin with repetition, not novelty",
        paragraphs: [
          "Reporting cycles contain repetitive work: collecting files, checking completeness, identifying material changes, preparing commentary, distributing outputs, requesting explanations, and tracking follow-up. These tasks create good automation candidates because the inputs, expected output, and owner can be defined.",
          "The objective should be a faster and more reliable workflow, not simply an AI demonstration.",
        ],
      },
      {
        id: "good-entry-points",
        heading: "Good entry points for automation",
        paragraphs: ["Automation should reduce coordination effort while keeping evidence and responsibility visible."],
        bullets: [
          "Validate that expected source files or pipeline loads have arrived.",
          "Detect and route material exceptions using agreed thresholds.",
          "Draft narrative summaries grounded in approved measures and definitions.",
          "Retrieve relevant policies, prior commentary, or operating guidance.",
          "Trigger approvals, reminders, and task ownership through existing workflows.",
        ],
      },
      {
        id: "keep-people-in-control",
        heading: "Keep people in control of consequential decisions",
        paragraphs: [
          "AI-generated explanations can sound confident even when important context is missing. A responsible design shows the evidence behind a statement, identifies the source and reporting period, communicates uncertainty, and routes sensitive outputs for review.",
          "Permissions should follow the underlying data, and every automated action should be traceable. This matters especially for financial, workforce, healthcare, and customer information.",
        ],
      },
      {
        id: "measure-workflow-value",
        heading: "Measure workflow value",
        paragraphs: [
          "Track time removed from repetitive steps, exception response, correction rates, adoption, and the amount of human rework required. These measures reveal whether the automation is becoming a dependable operating capability or remaining a fragile pilot.",
        ],
      },
    ],
  },
  {
    slug: "workforce-analytics-questions",
    category: "Industry Intelligence",
    format: "Practical guide",
    title: "Workforce analytics: define headcount before comparing teams",
    excerpt:
      "Organize headcount, movement, recruitment, attendance, and structure around workforce decisions—not isolated HR extracts.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=86",
    alt: "Professionals collaborating in a modern workplace",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "Workforce analytics should explain how the organization is changing, where capability or capacity is constrained, and which decisions require attention—within strict privacy and access controls.",
    flow: ["HR source systems", "Protected workforce model", "Decision measures", "Role-based views", "Planning action"],
    technologyContext: ["HRIS & payroll", "SQL", "Microsoft Fabric", "Power BI", "Tableau", "Power Automate"],
    sections: [
      {
        id: "move-beyond-headcount",
        heading: "Move beyond a headcount total",
        paragraphs: [
          "Headcount is important, but it cannot explain workforce movement, recruitment pressure, organizational concentration, absenteeism, tenure, capability, or future demand. Leaders need a model that connects these perspectives without exposing unnecessary individual-level data.",
        ],
      },
      {
        id: "questions",
        heading: "Questions worth designing around",
        paragraphs: ["The right questions create a more focused and responsible analytical product."],
        bullets: [
          "How is workforce capacity changing by function, location, level, and critical role?",
          "Where are recruitment pipelines slow, concentrated, or misaligned with demand?",
          "Which movement patterns require deeper qualitative investigation?",
          "How do attendance, vacancies, and workforce mix affect operational planning?",
          "Which measures are appropriate for leaders, managers, HR specialists, and analysts?",
        ],
      },
      {
        id: "privacy-by-design",
        heading: "Build privacy into the model",
        paragraphs: [
          "Workforce information requires strong role-based access, aggregation thresholds, careful treatment of sensitive attributes, and clear retention rules. A dashboard should never make personal data easier to access merely because it is easier to visualize.",
          "Definitions and historical treatment also matter. Organizational structures, manager assignments, job families, and employment status change over time and must be represented consistently for fair comparison.",
        ],
      },
      {
        id: "support-planning",
        heading: "Connect reporting with planning",
        paragraphs: [
          "The most useful workforce products connect current state, approved plans, recruitment activity, and operating demand. This enables a discussion about capacity and capability rather than a retrospective review of HR transactions.",
        ],
      },
    ],
  },
  {
    slug: "healthcare-operations-analytics-capacity",
    category: "Industry Intelligence",
    format: "Practical guide",
    title: "Healthcare operations: measure staffed capacity and service flow",
    excerpt:
      "Connect demand, service flow, workforce, and capacity using governed measures that support operational coordination.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=86",
    alt: "Healthcare professional using a digital device in a clinical setting",
    published: "September 2026",
    datePublished: "2026-09-02",
    author: "GGMS Analytics",
    keyTakeaway:
      "Healthcare operational reporting should help teams coordinate demand, capacity, flow, and resources while protecting sensitive information and preserving the clinical context behind every measure.",
    flow: ["Operational sources", "Governed definitions", "Capacity model", "Service signals", "Coordinated response"],
    technologyContext: ["Azure", "SQL", "Data warehouse", "Python", "Power BI", "Data governance"],
    sections: [
      {
        id: "operational-question",
        heading: "Start with the operational question",
        paragraphs: [
          "Healthcare environments generate many measures, but a large reporting catalogue does not automatically improve service coordination. The analytical product should begin with a concrete question about demand, capacity, resource allocation, service flow, or performance.",
          "The reporting grain must reflect the level at which teams can respond while avoiding unnecessary exposure of patient or workforce information.",
        ],
      },
      {
        id: "definitions",
        heading: "Make definitions operationally credible",
        paragraphs: [
          "Measures such as capacity, utilization, waiting time, attendance, cancellation, or service completion can be interpreted differently across locations and teams. Definitions should be developed with operational and domain owners and tested against real workflows.",
        ],
        bullets: [
          "Document inclusion, exclusion, and timing rules for every critical measure.",
          "Separate data availability from true operational capacity.",
          "Make late or incomplete source data visible to the user.",
          "Apply privacy, access, aggregation, and audit controls by design.",
        ],
      },
      {
        id: "layered-experience",
        heading: "Create a layered decision experience",
        paragraphs: [
          "Leadership needs a concise view of material service and capacity signals. Operational teams need timely detail to coordinate work. Analysts need governed access for investigation and planning. These views should be different interfaces over the same trusted model.",
        ],
      },
      {
        id: "prediction-with-context",
        heading: "Introduce prediction with context",
        paragraphs: [
          "Forecasting demand or detecting unusual service patterns can support planning, but models need stable historical definitions, transparent limitations, monitoring, and human review. Prediction should strengthen operational judgment rather than create an unexplained instruction.",
        ],
      },
    ],
  },
  {
    slug: "social-media-analytics-beyond-vanity-metrics",
    category: "Analytics & BI",
    format: "Practical guide",
    title: "Social media analytics: reach, response, and measurement gaps",
    excerpt:
      "Connect content, audience, campaign, engagement, and conversion signals so teams can understand what changed and decide what to do next.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=86",
    alt: "Marketing team reviewing campaign ideas and audience activity in a workshop",
    published: "September 2026",
    datePublished: "2026-09-04",
    author: "GGMS Analytics",
    keyTakeaway:
      "Social media reporting becomes useful when it separates activity from attention, attention from response, and response from business action across a consistent campaign and audience model.",
    flow: ["Platform data", "Content taxonomy", "Audience signals", "Performance context", "Marketing action"],
    technologyContext: ["Platform APIs", "BigQuery", "Python", "SQL", "Looker Studio", "Power BI"],
    sections: [
      {
        id: "activity-is-not-an-outcome",
        heading: "Activity is not the same as an outcome",
        paragraphs: [
          "Posts, impressions, reactions, comments, clicks, and followers describe different stages of audience behavior. Combining them into one performance score can hide whether a campaign created attention, generated a meaningful response, or simply increased publishing volume.",
          "A credible model preserves the original platform measures while placing them within campaign objective, audience, market, content theme, placement, and time context.",
        ],
      },
      {
        id: "create-a-content-taxonomy",
        heading: "Create a taxonomy the business can maintain",
        paragraphs: [
          "Content labels are often inconsistent across teams and platforms. A controlled taxonomy for objective, theme, product, audience, market, format, and campaign allows performance to be compared without forcing analysts to interpret every post manually.",
        ],
        bullets: [
          "Keep platform-native definitions visible instead of pretending every engagement is equivalent.",
          "Separate paid, owned, partner, and organic activity.",
          "Record campaign and content metadata close to the publishing workflow.",
          "Treat sentiment or text classification as supporting evidence, not unquestionable truth.",
        ],
      },
      {
        id: "connect-response",
        heading: "Connect response without overclaiming attribution",
        paragraphs: [
          "Website visits, lead events, app activity, enquiries, and sales can add valuable context when identifiers and consent allow. The reporting layer should distinguish observed journeys from modeled contribution and acknowledge where platforms or privacy controls limit visibility.",
          "This creates a more honest conversation about influence and conversion than assigning every outcome to the last available click.",
        ],
      },
      {
        id: "design-the-review",
        heading: "Design the marketing review around decisions",
        paragraphs: [
          "The useful output is a repeatable review of what changed, which audiences or themes contributed, what evidence is available, and which content, channel, or campaign action should follow. Automation can prepare the evidence; people should retain responsibility for brand and investment decisions.",
        ],
      },
    ],
  },
  {
    slug: "ecommerce-analytics-connect-demand-margin-fulfilment",
    category: "Analytics & BI",
    format: "Architecture perspective",
    title: "E-commerce analytics: reconcile orders, refunds, and margin",
    excerpt:
      "A dependable commerce model follows the customer and order journey from demand creation through payment, delivery, returns, and contribution.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=86",
    alt: "Customer completing a digital payment in a real retail environment",
    published: "September 2026",
    datePublished: "2026-09-04",
    author: "GGMS Analytics",
    keyTakeaway:
      "Commerce performance cannot be understood from orders alone. Customer acquisition, payment, inventory, fulfilment, cancellation, return, discount, and product cost must remain connected at a usable grain.",
    flow: ["Traffic & campaigns", "Customer journey", "Order & payment", "Fulfilment & returns", "Margin action"],
    technologyContext: ["Commerce APIs", "Google Analytics 4", "BigQuery", "SQL", "Looker Studio", "Power BI"],
    sections: [
      {
        id: "one-order-many-events",
        heading: "One order is a chain of events",
        paragraphs: [
          "An order may be created, paid, partially fulfilled, cancelled, returned, refunded, discounted, or replaced at different times. Reporting only the creation event can overstate demand and disconnect commercial performance from the customer experience and operational cost.",
          "The data model should preserve order, item, customer, product, payment, promotion, shipment, and return identifiers so each view can be reconciled to the underlying journey.",
        ],
      },
      {
        id: "reconcile-commercial-meaning",
        heading: "Reconcile commercial meaning before visualizing it",
        paragraphs: [
          "Revenue, gross sales, net sales, discount, refund, shipping income, tax, product cost, and channel fees require explicit treatment. Finance, commercial, product, and operations teams should approve the definitions and timing rules used in the analytical layer.",
        ],
        bullets: [
          "Separate order date, payment date, fulfilment date, and return date.",
          "Preserve original currency and approved conversion treatment.",
          "Make cancellations, partial returns, and failed payments visible.",
          "Connect stock availability and fulfilment performance to conversion signals.",
        ],
      },
      {
        id: "serve-different-decisions",
        heading: "Serve different decisions from one governed model",
        paragraphs: [
          "Leadership needs growth, margin, customer, and service signals. Trading teams need product, pricing, and promotion detail. Operations needs inventory, fulfilment, cancellation, and return visibility. Marketing needs acquisition and journey context. These views should use the same reconciled facts rather than separate exports.",
        ],
      },
      {
        id: "introduce-prediction-carefully",
        heading: "Introduce prediction after the journey is stable",
        paragraphs: [
          "Demand forecasting, propensity, recommendations, and churn models become more useful when historical availability, promotions, customer consent, fulfilment, and returns are represented accurately. A model should not learn that an unavailable product had no demand or that a refunded order created full value.",
        ],
      },
    ],
  },
  {
    slug: "marketing-measurement-before-attribution",
    category: "Analytics & BI",
    format: "Practical guide",
    title: "Marketing measurement: what evidence should change the budget?",
    excerpt:
      "Align objectives, spend, audiences, campaigns, journeys, and commercial outcomes before selecting a more sophisticated measurement method.",
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1800&q=86",
    alt: "Marketing professional working with campaign and digital performance information",
    published: "September 2026",
    datePublished: "2026-09-04",
    author: "GGMS Analytics",
    keyTakeaway:
      "Marketing measurement should make an investment decision clearer. Attribution is one method inside that system, not a replacement for agreed objectives, reliable costs, consistent campaign metadata, and commercial context.",
    flow: ["Objectives & spend", "Campaign taxonomy", "Journey signals", "Measurement method", "Investment decision"],
    technologyContext: ["Advertising APIs", "Google Analytics 4", "BigQuery", "SQL", "Python", "Looker Studio"],
    sections: [
      {
        id: "start-with-the-decision",
        heading: "Start with the investment decision",
        paragraphs: [
          "A measurement program should identify which decisions it must support: reallocating budget, improving creative, changing audience strategy, managing channel mix, or understanding incremental demand. Without that anchor, teams often produce a larger reporting catalogue while the investment conversation remains unchanged.",
        ],
      },
      {
        id: "establish-shared-language",
        heading: "Establish a shared campaign language",
        paragraphs: [
          "Platform exports organize activity differently. A governed taxonomy for objective, campaign, audience, market, product, channel, creative, and period creates a common layer without erasing platform-specific detail.",
        ],
        bullets: [
          "Reconcile spend and delivery data before comparing efficiency.",
          "Define which conversion events represent real business value.",
          "Separate observed behavior from modeled contribution.",
          "Record important pricing, promotion, inventory, and market context.",
        ],
      },
      {
        id: "choose-method-by-question",
        heading: "Choose the measurement method by question",
        paragraphs: [
          "Journey reporting, controlled experiments, incrementality analysis, media-mix modeling, and attribution answer different questions and require different data. A mature approach uses methods together, tests assumptions, and communicates uncertainty instead of presenting one model as universal truth.",
        ],
      },
      {
        id: "close-the-learning-loop",
        heading: "Close the learning loop",
        paragraphs: [
          "The final product should connect evidence, interpretation, decision, owner, and result. Recording what the team changed—and what happened afterward—creates a stronger learning system than repeatedly reviewing campaign totals without an accountable action.",
        ],
      },
    ],
  },
];

export const insightArticles: InsightArticle[] = articleDrafts.map((article) => {
  const note = insightNotes[article.slug];
  if (!note) throw new Error(`Missing editorial review for ${article.slug}`);
  const sections = [{ id: "checks-before-release", heading: note.heading, paragraphs: [note.detail], bullets: note.checks }, ...article.sections];
  const words = [article.title, article.excerpt, article.keyTakeaway, ...article.flow, ...article.technologyContext,
    ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])])].join(" ").trim().split(/\s+/).length;
  return { ...article, sections, sources: note.sources, dateModified: article.datePublished, readTime: `${Math.max(1, Math.ceil(words / 200))} min read` };
});

export function getInsightBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

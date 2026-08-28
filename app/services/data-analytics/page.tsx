import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "../../components/ServiceDetailPage";

export const metadata: Metadata = { title: "Business Intelligence & Analytics | GGMS Analytics", description: "Turn trusted data into governed Power BI dashboards, KPI systems, and analytics that improve everyday decision-making." };

const content: ServicePageContent = {
  eyebrow: "Business Intelligence & Analytics", heroTitle: "See what matters.", heroAccent: "Act with confidence.", heroDescription: "We turn complex operational data into clear metrics, governed dashboards, and decision systems people actually use.", heroImage: "/images/services/data-analytics-hero.png", heroAlt: "Executive analytics dashboards presenting clear business performance signals",
  problemLabel: "Clarity over reporting noise", problemTitle: "A dashboard should answer questions—not create more.",
  problemParagraphs: ["Many organizations have plenty of reports but no shared view of performance. Metrics conflict, refreshes depend on manual effort, and important questions still require another spreadsheet.", "We connect business context with analytical design—creating trusted models, meaningful KPIs, and focused experiences for executives, managers, and operational teams."],
  capabilities: [
    { title: "Executive & operational dashboards", text: "Design focused Power BI experiences that make performance, exceptions, trends, and required actions immediately clear." },
    { title: "Semantic models & KPIs", text: "Create governed measures, relationships, hierarchies, and definitions that give every report a consistent analytical foundation." },
    { title: "Automated reporting", text: "Replace manual preparation with scheduled refreshes, subscriptions, alerts, and controlled distribution." },
    { title: "Self-service analytics", text: "Enable approved users to explore trusted data safely without rebuilding business logic in every report." },
  ],
  technologies: [
    { group: "Analytics", items: ["Power BI", "Microsoft Fabric", "Excel", "Paginated Reports"] },
    { group: "Modeling", items: ["DAX", "Power Query", "Semantic Models", "Tabular Editor"] },
    { group: "Data platforms", items: ["SQL Server", "Azure Synapse", "Databricks", "SAP"] },
    { group: "Governance & delivery", items: ["Row-Level Security", "Microsoft Purview", "Git", "Deployment Pipelines"] },
  ],
  processTitle: "From business questions to daily decisions", processDescription: "The work begins with how decisions are made—not with choosing a chart type.",
  steps: [
    { title: "Align", text: "Identify audiences, decisions, questions, KPIs, business definitions, and current reporting pain." },
    { title: "Audit", text: "Assess source quality, existing reports, calculations, security, refresh constraints, and usage." },
    { title: "Model", text: "Build a reusable semantic layer with governed relationships, measures, and dimensions." },
    { title: "Design", text: "Translate analytical priorities into clear visual hierarchy, navigation, and interaction." },
    { title: "Validate", text: "Reconcile results, test security and performance, and validate usability with real users." },
    { title: "Launch & enable", text: "Deploy, document, train users, monitor adoption, and refine based on decision value." },
  ],
  useCaseTitle: "Analytics people return to every day", useCaseDescription: "The strongest solutions connect a clear audience with a recurring decision and a trusted source of truth.",
  useCases: ["Executive performance scorecards", "Finance and expenditure reporting", "Sales and customer analytics", "Operations and supply-chain monitoring", "Automated management reporting", "Governed self-service analytics"],
  controlsLabel: "Governed analytics", controlsTitle: "One version of the truth, securely delivered", controlsDescription: "The experience must be simple for users while definitions, permissions, and quality remain controlled underneath.",
  controls: [
    { title: "Metric governance", text: "Approved KPI definitions and measures prevent competing versions of performance." },
    { title: "Access control", text: "Workspace, app, object, and row-level permissions protect sensitive views." },
    { title: "Quality assurance", text: "Reconciliation, refresh monitoring, and acceptance testing build confidence in results." },
    { title: "Adoption & usability", text: "Usage monitoring, training, and iterative design keep reports relevant." },
  ],
  deliverablesTitle: "A complete analytical product", deliverablesDescription: "You receive more than report pages: the governed model, operating controls, and enablement behind them.",
  deliverables: ["Production-ready dashboards and reports", "Governed semantic model and KPI catalogue", "Automated refresh, subscriptions, and alerts", "Role-based access and security configuration", "User guidance and technical documentation", "Deployment, training, and adoption plan"],
  ctaLabel: "Need clearer decisions?", ctaTitle: "Let’s turn your reporting into a trusted decision system.", ctaButton: "Discuss your analytics needs",
};

export default function DataAnalytics() { return <ServiceDetailPage content={content} />; }

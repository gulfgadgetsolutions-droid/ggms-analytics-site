import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "../../components/ServiceDetailPage";

export const metadata: Metadata = { title: "Data & AI Strategy", description: "Assess readiness, prioritize high-value opportunities, and create a practical roadmap for data, analytics, and AI investment.", alternates: { canonical: "/services/data-ai-strategy" } };

const content: ServicePageContent = {
  eyebrow: "Data & AI Strategy", heroTitle: "Turn ambition into", heroAccent: "an achievable roadmap.", heroDescription: "We connect business priorities, data readiness, technology, and governance into a clear plan for measurable data and AI progress.", heroImage: "/images/services/data-ai-strategy-hero.png", heroAlt: "A strategic compass connecting current data systems to a phased data and AI roadmap",
  problemLabel: "Direction before investment", problemTitle: "Start with the decisions—not the technology.",
  problemParagraphs: ["Data and AI initiatives often stall because the organization starts with a platform, model, or trend before agreeing on the business outcome and the capabilities required to reach it.", "We help leadership understand the current landscape, identify valuable opportunities, make informed technology choices, and sequence investment into a roadmap teams can realistically deliver."],
  capabilities: [
    { title: "Maturity & readiness assessment", text: "Evaluate data, architecture, analytics, AI, governance, talent, processes, and operating readiness against business goals." },
    { title: "Use-case discovery & prioritization", text: "Turn business challenges into a ranked portfolio based on value, feasibility, risk, dependencies, and time to impact." },
    { title: "Target architecture & technology", text: "Define the future-state platform, integration patterns, tooling principles, and transition path without forcing unnecessary change." },
    { title: "Governance & operating model", text: "Clarify ownership, decision rights, quality, security, responsible AI, delivery responsibilities, and measures of success." },
  ],
  technologies: [
    { group: "Strategy & architecture", items: ["Capability Mapping", "Target Architecture", "Roadmapping", "TCO Analysis"] },
    { group: "Data platforms", items: ["Microsoft Fabric", "Azure", "Databricks", "SQL Server"] },
    { group: "Analytics & AI", items: ["Power BI", "Azure OpenAI", "Machine Learning", "Automation"] },
    { group: "Governance", items: ["Microsoft Purview", "Responsible AI", "Data Quality", "Security Design"] },
  ],
  processTitle: "From current reality to a sequenced plan", processDescription: "The strategy is built with the people who must sponsor, deliver, govern, and use it.",
  steps: [
    { title: "Align", text: "Confirm business priorities, strategic questions, stakeholders, constraints, and desired outcomes." },
    { title: "Assess", text: "Review data, platforms, reporting, AI readiness, governance, skills, costs, and delivery capability." },
    { title: "Discover", text: "Identify opportunities across decisions, customer experience, operations, risk, and productivity." },
    { title: "Prioritize", text: "Score use cases by value, feasibility, data readiness, risk, dependencies, and time to impact." },
    { title: "Design", text: "Define target capabilities, architecture, governance, operating model, and guiding technology choices." },
    { title: "Roadmap", text: "Sequence foundations, quick wins, investments, ownership, measures, and decision gates into phases." },
  ],
  useCaseTitle: "A strong starting point for uncertain or complex change", useCaseDescription: "Strategy is most valuable when multiple needs compete for investment or the path from ambition to execution is unclear.",
  useCases: ["Enterprise data and AI roadmap", "Analytics modernization planning", "AI opportunity and readiness assessment", "Cloud data-platform business case", "Data governance operating model", "Post-merger data landscape rationalization"],
  controlsLabel: "Practical governance", controlsTitle: "Innovation with clear ownership and boundaries", controlsDescription: "Governance should help valuable work move safely—not become a document nobody can operate.",
  controls: [
    { title: "Business ownership", text: "Every priority has an accountable outcome owner and measurable definition of value." },
    { title: "Data responsibility", text: "Critical domains, definitions, quality expectations, and stewardship are made explicit." },
    { title: "Responsible AI", text: "Risk classification, oversight, transparency, privacy, and acceptable-use principles guide adoption." },
    { title: "Investment governance", text: "Decision gates and outcome measures allow leadership to scale, redirect, or stop initiatives." },
  ],
  deliverablesTitle: "A strategy built to be executed", deliverablesDescription: "The engagement ends with concrete decisions, visual architecture, ownership, and a phased path forward.",
  deliverables: ["Current-state maturity and readiness assessment", "Prioritized portfolio of data and AI opportunities", "Target data, analytics, and AI architecture", "Governance and operating-model recommendations", "Phased implementation and investment roadmap", "Executive readout and delivery handover"],
  ctaLabel: "Unsure where to begin?", ctaTitle: "Let’s turn your data and AI priorities into a focused plan.", ctaButton: "Discuss your strategy",
};

export default function DataAiStrategy() { return <ServiceDetailPage content={content} />; }

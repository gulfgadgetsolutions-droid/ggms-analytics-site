import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "../../components/ServiceDetailPage";

export const metadata: Metadata = { title: "Data Engineering & Cloud Platforms", description: "Build reliable pipelines, integrations, warehouses, and cloud data platforms that make business data trusted and usable.", alternates: { canonical: "/services/data-engineering" } };

const content: ServicePageContent = {
  eyebrow: "Data Engineering & Cloud Platforms",
  heroTitle: "Build a foundation",
  heroAccent: "your data can trust.",
  heroDescription: "We connect, transform, and organize enterprise data into reliable platforms built for analytics, AI, and everyday decisions.",
  heroImage: "/images/services/data-engineering-hero-composite.webp",
  heroAlt: "Real data centre infrastructure with an integrated dimensional data pipeline",
  problemLabel: "The foundation matters",
  problemTitle: "Reliable decisions begin with reliable data.",
  problemParagraphs: ["Most data problems do not begin in a dashboard. They begin upstream—in disconnected systems, fragile manual extracts, inconsistent definitions, and pipelines nobody fully owns.", "We design the architecture and engineering layer that turns those sources into governed, timely, reusable data products. Everything downstream becomes easier to trust, scale, and maintain."],
  capabilities: [
    { title: "Data pipelines & orchestration", text: "Design resilient ETL and ELT workflows with scheduling, dependencies, monitoring, and recoverable failure handling." },
    { title: "Enterprise integration", text: "Connect SAP, SQL Server, applications, files, APIs, and cloud services through secure, maintainable integration patterns." },
    { title: "Warehouses & lakehouses", text: "Create analytical platforms and dimensional models structured for reporting, exploration, machine learning, and growth." },
    { title: "Cloud modernization", text: "Move legacy data workloads toward scalable cloud architecture without losing operational continuity or governance." },
  ],
  technologies: [
    { group: "Cloud data", items: ["Microsoft Fabric", "Azure Data Factory", "Azure Synapse", "Databricks"] },
    { group: "Sources & storage", items: ["SAP", "SQL Server", "Azure Data Lake", "PostgreSQL"] },
    { group: "Engineering", items: ["Python", "SQL", "PySpark", "REST APIs"] },
    { group: "Delivery & operations", items: ["GitHub", "Azure DevOps", "Docker", "Azure Monitor"] },
  ],
  processTitle: "From source systems to dependable data products",
  processDescription: "Every stage makes ownership, quality, security, and operations explicit.",
  steps: [
    { title: "Discover", text: "Map sources, consumers, business definitions, constraints, volumes, and service expectations." },
    { title: "Architect", text: "Define ingestion, storage, transformation, modeling, security, and operating patterns." },
    { title: "Connect", text: "Integrate source systems securely using appropriate batch, event, API, or file-based methods." },
    { title: "Transform", text: "Standardize, validate, reconcile, and model data into reusable business-ready layers." },
    { title: "Test", text: "Validate completeness, accuracy, performance, resilience, security, and recovery behavior." },
    { title: "Deploy & operate", text: "Automate releases, monitoring, lineage, documentation, alerts, and ongoing improvement." },
  ],
  useCaseTitle: "Engineering for real enterprise complexity",
  useCaseDescription: "We focus on the foundations that unblock reporting, analytics, operations, and future AI initiatives.",
  useCases: ["SAP and SQL Server integration", "Excel and file-based reporting modernization", "Cloud warehouse or lakehouse implementation", "Automated ingestion from APIs and applications", "Legacy ETL migration and performance improvement", "Reusable governed data products for multiple teams"],
  controlsLabel: "Quality, security & operations",
  controlsTitle: "Trust designed into every pipeline",
  controlsDescription: "A data platform is valuable only when teams can rely on what it produces and understand how it operates.",
  controls: [
    { title: "Data quality", text: "Validation, reconciliation, freshness, and completeness checks surface issues early." },
    { title: "Secure access", text: "Identity, encryption, network controls, and least-privilege permissions protect data." },
    { title: "Lineage & definitions", text: "Documented transformations and business definitions make outputs explainable." },
    { title: "Operational resilience", text: "Monitoring, alerts, retries, and recovery procedures keep critical flows dependable." },
  ],
  deliverablesTitle: "A platform your team can build on",
  deliverablesDescription: "The engagement includes the working solution and the operational knowledge needed to own it.",
  deliverables: ["Production-ready data pipelines and integrations", "Warehouse, lakehouse, and analytical data models", "Automated data-quality checks and monitoring", "Security and access-control configuration", "Architecture, lineage, and operating documentation", "Deployment, knowledge transfer, and support plan"],
  ctaLabel: "Ready for dependable data?", ctaTitle: "Let’s design the foundation behind your next decision.", ctaButton: "Discuss your data platform",
};

export default function DataEngineering() { return <ServiceDetailPage content={content} />; }

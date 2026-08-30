import type { Metadata } from "next";
import ServiceDetailPage, { type ServicePageContent } from "../../components/ServiceDetailPage";

export const metadata: Metadata = { title: "Data Science & Machine Learning", description: "Apply forecasting, predictive modeling, segmentation, and anomaly detection to measurable business decisions.", alternates: { canonical: "/services/data-science" } };

const content: ServicePageContent = {
  eyebrow: "Data Science & Machine Learning", heroTitle: "Move from hindsight", heroAccent: "to foresight.", heroDescription: "We develop practical predictive solutions that help teams anticipate demand, identify risk, understand behavior, and act earlier.", heroImage: "/images/services/data-science-hero.png", heroAlt: "Historical data transformed into forecasts, clusters, and anomaly signals",
  problemLabel: "Prediction with a purpose", problemTitle: "A model is useful only when it improves a decision.",
  problemParagraphs: ["Organizations often have years of historical data but still plan through intuition, static averages, and manual rules. Data science can reveal patterns that are difficult to see—but experimentation alone does not create value.", "We begin with the decision, the action it enables, and the cost of being wrong. The resulting solution is designed around measurable outcomes, usable outputs, and a realistic path into operations."],
  capabilities: [
    { title: "Forecasting & planning", text: "Predict demand, revenue, workload, inventory, or resource needs with uncertainty made visible." },
    { title: "Predictive modeling", text: "Estimate risk, propensity, outcomes, and operational behavior using appropriate statistical and machine-learning methods." },
    { title: "Segmentation & pattern discovery", text: "Identify meaningful groups, behaviors, and drivers that support better targeting and strategy." },
    { title: "Anomaly detection", text: "Surface unusual transactions, equipment behavior, data changes, or operating conditions for timely review." },
  ],
  technologies: [
    { group: "Modeling", items: ["Python", "scikit-learn", "XGBoost", "statsmodels"] },
    { group: "Data & scale", items: ["SQL", "Pandas", "PySpark", "Databricks"] },
    { group: "Experimentation", items: ["Jupyter", "MLflow", "Azure Machine Learning", "Git"] },
    { group: "Delivery", items: ["FastAPI", "Docker", "Power BI", "Azure"] },
  ],
  processTitle: "From business hypothesis to operational intelligence", processDescription: "Each stage tests whether the solution is accurate, useful, explainable, and deployable.",
  steps: [
    { title: "Frame", text: "Define the decision, target outcome, available action, baseline, constraints, and success measure." },
    { title: "Explore", text: "Profile data, test assumptions, identify bias and leakage, and establish feasibility." },
    { title: "Engineer", text: "Create reliable features and repeatable datasets aligned with production availability." },
    { title: "Model", text: "Compare suitable methods and tune for business value—not a single technical metric." },
    { title: "Validate", text: "Test robustness, explainability, fairness, uncertainty, and performance on unseen scenarios." },
    { title: "Deploy & monitor", text: "Integrate outputs into workflows and monitor drift, quality, adoption, and realized value." },
  ],
  useCaseTitle: "Models connected to measurable action", useCaseDescription: "We prioritize use cases with a clear decision owner, usable historical data, and an outcome the business can measure.",
  useCases: ["Demand and revenue forecasting", "Customer segmentation and propensity", "Operational risk prediction", "Fraud and anomaly detection", "Predictive maintenance", "Scenario modeling and optimization"],
  controlsLabel: "Responsible modeling", controlsTitle: "Performance that remains explainable and monitored", controlsDescription: "Production data science requires controls around the data, the model, and the decisions influenced by it.",
  controls: [
    { title: "Explainability", text: "Drivers, confidence, and limitations are communicated in a form decision-makers can use." },
    { title: "Bias & leakage checks", text: "Data and validation design are reviewed for misleading signals and unfair outcomes." },
    { title: "Human judgment", text: "High-impact predictions support accountable decisions rather than silently replacing them." },
    { title: "Model monitoring", text: "Drift, data quality, performance, and usage are tracked after deployment." },
  ],
  deliverablesTitle: "An operational solution, not a notebook", deliverablesDescription: "The final package connects validated modeling work with the workflow, controls, and knowledge needed to use it.",
  deliverables: ["Validated predictive or analytical model", "Repeatable feature and training pipeline", "Decision-ready outputs, API, or dashboard", "Model evaluation and explainability report", "Monitoring and retraining approach", "Technical documentation and team handover"],
  ctaLabel: "Have a decision to improve?", ctaTitle: "Let’s test where predictive intelligence can create real value.", ctaButton: "Discuss your use case",
};

export default function DataScience() { return <ServiceDetailPage content={content} />; }

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Data & AI Services",
  description: "Explore six connected services spanning data and AI strategy, engineering, analytics, data science, intelligent automation, and managed support.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    href: "/services/data-ai-strategy",
    title: "Data & AI Strategy",
    summary: "Turn business priorities, data readiness, and technology choices into a practical roadmap.",
    capabilities: ["Maturity assessment", "Use-case prioritization", "Target architecture", "Governance roadmap"],
    outcome: "Plan",
  },
  {
    href: "/services/data-engineering",
    title: "Data Engineering & Cloud Platforms",
    summary: "Build dependable pipelines, integrations, warehouses, and cloud data platforms.",
    capabilities: ["ETL and ELT pipelines", "SAP and SQL integration", "Lakehouse architecture", "Cloud modernization"],
    outcome: "Build",
  },
  {
    href: "/services/data-analytics",
    title: "Business Intelligence & Analytics",
    summary: "Create trusted KPI systems, semantic models, and dashboards people actually use.",
    capabilities: ["Power BI dashboards", "Semantic models", "Automated reporting", "Self-service analytics"],
    outcome: "Understand",
  },
  {
    href: "/services/data-science",
    title: "Data Science & Machine Learning",
    summary: "Use forecasting and predictive modeling to anticipate outcomes and act earlier.",
    capabilities: ["Forecasting", "Predictive models", "Segmentation", "Anomaly detection"],
    outcome: "Predict",
  },
  {
    href: "/services/ai-automation",
    title: "Generative AI, Agentic AI & Automation",
    summary: "Connect intelligent assistants and governed AI agents to real business workflows.",
    capabilities: ["Generative AI apps", "AI agents", "Knowledge assistants", "Workflow automation"],
    outcome: "Automate",
  },
  {
    href: "/services/managed-data-ai",
    title: "Managed Data & AI Services",
    summary: "Keep critical data, analytics, and AI systems reliable, supported, and improving.",
    capabilities: ["Platform monitoring", "Incident support", "Quality management", "Continuous optimization"],
    outcome: "Operate",
  },
];

export default function Services() {
  return (
    <main className="depth-page depth-services min-h-screen bg-white text-slate-950">
      <Navbar />

      <section className="depth-hero relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />
        <div className="depth-hero-copy relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Our Services
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            One connected journey from
            <span className="block text-cyan-600">strategy to sustained value.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Six focused practices help organizations plan, build, understand, predict, automate, and operate with data and AI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="depth-panel mb-14 overflow-x-auto rounded-2xl border border-slate-200 bg-slate-100/80 px-5 py-5">
          <div className="mx-auto flex min-w-[720px] items-center justify-center">
            {services.map((service, index) => (
              <div key={service.outcome} className="flex items-center">
                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-800">{service.outcome}</span>
                {index < services.length - 1 && <span className="mx-2 h-px w-6 bg-slate-300" />}
              </div>
            ))}
          </div>
        </div>

        <div className="depth-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="premium-card depth-card group flex min-h-[390px] flex-col rounded-2xl p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.45)]" />
                <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition group-hover:border-cyan-300 group-hover:bg-cyan-50 group-hover:text-cyan-700" aria-hidden="true">→</span>
              </div>
              <h2 className="mt-8 text-2xl font-semibold leading-tight tracking-tight">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{service.summary}</p>
              <ul className="mt-7 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />{capability}</li>
                ))}
              </ul>
              <span className="mt-auto pt-8 text-sm font-semibold text-cyan-700">Explore {service.outcome.toLowerCase()} services <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 sm:pb-32">
        <div className="depth-panel mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 text-center text-white shadow-2xl shadow-slate-900/15 sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">Not sure which service fits?</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Start with the business challenge. We&apos;ll help identify the right next step.</h2>
          <Link href="/lets-talk" className="mt-8 inline-flex rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">Talk to Us <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

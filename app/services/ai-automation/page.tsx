import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Generative AI, Agentic AI & Intelligent Automation | GGMS Analytics",
  description: "Build governed generative AI applications, enterprise assistants, agentic workflows, and intelligent automation connected to real business systems.",
};

const capabilities = [
  ["Generative AI applications", "Build secure, task-focused applications for search, summarization, content creation, analysis, and conversational access to business knowledge."],
  ["Enterprise knowledge assistants", "Give teams fast, permission-aware answers from policies, documents, project files, and operational knowledge—with source citations."],
  ["Agentic workflow automation", "Design AI agents that plan, use approved tools, coordinate steps, and complete controlled business tasks across systems."],
  ["Multi-agent orchestration", "Coordinate specialist agents, business rules, memory, approvals, and exception handling for complex end-to-end workflows."],
  ["Document intelligence", "Extract, classify, validate, summarize, and route information from invoices, contracts, forms, emails, and other content."],
  ["AI integration & operations", "Connect AI to ERP, CRM, data platforms, and APIs, then monitor quality, cost, safety, and performance after launch."],
];

const steps = [
  ["Workflow assessment", "Identify tasks, applications, data sources, business rules, approval points, and exceptions."],
  ["Solution architecture", "Decide what needs conventional automation, AI reasoning, or human judgment."],
  ["Data & system integration", "Securely connect documents, databases, APIs, email, ERP, CRM, and reporting systems."],
  ["AI development", "Configure retrieval, prompts, extraction, classification, agents, and business logic."],
  ["Testing & safeguards", "Test accuracy, permissions, unusual cases, failure handling, and approval paths."],
  ["Deploy & improve", "Release responsibly, monitor quality and cost, and refine the system with real usage."],
];

const technologyGroups = [
  ["Models & AI", ["Azure OpenAI", "OpenAI", "Claude", "Gemini", "Embeddings"]],
  ["Agents & automation", ["AI Agents", "Tool Calling", "Power Automate", "n8n", "Make"]],
  ["Knowledge & integration", ["RAG", "Vector Search", "REST APIs", "SQL", "Microsoft Fabric"]],
  ["LLMOps & delivery", ["Evaluation", "Observability", "Python", "FastAPI", "Azure", "Docker"]],
];

const safeguards = [
  ["Controlled access", "Role-based permissions ensure people and systems only reach the information they are authorized to use."],
  ["Human oversight", "High-impact decisions and uncertain results can be routed to the right person before an action is taken."],
  ["Traceable answers", "Knowledge assistants can link answers back to their source material, making results easier to verify."],
  ["Observable systems", "Logging, monitoring, and failure alerts provide visibility after the automation goes live."],
];

const deliverables = [
  "Production-ready generative or agentic AI solution",
  "Integration with agreed ERP, CRM, data, and business systems",
  "Knowledge retrieval, tools, prompts, and orchestration logic",
  "Access controls, guardrails, and human approval mechanisms",
  "Evaluation, monitoring, logging, cost, and failure alerts",
  "Technical documentation, operating guidance, and team handover",
];

const useCases = [
  "Turn incoming emails and forms into structured, assigned work",
  "Coordinate multi-step operational work with supervised AI agents",
  "Search internal knowledge and cite the source behind every answer",
  "Flag unusual transactions or operational events for review",
  "Extract key fields from invoices, contracts, and service documents",
  "Keep people in control with approvals for high-impact actions",
];

export default function AiAutomation() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative isolate min-h-[720px] overflow-hidden bg-slate-50 text-slate-950">
        <Image
          src="/images/services/ai-automation-hero.png"
          alt="An intelligent automation engine connecting business data to trusted outputs"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[70%_center] opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30" />
        <div className="absolute inset-y-0 left-0 w-3/5 bg-[radial-gradient(circle_at_30%_45%,rgba(34,211,238,0.11),transparent_55%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-600/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" /> Generative AI · Agentic AI · Automation
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Make the work flow.
              <span className="block bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">Intelligently.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              We build governed generative AI applications, enterprise assistants, and agentic workflows that connect knowledge, decisions, and business systems.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/#contact" className="premium-glow inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-600">Explore your use case <span aria-hidden="true">→</span></Link>
              <a href="#approach" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-cyan-400 hover:bg-white">See how it works</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Automation with a purpose</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Less busywork. More forward motion.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>Automation is most valuable when it solves a real operational bottleneck—not when it adds another disconnected tool. We start with the work: where information enters, how decisions are made, and where people lose time.</p>
              <p>From there, we combine workflow automation, generative AI, agentic orchestration, and data engineering into a system your team can understand and trust. Human review stays exactly where judgment matters.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-glow bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">What we build</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">Useful AI, connected to real work</h2>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {capabilities.map(([title, text]) => (
              <article key={title} className="premium-card group rounded-2xl p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <span className="h-px w-12 bg-slate-200 transition-all group-hover:w-20 group-hover:bg-cyan-400" />
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Technology, chosen for the job</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">The right stack—not a forced stack</h2>
              <p className="mt-6 leading-7 text-slate-600">We select tools around your workflow, existing environment, security needs, and expected scale. The architecture stays practical and maintainable.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {technologyGroups.map(([group, technologies]) => (
                <article key={group as string} className="bg-slate-50 p-7 sm:p-8">
                  <h3 className="font-semibold text-slate-950">{group}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(technologies as string[]).map((technology) => (
                      <span key={technology} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm">{technology}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-slate-200 bg-cyan-50/40 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Our approach</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">From friction to a working system</h2>
            <p className="mt-6 leading-7 text-slate-600">A transparent path from the first workflow conversation to dependable automation your team can use every day.</p>
          </div>
          <ol className="relative border-l border-cyan-300">
            {steps.map(([title, text], index) => (
              <li key={title} className="relative pb-12 pl-10 last:pb-0 sm:pl-14">
                <span className="absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-full border border-cyan-200 bg-white text-sm font-semibold text-cyan-700 shadow-md shadow-cyan-900/10">{index + 1}</span>
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Where it creates value</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Start with one meaningful workflow</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">The best first automation is visible, measurable, and painful enough that your team immediately feels the difference.</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <li key={useCase} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-5 text-sm font-medium leading-6 text-slate-700 shadow-sm">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-50 text-xs text-cyan-700">✓</span>{useCase}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Responsible by design</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Automation you can trust and control</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Security, review, and accountability are designed into the workflow—not added after it is built.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {safeguards.map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-50 text-cyan-700" aria-hidden="true">✓</div>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">What you receive</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A working solution—not just a prototype</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">We leave your team with the system, controls, knowledge, and visibility needed to operate it confidently.</p>
          </div>
          <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            {deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-center gap-5 border-b border-slate-100 px-6 py-5 last:border-0 sm:px-8">
                <span className="text-cyan-600">✓</span>
                <span className="font-medium text-slate-700">{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 px-6 py-16 text-slate-950 shadow-2xl shadow-cyan-900/20 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[48px] border-white/15" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">Have a process in mind?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s find the fastest route from manual to intelligent.</h2>
          </div>
          <Link href="/#contact" className="relative mt-8 inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-950 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 lg:mt-0">Talk through your workflow <span className="ml-2" aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

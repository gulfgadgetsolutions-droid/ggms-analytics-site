import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightsHeroScene from "../components/InsightsHeroScene";
import { getSiteUrl } from "../lib/site";

const insights = [
  {
    category: "Data Engineering",
    title: "Why trusted analytics begins upstream",
    description: "A practical look at the pipelines, definitions, quality controls, and ownership required before dashboards and AI can become dependable.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=84",
    alt: "Enterprise data center infrastructure supporting reliable data platforms",
    topics: ["Data quality", "Pipelines", "Governance"],
  },
  {
    category: "Business Intelligence",
    title: "From reporting volume to decision clarity",
    description: "How semantic models, focused KPIs, and deliberate information design help teams spend less time reconciling numbers and more time acting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=84",
    alt: "Business professional reviewing analytics and performance information",
    topics: ["Power BI", "KPIs", "Adoption"],
  },
  {
    category: "AI & Automation",
    title: "Choosing the right first AI workflow",
    description: "The strongest starting point is rarely the most ambitious one. It is a visible, measurable workflow with trusted knowledge and clear human ownership.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=84",
    alt: "Corporate team collaborating on an AI and automation initiative",
    topics: ["Generative AI", "Agents", "Human oversight"],
  },
  {
    category: "Data & AI Strategy",
    title: "A roadmap leadership can actually execute",
    description: "Connect business outcomes, readiness, architecture, governance, ownership, and investment decisions in one realistic sequence.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=84",
    alt: "Corporate leadership team working together on a strategy roadmap",
    topics: ["Readiness", "Architecture", "Roadmap"],
  },
  {
    category: "Financial Analytics",
    title: "Building confidence in financial performance data",
    description: "Integrated definitions, controlled calculations, and timely operational data can turn finance reporting into a more useful management system.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=84",
    alt: "Finance professionals discussing business performance and reporting",
    topics: ["Forecasting", "Performance", "Controls"],
  },
  {
    category: "Managed Data & AI",
    title: "What happens after the solution goes live?",
    description: "Reliable data and AI products need monitoring, ownership, incident response, quality checks, change control, and continuous improvement.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=84",
    alt: "Modern corporate operations environment supporting ongoing managed services",
    topics: ["Monitoring", "Support", "Optimization"],
  },
];

export default function InsightsPage() {
  const siteUrl = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/insights/#collection`,
    name: "GGMS Analytics Insights",
    description: "Practical perspectives on enterprise data engineering, analytics, data science, AI automation, strategy, and managed services.",
    url: `${siteUrl}/insights`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: insights.map((insight) => insight.category),
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Navbar />

      <section className="relative isolate min-h-[700px] overflow-hidden border-b border-slate-400 bg-slate-300">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(71,85,105,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.09)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-300 via-slate-300/94 to-slate-500/35" />
        <InsightsHeroScene />
        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-400/45 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-800 shadow-sm backdrop-blur"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />GGMS perspectives</div>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Ideas for turning complexity into <span className="block text-cyan-700">confident decisions.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">Practical thinking on the data foundations, analytical products, AI systems, and operating disciplines behind meaningful business outcomes.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-slate-700"><span className="rounded-full border border-slate-400/50 bg-white/40 px-4 py-2">Data</span><span className="rounded-full border border-slate-400/50 bg-white/40 px-4 py-2">Analytics</span><span className="rounded-full border border-slate-400/50 bg-white/40 px-4 py-2">AI</span><span className="rounded-full border border-slate-400/50 bg-white/40 px-4 py-2">Strategy</span></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Featured perspective</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">The operating model behind trusted data and AI</h2></div><p className="max-w-md leading-7 text-slate-600">Technology creates value when architecture, ownership, controls, delivery, and adoption move together.</p></div>
        <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-2xl shadow-slate-900/15 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[360px] lg:min-h-[520px]"><Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85" alt="Corporate team discussing enterprise data and AI priorities" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/35" /></div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">Leadership brief</p><h3 className="mt-5 text-3xl font-semibold leading-tight">Start with the decision. Build backward from there.</h3><p className="mt-6 leading-7 text-slate-300">Before selecting a platform or model, define the decision, workflow, owner, required evidence, acceptable risk, and measurable outcome. The technology architecture becomes clearer once the operating need is explicit.</p><ul className="mt-8 space-y-3 text-sm text-slate-300"><li className="flex gap-3"><span className="text-cyan-400">✓</span>Connect investment to an accountable business outcome</li><li className="flex gap-3"><span className="text-cyan-400">✓</span>Make governance part of delivery—not a later document</li><li className="flex gap-3"><span className="text-cyan-400">✓</span>Design adoption and ownership before go-live</li></ul></div>
        </article>
      </section>

      <section className="border-y border-slate-300 bg-slate-200 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Explore the thinking</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Perspectives grounded in delivery.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Focused guidance for leaders and teams shaping enterprise data, analytics, and AI initiatives.</p></div>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => <article key={insight.title} className="group overflow-hidden rounded-2xl border border-slate-300 bg-slate-100 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl hover:shadow-slate-900/15"><div className="relative h-56 overflow-hidden"><Image src={insight.image} alt={insight.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-7"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{insight.category}</p><h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight">{insight.title}</h3><p className="mt-4 text-sm leading-7 text-slate-700">{insight.description}</p><div className="mt-6 flex flex-wrap gap-2">{insight.topics.map((topic)=><span key={topic} className="rounded-full border border-slate-300 bg-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700">{topic}</span>)}</div></div></article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white sm:py-32">
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-cyan-400/8 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">A real delivery pattern</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">From fragmented expenditure reporting to one executive view.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">An Authorization for Expenditure reporting requirement brought together SAP and SQL Server data into a Power BI reporting layer. The value was not simply a new dashboard—it was a controlled path from operational sources to consistent business logic and a usable leadership view.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {["SAP and SQL Server data connected", "Reusable reporting foundation created", "Spreadsheet fragmentation reduced", "Leadership visibility improved"].map((item)=><div key={item} className="flex gap-3 rounded-xl border border-slate-700 bg-slate-800/70 p-4 text-sm leading-6 text-slate-300"><span className="text-cyan-400">✓</span>{item}</div>)}
            </div>
          </div>
          <figure><div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-slate-700 shadow-2xl"><Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85" alt="Finance and business professionals reviewing expenditure and performance information" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" /></div><figcaption className="mt-4 text-sm leading-6 text-slate-400">Representative corporate photography; the delivery description reflects the AFE reporting work presented on this website.</figcaption></figure>
        </div>
      </section>

      <section className="border-b border-slate-300 bg-slate-200 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Before the technology decision</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Questions worth answering first.</h2><p className="mt-6 leading-7 text-slate-700">Strong initiatives become easier to design when the operating reality is explicit.</p></div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-400/60 bg-slate-400/60 md:grid-cols-2">
              {[
                ["Decision", "Which recurring decision or workflow should become faster, clearer, or more reliable?"],
                ["Ownership", "Who owns the business outcome, the data, the operating process, and the solution after launch?"],
                ["Evidence", "Which systems and definitions provide the trusted evidence needed to act?"],
                ["Risk", "What could go wrong, who is affected, and where must review or approval remain?"],
                ["Adoption", "How will the people doing the work use the output inside their existing day?"],
                ["Value", "What measurable change would justify continuing, expanding, redirecting, or stopping?"],
              ].map(([title,text])=><article key={title} className="bg-slate-100 p-7 sm:p-8"><span className="block h-1 w-10 rounded-full bg-cyan-600" /><h3 className="mt-6 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-700">{text}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"><div className="relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-16 text-white shadow-2xl sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16"><div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" /><div className="relative max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Turn insight into action</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Bring us the decision, workflow, or data challenge behind your next initiative.</h2><p className="mt-5 leading-7 text-slate-300">We will help identify the most practical place to begin.</p></div><Link href="/lets-talk" className="relative mt-8 inline-flex shrink-0 items-center justify-center rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 lg:mt-0">Discuss your challenge <span className="ml-2">→</span></Link></div></section>

      <Footer />
    </main>
  );
}

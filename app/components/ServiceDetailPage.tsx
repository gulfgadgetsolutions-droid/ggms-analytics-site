import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ServiceSchema from "./ServiceSchema";

export type ServicePageContent = {
  eyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  problemLabel: string;
  problemTitle: string;
  problemParagraphs: string[];
  capabilities: { title: string; text: string }[];
  technologies: { group: string; items: string[] }[];
  processTitle: string;
  processDescription: string;
  steps: { title: string; text: string }[];
  useCaseTitle: string;
  useCaseDescription: string;
  useCases: string[];
  controlsLabel: string;
  controlsTitle: string;
  controlsDescription: string;
  controls: { title: string; text: string }[];
  deliverablesTitle: string;
  deliverablesDescription: string;
  deliverables: string[];
  ctaLabel: string;
  ctaTitle: string;
  ctaButton: string;
};

const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "Data & AI Strategy": [
    { question: "When is a data and AI strategy engagement useful?", answer: "It is most useful when priorities compete, platforms need modernization, AI opportunities are unclear, or leadership needs a sequenced investment roadmap before committing to delivery." },
    { question: "Do we need mature data before starting?", answer: "No. The engagement establishes your current readiness, identifies the gaps that matter, and separates opportunities that can begin now from those that require stronger foundations." },
    { question: "Will the strategy recommend specific technologies?", answer: "Where appropriate, yes. Recommendations are based on your existing environment, required capabilities, governance needs, cost, skills, and maintainability—not a predetermined vendor stack." },
    { question: "What do we have at the end?", answer: "You receive a practical target architecture, prioritized use cases, governance and operating-model guidance, ownership, decision gates, and a phased implementation roadmap." },
  ],
  "Data Engineering & Cloud Platforms": [
    { question: "Can you work with our existing systems?", answer: "Yes. We design around the systems you already operate, including databases, SAP, files, APIs, cloud services, and legacy platforms, then modernize only where it creates clear value." },
    { question: "Do you support both batch and near-real-time pipelines?", answer: "Yes. The ingestion pattern is selected according to source capabilities, business latency needs, scale, reliability, and operating cost." },
    { question: "How do you protect data quality?", answer: "Pipelines can include validation, reconciliation, freshness checks, lineage, monitoring, alerts, controlled retries, and documented ownership." },
    { question: "Can delivery begin with one data domain?", answer: "Yes. A focused domain or reporting need is often the strongest first release because it proves the architecture while creating a reusable foundation." },
  ],
  "Business Intelligence & Analytics": [
    { question: "Can you improve existing Power BI reports?", answer: "Yes. We can assess the semantic model, DAX, refresh process, security, performance, visual hierarchy, usability, and adoption before recommending focused improvements." },
    { question: "How do you create one version of the truth?", answer: "We establish approved definitions and reusable measures in a governed semantic layer, then validate results with business and source-system owners." },
    { question: "Can dashboards use data from multiple systems?", answer: "Yes. The analytical solution can combine ERP, CRM, finance, operational, spreadsheet, application, and cloud data through an appropriate governed data layer." },
    { question: "Do you provide training and handover?", answer: "Yes. Delivery can include user guidance, technical documentation, administrator handover, training, and an adoption plan." },
  ],
  "Data Science & Machine Learning": [
    { question: "How do you decide whether machine learning is appropriate?", answer: "We first define the decision, available action, historical evidence, cost of error, and measurable baseline. If rules or conventional analytics are more suitable, we will say so." },
    { question: "Do you build prototypes or production solutions?", answer: "Both are possible, but production planning is considered from the start so data pipelines, deployment, monitoring, explainability, and ownership are not afterthoughts." },
    { question: "How is model performance monitored?", answer: "Monitoring can cover input quality, drift, prediction performance, operational usage, failures, and the business outcome the model is intended to improve." },
    { question: "Can people review predictions before action is taken?", answer: "Yes. Human review and approval can be built into high-impact or uncertain decisions, with the model providing evidence rather than silently replacing judgment." },
  ],
};

const servicePhotos: Record<string, { src: string; alt: string }> = {
  strategy: { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85", alt: "Business and technology team collaborating around a strategy workshop" },
  engineering: { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85", alt: "Modern data center infrastructure supporting enterprise cloud platforms" },
  analytics: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85", alt: "Business analytics and performance information displayed on a digital screen" },
  science: { src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1800&q=85", alt: "Data science and machine learning code being developed on a computer" },
};

export default function ServiceDetailPage({ content }: { content: ServicePageContent }) {
  const sceneVariant = content.heroImage.includes("strategy") ? "strategy" : content.heroImage.includes("engineering") ? "engineering" : content.heroImage.includes("analytics") ? "analytics" : "science";
  const faqs = serviceFaqs[content.eyebrow] ?? [];
  const servicePhoto = servicePhotos[sceneVariant];
  const servicePath = sceneVariant === "strategy" ? "/services/data-ai-strategy" : sceneVariant === "engineering" ? "/services/data-engineering" : sceneVariant === "analytics" ? "/services/data-analytics" : "/services/data-science";
  return (
    <main className="depth-page depth-services min-h-screen overflow-hidden bg-white text-slate-950">
      <ServiceSchema name={content.eyebrow} description={content.heroDescription} path={servicePath} />
      <Navbar />
      <section className="service-hero-soft depth-hero relative isolate min-h-[720px] overflow-hidden bg-slate-300 text-slate-950">
        <Image src={content.heroImage} alt={content.heroAlt} fill preload sizes="100vw" className="object-cover object-center opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200/95 via-slate-300/85 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-400/60 via-transparent to-slate-200/30" />
        <div className="absolute inset-y-0 left-0 w-3/5 bg-[radial-gradient(circle_at_30%_45%,rgba(255,255,255,0.32),transparent_60%)]" />
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="service-hero-panel depth-panel max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-400/45 bg-white/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-lg shadow-slate-900/10 backdrop-blur"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />{content.eyebrow}</div>
            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{content.heroTitle}<span className="block bg-gradient-to-r from-cyan-600 to-sky-700 bg-clip-text text-transparent">{content.heroAccent}</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">{content.heroDescription}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link href="/#contact" className="premium-glow inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400">Discuss your project <span aria-hidden="true">→</span></Link><a href="#approach" className="service-secondary-button inline-flex items-center justify-center rounded-lg px-6 py-3.5 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-500">See our approach</a></div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">{content.problemLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.problemTitle}</h2></div><div className="space-y-6 text-lg leading-8 text-slate-600">{content.problemParagraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></div></div></section>

      <section className="service-dark-band section-glow py-24 text-white sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">What we build</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">Capabilities shaped around business outcomes</h2><div className="mt-14 grid gap-5 md:grid-cols-2">{content.capabilities.map((item)=><article key={item.title} className="service-dark-card group rounded-2xl p-8 sm:p-10"><div className="flex items-start justify-between"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.8)]" /><span className="h-px w-12 bg-slate-600 transition-all group-hover:w-20 group-hover:bg-cyan-400" /></div><h3 className="mt-10 text-2xl font-semibold text-white">{item.title}</h3><p className="mt-4 leading-7 text-slate-300">{item.text}</p></article>)}</div></div></section>

      <section className="border-y border-slate-200 py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Technologies we use</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">The right tools for the environment</h2><p className="mt-6 leading-7 text-slate-600">We choose technology around your current ecosystem, scale, governance needs, and long-term maintainability.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">{content.technologies.map(group=><article key={group.group} className="bg-slate-50 p-7 sm:p-8"><h3 className="font-semibold">{group.group}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm">{item}</span>)}</div></article>)}</div></div></section>

      <section id="approach" className="border-y border-slate-200 bg-cyan-50/40 py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">How we deliver</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{content.processTitle}</h2><p className="mt-6 leading-7 text-slate-600">{content.processDescription}</p></div><ol className="relative border-l border-cyan-300">{content.steps.map((step,index)=><li key={step.title} className="relative pb-10 pl-10 last:pb-0 sm:pl-14"><span className="absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-full border border-cyan-200 bg-white text-sm font-semibold text-cyan-700 shadow-md shadow-cyan-900/10">{index+1}</span><h3 className="text-xl font-semibold text-slate-950">{step.title}</h3><p className="mt-2 leading-7 text-slate-600">{step.text}</p></li>)}</ol></div></section>

      <section className="py-24 sm:py-32"><div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Use cases</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.useCaseTitle}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{content.useCaseDescription}</p></div><ul className="grid gap-3 sm:grid-cols-2">{content.useCases.map(item=><li key={item} className="flex gap-3 rounded-xl border border-slate-200 p-5 text-sm font-medium leading-6 text-slate-700 shadow-sm"><span className="mt-1 text-cyan-700">✓</span>{item}</li>)}</ul></div></section>

      <section className="bg-slate-50 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">{content.controlsLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.controlsTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{content.controlsDescription}</p></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{content.controls.map(item=><article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-50 text-cyan-700">✓</div><h3 className="mt-6 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p></article>)}</div></div></section>

      <section className="py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">What you receive</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.deliverablesTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{content.deliverablesDescription}</p></div><ul className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5">{content.deliverables.map((item)=><li key={item} className="flex items-center gap-5 border-b border-slate-100 px-6 py-5 last:border-0 sm:px-8"><span className="text-cyan-600">✓</span><span className="font-medium text-slate-700">{item}</span></li>)}</ul></div></section>

      <figure className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8"><div className="relative min-h-[360px] overflow-hidden rounded-3xl sm:min-h-[520px]"><Image src={servicePhoto.src} alt={servicePhoto.alt} fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" /></div><figcaption className="mt-4 text-sm text-slate-500">Real-world collaboration and technology behind {content.eyebrow.toLowerCase()}.</figcaption></figure>

      <section className="border-y border-slate-200 bg-slate-50 py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Frequently asked questions</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Clear answers before we begin.</h2><p className="mt-6 leading-7 text-slate-600">A focused first conversation helps confirm the right scope, starting point, and delivery path.</p></div><div className="space-y-3">{faqs.map((faq)=><details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:border-cyan-300 open:shadow-md"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-slate-900"><span>{faq.question}</span><span className="text-xl font-light text-cyan-700 transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 pr-8 leading-7 text-slate-600">{faq.answer}</p></details>)}</div></div></section>

      <section className="px-6 pb-24 sm:pb-32 lg:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 px-6 py-16 text-slate-950 shadow-2xl shadow-cyan-900/20 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16"><div className="relative max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">{content.ctaLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{content.ctaTitle}</h2></div><Link href="/#contact" className="relative mt-8 inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-950 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 lg:mt-0">{content.ctaButton} <span className="ml-2" aria-hidden="true">→</span></Link></div></section>
      <Footer />
    </main>
  );
}

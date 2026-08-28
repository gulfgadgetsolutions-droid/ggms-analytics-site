import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

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

export default function ServiceDetailPage({ content }: { content: ServicePageContent }) {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />
      <section className="relative isolate min-h-[720px] overflow-hidden bg-slate-50 text-slate-950">
        <Image src={content.heroImage} alt={content.heroAlt} fill preload sizes="100vw" className="object-cover object-[70%_center] opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/30" />
        <div className="absolute inset-y-0 left-0 w-3/5 bg-[radial-gradient(circle_at_30%_45%,rgba(34,211,238,0.11),transparent_55%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-600/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm backdrop-blur"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />{content.eyebrow}</div>
            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">{content.heroTitle}<span className="block bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">{content.heroAccent}</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">{content.heroDescription}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Link href="/#contact" className="premium-glow inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-600">Discuss your project <span aria-hidden="true">→</span></Link><a href="#approach" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-cyan-400 hover:bg-white">See our approach</a></div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">{content.problemLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.problemTitle}</h2></div><div className="space-y-6 text-lg leading-8 text-slate-600">{content.problemParagraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</div></div></div></section>

      <section className="section-glow bg-slate-50 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">What we build</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">Capabilities shaped around business outcomes</h2><div className="mt-14 grid gap-5 md:grid-cols-2">{content.capabilities.map((item)=><article key={item.title} className="premium-card group rounded-2xl p-8 sm:p-10"><div className="flex items-start justify-between"><span className="h-2.5 w-2.5 rounded-full bg-cyan-500" /><span className="h-px w-12 bg-slate-200 transition-all group-hover:w-20 group-hover:bg-cyan-400" /></div><h3 className="mt-10 text-2xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-slate-600">{item.text}</p></article>)}</div></div></section>

      <section className="border-y border-slate-200 py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Technologies we use</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">The right tools for the environment</h2><p className="mt-6 leading-7 text-slate-600">We choose technology around your current ecosystem, scale, governance needs, and long-term maintainability.</p></div><div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">{content.technologies.map(group=><article key={group.group} className="bg-slate-50 p-7 sm:p-8"><h3 className="font-semibold">{group.group}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm">{item}</span>)}</div></article>)}</div></div></section>

      <section id="approach" className="border-y border-slate-200 bg-cyan-50/40 py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">How we deliver</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{content.processTitle}</h2><p className="mt-6 leading-7 text-slate-600">{content.processDescription}</p></div><ol className="relative border-l border-cyan-300">{content.steps.map((step,index)=><li key={step.title} className="relative pb-10 pl-10 last:pb-0 sm:pl-14"><span className="absolute -left-5 top-0 grid h-10 w-10 place-items-center rounded-full border border-cyan-200 bg-white text-sm font-semibold text-cyan-700 shadow-md shadow-cyan-900/10">{index+1}</span><h3 className="text-xl font-semibold text-slate-950">{step.title}</h3><p className="mt-2 leading-7 text-slate-600">{step.text}</p></li>)}</ol></div></section>

      <section className="py-24 sm:py-32"><div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Use cases</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.useCaseTitle}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{content.useCaseDescription}</p></div><ul className="grid gap-3 sm:grid-cols-2">{content.useCases.map(item=><li key={item} className="flex gap-3 rounded-xl border border-slate-200 p-5 text-sm font-medium leading-6 text-slate-700 shadow-sm"><span className="mt-1 text-cyan-700">✓</span>{item}</li>)}</ul></div></section>

      <section className="bg-slate-50 py-24 sm:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">{content.controlsLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.controlsTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{content.controlsDescription}</p></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{content.controls.map(item=><article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-50 text-cyan-700">✓</div><h3 className="mt-6 text-lg font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p></article>)}</div></div></section>

      <section className="py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">What you receive</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{content.deliverablesTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{content.deliverablesDescription}</p></div><ul className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/5">{content.deliverables.map((item)=><li key={item} className="flex items-center gap-5 border-b border-slate-100 px-6 py-5 last:border-0 sm:px-8"><span className="text-cyan-600">✓</span><span className="font-medium text-slate-700">{item}</span></li>)}</ul></div></section>

      <section className="px-6 pb-24 sm:pb-32 lg:px-8"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 px-6 py-16 text-slate-950 shadow-2xl shadow-cyan-900/20 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16"><div className="relative max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">{content.ctaLabel}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{content.ctaTitle}</h2></div><Link href="/#contact" className="relative mt-8 inline-flex shrink-0 items-center justify-center rounded-lg bg-slate-950 px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 lg:mt-0">{content.ctaButton} <span className="ml-2" aria-hidden="true">→</span></Link></div></section>
      <Footer />
    </main>
  );
}

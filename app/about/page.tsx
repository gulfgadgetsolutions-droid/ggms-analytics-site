import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const markets = [
  { country: "Oman", role: "Head office", city: "Muscat", text: "The headquarters of GGMS Analytics and the centre of our strategy, client engagement, and delivery." },
  { country: "United Arab Emirates", role: "GGMS Analytics branch", city: "UAE", text: "Connecting our Data and AI capabilities with one of the world’s most active business and technology markets." },
  { country: "Saudi Arabia", role: "GGMS Analytics branch", city: "KSA", text: "Supporting ambitious data-led transformation in one of the region’s fastest-growing economies." },
];

const strengths = [
  { title: "Complete Data & AI capability", text: "Our specialists connect data strategy, engineering, analytics, data science, AI automation, and managed services." },
  { title: "Business and data together", text: "We connect business priorities with engineering, analytics, data science, and automation instead of treating them as separate projects." },
  { title: "Regional understanding", text: "A Gulf presence helps us work with the realities of local organizations while applying modern global technology practices." },
  { title: "Built for ownership", text: "We design for integration, governance, knowledge transfer, and ongoing support—not only the first launch." },
];

const values = [
  ["Integrity", "Clear advice, transparent decisions, and accountable delivery."],
  ["Customer focus", "Solutions shaped around the organization—not around a product."],
  ["Innovation", "Modern technology applied where it creates practical value."],
  ["Collaboration", "Business, data, and technology teams working as one."],
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#f4f8fb] text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden border-b border-cyan-100 bg-gradient-to-br from-white via-[#eff9fc] to-[#dceff5]">
        <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-[38%] top-0 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-cyan-700 shadow-sm backdrop-blur"><span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_14px_rgba(6,182,212,.8)]" /> About GGMS Analytics</div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-.04em] text-slate-950 md:text-6xl lg:text-7xl">Gulf presence. Global thinking. <span className="text-cyan-600">Data built for real business.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">GGMS Analytics is a growing Data and AI company headquartered in Oman, with branches in the UAE and Saudi Arabia—and an ambition to help organizations compete through trusted data, intelligent analytics, and practical AI.</p>
            <div className="mt-9 flex flex-wrap gap-4"><Link href="/services" className="rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-600/25">Explore our services →</Link><Link href="/contact" className="rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 transition hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-700">Talk to our team</Link></div>
          </div>
          <div className="relative min-h-[480px] lg:min-h-[570px]"><div className="absolute inset-4 rotate-3 rounded-[2.5rem] bg-cyan-500/15" /><div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-[0_35px_80px_-30px_rgba(15,23,42,.4)]"><Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=88" alt="A professional technology team collaborating in a modern workplace" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" /><p className="absolute bottom-7 left-7 right-7 text-sm font-medium leading-6 text-white">Technology delivery becomes valuable when strategy, people, systems, and data move together.</p></div><div className="absolute -bottom-4 -left-5 rounded-2xl border border-white bg-white/95 p-5 shadow-xl backdrop-blur md:left-[-35px]"><p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-700">Regional footprint</p><p className="mt-2 font-semibold text-slate-900">Oman · UAE · Saudi Arabia</p></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10"><div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><span className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-700">Who we are</span><h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">Building a stronger, globally relevant Data &amp; AI company.</h2></div><div className="space-y-6 text-lg leading-8 text-slate-600"><p>GGMS Analytics helps organizations move from fragmented information and manual reporting to trusted data, clearer decisions, and intelligent operations.</p><p>We bring strategy, data engineering, analytics and BI, data science, AI automation, and managed Data and AI services into one connected capability. Our aim is simple: create solutions people can understand, organizations can operate, and leaders can use to move forward with confidence.</p></div></div></section>

      <section className="border-y border-slate-200 bg-white py-24"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="max-w-3xl"><span className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-700">Our three branches</span><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Headquartered in Oman. Growing from the Gulf to the world.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Three GGMS Analytics locations give us a strong regional base for building trusted, long-term relationships and expanding our Data and AI services globally.</p></div><div className="mt-12 grid gap-6 md:grid-cols-3">{markets.map((market, index) => <article key={market.country} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-[#f6fafc] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-cyan-600 hover:text-white hover:shadow-[0_25px_55px_-25px_rgba(8,145,178,.65)]"><div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[22px] border-cyan-100 transition group-hover:scale-125 group-hover:border-white/10" /><p className="relative text-5xl font-light text-cyan-200 transition group-hover:text-white/25">0{index + 1}</p><p className="relative mt-9 text-xs font-semibold uppercase tracking-[.2em] text-cyan-700 group-hover:text-cyan-100">{market.role}</p><h3 className="relative mt-3 text-2xl font-semibold">{market.country}</h3><p className="relative mt-1 text-sm font-semibold text-slate-400 group-hover:text-white/70">{market.city}</p><p className="relative mt-6 text-sm leading-7 text-slate-600 group-hover:text-white/85">{market.text}</p></article>)}</div></div></section>

      <section className="bg-[#eaf3f7] py-24"><div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10"><div className="relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-35px_rgba(15,23,42,.45)]"><Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=88" alt="Business professionals discussing a technology delivery plan" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" /><div className="absolute bottom-8 left-8 right-8 text-white"><p className="text-xs font-semibold uppercase tracking-[.2em] text-cyan-300">Our approach</p><p className="mt-3 text-2xl font-semibold">Understand first. Build responsibly. Stay accountable.</p></div></div><div><span className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-700">Why GGMS</span><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">More than an analytics layer</h2><div className="mt-9 grid gap-4 sm:grid-cols-2">{strengths.map((item) => <article key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg"><div className="mb-5 h-10 w-10 rounded-xl bg-cyan-50 p-3 transition group-hover:bg-cyan-500"><div className="h-full w-full rotate-45 rounded-sm border-2 border-cyan-600 transition group-hover:border-white" /></div><h3 className="font-semibold text-slate-950 group-hover:text-cyan-700">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p></article>)}</div></div></div></section>

      <section className="bg-white py-24"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><span className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-700">How we show up</span><h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Values clients can experience</h2></div><div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">{values.map(([title, value]) => <article key={title} className="group bg-white p-8 transition hover:bg-slate-900 hover:text-white"><h3 className="text-xl font-semibold text-cyan-700 group-hover:text-cyan-300">{title}</h3><p className="mt-3 leading-7 text-slate-600 group-hover:text-slate-300">{value}</p></article>)}</div></div></div></section>

      <section className="relative overflow-hidden bg-slate-900 py-24 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,.18),transparent_35%)]" /><div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center"><div><span className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Start with the challenge</span><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">Let&apos;s turn your data into something your business can use.</h2></div><Link href="/contact" className="shrink-0 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-white">Start a Project →</Link></div></section>

      <Footer />
    </main>
  );
}

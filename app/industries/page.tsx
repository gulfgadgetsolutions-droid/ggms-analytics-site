import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { industries } from "../lib/industries";

export const metadata: Metadata = {
  title: "Industries | Data, Analytics & AI",
  description: "Explore GGMS Analytics experience across financial services, government, energy, supply chain, healthcare, retail, and aviation.",
  alternates: { canonical: "/industries" },
};

const heroImages = [
  { src: industries[0].image, alt: "Financial professionals reviewing business information", label: "Financial Services", className: "row-span-2" },
  { src: industries[8].image, alt: "Commercial aircraft representing aviation analytics", label: "Aviation", className: "" },
  { src: industries[7].image, alt: "Automotive production representing mobility analytics", label: "Automotive", className: "" },
];

export default function IndustriesPage() {
  return (
    <main className="depth-page depth-industries min-h-screen bg-white text-slate-950">
      <Navbar />

      <section className="depth-hero relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-300/15 blur-3xl" />
        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-24">
          <div className="depth-hero-copy max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Industries</span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-6xl">Industry knowledge.<span className="block text-cyan-600">Data that fits the reality.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">We apply data, analytics, and AI in the context of your operations, decisions, controls, and customers—not as disconnected technology.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#industry-expertise" className="rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-400">Explore industries</a>
              <Link href="/lets-talk" className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400">Discuss your priorities</Link>
            </div>
          </div>

          <div className="industry-hero-stage depth-stage grid h-[480px] grid-cols-2 grid-rows-2 gap-4">
            <span className="industry-orbit industry-orbit-one" aria-hidden="true" />
            <span className="industry-orbit industry-orbit-two" aria-hidden="true" />
            {heroImages.map((image) => (
              <figure key={image.label} className={`group relative overflow-hidden rounded-2xl border border-white/70 bg-slate-900 shadow-xl shadow-slate-900/10 ${image.className}`}>
                <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 34vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.18em] text-white">{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="industry-expertise" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600">Where we work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Technology shaped around business reality.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Each sector brings different systems, risks, decisions, and opportunities. Our approach begins with that operating context.</p>
        </div>

        <div className="depth-grid industry-grid grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.title} href={`/industries/${industry.slug}`} className="industry-card depth-card group rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-cyan-300" aria-label={`Explore ${industry.title}`}>
              <div className="industry-card-image relative h-56 overflow-hidden rounded-t-[0.95rem] bg-slate-900">
                <Image src={industry.image} alt={`${industry.title} industry`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: industry.imagePosition }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />
                <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-slate-950/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">Industry expertise</span>
              </div>
              <div className="industry-card-content p-7">
                <div className="flex items-start justify-between gap-5"><h3 className="text-xl font-semibold leading-snug tracking-tight group-hover:text-cyan-700">{industry.title}</h3><span className="industry-card-arrow mt-1 text-cyan-600 transition group-hover:translate-x-1" aria-hidden="true">→</span></div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{industry.description}</p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">{industry.outcomes.slice(0, 3).map((item) => <span key={item} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">{item}</span>)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="depth-panel relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center text-white shadow-2xl shadow-slate-900/15 sm:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_58%)]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">Your industry, your priorities</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Turn complex industry data into decisions people can trust.</h2>
            <Link href="/lets-talk" className="mt-8 inline-flex rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">Start a conversation <span className="ml-2" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

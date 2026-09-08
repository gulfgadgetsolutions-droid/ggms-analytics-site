import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getIndustry, industries } from "../../lib/industries";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

const deliveryStages = [
  { title: "Understand the operation", text: "Align on decisions, processes, measures, controls, and the people who will use the solution." },
  { title: "Connect and govern the data", text: "Map source systems, create trusted models, and build quality, lineage, security, and ownership into the foundation." },
  { title: "Activate analytics and AI", text: "Deliver practical dashboards, forecasts, models, alerts, and workflows around priority use cases." },
  { title: "Embed and improve", text: "Integrate with daily work, enable teams, monitor adoption and performance, and improve the solution over time." },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) return {};

  return {
    title: `${industry.title} Data, Analytics & AI`,
    description: `${industry.description} Explore industry-focused data engineering, analytics, AI, automation, and governance from GGMS Analytics.`,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.title} | GGMS Analytics`,
      description: industry.description,
      images: [{ url: industry.image, alt: `${industry.title} data and analytics` }],
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${industry.title} Data, Analytics & AI`,
    description: industry.description,
    isPartOf: { "@type": "WebSite", name: "GGMS Analytics" },
    about: { "@type": "Thing", name: industry.title },
  };

  return (
    <main className="depth-page depth-industries min-h-screen text-slate-950">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="industry-detail-hero depth-hero relative overflow-hidden border-b border-slate-300/70">
        <div className="industry-detail-grid" aria-hidden="true" />
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative mx-auto grid min-h-[690px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="depth-hero-copy max-w-2xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              <Link href="/industries" className="transition hover:text-cyan-700">Industries</Link>
              <span aria-hidden="true">/</span>
              <span className="text-cyan-700">{industry.shortTitle}</span>
            </nav>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Industry intelligence</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl">{industry.title}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">{industry.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/lets-talk" className="rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-cyan-900/10 transition hover:-translate-y-0.5 hover:bg-cyan-400">Discuss your priorities</Link>
              <a href="#use-cases" className="rounded-lg border border-slate-300 bg-white/80 px-6 py-3.5 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400">Explore use cases</a>
            </div>
          </div>

          <div className="industry-detail-visual depth-stage">
            <div className="industry-visual-backplate" aria-hidden="true" />
            <div className="industry-visual-frame relative h-[480px] overflow-hidden rounded-3xl border border-white/70 bg-slate-900">
              <Image src={industry.image} alt={`Real-world ${industry.title} operations`} fill priority sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" style={{ objectPosition: industry.imagePosition }} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-white/5" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Connected industry view</p>
                <p className="mt-3 max-w-md text-lg font-medium leading-7">From fragmented operational signals to timely, governed decisions.</p>
              </div>
            </div>
            <div className="industry-visual-chip industry-visual-chip-top">Trusted data</div>
            <div className="industry-visual-chip industry-visual-chip-bottom">Decisions in context</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Business pressure points</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">See the whole operation, not another isolated report.</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">We begin with the business decisions that matter, then connect the data, controls, analytics, and workflows required to support them.</p>
          </div>
          <div className="depth-grid grid gap-5 sm:grid-cols-2">
            {industry.priorities.map((priority) => (
              <article key={priority} className="industry-pressure-card depth-card rounded-2xl border border-slate-200 bg-white/90 p-7">
                <span className="industry-pressure-mark" aria-hidden="true" />
                <h3 className="relative mt-10 text-lg font-semibold leading-7">{priority}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">Build visibility, shared definitions, and a practical path from signal to action.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-capability-section border-y border-slate-700/70 bg-slate-900 px-6 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">What we enable</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">An intelligence layer built around your industry.</h2>
              <div className="mt-10 space-y-4">
                {industry.capabilities.map((capability) => (
                  <article key={capability.title} className="industry-dark-card rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.075]">
                    <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{capability.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="industry-flow depth-stage depth-stage-reverse" aria-label="Data to decision workflow">
              <div className="industry-flow-glow" aria-hidden="true" />
              <div className="industry-flow-node">
                <span>Connect</span>
                <strong>Systems & signals</strong>
              </div>
              <div className="industry-flow-line" aria-hidden="true"><span /></div>
              <div className="industry-flow-node industry-flow-node-accent">
                <span>Understand</span>
                <strong>Analytics & AI</strong>
              </div>
              <div className="industry-flow-line" aria-hidden="true"><span /></div>
              <div className="industry-flow-node">
                <span>Act</span>
                <strong>People & workflows</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">High-value use cases</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Where data can change the decision.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Priorities are selected around business value, data readiness, adoption, risk, and the ability to integrate insight into real work.</p>
        </div>
        <div className="depth-grid mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industry.useCases.map((useCase) => (
            <article key={useCase} className="industry-use-case depth-card rounded-2xl border border-slate-200 bg-white p-6">
              <span className="industry-use-case-icon" aria-hidden="true"><span /></span>
              <h3 className="mt-6 text-lg font-semibold leading-7">{useCase}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Connected data, clear measures, and decision-ready delivery.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-300/70 bg-slate-100/80 px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Delivery approach</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Designed for adoption from the start.</h2>
            <div className="mt-9 space-y-4">
              {deliveryStages.map((stage) => (
                <article key={stage.title} className="group flex gap-5 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full border-[3px] border-cyan-500 bg-white shadow-[0_0_0_6px_rgba(6,182,212,0.1)]" aria-hidden="true" />
                  <div><h3 className="font-semibold">{stage.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{stage.text}</p></div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <article className="depth-panel rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">Technology landscape</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">Use the right platform for the operating environment.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">We integrate with the platforms already carrying your processes and data, then add what is needed for scale, governance, analytics, and AI.</p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {industry.technologies.map((technology) => <span key={technology} className="rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-2 text-xs font-semibold text-cyan-900">{technology}</span>)}
              </div>
            </article>
            <article className="industry-governance-card depth-panel rounded-3xl border border-slate-700 bg-slate-900 p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">Security and responsible AI</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">Control is part of the architecture.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">Role-based access, data minimization, lineage, quality controls, auditability, model monitoring, and human review are designed according to the sensitivity and risk of each use case.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="industry-outcomes depth-panel overflow-hidden rounded-3xl border border-slate-200 bg-white px-7 py-12 sm:px-12 lg:px-14">
          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Business outcomes</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Built to improve how the organization sees and acts.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industry.outcomes.map((outcome) => (
                <div key={outcome} className="rounded-xl border border-slate-200 bg-slate-50/90 px-5 py-4 text-sm font-semibold text-slate-800 shadow-sm">{outcome}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="depth-panel relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center text-white shadow-2xl sm:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_58%)]" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">{industry.shortTitle}</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">Turn your industry data into an operating advantage.</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">Tell us where decisions are slow, visibility is incomplete, or manual work is holding teams back. We will help shape a practical starting point.</p>
            <Link href="/lets-talk" className="mt-8 inline-flex rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">Start a conversation <span className="ml-2" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

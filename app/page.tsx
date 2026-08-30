import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import BrandFilmHero from "./components/BrandFilmHero";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise Data Engineering, Analytics & AI",
  description: "GGMS Analytics builds trusted data platforms, Power BI analytics, data science solutions, generative AI automation, and managed data services across the Gulf.",
  alternates: { canonical: "/" },
};

const services = [
  { href: "/services/data-ai-strategy", title: "Data and AI Strategy", description: "Readiness assessment, opportunity prioritization, architecture, and roadmap." },
  { href: "/services/data-engineering", title: "Data Engineering", description: "ETL/ELT pipelines, SAP and SQL Server integration, Azure Data Factory." },
  { href: "/services/data-analytics", title: "Data Analytics and BI", description: "Power BI dashboards and semantic models leadership trusts." },
  { href: "/services/data-science", title: "Data Science", description: "Forecasting, anomaly detection, and predictive models." },
  { href: "/services/ai-automation", title: "Generative and Agentic AI", description: "Enterprise assistants, AI agents, and intelligent workflow automation." },
  { href: "/services/managed-data-ai", title: "Managed Data and AI", description: "Monitoring, support, maintenance, and continuous optimization." },
];

const differentiators = [
  ["Enterprise context", "Solutions grounded in how complex systems, data, controls, and teams work together."],
  ["End-to-end capability", "One connected team from strategy and data foundations through analytics, AI, and managed support."],
  ["Business-first delivery", "Technology choices are tied to decisions, workflows, measurable value, and realistic adoption."],
  ["Built to last", "Governance, security, documentation, monitoring, and maintainability are designed in from the start."],
];

const deliverySteps = [
  ["Discover", "Understand the business challenge, current systems, data, users, and definition of success."],
  ["Design", "Shape the architecture, delivery plan, controls, responsibilities, and measurable outcomes."],
  ["Deliver", "Build, integrate, test, and launch a production-ready solution with the people who will use it."],
  ["Support", "Transfer knowledge, monitor performance, resolve issues, and continuously improve where needed."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ================= HERO ================= */}
      <BrandFilmHero />

      {/* ================= WHAT WE DO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">
            What We Do
          </span>

          <h2 className="text-3xl font-bold mt-3 mb-5">
            We solve the data problems that stall decisions
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Every enterprise sits on data it can&apos;t fully use &mdash;
            locked in SAP, scattered across SQL Server, or buried in
            spreadsheets. We build the pipelines, models, and dashboards
            that turn that data into something leadership actually trusts
            and acts on.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/8">
          <div className="relative aspect-[3/2] bg-slate-50">
            <Image
              src="/images/home-data-journey.png"
              alt="Enterprise data moving from source systems through a cloud platform into analytics, prediction, and automated action"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-2 divide-x divide-slate-700 bg-slate-900 text-white">
            <div className="p-6">
              <p className="text-2xl font-bold text-cyan-400">30+</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                years of enterprise IT track record
              </p>
            </div>

            <div className="p-6">
              <p className="text-2xl font-bold text-cyan-400">SAP &middot; Azure</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                proven technology behind delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="bg-slate-50 py-20 border-y border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">
              Services
            </span>

            <h2 className="text-3xl font-bold mt-3">
              Six practice areas, one team
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  <span className="text-cyan-600 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-cyan-500 font-semibold hover:underline"
            >
              See all services &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* ================= WHY GGMS ================= */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Why GGMS</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">The thinking behind dependable delivery</h2>
            <p className="mt-5 leading-7 text-slate-600">We combine enterprise technology experience with a practical focus on adoption, ownership, and long-term value.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {differentiators.map(([title, text]) => (
              <article key={title} className="bg-white p-7">
                <div className="h-1 w-10 rounded-full bg-cyan-500" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="border-y border-slate-800 bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">How We Work</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">A clear path from challenge to working solution</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map(([title, text]) => (
              <article key={title} className="border-t border-slate-700 pt-6">
                <span className="block h-1 w-10 rounded-full bg-cyan-400" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROOF ================= */}
      <section
        id="work"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">
            Proof
          </span>

          <h2 className="text-3xl font-bold mt-3">
            Real Work, Real Results
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-2xl bg-slate-900 text-white lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-cyan-400">
            Case Study
          </span>

          <h3 className="text-xl font-semibold mt-3 mb-3">
            SAP and SQL Server to Power BI: Enterprise AFE Dashboard
          </h3>

          <p className="text-slate-300 leading-relaxed max-w-3xl">
            Built a full data pipeline and Power BI reporting layer on
            top of SAP and SQL Server data, giving leadership a live
            view of Authorization for Expenditure tracking instead of
            static spreadsheet reporting.
          </p>
          </div>

          <div className="border-t border-slate-700 bg-slate-800/70 p-8 sm:p-10 lg:border-l lg:border-t-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Outcomes delivered</p>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300">
              <li className="flex gap-3"><span className="text-cyan-400">✓</span>Unified SAP and SQL Server data into one reporting foundation</li>
              <li className="flex gap-3"><span className="text-cyan-400">✓</span>Replaced fragmented spreadsheet reporting with a live executive view</li>
              <li className="flex gap-3"><span className="text-cyan-400">✓</span>Created consistent expenditure definitions and reusable business logic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section className="bg-slate-50 py-14 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">
            Built on the tools enterprises already trust
          </p>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-slate-700 font-semibold text-lg">
            <span>Azure</span>
            <span>SAP</span>
            <span>Power BI</span>
            <span>SQL Server</span>
            <span>Python</span>
          </div>

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">
          Who We Serve
        </span>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold mt-3 mb-6">
          Built for the sectors that can&apos;t afford bad data
        </h2>

        <p className="text-slate-600 max-w-xl mx-auto mb-8">
          From Oil &amp; Gas to Government, Banking, and beyond
          &mdash; see how we work with your industry.
        </p>

        <Link
          href="/industries"
          className="border border-slate-300 px-6 py-3 rounded-md font-semibold hover:bg-slate-50 hover:border-cyan-400 transition inline-block"
        >
          See Our Industries &rarr;
        </Link>

      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">Start with a conversation</span>
        <h2 className="text-3xl font-bold mb-4">
          Not sure where to begin?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-slate-600">
          Tell us about your current systems, business challenge, and desired outcome. We&apos;ll help identify the most practical next step.
        </p>

        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}

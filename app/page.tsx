import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import BrandFilmHero from "./components/BrandFilmHero";
import Image from "next/image";
import Link from "next/link";
import TechnologyEcosystem from "./components/TechnologyEcosystem";
import { insightArticles } from "./lib/insights";

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

const exploreLinks = [
  {
    href: "/services",
    eyebrow: "Capabilities",
    title: "Services",
    description: "From strategy and data foundations to analytics, AI, and managed support.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=84",
    alt: "Business and technology team planning a transformation programme",
    className: "md:col-span-2 lg:col-span-6",
  },
  {
    href: "/industries",
    eyebrow: "Business context",
    title: "Industries",
    description: "See how data and AI priorities change across the sectors we understand.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1500&q=84",
    alt: "Modern industrial operations representing industry-focused analytics",
    className: "lg:col-span-3",
  },
  {
    href: "/insights",
    eyebrow: "Perspectives",
    title: "Insights",
    description: "Practical thinking on the architecture, controls, and decisions behind dependable outcomes.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=84",
    alt: "Corporate team discussing ideas and business evidence",
    className: "lg:col-span-3",
  },
  {
    href: "/about",
    eyebrow: "Our direction",
    title: "About GGMS Analytics",
    description: "Meet the specialist data and AI brand built for regional and global delivery.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=84",
    alt: "Contemporary corporate office representing the GGMS Analytics team",
    className: "lg:col-span-4",
  },
  {
    href: "/lets-talk",
    eyebrow: "Your priority",
    title: "Start a project",
    description: "Bring us the business problem, current systems, and outcome you need to reach.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=84",
    alt: "Business leaders beginning a project discussion",
    className: "md:col-span-2 lg:col-span-8",
  },
];

const parentRelationships = [
  {
    name: "Talabat Oman",
    logo: "https://ggmsglobal.com/wp-content/uploads/2026/08/Talabat-Oman-—-GGMS-Global-IT-client.webp",
  },
  {
    name: "Oman National Engineering & Investment Company",
    logo: "https://ggmsglobal.com/wp-content/uploads/2026/08/Oman-National-Engineering-Investment-Company-ONEIC-—-GGMS-Global-IT-client.webp",
  },
  {
    name: "Ministry of Heritage and Tourism Oman",
    logo: "https://ggmsglobal.com/wp-content/uploads/2026/08/Ministry-of-Heritage-and-Tourism-Oman-—-GGMS-Global-client.webp",
  },
  {
    name: "Oman Shapoorji Company",
    logo: "https://ggmsglobal.com/wp-content/uploads/2026/08/Oman-Shapoorji-Company-LLC-OSCO-—-GGMS-Global-IT-client.webp",
  },
  {
    name: "Maqshan Oil & Gas Services",
    logo: "https://ggmsglobal.com/wp-content/uploads/2026/08/Maqshan-Oil-Gas-Services-SAOC-—-GGMS-Global-client.webp",
  },
  {
    name: "Vulcan Green Steel",
    logo: "https://ggmsglobal.com/wp-content/uploads/2026/08/Vulcan-Green-Steel-—-GGMS-Global-IT-client.webp",
  },
];

const homeIndustries = [
  {
    title: "Financial services",
    description: "Trusted reporting, risk, controls, and customer intelligence.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=84",
  },
  {
    title: "Energy and operations",
    description: "Asset, expenditure, forecasting, and operational performance.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=84",
  },
  {
    title: "Aviation and travel",
    description: "Commercial, route, sales, and customer decision support.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=84",
  },
];

export default function Home() {
  return (
    <main className="depth-page depth-home min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ================= HERO ================= */}
      <BrandFilmHero />

      {/* ================= EXPLORE ================= */}
      <section className="border-b border-slate-200 bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">Explore GGMS Analytics</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Find the expertise, perspective, or conversation you need.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Start with a capability, explore your industry, read our thinking, or tell us what you are trying to change.
            </p>
          </div>

          <div className="depth-grid mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
            {exploreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`depth-card group relative min-h-[285px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl ${item.className}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-slate-950/5" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">{item.eyebrow}</p>
                  <div className="mt-3 flex items-end justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{item.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                    <span className="mb-1 shrink-0 text-2xl text-cyan-300 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

        <div className="depth-stage depth-stage-reverse overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/8">
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
              <p className="text-2xl font-bold text-cyan-400">Since 2017</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                parent-company delivery foundation
              </p>
            </div>

            <div className="p-6">
              <p className="text-2xl font-bold text-cyan-400">250+</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                parent-company satisfied customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARENT COMPANY PROOF ================= */}
      <section className="border-y border-slate-800 bg-slate-900 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">Regional foundation</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Specialist data and AI. Established regional support.
              </h2>
            </div>
            <div className="lg:border-l lg:border-slate-700 lg:pl-10">
              <p className="text-lg leading-8 text-slate-300">
                GGMS Analytics is the specialist data and AI brand backed by GGMS Global IT Solutions SPC—serving organizations from Oman since 2017, with the GGMS group active across Oman, the UAE, and Saudi Arabia.
              </p>
              <a
                href="https://ggmsglobal.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
              >
                Visit GGMS Global <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="depth-panel mt-14 rounded-3xl border border-white/10 bg-white p-5 text-slate-950 shadow-2xl sm:p-8">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">Parent-company relationships</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">Organizations served by GGMS Global</h3>
              </div>
              <p className="max-w-md text-xs leading-5 text-slate-500">
                These relationships belong to GGMS Global IT Solutions SPC and are not presented as GGMS Analytics engagements.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {parentRelationships.map((relationship) => (
                <div
                  key={relationship.name}
                  className="group relative flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-lg"
                  title={relationship.name}
                >
                  <Image
                    src={relationship.logo}
                    alt={`${relationship.name} logo`}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 150px, (min-width: 640px) 30vw, 45vw"
                    className="object-contain p-4 grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
              ))}
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

          <div className="depth-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="depth-card group rounded-xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
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
          <div className="depth-grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 grid gap-px sm:grid-cols-2">
            {differentiators.map(([title, text]) => (
              <article key={title} className="depth-card bg-white p-7">
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

        <div className="depth-panel grid overflow-hidden rounded-2xl bg-slate-900 text-white lg:grid-cols-[1.2fr_0.8fr]">
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
      <TechnologyEcosystem />

      {/* ================= INDUSTRIES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Industries</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              The same technology means different things in every industry.
            </h2>
          </div>
          <Link href="/industries" className="inline-flex items-center gap-2 font-semibold text-slate-900 transition hover:text-cyan-700">
            Explore all industries <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="depth-grid mt-12 grid gap-5 lg:grid-cols-3">
          {homeIndustries.map((industry) => (
            <Link key={industry.title} href="/industries" className="depth-card group relative min-h-[390px] overflow-hidden rounded-2xl bg-slate-950 shadow-xl">
              <Image
                src={industry.image}
                alt={`${industry.title} operations`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="text-2xl font-semibold tracking-tight">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{industry.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  See our industry approach <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= LATEST INSIGHTS ================= */}
      <section className="border-y border-slate-200 bg-slate-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700">Latest insights</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Thinking built around real decisions.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Explore practical perspectives on finance, supply chains, data platforms, analytics, and responsible AI—written to help teams decide what to do next.
            </p>
          </div>

          <div className="depth-grid mt-12 grid gap-5 lg:grid-cols-3">
            {insightArticles.slice(0, 3).map((article) => (
              <article key={article.slug} className="depth-card group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <Link href={`/insights/${article.slug}`} className="block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-800 backdrop-blur">
                      {article.format}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                      <span>{article.category}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-400" />
                      <span className="text-slate-500">{article.readTime}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight transition group-hover:text-cyan-800">{article.title}</h3>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      Read the insight <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/insights" className="inline-flex rounded-lg bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700">
              Browse all insights <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
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

        <div className="depth-panel mx-auto max-w-4xl rounded-3xl border border-slate-300 bg-slate-50 p-7 text-left sm:p-10">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}

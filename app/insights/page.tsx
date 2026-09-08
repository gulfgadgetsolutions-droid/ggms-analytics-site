import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightsLibrary from "./InsightsLibrary";
import { insightArticles } from "../lib/insights";
import { getSiteUrl } from "../lib/site";

export default function InsightsPage() {
  const siteUrl = getSiteUrl();
  const featured = insightArticles.find((article) => article.featured) ?? insightArticles[0];
  const briefingSlugs = [
    "marketing-measurement-before-attribution",
    "ecommerce-analytics-connect-demand-margin-fulfilment",
    "where-ai-automation-belongs-in-reporting",
  ];
  const briefingArticles = briefingSlugs
    .map((slug) => insightArticles.find((article) => article.slug === slug))
    .filter((article): article is (typeof insightArticles)[number] => Boolean(article));
  const libraryArticles = insightArticles
    .filter((article) => article.slug !== featured.slug)
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map(({ slug, category, format, title, excerpt, image, alt, readTime, published }) => ({
      slug,
      category,
      format,
      title,
      excerpt,
      image,
      alt,
      readTime,
      published,
    }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/insights/#collection`,
    name: "GGMS Analytics Insights",
    description:
      "Original perspectives and practical guides on data engineering, analytics, data strategy, data science, and AI automation.",
    url: `${siteUrl}/insights`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: insightArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/insights/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <main className="depth-page depth-insights min-h-screen bg-slate-100 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <section className="depth-hero relative overflow-hidden border-b border-slate-300 bg-slate-200">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(71,85,105,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.07)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
          <div className="depth-hero-copy max-w-xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-400/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800 shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              GGMS Insights
            </div>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Ideas built for decisions,
              <span className="block text-cyan-700">not display.</span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-slate-700">
              Original, experience-informed perspectives on the architecture, controls, and operating practices that
              turn data and AI into dependable business capability.
            </p>
            <a
              href="#latest-insights"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-700"
            >
              Explore the library <span aria-hidden="true">↓</span>
            </a>
          </div>

          <article className="insights-feature-wrap group relative lg:pl-10">
            <div className="absolute -bottom-6 left-2 top-10 hidden w-20 rounded-l-3xl border border-cyan-500/30 bg-cyan-500/10 lg:block" />
            <span className="insights-feature-orbit" aria-hidden="true" />
            <Link
              href={`/insights/${featured.slug}`}
              className="insights-feature-card depth-stage relative block overflow-hidden rounded-3xl border border-slate-400/40 bg-slate-950 shadow-2xl shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-4"
            >
              <div className="relative min-h-[480px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-cyan-300">
                  <span>Featured</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span>{featured.category}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span className="text-slate-300">{featured.readTime}</span>
                </div>
                <h2 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">{featured.title}</h2>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                  Read the perspective
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-800 bg-slate-950 py-24 text-white sm:py-32">
        <div className="absolute right-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 border-b border-slate-700 pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-400">From the briefing desk</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Questions behind the next decision.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              A focused reading list for leaders shaping performance, operations, customer experience, and data foundations—not a catalogue of technology trends.
            </p>
          </div>

          <div className="depth-grid mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Link
              href={`/insights/${briefingArticles[0].slug}`}
              className="depth-card group relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
            >
              <Image
                src={briefingArticles[0].image}
                alt={briefingArticles[0].alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.17em] text-cyan-300">
                  <span>{briefingArticles[0].format}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span>{briefingArticles[0].category}</span>
                </div>
                <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{briefingArticles[0].title}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">{briefingArticles[0].excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Read the field perspective <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {briefingArticles.slice(1).map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="depth-card group grid min-h-[245px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 sm:grid-rows-[0.9fr_1.1fr] lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-1"
                >
                  <div className="relative min-h-[180px] overflow-hidden lg:min-h-0">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent lg:bg-gradient-to-r" />
                  </div>
                  <div className="flex flex-col justify-center p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">{article.category} · {article.readTime}</p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">{article.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-300">
                      Read insight <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-800 pt-8 text-sm text-slate-400">
            <span><strong className="font-semibold text-white">Field notes</strong> from recurring delivery challenges</span>
            <span><strong className="font-semibold text-white">Practical guides</strong> for active initiatives</span>
            <span><strong className="font-semibold text-white">Architecture perspectives</strong> connecting technology and decisions</span>
          </div>
        </div>
      </section>

      <section id="latest-insights" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:py-32 lg:px-8">
        <InsightsLibrary articles={libraryArticles} />
      </section>

      <section className="border-y border-slate-300 bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
          <div className="depth-stage depth-stage-reverse relative min-h-[500px] overflow-hidden rounded-3xl border border-slate-300 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=86"
              alt="Business and technology leaders working through a complex decision together"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <p className="absolute inset-x-0 bottom-0 max-w-xl p-8 text-lg font-semibold leading-7 text-white sm:p-10">
              Strong insight makes a complex decision easier to understand, challenge, and act upon.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Our editorial standard</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Useful before impressive.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              GGMS Insights is written from recurring delivery patterns: the questions organizations face when data
              moves from source systems into reporting, planning, prediction, and automated workflows.
            </p>
            <div className="mt-9 space-y-6">
              {[
                ["Practitioner-led", "Built around problems that appear in real data, reporting, planning, and automation programs."],
                ["Decision-centered", "Organized around the choices, controls, and operating response—not a software feature list."],
                ["Technology-aware", "Platforms are discussed only where they materially change architecture, delivery, or governance."],
                ["Responsible", "Client confidentiality is protected and no article presents fictional results as evidence."],
              ].map(([title, description]) => (
                <div key={title} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-600" />
                  <div>
                    <h3 className="font-semibold text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="depth-panel relative overflow-hidden rounded-3xl bg-slate-900 px-7 py-16 text-white shadow-2xl sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">A challenge worth examining?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Bring us the decision, workflow, or data problem behind it.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              We will help you clarify the problem and identify a practical place to begin.
            </p>
          </div>
          <Link
            href="/lets-talk"
            className="relative mt-8 inline-flex shrink-0 items-center justify-center rounded-lg bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 lg:mt-0"
          >
            Start a conversation <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

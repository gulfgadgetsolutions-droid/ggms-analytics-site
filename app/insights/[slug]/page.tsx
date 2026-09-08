import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getInsightBySlug, insightArticles } from "../../lib/insights";
import { getSiteUrl } from "../../lib/site";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
      type: "article",
      publishedTime: article.datePublished,
      authors: [article.author],
      images: [{ url: article.image, alt: article.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const related = insightArticles
    .filter((candidate) => candidate.slug !== article.slug)
    .sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category))
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/insights/${article.slug}/#article`,
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: { "@type": "Organization", name: "GGMS Analytics", url: siteUrl },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/insights/${article.slug}`,
    articleSection: article.category,
    inLanguage: "en",
  };

  return (
    <main className="depth-page depth-article min-h-screen bg-slate-100 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      <article>
        <header className="insight-article-hero depth-hero relative overflow-hidden border-b border-slate-300 bg-slate-200">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(71,85,105,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.07)_1px,transparent_1px)] bg-[size:80px_80px]" />
          <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="depth-hero-copy relative mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-600">
              <Link href="/insights" className="transition hover:text-cyan-800">
                Insights
              </Link>
              <span aria-hidden="true">/</span>
              <span>{article.category}</span>
            </nav>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">
              <span>{article.format}</span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span>{article.category}</span>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">{article.excerpt}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-400/50 pt-6 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{article.author}</span>
              <span>{article.published}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
          <div className="insight-article-cover depth-stage relative min-h-[440px] overflow-hidden rounded-3xl border border-slate-300 bg-slate-300 shadow-2xl sm:min-h-[620px]">
            <span className="insight-cover-orbit" aria-hidden="true" />
            <Image
              src={article.image}
              alt={article.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[250px_minmax(0,760px)] lg:justify-center lg:gap-20 lg:px-8 lg:py-28">
          <aside className="lg:order-none">
            <div className="depth-panel rounded-2xl border border-slate-300 bg-white p-6 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">In this insight</p>
              <nav className="mt-5 space-y-3" aria-label="Article sections">
                {article.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block border-l-2 border-slate-200 pl-3 text-sm leading-5 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-800"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
              <Link
                href="/insights"
                className="mt-7 inline-flex items-center gap-2 border-t border-slate-200 pt-5 text-sm font-semibold text-slate-900 transition hover:text-cyan-800"
              >
                <span aria-hidden="true">←</span> All insights
              </Link>
            </div>
          </aside>

          <div className="min-w-0">
            <div className="insight-central-idea depth-panel rounded-2xl border border-cyan-700/25 bg-cyan-50 p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800">Central idea</p>
              <p className="mt-4 text-xl font-semibold leading-8 text-slate-900">{article.keyTakeaway}</p>
            </div>

            <div className="insight-decision-flow depth-panel mt-12 overflow-hidden rounded-2xl bg-slate-900 p-7 text-white shadow-xl sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">Decision flow</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-5">
                {article.flow.map((step, index) => (
                  <div key={step} className="insight-flow-step flex items-center gap-3 sm:block">
                    <div className="insight-flow-node flex min-h-20 flex-1 items-center rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold leading-5 text-slate-200 sm:min-h-28">
                      {step}
                    </div>
                    {index < article.flow.length - 1 && (
                      <span aria-hidden="true" className="shrink-0 text-cyan-400 sm:mt-2 sm:block sm:text-center sm:rotate-90 lg:rotate-0">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-slate-300 bg-white/85 p-6 shadow-sm sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Technology context</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">Relevant platforms and patterns—not a prescribed stack.</p>
                </div>
                <div className="flex max-w-xl flex-wrap gap-2">
                  {article.technologyContext.map((technology) => (
                    <span key={technology} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-900">{technology}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 space-y-16">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{section.heading}</h2>
                  <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <ul className="depth-panel mt-7 space-y-4 rounded-2xl border border-slate-300 bg-white p-6 sm:p-7">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="grid grid-cols-[auto_1fr] gap-3 text-[16px] leading-7 text-slate-700">
                          <span className="mt-2.5 h-2 w-2 rounded-full bg-cyan-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="mt-16 border-t border-slate-300 pt-8">
              <p className="text-sm leading-7 text-slate-500">
                This GGMS Analytics perspective is experience-informed editorial guidance. It protects client
                confidentiality and does not present outcomes from an unnamed organization as a case study.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="border-y border-slate-300 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Continue reading</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Related perspectives</h2>
            </div>
            <Link href="/insights" className="hidden text-sm font-semibold text-slate-900 hover:text-cyan-800 sm:block">
              View all insights →
            </Link>
          </div>
          <div className="depth-grid mt-10 grid gap-8 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.slug} className="insight-library-card depth-card group rounded-2xl border border-slate-200 bg-slate-50/70 p-3 pb-6">
                <Link href={`/insights/${item.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-300 ring-1 ring-slate-300">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.17em] text-cyan-700">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug transition group-hover:text-cyan-800">{item.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="depth-panel rounded-3xl bg-slate-900 px-7 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Apply the thinking</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Discuss the business challenge behind your data.</h2>
          </div>
          <Link
            href="/lets-talk"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 lg:mt-0"
          >
            Start a conversation <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

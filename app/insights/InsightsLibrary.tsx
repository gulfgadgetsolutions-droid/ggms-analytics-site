"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { insightCategories, type InsightCategory } from "../lib/insights";

type InsightCard = {
  slug: string;
  category: InsightCategory;
  format: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  readTime: string;
  published: string;
};

const filters: Array<"All" | InsightCategory> = insightCategories;

export default function InsightsLibrary({ articles }: { articles: InsightCard[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const filteredArticles = useMemo(
    () => (activeFilter === "All" ? articles : articles.filter((article) => article.category === activeFilter)),
    [activeFilter, articles],
  );

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-slate-300 pb-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Browse the library</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Latest perspectives</h2>
        </div>
        <div aria-label="Filter insights by topic" className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const selected = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={selected}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "border-slate-900 bg-slate-900 text-white shadow-md"
                    : "border-slate-300 bg-white text-slate-700 hover:border-cyan-500 hover:text-cyan-800"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="depth-grid mt-10 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article key={article.slug} className="insight-library-card depth-card group rounded-2xl border border-slate-200/80 bg-white/80 p-3 pb-6">
              <Link href={`/insights/${article.slug}`} className="block focus:outline-none">
                <div className="insight-library-image relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-300 shadow-sm ring-1 ring-slate-300 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-focus-within:ring-2 group-focus-within:ring-cyan-600">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur">
                    {article.format}
                  </span>
                </div>
                <div className="insight-library-copy px-2 pt-6">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                    <span>{article.category}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                    <span className="text-slate-500">{article.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-slate-950 transition group-hover:text-cyan-800">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
                    <span className="text-xs font-medium text-slate-500">{article.published}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      Read insight
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-slate-300 bg-white p-10 text-center text-slate-600">
          More perspectives in this topic are being prepared.
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

const serviceLinks = [
  { href: "/services/data-ai-strategy", title: "Data & AI Strategy", description: "Readiness, architecture, governance, and roadmap" },
  { href: "/services/data-engineering", title: "Data Engineering", description: "Pipelines, integration, lakehouse, and cloud platforms" },
  { href: "/services/data-analytics", title: "Business Intelligence", description: "Power BI, semantic models, KPIs, and reporting" },
  { href: "/services/data-science", title: "Data Science", description: "Forecasting, machine learning, and predictive models" },
  { href: "/services/ai-automation", title: "Generative & Agentic AI", description: "AI assistants, agents, and intelligent automation" },
  { href: "/services/managed-data-ai", title: "Managed Data & AI", description: "Monitoring, support, quality, and optimization" },
];

const mainLinks = [
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={closeMobile} className="text-xl font-bold tracking-tight">
          GGMS <span className="text-cyan-400">Analytics</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Primary navigation">
          <div className="group relative focus-within:z-50">
            <Link href="/services" className="flex items-center gap-1.5 py-3 transition hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none">
              Services
              <span className="text-[10px] transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">↓</span>
            </Link>

            <div className="invisible absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-slate-950/40">
                <div className="grid grid-cols-2 gap-px bg-slate-700/70">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} href={service.href} className="group/item flex gap-4 bg-slate-900 p-5 transition hover:bg-slate-800 focus-visible:bg-slate-800 focus-visible:outline-none">
                      <span>
                        <span className="block font-semibold text-white transition group-hover/item:text-cyan-300">{service.title}</span>
                        <span className="mt-1 block text-xs leading-5 text-slate-400">{service.description}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <Link href="/services" className="flex items-center justify-between border-t border-slate-700 bg-slate-800/70 px-6 py-4 text-sm font-semibold text-cyan-300 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400">
                  View all services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {mainLinks.map(([label, href]) => (
            <Link key={href} href={href} className="py-3 transition hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/lets-talk" className="hidden rounded-md bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:inline-flex">Let&apos;s Talk</Link>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-700 text-white transition hover:border-cyan-400 hover:text-cyan-300 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            <span className="text-xl" aria-hidden="true">{mobileOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" className="max-h-[calc(100vh-73px)] overflow-y-auto border-t border-slate-700 bg-slate-900 px-6 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <Link href="/services" onClick={closeMobile} className="font-semibold transition hover:text-cyan-300">Services</Link>
              <button type="button" onClick={() => setMobileServicesOpen((open) => !open)} className="grid h-9 w-9 place-items-center rounded-md border border-slate-700 text-cyan-300" aria-expanded={mobileServicesOpen} aria-label="Toggle service links">
                <span className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} aria-hidden="true">↓</span>
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="grid gap-2 border-b border-slate-800 py-4 sm:grid-cols-2">
                {serviceLinks.map((service) => (
                  <Link key={service.href} href={service.href} onClick={closeMobile} className="flex gap-3 rounded-lg border border-slate-800 bg-slate-800/50 p-4 transition hover:border-cyan-500/40 hover:bg-slate-800">
                    <span><span className="block text-sm font-semibold">{service.title}</span><span className="mt-1 block text-xs leading-5 text-slate-400">{service.description}</span></span>
                  </Link>
                ))}
              </div>
            )}

            <div className="grid py-3">
              {mainLinks.map(([label, href]) => (
                <Link key={href} href={href} onClick={closeMobile} className="border-b border-slate-800 py-4 text-sm font-medium transition hover:text-cyan-300">{label}</Link>
              ))}
            </div>

            <Link href="/lets-talk" onClick={closeMobile} className="mt-3 flex w-full items-center justify-center rounded-md bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Let&apos;s Talk</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

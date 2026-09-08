"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandIdentity from "./BrandIdentity";

const serviceLinks = [
  { href: "/services/data-ai-strategy", title: "Data & AI Strategy", outcome: "Plan" },
  { href: "/services/data-engineering", title: "Data Engineering & Cloud Platforms", outcome: "Build" },
  { href: "/services/data-analytics", title: "Business Intelligence & Analytics", outcome: "Understand" },
  { href: "/services/data-science", title: "Data Science & Machine Learning", outcome: "Predict" },
  { href: "/services/ai-automation", title: "Generative AI, Agentic AI & Automation", outcome: "Automate" },
  { href: "/services/managed-data-ai", title: "Managed Data & AI Services", outcome: "Operate" },
];

const mainLinks = [
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const locationLinks = [
  { code: "OM", name: "Oman", shortName: "Oman", role: "Head office", slug: "om" },
  { code: "AE", name: "United Arab Emirates", shortName: "UAE", role: "Regional website", slug: "ae" },
  { code: "SA", name: "Saudi Arabia", shortName: "Saudi", role: "Regional website", slug: "sa" },
];

const regionalPathPattern = /^\/(om|ae|sa)(?=\/|$)/;

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.35 5.1 3.35 8.5S14.2 18.2 12 20.5C9.8 18.2 8.65 15.4 8.65 12S9.8 5.8 12 3.5Z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);
  const activeRegion = locationLinks.find((location) => pathname === `/${location.slug}` || pathname.startsWith(`/${location.slug}/`));
  const globalPath = pathname.replace(regionalPathPattern, "") || "/";
  const regionalHref = (href: string) => activeRegion ? `/${activeRegion.slug}${href === "/" ? "" : href}` : href;
  const switchRegionHref = (slug: string) => `/${slug}${globalPath === "/" ? "" : globalPath}`;
  const globalHref = `${globalPath}${globalPath.includes("?") ? "&" : "?"}region=global`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/95 text-white backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="absolute top-1/2 -translate-y-1/2" style={{ left: "calc((100vw - 100%) / -2 + clamp(1.5rem, 4vw, 4rem))" }}>
          <BrandIdentity compact href={regionalHref("/")} onNavigate={closeMobile} />
        </div>
        <div className="h-10 w-3 shrink-0" aria-hidden="true" />

        <nav className="hidden items-center gap-7 text-[15px] font-medium md:flex" aria-label="Primary navigation">
          <div className="services-nav-group relative focus-within:z-50">
            <Link
              href={regionalHref("/services")}
              className="services-nav-trigger flex items-center gap-1.5 py-3 transition hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none"
              aria-haspopup="true"
            >
              Services
              <span className="services-nav-chevron text-[10px] transition-transform duration-300" aria-hidden="true">↓</span>
            </Link>

            <div className="services-nav-menu absolute left-1/2 top-full z-50 pt-3" aria-label="Services menu">
              <div className="services-nav-surface overflow-hidden rounded-[1.35rem] border border-cyan-300/20 bg-slate-900">
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300">Our capabilities</span>
                    <span className="mt-1 block text-sm text-slate-300">From data foundations to intelligent operations</span>
                  </div>
                  <span className="hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-200 lg:inline-flex">End-to-end delivery</span>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} href={regionalHref(service.href)} className="services-nav-card group/item flex min-h-[86px] items-center gap-4 rounded-xl border border-white/[0.07] bg-slate-800/65 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                      <span className="services-nav-icon mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-[3px] border border-current shadow-[5px_-5px_0_-2px_rgba(103,232,249,.85)]" />
                      </span>
                      <span className="min-w-0">
                        <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300/80">{service.outcome}</span>
                        <span className="block text-sm font-semibold leading-5 text-white transition group-hover/item:text-cyan-200">{service.title}</span>
                      </span>
                      <span className="ml-auto self-start text-sm text-slate-500 transition group-hover/item:translate-x-0.5 group-hover/item:text-cyan-300" aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
                <Link href={regionalHref("/services")} className="group flex items-center justify-between border-t border-white/10 bg-slate-950/45 px-6 py-4 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300">
                  Explore all services <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {mainLinks.map(([label, href]) => (
            <Link key={href} href={regionalHref(href)} className="py-3 transition hover:text-cyan-300 focus-visible:text-cyan-300 focus-visible:outline-none">{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href={regionalHref("/lets-talk")} className="hidden rounded-md bg-cyan-400 px-4 py-2.5 text-[15px] font-semibold text-slate-950 transition hover:bg-cyan-300 sm:inline-flex">Start a Project</Link>
          <div
            className="relative hidden lg:block"
            onMouseEnter={() => setLocationOpen(true)}
            onMouseLeave={() => setLocationOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setLocationOpen(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setLocationOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setLocationOpen((open) => !open)}
              className="group inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-3.5 text-[15px] font-medium text-white transition hover:border-cyan-300/50 hover:bg-white/[0.08] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-expanded={locationOpen}
              aria-controls="location-navigation"
              aria-haspopup="menu"
            >
              <GlobeIcon />
              <span>{activeRegion?.shortName ?? "Global"}</span>
              <svg viewBox="0 0 12 8" className={`h-2 w-3 transition-transform duration-200 ${locationOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="m1 1.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              id="location-navigation"
              className={`absolute right-0 top-full z-50 w-[320px] pt-3 transition duration-200 ${locationOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`}
            >
              <div className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900 shadow-[0_24px_70px_-24px_rgba(2,8,23,.95)]">
                <div className="border-b border-white/10 px-5 py-4">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-300">GGMS Analytics</span>
                  <span className="mt-1 block text-sm text-slate-300">Choose your website</span>
                </div>
                <div className="p-2" role="menu">
                  <a
                    href={globalHref}
                    onClick={() => setLocationOpen(false)}
                    className="group/location flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-cyan-300/10 focus-visible:bg-cyan-300/10 focus-visible:outline-none"
                    role="menuitem"
                    aria-current={!activeRegion ? "page" : undefined}
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-[11px] font-bold tracking-wider text-cyan-200">GL</span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white group-hover/location:text-cyan-200">Global</span>
                      <span className="mt-0.5 block text-xs text-slate-400">International website</span>
                    </span>
                    {!activeRegion && <span className="ml-auto text-cyan-300" aria-hidden="true">●</span>}
                  </a>
                  {locationLinks.map((location) => (
                    <a
                      key={location.code}
                      href={switchRegionHref(location.slug)}
                      onClick={() => setLocationOpen(false)}
                      className="group/location flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-cyan-300/10 focus-visible:bg-cyan-300/10 focus-visible:outline-none"
                      role="menuitem"
                      aria-current={activeRegion?.slug === location.slug ? "page" : undefined}
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-[11px] font-bold tracking-wider text-cyan-200">{location.code}</span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white group-hover/location:text-cyan-200">{location.name}</span>
                        <span className="mt-0.5 block text-xs text-slate-400">{location.role}</span>
                      </span>
                      <span className="ml-auto text-cyan-300 transition-transform group-hover/location:translate-x-0.5" aria-hidden="true">{activeRegion?.slug === location.slug ? "●" : "→"}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
              <Link href={regionalHref("/services")} onClick={closeMobile} className="font-semibold transition hover:text-cyan-300">Services</Link>
              <button type="button" onClick={() => setMobileServicesOpen((open) => !open)} className="grid h-9 w-9 place-items-center rounded-md border border-slate-700 text-cyan-300" aria-expanded={mobileServicesOpen} aria-label="Toggle service links">
                <span className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} aria-hidden="true">↓</span>
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="grid gap-2 border-b border-slate-800 py-4 sm:grid-cols-2">
                {serviceLinks.map((service) => (
                  <Link key={service.href} href={regionalHref(service.href)} onClick={closeMobile} className="group/mobile-service flex gap-3 rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-[0_14px_30px_-22px_rgba(34,211,238,.55)] transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-slate-800">
                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.7)]" aria-hidden="true" />
                    <span><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300/80">{service.outcome}</span><span className="mt-1 block text-sm font-semibold transition group-hover/mobile-service:text-cyan-200">{service.title}</span></span>
                  </Link>
                ))}
              </div>
            )}

            <div className="grid py-3">
              {mainLinks.map(([label, href]) => (
                <Link key={href} href={regionalHref(href)} onClick={closeMobile} className="border-b border-slate-800 py-4 text-[15px] font-medium transition hover:text-cyan-300">{label}</Link>
              ))}
            </div>

            <div className="mb-4 rounded-xl border border-slate-700 bg-slate-800/55 p-2">
              <div className="flex items-center gap-2 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                <GlobeIcon />
                {activeRegion?.name ?? "Global website"}
              </div>
              <div className="grid gap-1 sm:grid-cols-3">
                <a href={globalHref} onClick={closeMobile} className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-cyan-300/10 hover:text-cyan-200" aria-current={!activeRegion ? "page" : undefined}>
                  <span className="text-xs font-bold text-cyan-300">GL</span>
                  <span><span className="block text-sm font-semibold">Global</span><span className="block text-xs text-slate-400">International website</span></span>
                </a>
                {locationLinks.map((location) => (
                  <a key={location.code} href={switchRegionHref(location.slug)} onClick={closeMobile} className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-cyan-300/10 hover:text-cyan-200" aria-current={activeRegion?.slug === location.slug ? "page" : undefined}>
                    <span className="text-xs font-bold text-cyan-300">{location.code}</span>
                    <span><span className="block text-sm font-semibold">{location.name}</span><span className="block text-xs text-slate-400">{location.role}</span></span>
                  </a>
                ))}
              </div>
            </div>

            <Link href={regionalHref("/lets-talk")} onClick={closeMobile} className="mt-3 flex w-full items-center justify-center rounded-md bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Start a Project</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

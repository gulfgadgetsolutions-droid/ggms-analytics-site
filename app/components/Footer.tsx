import Link from "next/link";

const serviceLinks = [
  ["Data & AI Strategy", "/services/data-ai-strategy"],
  ["Data Engineering", "/services/data-engineering"],
  ["Business Intelligence", "/services/data-analytics"],
  ["Data Science", "/services/data-science"],
  ["Generative & Agentic AI", "/services/ai-automation"],
  ["Managed Data & AI", "/services/managed-data-ai"],
];

const companyLinks = [
  ["Services", "/services"],
  ["Industries", "/industries"],
  ["Insights", "/insights"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#070d1f] text-slate-300">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-3xl" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-16">
        <div className="relative mb-14 grid gap-8 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-cyan-400/[0.04] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur sm:p-9 lg:grid-cols-[1fr_220px_auto] lg:items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_50%,rgba(34,211,238,0.12),transparent_26%)]" />
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">Start a conversation</p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">Have a data or AI challenge worth solving?</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Tell us where you are today. We&apos;ll help identify a practical next step.</p>
          </div>
          <div className="relative z-10 hidden h-36 w-52 items-center justify-center lg:flex" aria-hidden="true">
            <div className="floating-orb-1 absolute h-28 w-28 rounded-full border border-cyan-300/30 bg-cyan-400/[0.05] shadow-[0_0_60px_rgba(34,211,238,0.20),inset_0_0_35px_rgba(34,211,238,0.12)]" />
            <div className="absolute h-20 w-20 rotate-45 rounded-2xl border border-cyan-300/35 bg-gradient-to-br from-cyan-300/20 to-blue-500/10 shadow-[0_0_35px_rgba(34,211,238,0.22)] backdrop-blur" style={{ transform: "rotateX(58deg) rotateZ(45deg)" }} />
            <div className="absolute h-14 w-14 rounded-xl border border-blue-300/40 bg-gradient-to-br from-cyan-300/30 to-blue-500/20 shadow-[0_0_28px_rgba(59,130,246,0.30)]" style={{ transform: "rotateX(58deg) rotateZ(45deg) translateZ(18px)" }} />
            <div className="absolute h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_22px_8px_rgba(103,232,249,0.45)]" />
            <span className="floating-orb-2 absolute left-3 top-5 h-3 w-3 rounded-sm border border-cyan-300/50 bg-cyan-300/30 shadow-[0_0_14px_rgba(34,211,238,0.45)]" />
            <span className="floating-orb-1 absolute bottom-4 right-5 h-3 w-3 rounded-sm border border-blue-300/50 bg-blue-300/30 shadow-[0_0_14px_rgba(96,165,250,0.45)]" />
            <span className="absolute right-3 top-7 h-px w-12 rotate-[-24deg] bg-gradient-to-r from-cyan-300/60 to-transparent" />
            <span className="absolute bottom-8 left-2 h-px w-12 rotate-[28deg] bg-gradient-to-l from-blue-300/60 to-transparent" />
          </div>

          <Link href="/lets-talk" className="group relative z-10 inline-flex items-center justify-center rounded-lg border border-cyan-200/20 bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.22)] transition hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_44px_rgba(34,211,238,0.32)]">
            Let&apos;s Talk <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-12 border-b border-slate-800 pb-14 md:grid-cols-2 lg:grid-cols-[1.15fr_1.4fr_0.7fr_0.9fr]">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-white">GGMS <span className="text-cyan-400">Analytics</span></Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">GGMS Analytics delivers practical data, analytics, engineering, and AI solutions designed around measurable business outcomes.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Data", "Analytics", "AI", "Cloud"].map((item) => (
                <span key={item} className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-400">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Services</h3>
            <ul className="mt-5 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {serviceLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="group inline-flex items-center gap-3 text-slate-400 transition duration-300 hover:translate-x-1 hover:text-cyan-300">
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="group inline-flex items-center gap-2 text-slate-400 transition hover:text-cyan-300">
                    <span className="h-px w-0 bg-cyan-400 transition-all group-hover:w-3" />{label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Get in Touch</h3>
            <a href="mailto:info@ggmsglobal.com" className="mt-5 block break-all text-sm text-slate-400 transition hover:text-cyan-300">info@ggmsglobal.com</a>
            <p className="mt-5 text-xs leading-6 text-slate-500">Enterprise data, analytics, engineering, and AI solutions across the Gulf.</p>
            <Link href="/contact" className="group mt-5 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">Contact details <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} GGMS Analytics. All rights reserved.</p>
          <p>Strategy · Engineering · Analytics · AI · Managed Services</p>
        </div>
      </div>
    </footer>
  );
}

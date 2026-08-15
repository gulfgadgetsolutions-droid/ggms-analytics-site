import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          GGMS <span className="text-cyan-500">Analytics</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">

          <div className="relative group">
            <Link href="/services" className="hover:text-slate-900">
              Services
            </Link>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-slate-900 rounded-xl shadow-xl border border-slate-700 p-4 w-72 grid gap-1">
                <Link href="/services/data-engineering" className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition">
                  <span className="font-semibold text-sm text-white">Data Engineering</span>
                  <span className="text-xs text-slate-300 mt-1">ETL/ELT pipelines, SAP and Azure integration</span>
                </Link>
                <Link href="/services/data-analytics" className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition">
                  <span className="font-semibold text-sm text-white">Data Analytics and BI</span>
                  <span className="text-xs text-slate-300 mt-1">Power BI dashboards and semantic models</span>
                </Link>
                <Link href="/services/data-science" className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition">
                  <span className="font-semibold text-sm text-white">Data Science</span>
                  <span className="text-xs text-slate-300 mt-1">Forecasting and predictive models</span>
                </Link>
                <Link href="/services/ai-automation" className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition">
                  <span className="font-semibold text-sm text-white">AI and Automation</span>
                  <span className="text-xs text-slate-300 mt-1">Process and reporting automation</span>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-slate-900">About</Link>
         <Link href="/technologies" className="hover:text-slate-900">Industries</Link>
          <Link href="/#work" className="hover:text-slate-900">Our Work</Link>
          <Link href="/#contact" className="hover:text-slate-900">Contact</Link>
        </nav>

        <Link
          href="/#contact"
          className="bg-cyan-500 text-slate-950 text-sm font-semibold px-4 py-2 rounded-md hover:bg-cyan-400 hover:scale-105 transition"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
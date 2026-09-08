import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Industries() {
  return (
    <main className="depth-page depth-technology min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="depth-hero relative bg-slate-900 overflow-hidden">
        <div className="depth-hero-copy relative max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            Industries
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-semibold tracking-tight leading-[1.2] max-w-3xl mx-auto text-white mb-4">
            Built for the sectors that can&apos;t afford bad data
          </h1>
          <p className="text-lg text-slate-300">
            Enterprise data engineering and analytics for the industries we know best.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="depth-grid grid md:grid-cols-2 gap-6">

          <div className="depth-card bg-white border-2 border-cyan-400 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">Proven Track Record</span>
            <h2 className="text-xl font-semibold mt-2 mb-3">Oil &amp; Gas / Energy</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              SAP and SQL Server data pipelines feeding Power BI dashboards for expenditure tracking
              and operational reporting.
            </p>
            <Link href="/#work" className="text-cyan-600 text-sm font-semibold hover:underline">
              See our case study &rarr;
            </Link>
          </div>

          <div className="depth-card bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3">Government &amp; Public Sector</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reliable reporting infrastructure and dashboards for departments that need clear,
              auditable data.
            </p>
          </div>

          <div className="depth-card bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3">Banking &amp; Financial Services</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Secure, row-level-controlled dashboards for financial reporting and performance tracking.
            </p>
          </div>

          <div className="depth-card bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3">Manufacturing &amp; Logistics</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Operational dashboards connecting production, inventory, and supply chain data.
            </p>
          </div>

          <div className="depth-card bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3">Healthcare</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reporting pipelines built with the care sensitive operational data requires.
            </p>
          </div>

          <div className="depth-card bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-3">Hospitality</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Occupancy, revenue, and performance dashboards for hospitality operations.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-4">
          Don&apos;t see your industry?
        </h2>
        <p className="text-slate-300 mb-8">Tell us what you&apos;re working with &mdash; we&apos;ll tell you how we can help.</p>
        <Link
          href="/#contact"
          className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-md font-semibold hover:bg-cyan-400 hover:scale-105 transition inline-block"
        >
          Talk to Us
        </Link>
      </section>

      <Footer />
    </main>
  );
}

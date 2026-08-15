import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DataEngineering() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative bg-slate-900 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            Services
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-semibold tracking-tight leading-[1.2] max-w-3xl mx-auto text-white">
            Data Engineering
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-slate-600 leading-relaxed mb-8">
          We build the pipelines that move and clean your data so everything downstream &mdash; reports,
          dashboards, models &mdash; can actually be trusted.
        </p>
        <ul className="text-slate-600 space-y-3 list-disc list-inside">
          <li>ETL/ELT pipeline design and development</li>
          <li>SAP and SQL Server data integration</li>
          <li>Azure Data Factory pipelines</li>
          <li>Data warehousing and modeling</li>
        </ul>
      </section>

      <section className="bg-slate-900 text-white py-16 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-4">
          Need this for your data?
        </h2>
        <a href="/#contact" className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-md font-semibold hover:bg-cyan-400 hover:scale-105 transition inline-block">
          Talk to Us
        </a>
      </section>

      <Footer />
    </main>
  );
}
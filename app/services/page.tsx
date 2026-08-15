import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-4">
            Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-slate-600">
            Four practice areas, one team. From raw enterprise data to decisions your business can act on.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        <div className="grid md:grid-cols-3 gap-8 items-start border-b border-slate-100 pb-16">
          <div>
            <span className="text-cyan-500 font-bold text-sm">01</span>
            <h2 className="text-2xl font-semibold mt-2">Data Engineering</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-600 leading-relaxed mb-4">
              We build the pipelines that move and clean your data so everything downstream &mdash; reports,
              dashboards, models &mdash; can actually be trusted.
            </p>
            <ul className="text-slate-600 space-y-2 list-disc list-inside">
              <li>ETL/ELT pipeline design and development</li>
              <li>SAP and SQL Server data integration</li>
              <li>Azure Data Factory pipelines</li>
              <li>Data warehousing and modeling</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start border-b border-slate-100 pb-16">
          <div>
            <span className="text-cyan-500 font-bold text-sm">02</span>
            <h2 className="text-2xl font-semibold mt-2">Data Analytics &amp; BI</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-600 leading-relaxed mb-4">
              We turn that clean data into dashboards people actually open every day, not reports
              that get built once and forgotten.
            </p>
            <ul className="text-slate-600 space-y-2 list-disc list-inside">
              <li>Power BI dashboard design and build</li>
              <li>Semantic models and DAX measures</li>
              <li>Automated, scheduled reporting</li>
              <li>Row-level security and access control setup</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start border-b border-slate-100 pb-16">
          <div>
            <span className="text-cyan-500 font-bold text-sm">03</span>
            <h2 className="text-2xl font-semibold mt-2">Data Science</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-600 leading-relaxed mb-4">
              Once the foundation is solid, we build models that help you look forward, not just backward.
            </p>
            <ul className="text-slate-600 space-y-2 list-disc list-inside">
              <li>Forecasting and demand planning</li>
              <li>Anomaly detection</li>
              <li>Predictive models on operational data</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <span className="text-cyan-500 font-bold text-sm">04</span>
            <h2 className="text-2xl font-semibold mt-2">AI &amp; Automation</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-slate-600 leading-relaxed mb-4">
              We take the repetitive, manual parts of reporting and operations and let AI handle them.
            </p>
            <ul className="text-slate-600 space-y-2 list-disc list-inside">
              <li>AI-driven process automation</li>
              <li>Automated reporting and alerting</li>
              <li>Enterprise knowledge base and internal AI tools</li>
            </ul>
          </div>
        </div>

      </section>

      <section className="bg-slate-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Not sure which one you need?</h2>
        <p className="text-slate-300 mb-8">Tell us what you&apos;re working with, and we&apos;ll point you to the right starting point.</p>
        <a
          href="/#contact"
          className="bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-600 transition inline-block"
        >
          Talk to Us
        </a>
      </section>

      <Footer />
    </main>
  );
}
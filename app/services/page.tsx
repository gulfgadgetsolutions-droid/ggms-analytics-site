export default function Services() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight">GGMS Analytics</a>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="/services" className="text-slate-900">Services</a>
            <a href="/#work" className="hover:text-slate-900">Our Work</a>
            <a href="/#about" className="hover:text-slate-900">About</a>
            <a href="/#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="/#contact" className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-700">
            Get in Touch
          </a>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
        <p className="text-lg text-slate-600">
          Four practice areas, one team. From raw enterprise data to decisions your business can act on.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24 space-y-16">

        <div className="grid md:grid-cols-3 gap-8 items-start border-b border-slate-100 pb-16">
          <h2 className="text-2xl font-semibold">Data Engineering</h2>
          <div className="md:col-span-2">
            <p className="text-slate-600 leading-relaxed mb-4">
              We build the pipelines that move and clean your data so everything downstream — reports,
              dashboards, models — can actually be trusted.
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
          <h2 className="text-2xl font-semibold">Data Analytics &amp; BI</h2>
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
          <h2 className="text-2xl font-semibold">Data Science</h2>
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
          <h2 className="text-2xl font-semibold">AI &amp; Automation</h2>
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

      <section className="bg-slate-50 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Not sure which one you need?</h2>
        <p className="text-slate-600 mb-8">Tell us what you&apos;re working with, and we&apos;ll point you to the right starting point.</p>
        <a href="/#contact" className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-700 inline-block">
          Talk to Us
        </a>
      </section>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        GGMS Analytics, a division of GGMS Global IT Solutions.
      </footer>
    </main>
  );
}
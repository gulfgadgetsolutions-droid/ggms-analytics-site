export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">GGMS Analytics</span>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="/services" className="hover:text-slate-900">Services</a>
            <a href="#work" className="hover:text-slate-900">Our Work</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#contact" className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-700">
            Get in Touch
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
          Data Analytics, Data Engineering, Data Science, AI &amp; Business Intelligence solutions that turn enterprise data into actionable insights.
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Built by data engineers who work hands-on with SAP, Azure, SQL, and Power BI — under GGMS Global&apos;s 30+ year enterprise IT track record.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-700">
            Talk to Us
          </a>
          <a href="/services" className="border border-slate-300 px-6 py-3 rounded-md font-medium hover:bg-slate-50">
            See Our Services
          </a>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold mb-2">Data Engineering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">ETL/ELT pipelines, SAP and SQL Server integration, Azure Data Factory, and data warehousing built for reliability at scale.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold mb-2">Data Analytics and BI</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Power BI dashboards and semantic models that turn raw data into decisions leadership actually trusts.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold mb-2">Data Science</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Forecasting, anomaly detection, and predictive models built on your real operational data.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold mb-2">AI and Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">AI-driven process automation and reporting automation that cuts manual work out of recurring tasks.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-4">Real Work, Real Results</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          A look at how we have applied this in practice.
        </p>
        <div className="border border-slate-200 rounded-lg p-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Case Study</span>
          <h3 className="text-xl font-semibold mt-2 mb-3">SAP and SQL Server to Power BI: Enterprise AFE Dashboard</h3>
          <p className="text-slate-600 leading-relaxed">
            Built a full data pipeline and Power BI reporting layer on top of SAP and SQL Server data, giving leadership a live view of Authorization for Expenditure tracking instead of static spreadsheet reporting.
          </p>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-slate-600 leading-relaxed">
            GGMS Analytics is the data engineering and analytics practice of GGMS Global IT Solutions, an Oman-based IT company with a 30+ year group track record across the Gulf.
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s Talk About Your Data</h2>
        <p className="text-slate-600 mb-8">Tell us what you are working with, and we will tell you what is possible.</p>
        <a href="mailto:info@ggmsglobal.com" className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-700 inline-block">
          Email Us
        </a>
      </section>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
        GGMS Analytics, a division of GGMS Global IT Solutions.
      </footer>
    </main>
  );
}
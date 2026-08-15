import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative animated-hero overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            GGMS Global &middot; Analytics Practice
          </span>
<h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-semibold tracking-tight leading-[1.2] max-w-3xl mx-auto text-white">            Data Analytics, Data Engineering, Data Science &amp; AI solutions
            that turn enterprise data into actionable insights.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Built by data engineers who work hands-on with SAP, Azure, SQL, and Power BI
            &mdash; under GGMS Global&apos;s 30+ year enterprise IT track record.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#contact" className="bg-cyan-500 text-slate-950 px-7 py-3 rounded-md font-semibold hover:bg-cyan-400 transition">
              Talk to Us
            </a>
            <a href="/services" className="border border-slate-600 text-white px-7 py-3 rounded-md font-semibold hover:bg-slate-900 transition">
              See Our Services
            </a>
          </div>

          <div className="mt-16 flex flex-col items-center text-slate-500 text-xs tracking-widest uppercase">
            <span className="mb-2">Scroll</span>
            <span className="animate-bounce">&darr;</span>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">What We Do</span>
          <h2 className="text-3xl font-bold mt-3 mb-5">We solve the data problems that stall decisions</h2>
          <p className="text-slate-600 leading-relaxed">
            Every enterprise sits on data it can&apos;t fully use &mdash; locked in SAP, scattered across
            SQL Server, or buried in spreadsheets. We build the pipelines, models, and dashboards
            that turn that data into something leadership actually trusts and acts on.
          </p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-10 text-white">
          <p className="text-4xl font-bold text-cyan-400 mb-2">30+</p>
          <p className="text-slate-300 text-sm mb-6">years of GGMS Global group track record in enterprise IT</p>
          <p className="text-4xl font-bold text-cyan-400 mb-2">SAP &middot; Azure</p>
          <p className="text-slate-300 text-sm">the real stack behind every engagement</p>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">Services</span>
            <h2 className="text-3xl font-bold mt-3">Four practice areas, one team</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
              <span className="text-cyan-500 font-bold text-sm">01</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">Data Engineering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">ETL/ELT pipelines, SAP and SQL Server integration, Azure Data Factory.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition">
              <span className="text-cyan-500 font-bold text-sm">02</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">Data Analytics and BI</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Power BI dashboards and semantic models leadership trusts.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition">
              <span className="text-cyan-500 font-bold text-sm">03</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">Data Science</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Forecasting, anomaly detection, predictive models.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition">
              <span className="text-cyan-500 font-bold text-sm">04</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">AI and Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">AI-driven process and reporting automation.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="/services" className="text-cyan-500 font-semibold hover:underline">
              See all services &rarr;
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">Proof</span>
          <h2 className="text-3xl font-bold mt-3">Real Work, Real Results</h2>
        </div>
        <div className="bg-slate-900 text-white rounded-2xl p-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-cyan-400">Case Study</span>
          <h3 className="text-xl font-semibold mt-3 mb-3">
            SAP and SQL Server to Power BI: Enterprise AFE Dashboard
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            Built a full data pipeline and Power BI reporting layer on top of SAP and SQL Server data,
            giving leadership a live view of Authorization for Expenditure tracking instead of static
            spreadsheet reporting.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-14 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-6">
            Built on the tools enterprises already trust
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-slate-700 font-semibold text-lg">
            <span>Azure</span>
            <span>SAP</span>
            <span>Power BI</span>
            <span>SQL Server</span>
            <span>Python</span>
          </div>
        </div>
      </section>
<section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">Who We Serve</span>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold mt-3 mb-6">
          Built for the sectors that can&apos;t afford bad data
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-8">
          From Oil &amp; Gas to Government, Banking, and beyond &mdash; see how we work with your industry.
        </p>
        <a
          href="/technologies"
          className="border border-slate-300 px-6 py-3 rounded-md font-semibold hover:bg-slate-50 hover:border-cyan-400 transition inline-block"
        >
          See Our Industries &rarr;
        </a>
      </section>
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk About Your Data</h2>
        <p className="text-slate-600 mb-8">Tell us what you&apos;re working with &mdash; we&apos;ll tell you what&apos;s possible.</p>
        <a
          href="mailto:info@ggmsglobal.com"
          className="bg-cyan-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-600 transition inline-block"
        >
          Email Us
        </a>
      </section>

      <Footer />
    </main>
  );
}
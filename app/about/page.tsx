import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-cyan-500 uppercase mb-5">
            About GGMS Analytics
          </span>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-slate-950">
            Data expertise,
            <br />
            backed by 30+ years of enterprise IT
          </h1>

          <p className="mt-7 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            GGMS Analytics is the data engineering and analytics practice of
            GGMS Global IT Solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-cyan-500 uppercase">
              Our Story
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 mb-7 text-slate-950">
              Built on a foundation that already works
            </h2>

            <p className="text-slate-600 leading-8 mb-5">
              GGMS Global IT Solutions has spent over 30 years delivering
              enterprise IT infrastructure across Oman and the Gulf — CCTV and
              ELV systems, networking, cybersecurity, ERP, and managed services
              for organizations that cannot afford downtime.
            </p>

            <p className="text-slate-600 leading-8">
              GGMS Analytics brings that same delivery discipline to data.
              We apply the rigor GGMS has always used for critical
              infrastructure to data pipelines, analytics, dashboards, and AI
              automation.
            </p>
          </div>

          {/* Premium Stats Card */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-10 md:p-12 text-white shadow-2xl">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative">
              <p className="text-6xl font-semibold text-cyan-400">
                30+
              </p>

              <p className="text-slate-300 mt-3 mb-12">
                years of group track record in enterprise IT
              </p>

              <div className="h-px bg-slate-800 mb-10" />

              <p className="text-5xl font-semibold text-cyan-400">
                3
              </p>

              <p className="text-slate-300 mt-3">
                markets served — Oman, UAE, and Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-[0.25em] text-cyan-500 uppercase">
              Our Group
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-slate-950">
              Enterprise capability across the Gulf
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300">
              <div className="text-cyan-500 text-sm font-semibold mb-5">
                OMAN
              </div>

              <h3 className="text-xl font-semibold mb-3">
                GGMS Global
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-7">
                IT infrastructure, ELV, cybersecurity, ERP, and managed
                services.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300">
              <div className="text-cyan-500 text-sm font-semibold mb-5">
                UAE
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Kreative Growth IT Solutions
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-7">
                Dubai-based sister entity operating under the same group
                standards.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all duration-300">
              <div className="text-cyan-500 text-sm font-semibold mb-5">
                SAUDI ARABIA
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Pentagram Solutions
              </h3>

              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-7">
                Saudi Arabia-based sister entity operating under the same group
                standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_55%)]" />

        <div className="relative max-w-3xl mx-auto px-6">

          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Let&apos;s Work Together
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-5">
            Let&apos;s build something reliable together
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Tell us what you&apos;re working with and let&apos;s explore what
            better data can do for your business.
          </p>

          <a
            href="/#contact"
            className="bg-cyan-500 text-slate-950 px-7 py-3 rounded-md font-semibold hover:bg-cyan-400 transition inline-block"
          >
            Get in Touch
          </a>

        </div>
      </section>

      <Footer />
    </main>
  );
}
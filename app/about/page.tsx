import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-4">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Data expertise, backed by 30+ years of enterprise IT
          </h1>
          <p className="text-lg text-slate-600">
            GGMS Analytics is the data engineering and analytics practice of GGMS Global IT Solutions.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">Our Story</span>
            <h2 className="text-3xl font-bold mt-3 mb-5">Built on a foundation that already works</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              GGMS Global IT Solutions has spent over 30 years delivering enterprise IT infrastructure
              across Oman and the Gulf &mdash; CCTV and ELV systems, networking, cybersecurity, ERP,
              and managed services for organizations that can&apos;t afford downtime.
            </p>
            <p className="text-slate-600 leading-relaxed">
              GGMS Analytics brings that same delivery discipline to data. We apply the rigor GGMS
              has always used for critical infrastructure to data pipelines, dashboards, and AI
              automation &mdash; because reporting your business depends on deserves the same standard.
            </p>
          </div>
          <div className="bg-slate-900 rounded-2xl p-10 text-white">
            <p className="text-4xl font-bold text-cyan-400 mb-2">30+</p>
            <p className="text-slate-300 text-sm mb-6">years of group track record in enterprise IT</p>
            <p className="text-4xl font-bold text-cyan-400 mb-2">3</p>
            <p className="text-slate-300 text-sm">markets served &mdash; Oman, UAE, and Saudi Arabia</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center border-t border-slate-100 pt-16">
          <div>
            <h3 className="font-semibold text-lg mb-2">GGMS Global</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Oman &mdash; IT infrastructure, ELV, cybersecurity, ERP, and managed services.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Kreative Growth IT Solutions</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Dubai &mdash; sister entity under the same group standard.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Pentagram Solutions</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Saudi Arabia &mdash; sister entity under the same group standard.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Let&apos;s build something reliable together</h2>
        <a
          href="/#contact"
          className="bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-600 transition inline-block mt-4"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </main>
  );
}
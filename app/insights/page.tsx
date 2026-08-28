import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const insights = [
  {
    category: "Data & Analytics",
    title: "Building a Modern Data Foundation for Business Analytics",
    description:
      "How organizations can create reliable data foundations that support reporting, analytics, and better business decisions.",
  },
  {
    category: "Business Intelligence",
    title: "From Dashboards to Decision Intelligence",
    description:
      "Why modern analytics is moving beyond static reporting toward actionable insights and faster decision-making.",
  },
  {
    category: "Cloud & Data Engineering",
    title: "Modernizing Data Platforms with Azure",
    description:
      "Key considerations for building scalable cloud data platforms using modern Azure data services.",
  },
  {
    category: "AI",
    title: "Where AI Fits into the Modern Data Strategy",
    description:
      "Understanding how organizations can use AI and intelligent automation to improve processes and business outcomes.",
  },
  {
    category: "Financial Analytics",
    title: "Turning Financial Data into Business Intelligence",
    description:
      "How finance teams can use integrated data and analytics to improve forecasting, performance management, and visibility.",
  },
  {
    category: "Data Strategy",
    title: "Creating a Data Strategy That Scales with the Business",
    description:
      "A practical approach to connecting business priorities, data platforms, analytics, and AI.",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">

          <span className="inline-block text-xs font-semibold tracking-[0.25em] text-cyan-500 uppercase mb-5">
            Insights
          </span>

          <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-slate-950">
            Ideas that turn data into better decisions.
          </h1>

          <p className="max-w-3xl mt-7 text-lg md:text-xl text-slate-600 leading-relaxed">
            Perspectives on data, analytics, cloud, AI, and the technologies
            helping organizations build smarter businesses.
          </p>

        </div>
      </section>

      {/* Insights */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-28">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {insights.map((insight) => (
            <article
              key={insight.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 hover:bg-slate-950 hover:border-slate-950 hover:text-white transition-all duration-300"
            >

              <span className="text-cyan-500 text-xs font-semibold uppercase tracking-wider">
                {insight.category}
              </span>

              <h2 className="mt-5 text-xl font-semibold leading-snug group-hover:text-cyan-400 transition">
                {insight.title}
              </h2>

              <p className="mt-4 text-sm text-slate-600 group-hover:text-slate-300 leading-7 transition">
                {insight.description}
              </p>

              <Link
                href="#"
                className="mt-6 text-sm font-semibold text-slate-900 group-hover:text-cyan-400 transition"
              >
                Read more →
              </Link>

            </article>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-24 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_55%)]" />

        <div className="relative max-w-3xl mx-auto px-6">

          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            Have a Challenge?
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-5">
            Let's turn your data into something useful.
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Whether you're modernizing your data platform, improving
            analytics, or exploring AI, let's discuss what you're trying
            to achieve.
          </p>

          <Link
            href="/contact"
            className="bg-cyan-500 text-slate-950 px-7 py-3 rounded-md font-semibold hover:bg-cyan-400 transition inline-block"
          >
            Let's Talk
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
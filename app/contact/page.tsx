import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Contact GGMS Global
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Let&apos;s build
              <br />
              <span className="text-slate-400">what&apos;s next.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Turn data, technology and ideas into solutions that move your
              business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact area */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.4fr] lg:gap-24">
          
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Talk to us
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Have a challenge?
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
              Whether you need help with data analytics, cloud, AI,
              engineering or a custom technology solution, tell us what
              you&apos;re working on.
            </p>

            <div className="mt-10 space-y-7">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Business inquiries
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Discuss your business or technology requirements.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Partnerships
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Explore alliances and collaboration opportunities.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Careers
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Interested in building with GGMS?
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                Send us an inquiry
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Tell us a little about what you need and we&apos;ll get back
                to you.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Bottom statement */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
          <p className="max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-slate-800 md:text-4xl">
            Data. Cloud. Analytics. AI. Engineering.
            <span className="text-slate-400">
              {" "}
              One technology partner for what&apos;s next.
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
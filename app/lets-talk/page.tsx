"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LetsTalk() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    stage: "",
    help: "",
    timeline: "",
    details: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Backend/email connection will be added separately.
    console.log("Let's Talk submission:", form);
  }

  const inputClass =
    "w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-[15px] text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500";

  const optionClass =
    "cursor-pointer rounded-full border px-4 py-2.5 text-sm transition";

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(6,182,212,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-24 md:px-10 md:pb-20 md:pt-28">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Let&apos;s Talk
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Tell us what
            <br />
            you&apos;re trying to solve.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Tell us about the challenge, project, or opportunity you want
            to discuss. The more context you share, the better we can
            prepare for the conversation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
        <form onSubmit={handleSubmit} className="space-y-14">

          {/* What do you want to discuss? */}
          <div>
            <p className="mb-5 text-lg font-semibold">
              What do you want to talk to us about?
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Data & AI Strategy",
                "Data & Analytics",
                "Data Engineering",
                "Azure / Cloud",
                "Generative AI, Agentic AI & Automation",
                "Managed Data & AI Services",
                "Power BI / BI",
                "Application Development",
                "Something else",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateField("interest", item)}
                  className={`${optionClass} ${
                    form.interest === item
                      ? "border-cyan-500 bg-cyan-500 text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Main reason */}
          <div>
            <label
              htmlFor="details"
              className="mb-4 block text-lg font-semibold"
            >
              What are you trying to achieve?
            </label>

            <p className="mb-5 text-sm text-slate-500">
              Tell us about the problem, project, opportunity, or idea
              you&apos;re working on.
            </p>

            <textarea
              id="details"
              required
              rows={7}
              placeholder="For example: We currently have multiple Excel reports and want to build a centralized Power BI solution..."
              value={form.details}
              onChange={(e) =>
                updateField("details", e.target.value)
              }
              className="w-full resize-none border border-slate-300 bg-slate-50 px-5 py-4 text-[15px] leading-7 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white"
            />
          </div>

          {/* Project stage */}
          <div>
            <p className="mb-5 text-lg font-semibold">
              Where are you right now?
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Exploring an idea",
                "Planning a project",
                "Ready to start",
                "Improving an existing system",
                "Need ongoing support",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateField("stage", item)}
                  className={`${optionClass} ${
                    form.stage === item
                      ? "border-cyan-500 bg-cyan-500 text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* What help do you need? */}
          <div>
            <p className="mb-5 text-lg font-semibold">
              What would you like GGMS to help with?
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Build something new",
                "Improve an existing solution",
                "Consulting / Strategy",
                "Data / Analytics",
                "Cloud Migration",
                "AI Implementation",
                "Not sure yet",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateField("help", item)}
                  className={`${optionClass} ${
                    form.help === item
                      ? "border-cyan-500 bg-cyan-500 text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div>
            <p className="mb-7 text-lg font-semibold">
              Tell us how to reach you
            </p>

            <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name *"
                value={form.name}
                onChange={(e) =>
                  updateField("name", e.target.value)
                }
                className={inputClass}
              />

              <input
                type="email"
                required
                placeholder="Work email *"
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className={inputClass}
              />

              <input
                type="text"
                required
                placeholder="Company / organization *"
                value={form.company}
                onChange={(e) =>
                  updateField("company", e.target.value)
                }
                className={inputClass}
              />

              <input
                type="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                className={inputClass}
              />
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="mb-5 text-lg font-semibold">
              When are you looking to start?
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Immediately",
                "Within 1 month",
                "1–3 months",
                "3–6 months",
                "Just exploring",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => updateField("timeline", item)}
                  className={`${optionClass} ${
                    form.timeline === item
                      ? "border-cyan-500 bg-cyan-500 text-white"
                      : "border-slate-300 bg-white text-slate-600 hover:border-slate-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-5 border-t border-slate-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-xs leading-5 text-slate-400">
              Your information will only be used to understand your
              requirements and respond to your inquiry.
            </p>

            <button
              type="submit"
              className="rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              Start the conversation →
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
}

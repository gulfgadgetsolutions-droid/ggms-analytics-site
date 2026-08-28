"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const [form, setForm] = useState({
    purpose: "Business Inquiry",
    name: "",
    organization: "",
    jobTitle: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Contact form submission failed");
      }

      setStatus("sent");

      setForm({
        purpose: "Business Inquiry",
        name: "",
        organization: "",
        jobTitle: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-cyan-200 bg-cyan-50 p-8">
        <p className="text-xl font-semibold text-slate-950">
          Thanks — we&apos;ve received your message.
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Our team will review your inquiry and get back to you soon.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
        >
          Send another inquiry →
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-[15px] text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Purpose */}
      <div>
        <label className="mb-4 block text-sm font-semibold text-slate-950">
          I&apos;m interested in
        </label>

        <div className="flex flex-wrap gap-2">
          {[
            "Business Inquiry",
            "Partnership",
            "Career",
            "Proposal",
          ].map((purpose) => (
            <button
              key={purpose}
              type="button"
              onClick={() => updateField("purpose", purpose)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                form.purpose === purpose
                  ? "border-cyan-500 bg-cyan-500 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-slate-500"
              }`}
            >
              {purpose}
            </button>
          ))}
        </div>
      </div>

      {/* Name / Company */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>

          <input
            id="name"
            type="text"
            required
            placeholder="Your name *"
            value={form.name}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
            className={inputClass}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="organization">
            Company
          </label>

          <input
            id="organization"
            type="text"
            required
            placeholder="Company / organization *"
            value={form.organization}
            onChange={(e) =>
              updateField("organization", e.target.value)
            }
            className={inputClass}
          />
        </div>
      </div>

      {/* Email / Phone */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="email">
            Work email
          </label>

          <input
            id="email"
            type="email"
            required
            placeholder="Work email *"
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            className={inputClass}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="phone">
            Phone
          </label>

          <input
            id="phone"
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

      {/* Job title / Service */}
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="jobTitle">
            Job title
          </label>

          <input
            id="jobTitle"
            type="text"
            placeholder="Job title"
            value={form.jobTitle}
            onChange={(e) =>
              updateField("jobTitle", e.target.value)
            }
            className={inputClass}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="service">
            Service
          </label>

          <select
            id="service"
            value={form.service}
            onChange={(e) =>
              updateField("service", e.target.value)
            }
            className={`${inputClass} text-slate-600`}
          >
            <option value="">What can we help with?</option>
            <option value="Data & AI Strategy">
              Data &amp; AI Strategy
            </option>
            <option value="Data & Analytics">
              Data & Analytics
            </option>
            <option value="Data Engineering & Cloud">
              Data Engineering & Cloud
            </option>
            <option value="Generative AI, Agentic AI & Automation">
              Generative AI, Agentic AI &amp; Automation
            </option>
            <option value="Managed Data & AI Services">
              Managed Data & AI Services
            </option>
            <option value="Digital Engineering">
              Digital Engineering
            </option>
            <option value="Custom Solution">
              Custom Solution
            </option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>

        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us about your project or challenge *"
          value={form.message}
          onChange={(e) =>
            updateField("message", e.target.value)
          }
          className="w-full resize-none border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-[15px] text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      {/* Submit */}
      <div className="flex items-center justify-between gap-6">
        <p className="max-w-xs text-xs leading-5 text-slate-400">
          By submitting this form, you agree to be contacted regarding
          your inquiry.
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "sending"
            ? "Sending..."
            : "Let&apos;s Talk →"}
        </button>
      </div>
    </form>
  );
}

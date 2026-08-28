"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroBackground from "./HeroBackground";

export const slides = [
  {
    eyebrow: "DATA & AI STRATEGY",
    title: "Turn ambition into",
    highlight: "an achievable roadmap.",
    description:
      "Align business priorities, data readiness, architecture, and governance around a practical path forward.",
    technologies: "Strategy · Readiness · Architecture · Governance · Roadmap",
    href: "/services/data-ai-strategy",
  },
  {
    eyebrow: "DATA ENGINEERING",
    title: "Build the data foundation",
    highlight: "your business can trust.",
    description:
      "Design reliable data pipelines and modern platforms that bring enterprise data together.",
    technologies: "SAP · Azure · SQL · Data Factory · Databricks",
    href: "/services/data-engineering",
  },
  {
    eyebrow: "DATA ANALYTICS",
    title: "Turn data into",
    highlight: "decisions that move.",
    description:
      "Transform complex enterprise data into clear dashboards, KPIs, and insights leadership can act on.",
    technologies: "Power BI · SQL · DAX · Reporting · Business Intelligence",
    href: "/services/data-analytics",
  },
  {
    eyebrow: "DATA SCIENCE",
    title: "Discover what your data",
    highlight: "can predict.",
    description:
      "Use advanced analytics, forecasting, and machine learning to uncover patterns and anticipate what comes next.",
    technologies: "Python · Machine Learning · Forecasting · Predictive Analytics",
    href: "/services/data-science",
  },
  {
    eyebrow: "GENERATIVE & AGENTIC AI",
    title: "Make your business",
    highlight: "intelligent by design.",
    description:
      "Bring AI and intelligent automation into everyday operations to reduce manual work and accelerate decisions.",
    technologies: "Generative AI · AI Agents · RAG · Automation · LLMOps",
    href: "/services/ai-automation",
  },
  {
    eyebrow: "MANAGED DATA & AI",
    title: "Keep critical systems",
    highlight: "healthy and improving.",
    description:
      "Monitor, maintain, support, and continuously optimize the data and AI systems your business depends on.",
    technologies: "Monitoring · Support · Data Quality · Optimization · Governance",
    href: "/services/managed-data-ai",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative min-h-[calc(100vh-81px)] overflow-hidden bg-[#071426] text-white">

      {/* =========================================
          3D BACKGROUND
          Receives the exact current slide
         ========================================= */}
      <HeroBackground activeSlide={activeSlide} />

      {/* =========================================
          Background grid
         ========================================= */}
      <div className="absolute inset-0 z-[1] opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
          }}
        />
      </div>

      {/* =========================================
          Glow
         ========================================= */}
      <div className="absolute right-[8%] top-[15%] z-[1] h-[520px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -left-24 top-[12%] z-[1] h-[420px] w-[420px] rounded-full bg-sky-400/[0.06] blur-3xl" />

      {/* =========================================
          Content
         ========================================= */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-24">

        <div className="w-full max-w-3xl">

          {/* Eyebrow */}
          <div
            key={`eyebrow-${activeSlide}`}
            className="animate-[fadeIn_0.7s_ease-out]"
          >
            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-12 bg-cyan-400" />

              <span className="text-xs font-semibold tracking-[0.35em] text-cyan-400">
                {slide.eyebrow}
              </span>

            </div>
          </div>

          {/* Heading */}
          <div
            key={`heading-${activeSlide}`}
            className="animate-[fadeInUp_0.8s_ease-out]"
          >

            <h1 className="font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {slide.title}
              <br />
              <span className="text-cyan-400">
                {slide.highlight}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {slide.description}
            </p>

            <div className="mt-5 text-sm font-medium tracking-wide text-slate-500">
              {slide.technologies}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href={slide.href}
                className="rounded-md bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-400"
              >
                Explore Services
              </Link>

              <Link
                href="/lets-talk"
                className="rounded-md border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
              >
                Let&apos;s Talk
              </Link>

            </div>

          </div>

          {/* =========================================
              Slide progression
             ========================================= */}
          <div className="mt-20 flex items-center gap-8">

            <div className="flex items-center gap-2">

              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-[2px] transition-all duration-500 ${
                    index === activeSlide
                      ? "w-12 bg-cyan-400"
                      : "w-6 bg-slate-700"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 right-10 z-20 hidden flex-col items-center text-slate-500 md:flex">

        <span className="text-[10px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <span className="mt-2 animate-bounce text-cyan-400">
          ↓
        </span>

      </div>

    </section>
  );
}

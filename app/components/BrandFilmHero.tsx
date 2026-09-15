"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const brandClips = [
  {
    desktop: "/videos/ggms-premium-finance-team.mp4",
    mobile: "/videos/ggms-premium-finance-team-mobile.mp4",
    label: "Business leaders reviewing financial data together",
    chapter: "01",
    eyebrow: "Trusted data",
    headline: "Before data becomes insight,",
    emphasis: "it needs trust.",
    description: "We connect finance, operations, and enterprise systems so leaders can act on one version of the truth.",
  },
  {
    desktop: "/videos/ggms-premium-analytics-review.mp4",
    mobile: "/videos/ggms-premium-analytics-review-mobile.mp4",
    label: "A corporate team discussing analytics shown on a laptop",
    chapter: "02",
    eyebrow: "Automation at work",
    headline: "When systems speak,",
    emphasis: "work moves faster.",
    description: "We turn manual reporting, scattered files, and slow approvals into governed workflows built for daily use.",
  },
  {
    desktop: "/videos/ggms-premium-digital-analytics.mp4",
    mobile: "/videos/ggms-premium-digital-analytics-mobile.mp4",
    label: "People reviewing data charts on a laptop and tablet",
    chapter: "03",
    eyebrow: "AI with direction",
    headline: "From signal to decision,",
    emphasis: "GGMS Analytics moves it forward.",
    description: "Data engineering, analytics, automation, and AI come together around measurable business outcomes.",
  },
];

const CHAPTER_DURATION_MS = 7800;

function DataSignalLayer() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block"
        style={{ maskImage: "linear-gradient(to right, transparent 38%, black 62%, black 100%)" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full opacity-55 mix-blend-screen">
          <defs>
            <linearGradient id="brandSignalGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="0.48" stopColor="#67e8f9" stopOpacity="0.82" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="brandBarGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0.08" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.72" />
            </linearGradient>
            <filter id="brandSignalGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <g className="brand-signal-grid" opacity="0.2">
            <path d="M960 102H1548M960 174H1548M960 246H1548M960 318H1548" />
            <path d="M1035 72V344M1165 72V344M1295 72V344M1425 72V344" />
          </g>

          <path className="brand-signal-line" d="M910 606c114-72 212-68 306-6s202 74 330-10" />

          <g filter="url(#brandSignalGlow)">
            <circle className="brand-signal-node" cx="1028" cy="153" r="5" />
            <circle className="brand-signal-node brand-signal-node-late" cx="1230" cy="448" r="4" />
            <circle className="brand-signal-node brand-signal-node-later" cx="1398" cy="668" r="5" />
          </g>

          <g className="brand-signal-bars" opacity="0.78">
            <rect x="1360" y="172" width="12" height="74" rx="6" />
            <rect x="1384" y="134" width="12" height="112" rx="6" />
            <rect x="1408" y="192" width="12" height="54" rx="6" />
            <rect x="1432" y="106" width="12" height="140" rx="6" />
            <rect x="1456" y="154" width="12" height="92" rx="6" />
          </g>

          <g className="brand-signal-rings" transform="translate(1480 514)">
            <circle r="22" />
            <circle r="39" />
            <circle r="57" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .brand-signal-grid path {
          fill: none;
          stroke: rgba(255, 255, 255, 0.42);
          stroke-width: 1;
        }

        .brand-signal-flow {
          fill: none;
          stroke: url(#brandSignalGradient);
          stroke-width: 2;
          stroke-linecap: round;
          stroke-dasharray: 8 18;
          animation: brand-signal-travel 15s linear infinite;
        }

        .brand-signal-flow-b { animation-duration: 19s; animation-direction: reverse; }
        .brand-signal-flow-c { animation-duration: 23s; }

        .brand-signal-line {
          fill: none;
          stroke: rgba(255, 255, 255, 0.24);
          stroke-width: 1.2;
        }

        .brand-signal-node {
          fill: #a5f3fc;
          animation: brand-signal-pulse 3.8s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .brand-signal-node-late { animation-delay: -1.4s; }
        .brand-signal-node-later { animation-delay: -2.6s; }

        .brand-signal-bars rect {
          fill: url(#brandBarGradient);
          animation: brand-bar-breathe 5.5s ease-in-out infinite alternate;
          transform-box: fill-box;
          transform-origin: center bottom;
        }

        .brand-signal-bars rect:nth-child(2) { animation-delay: -1.1s; }
        .brand-signal-bars rect:nth-child(3) { animation-delay: -2.2s; }
        .brand-signal-bars rect:nth-child(4) { animation-delay: -3.3s; }
        .brand-signal-bars rect:nth-child(5) { animation-delay: -4.4s; }

        .brand-signal-rings circle {
          fill: none;
          stroke: rgba(103, 232, 249, 0.32);
          stroke-width: 1.4;
          animation: brand-ring-breathe 5s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }

        .brand-signal-rings circle:nth-child(2) { animation-delay: -1.6s; }
        .brand-signal-rings circle:nth-child(3) { animation-delay: -3.2s; }

        @keyframes brand-signal-travel {
          to { stroke-dashoffset: -260; }
        }

        @keyframes brand-signal-pulse {
          0%, 100% { opacity: 0.42; transform: scale(0.78); }
          50% { opacity: 1; transform: scale(1.38); }
        }

        @keyframes brand-bar-breathe {
          from { opacity: 0.3; transform: scaleY(0.58); }
          to { opacity: 0.92; transform: scaleY(1); }
        }

        @keyframes brand-ring-breathe {
          0%, 100% { opacity: 0.18; transform: scale(0.9); }
          50% { opacity: 0.72; transform: scale(1.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-signal-flow,
          .brand-signal-node,
          .brand-signal-bars rect,
          .brand-signal-rings circle { animation: none; }
        }
      `}</style>
    </>
  );
}

export default function BrandFilmHero() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeClip, setActiveClip] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stateFrame: number | undefined;

    if (reducedMotion.matches) {
      videoRefs.current.forEach((video) => video?.pause());
      stateFrame = window.requestAnimationFrame(() => setIsPlaying(false));
    }

    return () => {
      if (stateFrame !== undefined) window.cancelAnimationFrame(stateFrame);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const chapterTimer = window.setInterval(() => {
      setActiveClip((currentIndex) => {
        const nextIndex = (currentIndex + 1) % brandClips.length;
        const currentVideo = videoRefs.current[currentIndex];
        const nextVideo = videoRefs.current[nextIndex];

        currentVideo?.pause();
        if (nextVideo) {
          nextVideo.currentTime = 0;
          void nextVideo.play();
        }

        return nextIndex;
      });
    }, CHAPTER_DURATION_MS);

    return () => window.clearInterval(chapterTimer);
  }, [isPlaying]);

  const togglePlayback = () => {
    const video = videoRefs.current[activeClip];
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const playNextClip = (currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % brandClips.length;
    const nextVideo = videoRefs.current[nextIndex];

    setActiveClip(nextIndex);
    if (nextVideo) {
      nextVideo.currentTime = 0;
      void nextVideo.play();
      setIsPlaying(true);
    }
  };

  const selectClip = (index: number) => {
    videoRefs.current[activeClip]?.pause();
    const selectedVideo = videoRefs.current[index];

    setActiveClip(index);
    if (selectedVideo) {
      selectedVideo.currentTime = 0;
      void selectedVideo.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      aria-labelledby="brand-film-title"
      className="relative min-h-[calc(100svh-81px)] overflow-hidden bg-[#05080d] text-white"
    >
      {brandClips.map((clip, index) => (
        <video
          key={clip.desktop}
          ref={(video) => {
            videoRefs.current[index] = video;
          }}
          autoPlay={index === 0}
          muted
          playsInline
          preload={index === 0 ? "auto" : "metadata"}
          poster={index === 0 ? "/images/ggms-brand-film-premium-poster.jpg" : undefined}
          onPlay={() => index === activeClip && setIsPlaying(true)}
          onPause={() => index === activeClip && setIsPlaying(false)}
          onEnded={() => playNextClip(index)}
          className={`absolute inset-0 h-full w-full scale-[1.015] object-cover object-center brightness-[1.08] contrast-[1.08] saturate-[1.16] transition-opacity duration-1000 ${
            index === activeClip ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label={clip.label}
        >
          <source src={clip.mobile} type="video/mp4" media="(max-width: 767px)" />
          <source src={clip.desktop} type="video/mp4" />
        </video>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,12,.78)_0%,rgba(2,6,12,.5)_36%,rgba(2,6,12,.16)_68%,rgba(2,6,12,.04)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,12,.18)_0%,transparent_42%,rgba(2,6,12,.64)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,.14),transparent_28%),radial-gradient(circle_at_72%_76%,rgba(34,211,238,.12),transparent_34%)] mix-blend-screen" />
      <DataSignalLayer />
      <div className="pointer-events-none absolute inset-4 border border-white/10 shadow-[inset_0_0_90px_rgba(255,255,255,.035)] sm:inset-6" />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-81px)] max-w-[1600px] items-end px-6 pb-36 pt-24 sm:px-10 lg:px-16 lg:pb-32">
        <div key={activeClip} className="brand-film-copy max-w-5xl">
          <div className="mb-7 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase text-white/82">
            <span className="inline-flex h-9 min-w-9 items-center justify-center border border-cyan-200/70 bg-slate-950/25 text-cyan-100 backdrop-blur-sm">
              {brandClips[activeClip].chapter}
            </span>
            <span className="h-px w-12 bg-cyan-300" aria-hidden="true" />
            <span>{brandClips[activeClip].eyebrow}</span>
          </div>

          <h1
            id="brand-film-title"
            className="max-w-4xl font-[family-name:var(--font-heading)] text-[clamp(2.7rem,5.5vw,6.2rem)] font-semibold leading-[0.94] tracking-normal text-white [text-shadow:0_3px_30px_rgba(0,0,0,.62)]"
          >
            {brandClips[activeClip].headline}
            <span className="block font-normal text-cyan-100">{brandClips[activeClip].emphasis}</span>
          </h1>

          <p className="mt-7 max-w-2xl border-l border-cyan-200/70 pl-5 text-base leading-7 text-white/94 [text-shadow:0_2px_16px_rgba(0,0,0,.7)] sm:text-xl sm:leading-8">
            {brandClips[activeClip].description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-white/76">
            <span>Data engineering</span>
            <span className="h-1 w-1 rounded-full bg-cyan-200/80" aria-hidden="true" />
            <span>Analytics</span>
            <span className="h-1 w-1 rounded-full bg-cyan-200/80" aria-hidden="true" />
            <span>Automation</span>
            <span className="h-1 w-1 rounded-full bg-cyan-200/80" aria-hidden="true" />
            <span>AI</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause brand film" : "Play brand film"}
        className="absolute right-6 top-6 z-10 inline-flex items-center gap-3 border-b border-white/55 pb-1 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:right-10 lg:right-16"
      >
        {isPlaying ? "Pause loop" : "Play loop"}
        <span className="text-xs" aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
      </button>

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between gap-5 sm:bottom-8 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
        <div className="flex flex-1 items-end gap-3" aria-label="Brand film chapters">
          {brandClips.map((clip, index) => (
            <button
              key={clip.desktop}
              type="button"
              onClick={() => selectClip(index)}
              aria-label={`Play chapter ${clip.chapter}: ${clip.eyebrow}`}
              aria-pressed={activeClip === index}
              className={`group min-w-0 flex-1 border-t pt-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
                activeClip === index ? "border-cyan-200 text-white" : "border-white/25 text-white/62 hover:border-white/60 hover:text-white"
              }`}
            >
              <span className="block overflow-hidden text-ellipsis whitespace-nowrap text-[0.7rem] font-semibold uppercase">
                {clip.chapter} {clip.eyebrow}
              </span>
              <span className="mt-2 block h-px bg-white/20">
                {activeClip === index ? (
                  <span
                    key={activeClip}
                    className="brand-film-progress-fill block h-px bg-cyan-200"
                    style={{
                      animationDuration: `${CHAPTER_DURATION_MS}ms`,
                      animationPlayState: isPlaying ? "running" : "paused",
                    }}
                  />
                ) : null}
              </span>
            </button>
          ))}
        </div>
        <Link
          href="/lets-talk"
          className="group hidden shrink-0 items-center gap-5 border border-white/75 bg-slate-950/34 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_42px_-22px_rgba(0,0,0,.85)] backdrop-blur-sm transition hover:border-cyan-200 hover:bg-slate-950/56 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:inline-flex sm:px-6"
        >
          Start a Project
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

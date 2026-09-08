"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const brandClips = [
  {
    desktop: "/videos/ggms-premium-finance-team.mp4",
    mobile: "/videos/ggms-premium-finance-team-mobile.mp4",
    label: "Business leaders reviewing financial data together",
  },
  {
    desktop: "/videos/ggms-premium-analytics-review.mp4",
    mobile: "/videos/ggms-premium-analytics-review-mobile.mp4",
    label: "A corporate team discussing analytics shown on a laptop",
  },
];

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

          <path className="brand-signal-flow brand-signal-flow-a" d="M720 206C900 92 1052 244 1220 154s250-38 344-82" />
          <path className="brand-signal-flow brand-signal-flow-b" d="M850 382c174-112 278-16 382 68s206 112 344 28" />
          <path className="brand-signal-flow brand-signal-flow-c" d="M790 724c174-130 316-58 418-12s232 22 370-108" />
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

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,12,.68)_0%,rgba(2,6,12,.36)_38%,rgba(2,6,12,.07)_70%,rgba(2,6,12,.02)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,12,.08)_0%,transparent_48%,rgba(2,6,12,.48)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,.2),transparent_30%),radial-gradient(circle_at_72%_76%,rgba(34,211,238,.1),transparent_34%)] mix-blend-screen" />
      <DataSignalLayer />
      <div className="pointer-events-none absolute inset-4 border border-white/10 shadow-[inset_0_0_90px_rgba(255,255,255,.035)] sm:inset-6" />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100svh-81px)] max-w-[1600px] items-end px-6 pb-32 pt-24 sm:px-10 lg:px-16 lg:pb-28">
        <div className="max-w-4xl">
          <div className="mb-6 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            <span className="h-px w-12 bg-cyan-300" aria-hidden="true" />
            Intelligence, made actionable
          </div>

          <h1
            id="brand-film-title"
            className="max-w-3xl font-[family-name:var(--font-heading)] text-[clamp(3rem,6vw,6.6rem)] font-medium leading-[0.9] tracking-[-0.055em] text-white [text-shadow:0_3px_28px_rgba(0,0,0,.58)]"
          >
            Move forward
            <span className="block font-light italic text-white/95">with clarity.</span>
          </h1>

          <p className="mt-7 max-w-xl border-l border-cyan-200/70 pl-5 text-base leading-7 text-white/95 [text-shadow:0_2px_16px_rgba(0,0,0,.7)] sm:text-lg sm:leading-8">
            We turn complex data into the confidence to act—faster, smarter,
            and with purpose.
          </p>
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

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between sm:bottom-8 sm:left-10 sm:right-10 lg:left-16 lg:right-16">
        <div className="hidden items-center gap-2 sm:flex" aria-label="Brand film scenes">
          {brandClips.map((clip, index) => (
            <button
              key={clip.desktop}
              type="button"
              onClick={() => selectClip(index)}
              aria-label={`Play scene: ${clip.label}`}
              aria-pressed={activeClip === index}
              className={`h-1 rounded-full transition-[width,background-color] duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${activeClip === index ? "w-12 bg-cyan-300" : "w-6 bg-white/45 hover:bg-white/75"}`}
            />
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-1 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-sm font-medium text-white/85 md:flex">
          <span className="text-lg text-cyan-300" aria-hidden="true">↓</span>
          Discover what trusted data makes possible
        </div>
        <Link
          href="/about"
          className="group inline-flex items-center gap-5 border border-white/75 bg-slate-950/30 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_42px_-22px_rgba(0,0,0,.85)] backdrop-blur-sm transition hover:border-cyan-200 hover:bg-slate-950/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:px-6"
        >
          Explore GGMS
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

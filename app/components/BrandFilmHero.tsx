"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function BrandFilmHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (video && reducedMotion.matches) {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      aria-labelledby="brand-film-title"
      className="relative min-h-[calc(100svh-81px)] overflow-hidden bg-[#071426] text-white"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/ggms-brand-film-poster.jpg"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => {
          const shouldShow = event.currentTarget.currentTime < 15.2;
          setShowMessage((current) =>
            current === shouldShow ? current : shouldShow,
          );
        }}
        className="absolute inset-0 h-full w-full object-cover"
        aria-label="GGMS Analytics brand film"
      >
        <source
          src="/videos/ggms-brand-film-mobile.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />
        <source src="/videos/ggms-brand-film.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />

      <div
        className={`relative z-[2] mx-auto flex min-h-[calc(100svh-81px)] max-w-7xl items-center px-6 py-20 transition-all duration-700 md:px-10 ${
          showMessage
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/85 sm:text-xs">
            <span className="h-px w-10 bg-white/75" aria-hidden="true" />
            Intelligence with purpose
          </div>

          <h1
            id="brand-film-title"
            className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl md:text-7xl"
          >
            See what others miss.
            <span className="block text-white">Move before others do.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg md:leading-8">
            When data becomes intelligence, uncertainty becomes direction
            and possibility becomes progress.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="rounded-md bg-cyan-400 px-6 py-3 font-semibold text-[#061121] transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Discover what&apos;s possible
            </Link>
            <Link
              href="/lets-talk"
              className="rounded-md border border-white/55 bg-black/25 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-black/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Let&apos;s build what&apos;s next
            </Link>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause brand film" : "Play brand film"}
        className="absolute bottom-6 right-6 z-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#071426]/65 px-4 py-2.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition hover:border-cyan-300 hover:bg-[#071426]/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>
        {isPlaying ? "Pause film" : "Play film"}
      </button>
    </section>
  );
}

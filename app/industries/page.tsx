"use client";

import Link from "next/link";
import Image, { type ImageLoaderProps } from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const industries = [
  {
    title: "Banking, Financial Services & Fintech",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=82",
    imagePosition: "center",
    description:
      "Strengthen risk, reporting, customer intelligence, fraud detection, and regulatory compliance with trusted data and AI.",
    opportunities: "Risk · Fraud · Compliance",
  },
  {
    title: "Government & Public Sector",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=82",
    imagePosition: "center",
    description:
      "Improve service performance, transparent reporting, evidence-based planning, and responsible data governance.",
    opportunities: "Services · Planning · Governance",
  },
  {
    title: "Energy, Oil & Gas",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=82",
    imagePosition: "center",
    description:
      "Connect operational and financial data for expenditure control, forecasting, performance monitoring, and asset intelligence.",
    opportunities: "Operations · Forecasting · Assets",
  },
  {
    title: "Manufacturing, Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=82",
    imagePosition: "center",
    description:
      "Optimize planning, inventory, production, logistics, supplier performance, and anomaly detection across operations.",
    opportunities: "Inventory · Production · Logistics",
  },
  {
    title: "Healthcare & Life Sciences",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=82",
    imagePosition: "center 35%",
    description:
      "Enable governed analytics for operational reporting, capacity planning, forecasting, and better service outcomes.",
    opportunities: "Capacity · Forecasting · Governance",
  },
  {
    title: "Retail & Consumer",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=82",
    imagePosition: "center",
    description:
      "Turn customer, demand, inventory, and pricing data into sharper decisions and more relevant consumer experiences.",
    opportunities: "Demand · Pricing · Personalization",
  },
  {
    title: "Aviation, Airlines & Travel",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=82",
    imagePosition: "center 55%",
    description:
      "Unify passenger, flight, operational, and commercial data to improve planning, service performance, revenue decisions, and the traveler experience.",
    opportunities: "Operations · Revenue · Experience",
  },
];

function unsplashLoader({ src }: ImageLoaderProps) {
  return src;
}

/* =========================================================
   3D INDUSTRY NETWORK
   ========================================================= */

function IndustryNetwork() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const result: [number, number, number][] = [];

    for (let i = 0; i < 55; i++) {
      const angle = (i / 55) * Math.PI * 2;
      const radius = 1.8 + Math.sin(i * 1.7) * 0.7;

      result.push([
        Math.cos(angle) * radius,
        Math.sin(i * 0.8) * 1.7,
        Math.sin(angle) * radius,
      ]);
    }

    return result;
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x += delta * 0.018;
  });

  return (
    <group ref={group}>
      {/* Central intelligence core */}
      <mesh>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.16}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.28, 24, 24]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Network nodes */}
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry
            args={[
              index % 7 === 0 ? 0.075 : 0.035,
              12,
              12,
            ]}
          />

          <meshBasicMaterial
            color={
              index % 7 === 0
                ? "#ffffff"
                : "#22d3ee"
            }
            transparent
            opacity={
              index % 7 === 0
                ? 0.95
                : 0.55
            }
          />
        </mesh>
      ))}

      {/* Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry
          args={[1.35, 0.012, 12, 100]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Ring 2 */}
      <mesh rotation={[Math.PI / 3, 0.4, 0]}>
        <torusGeometry
          args={[2.15, 0.009, 12, 100]}
        />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  );
}

/* =========================================================
   BACKGROUND PARTICLES
   ========================================================= */

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function IndustryParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const data = new Float32Array(2400);

    for (let i = 0; i < data.length; i += 3) {
      data[i] =
        (seededNoise(i + 1) - 0.5) * 12;

      data[i + 1] =
        (seededNoise(i + 2) - 0.5) * 8;

      data[i + 2] =
        (seededNoise(i + 3) - 0.5) * 7;
    }

    return data;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.004;
    ref.current.rotation.x += delta * 0.001;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        color="#67e8f9"
        size={0.018}
        transparent
        opacity={0.38}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

/* =========================================================
   INDUSTRY CARD
   ========================================================= */

function IndustryCard({
  industry,
}: {
  industry: (typeof industries)[number];
}) {
  return (
    <article
      className="
        group
        relative
        min-h-[430px]
        rounded-2xl
        border
        border-slate-200
        bg-white
        overflow-hidden
        transform-gpu
        transition-all
        duration-500
        ease-out

        hover:-translate-y-3
        hover:border-cyan-400
        hover:shadow-[0_30px_70px_rgba(8,145,178,0.25)]

        [transform-style:preserve-3d]
      "
    >
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <Image
          loader={unsplashLoader}
          unoptimized
          src={industry.image}
          alt={`${industry.title} industry`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110"
          style={{ objectPosition: industry.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <div className="absolute inset-0 bg-cyan-500/0 transition-colors duration-500 group-hover:bg-cyan-500/10" />

        <span className="absolute bottom-4 left-5 rounded-full border border-white/30 bg-slate-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          Industry expertise
        </span>
      </div>

      {/* Animated top line */}

      <div
        className="
          absolute
          top-0
          left-0
          h-[3px]
          w-0
          bg-cyan-400
          shadow-[0_0_18px_rgba(34,211,238,0.9)]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Small 3D orb */}

      <div
        className="
          absolute
          right-6
          top-[232px]
          h-3
          w-3
          rounded-full
          bg-cyan-500
          transition-all
          duration-500
          group-hover:scale-150
          group-hover:shadow-[0_0_20px_rgba(34,211,238,0.9)]
        "
      />

      <div className="p-6">
        <h3 className="pr-6 text-xl font-semibold leading-snug text-slate-950 transition-colors duration-300 group-hover:text-cyan-700">
          {industry.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          {industry.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
          {industry.opportunities}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>

      {/* Bottom glow */}

      <div
        className="
          absolute
          -right-10
          -bottom-10
          h-32
          w-32
          rounded-full
          bg-cyan-400/20
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </article>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-slate-950 text-white">

        {/* Grid */}

        <div className="absolute inset-0 opacity-[0.18]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* 3D */}

        <div className="absolute inset-0 pointer-events-none">
          <Canvas
            camera={{
              position: [0, 0, 7],
              fov: 48,
            }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={0.8} />

            <IndustryParticles />

            <group
              position={[2.7, 0, 0]}
              scale={1.25}
            >
              <IndustryNetwork />
            </group>
          </Canvas>
        </div>

        {/* Atmospheric glow */}

        <div
          className="
            absolute
            right-[5%]
            top-1/2
            -translate-y-1/2
            w-[600px]
            h-[600px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[120px]
          "
        />

        {/* Hero content */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[720px] flex items-center">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-7">

              <span className="h-px w-12 bg-cyan-400" />

              <span className="text-xs font-semibold tracking-[0.35em] text-cyan-400">
                INDUSTRIES
              </span>

            </div>

            <h1
              className="
                font-[family-name:var(--font-heading)]
                text-5xl
                md:text-7xl
                font-semibold
                leading-[1.04]
                tracking-tight
              "
            >
              Data solutions
              <br />

              <span className="text-cyan-400">
                built around your industry.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-slate-300">
              Every industry has different data, different challenges,
              and different decisions to make. We build solutions around
              the way your business actually operates.
            </p>

            <div className="mt-8 text-sm tracking-wide text-slate-500">
              DATA · ANALYTICS · AI · CLOUD · AUTOMATION
            </div>

          </div>
        </div>

        {/* Scroll */}

        <div
          className="
            absolute
            bottom-8
            right-10
            hidden
            md:flex
            flex-col
            items-center
            text-slate-500
          "
        >
          <span className="text-[10px] tracking-[0.35em] uppercase">
            Explore
          </span>

          <span className="mt-2 animate-bounce text-cyan-400">
            ↓
          </span>
        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-28">

        <div className="max-w-3xl mb-14">

          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-500 uppercase">
            Where We Work
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            Technology shaped around business reality.
          </h2>

          <p className="text-slate-600 mt-5 leading-7">
            We combine data engineering, analytics, cloud, AI,
            and automation to solve the problems that matter most
            to each industry.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {industries.map((industry) => (
            <IndustryCard key={industry.title} industry={industry} />
          ))}

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white py-28">

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent_55%)]
          "
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <span className="text-xs font-semibold tracking-[0.25em] text-cyan-400 uppercase">
            LET&apos;S WORK TOGETHER
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold mt-5">

            Turn your industry data

            <br />

            <span className="text-cyan-400">
              into a business advantage.
            </span>

          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-7 mb-9 leading-7">
            Tell us what you are trying to solve and we&apos;ll explore
            the right data, analytics, cloud, AI, or automation approach
            for your organization.
          </p>

          <Link
            href="/lets-talk"
            className="
              inline-block
              bg-cyan-500
              text-slate-950
              px-8
              py-4
              rounded-md
              font-semibold
              hover:bg-cyan-400
              hover:scale-[1.02]
              transition
            "
          >
            Let&apos;s Talk
          </Link>

        </div>

      </section>

      <Footer />
    </main>
  );
}

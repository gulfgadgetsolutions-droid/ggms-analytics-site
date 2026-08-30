"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, RoundedBox } from "@react-three/drei";
import { useRef, type ReactNode } from "react";
import * as THREE from "three";

export type ServiceSceneVariant = "strategy" | "engineering" | "analytics" | "science" | "automation" | "managed";

function AnimatedGroup({ children, speed = 0.08 }: { children: ReactNode; speed?: number }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * speed;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.06;
  });
  return <group ref={group}>{children}</group>;
}

function StrategyScene() {
  return <AnimatedGroup speed={0.12}><Float speed={1.1} floatIntensity={0.18}><mesh rotation={[0.8, 0.2, 0]}><torusGeometry args={[1.25, 0.055, 16, 120]} /><meshStandardMaterial color="#64748b" metalness={0.55} roughness={0.2} /></mesh><mesh rotation={[1.1, -0.5, 0.5]}><torusGeometry args={[0.82, 0.035, 12, 100]} /><meshStandardMaterial color="#0891b2" metalness={0.5} roughness={0.2} /></mesh><mesh><octahedronGeometry args={[0.45, 1]} /><meshPhysicalMaterial color="#e2e8f0" metalness={0.25} roughness={0.15} /></mesh></Float></AnimatedGroup>;
}

function EngineeringScene() {
  return <AnimatedGroup>{[0.48, 0, -0.48].map((y, index) => <RoundedBox key={y} args={[2.3, 0.25, 1.45]} radius={0.08} smoothness={4} position={[0, y, 0]}><meshPhysicalMaterial color={index === 1 ? "#22d3ee" : "#cbd5e1"} transparent opacity={0.74} metalness={0.22} roughness={0.18} /></RoundedBox>)}{[-1.65, 1.65].map((x) => <group key={x}><Line points={[[x, 0, 0], [Math.sign(x) * 1.05, 0, 0]]} color="#0891b2" lineWidth={1.2} /><mesh position={[x, 0, 0]}><boxGeometry args={[0.3, 0.3, 0.3]} /><meshStandardMaterial color="#64748b" metalness={0.4} roughness={0.22} /></mesh></group>)}</AnimatedGroup>;
}

function AnalyticsScene() {
  const heights = [0.65, 1.2, 0.9, 1.65, 1.35];
  return <AnimatedGroup speed={0.05}><group rotation={[-0.12, -0.3, 0]}>{heights.map((height, index) => <Float key={height} speed={1 + index * 0.1} floatIntensity={0.08}><RoundedBox args={[0.34, height, 0.34]} radius={0.05} smoothness={3} position={[-1 + index * 0.5, height / 2 - 0.8, 0]}><meshPhysicalMaterial color={index === 3 ? "#06b6d4" : "#94a3b8"} metalness={0.32} roughness={0.18} /></RoundedBox></Float>)}<Line points={[[-1.2, -0.25, 0.25], [-0.5, 0.45, 0.25], [0, 0.1, 0.25], [0.5, 0.82, 0.25], [1.15, 0.55, 0.25]]} color="#0891b2" lineWidth={2} /></group></AnimatedGroup>;
}

function ScienceScene() {
  const points: [number, number, number][] = [[-1.25, .7, 0], [-1, -.7, .2], [0, 1.1, -.2], [.2, -1, .1], [1.3, .55, .2], [1.2, -.65, -.1]];
  return <AnimatedGroup speed={0.1}><mesh><icosahedronGeometry args={[0.42, 2]} /><meshPhysicalMaterial color="#22d3ee" transparent opacity={0.72} metalness={0.2} roughness={0.18} /></mesh>{points.map((point, index) => <group key={point.join("-")}><Line points={[[0, 0, 0], point]} color="#64748b" lineWidth={0.8} transparent opacity={0.5} /><Float speed={1.1 + index * .08} floatIntensity={0.16}><mesh position={point}><sphereGeometry args={[index % 2 ? .13 : .18, 18, 18]} /><meshStandardMaterial color={index % 2 ? "#64748b" : "#0891b2"} metalness={0.25} roughness={0.2} /></mesh></Float></group>)}</AnimatedGroup>;
}

function AutomationScene() {
  return <AnimatedGroup speed={0.16}><mesh rotation={[0.75, 0.25, 0]}><torusKnotGeometry args={[0.82, 0.18, 120, 18]} /><meshPhysicalMaterial color="#94a3b8" metalness={0.42} roughness={0.16} /></mesh>{[0, 1, 2].map(index => <Float key={index} speed={1.1 + index * .2} floatIntensity={0.18}><mesh position={[Math.cos(index * 2.1) * 1.55, Math.sin(index * 2.1) * 1.15, 0]}><octahedronGeometry args={[.2, 0]} /><meshStandardMaterial color="#06b6d4" metalness={0.35} roughness={0.18} /></mesh></Float>)}</AnimatedGroup>;
}

function ManagedScene() {
  return <AnimatedGroup speed={0.07}><mesh><dodecahedronGeometry args={[0.78, 0]} /><meshPhysicalMaterial color="#cbd5e1" metalness={0.32} roughness={0.16} /></mesh><mesh scale={1.18}><dodecahedronGeometry args={[0.78, 0]} /><meshBasicMaterial color="#0891b2" wireframe transparent opacity={0.5} /></mesh>{[1.25, 1.65].map((radius, index) => <mesh key={radius} rotation={[1.05, index * .5, .25]}><torusGeometry args={[radius, .025, 12, 100]} /><meshBasicMaterial color={index ? "#64748b" : "#06b6d4"} transparent opacity={0.55} /></mesh>)}</AnimatedGroup>;
}

export default function ServiceHeroScene({ variant }: { variant: ServiceSceneVariant }) {
  return <div className="service-live-scene absolute inset-y-0 right-0 w-full pointer-events-none lg:w-[54%]" aria-hidden="true"><Canvas camera={{ position: [0, 0, 5.4], fov: 42 }} dpr={[1, 1.4]} gl={{ alpha: true, antialias: true }}><ambientLight intensity={1.8} /><directionalLight position={[3, 4, 5]} intensity={2.1} color="#ffffff" /><pointLight position={[-2, 0, 3]} intensity={1.2} color="#22d3ee" />{variant === "strategy" && <StrategyScene />}{variant === "engineering" && <EngineeringScene />}{variant === "analytics" && <AnalyticsScene />}{variant === "science" && <ScienceScene />}{variant === "automation" && <AutomationScene />}{variant === "managed" && <ManagedScene />}</Canvas></div>;
}

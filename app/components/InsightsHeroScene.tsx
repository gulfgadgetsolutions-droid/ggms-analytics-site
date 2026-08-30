"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function KnowledgeSystem() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.055;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.06;
  });

  const cards: [number, number, number, number][] = [
    [-1.2, .85, .1, -.22], [.7, 1.15, -.25, .18], [1.25, -.45, .2, -.14], [-.8, -.85, -.1, .16],
  ];

  return <group ref={group} rotation={[-.08, -.2, .02]}>
    <Float speed={1.1} floatIntensity={0.16} rotationIntensity={0.08}>
      <mesh><icosahedronGeometry args={[.52, 2]} /><meshPhysicalMaterial color="#67e8f9" transparent opacity={.72} metalness={.2} roughness={.14} /></mesh>
      <mesh scale={1.18}><icosahedronGeometry args={[.52, 1]} /><meshBasicMaterial color="#22d3ee" wireframe transparent opacity={.48} /></mesh>
    </Float>
    {cards.map(([x,y,z,rotation], index) => <group key={x}>
      <Line points={[[0,0,0],[x,y,z]]} color={index % 2 ? "#64748b" : "#0891b2"} lineWidth={.8} transparent opacity={.45} />
      <Float speed={1 + index * .13} floatIntensity={.12} rotationIntensity={.08}>
        <RoundedBox args={[1.05,.62,.07]} radius={.06} smoothness={4} position={[x,y,z]} rotation={[0,rotation,rotation/2]}>
          <meshPhysicalMaterial color={index % 2 ? "#e2e8f0" : "#cbd5e1"} transparent opacity={.78} metalness={.12} roughness={.18} />
        </RoundedBox>
        <mesh position={[x-.3,y+.08,z+.05]}><boxGeometry args={[.25,.045,.02]} /><meshBasicMaterial color="#0891b2" /></mesh>
        <mesh position={[x-.12,y-.06,z+.05]}><boxGeometry args={[.62,.025,.02]} /><meshBasicMaterial color="#64748b" /></mesh>
      </Float>
    </group>)}
  </group>;
}

export default function InsightsHeroScene() {
  return <div className="absolute inset-y-0 right-0 w-full pointer-events-none lg:w-[55%]" aria-hidden="true"><Canvas camera={{ position:[0,0,5.2], fov:42 }} dpr={[1,1.4]} gl={{ alpha:true, antialias:true }}><ambientLight intensity={1.8} /><directionalLight position={[3,4,5]} intensity={2} /><pointLight position={[-2,0,3]} intensity={1.3} color="#22d3ee" /><KnowledgeSystem /></Canvas></div>;
}

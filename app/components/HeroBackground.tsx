"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type HeroBackgroundProps = {
  activeSlide: number;
};


/* ============================================================
   DATA ENGINEERING

   Visual idea:
   Data flowing through pipelines and connected systems.
   ============================================================ */

function DataEngineering() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return [
      [-2.8, 1.2, 0],
      [-1.7, 0.4, 0],
      [-0.7, 1.4, 0],
      [0.4, 0.2, 0],
      [1.5, 1.1, 0],
      [2.6, 0.3, 0],
      [1.8, -1.2, 0],
      [0.5, -0.7, 0],
      [-0.8, -1.3, 0],
      [-2, -0.7, 0],
    ] as [number, number, number][];
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.08;
    group.current.rotation.z =
      Math.sin(Date.now() * 0.0004) * 0.03;
  });

  return (
    <group ref={group}>

      {/* Pipeline connections */}
      {nodes.slice(0, -1).map((node, index) => (
        <Line
          key={index}
          points={[node, nodes[index + 1]]}
          color="#22d3ee"
          transparent
          opacity={0.45}
          lineWidth={1}
        />
      ))}

      {/* Nodes */}
      {nodes.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry
            args={[
              index % 3 === 0 ? 0.11 : 0.055,
              16,
              16,
            ]}
          />

          <meshBasicMaterial
            color={index % 3 === 0 ? "#67e8f9" : "#22d3ee"}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}

      {/* Data stream blocks */}
      {[...Array(6)].map((_, index) => (
        <mesh
          key={`stream-${index}`}
          position={[
            -2.6 + index * 0.9,
            -2.1,
            0,
          ]}
        >
          <boxGeometry args={[0.5, 0.05, 0.05]} />

          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

    </group>
  );
}


/* ============================================================
   DATA ANALYTICS

   Visual idea:
   3D analytical dashboard / KPI bars / rotating chart.
   ============================================================ */

function DataAnalytics() {
  const group = useRef<THREE.Group>(null);

  const bars = [
    0.8,
    1.5,
    2.1,
    1.2,
    2.8,
    2.0,
    3.2,
  ];

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.1;

    group.current.position.y =
      Math.sin(Date.now() * 0.0007) * 0.08;
  });

  return (
    <group ref={group}>

      {/* 3D chart */}
      {bars.map((height, index) => (
        <mesh
          key={index}
          position={[
            -2.5 + index * 0.8,
            height / 2 - 1.2,
            0,
          ]}
        >
          <boxGeometry
            args={[
              0.4,
              height,
              0.45,
            ]}
          />

          <meshBasicMaterial
            color={
              index === bars.length - 1
                ? "#67e8f9"
                : "#22d3ee"
            }
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}

      {/* Analytics ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry
          args={[2.8, 0.018, 12, 120]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Central KPI */}
      <mesh>
        <sphereGeometry args={[0.18, 24, 24]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Trend line */}
      <Line
        points={[
          [-3, -0.8, 0.3],
          [-2, -0.3, 0.3],
          [-1, 0.2, 0.3],
          [0, 0.7, 0.3],
          [1, 0.4, 0.3],
          [2, 1.1, 0.3],
          [3, 1.8, 0.3],
        ]}
        color="#67e8f9"
        transparent
        opacity={0.8}
        lineWidth={1.5}
      />

    </group>
  );
}


/* ============================================================
   DATA SCIENCE

   Visual idea:
   Prediction curve + data points + predictive field.
   ============================================================ */

function DataScience() {
  const group = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const result: [number, number, number][] = [];

    for (let i = 0; i < 100; i++) {
      const x = (Math.random() - 0.5) * 6;

      const y =
        Math.sin(x * 1.4) +
        (Math.random() - 0.5) * 1.3;

      const z =
        (Math.random() - 0.5) * 2.5;

      result.push([x, y, z]);
    }

    return result;
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.055;

    group.current.rotation.x =
      Math.sin(Date.now() * 0.0004) * 0.04;
  });

  return (
    <group ref={group}>

      {/* Data points */}
      {points.map((position, index) => (
        <mesh key={index} position={position}>

          <sphereGeometry
            args={[
              index % 9 === 0 ? 0.075 : 0.035,
              12,
              12,
            ]}
          />

          <meshBasicMaterial
            color={
              index % 9 === 0
                ? "#ffffff"
                : "#22d3ee"
            }
            transparent
            opacity={0.7}
          />

        </mesh>
      ))}

      {/* Prediction curve */}
      <Line
        points={[
          [-3, -0.7, 0],
          [-2.5, -0.4, 0],
          [-2, -0.1, 0],
          [-1.5, 0.4, 0],
          [-1, 0.8, 0],
          [-0.5, 1.0, 0],
          [0, 0.8, 0],
          [0.5, 0.4, 0],
          [1, 0.6, 0],
          [1.5, 1.0, 0],
          [2, 1.3, 0],
          [2.5, 1.6, 0],
          [3, 2.0, 0],
        ]}
        color="#67e8f9"
        transparent
        opacity={0.9}
        lineWidth={1.6}
      />

      {/* Prediction endpoint */}
      <mesh position={[3, 2, 0]}>
        <sphereGeometry args={[0.14, 20, 20]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={1}
        />
      </mesh>

    </group>
  );
}


/* ============================================================
   AI & AUTOMATION

   Visual idea:
   Neural network / AI brain / intelligent connections.
   ============================================================ */

function AIAutomation() {
  const group = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    return [
      [-2.5, 1.4, 0],
      [-2.5, 0, 0],
      [-2.5, -1.4, 0],

      [-1, 1.8, 0],
      [-1, 0.6, 0],
      [-1, -0.6, 0],
      [-1, -1.8, 0],

      [0.7, 1.4, 0],
      [0.7, 0, 0],
      [0.7, -1.4, 0],

      [2.5, 0, 0],
    ] as [number, number, number][];
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.09;

    const pulse =
      1 +
      Math.sin(Date.now() * 0.002) *
        0.035;

    group.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>

      {/* First neural layer */}
      {nodes.slice(0, 3).map((from, i) =>
        nodes.slice(3, 7).map((to, j) => (
          <Line
            key={`a-${i}-${j}`}
            points={[from, to]}
            color="#22d3ee"
            transparent
            opacity={0.12}
            lineWidth={0.7}
          />
        ))
      )}

      {/* Second neural layer */}
      {nodes.slice(3, 7).map((from, i) =>
        nodes.slice(7, 10).map((to, j) => (
          <Line
            key={`b-${i}-${j}`}
            points={[from, to]}
            color="#67e8f9"
            transparent
            opacity={0.16}
            lineWidth={0.7}
          />
        ))
      )}

      {/* Output */}
      {nodes.slice(7, 10).map((from, index) => (
        <Line
          key={`c-${index}`}
          points={[from, nodes[10]]}
          color="#67e8f9"
          transparent
          opacity={0.3}
          lineWidth={1}
        />
      ))}

      {/* Neural nodes */}
      {nodes.map((position, index) => (
        <mesh
          key={`node-${index}`}
          position={position}
        >
          <sphereGeometry
            args={[
              index === 10 ? 0.22 : 0.09,
              20,
              20,
            ]}
          />

          <meshBasicMaterial
            color={
              index === 10
                ? "#67e8f9"
                : "#22d3ee"
            }
            transparent
            opacity={
              index === 10
                ? 1
                : 0.85
            }
          />
        </mesh>
      ))}

      {/* AI core glow */}
      <mesh position={[2.5, 0, 0]}>
        <sphereGeometry
          args={[0.55, 32, 32]}
        />

        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.08}
        />
      </mesh>

    </group>
  );
}


/* ============================================================
   CLOUD & DATA PLATFORMS

   Visual idea:
   Cloud infrastructure + layered data platform.
   ============================================================ */

function CloudPlatforms() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.06;

    group.current.position.y =
      Math.sin(Date.now() * 0.0007) *
      0.12;
  });

  return (
    <group ref={group}>

      {/* Cloud */}
      <mesh position={[-1.1, 0.1, 0]}>
        <sphereGeometry
          args={[1.05, 32, 32]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.13}
        />
      </mesh>

      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry
          args={[1.35, 32, 32]}
        />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.16}
        />
      </mesh>

      <mesh position={[1.15, 0.1, 0]}>
        <sphereGeometry
          args={[1, 32, 32]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.13}
        />
      </mesh>

      {/* Platform layers */}
      {[0, 1, 2].map((index) => (
        <mesh
          key={index}
          position={[
            0,
            -1.25 - index * 0.55,
            0,
          ]}
        >
          <boxGeometry
            args={[
              4 - index * 0.45,
              0.16,
              1.8 - index * 0.2,
            ]}
          />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.22}
          />
        </mesh>
      ))}

      {/* Architecture connections */}
      <Line
        points={[
          [-1.6, -0.9, 0],
          [0, 0.2, 0],
          [1.6, -0.9, 0],
        ]}
        color="#67e8f9"
        transparent
        opacity={0.45}
        lineWidth={1}
      />

    </group>
  );
}


/* ============================================================
   MANAGED DATA & AI
   Always-on operations hub monitoring connected systems.
   ============================================================ */

function ManagedOperations() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => [
    [-2.4, 1.25, 0], [0, 2.05, 0], [2.4, 1.25, 0],
    [2.4, -1.25, 0], [0, -2.05, 0], [-2.4, -1.25, 0],
  ] as [number, number, number][], []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.z += delta * 0.035;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <torusGeometry args={[1.15, 0.08, 16, 80]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.7} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.22} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.3, 0]} />
        <meshBasicMaterial color="#a7f3d0" transparent opacity={0.9} />
      </mesh>
      {nodes.map((position, index) => (
        <group key={index}>
          <Line points={[[0, 0, 0], position]} color="#22d3ee" transparent opacity={0.4} lineWidth={1} />
          <mesh position={position}>
            <boxGeometry args={[0.48, 0.48, 0.48]} />
            <meshBasicMaterial color={index % 2 === 0 ? "#67e8f9" : "#34d399"} transparent opacity={0.72} />
          </mesh>
          <mesh position={position} scale={1.7}>
            <sphereGeometry args={[0.28, 16, 16]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.08} />
          </mesh>
        </group>
      ))}
    </group>
  );
}


/* ============================================================
   BACKGROUND PARTICLES
   ============================================================ */

function BackgroundParticles() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(3000);

    for (
      let i = 0;
      i < positions.length;
      i += 3
    ) {
      positions[i] =
        (Math.random() - 0.5) * 16;

      positions[i + 1] =
        (Math.random() - 0.5) * 10;

      positions[i + 2] =
        (Math.random() - 0.5) * 9;
    }

    return positions;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y +=
      delta * 0.004;

    ref.current.rotation.x +=
      delta * 0.001;
  });

  return (
    <Points
      ref={ref}
      positions={particles}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color="#67e8f9"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.38}
      />
    </Points>
  );
}


/* ============================================================
   MAIN HERO BACKGROUND

   activeSlide comes directly from HeroSlider.

   0 → Engineering
   1 → Analytics
   2 → Data Science
   3 → AI
   4 → Cloud
   ============================================================ */

export default function HeroBackground({
  activeSlide,
}: HeroBackgroundProps) {

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">

      {/* Atmospheric glow */}
      <div
        className="
          absolute
          right-[5%]
          top-1/2
          -translate-y-1/2
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-500/[0.06]
          blur-[120px]
        "
      />

      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 48,
        }}
        dpr={[1, 1.5]}
      >

        <ambientLight intensity={0.8} />

        <BackgroundParticles />

        <group
          position={[2.25, 0, 0]}
          scale={1.25}
        >

          {/* DATA & AI STRATEGY */}
          {activeSlide === 0 && (
            <CloudPlatforms />
          )}

          {/* DATA ENGINEERING */}
          {activeSlide === 1 && (
            <DataEngineering />
          )}

          {/* DATA ANALYTICS */}
          {activeSlide === 2 && (
            <DataAnalytics />
          )}

          {/* DATA SCIENCE */}
          {activeSlide === 3 && (
            <DataScience />
          )}

          {/* GENERATIVE & AGENTIC AI */}
          {activeSlide === 4 && (
            <AIAutomation />
          )}

          {/* MANAGED DATA & AI */}
          {activeSlide === 5 && (
            <ManagedOperations />
          )}

        </group>

      </Canvas>

    </div>
  );
}

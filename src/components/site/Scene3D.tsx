import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";

// Lazy-load r3f only when a scene enters the viewport, protecting LCP.
const CanvasLazy = lazy(async () => {
  const { Canvas, useFrame } = await import("@react-three/fiber");
  const THREE = await import("three");

  function Orbit() {
    const g = useRef<any>(null);
    useFrame((_: any, dt: number) => {
      if (g.current) g.current.rotation.y += dt * 0.12;
    });
    return (
      <group ref={g}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#175E52" roughness={0.25} metalness={0.6} emissive="#2E8677" emissiveIntensity={0.15} />
        </mesh>
        {[1.6, 2.1, 2.6].map((r, i) => (
          <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.4, 0]}>
            <torusGeometry args={[r, 0.012, 8, 128]} />
            <meshBasicMaterial color="#C99A46" transparent opacity={0.5 - i * 0.12} />
          </mesh>
        ))}
      </group>
    );
  }

  function Ribbon() {
    const m = useRef<any>(null);
    useFrame((_: any, dt: number) => {
      if (m.current) m.current.rotation.z += dt * 0.15;
    });
    return (
      <mesh ref={m}>
        <torusKnotGeometry args={[0.9, 0.28, 200, 32]} />
        <meshStandardMaterial color="#2E8677" roughness={0.15} metalness={0.8} emissive="#175E52" emissiveIntensity={0.4} />
      </mesh>
    );
  }

  function Particles({ count = 800 }: { count?: number }) {
    const pts = useRef<any>(null);
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.6 + Math.random() * 0.6;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(p) * Math.cos(t);
      positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      positions[i * 3 + 2] = r * Math.cos(p);
    }
    useFrame((_: any, dt: number) => {
      if (pts.current) pts.current.rotation.y += dt * 0.08;
    });
    return (
      <points ref={pts}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#C99A46" transparent opacity={0.85} sizeAttenuation />
      </points>
    );
  }

  function Prism() {
    const m = useRef<any>(null);
    useFrame((_: any, dt: number) => {
      if (m.current) { m.current.rotation.x += dt * 0.12; m.current.rotation.y += dt * 0.18; }
    });
    return (
      <mesh ref={m}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial color="#0A1F1A" roughness={0.1} metalness={0.95} emissive="#2E8677" emissiveIntensity={0.35} flatShading />
      </mesh>
    );
  }

  function Constellation() {
    const g = useRef<any>(null);
    const nodes = Array.from({ length: 26 }, (_, i) => {
      const t = (i / 26) * Math.PI * 2;
      const r = 1.3 + (i % 5) * 0.25;
      return [r * Math.cos(t), Math.sin(i * 1.7) * 0.9, r * Math.sin(t)] as [number, number, number];
    });
    useFrame((state: any, dt: number) => {
      if (!g.current) return;
      g.current.rotation.y += dt * 0.06;
      const m = state.mouse;
      g.current.rotation.x += (m.y * 0.15 - g.current.rotation.x) * 0.03;
    });
    const linePositions = new Float32Array(nodes.length * 2 * 3);
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      const b = nodes[(i + 3) % nodes.length];
      linePositions.set([...a, ...b], i * 6);
    }
    return (
      <group ref={g}>
        {nodes.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshBasicMaterial color="#C99A46" />
          </mesh>
        ))}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#2E8677" transparent opacity={0.35} />
        </lineSegments>
      </group>
    );
  }

  function Wave() {
    const m = useRef<any>(null);
    useFrame((state: any) => {
      if (!m.current) return;
      const t = state.clock.elapsedTime;
      const pos = m.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i), y = pos.getY(i);
        pos.setZ(i, Math.sin(x * 1.5 + t) * 0.15 + Math.cos(y * 1.5 + t * 0.7) * 0.15);
      }
      pos.needsUpdate = true;
    });
    return (
      <mesh ref={m} rotation={[-Math.PI / 3, 0, 0]}>
        <planeGeometry args={[3.2, 3.2, 40, 40]} />
        <meshStandardMaterial color="#175E52" wireframe emissive="#C99A46" emissiveIntensity={0.6} />
      </mesh>
    );
  }

  const Comp = ({ variant }: { variant: string }) => {
    const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return (
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 4.2], fov: 45 }} frameloop={reduce ? "demand" : "always"} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.2} color="#C99A46" />
        <pointLight position={[-3, -2, 2]} intensity={0.6} color="#2E8677" />
        {variant === "orbit" && <Orbit />}
        {variant === "ribbon" && <Ribbon />}
        {variant === "particles" && <Particles />}
        {variant === "prism" && <Prism />}
        {variant === "constellation" && <Constellation />}
        {variant === "wave" && <Wave />}
        <hemisphereLight args={["#C99A46", "#0A1F1A", 0.5]} />
      </Canvas>
    );
  };
  return { default: Comp };
});

const fallbackGradient = (
  <div className="w-full h-full bg-gradient-to-br from-[#0A1F1A]/10 via-[#175E52]/10 to-[#2E8677]/10" />
);

/**
 * Contains failures local to a single decorative 3D scene — e.g. a dropped
 * connection mid chunk-load on mobile — so they degrade to the soft gradient
 * placeholder instead of bubbling up and crashing the whole page.
 */
class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.warn("Scene3D failed to load, falling back to placeholder:", error);
  }
  render() {
    return this.state.hasError ? fallbackGradient : this.props.children;
  }
}

export function Scene3D({ variant, className = "" }: { variant: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { rootMargin: "200px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className}>
      {visible && (
        <SceneErrorBoundary>
          <Suspense fallback={fallbackGradient}>
            <CanvasLazy variant={variant} />
          </Suspense>
        </SceneErrorBoundary>
      )}
    </div>
  );
}

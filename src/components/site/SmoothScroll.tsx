import { useEffect, useState } from "react";

/** Lenis momentum scrolling + a thin top scroll-progress bar. */
export function SmoothScroll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    if (!reduce) {
      import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;
        document.documentElement.style.scrollBehavior = "auto";
        const instance = new Lenis({
          duration: 1.05,
          easing: (x: number) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
          smoothWheel: true,
          touchMultiplier: 1.6,
        });
        lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
        const loop = (time: number) => {
          instance.raf(time);
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
      });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-transparent" aria-hidden>
      <div
        className="h-full origin-left"
        style={{
          transform: `scaleX(${progress})`,
          background: "linear-gradient(90deg, var(--nile-river), var(--glow))",
          transition: "transform .12s linear",
        }}
      />
    </div>
  );
}

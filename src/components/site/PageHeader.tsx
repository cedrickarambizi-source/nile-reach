import type { ReactNode } from "react";
import { Scene3D } from "./Scene3D";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
  scene,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  scene?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden hero-silk text-white pt-40 pb-24 md:pt-48 md:pb-28 print:bg-white print:text-black print:pt-8 print:pb-6 print:overflow-visible">
      {scene && (
        <div className="absolute inset-0 opacity-60 pointer-events-none print:hidden">
          <Scene3D variant={scene} className="absolute inset-0" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-[13px] uppercase tracking-[0.15em] font-medium text-[#C99A46] mb-6 print:text-[#175E52]">{eyebrow}</p>
        <h1 className="text-white text-5xl md:text-7xl lg:text-[84px] font-semibold leading-[1.02] tracking-[-0.03em] text-balance max-w-5xl print:text-black print:text-4xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light print:text-black/70 print:text-base">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

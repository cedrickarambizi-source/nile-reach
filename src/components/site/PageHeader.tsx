import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative overflow-hidden hero-silk text-white pt-40 pb-24 md:pt-48 md:pb-28">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-6">{eyebrow}</p>
        <h1 className="text-white text-5xl md:text-7xl lg:text-[84px] font-semibold leading-[1.02] tracking-[-0.03em] text-balance max-w-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-light">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

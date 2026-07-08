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
    <section className="pt-40 pb-20 border-b border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-nile-river/25 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="inline-flex items-center gap-3 text-nile-gold mb-8">
          <span className="h-px w-8 bg-nile-gold" />
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase">{eyebrow}</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.98] text-balance max-w-4xl">
          {title}
        </h1>
        {intro && (
          <p className="text-lg md:text-xl text-nile-clay/60 max-w-2xl leading-relaxed mt-8">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

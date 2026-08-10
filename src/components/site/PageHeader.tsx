import type { ReactNode } from "react";

/**
 * Institutional page masthead: flat red band, small uppercase eyebrow,
 * heavy Poppins headline, serif standfirst on the right.
 */
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
  /** Retained for call-site compatibility; the masthead is now flat. */
  scene?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden hero-silk text-white pt-[132px] pb-16 md:pt-[168px] md:pb-20 print:bg-white print:text-black print:pt-8 print:pb-6">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <p className="text-[11.5px] uppercase tracking-[0.16em] font-semibold text-white/70 mb-5 print:text-[#A6192E]">
          {eyebrow}
        </p>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end">
          <h1 className="text-white text-[44px] md:text-[68px] lg:text-[76px] font-bold leading-[1.02] tracking-[-0.03em] text-balance print:text-black print:text-4xl">
            {title}
          </h1>
          {intro && (
            <p className="font-serif text-lg md:text-xl text-white/85 leading-relaxed max-w-xl print:text-black/70 print:text-base">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

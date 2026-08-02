import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";
import { Reveal } from "./Reveal";

export type LegalSection = { heading: string; body: ReactNode };

/** Shared layout for the Privacy, Terms and Cookies pages. */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} />
      <section className="bg-paper py-28 md:py-40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="mono-label text-stone mb-14">Last updated {updated}</p>
          {sections.map((s) => (
            <Reveal key={s.heading} className="mb-12">
              <h2 className="text-2xl md:text-[28px] font-semibold text-ink mb-4">{s.heading}</h2>
              <div className="text-[16.5px] text-[#3F4B47] leading-[1.75] space-y-4">{s.body}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { Cta } from "../components/site/Cta";
import { canonical } from "../lib/seo";
import { industries } from "../lib/consulting";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Transform — Nile Reach" },
      {
        name: "description",
        content:
          "Digital transformation and AI growth programmes for construction, engineering, real estate, healthcare, hospitality, retail and growing enterprises across Africa.",
      },
      { property: "og:title", content: "Industries We Transform — Nile Reach" },
      {
        property: "og:description",
        content: "Sector-specific digital growth playbooks for the industries building Africa's economy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/industries")],
  }),
  component: Industries,
});

const outcomes: Record<string, string[]> = {
  "Construction & Engineering": ["Tender-ready digital credibility", "Qualified project inquiries", "Local search dominance"],
  "Real Estate": ["Buyer lead pipelines", "Listing & sales portals", "CRM-driven follow-up"],
  Healthcare: ["Patient engagement journeys", "Appointment automation", "Trusted online presence"],
  Hospitality: ["Direct booking growth", "Reputation management", "Seasonal demand campaigns"],
  Retail: ["Omnichannel customer experience", "E-commerce platforms", "Loyalty & retention flows"],
  "SMEs & Growing Enterprises": ["Digital foundations", "Operational automation", "Affordable growth roadmap"],
};

function Industries() {
  return (
    <>
      <PageHeader
        eyebrow="Sector expertise"
        title={<>Industries<br />we transform.</>}
        intro="We build sector-specific playbooks rather than reusing one template — because a contractor, a hotel and a clinic do not win customers the same way."
        scene="orbit"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <article
              key={ind.name}
              className="rounded-[24px] border border-black/8 bg-[#F2F2F2] p-9 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <p className="text-[12px] tracking-[0.22em] text-[#A6192E] mb-5">0{i + 1}</p>
              <h2 className="text-[24px] font-semibold text-[#1A1A1A] tracking-tight leading-snug">{ind.name}</h2>
              <p className="mt-4 text-[15px] text-[#5A5A5A] leading-relaxed">{ind.body}</p>
              <ul className="mt-7 pt-6 border-t border-black/8 space-y-2.5">
                {(outcomes[ind.name] ?? []).map((o) => (
                  <li key={o} className="text-[14px] text-[#3F4B47] flex gap-3">
                    <span className="text-[#A6192E]">—</span>
                    {o}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="on-dark relative overflow-hidden hero-silk text-white py-20 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-8">
          <p className="text-lg md:text-xl text-white/80 max-w-xl font-light leading-relaxed">
            Working in another sector? We regularly build custom transformation programmes outside our
            core industries.
          </p>
          <Cta to="/contact" variant="solid-light">
            Talk to a consultant <span aria-hidden>→</span>
          </Cta>
        </div>
      </section>
    </>
  );
}

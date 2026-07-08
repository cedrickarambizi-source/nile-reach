import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Nile Reach" },
      { name: "description", content: "Selected case studies and results from Nile Reach client engagements across Africa." },
      { property: "og:title", content: "Work — Nile Reach" },
      { property: "og:description", content: "Case studies in retail, healthcare and e-commerce." },
    ],
  }),
  component: Work,
});

const cases = [
  { sector: "E-commerce · Rwanda", metric: "3.2×", title: "Organic traffic in 90 days", body: "A full-funnel SEO and content overhaul turned an underperforming storefront into the category's top organic result." },
  { sector: "Healthcare · East Africa", metric: "-41%", title: "Cost per qualified lead", body: "AI-assisted audience targeting and creative testing cut acquisition cost while patient inquiry volume grew." },
  { sector: "Retail · Regional", metric: "+58%", title: "Social-driven store visits", body: "A rebuilt content calendar and always-on community management turned followers into footfall." },
  { sector: "Corporate · Kigali", metric: "12wk", title: "Brand + site relaunch", body: "New positioning, identity system and marketing site shipped in twelve weeks, ready for a Series A raise." },
];

function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title={<>Results our clients can point to.</>}
        intro="A snapshot of the outcomes our engagements target. Ask us for referenceable case studies during your intake."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <article key={c.title} className="glass-layer rounded-xl p-10 hover:border-nile-gold/40 transition-colors">
              <p className="text-[10px] uppercase tracking-[0.25em] text-nile-gold mb-8">{c.sector}</p>
              <div className="font-serif text-7xl text-nile-clay mb-4">{c.metric}</div>
              <h2 className="text-xl font-medium mb-3">{c.title}</h2>
              <p className="text-nile-clay/60 leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
        <p className="max-w-7xl mx-auto px-6 mt-12 text-sm italic text-nile-clay/40">
          Figures are illustrative of engagement outcomes. Named references available on request.
        </p>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Nile Reach" },
      { name: "description", content: "We work with retail, healthcare, e-commerce and corporate brands across Africa and globally." },
      { property: "og:title", content: "Industries — Nile Reach" },
      { property: "og:description", content: "Retail, healthcare, e-commerce and corporate marketing built in Kigali." },
    ],
  }),
  component: Industries,
});

const industries = [
  { name: "Retail", body: "Store networks, malls and consumer brands building foot-traffic and loyalty with digital-first campaigns." },
  { name: "Healthcare", body: "Hospitals, clinics and health-tech companies growing qualified patient inquiries with careful, compliant messaging." },
  { name: "E-commerce", body: "DTC and marketplace sellers scaling category leadership with SEO, paid media and conversion-focused storefronts." },
  { name: "Corporate & B2B", body: "Established organizations modernizing their brand, digital presence and internal marketing operations with AI." },
];

function Industries() {
  return (
    <>
      <PageHeader
        eyebrow="Who we work with"
        title={<>Built for the sectors moving Africa's economy.</>}
        intro="We specialize in retail, healthcare, e-commerce and corporate businesses — connecting brands with customers and turning them into future-ready leaders."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {industries.map((i, idx) => (
            <article key={i.name} className="glass-layer rounded-xl p-10">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-nile-gold font-serif text-2xl">0{idx + 1}</span>
                <h2 className="font-serif text-3xl">{i.name}</h2>
              </div>
              <p className="text-nile-clay/65 leading-relaxed">{i.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

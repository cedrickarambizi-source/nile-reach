import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Nile Reach" },
      { name: "description", content: "Digital and AI marketing for healthcare, retail, construction, hospitality, education, corporate and e-commerce brands across Africa." },
      { property: "og:title", content: "Industries — Nile Reach" },
      { property: "og:description", content: "Vertical expertise across ten sectors driving African growth." },
    ],
  }),
  component: Industries,
});

const industries = [
  { name: "Healthcare",   body: "Hospitals, clinics and health-tech growing qualified patient inquiries with compliant messaging.", icon: "✚" },
  { name: "Retail",       body: "Store networks and consumer brands turning digital reach into footfall and loyalty.", icon: "◆" },
  { name: "Construction", body: "Contractors and developers generating qualified project leads through SEO and paid media.", icon: "△" },
  { name: "Manufacturing",body: "B2B manufacturers building authority and pipeline with technical content and outbound.", icon: "◼" },
  { name: "Hotels & Hospitality", body: "Hotels, lodges and tour operators winning direct bookings across regional markets.", icon: "◈" },
  { name: "Education",    body: "Universities, schools and edtech attracting students with digital-first admissions journeys.", icon: "✦" },
  { name: "Government",   body: "Public-sector programs communicating clearly at scale with modern digital campaigns.", icon: "❖" },
  { name: "Financial Services", body: "Banks, fintech and insurance building trust and conversion in high-consideration funnels.", icon: "◐" },
  { name: "NGOs",         body: "Non-profits amplifying impact stories and mobilising donors through story-led media.", icon: "♢" },
  { name: "E-commerce",   body: "DTC and marketplace sellers scaling category leadership with SEO, paid and CRO.", icon: "▲" },
];

function Industries() {
  return (
    <>
      <PageHeader
        eyebrow="Who we work with"
        title={<>Vertical expertise across <span className="gradient-text">ten sectors</span>.</>}
        intro="We specialize in the industries moving Africa's economy — connecting brands with customers and turning them into future-ready leaders."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((i, idx) => (
            <article
              key={i.name}
              className="glass-layer rounded-2xl p-8 hover:border-nile-gold/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-nile-gold text-3xl">{i.icon}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-nile-clay/40">0{idx + 1}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3">{i.name}</h2>
              <p className="text-nile-clay/65 leading-relaxed text-sm">{i.body}</p>
            </article>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 flex flex-wrap gap-4 justify-between items-center">
          <p className="text-nile-clay/60 max-w-xl">
            Working in another sector? We regularly build custom playbooks for
            organisations outside our core industries.
          </p>
          <Link
            to="/contact"
            className="border border-white/15 text-nile-clay px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:border-nile-gold hover:text-nile-gold transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}

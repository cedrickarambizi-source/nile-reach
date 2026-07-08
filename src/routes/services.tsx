import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nile Reach" },
      { name: "description", content: "SEO, social media, paid ads, web design, branding and AI automation from a Kigali-based agency." },
      { property: "og:title", content: "Services — Nile Reach" },
      { property: "og:description", content: "Six disciplines, one current: SEO, social, paid media, web, branding and AI automation." },
    ],
  }),
  component: Services,
});

const services = [
  { n: "01", title: "SEO", body: "Technical, content and local SEO built to get you found by people already searching for what you sell.", details: ["Technical audits", "Content strategy", "Local & Africa-focused SEO"] },
  { n: "02", title: "Social Media Marketing", body: "Editorial calendars, community management and creative built for how people actually scroll.", details: ["Content calendars", "Community management", "Creative production"] },
  { n: "03", title: "Paid Advertising", body: "Search, social and programmatic media planned and optimised toward cost-per-result, not vanity clicks.", details: ["Google & Meta Ads", "Programmatic buying", "Full-funnel measurement"] },
  { n: "04", title: "Web Design", body: "Fast, accessible sites and storefronts designed to convert traffic into customers, not just impress it.", details: ["Marketing sites", "E-commerce", "Landing pages & CRO"] },
  { n: "05", title: "Branding", body: "Positioning, naming, identity and voice — a brand your team can apply consistently long after we hand it over.", details: ["Positioning & naming", "Visual identity", "Brand guidelines"] },
  { n: "06", title: "AI-Driven Automation", body: "Chat, lead-routing and reporting workflows powered by AI, so your team spends time on strategy, not admin.", details: ["AI assistants", "Workflow automation", "Custom LLM integrations"] },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title={<>Six disciplines,<br />one current.</>}
        intro="We combine digital marketing craft with artificial intelligence to deliver smarter, faster and measurable growth."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {services.map((s) => (
            <article key={s.n} className="bg-nile-dark p-12 hover:bg-nile-deep transition-colors">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-nile-gold font-serif text-xl">{s.n}.</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-nile-clay/40">Service</span>
              </div>
              <h2 className="text-2xl font-medium uppercase tracking-tight mb-4">{s.title}</h2>
              <p className="text-nile-clay/60 leading-relaxed mb-6">{s.body}</p>
              <ul className="space-y-2 border-t border-white/5 pt-6">
                {s.details.map((d) => (
                  <li key={d} className="text-sm text-nile-clay/70 flex gap-3">
                    <span className="text-nile-gold">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-wrap gap-4 justify-between items-center">
          <p className="text-nile-clay/50 text-sm max-w-lg">
            Not sure where to start? We'll audit your current performance and recommend the two or three moves that matter most.
          </p>
          <Link
            to="/contact"
            className="bg-nile-gold text-nile-dark px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            Request an audit
          </Link>
        </div>
      </section>
    </>
  );
}

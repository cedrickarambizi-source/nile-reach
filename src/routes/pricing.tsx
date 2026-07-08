import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Nile Reach" },
      { name: "description", content: "Transparent monthly retainers for Nile Reach digital and AI marketing engagements — Starter, Growth and Enterprise." },
      { property: "og:title", content: "Pricing — Nile Reach" },
      { property: "og:description", content: "Retainers built for retail, healthcare, e-commerce and corporate teams." },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Starter",
    price: "$1,500",
    cadence: "/ month",
    tag: "For small teams",
    body: "A focused engagement to establish your digital foundation and start compounding results.",
    features: [
      "SEO foundation & monthly content",
      "1 paid channel managed",
      "Monthly performance report",
      "Slack + email support",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$4,500",
    cadence: "/ month",
    tag: "Most chosen",
    body: "Full-funnel marketing for brands ready to scale acquisition across multiple channels.",
    features: [
      "SEO + content strategy",
      "Paid media across 3 channels",
      "Social media management",
      "Bi-weekly strategy sessions",
      "AI reporting dashboard",
    ],
    cta: "Start with Growth",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "engagements",
    tag: "For scale",
    body: "Embedded team for enterprises with complex needs — branding, web, AI automation and paid, together.",
    features: [
      "Dedicated pod (strategist, PM, creative, engineer)",
      "Custom AI automation build",
      "Brand & web design included",
      "Weekly executive reporting",
      "SLA-backed response",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={<>Retainers built to compound.</>}
        intro="Transparent monthly engagements. Every tier includes strategy, execution and measurement — pick the depth that matches your ambition."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`p-10 rounded-xl border transition-colors flex flex-col ${
                t.highlight
                  ? "border-nile-gold bg-nile-deep"
                  : "border-white/10 bg-nile-dark hover:border-white/25"
              }`}
            >
              <p className={`eyebrow ${t.highlight ? "" : "text-nile-clay/60"} mb-6`}>{t.tag}</p>
              <h3 className="font-serif text-3xl mb-2">{t.name}</h3>
              <p className="text-sm text-nile-clay/60 leading-relaxed mb-8">{t.body}</p>
              <div className="mb-8">
                <span className="font-serif text-5xl text-nile-clay">{t.price}</span>
                <span className="text-nile-clay/50 ml-2 text-sm">{t.cadence}</span>
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-nile-clay/75">
                    <span className="text-nile-gold mt-1">◆</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`text-center px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                  t.highlight
                    ? "bg-nile-gold text-nile-dark hover:bg-white"
                    : "border border-white/15 text-nile-clay hover:border-nile-gold hover:text-nile-gold"
                }`}
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-24 text-center">
          <p className="eyebrow mb-4">Project-based work</p>
          <h2 className="font-serif text-4xl mb-4">Prefer a one-time engagement?</h2>
          <p className="text-nile-clay/60 mb-8">
            Brand refreshes, website builds and AI automation pilots are quoted per project.
            Typical range: $8k–$60k depending on scope.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-nile-gold text-nile-gold px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-nile-gold hover:text-nile-dark transition-colors"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}

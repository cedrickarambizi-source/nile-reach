import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/site/PageHeader";
import { canonical } from "../lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Nile Reach" },
      { name: "description", content: "Transparent monthly growth partnerships from RWF 300,000. Starter, Business, Professional and Enterprise plans plus one-time project pricing." },
      { property: "og:title", content: "Pricing — Nile Reach" },
      { property: "og:description", content: "Simple pricing. Powerful growth. Monthly retainers from RWF 300K to RWF 1.5M." },
    ],
    links: [canonical("/pricing")],
  }),
  component: Pricing,
});

type Tier = {
  name: string;
  price: string;
  cadence: string;
  tag: string;
  body: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter Growth",
    price: "RWF 300,000",
    cadence: "/ month",
    tag: "For startups & small business",
    body: "Everything you need to get found, look credible and start growing consistently.",
    features: [
      "Professional website maintenance",
      "Basic SEO optimization",
      "Google Business Profile management",
      "12 social media posts / month",
      "Facebook & Instagram management",
      "Monthly performance report",
      "WhatsApp support",
      "Basic graphic design",
      "Basic AI assistance",
      "1 strategy meeting / month",
    ],
    cta: "Start Growing",
  },
  {
    name: "Business Growth",
    price: "RWF 600,000",
    cadence: "/ month",
    tag: "Most popular",
    body: "For growing companies that need consistent, multi-channel marketing.",
    features: [
      "Everything in Starter",
      "Advanced SEO",
      "Google Ads management",
      "Facebook & Instagram Ads",
      "LinkedIn marketing",
      "20 social media posts",
      "Blog content creation",
      "Email marketing",
      "AI chatbot integration",
      "Landing pages & CRO",
      "Bi-weekly strategy meetings",
    ],
    cta: "Choose Business",
    highlight: true,
  },
  {
    name: "Professional Growth",
    price: "RWF 900,000",
    cadence: "/ month",
    tag: "For established businesses",
    body: "A full digital marketing engine with AI automation baked in.",
    features: [
      "Everything in Business",
      "Full digital marketing strategy",
      "AI business automation",
      "CRM integration",
      "Sales funnel development",
      "Unlimited landing pages",
      "Reputation management",
      "Video marketing",
      "Photography consultation",
      "Weekly performance meetings",
      "Priority support",
    ],
    cta: "Scale Faster",
  },
  {
    name: "Enterprise",
    price: "RWF 1,500,000",
    cadence: "/ month",
    tag: "For corporations",
    body: "A dedicated growth pod with unlimited campaigns, automation and executive reporting.",
    features: [
      "Dedicated marketing team",
      "Complete business automation",
      "Unlimited advertising campaigns",
      "Unlimited graphic design",
      "Full website management",
      "Custom software integrations",
      "Executive marketing reports & KPI dashboard",
      "24/7 priority support",
      "Dedicated account manager",
      "Quarterly growth planning",
      "Multi-location marketing",
      "Advanced analytics & competitor monitoring",
    ],
    cta: "Contact Sales",
  },
];

const oneTime = [
  ["Business Website", "RWF 300,000"],
  ["E-commerce Website", "RWF 700,000"],
  ["Corporate Website", "RWF 1,200,000"],
  ["Branding Package", "RWF 250,000"],
  ["Logo Design", "RWF 80,000"],
  ["SEO Audit", "RWF 150,000"],
  ["Google Business Profile Setup", "RWF 100,000"],
  ["AI Chatbot Setup", "RWF 400,000"],
  ["Business Automation", "RWF 800,000"],
];

const faqs = [
  { q: "Do I have to sign a long-term contract?", a: "No. Our monthly plans are month-to-month with a 30-day notice period. Most clients stay because of results, not contracts." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes. You can move between plans at the end of any billing month — we prorate whatever's needed and move you across without losing momentum." },
  { q: "What's included in ad spend?", a: "Our monthly retainer covers strategy, media management, creative and reporting. Advertising budget (paid to Google, Meta, etc.) is billed separately and stays under your control." },
  { q: "How fast will I see results?", a: "Paid campaigns typically produce leads within 2–4 weeks. SEO and content compounds over 3–6 months. We set clear KPI expectations during onboarding." },
  { q: "Do you work outside Rwanda?", a: "Yes. We serve clients across East Africa and internationally. All engagements are managed remotely with monthly on-site or executive syncs where relevant." },
];

function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={<>Simple pricing. <span className="gradient-text">Powerful growth.</span></>}
        intro="Choose a monthly growth partnership designed to help your business attract more customers, generate more leads and automate operations with AI."
      />

      {/* PLANS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all ${
                t.highlight
                  ? "bg-gradient-to-b from-nile-river/20 via-nile-deep to-nile-dark border border-nile-gold/60 shadow-[0_0_60px_-15px_rgba(0,217,255,0.55)]"
                  : "glass-layer hover:border-nile-gold/40"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nile-gold text-nile-dark text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <p className="eyebrow mb-4">{t.tag}</p>
              <h3 className="text-2xl font-semibold mb-2">{t.name}</h3>
              <p className="text-sm text-nile-clay/60 leading-relaxed mb-6">{t.body}</p>
              <div className="mb-8">
                <div className="text-3xl md:text-4xl font-semibold gradient-text">{t.price}</div>
                <div className="text-nile-clay/50 text-xs mt-1">{t.cadence}</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-nile-clay/75">
                    <span className="text-nile-gold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`text-center px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full transition-all ${
                  t.highlight
                    ? "bg-gradient-to-r from-nile-river to-nile-gold text-nile-dark hover:opacity-95"
                    : "border border-white/15 text-nile-clay hover:border-nile-gold hover:text-nile-gold"
                }`}
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ONE-TIME SERVICES */}
      <section className="py-20 border-t border-white/5 bg-nile-deep/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">One-time projects</p>
            <h2 className="text-3xl md:text-4xl">Project-based work at transparent rates.</h2>
            <p className="text-nile-clay/60 mt-4 max-w-2xl mx-auto">
              Need a one-off build or setup? Below are our published starting prices. Every project
              begins with a scoping call to confirm requirements.
            </p>
          </div>
          <div className="glass-layer rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.25em] text-nile-clay/50 border-b border-white/10">
                  <th className="py-4 px-6 font-semibold">Service</th>
                  <th className="py-4 px-6 font-semibold text-right">Starting price</th>
                </tr>
              </thead>
              <tbody>
                {oneTime.map(([svc, price]) => (
                  <tr key={svc} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 text-sm">{svc}</td>
                    <td className="py-4 px-6 text-sm text-right font-semibold text-nile-gold">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Pricing FAQ</p>
            <h2 className="text-3xl md:text-4xl">Answers before you ask.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => <FaqRow key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-layer rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-32 -right-32 size-96 bg-nile-river/30 rounded-full blur-[120px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl mb-4">
                Book a <span className="gradient-text">free strategy session</span>.
              </h2>
              <p className="text-nile-clay/70 mb-8 max-w-xl mx-auto">
                30 minutes with a Nile Reach strategist. Walk away with 2–3 growth moves you can start immediately — free of charge.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-nile-river to-nile-gold text-nile-dark px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-95 transition-opacity"
              >
                Book my session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="glass-layer rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-white/5 transition-colors"
      >
        <span className="font-medium">{q}</span>
        <span className={`text-nile-gold text-xl transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm text-nile-clay/70 leading-relaxed">{a}</div>
      )}
    </div>
  );
}

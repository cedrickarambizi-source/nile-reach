import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "../components/site/PageHeader";
import { canonical } from "../lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Solutions Designed to Accelerate Your Business Growth | Nile Reach" },
      { name: "description", content: "From digital marketing to complete business transformation, Nile Reach helps organizations improve visibility, automate operations, generate qualified leads, and grow revenue." },
      { property: "og:title", content: "Solutions Designed to Accelerate Your Business Growth — Nile Reach" },
      { property: "og:description", content: "A Digital Growth & AI Transformation Partner — not just a marketing agency." },
    ],
    links: [canonical("/pricing")],
  }),
  component: Pricing,
});

type Tier = {
  name: string;
  price: string;
  altPrice?: string;
  cadence: string;
  duration?: string;
  tag: string;
  body: string;
  features: string[];
  industries?: string[];
  cta: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter Growth",
    price: "RWF 500,000",
    cadence: "/ month",
    tag: "Small businesses & startups",
    body: "For businesses that need a professional online presence and consistent digital visibility.",
    features: [
      "Social media management",
      "Content creation",
      "Google Business Profile optimization",
      "Basic SEO",
      "Monthly performance reports",
      "Website updates",
      "Digital presence improvement",
    ],
    cta: "Start Growing",
  },
  {
    name: "Business Growth",
    price: "RWF 2,000,000–5,000,000",
    cadence: "/ month",
    tag: "Most popular",
    body: "For companies that want predictable leads, stronger marketing systems, and measurable growth.",
    features: [
      "Everything in Starter Growth",
      "Advanced SEO strategy",
      "Google Ads management",
      "Facebook & Instagram advertising",
      "Lead generation campaigns",
      "Landing page creation",
      "Email marketing automation",
      "CRM setup",
      "Monthly growth strategy meetings",
      "Conversion optimization",
    ],
    cta: "Grow My Business",
    highlight: true,
  },
  {
    name: "Digital Transformation",
    price: "RWF 10,000,000–50,000,000",
    cadence: "/ project",
    duration: "3–6 month engagement",
    tag: "Full modernization",
    body: "For companies ready to modernize operations and build scalable digital systems.",
    features: [
      "Business digital audit",
      "Digital transformation roadmap",
      "Corporate website transformation",
      "SEO growth system",
      "CRM implementation",
      "AI chatbot integration",
      "Marketing automation",
      "Analytics dashboard",
      "Sales pipeline optimization",
      "Team training",
    ],
    cta: "Request Transformation Consultation",
  },
  {
    name: "Enterprise Growth Partner",
    price: "RWF 5,000,000–20,000,000",
    altPrice: "$5,000–$20,000 / month for international clients",
    cadence: "/ month",
    tag: "Strategic partnership",
    body: "A long-term strategic partnership for organizations seeking continuous digital growth.",
    features: [
      "Dedicated growth manager",
      "Complete digital strategy",
      "SEO team",
      "Content team",
      "Paid advertising management",
      "AI automation solutions",
      "Business intelligence dashboards",
      "Marketing performance analysis",
      "Quarterly executive strategy reviews",
    ],
    cta: "Become a Growth Partner",
  },
  {
    name: "AI Automation Solutions",
    price: "RWF 5,000,000–30,000,000",
    cadence: "/ project",
    tag: "AI & automation",
    body: "Custom AI assistants and automation that run parts of the business for you.",
    features: [
      "AI customer assistants",
      "WhatsApp automation",
      "AI sales assistants",
      "Workflow automation",
      "Document processing automation",
      "Internal knowledge assistants",
      "Business process optimization",
    ],
    industries: [
      "Construction — lead management, tender tracking, follow-up automation",
      "Hotels — AI booking assistant, guest communication automation",
      "Healthcare — appointment automation, patient communication systems",
    ],
    cta: "Build AI Solutions",
  },
];

const whoWeHelp = [
  "Construction & Engineering",
  "Real Estate Developers",
  "Hotels & Hospitality",
  "Healthcare Organizations",
  "Retail Companies",
  "Manufacturing Companies",
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
        title={<>Solutions Designed to <span className="gradient-text">Accelerate Your Business Growth</span></>}
        intro="From digital marketing to complete business transformation, Nile Reach helps organizations improve visibility, automate operations, generate qualified leads, and grow revenue."
      />

      {/* PLANS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                <div className="text-2xl md:text-3xl font-semibold gradient-text leading-tight">{t.price}</div>
                <div className="text-nile-clay/50 text-xs mt-1">
                  {t.cadence}
                  {t.duration && <span> · {t.duration}</span>}
                </div>
                {t.altPrice && <div className="text-nile-clay/50 text-xs mt-1">{t.altPrice}</div>}
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-nile-clay/75">
                    <span className="text-nile-gold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {t.industries && (
                <div className="mb-6 pt-5 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-nile-clay/40 mb-3">Built for</p>
                  <ul className="space-y-2">
                    {t.industries.map((ind) => (
                      <li key={ind} className="text-xs text-nile-clay/60 leading-relaxed">{ind}</li>
                    ))}
                  </ul>
                </div>
              )}
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

      {/* WHO WE HELP */}
      <section className="py-20 border-t border-white/5 bg-nile-deep/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Who we help</p>
            <h2 className="text-3xl md:text-4xl">Vertical expertise, not generic playbooks.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoWeHelp.map((industry) => (
              <div
                key={industry}
                className="glass-layer rounded-xl px-6 py-5 text-sm font-medium text-nile-clay/85 flex items-center gap-3"
              >
                <span className="size-1.5 rounded-full bg-nile-gold shrink-0" />
                {industry}
              </div>
            ))}
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
                Ready to <span className="gradient-text">transform your business</span>?
              </h2>
              <p className="text-nile-clay/70 mb-8 max-w-xl mx-auto">
                Book a strategy consultation with Nile Reach and discover how digital technology, AI
                automation, and growth marketing can help your organization achieve better results.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-nile-river to-nile-gold text-nile-dark px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-95 transition-opacity"
                >
                  Book Strategy Call
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border border-white/15 text-nile-clay px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:border-nile-gold hover:text-nile-gold transition-colors"
                >
                  Request Free Digital Audit
                </Link>
              </div>
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { canonical } from "../lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nile Reach" },
      { name: "description", content: "SEO, social media, paid ads, web design, branding, AI automation and business process automation from Kigali." },
      { property: "og:title", content: "Services — Nile Reach" },
      { property: "og:description", content: "Nine capabilities, one integrated growth engine." },
    ],
    links: [canonical("/services")],
  }),
  component: Services,
});

const services = [
  { n: "01", title: "Search Engine Optimization", tag: "SEO",
    body: "Technical, local, international and AI-native SEO that captures buyers already searching for you.",
    details: ["Technical SEO audits", "Local & Google Business Profile", "International & multilingual", "AI-native content strategy"] },
  { n: "02", title: "Social Media Marketing", tag: "Social",
    body: "Editorial calendars, community management and creators tuned for how Africa actually scrolls.",
    details: ["Facebook & Instagram", "TikTok & X", "LinkedIn thought leadership", "Content production"] },
  { n: "03", title: "Paid Advertising", tag: "Media",
    body: "Full-funnel media across Google, Meta, LinkedIn & TikTok — measured against pipeline, not clicks.",
    details: ["Google & YouTube Ads", "Meta & LinkedIn Ads", "Programmatic & display", "Creative testing engine"] },
  { n: "04", title: "AI Automation", tag: "AI",
    body: "Chatbots, CRM workflows and WhatsApp automations that answer, qualify and convert 24/7.",
    details: ["AI chatbots & voice", "WhatsApp automation", "CRM & email flows", "Custom LLM agents"] },
  { n: "05", title: "Website Design & Development", tag: "Web",
    body: "Fast, accessible, conversion-focused websites, storefronts and landing pages.",
    details: ["Marketing sites", "E-commerce", "Landing pages & CRO", "UI/UX design systems"] },
  { n: "06", title: "Branding", tag: "Brand",
    body: "Positioning, naming, identity and voice — a brand your team can apply long after we hand off.",
    details: ["Positioning & naming", "Visual identity", "Brand guidelines", "Launch campaigns"] },
  { n: "07", title: "Business Process Automation", tag: "Ops",
    body: "Automating internal ops so your team spends time on customers, not spreadsheets.",
    details: ["Lead qualification", "Appointment booking", "Sales-to-CRM handoffs", "Reporting dashboards"] },
  { n: "08", title: "Lead Generation", tag: "Growth",
    body: "Predictable pipeline through outbound, inbound, paid and partner-driven channels.",
    details: ["Outbound + intent data", "Lead magnets & funnels", "SDR playbooks", "Nurture automation"] },
  { n: "09", title: "Analytics & Growth Strategy",  tag: "Insight",
    body: "AI-powered dashboards and quarterly growth planning grounded in what your data actually says.",
    details: ["GA4 + Looker Studio", "Attribution modelling", "KPI dashboards", "Quarterly strategy"] },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title={<>Nine capabilities.<br /><span className="gradient-text">One growth engine.</span></>}
        intro="We combine performance marketing craft with artificial intelligence to deliver smarter, faster and measurable business growth."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.n}
              className="glass-layer rounded-2xl p-8 hover:border-nile-gold/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-nile-gold font-semibold text-lg">{s.n}.</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-nile-clay/40">{s.tag}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3 group-hover:gradient-text transition-colors">{s.title}</h2>
              <p className="text-nile-clay/60 leading-relaxed mb-6 text-sm">{s.body}</p>
              <ul className="space-y-2 border-t border-white/5 pt-5">
                {s.details.map((d) => (
                  <li key={d} className="text-xs text-nile-clay/70 flex gap-3">
                    <span className="text-nile-gold">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 glass-layer rounded-3xl p-12 flex flex-wrap gap-6 justify-between items-center">
          <div className="max-w-xl">
            <p className="eyebrow mb-3">Not sure where to start?</p>
            <h3 className="text-2xl md:text-3xl font-semibold">
              We'll audit your current performance and recommend the moves that matter most.
            </h3>
          </div>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-nile-river to-nile-gold text-nile-dark px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-95 transition-opacity"
          >
            Request an audit
          </Link>
        </div>
      </section>
    </>
  );
}

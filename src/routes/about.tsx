import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nile Reach" },
      { name: "description", content: "Founded November 2023 in Kigali, Nile Reach helps businesses expand across Africa and globally through digital and AI marketing." },
      { property: "og:title", content: "About Nile Reach" },
      { property: "og:description", content: "A next-generation Digital & AI Marketing Agency inspired by the flow and power of the Nile." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Innovation", b: "We build with AI-first tooling and share the leverage with our clients." },
  { t: "Measurable outcomes", b: "Every activity ladders to a KPI. Leads, revenue, payback — that's the report card." },
  { t: "Craft over volume", b: "Small teams doing senior work. We'd rather do fewer things brilliantly." },
  { t: "African ambition", b: "Built in Kigali, thinking continentally, delivering globally." },
];

const timeline = [
  { y: "Nov 2023", t: "Founded in Kigali", b: "Cedric Karambizi launches Nile Reach as a digital & AI marketing agency." },
  { y: "2024", t: "First enterprise wins", b: "Retail and healthcare clients across East Africa join the roster." },
  { y: "2025", t: "AI automation practice", b: "Dedicated AI pod launched — chatbots, WhatsApp automations and CRM agents." },
  { y: "2026", t: "Continental reach", b: "Serving clients across 12 countries with a growing multi-disciplinary team." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={<>Named after a river that <span className="gradient-text">never stops moving</span>.</>}
        scene="constellation"
      />

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-lg leading-relaxed text-nile-clay/75">
          <p className="border-l-2 border-nile-gold pl-6 text-2xl text-nile-clay italic font-light">
            "We don't simply market businesses — we build digital ecosystems that generate long-term success."
          </p>
          <p>
            Founded in November 2023 and headquartered in Kigali, Rwanda, Nile Reach is a
            next-generation Digital and AI Marketing Agency dedicated to helping businesses
            expand their reach across Africa and globally.
          </p>
          <p>
            Inspired by the strength and continuous flow of the Nile River, we combine
            cutting-edge digital marketing strategies with artificial intelligence to
            create measurable business growth.
          </p>
          <p>
            We specialise in helping retail companies, healthcare providers, e-commerce
            businesses, professional firms and corporate organisations increase visibility,
            attract customers and automate growth.
          </p>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 border-t border-white/5 bg-nile-deep/40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="glass-layer rounded-2xl p-10">
            <p className="eyebrow mb-4">Mission</p>
            <h3 className="text-2xl md:text-3xl leading-tight mb-4">
              Give every ambitious African business an AI-powered growth partner.
            </h3>
            <p className="text-nile-clay/65">
              We make world-class digital marketing and AI automation accessible to
              businesses that want to compete beyond their borders.
            </p>
          </div>
          <div className="glass-layer rounded-2xl p-10">
            <p className="eyebrow mb-4">Vision</p>
            <h3 className="text-2xl md:text-3xl leading-tight mb-4">
              Africa's most trusted AI-native marketing agency.
            </h3>
            <p className="text-nile-clay/65">
              A regional home for brands, technologists and creatives building the
              next generation of African-born, globally-competing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Core values</p>
          <h2 className="text-3xl md:text-5xl mb-14 max-w-3xl leading-tight">
            What we hold ourselves to.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.t} className="glass-layer rounded-2xl p-8">
                <span className="text-nile-gold font-semibold text-sm">0{i + 1}</span>
                <h3 className="text-xl font-semibold mt-3 mb-3">{v.t}</h3>
                <p className="text-sm text-nile-clay/65 leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 border-t border-white/5 bg-nile-deep/30">
        <div className="max-w-5xl mx-auto px-6">
          <p className="eyebrow mb-4">Timeline</p>
          <h2 className="text-3xl md:text-5xl mb-14">The current so far.</h2>
          <div className="relative pl-8 border-l border-white/10 space-y-10">
            {timeline.map((it) => (
              <div key={it.y} className="relative">
                <span className="absolute -left-[38px] top-2 size-3 rounded-full bg-nile-gold shadow-[0_0_20px_5px_rgba(0,217,255,0.4)]" />
                <p className="text-nile-gold text-xs font-bold tracking-[0.25em] uppercase mb-2">{it.y}</p>
                <h3 className="text-xl font-semibold mb-1">{it.t}</h3>
                <p className="text-nile-clay/60">{it.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS + CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { k: "Founded", v: "November 2023" },
            { k: "Headquarters", v: "Kigali, Rwanda" },
            { k: "Reach", v: "Africa & Global" },
          ].map((f) => (
            <div key={f.k} className="border-l border-nile-gold/50 pl-6">
              <p className="eyebrow mb-3">{f.k}</p>
              <p className="text-3xl font-semibold">{f.v}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-14 flex flex-wrap gap-4">
          <Link to="/team" className="bg-gradient-to-r from-nile-river to-nile-gold text-nile-dark px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-95 transition-opacity">
            Meet the team
          </Link>
          <Link to="/contact" className="border border-white/15 text-nile-clay px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:border-nile-gold hover:text-nile-gold transition-colors">
            Work with us
          </Link>
        </div>
      </section>
    </>
  );
}

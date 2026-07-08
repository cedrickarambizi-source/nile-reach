import { createFileRoute, Link } from "@tanstack/react-router";
import { Counter } from "../components/site/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nile Reach — AI-Powered Digital Growth Agency, Kigali" },
      {
        name: "description",
        content:
          "Nile Reach is a Kigali-based digital & AI marketing agency helping ambitious brands across Africa scale faster with SEO, paid media, automation, and design.",
      },
      { property: "og:title", content: "Nile Reach — AI-Powered Digital Growth" },
      {
        property: "og:description",
        content:
          "Helping ambitious companies across Africa scale faster through AI, marketing, automation, and digital innovation.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: "🔎", title: "SEO", body: "Technical, local & AI-native SEO that captures intent-driven demand." },
  { icon: "⚡", title: "AI Automation", body: "Chatbots, CRM & workflow agents that scale ops without scaling headcount." },
  { icon: "🖥️", title: "Web Development", body: "Fast, conversion-focused websites, storefronts and landing pages." },
  { icon: "📈", title: "Paid Ads", body: "Google, Meta, LinkedIn & TikTok media planned around ROAS." },
  { icon: "✦", title: "Brand Identity", body: "Positioning, naming and visual systems built to travel." },
  { icon: "◐", title: "Social Media", body: "Editorial content, community and creators that grow reach." },
];

const industries = [
  "Healthcare", "Retail", "Construction", "Corporate",
  "Education", "Hospitality", "E-commerce", "Financial Services",
];

const reasons = [
  { t: "AI-native operating model", b: "Every engagement is instrumented with AI — from research to media buying to reporting." },
  { t: "Regional intelligence, global craft", b: "We speak the local market and hold ourselves to a global creative bar." },
  { t: "Retainer-based, outcome-led", b: "Transparent monthly partnerships tied to leads, revenue and payback — not deliverables." },
  { t: "Senior team, small pods", b: "You work with the people who do the work. No account layers, no hand-offs." },
];

const partners = ["Google", "Meta", "Microsoft", "OpenAI", "HubSpot", "Cloudflare", "AWS"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-[-10%] size-[520px] rounded-full bg-nile-river/25 blur-[140px]" />
          <div className="absolute top-40 left-[-10%] size-[420px] rounded-full bg-nile-gold/15 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03]">
                <span className="size-2 rounded-full bg-nile-gold animate-pulse" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-nile-clay/80">
                  AI × Digital Growth · Kigali → Africa
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl leading-[1.02] mb-8 text-balance">
                <span className="gradient-text">AI-Powered Digital Growth</span>
                <br />
                <span className="text-nile-clay/95">for Modern Businesses.</span>
              </h1>
              <p className="text-lg md:text-xl text-nile-clay/65 max-w-xl leading-relaxed mb-10 font-light">
                Helping ambitious companies across Africa scale faster through
                AI, marketing, automation, and digital innovation — from Kigali to the world.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-nile-river to-nile-gold text-nile-dark font-bold uppercase tracking-[0.18em] text-xs rounded-full shadow-[0_20px_50px_-10px_rgba(0,217,255,0.45)] hover:shadow-[0_25px_60px_-10px_rgba(0,217,255,0.7)] transition-all"
                >
                  Book Strategy Call →
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border border-white/15 text-nile-clay font-semibold uppercase tracking-[0.18em] text-xs rounded-full hover:border-nile-gold hover:text-nile-gold transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="glass-layer rounded-3xl p-6 aspect-square relative">
                <div className="w-full h-full rounded-2xl relative overflow-hidden bg-gradient-to-br from-nile-deep via-nile-river/40 to-nile-dark">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute size-[90%] rounded-full border border-nile-gold/10 animate-[spin_40s_linear_infinite]" />
                    <div className="absolute size-[70%] rounded-full border border-nile-gold/20 animate-[spin_30s_linear_infinite_reverse]" />
                    <div className="absolute size-[48%] rounded-full border border-nile-gold/30" />
                    <div className="absolute size-[28%] rounded-full bg-nile-gold/25 blur-2xl" />
                    <div className="absolute size-[14%] rounded-full bg-nile-gold shadow-[0_0_80px_25px_rgba(0,217,255,0.55)]" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-layer p-5 rounded-2xl">
                  <div className="gradient-text text-3xl font-semibold mb-1">+312%</div>
                  <div className="text-[10px] uppercase tracking-widest text-nile-clay/60">
                    Avg. ROAS across portfolio
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass-layer px-4 py-3 rounded-2xl">
                  <div className="text-[10px] uppercase tracking-widest text-nile-clay/50">Live</div>
                  <div className="text-nile-clay text-sm font-semibold">4 campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 border-y border-white/5 bg-nile-deep/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: 120, s: "+", label: "Businesses Helped" },
            { n: 250, s: "+", label: "Projects Completed" },
            { n: 12, s: "", label: "Countries Served" },
            { n: 98, s: "%", label: "Client Satisfaction" },
          ].map((it) => (
            <div key={it.label} className="text-center">
              <div className="text-5xl md:text-6xl font-semibold gradient-text">
                <Counter to={it.n} suffix={it.s} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-nile-clay/60 mt-3">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-6">
            <div>
              <p className="eyebrow mb-4">Featured Services</p>
              <h2 className="text-4xl md:text-5xl max-w-2xl leading-[1.1]">
                One partner for the entire <span className="gradient-text">growth stack</span>.
              </h2>
            </div>
            <Link to="/services" className="text-nile-gold text-xs font-bold uppercase tracking-[0.2em] hover:text-white transition-colors">
              All services →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="glass-layer rounded-2xl p-8 hover:border-nile-gold/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-6">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-nile-clay/60 text-sm leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="eyebrow mb-4">Featured Industries</p>
            <h2 className="text-4xl md:text-5xl leading-[1.1]">
              Built for the sectors moving Africa's economy.
            </h2>
            <p className="text-nile-clay/60 mt-6 max-w-lg">
              We hold deep expertise across the industries driving growth in the region — from clinics
              and construction firms to hotels, retailers and enterprise organisations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {industries.map((i) => (
              <div
                key={i}
                className="glass-layer rounded-xl px-5 py-4 text-sm font-medium hover:border-nile-gold/50 transition-colors"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="eyebrow mb-4">Why Nile Reach</p>
            <h2 className="text-4xl md:text-5xl max-w-3xl mx-auto leading-[1.1]">
              A growth partner that thinks like a <span className="gradient-text">technology company</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r, idx) => (
              <div key={r.t} className="glass-layer rounded-2xl p-8">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-nile-gold font-semibold text-sm">0{idx + 1}</span>
                  <h3 className="text-xl font-semibold">{r.t}</h3>
                </div>
                <p className="text-nile-clay/65 leading-relaxed pl-8">{r.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 border-t border-white/5 bg-nile-deep/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow text-center mb-8">Technology & AI partners</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-nile-clay/50 font-semibold tracking-widest text-sm uppercase">
            {partners.map((p) => (
              <span key={p} className="hover:text-nile-gold transition-colors">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-layer p-12 md:p-20 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-32 -right-32 size-96 bg-nile-river/30 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 size-96 bg-nile-gold/15 rounded-full blur-[120px]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <h2 className="text-4xl md:text-5xl leading-[1.05]">
                Ready to <span className="gradient-text">scale?</span>
              </h2>
              <div>
                <p className="text-nile-clay/70 mb-8 text-lg">
                  Book a free strategy call and let's design a growth engine tailored to your market.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-to-r from-nile-river to-nile-gold text-nile-dark px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:opacity-95 transition-opacity"
                >
                  Book Strategy Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

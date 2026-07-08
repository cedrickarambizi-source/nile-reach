import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const pillars = [
  { n: "01", title: "Precision Search", body: "Technical SEO and localized content that puts your brand where intent meets opportunity." },
  { n: "02", title: "Performance Media", body: "Paid social and programmatic buying optimized for conversion, not vanity clicks." },
  { n: "03", title: "AI Orchestration", body: "Custom automations and lead-routing agents that shrink response times to seconds." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-nile-river/25 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 text-nile-gold mb-8">
                <span className="h-px w-8 bg-nile-gold" />
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase">Est. Kigali 2023</span>
              </div>
              <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] mb-8 text-balance">
                Grow like the{" "}
                <span className="italic font-normal text-nile-gold">river runs</span> —
                far, and with force.
              </h1>
              <p className="text-xl text-nile-clay/60 max-w-xl leading-relaxed mb-10">
                A next-generation Digital &amp; AI Marketing Agency bridging performance-driven
                strategy with regional market intelligence — from Kigali to the world.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to="/services"
                  className="px-8 py-4 bg-white text-nile-dark font-bold uppercase tracking-[0.2em] text-xs hover:bg-nile-gold transition-colors"
                >
                  Explore Capabilities
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-white/15 text-nile-clay font-bold uppercase tracking-[0.2em] text-xs hover:border-nile-gold hover:text-nile-gold transition-colors"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="glass-layer rounded-2xl p-4 aspect-[4/5] relative">
                <div className="w-full h-full rounded-xl relative overflow-hidden bg-linear-to-br from-nile-deep via-nile-river/60 to-nile-dark">
                  {/* Layered dimensional rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute size-[85%] rounded-full border border-nile-gold/10" />
                    <div className="absolute size-[65%] rounded-full border border-nile-gold/20" />
                    <div className="absolute size-[45%] rounded-full border border-nile-gold/30" />
                    <div className="absolute size-[25%] rounded-full bg-nile-gold/20 blur-2xl" />
                    <div className="absolute size-[12%] rounded-full bg-nile-gold shadow-[0_0_60px_20px_rgba(197,160,89,0.4)]" />
                  </div>
                  {/* Arc lines */}
                  <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full opacity-60">
                    <defs>
                      <linearGradient id="arc" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#C5A059" stopOpacity="0" />
                        <stop offset="50%" stopColor="#C5A059" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#C5A059" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M20,480 Q200,50 380,480" stroke="url(#arc)" strokeWidth="1" fill="none" />
                    <path d="M20,420 Q200,120 380,420" stroke="url(#arc)" strokeWidth="1" fill="none" />
                    <path d="M20,360 Q200,180 380,360" stroke="url(#arc)" strokeWidth="1" fill="none" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6 glass-layer p-6 rounded-lg">
                  <div className="text-nile-gold text-3xl font-serif mb-1">+312%</div>
                  <div className="text-[10px] uppercase tracking-widest text-nile-clay/50">
                    Average ROAS across portfolio
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 glass-layer px-4 py-3 rounded-lg">
                  <div className="text-[10px] uppercase tracking-widest text-nile-clay/50">Live</div>
                  <div className="text-nile-clay text-sm font-medium">4 campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="eyebrow mb-4">The Core Current</h2>
            <p className="font-serif text-4xl md:text-5xl max-w-2xl leading-[1.1]">
              We don't just market — we innovate, empower, and prepare your business for the AI frontier.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {pillars.map((p) => (
              <div key={p.n} className="bg-nile-dark p-12 hover:bg-nile-deep transition-colors">
                <span className="text-nile-gold font-serif text-xl mb-6 block">{p.n}.</span>
                <h3 className="text-xl font-medium mb-4 uppercase tracking-tight">{p.title}</h3>
                <p className="text-nile-clay/55 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics band */}
      <section className="py-24 border-t border-white/5 bg-nile-deep/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ["3.2×", "Organic growth"],
            ["-41%", "Cost per lead"],
            ["+58%", "Store visits"],
            ["06", "Disciplines"],
          ].map(([n, l]) => (
            <div key={l} className="border-l border-nile-gold/40 pl-6">
              <div className="font-serif text-5xl text-nile-clay">{n}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-nile-clay/50 mt-3">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries strip */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="eyebrow mb-4">Sectors</p>
            <h2 className="font-serif text-5xl leading-tight text-balance">
              Built for the industries moving Africa's economy.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Retail", "Healthcare", "E-commerce", "Corporate & B2B"].map((c) => (
              <span
                key={c}
                className="border border-white/15 text-nile-clay/80 px-5 py-2.5 text-xs uppercase tracking-[0.2em]"
              >
                {c}
              </span>
            ))}
            <Link
              to="/industries"
              className="px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-nile-gold hover:text-white"
            >
              Explore all →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-layer p-12 md:p-20 rounded-3xl relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
                Begin your <span className="italic text-nile-gold">expansion</span>.
              </h2>
              <div>
                <p className="text-nile-clay/60 mb-8">
                  Ready to leverage AI and performance marketing for measurable African growth?
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-nile-gold text-nile-dark px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
                >
                  Send an inquiry
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 size-64 bg-nile-river/30 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>
    </>
  );
}

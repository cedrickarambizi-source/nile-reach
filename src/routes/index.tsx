import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const serviceTabs = [
  {
    key: "seo",
    label: "SEO",
    heading: "Rank where the intent lives.",
    body: "Technical, local and AI-native SEO engineered to capture demand that already exists — and shape demand that doesn't yet.",
  },
  {
    key: "paid",
    label: "Paid Media",
    heading: "Media that pays back.",
    body: "Full-funnel campaigns across Google, Meta, LinkedIn and TikTok, planned around ROAS and measured against pipeline, not clicks.",
  },
  {
    key: "brand",
    label: "Brand Strategy",
    heading: "A brand that travels.",
    body: "Positioning, naming and identity systems that outlive campaigns and give your team a story worth repeating.",
  },
  {
    key: "content",
    label: "Content",
    heading: "Editorial that compounds.",
    body: "Owned media, thought leadership and social creative that stacks value across quarters — not a one-shot content sprint.",
  },
];

const services = [
  {
    tag: "SEO & Discovery",
    title: "Get found by the buyers already searching.",
    body: "Technical audits, local SEO and AI-native content strategy — built for how Google and LLMs actually rank in 2026.",
    visual: "orbit",
  },
  {
    tag: "AI Automation",
    title: "Agents that run the back office.",
    body: "Chatbots, WhatsApp flows and CRM agents that qualify, book and follow up 24/7 — with your brand voice, not a template.",
    visual: "grid",
  },
  {
    tag: "Web & Product",
    title: "Sites engineered to convert.",
    body: "Fast, accessible, editorial-grade websites and storefronts, instrumented from day one against a real growth model.",
    visual: "sphere",
  },
  {
    tag: "Paid Media",
    title: "Full-funnel performance.",
    body: "Google, Meta, LinkedIn and TikTok — planned around ROAS, creative-tested weekly, reported against revenue.",
    visual: "pulse",
  },
  {
    tag: "Brand & Content",
    title: "A story that outlives the campaign.",
    body: "Positioning, naming, identity and editorial systems — the brand asset your future team will still be building on.",
    visual: "prism",
  },
  {
    tag: "Analytics",
    title: "Decisions grounded in data.",
    body: "GA4, Looker Studio, attribution and quarterly growth planning built on what your data actually says.",
    visual: "wave",
  },
];

const faqs = [
  {
    q: "What makes Nile Reach different from a traditional agency?",
    a: "We combine performance marketing craft with AI-native operations. Every engagement is instrumented with automation, so senior operators — not account layers — do the actual work.",
  },
  {
    q: "Which industries do you serve?",
    a: "Retail, healthcare, e-commerce, hospitality, financial services and B2B corporates. We hold deep vertical expertise for the sectors moving Africa's economy.",
  },
  {
    q: "Do you work outside Rwanda?",
    a: "Yes. We serve clients across East Africa and internationally. Engagements are managed remotely with monthly on-site or executive syncs where relevant.",
  },
  {
    q: "How is pricing structured?",
    a: "Monthly retainers from RWF 300,000 up to RWF 1.5M, plus one-time projects like websites and branding. Every plan is scoped to a growth KPI, not a deliverable list.",
  },
  {
    q: "How quickly can we start?",
    a: "Kickoff usually happens within 7–10 business days of signing. Paid campaigns can be live in 2 weeks; SEO and content compound over 3–6 months.",
  },
];

function Home() {
  const [tab, setTab] = useState(serviceTabs[0].key);
  const current = serviceTabs.find((t) => t.key === tab)!;

  return (
    <>
      {/* HERO — dark liquid-silk gradient */}
      <section className="on-dark relative overflow-hidden hero-silk pt-40 pb-32 md:pt-52 md:pb-40 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-white/70 mb-8">
            Nile Reach — Kigali → Africa
          </p>
          <h1 className="text-white text-[52px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[92px] font-semibold tracking-[-0.03em] max-w-5xl text-balance">
            Growth is not a campaign.
            <br />
            <span className="italic font-light bg-gradient-to-r from-white via-violet-100 to-indigo-200 bg-clip-text text-transparent">
              It's a system.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed font-light">
            Nile Reach is a Digital & AI Marketing Agency building compounding growth
            engines for ambitious African brands — from SEO and paid media to brand
            strategy and AI-native automation.
          </p>
          <div className="mt-10 flex items-center gap-8 text-sm">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-white font-medium border-b border-white/40 hover:border-white pb-1 transition-colors"
            >
              Read more
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/work"
              className="text-white/60 hover:text-white transition-colors"
            >
              See recent work
            </Link>
          </div>
        </div>

        {/* Silk flow accent lines */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-40 opacity-30 pointer-events-none"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          <path d="M0,120 C240,60 480,180 720,110 C960,40 1200,150 1440,80 L1440,160 L0,160 Z" fill="url(#silkgrad)" />
          <defs>
            <linearGradient id="silkgrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#4338CA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* SERVICE TAB BAR */}
      <section className="border-b border-black/8 bg-white sticky top-14 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-stretch gap-8 overflow-x-auto no-scrollbar">
            {serviceTabs.map((t) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`relative py-5 text-[13px] font-medium whitespace-nowrap transition-colors ${
                    active ? "text-[#1D1D1F]" : "text-[#6E6E73] hover:text-[#1D1D1F]"
                  }`}
                >
                  {t.label}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-[2px] bg-[#1D1D1F] transition-transform origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* TAB CONTENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
            {current.heading}
          </h2>
          <div>
            <p className="text-lg text-[#3A3A3C] leading-relaxed max-w-lg">{current.body}</p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-[#4338CA] font-medium text-sm hover:gap-3 transition-all"
            >
              Explore {current.label.toLowerCase()}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID on light gray */}
      <section className="bg-[#F5F5F7] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4338CA] mb-5">Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
              One partner for the entire growth stack.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-white rounded-[20px] p-8 border border-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-20px_rgba(15,15,30,0.18)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* 3D-staged visual */}
                <div className="mb-6 h-40 rounded-2xl bg-gradient-to-br from-[#EEF2FF] via-white to-[#F5F3FF] grid place-items-center overflow-hidden relative">
                  <ServiceVisual variant={s.visual} />
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#4338CA] mb-2">{s.tag}</p>
                <h3 className="text-xl font-semibold text-[#1D1D1F] leading-snug mb-3">{s.title}</h3>
                <p className="text-[15px] text-[#6E6E73] leading-relaxed">{s.body}</p>
                <div className="mt-6 pt-5 border-t border-black/5 text-sm">
                  <Link to="/services" className="text-[#1D1D1F] font-medium inline-flex items-center gap-1.5 group-hover:text-[#4338CA] transition-colors">
                    Learn more <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS — light, editorial */}
      <section className="bg-white py-24 md:py-32 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4338CA] mb-5">By the numbers</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">
              Built to be measured.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { n: "120+", l: "Businesses helped" },
              { n: "312%", l: "Avg. ROAS across portfolio" },
              { n: "12",   l: "Countries served" },
              { n: "98%",  l: "Client satisfaction" },
            ].map((x) => (
              <div key={x.l}>
                <div className="text-5xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F]">{x.n}</div>
                <div className="mt-3 text-sm text-[#6E6E73]">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION — Apple style */}
      <section className="bg-[#F5F5F7] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#4338CA] mb-5">Frequently asked</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05]">
              Answers, without the pitch.
            </h2>
          </div>
          <div className="border-t border-black/10">
            {faqs.map((f, i) => (
              <AccordionRow key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AccordionRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left py-6 gap-6 group"
      >
        <span className="text-[18px] md:text-xl font-medium text-[#1D1D1F] leading-snug">{q}</span>
        <span
          className={`shrink-0 grid place-items-center size-8 rounded-full border border-black/15 text-[#1D1D1F] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M2.5 4.5 6 8l3.5-3.5" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-7 pr-14 text-[15px] md:text-base text-[#3A3A3C] leading-relaxed max-w-3xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* Lightweight SVG "3D-staged" visuals so the services grid feels like
   product-in-space cards without importing three.js at this level. */
function ServiceVisual({ variant }: { variant: string }) {
  switch (variant) {
    case "orbit":
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#4338CA" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="80" r="55" fill="url(#g1)" />
          <ellipse cx="100" cy="80" rx="80" ry="24" fill="none" stroke="#4338CA" strokeOpacity="0.35" />
          <ellipse cx="100" cy="80" rx="60" ry="16" fill="none" stroke="#7C3AED" strokeOpacity="0.5" />
          <circle cx="100" cy="80" r="14" fill="#1E1B4B" />
          <circle cx="176" cy="82" r="4" fill="#7C3AED" />
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={20 + c * 22}
                cy={20 + r * 22}
                r={2 + ((r + c) % 3)}
                fill={(r + c) % 4 === 0 ? "#7C3AED" : "#4338CA"}
                opacity={0.15 + ((r * c) % 6) / 10}
              />
            ))
          )}
        </svg>
      );
    case "sphere":
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <defs>
            <radialGradient id="s1" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="60%" stopColor="#4338CA" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="80" r="55" fill="url(#s1)" />
          <ellipse cx="100" cy="80" rx="55" ry="14" fill="none" stroke="#EEF2FF" strokeOpacity="0.4" />
          <ellipse cx="100" cy="80" rx="55" ry="34" fill="none" stroke="#EEF2FF" strokeOpacity="0.25" />
        </svg>
      );
    case "pulse":
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <path d="M10 90 L60 90 L75 50 L95 130 L115 60 L135 110 L155 80 L190 80"
            fill="none" stroke="#4338CA" strokeWidth="2.5" strokeLinejoin="round" />
          <circle cx="155" cy="80" r="6" fill="#7C3AED" />
        </svg>
      );
    case "prism":
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          <defs>
            <linearGradient id="p1" x1="0" x2="1"><stop offset="0" stopColor="#4338CA"/><stop offset="1" stopColor="#EC4899"/></linearGradient>
          </defs>
          <polygon points="100,25 165,130 35,130" fill="url(#p1)" opacity="0.9" />
          <polygon points="100,25 165,130 100,130" fill="#1E1B4B" opacity="0.3" />
        </svg>
      );
    case "wave":
    default:
      return (
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {[0,1,2,3,4].map((i) => (
            <path
              key={i}
              d={`M0 ${60 + i * 12} C 50 ${30 + i * 12}, 150 ${90 + i * 12}, 200 ${50 + i * 12}`}
              fill="none"
              stroke={i % 2 ? "#7C3AED" : "#4338CA"}
              strokeOpacity={0.15 + i * 0.12}
              strokeWidth="2"
            />
          ))}
        </svg>
      );
  }
}

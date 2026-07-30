import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Scene3D } from "@/components/site/Scene3D";
import { Counter } from "@/components/site/Counter";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/lib/projects";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nile Reach — Growth, engineered. Kigali → Africa." },
      {
        name: "description",
        content:
          "A Kigali-born digital & AI marketing agency building compounding growth systems for ambitious African brands — SEO, paid media, brand strategy, and AI-native automation.",
      },
      { property: "og:title", content: "Nile Reach — Growth, engineered." },
      {
        property: "og:description",
        content:
          "Attention is the only currency that compounds. We build the systems that capture it — for brands scaling across Africa and beyond.",
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
    heading: "Rank where the intent already lives.",
    body: "Most SEO chases keywords. We engineer for the moments a buyer is actually deciding — technical, local, and AI-native search, tuned to the way Google and LLMs will rank in 2026.",
  },
  {
    key: "paid",
    label: "Paid Media",
    heading: "Media that pays back, not media that performs.",
    body: "Full-funnel campaigns on Google, Meta, LinkedIn and TikTok — planned around ROAS, creative-tested weekly, and reported against pipeline instead of clicks.",
  },
  {
    key: "brand",
    label: "Brand Strategy",
    heading: "A brand is a promise the market chooses to remember.",
    body: "Positioning, naming and identity systems that outlive the next campaign — and give every team downstream a story worth repeating.",
  },
  {
    key: "content",
    label: "Content",
    heading: "Editorial that compounds quarter over quarter.",
    body: "Owned media, thought leadership and social creative built as a library — not a sprint. Value stacks; audiences show up on their own.",
  },
];

const services = [
  {
    tag: "SEO & Discovery",
    title: "Get found by the buyers already searching.",
    body: "Technical audits, local SEO, and AI-native content strategy — built for how Google and LLMs actually rank in 2026.",
    visual: "orbit",
  },
  {
    tag: "AI Automation",
    title: "Agents that run the back office.",
    body: "Chatbots, WhatsApp flows, and CRM agents that qualify, book, and follow up 24/7 — in your voice, not a template.",
    visual: "particles",
  },
  {
    tag: "Web & Product",
    title: "Sites engineered to convert.",
    body: "Fast, accessible, editorial-grade websites and storefronts — instrumented from day one against a real growth model.",
    visual: "prism",
  },
  {
    tag: "Paid Media",
    title: "Full-funnel performance, weekly.",
    body: "Google, Meta, LinkedIn and TikTok — planned around ROAS, creative-tested every week, reported against revenue.",
    visual: "wave",
  },
  {
    tag: "Brand & Content",
    title: "A story that outlives the campaign.",
    body: "Positioning, naming, identity, and editorial systems — the brand asset your future team will still be building on.",
    visual: "ribbon",
  },
  {
    tag: "Analytics",
    title: "Decisions grounded in what the data says.",
    body: "GA4, Looker Studio, attribution and quarterly growth planning — built on evidence, not vibes.",
    visual: "constellation",
  },
];


const faqs = [
  {
    q: "What actually makes Nile Reach different from a traditional agency?",
    a: "We combine performance craft with AI-native operations. Every engagement is instrumented with automation, so senior operators — not account layers — do the work you're paying for.",
  },
  {
    q: "Which industries do you serve?",
    a: "Retail, healthcare, e-commerce, hospitality, financial services, and B2B corporates. We hold deep vertical expertise for the sectors moving Africa's economy.",
  },
  {
    q: "Do you work outside Rwanda?",
    a: "Yes. We serve clients across East Africa and internationally. Engagements are managed remotely, with monthly on-site or executive syncs where it matters.",
  },
  {
    q: "How is pricing structured?",
    a: "Monthly retainers from RWF 300,000 up to RWF 1.5M, plus one-time projects like websites and branding. Every plan is scoped to a growth KPI — not a deliverable list.",
  },
  {
    q: "How quickly can we start?",
    a: "Kickoff usually happens within 7–10 business days of signing. Paid campaigns can be live in two weeks; SEO and content compound over three to six months.",
  },
];

function Home() {
  const [tab, setTab] = useState(serviceTabs[0].key);
  const current = serviceTabs.find((t) => t.key === tab)!;

  return (
    <>
      {/* HERO — liquid-silk gradient, typography-led */}
      <section className="on-dark relative overflow-hidden hero-silk min-h-[90vh] flex items-center pt-40 pb-32 text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-8" style={{ color: "#8A7CFF" }}>
            2026 Growth Outlook · Kigali → Africa
          </p>
          <h1 className="text-white text-[44px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.03em] max-w-5xl text-balance">
            Attention is the only currency
            <br />
            <span className="italic font-light bg-gradient-to-r from-white via-violet-100 to-indigo-200 bg-clip-text text-transparent">
              that compounds.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
            Nile Reach is a digital & AI marketing agency building the systems that
            capture it — for ambitious African brands scaling from Kigali outward.
          </p>
          <div className="mt-10 flex items-center gap-8 text-sm">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-white font-medium border-b border-white/40 hover:border-white pb-1 transition-colors"
            >
              Read the approach
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link to="/work" className="text-white/60 hover:text-white transition-colors">
              See recent work
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* SERVICE TAB BAR — sliding underline */}
      <section className="border-b border-black/8 bg-white sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex items-stretch gap-8 overflow-x-auto no-scrollbar">
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
                    className={`absolute inset-x-0 -bottom-px h-[2px] bg-[#1D1D1F] transition-transform duration-500 origin-left ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROOF BAR — animated stats */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { to: 6, suffix: "+", l: "Successful client projects" },
            { to: 100, suffix: "%", l: "Client satisfaction" },
            { to: 6, suffix: "", l: "Complete brand transformations" },
            { to: 3, suffix: "", l: "Disciplines — Web · SEO · Branding" },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
                <Counter to={x.to} suffix={x.suffix} />
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#6E6E73]">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUSTED — logo marquee */}
      <LogoMarquee />


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
              className="mt-6 inline-flex items-center gap-2 text-[#4B2E83] font-medium text-sm hover:gap-3 transition-all"
            >
              Explore {current.label.toLowerCase()}
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID — 3D staged */}
      <section className="bg-[#F5F5F7] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
              One partner for the entire growth stack.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-white rounded-[20px] p-10 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div className="mb-6 h-48 rounded-2xl overflow-hidden relative"
                  style={{ background: "radial-gradient(circle at 50% 55%, #EEEBFF 0%, #FFFFFF 55%, #F5F3FF 100%)" }}>
                  <Scene3D variant={s.visual} className="absolute inset-0" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#4B2E83] mb-2">{s.tag}</p>
                <h3 className="text-2xl font-semibold text-[#1D1D1F] leading-snug mb-3">{s.title}</h3>
                <p className="text-[15px] text-[#6E6E73] leading-relaxed">{s.body}</p>
                <div className="mt-6 pt-5 border-t border-black/5 text-sm">
                  <Link
                    to="/services"
                    className="text-[#1D1D1F] font-medium inline-flex items-center gap-1.5 group-hover:text-[#4B2E83] transition-colors"
                  >
                    Learn more <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR RECENT PROJECTS */}
      <section className="bg-[#FAFAFC] py-24 md:py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
            <div className="max-w-2xl">
              <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Our recent projects</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
                Real websites. Real brands. Shipped by Nile Reach.
              </h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-medium text-[#1D1D1F] hover:text-[#4B2E83] transition-colors shrink-0">
              View full portfolio →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="on-dark relative overflow-hidden hero-silk text-white py-24 md:py-32">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-6">Ready to grow</p>
          <h2 className="text-white text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            Ready to transform your business online?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            We help businesses build powerful websites, improve Google visibility, create professional branding, and generate more leads through modern digital solutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#0A0A1F] px-7 py-3.5 text-sm font-medium hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.35)] transition-all"
            >
              Start your project <span aria-hidden>→</span>
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-7 py-3.5 text-sm font-medium hover:border-white/70 transition-colors"
            >
              View portfolio
            </Link>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-[#F5F5F7] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Frequently asked</p>
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
        <span className="text-[20px] font-semibold text-[#1D1D1F] leading-snug">{q}</span>
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
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-7 pr-14 text-base text-[#6E6E73] leading-relaxed max-w-3xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

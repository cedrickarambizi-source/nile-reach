import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { LogoStrip } from "@/components/site/LogoMarquee";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { RiverDelta } from "@/components/site/RiverDelta";
import teamPhoto from "@/assets/team-developers.jpg";
import heroSilk from "@/assets/hero-silk.jpg.asset.json";
import heroSilkRed from "@/assets/hero-silk-red.jpg.asset.json";
import heroAiFlow from "@/assets/hero-ai-flow.jpg.asset.json";
import heroArchitecture from "@/assets/hero-architecture.jpg.asset.json";
import heroDelta from "@/assets/hero-delta.jpg.asset.json";
import sectorConstruction from "@/assets/sector-construction.jpg.asset.json";
import sectorHealthcare from "@/assets/sector-healthcare.jpg.asset.json";
import sectorRetail from "@/assets/sector-retail.jpg.asset.json";
import sectorRealEstate from "@/assets/sector-realestate.jpg.asset.json";
import insightStrategy from "@/assets/insight-strategy.jpg.asset.json";

import { canonical } from "@/lib/seo";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { faviconUrl } from "@/lib/projects";

import {
  problems,
  serviceCategories,
  industries,
  process,
  whyNileReach,
  testimonials,
  insights,
} from "@/lib/consulting";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nile Reach — Digital Systems & AI Automation, Kigali" },
      {
        name: "description",
        content:
          "Nile Reach builds the websites, automation and growth infrastructure that take Rwandan and East African companies from known clients to markets they haven't reached yet.",
      },
      { property: "og:title", content: "Nile Reach — Digital Systems & AI Automation, Kigali" },
      {
        property: "og:description",
        content:
          "Digital transformation, AI automation, growth marketing, web engineering and analytics for companies across Rwanda and East Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/")],
  }),
  component: Home,
});

/** Mono category tags for the challenges — these are categories, not a sequence. */
const PROBLEM_TAGS = ["Visibility", "Pipeline", "Operations", "Decisions"];

/** Branded sector photography, cycled across the industry cards. */
const SECTOR_IMAGES = [
  sectorConstruction.url,
  sectorRealEstate.url,
  sectorHealthcare.url,
  sectorRetail.url,
  insightStrategy.url,
  heroSilk.url,
];


const SECTOR_CHIPS = [
  "Construction & Engineering",
  "Real Estate",
  "Healthcare",
  "Hospitality",
  "Retail",
  "SMEs & Growing Enterprises",
];

const faqs = [
  {
    q: "How is Nile Reach different from a marketing agency?",
    a: "An agency sells channels. We start with a digital audit of how customers find you, how inquiries are handled, and where operations lose hours — then build the websites, automation, campaigns and dashboards that audit calls for, and stay on to improve them quarterly.",
  },
  {
    q: "Which sectors do you actually know?",
    a: "MEP and civil engineering, construction, real estate, healthcare, hospitality, retail, and growing SMEs. Our deepest track record is engineering and contracting — companies like MEP Erictric and Pro Mep Technology, where credibility in tenders is the commercial problem.",
  },
  {
    q: "What does an engagement cost?",
    a: "Monthly partnerships run from RWF 300,000 to RWF 1,500,000 depending on scope. One-time builds start at RWF 300,000 for a business website and RWF 700,000 for e-commerce. Every price is on the pricing page — no quote-on-request games.",
  },
  {
    q: "How long before we see anything?",
    a: "The audit and roadmap take two weeks. A corporate website with SEO and a verified Google Business Profile is typically live in four to six weeks. Automation and analytics work follows in phases after that.",
  },
  {
    q: "Do you work outside Rwanda?",
    a: "Yes — across East Africa and remotely beyond it, with on-site workshops in Kigali when the work needs a room and a whiteboard.",
  },
  {
    q: "How do we start?",
    a: "Book a strategy consultation. It is 45 minutes, there is no deck, and you leave with three prioritised moves whether or not you engage us.",
  },
];

/** Bain-style hero slides — the bottom tab strip swaps the headline in place. */
const HERO_SLIDES = [
  {
    tab: "Digital Transformation",
    eyebrow: "Digital Transformation",
    title: "Digital systems that carry your business further.",
    to: "/services",
    image: heroSilk.url,
  },
  {
    tab: "Win with AI",
    eyebrow: "AI & Automation",
    title: "Win with AI, before your competitors learn how.",
    to: "/services",
    image: insightStrategy.url,
  },
  {
    tab: "Engineering & Construction",
    eyebrow: "Sector Focus 2026",
    title: "The tender you lose online, you never see.",
    to: "/industries",
    image: sectorConstruction.url,
  },
  {
    tab: "Retail & Hospitality",
    eyebrow: "Growth Marketing",
    title: "Findable, bookable, measurable — every single day.",
    to: "/industries",
    image: sectorRetail.url,
  },
] as const;

function Home() {
  const caseStudies = getAllCaseStudies().slice(0, 2);
  const [slide, setSlide] = useState(0);
  const active = HERO_SLIDES[slide];

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section
        className="on-dark relative overflow-hidden hero-photo text-white pt-[140px] pb-0 md:pt-[176px] min-h-[88vh] flex flex-col justify-end transition-[background-image] duration-700"
        style={{ backgroundImage: `url(${active.image})` }}
      >
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 pb-16 md:pb-24">
          <p key={`e-${slide}`} className="text-[11.5px] uppercase tracking-[0.16em] font-semibold text-white/75 mb-6">
            {active.eyebrow}
          </p>
          <h1
            key={`t-${slide}`}
            className="text-white text-[46px] sm:text-6xl md:text-7xl lg:text-[84px] font-bold leading-[1.02] tracking-[-0.035em] max-w-4xl text-balance"
          >
            {active.title}
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              to={active.to}
              className="group inline-flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white"
            >
              Read More
              <span
                aria-hidden
                className="block h-px w-10 bg-white transition-all duration-300 group-hover:w-16"
              />
            </Link>
            <a
              href="#process"
              className="group inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-white/80 hover:text-white transition-colors"
            >
              See how we work
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Bottom tab strip — swaps the hero in place, Bain-style */}
        <div className="relative z-10 border-t border-white/20 bg-black/25 backdrop-blur-[2px]">
          <div className="max-w-[1400px] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                onMouseEnter={() => setSlide(i)}
                onFocus={() => setSlide(i)}
                onClick={() => setSlide(i)}
                aria-current={i === slide}
                className={`relative text-left py-6 pr-6 text-[14px] font-semibold transition-colors ${
                  i === slide ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute -top-px left-0 h-[3px] w-16 bg-white transition-opacity duration-300 ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
                {s.tab}
              </button>
            ))}
          </div>
        </div>
      </section>


      {/* --------------------------------------------- TEAM / CAPABILITY BAND */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-center">
          <div>
            <p className="mono-label text-nile mb-5">Built by engineers</p>
            <h2 className="text-3xl md:text-5xl font-bold text-ink leading-[1.06] tracking-[-0.025em] text-balance">
              A team of developers, strategists and analysts — in Kigali.
            </h2>
            <p className="mt-6 font-serif text-lg text-stone leading-relaxed max-w-xl">
              Every website, automation and dashboard we ship is built in-house by the same team that
              runs the audit — so the strategy and the code never drift apart.
            </p>
            <div className="mt-8 overflow-x-auto">
              <RiverDelta className="min-w-[560px] w-full max-w-2xl h-[200px] text-nile" />
            </div>
          </div>
          <img
            src={teamPhoto}
            alt="Nile Reach developers reviewing code together in the Kigali studio"
            width={1600}
            height={1104}
            loading="lazy"
            className="w-full h-[420px] md:h-[560px] object-cover"
          />
        </div>
      </section>


      {/* --------------------------------------------------- SECTOR CHIPS */}
      <section className="bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <Reveal>
            <ul className="flex flex-wrap gap-2.5">
              {SECTOR_CHIPS.map((c) => (
                <li key={c} className="mono-tag">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[15px] text-stone">
              Founded in Kigali, 2023 · building for companies across Rwanda &amp; East Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <LogoStrip />

      {/* ------------------------------------------------------ CHALLENGES */}
      <section className="bg-paper py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mb-20">
            <p className="mono-label text-nile mb-6">The mandate</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink text-balance">
              Business challenges we help solve.
            </h2>
            <p className="mt-7 text-lg text-stone leading-relaxed max-w-2xl">
              Most growth problems are not marketing problems. They are visibility, pipeline, process
              and data problems — and each one has an engineering answer.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <Reveal key={p.problem} delay={i * 70}>
                <article
                  className="group h-full rounded-none border border-line bg-paper-dim p-9 md:p-11 transition-all duration-500 hover:-translate-y-1 hover:border-nile/35"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  <p className="mono-label text-nile mb-7">{PROBLEM_TAGS[i]}</p>
                  <h3 className="text-2xl md:text-[30px] font-semibold text-ink leading-[1.12]">
                    {p.problem}
                  </h3>
                  <p className="mt-5 text-[15.5px] text-[#3F4B47] leading-relaxed">{p.pain}</p>
                  <div className="mt-9 pt-7 border-t border-line">
                    <p className="mono-label text-stone mb-4">How we solve it</p>
                    <ul className="flex flex-wrap gap-2">
                      {p.solutions.map((s) => (
                        <li
                          key={s}
                          className="text-[13px] rounded-full border border-line bg-paper px-3 py-1.5 text-ink"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- PRACTICES */}
      <section className="bg-paper-dim py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex items-end justify-between gap-8 flex-wrap mb-20">
            <div className="max-w-3xl">
              <p className="mono-label text-nile mb-6">Practices</p>
              <h2 className="text-4xl md:text-6xl font-semibold text-ink text-balance">
                Five practices. One transformation partner.
              </h2>
            </div>
            <Link to="/services" className="link-underline text-sm font-medium text-ink shrink-0">
              Explore all services →
            </Link>
          </Reveal>

          <div className="border-t border-line">
            {serviceCategories.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <Link
                  to="/services"
                  className="group grid md:grid-cols-[100px_1fr_1.25fr] items-start gap-8 py-12 border-b border-line transition-colors duration-300 hover:bg-paper"
                >
                  <span className="mono-label text-stone pt-2">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl md:text-[32px] font-semibold text-ink group-hover:text-nile transition-colors leading-[1.12]">
                    {s.title}
                  </h3>
                  <div>
                    <p className="text-[15.5px] text-[#3F4B47] leading-relaxed max-w-xl">{s.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <li key={it} className="text-[13px] text-stone">
                          {it}
                          <span aria-hidden className="text-line ml-2">
                            /
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------- FEATURED PULL QUOTE */}
      {/* TODO: replace the placeholder attribution below with the real named
          contact and title at MEP Erictric Technology Ltd before launch. */}
      <section className="on-dark relative overflow-hidden bg-[#7A1122] py-32 md:py-44 text-white">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="mono-label text-[#FFFFFF] mb-10">Client perspective</p>
          <blockquote className="pull-quote text-white text-[30px] md:text-[52px] leading-[1.18] text-balance">
            “{testimonials[0].quote}”
          </blockquote>
          <figcaption className="mt-10 mono-label text-white/60">
            {testimonials[0].author} · {testimonials[0].role}
          </figcaption>
        </div>
      </section>

      {/* --------------------------------------------------------- SECTORS */}
      <section className="bg-paper py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mb-16">
            <p className="mono-label text-nile mb-6">Sector expertise</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink text-balance">
              Industries we transform.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {industries.map((ind, i) => (
              <Link
                key={ind.name}
                to="/industries"
                className="group card-photo min-h-[300px] flex flex-col justify-end p-8 md:p-10 text-white"
              >
                <img
                  src={SECTOR_IMAGES[i % SECTOR_IMAGES.length]}
                  alt=""
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                />
                <div className="relative z-10">
                  <h3 className="text-[26px] md:text-[30px] font-semibold leading-[1.12] text-white">
                    {ind.name}
                  </h3>
                  <p className="mt-4 text-[15px] text-white/85 leading-relaxed line-clamp-3">{ind.body}</p>
                  <span className="mt-7 inline-flex items-center gap-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-white">
                    Explore
                    <span
                      aria-hidden
                      className="block h-px w-8 bg-white transition-all duration-300 group-hover:w-14"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* --------------------------------------------------------- PROCESS */}
      <section
        id="process"
        className="on-dark relative overflow-hidden hero-photo text-white py-32 md:py-48"
        style={{ backgroundImage: `url(${insightStrategy.url})` }}
      >

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="mono-label text-[#FFFFFF] mb-6">How we work</p>
            <h2 className="text-white text-4xl md:text-6xl font-semibold text-balance">
              Four phases, in this order, every time.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/12 rounded-none overflow-hidden">
            {process.map((step, i) => (
              <div key={step.title} className="bg-[#7A1122]/70 backdrop-blur-sm p-9 md:p-10">
                <p className="font-mono text-[13px] tracking-[0.2em] text-[#FFFFFF]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3.5 text-[15px] text-white/70 leading-relaxed">{step.body}</p>
                <ul className="mt-6 space-y-2">
                  {step.outputs.map((o) => (
                    <li key={o} className="text-[13px] text-white/55 flex gap-2.5">
                      <span className="text-[#FFFFFF]">—</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- SELECTED WORK */}
      <section className="bg-paper-dim py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mb-16">
            <p className="mono-label text-nile mb-6">Selected work</p>
            <h2 className="text-4xl md:text-6xl font-semibold text-ink text-balance">
              Two engineering firms. Both invisible online. Both findable now.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => {
              const favicon = faviconUrl(cs.domain);
              return (
                <Reveal key={cs.slug} delay={i * 80}>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: cs.slug }}
                    className="group flex h-full flex-col rounded-none border border-line bg-paper transition-all duration-500 hover:-translate-y-1 hover:border-nile/35"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    <div className="card-photo h-44">
                      <img
                        src={SECTOR_IMAGES[i % SECTOR_IMAGES.length]}
                        alt=""
                        loading="lazy"
                        width={1280}
                        height={960}
                        className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                      />
                      <div className="relative z-10 flex h-full items-end p-6">
                        <div className="flex items-center gap-2.5">
                          {favicon && <img src={favicon} alt="" className="size-5 rounded-sm" />}
                          <span className="mono-label text-white">{cs.industry}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-9 md:p-10">
                      <h3 className="text-2xl font-semibold text-ink leading-[1.15]">{cs.name}</h3>
                      <p className="mt-4 text-[15px] text-[#3F4B47] leading-relaxed line-clamp-4 flex-1">
                        {cs.startingPoint}
                      </p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-nile transition-colors">
                        Read the case study
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>

                </Reveal>
              );
            })}

            <Reveal delay={160}>
              <div className="flex h-full flex-col justify-between rounded-none border border-dashed border-nile/35 bg-transparent p-9 md:p-10">
                <div>
                  <p className="mono-label text-nile mb-6">Next engagement</p>
                  <p className="text-2xl font-semibold text-ink leading-[1.15]">
                    The third case study hasn't been written yet. It could be your company.
                  </p>
                  <p className="mt-4 text-[15px] text-stone leading-relaxed">
                    We take on a small number of transformation programmes each quarter so each one gets
                    partner attention.
                  </p>
                </div>
                <div className="mt-9">
                  <Cta to="/contact" variant="solid-dark">
                    Start the conversation <span aria-hidden>→</span>
                  </Cta>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- WHY NILE REACH */}
      <section className="bg-paper py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-20">
          <Reveal>
            <p className="mono-label text-nile mb-6">Why Nile Reach</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-ink text-balance">
              A growth partner that thinks like an operator.
            </h2>
            <p className="mt-7 text-lg text-stone leading-relaxed max-w-lg">
              Founded in Kigali in 2023 to give African companies the same digital and AI capability
              global enterprises take for granted — at a price a Rwandan SME can actually sign off.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {whyNileReach.map((w, i) => (
              <Reveal key={w.title} delay={i * 50}>
                <h3 className="text-xl font-semibold text-ink">{w.title}</h3>
                <p className="mt-3 text-[15.5px] text-stone leading-relaxed">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- REMAINING TESTIMONIALS */}
      {/* TODO: replace "Management" with the real named contact and job title
          for each client once approvals come back. */}
      <section className="bg-paper-dim py-32 md:py-44">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mono-label text-nile mb-14">In their words</p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.slice(1).map((t, i) => (
              <Reveal key={t.role} delay={i * 70}>
                <figure className="h-full rounded-none border border-line bg-paper p-10 flex flex-col">
                  <blockquote className="pull-quote text-[21px] md:text-[24px] text-ink leading-[1.4] flex-1">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-line">
                    <p className="text-[15px] font-semibold text-ink">{t.author}</p>
                    <p className="mono-label text-stone mt-1.5">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- INSIGHTS */}
      <section className="bg-paper py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="flex items-end justify-between gap-8 flex-wrap mb-16">
            <div className="max-w-2xl">
              <p className="mono-label text-nile mb-6">Insights</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-ink text-balance">
                Notes from the work, written for the people who sign off on it.
              </h2>
            </div>
            <Link to="/insights" className="link-underline text-sm font-medium text-ink shrink-0">
              All insights →
            </Link>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col rounded-none border border-line bg-paper-dim transition-all duration-500 hover:-translate-y-1 hover:bg-paper hover:border-nile/35"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  <div className="card-photo h-36">
                    <img
                      src={SECTOR_IMAGES[(i + 4) % SECTOR_IMAGES.length]}
                      alt=""
                      loading="lazy"
                      width={1280}
                      height={960}
                      className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                    />
                    <p className="relative z-10 mono-label text-white p-6">{a.category}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-9">
                    <h3 className="text-xl font-semibold text-ink leading-snug">{a.title}</h3>
                    <p className="mt-3.5 text-[14.5px] text-stone leading-relaxed flex-1">{a.excerpt}</p>
                    <p className="mt-7 mono-label text-stone">{a.readTime}</p>
                  </div>
                </Link>

              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- FAQ */}
      <section className="bg-paper-dim py-32 md:py-48 border-t border-line">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="mb-16">
            <p className="mono-label text-nile mb-6">Frequently asked</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-ink">
              Straight answers, including the prices.
            </h2>
          </Reveal>
          <div className="border-t border-line">
            {faqs.map((f, i) => (
              <details key={f.q} className="nr-details border-b border-line group" open={i === 0}>
                <summary className="flex items-center justify-between gap-6 py-7 text-left">
                  <span className="text-[19px] md:text-[21px] font-semibold text-ink leading-snug font-display">
                    {f.q}
                  </span>
                  <span
                    aria-hidden
                    className="nr-chev shrink-0 grid place-items-center size-8 rounded-full border border-line text-ink transition-transform duration-300"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M2.5 4.5 6 8l3.5-3.5" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-8 pr-12 text-[16px] text-[#3F4B47] leading-[1.7] max-w-3xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

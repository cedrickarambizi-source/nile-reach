import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Scene3D } from "@/components/site/Scene3D";
import { Counter } from "@/components/site/Counter";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Cta } from "@/components/site/Cta";
import { canonical } from "@/lib/seo";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { faviconUrl } from "@/lib/projects";
import { problems, serviceCategories, industries, process, whyNileReach, testimonials, insights } from "@/lib/consulting";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nile Reach — Digital Growth & AI Transformation Partner" },
      {
        name: "description",
        content:
          "Nile Reach partners with African businesses to build digital systems, automate operations with AI, and accelerate revenue growth — consulting, technology, and data.",
      },
      { property: "og:title", content: "Nile Reach — Digital Growth & AI Transformation Partner" },
      {
        property: "og:description",
        content:
          "Digital transformation consulting, AI automation, growth marketing, web & software, and analytics for ambitious companies across Africa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/")],
  }),
  component: Home,
});

const faqs = [
  {
    q: "How is Nile Reach different from a marketing agency?",
    a: "We start with the business, not the channel. Every engagement opens with a digital audit and a growth roadmap — then we implement the websites, automation, campaigns and dashboards that roadmap calls for, and stay on to optimise them.",
  },
  {
    q: "Which industries do you specialise in?",
    a: "Construction and engineering, real estate, healthcare, hospitality, retail, and growing SMEs and enterprises across Africa. We build sector-specific playbooks rather than reusing one template.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Discovery and audit, then a strategy and roadmap, then phased implementation, then a continuous optimisation cycle with quarterly business reviews. Most partnerships run twelve months or longer.",
  },
  {
    q: "Do you work with companies outside Rwanda?",
    a: "Yes. We work across East Africa and internationally, delivered remotely with executive syncs and on-site workshops where the work demands it.",
  },
  {
    q: "How do we start?",
    a: "Book a strategy consultation, or request the free digital growth audit. Both begin with a structured conversation about where your revenue and operations lose momentum today.",
  },
];

function Home() {
  const caseStudies = getAllCaseStudies().slice(0, 2);

  return (
    <>
      {/* 1 — HERO */}
      <section className="on-dark relative overflow-hidden hero-silk min-h-[92vh] flex items-center pt-40 pb-28 text-white">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <Scene3D variant="constellation" className="absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <div>
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-8" style={{ color: "#8A7CFF" }}>
              Digital Growth &amp; AI Transformation Partner
            </p>
            <h1 className="text-white text-[40px] leading-[1.06] sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-[-0.03em] text-balance">
              Transform your business with digital growth,{" "}
              <span className="italic font-light bg-gradient-to-r from-white via-violet-100 to-indigo-200 bg-clip-text text-transparent">
                AI automation &amp; technology
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
              Nile Reach partners with ambitious companies to build digital systems, attract more
              customers, automate operations, and accelerate business growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Cta to="/contact" variant="solid-light">
                Book a Strategy Consultation <span aria-hidden>→</span>
              </Cta>
              <Cta to="/contact" hash="audit" variant="outline-light">
                Request Free Digital Growth Audit
              </Cta>
            </div>
          </div>

          <DashboardVisual />
        </div>
      </section>

      {/* PROOF BAR */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { to: 6, suffix: "+", l: "Transformation engagements" },
            { to: 5, suffix: "", l: "Industries served" },
            { to: 100, suffix: "%", l: "Client retention to date" },
            { to: 2023, suffix: "", l: "Founded in Kigali", plain: true },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F]">
                {x.plain ? "2023" : <Counter to={x.to} suffix={x.suffix} />}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#6E6E73]">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      <LogoMarquee />

      {/* 2 — BUSINESS PROBLEMS WE SOLVE */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">The mandate</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
              Business challenges we help solve.
            </h2>
            <p className="mt-6 text-lg text-[#6E6E73] leading-relaxed max-w-2xl">
              Most growth problems are not marketing problems. They are visibility, pipeline, process
              and data problems — and each one has an engineering answer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <article
                key={p.problem}
                className="group rounded-[24px] border border-black/8 bg-[#F5F5F7] p-9 md:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#4B2E83]/25 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#4B2E83]">Challenge 0{i + 1}</span>
                  <span className="grid place-items-center size-9 rounded-full bg-white border border-black/8 text-[#4B2E83]">
                    {p.icon}
                  </span>
                </div>
                <h3 className="text-2xl md:text-[28px] font-semibold text-[#1D1D1F] tracking-tight leading-snug">
                  {p.problem}
                </h3>
                <p className="mt-4 text-[15px] text-[#3A3A3C] leading-relaxed">{p.pain}</p>
                <div className="mt-7 pt-6 border-t border-black/8">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#6E6E73] mb-3">How we solve it</p>
                  <ul className="flex flex-wrap gap-2">
                    {p.solutions.map((s) => (
                      <li
                        key={s}
                        className="text-[12px] rounded-full border border-black/8 bg-white text-[#1D1D1F] px-3 py-1.5"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — SERVICES */}
      <section className="bg-[#F5F5F7] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
            <div className="max-w-3xl">
              <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Our services</p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
                Five practices. One transformation partner.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-medium text-[#1D1D1F] hover:text-[#4B2E83] transition-colors shrink-0"
            >
              Explore all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((s) => (
              <article
                key={s.title}
                className="group bg-white rounded-[24px] p-9 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <div
                  className="mb-7 h-40 rounded-2xl overflow-hidden relative"
                  style={{ background: "radial-gradient(circle at 50% 55%, #EEEBFF 0%, #FFFFFF 55%, #F5F3FF 100%)" }}
                >
                  <Scene3D variant={s.visual} className="absolute inset-0" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#4B2E83] mb-2">{s.letter}</p>
                <h3 className="text-[22px] font-semibold text-[#1D1D1F] leading-snug mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[15px] text-[#6E6E73] leading-relaxed">{s.body}</p>
                <ul className="mt-6 space-y-2.5 border-t border-black/6 pt-5">
                  {s.items.map((it) => (
                    <li key={it} className="text-[14px] text-[#3A3A3C] flex gap-3">
                      <span className="text-[#4B2E83]">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — INDUSTRIES */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Sector expertise</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
              Industries we transform.
            </h2>
          </div>
          <div className="border-t border-black/10">
            {industries.map((ind, i) => (
              <Link
                key={ind.name}
                to="/industries"
                className="group grid md:grid-cols-[80px_1fr_1.3fr_40px] items-start gap-6 py-8 border-b border-black/10 transition-colors hover:bg-[#FAFAFC]"
              >
                <span className="text-[12px] tracking-[0.22em] text-[#6E6E73] pt-1.5">0{i + 1}</span>
                <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-[#1D1D1F] group-hover:text-[#4B2E83] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-[15px] text-[#6E6E73] leading-relaxed max-w-xl">{ind.body}</p>
                <span
                  aria-hidden
                  className="hidden md:block text-[#1D1D1F] pt-1.5 transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — PROCESS */}
      <section className="on-dark relative overflow-hidden hero-silk text-white py-24 md:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#8A7CFF]">How we work</p>
            <h2 className="text-white text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
              A digital transformation process built for boards, not briefs.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/12 rounded-[24px] overflow-hidden">
            {process.map((step, i) => (
              <div key={step.title} className="bg-[#0A0A1F]/60 backdrop-blur-sm p-8 md:p-9">
                <p className="text-[52px] font-semibold leading-none text-white/15 tracking-tight">0{i + 1}</p>
                <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[15px] text-white/70 leading-relaxed">{step.body}</p>
                <ul className="mt-5 space-y-2">
                  {step.outputs.map((o) => (
                    <li key={o} className="text-[13px] text-white/55 flex gap-2.5">
                      <span className="text-[#8A7CFF]">•</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — CASE STUDIES */}
      <section className="bg-[#FAFAFC] py-24 md:py-32 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-14">
            <div className="max-w-2xl">
              <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Selected work</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
                Challenge. Solution. Result.
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="text-sm font-medium text-[#1D1D1F] hover:text-[#4B2E83] transition-colors shrink-0"
            >
              All case studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => {
              const favicon = faviconUrl(cs.domain);
              return (
                <Link
                  key={cs.slug}
                  to="/case-studies/$slug"
                  params={{ slug: cs.slug }}
                  className="group block rounded-[24px] border border-black/8 bg-white p-9 md:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    {favicon && <img src={favicon} alt="" className="size-5 rounded-sm" />}
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#4B2E83]">{cs.industry}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#1D1D1F] tracking-tight">{cs.name}</h3>
                  <p className="mt-4 text-[15px] text-[#3A3A3C] leading-relaxed line-clamp-3">{cs.startingPoint}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {cs.services.slice(0, 4).map((s) => (
                      <li key={s} className="text-[12px] rounded-full border border-black/8 bg-[#F5F5F7] px-3 py-1.5 text-[#1D1D1F]">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#1D1D1F] group-hover:text-[#4B2E83] transition-colors">
                    Read the case study <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              );
            })}

            {/* Space for future projects */}
            <div className="rounded-[24px] border border-dashed border-black/15 bg-transparent p-9 md:p-10 flex flex-col justify-center md:col-span-2">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#6E6E73] mb-3">Next engagement</p>
              <p className="text-xl md:text-2xl font-semibold text-[#1D1D1F] tracking-tight max-w-2xl">
                This space is reserved for the next transformation programme — it could be yours.
              </p>
              <div className="mt-6">
                <Cta to="/contact" variant="solid-dark">
                  Start the conversation <span aria-hidden>→</span>
                </Cta>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Client perspective</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] mb-14 max-w-3xl text-balance">
            What partners say about working with us.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-[24px] border border-black/8 bg-[#F5F5F7] p-9 flex flex-col">
                <blockquote className="text-[17px] text-[#1D1D1F] leading-relaxed flex-1">“{t.quote}”</blockquote>
                <figcaption className="mt-7 pt-6 border-t border-black/8">
                  <p className="text-[15px] font-semibold text-[#1D1D1F]">{t.author}</p>
                  <p className="text-[13px] text-[#6E6E73] mt-0.5">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — WHY NILE REACH */}
      <section className="bg-[#F5F5F7] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Why Nile Reach</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
              A growth partner that thinks like an operator.
            </h2>
            <p className="mt-6 text-lg text-[#6E6E73] leading-relaxed max-w-lg">
              Founded in Kigali in 2023, Nile Reach exists to give African companies the same calibre
              of digital and AI capability that global enterprises take for granted.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {whyNileReach.map((w, i) => (
              <div key={w.title}>
                <p className="text-[12px] tracking-[0.22em] text-[#4B2E83] mb-3">0{i + 1}</p>
                <h3 className="text-xl font-semibold text-[#1D1D1F] tracking-tight">{w.title}</h3>
                <p className="mt-2.5 text-[15px] text-[#6E6E73] leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-14">
            <div className="max-w-2xl">
              <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">Insights</p>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
                Thinking for leaders building digital businesses in Africa.
              </h2>
            </div>
            <Link to="/insights" className="text-sm font-medium text-[#1D1D1F] hover:text-[#4B2E83] transition-colors shrink-0">
              All insights →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {insights.slice(0, 3).map((a) => (
              <Link
                key={a.title}
                to="/insights"
                className="group rounded-[24px] border border-black/8 bg-[#F5F5F7] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#4B2E83] mb-4">{a.category}</p>
                <h3 className="text-xl font-semibold text-[#1D1D1F] leading-snug tracking-tight">{a.title}</h3>
                <p className="mt-3 text-[14px] text-[#6E6E73] leading-relaxed">{a.excerpt}</p>
                <p className="mt-6 text-[13px] text-[#6E6E73]">{a.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — CONSULTATION CTA */}
      <section className="on-dark relative overflow-hidden hero-silk text-white py-24 md:py-32">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-6">Strategy consultation</p>
          <h2 className="text-white text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            Ready to transform your business?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Schedule a consultation with Nile Reach and discover opportunities to improve your digital
            presence, automate operations, and grow revenue.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Cta to="/contact" variant="solid-light">
              Book Consultation <span aria-hidden>→</span>
            </Cta>
            <Cta to="/contact" hash="audit" variant="outline-light">
              Request free growth audit
            </Cta>
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

/** Abstract analytics/AI dashboard visual for the hero. */
function DashboardVisual() {
  const bars = [38, 52, 44, 68, 60, 82, 74, 96];
  return (
    <div className="hidden lg:block">
      <div className="rounded-[24px] border border-white/15 bg-white/8 backdrop-blur-xl p-7 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.7)]">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">Growth index</p>
          <span className="text-[11px] rounded-full border border-white/20 px-2.5 py-1 text-white/70">Live</span>
        </div>
        <p className="mt-4 text-4xl font-semibold tracking-tight text-white">+218%</p>
        <p className="text-[13px] text-white/55">Qualified inbound, trailing 12 months</p>

        <div className="mt-7 flex items-end gap-2 h-32">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md"
              style={{
                height: `${h}%`,
                background: "linear-gradient(180deg, #8A7CFF 0%, rgba(138,124,255,0.25) 100%)",
              }}
            />
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {[
            { k: "AI workflows live", v: "24/7" },
            { k: "Manual hours saved", v: "40+/wk" },
          ].map((m) => (
            <div key={m.k} className="rounded-2xl border border-white/12 bg-white/5 p-4">
              <p className="text-lg font-semibold text-white tracking-tight">{m.v}</p>
              <p className="text-[12px] text-white/55 mt-0.5">{m.k}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
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

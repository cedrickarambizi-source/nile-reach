import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { Cta } from "../components/site/Cta";
import { Scene3D } from "../components/site/Scene3D";
import { canonical } from "../lib/seo";
import { serviceCategories, process } from "../lib/consulting";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Digital Transformation & AI Consulting | Nile Reach" },
      {
        name: "description",
        content:
          "Digital transformation consulting, AI & business automation, growth marketing, web & software solutions, and data analytics for companies across Africa.",
      },
      { property: "og:title", content: "Services — Digital Transformation & AI Consulting | Nile Reach" },
      {
        property: "og:description",
        content: "Five consulting practices covering strategy, AI automation, growth, technology and data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/services")],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={<>Five practices.<br />One transformation partner.</>}
        intro="We combine consulting rigour with hands-on delivery — strategy, AI automation, growth marketing, technology and data, under one accountable team."
        scene="prism"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {serviceCategories.map((s, i) => (
            <article
              key={s.title}
              className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center rounded-[28px] border border-black/8 bg-[#F2F2F2] p-8 md:p-12"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-4">{s.letter}</p>
                <h2 className="text-3xl md:text-[42px] font-semibold tracking-tight text-[#1A1A1A] leading-[1.08] text-balance">
                  {s.title}
                </h2>
                <p className="mt-5 text-[17px] text-[#3F4B47] leading-relaxed max-w-xl">{s.body}</p>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="text-[15px] text-[#1A1A1A] flex gap-3 border-b border-black/8 pb-3">
                      <span className="text-[#A6192E]">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`h-64 md:h-80 rounded-[22px] overflow-hidden relative ${i % 2 === 1 ? "lg:order-1" : ""}`}
                style={{ background: "radial-gradient(circle at 50% 55%, #EEEBFF 0%, #FFFFFF 55%, #F5F3FF 100%)" }}
              >
                <Scene3D variant={s.visual} className="absolute inset-0" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F2F2F2] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#A6192E]">Engagement model</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A] leading-[1.05] mb-14 max-w-3xl text-balance">
            How every engagement runs.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div key={step.title} className="rounded-[24px] bg-white border border-black/8 p-8">
                <p className="text-[44px] font-semibold leading-none text-black/10 tracking-tight">0{i + 1}</p>
                <h3 className="mt-5 text-xl font-semibold text-[#1A1A1A] tracking-tight">{step.title}</h3>
                <p className="mt-3 text-[15px] text-[#5A5A5A] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[28px] bg-white border border-black/8 p-10 md:p-12 flex flex-wrap gap-8 justify-between items-center">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-3">Not sure where to start?</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-tight">
                We'll audit your digital performance and show you the moves that matter most.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Cta to="/contact" variant="solid-dark">
                Book a strategy consultation <span aria-hidden>→</span>
              </Cta>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-3.5 text-sm font-medium text-[#1A1A1A] hover:border-[#A6192E] hover:text-[#A6192E] transition-colors"
              >
                View investment levels
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

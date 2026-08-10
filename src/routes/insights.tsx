import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { Cta } from "../components/site/Cta";
import { canonical } from "../lib/seo";
import { insights } from "../lib/consulting";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Digital Growth & AI Thinking | Nile Reach" },
      {
        name: "description",
        content:
          "Practical thinking for African business leaders on digital transformation, AI automation, growth marketing and data-driven decision making.",
      },
      { property: "og:title", content: "Insights — Digital Growth & AI Thinking | Nile Reach" },
      {
        property: "og:description",
        content: "Articles and perspectives from the Nile Reach consulting team in Kigali.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/insights")],
  }),
  component: Insights,
});

function Insights() {
  const [lead, ...rest] = insights;
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={<>Thinking for leaders<br />building digital businesses.</>}
        intro="Short, practical perspectives on digital transformation, AI automation and growth — written for executives, not marketers."
        scene="constellation"
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <article className="rounded-[28px] border border-black/8 bg-[#F2F2F2] p-10 md:p-14 mb-6">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-5">Featured · {lead.category}</p>
            <h2 className="text-3xl md:text-[46px] font-semibold tracking-tight text-[#1A1A1A] leading-[1.08] max-w-3xl text-balance">
              {lead.title}
            </h2>
            <p className="mt-6 text-lg text-[#3F4B47] leading-relaxed max-w-2xl">{lead.excerpt}</p>
            <p className="mt-8 text-[13px] text-[#5A5A5A]">{lead.readTime}</p>
          </article>

          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((a) => (
              <article
                key={a.title}
                className="rounded-[24px] border border-black/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-4">{a.category}</p>
                <h3 className="text-xl font-semibold text-[#1A1A1A] leading-snug tracking-tight">{a.title}</h3>
                <p className="mt-3 text-[14px] text-[#5A5A5A] leading-relaxed">{a.excerpt}</p>
                <p className="mt-6 text-[13px] text-[#5A5A5A]">{a.readTime}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden hero-silk text-white py-20 md:py-24">
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Want this thinking applied to your business?
            </h2>
            <p className="mt-4 text-white/75 font-light">
              A strategy consultation turns these ideas into a roadmap for your company.
            </p>
          </div>
          <Cta to="/contact" variant="solid-light">
            Book consultation <span aria-hidden>→</span>
          </Cta>
        </div>
      </section>
    </>
  );
}

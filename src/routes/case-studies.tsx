import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { faviconUrl } from "@/lib/projects";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Nile Reach" },
      {
        name: "description",
        content:
          "How Nile Reach took real Rwandan businesses from no website and no Google presence to a professional, findable online presence — starting point, approach, and results for each client.",
      },
      { property: "og:title", content: "Case Studies — Nile Reach" },
      {
        property: "og:description",
        content: "Real client starting points, our approach, and the results — one deep dive per company.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/case-studies")],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  const caseStudies = getAllCaseStudies();
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title={<>Where they started.<br />Where we took them.</>}
        intro="Most of these companies had no website and no Google Business Profile before Nile Reach — invisible to anyone searching for what they do. Here's the starting point, the approach, and the result for each."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => {
              const favicon = faviconUrl(cs.domain);
              return (
                <Link
                  key={cs.slug}
                  to="/case-studies/$slug"
                  params={{ slug: cs.slug }}
                  className="group block rounded-[24px] border border-black/8 bg-[#F2F2F2] p-8 md:p-10 transition-all duration-300 hover:border-[#A6192E]/30 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    {favicon && <img src={favicon} alt="" className="size-5 rounded-sm" />}
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">{cs.industry}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] tracking-tight">{cs.name}</h2>
                  <p className="mt-4 text-[15px] text-[#3F4B47] leading-relaxed line-clamp-3">{cs.startingPoint}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] group-hover:text-[#A6192E] transition-colors">
                    Read the case study
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

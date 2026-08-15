import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { Cta, ExternalLinkIcon } from "../components/site/Cta";
import { DownloadPdfButton } from "../components/site/DownloadPdfButton";
import { getCaseStudy, getAllCaseStudies, type FullCaseStudy } from "@/lib/caseStudies";
import { SiteShot, SiteFavicon } from "@/components/site/RemoteImage";
import { canonical, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const cs = getCaseStudy(params.slug);
    if (!cs) throw notFound();
    return cs;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.name} Case Study — Nile Reach` },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: `${loaderData.name} Case Study — Nile Reach` },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "article" },
      ],
      links: [canonical(`/case-studies/${loaderData.slug}`)],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${loaderData.name} Case Study`,
            about: loaderData.name,
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          }),
        },
      ],
    };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const cs = Route.useLoaderData() as FullCaseStudy;
  const all = getAllCaseStudies();

  const idx = all.findIndex((c) => c.slug === cs.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <>
      <PageHeader eyebrow="Case Study" title={<>{cs.name}</>} intro={cs.industry}>
        <div className="mt-8 flex flex-wrap items-center gap-4 print:hidden">
          {cs.website && (
            <Cta href={cs.website} variant="solid-light">
              Visit live website <ExternalLinkIcon />
            </Cta>
          )}
          <DownloadPdfButton variant="dark" />
        </div>
      </PageHeader>

      <article className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          {cs.domain && (
            <div className="mb-16 rounded-none overflow-hidden border border-black/8 print:hidden">
              <SiteShot domain={cs.domain} name={cs.name} className="aspect-[16/10]" />
            </div>
          )}

          <div className="flex items-center gap-2.5 mb-10 print:hidden">
            <SiteFavicon domain={cs.domain} name={cs.name} />

            <span className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">{cs.badge}</span>
          </div>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-4">The starting point</p>
            <p className="text-lg md:text-xl text-[#1A1A1A] leading-relaxed">{cs.startingPoint}</p>
          </section>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-4">Our approach</p>
            <ul className="space-y-4">
              {cs.approach.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center size-7 rounded-full bg-[#F2F2F2] text-[12px] font-semibold text-[#A6192E] print:border print:border-black/15">
                    {i + 1}
                  </span>
                  <span className="text-[16px] text-[#3F4B47] leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-4">The results</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-none border border-black/8 bg-[#F2F2F2] p-5 print:bg-white">
                  <p className="text-2xl font-semibold text-[#1A1A1A] tracking-tight">{r.value}</p>
                  <p className="mt-1 text-[13px] text-[#5A5A5A]">{r.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-4">Services delivered</p>
            <ul className="flex flex-wrap gap-2">
              {cs.services.map((s) => (
                <li key={s} className="text-[12px] rounded-full border border-black/8 bg-[#F2F2F2] text-[#1A1A1A] px-3 py-1.5 print:bg-white">
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-black/8 print:hidden">
            {cs.website && (
              <Cta href={cs.website} variant="solid-dark">
                Visit live website <ExternalLinkIcon />
              </Cta>
            )}
            <Link
              to="/contact"
              className="text-sm font-medium text-[#1A1A1A] underline underline-offset-4 hover:text-[#A6192E] transition-colors"
            >
              Want a result like this? Start your project →
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-[#F2F2F2] py-16 print:hidden">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-[#5A5A5A]">Next case study</p>
          <Link
            to="/case-studies/$slug"
            params={{ slug: next.slug }}
            className="inline-flex items-center gap-2 text-lg font-medium text-[#1A1A1A] hover:text-[#A6192E] transition-colors"
          >
            {next.name} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

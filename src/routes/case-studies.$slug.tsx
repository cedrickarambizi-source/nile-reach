import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { Cta, ExternalLinkIcon } from "../components/site/Cta";
import { DownloadPdfButton } from "../components/site/DownloadPdfButton";
import { getCaseStudy, getAllCaseStudies, type FullCaseStudy } from "@/lib/caseStudies";
import { screenshotUrl, faviconUrl } from "@/lib/projects";
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
  const shot = screenshotUrl(cs.domain);
  const favicon = faviconUrl(cs.domain);
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
          {shot && (
            <div className="mb-16 rounded-2xl overflow-hidden border border-black/8 print:hidden">
              <img src={shot} alt={`${cs.name} website`} className="w-full h-auto" loading="lazy" />
            </div>
          )}

          <div className="flex items-center gap-2.5 mb-10 print:hidden">
            {favicon && <img src={favicon} alt="" className="size-5 rounded-sm" />}
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#175E52]">{cs.badge}</span>
          </div>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#175E52] mb-4">The starting point</p>
            <p className="text-lg md:text-xl text-[#10201C] leading-relaxed">{cs.startingPoint}</p>
          </section>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#175E52] mb-4">Our approach</p>
            <ul className="space-y-4">
              {cs.approach.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center size-7 rounded-full bg-[#F2F0E9] text-[12px] font-semibold text-[#175E52] print:border print:border-black/15">
                    {i + 1}
                  </span>
                  <span className="text-[16px] text-[#3F4B47] leading-relaxed pt-0.5">{step}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#175E52] mb-4">The results</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cs.results.map((r) => (
                <div key={r.label} className="rounded-2xl border border-black/8 bg-[#F2F0E9] p-5 print:bg-white">
                  <p className="text-2xl font-semibold text-[#10201C] tracking-tight">{r.value}</p>
                  <p className="mt-1 text-[13px] text-[#5C6864]">{r.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#175E52] mb-4">Services delivered</p>
            <ul className="flex flex-wrap gap-2">
              {cs.services.map((s) => (
                <li key={s} className="text-[12px] rounded-full border border-black/8 bg-[#F2F0E9] text-[#10201C] px-3 py-1.5 print:bg-white">
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
              className="text-sm font-medium text-[#10201C] underline underline-offset-4 hover:text-[#175E52] transition-colors"
            >
              Want a result like this? Start your project →
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-[#F2F0E9] py-16 print:hidden">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-[#5C6864]">Next case study</p>
          <Link
            to="/case-studies/$slug"
            params={{ slug: next.slug }}
            className="inline-flex items-center gap-2 text-lg font-medium text-[#10201C] hover:text-[#175E52] transition-colors"
          >
            {next.name} <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

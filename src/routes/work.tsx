import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { ProjectCard } from "../components/site/ProjectCard";
import { LogoMarquee } from "../components/site/LogoMarquee";
import { Cta, ExternalLinkIcon } from "../components/site/Cta";
import { projects, screenshotUrl, faviconUrl } from "@/lib/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Nile Reach Portfolio | Websites, SEO & Branding" },
      {
        name: "description",
        content:
          "Explore Nile Reach's portfolio: websites, SEO, branding, and Google Business projects for Fadmoor, MEP Erictric, Pro MEP, RwaSoft, Hope Technical, and more.",
      },
      { property: "og:title", content: "Our Work — Nile Reach Portfolio" },
      {
        property: "og:description",
        content:
          "Websites, SEO, branding, and Google Business projects delivered by Nile Reach for ambitious brands across Rwanda.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Nile Reach Portfolio",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "CreativeWork",
              name: p.name,
              url: p.website,
              description: p.description,
              about: p.industry,
            },
          })),
        }),
      },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title={<>Websites, branding & SEO<br />that move real businesses.</>}
        intro="A portfolio of recent client engagements — corporate websites, complete digital branding, Google Business optimization, and SEO shipped by Nile Reach."
      />

      <LogoMarquee />

      {/* Grid of all projects */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#4B2E83]">
              Recent projects · {projects.length}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.05] text-balance">
              Every project shipped with intent, on the record.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed case rows */}
      <section className="bg-[#F5F5F7] py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {projects.map((p, i) => {
            const shot = screenshotUrl(p.domain);
            const favicon = faviconUrl(p.domain);
            return (
              <article
                key={p.slug}
                id={p.slug}
                className="scroll-mt-28 grid md:grid-cols-2 gap-10 items-center bg-white rounded-[24px] p-6 md:p-10 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
              >
                <div
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-violet-50 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {shot ? (
                    <img
                      src={shot}
                      alt={`${p.name} — ${p.industry} website by Nile Reach`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="text-center px-6">
                        <div className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                          {p.name}
                        </div>
                        <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[#6E6E73]">Case study</p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    {favicon && <img src={favicon} alt="" className="size-5 rounded-sm" />}
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#4B2E83]">{p.badge}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-[#1D1D1F] tracking-tight leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#6E6E73]">{p.industry}</p>
                  <p className="mt-5 text-[16px] text-[#3A3A3C] leading-relaxed">{p.description}</p>

                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#6E6E73] mb-3">Services delivered</p>
                    <ul className="flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <li
                          key={s}
                          className="text-[12px] rounded-full border border-black/8 bg-[#F5F5F7] text-[#1D1D1F] px-3 py-1.5"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {p.tech && (
                    <div className="mt-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#6E6E73] mb-3">Stack & capabilities</p>
                      <p className="text-sm text-[#3A3A3C]">{p.tech.join(" · ")}</p>
                    </div>
                  )}

                  {p.website && (
                    <Cta href={p.website} variant="solid-dark" className="mt-8">
                      Visit live website
                      <ExternalLinkIcon className="size-3" />
                    </Cta>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

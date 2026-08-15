import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { ProjectCard } from "../components/site/ProjectCard";
import { LogoMarquee } from "../components/site/LogoMarquee";
import { Cta, ExternalLinkIcon } from "../components/site/Cta";
import { projects } from "@/lib/projects";
import { SiteShot, SiteFavicon } from "@/components/site/RemoteImage";
import { canonical } from "@/lib/seo";

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
    links: [canonical("/work")],
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
            <p className="text-[13px] uppercase tracking-[0.15em] font-medium mb-5 text-[#A6192E]">
              Recent projects · {projects.length}
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1A1A] leading-[1.05] text-balance">
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
      <section className="bg-[#F2F2F2] py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {projects.map((p, i) => {
            return (
              <article
                key={p.slug}
                id={p.slug}
                className="scroll-mt-28 grid md:grid-cols-2 gap-10 items-center bg-white rounded-none p-6 md:p-10 border border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
              >
                <SiteShot
                  domain={p.domain}
                  name={p.name}
                  className={`aspect-[16/10] rounded-none ${i % 2 === 1 ? "md:order-2" : ""}`}
                />

                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <SiteFavicon domain={p.domain} name={p.name} />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">{p.badge}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight leading-tight">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A5A5A]">{p.industry}</p>
                  <p className="mt-5 text-[16px] text-[#3F4B47] leading-relaxed">{p.description}</p>

                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#5A5A5A] mb-3">Services delivered</p>
                    <ul className="flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <li
                          key={s}
                          className="text-[12px] rounded-full border border-black/8 bg-[#F2F2F2] text-[#1A1A1A] px-3 py-1.5"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {p.tech && (
                    <div className="mt-5">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#5A5A5A] mb-3">Stack & capabilities</p>
                      <p className="text-sm text-[#3F4B47]">{p.tech.join(" · ")}</p>
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

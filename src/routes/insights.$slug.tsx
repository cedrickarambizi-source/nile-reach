import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Cta } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { canonical } from "@/lib/seo";
import { getInsight, insights, type Insight } from "@/lib/consulting";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getInsight(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — Nile Reach Insights` : "Insight — Nile Reach";
    const description = a?.excerpt ?? "Thinking for leaders building digital businesses in Africa.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [canonical(`/insights/${a?.slug ?? ""}`)],
    };
  },
  component: Article,
});

function Article() {
  const { article } = Route.useLoaderData() as { article: Insight };
  const more = insights.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={article.category} title={article.title} intro={article.excerpt} />

      <article className="bg-paper py-28 md:py-40">
        <div className="max-w-3xl mx-auto px-6">
          <p className="mono-label text-stone mb-12">
            {new Date(article.published).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}{" "}
            · {article.readTime}
          </p>

          {article.body.map((block, i) => (
            <Reveal key={i} className="mb-10">
              {block.heading && (
                <h2 className="text-2xl md:text-[30px] font-semibold text-ink mb-4">{block.heading}</h2>
              )}
              <p className="text-[17px] md:text-lg text-[#3F4B47] leading-[1.75]">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="bg-paper-dim py-28 md:py-36 border-t border-line">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mono-label text-nile mb-10">Keep reading</p>
          <div className="grid md:grid-cols-3 gap-6">
            {more.map((a) => (
              <Link
                key={a.slug}
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group rounded-[16px] border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1 hover:border-nile/40"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                <p className="mono-label text-nile mb-4">{a.category}</p>
                <h3 className="text-xl font-semibold text-ink leading-snug">{a.title}</h3>
                <p className="mt-3 text-[14px] text-stone leading-relaxed">{a.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-14">
            <Cta to="/contact" variant="solid-dark">
              Book a strategy consultation <span aria-hidden>→</span>
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}

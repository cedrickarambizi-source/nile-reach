import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nile Reach" },
      { name: "description", content: "Founded November 2023 in Kigali, Nile Reach helps businesses expand across Africa and globally through digital and AI marketing." },
      { property: "og:title", content: "About Nile Reach" },
      { property: "og:description", content: "Named after a river that never stops moving — a Kigali digital and AI marketing agency." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={<>Named after a river that never stops moving.</>}
      />
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 space-y-10 text-lg leading-relaxed text-nile-clay/75">
          <p className="border-l-2 border-nile-gold pl-6 font-serif text-2xl text-nile-clay italic">
            "We don't just market — we innovate, empower, and help businesses become future-ready leaders."
          </p>
          <p>
            Founded in November 2023 and headquartered in Kigali, Rwanda, Nile Reach is a
            next-generation Digital and AI Marketing Agency dedicated to helping businesses
            expand their reach across Africa and globally.
          </p>
          <p>
            Inspired by the flow and power of the Nile River, we combine digital expertise
            with artificial intelligence to deliver smarter, faster, and measurable growth.
            Our services include SEO, social media marketing, paid advertising, web design,
            branding, and AI-driven automation.
          </p>
          <p>
            We specialize in working with retail, healthcare, e-commerce, and corporate
            businesses, providing strategies that connect brands with customers and
            transform them into future-ready leaders.
          </p>
          <p>
            At Nile Reach, we don't just market — we innovate, empower, and help businesses
            become the leaders of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-white/5 bg-nile-deep/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { k: "Founded", v: "November 2023" },
            { k: "Headquarters", v: "Kigali, Rwanda" },
            { k: "Reach", v: "Africa & Global" },
          ].map((f) => (
            <div key={f.k} className="border-l border-nile-gold/50 pl-6">
              <p className="eyebrow mb-3">{f.k}</p>
              <p className="font-serif text-3xl">{f.v}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-wrap gap-4">
          <Link to="/team" className="bg-nile-gold text-nile-dark px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
            Meet the team
          </Link>
          <Link to="/contact" className="border border-white/15 text-nile-clay px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-nile-gold hover:text-nile-gold transition-colors">
            Work with us
          </Link>
        </div>
      </section>
    </>
  );
}

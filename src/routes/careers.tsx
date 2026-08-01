import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { canonical } from "../lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Nile Reach" },
      { name: "description", content: "Open roles at Nile Reach in Kigali. Join a next-generation digital and AI marketing agency." },
      { property: "og:title", content: "Careers at Nile Reach" },
      { property: "og:description", content: "Help brands move further. Open roles in Kigali." },
    ],
    links: [canonical("/careers")],
  }),
  component: Careers,
});

const roles = [
  { title: "Digital Marketing Strategist", location: "Kigali · Full-time", mode: "Hybrid" },
  { title: "AI Automation Engineer", location: "Kigali · Full-time", mode: "Hybrid" },
  { title: "Social Media Manager", location: "Kigali · Full-time", mode: "Remote-friendly" },
  { title: "Paid Media Specialist", location: "Kigali · Full-time", mode: "Hybrid" },
  { title: "Brand Designer", location: "Kigali · Contract", mode: "Remote-friendly" },
];

function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={<>Help brands move further.</>}
        intro="We hire specialists who take ownership. Small team, senior work, real African-market impact."
      />
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-white/10">
            {roles.map((r) => (
              <div
                key={r.title}
                className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_auto] gap-6 items-center py-8 border-b border-white/10 group"
              >
                <h3 className="font-serif text-2xl group-hover:text-nile-gold transition-colors">{r.title}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-nile-clay/50">{r.location}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-nile-clay/50">{r.mode}</p>
                <a
                  href={`mailto:careers@nilereach.rw?subject=Application: ${encodeURIComponent(r.title)}`}
                  className="justify-self-start md:justify-self-end border border-white/15 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-nile-gold hover:text-nile-gold transition-colors"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 glass-layer rounded-xl p-10">
            <p className="eyebrow mb-4">Don't see your role?</p>
            <h2 className="font-serif text-3xl mb-4">We're always meeting talent.</h2>
            <p className="text-nile-clay/60 mb-6 max-w-2xl">
              Send us a note about how you'd contribute. If it lands, we'll open the conversation.
            </p>
            <a
              href="mailto:careers@nilereach.rw"
              className="inline-block bg-nile-gold text-nile-dark px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
            >
              careers@nilereach.rw
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

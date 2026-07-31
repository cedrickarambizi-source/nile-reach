import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import cedricPhoto from "@/assets/team-cedric-karambizi.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Nile Reach" },
      { name: "description", content: "Meet the leadership of Nile Reach — Cedric Karambizi, Kagoro Mugisha Peter, Bryan Michelage and team." },
      { property: "og:title", content: "The Nile Reach Team" },
      { property: "og:description", content: "Leadership and specialists behind Nile Reach in Kigali, Rwanda." },
    ],
  }),
  component: Team,
});

const people = [
  { name: "Cedric Karambizi", role: "CEO & Founder", initials: "CK", photo: cedricPhoto, bio: "Sets the agency's direction and leads major client partnerships across the region." },
  { name: "Kagoro Mugisha Peter", role: "Marketing Director", initials: "KM", bio: "Owns marketing strategy and creative direction for the agency's most complex accounts." },
  { name: "Bryan Michelage", role: "IT Administrator", initials: "BM", bio: "Runs the technical infrastructure, data and AI tooling that powers every engagement." },
  { name: "Aline Umutoni", role: "Head of Growth", initials: "AU", bio: "Leads paid media, SEO and analytics across retail, healthcare and e-commerce accounts." },
  { name: "David Mugabo", role: "Creative Lead", initials: "DM", bio: "Directs brand identity, campaign concepts and the studio's visual standards." },
];

const palettes = [
  "from-nile-gold/40 to-nile-river",
  "from-nile-river to-nile-deep",
  "from-nile-gold/25 to-nile-dark",
  "from-nile-deep to-nile-river",
  "from-nile-gold/35 to-nile-deep",
];

function Team() {
  return (
    <>
      <PageHeader
        eyebrow="The People"
        title={<>The stewards of the reach.</>}
        intro="A small team of specialists in Kigali, working with clients across Africa and beyond."
      />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((p, i) => (
            <article key={p.name} className="group">
              <div className="w-full aspect-[4/5] mb-6 border border-white/10 relative overflow-hidden">
                {p.photo ? (
                  <>
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
                  </>
                ) : (
                  <div className={`absolute inset-0 bg-linear-to-br ${palettes[i % palettes.length]} flex items-end p-6`}>
                    <span className="font-serif text-8xl text-nile-clay/90 leading-none">{p.initials}</span>
                  </div>
                )}
                <span
                  className={`absolute top-6 right-6 text-[10px] uppercase tracking-[0.3em] z-10 ${p.photo ? "text-white/80" : "text-nile-clay/50"}`}
                >
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <p className="text-nile-gold text-[10px] font-bold uppercase tracking-[0.25em] mt-2 mb-4">
                {p.role}
              </p>
              <p className="text-sm text-nile-clay/60 leading-relaxed">{p.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

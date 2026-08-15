import { projects } from "@/lib/projects";
import { SiteFavicon } from "./RemoteImage";

/** Client logo strip — real clients only, listed once (no Nile Reach, no duplicates). */
export function LogoStrip() {
  const seen = new Set<string>();
  const items = projects.filter((p) => {
    if (!p.domain || p.slug === "nile-reach") return false;
    if (seen.has(p.domain)) return false;
    seen.add(p.domain);
    return true;
  });

  return (
    <section className="bg-paper border-y border-line py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mono-label text-center text-stone mb-10">
          Companies we have built and launched
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {items.map((p) => (
            <li key={p.slug}>
              <a
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity duration-300"
                title={p.name}
              >
                <img
                  src={faviconUrl(p.domain)!}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="size-7 rounded-md"
                />
                <span className="text-[15px] font-medium text-ink whitespace-nowrap tracking-[-0.01em]">
                  {p.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Back-compat alias for existing imports. */
export const LogoMarquee = LogoStrip;

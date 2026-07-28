import { projects, faviconUrl } from "@/lib/projects";

export function LogoMarquee() {
  const items = projects.filter((p) => p.domain);
  const loop = [...items, ...items];

  return (
    <section className="bg-white border-y border-black/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] text-[#6E6E73] mb-10">
          Trusted by businesses across Rwanda
        </p>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex gap-14 animate-[marquee_38s_linear_infinite] w-max">
            {loop.map((p, i) => (
              <a
                key={`${p.slug}-${i}`}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
                title={p.name}
              >
                <img
                  src={faviconUrl(p.domain)!}
                  alt={`${p.name} logo`}
                  loading="lazy"
                  className="size-7 rounded-md"
                />
                <span className="text-[15px] font-medium text-[#1D1D1F] whitespace-nowrap tracking-tight">
                  {p.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

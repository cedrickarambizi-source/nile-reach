import { Link } from "@tanstack/react-router";
import { NileReachMark } from "./NileReachLogo";
import { BUSINESS } from "@/lib/seo";

const groups = [
  {
    title: "Practices",
    links: [
      { to: "/services", label: "Digital Transformation" },
      { to: "/services", label: "AI & Automation" },
      { to: "/services", label: "Growth Marketing" },
      { to: "/services", label: "Web & Software" },
      { to: "/services", label: "Data & Analytics" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/team", label: "Team" },
      { to: "/careers", label: "Careers" },
      { to: "/work", label: "Work" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/industries", label: "Industries" },
      { to: "/case-studies", label: "Case studies" },
      { to: "/insights", label: "Insights" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
] as const;

/** Three solid colour blocks — the institutional "next step" pattern. */
const blocks = [
  { to: "/services", label: "Why work with Nile Reach?", bg: "bg-[#A6192E]" },
  { to: "/case-studies", label: "Browse our client results", bg: "bg-[#1F3A5F]" },
  { to: "/contact", label: "Book a strategy consultation", bg: "bg-[#1A1A1A]" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative print:hidden">
      {/* Colour-block CTA row */}
      <div className="bg-[#E9E9E9]">
        <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-20 grid gap-6 md:grid-cols-3">
          {blocks.map((b) => (
            <Link
              key={b.label}
              to={b.to}
              className={`${b.bg} group flex items-center justify-center min-h-[190px] px-8 text-center text-white transition-transform duration-300 hover:-translate-y-1`}
            >
              <span className="text-[22px] md:text-[24px] font-bold leading-[1.2] tracking-[-0.02em]">
                {b.label}{" "}
                <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer grid */}
      <div className="bg-[#F2F2F2] text-[#1A1A1A] border-t border-[#DCDCDC]">
        <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2.5">
                <span className="grid place-items-center size-9 bg-[#A6192E] p-1.5 shrink-0">
                  <NileReachMark className="h-full w-full" />
                </span>
                <span className="text-base font-bold tracking-[-0.02em] text-[#A6192E]">Nile Reach</span>
              </Link>
              <p className="mt-5 text-sm text-[#5A5A5A] leading-relaxed max-w-xs">
                Digital transformation, AI automation and growth infrastructure. Founded in Kigali, 2023.
              </p>
            </div>

            {groups.map((g) => (
              <div key={g.title}>
                <p className="mono-label text-[#1A1A1A] mb-4">{g.title}</p>
                <ul className="space-y-2.5">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-[#5A5A5A] hover:text-[#A6192E] underline-offset-4 hover:underline transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="mono-label text-[#1A1A1A] mb-4">Contact</p>
              <ul className="space-y-2.5 text-sm text-[#5A5A5A]">
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-[#A6192E] transition-colors">
                    {BUSINESS.email}
                  </a>
                </li>
                <li>
                  <a href={BUSINESS.phoneHref} className="hover:text-[#A6192E] transition-colors">
                    {BUSINESS.phone}
                  </a>
                </li>
                <li>{BUSINESS.addressLine}</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-6 border-t border-[#DCDCDC] flex flex-wrap gap-4 items-center justify-between text-[12px] text-[#5A5A5A]">
            <p>© {new Date().getFullYear()} Nile Reach Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-[#A6192E] transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-[#A6192E] transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-[#A6192E] transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

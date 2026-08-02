import { Link } from "@tanstack/react-router";
import { NileReachMark } from "./NileReachLogo";
import { Cta } from "./Cta";
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
  {
    title: "Contact",
    links: [
      { to: "/contact", label: BUSINESS.email },
      { to: "/contact", label: BUSINESS.phone },
      { to: "/contact", label: BUSINESS.addressLine },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="on-dark relative overflow-hidden text-white print:hidden">
      {/* Closing CTA */}
      <div className="relative hero-silk">
        <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-28 md:pt-40 md:pb-36 text-center">
          <p className="mono-label text-[#C99A46] mb-8">Next step</p>
          <h2 className="text-white text-[40px] md:text-7xl font-semibold leading-[1.04] tracking-[-0.02em] max-w-4xl mx-auto">
            Tell us where the business stalls. We'll show you the system that fixes it.
          </h2>
          <p className="mt-7 text-white/70 max-w-xl mx-auto text-lg font-light">
            A 45-minute consultation with a Nile Reach partner: current-state review, three prioritised
            moves, and what each one costs.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-3">
            <Cta to="/contact" variant="solid-light">
              Book a strategy consultation
              <span aria-hidden>→</span>
            </Cta>
            <Cta to="/case-studies" variant="outline-light">
              Read the case studies
            </Cta>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="relative bg-[#0A1714]">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 text-white">
                <span className="grid place-items-center size-9 rounded-[10px] bg-white p-1.5 shrink-0">
                  <NileReachMark className="h-full w-full" />
                </span>
                <span className="text-base font-medium tracking-[-0.01em]">Nile Reach</span>
              </Link>
              <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
                Digital transformation, AI automation and growth infrastructure. Founded in Kigali, 2023.
              </p>
            </div>

            {groups.map((g) => (
              <div key={g.title}>
                <p className="mono-label text-white/45 mb-5">{g.title}</p>
                <ul className="space-y-3">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="text-sm text-white/75 hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between text-[12px] text-white/45">
            <p>© {new Date().getFullYear()} Nile Reach Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white/80 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white/80 transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-white/80 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

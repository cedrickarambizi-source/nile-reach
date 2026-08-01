import { Link } from "@tanstack/react-router";
import { NileReachMark } from "./NileReachLogo";
import { Cta } from "./Cta";
import { BUSINESS } from "@/lib/seo";

const groups = [
  {
    title: "Services",
    links: [
      { to: "/services", label: "SEO" },
      { to: "/services", label: "Paid Media" },
      { to: "/services", label: "Brand Strategy" },
      { to: "/services", label: "AI Automation" },
      { to: "/services", label: "Web & Product" },
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
      { to: "/pricing", label: "Pricing" },
      { to: "/contact", label: "Insights" },
    ],
  },
  {
    title: "Contact",
    links: [
      { to: "/contact", label: BUSINESS.email },
      { to: "/contact", label: BUSINESS.phone },
      { to: "/contact", label: "Remera, Kigali" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="on-dark relative overflow-hidden text-white">
      {/* Closing CTA */}
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#0A0A1F_0%,#1E1B4B_45%,#4338CA_100%)]" />
        <div className="absolute -top-40 right-[-10%] size-[520px] rounded-full bg-violet-500/30 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-5%] size-[440px] rounded-full bg-indigo-500/30 blur-[140px]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-6">Let's build</p>
          <h2 className="text-white text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-4xl mx-auto">
            Let's grow something{" "}
            <span className="italic font-light bg-gradient-to-r from-violet-200 to-indigo-100 bg-clip-text text-transparent">
              worth remembering.
            </span>
          </h2>
          <p className="mt-6 text-white/70 max-w-xl mx-auto text-lg">
            A 30-minute strategy call with a Nile Reach partner. Walk away with three moves you can start Monday.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Cta to="/contact" variant="solid-light">
              Book a strategy call
              <span aria-hidden>→</span>
            </Cta>
            <Cta to="/work" variant="outline-light">
              See recent work
            </Cta>
          </div>
        </div>
      </div>

      {/* Footer grid */}
      <div className="relative bg-[#050512]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 text-white">
                <span className="grid place-items-center size-9 rounded-[10px] bg-white p-1.5 shrink-0">
                  <NileReachMark className="h-full w-full" />
                </span>
                <span className="text-base font-medium tracking-tight">Nile Reach</span>
              </Link>
              <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
                Digital & AI marketing built in Kigali, reaching across Africa.
              </p>
            </div>

            {groups.map((g) => (
              <div key={g.title}>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/45 mb-4">{g.title}</p>
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

          <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between text-[12px] text-white/45">
            <p>© {new Date().getFullYear()} Nile Reach Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/80 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

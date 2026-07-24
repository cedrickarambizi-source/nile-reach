import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/nile-reach-logo.png.asset.json";

type SubItem = { to: string; label: string; desc: string; icon: string };
type NavItem = { to: string; label: string; children?: SubItem[] };

const nav: NavItem[] = [
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services", label: "SEO",              desc: "Rank where intent lives.",       icon: "◎" },
      { to: "/services", label: "Paid Media",       desc: "ROAS-first performance.",        icon: "◈" },
      { to: "/services", label: "Brand Strategy",   desc: "Positioning that travels.",      icon: "✦" },
      { to: "/services", label: "AI Automation",    desc: "Agents, chatbots, workflows.",   icon: "⚡" },
      { to: "/services", label: "Web & Product",    desc: "Sites built to convert.",        icon: "◨" },
      { to: "/services", label: "Content & Social", desc: "Editorial that compounds.",      icon: "◐" },
    ],
  },
  { to: "/work", label: "Work" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about",    label: "Our Story",   desc: "Kigali, 2023 — and forward.", icon: "❖" },
      { to: "/team",     label: "Team",        desc: "The people doing the work.",  icon: "◉" },
      { to: "/industries", label: "Industries", desc: "Sectors we serve.",           icon: "◇" },
      { to: "/careers",  label: "Careers",     desc: "Join Nile Reach.",            icon: "→" },
    ],
  },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`on-dark fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "bg-[#0A0A1F]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-[#0A0A1F]/95 border-b border-transparent"
      }`}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-white shrink-0" onMouseEnter={() => setOpenMenu(null)}>
          <span className="grid place-items-center size-8 rounded-lg bg-white/95 p-1">
            <img src={logoAsset.url} alt="Nile Reach" className="h-full w-full object-contain" />
          </span>
          <span className="text-[15px] font-medium tracking-tight">Nile Reach</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9 text-[13px] font-light text-white/85">
          {nav.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
            >
              <Link
                to={item.to}
                className="link-underline py-2 hover:text-white transition-colors"
                activeProps={{ className: "text-white" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden sm:grid place-items-center size-9 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
          </button>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full bg-white text-[#0A0A1F] px-4 py-2 text-[12px] font-medium hover:bg-white/90 transition"
          >
            Start a project
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Dropdown panel (light, rounded) */}
      {openMenu && (
        <div className="hidden lg:block absolute inset-x-0 top-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="dropdown-in bg-white text-[#1D1D1F] rounded-2xl shadow-[0_30px_60px_-20px_rgba(10,10,31,0.35)] border border-black/5 p-6 grid grid-cols-3 gap-2 mt-2 mb-6">
              {(nav.find((n) => n.label === openMenu)?.children ?? []).map((s) => (
                <Link
                  key={s.label}
                  to={s.to}
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-start gap-3 rounded-xl p-3 hover:bg-[#F5F5F7] transition-colors"
                >
                  <span className="grid place-items-center size-9 rounded-lg bg-gradient-to-br from-indigo-50 to-violet-50 text-violet-600 text-lg">
                    {s.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-medium">{s.label}</span>
                    <span className="block text-[12px] text-[#6E6E73] leading-snug mt-0.5">{s.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search bar */}
      {searchOpen && (
        <div className="hidden sm:block border-t border-white/10 bg-[#0A0A1F]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
              <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
            </svg>
            <input
              autoFocus
              placeholder="Search Nile Reach…"
              className="w-full bg-transparent outline-none text-white placeholder:text-white/40 text-sm"
            />
            <button onClick={() => setSearchOpen(false)} className="text-white/60 hover:text-white text-xs">Esc</button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0A0A1F] px-6 py-6 flex flex-col gap-4 text-sm">
          {nav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileOpen(false)}
              className="text-white/85 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-white text-[#0A0A1F] px-4 py-2.5 text-[12px] font-medium"
          >
            Start a project
          </Link>
        </div>
      )}
    </nav>
  );
}

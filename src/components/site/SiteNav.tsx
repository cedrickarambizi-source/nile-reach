import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import logoAsset from "@/assets/nile-reach-logo.png.asset.json";

type SubItem = { to: string; label: string; desc: string; icon: ReactNode };
type NavItem = { to: string; label: string; children?: SubItem[] };

/* ---------------------------------------------------------------- icons */
const S = (d: string) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-[18px]">
    <path d={d} />
  </svg>
);
const IconSearch = S("M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-3.6-3.6");
const IconTarget = S("M12 3v3M12 18v3M3 12h3M18 12h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z");
const IconChart = S("M4 20V10M10 20V4M16 20v-7M22 20H2");
const IconCompass = S("M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM15 9l-2 4-4 2 2-4 4-2Z");
const IconPen = S("M4 20h4L20 8l-4-4L4 16v4ZM14 6l4 4");
const IconCode = S("M9 8l-4 4 4 4M15 8l4 4-4 4");
const IconLayers = S("M12 3 3 8l9 5 9-5-9-5ZM3 14l9 5 9-5");
const IconSpark = S("M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3");
const IconBrain = S("M9 5a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V17a3 3 0 0 0 4 2.8M15 5a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V17a3 3 0 0 1-4 2.8M12 5v14");
const IconUsers = S("M16 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17 11a3 3 0 1 0 0-6M21 20v-1a4 4 0 0 0-3-3.9");
const IconFlag = S("M5 21V4M5 4h11l-2 3.5L16 11H5");
const IconGrid = S("M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z");
const IconBook = S("M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5ZM19 19H6");

const nav: NavItem[] = [
  {
    to: "/services",
    label: "Services",
    children: [
      { to: "/services", label: "SEO", desc: "Rank where intent already lives.", icon: IconTarget },
      { to: "/services", label: "Paid Media", desc: "ROAS-first performance systems.", icon: IconChart },
      { to: "/services", label: "Brand Strategy", desc: "Positioning that travels.", icon: IconCompass },
      { to: "/services", label: "Content Marketing", desc: "Editorial that compounds.", icon: IconPen },
      { to: "/services", label: "Web Development", desc: "Sites engineered to convert.", icon: IconCode },
      { to: "/services", label: "UI / UX", desc: "Interfaces with a point of view.", icon: IconLayers },
      { to: "/services", label: "Automation", desc: "Workflows that remove friction.", icon: IconSpark },
      { to: "/services", label: "AI Solutions", desc: "Agents, chat, and prediction.", icon: IconBrain },
      { to: "/services", label: "Consulting", desc: "Growth architecture, quarterly.", icon: IconBook },
    ],
  },
  { to: "/work", label: "Work" },
  {
    to: "/about",
    label: "About",
    children: [
      { to: "/about", label: "Our Story", desc: "Kigali, 2023 — and forward.", icon: IconFlag },
      { to: "/team", label: "Team", desc: "The people doing the work.", icon: IconUsers },
      { to: "/industries", label: "Industries", desc: "Sectors we know deeply.", icon: IconGrid },
      { to: "/careers", label: "Careers", desc: "Build Nile Reach with us.", icon: IconSpark },
    ],
  },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

/* ------------------------------------------------------- magnetic link */
function MagneticItem({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.28;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.28;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };
  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      {children}
    </span>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > 160 && y > lastY.current && !openMenu);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openMenu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = useCallback(() => setOpenMenu(null), []);
  const active = nav.find((n) => n.label === openMenu);

  return (
    <header
      className={`on-dark fixed top-0 inset-x-0 z-50 transition-[transform,background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled || openMenu
          ? "bg-[#0B0B0F]/85 backdrop-blur-[30px] border-b border-white/10 shadow-[0_10px_40px_-24px_rgba(0,0,0,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
      onMouseLeave={close}
    >
      <div
        className={`mx-auto w-full max-w-[1440px] px-6 flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "h-[72px]" : "h-[92px]"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 text-white shrink-0" onMouseEnter={close}>
          <span className="grid place-items-center size-9 rounded-[12px] bg-white/95 p-1.5">
            <img src={logoAsset.url} alt="Nile Reach" className="h-full w-full object-contain" />
          </span>
          <span className="text-[15px] font-medium tracking-[-0.01em]">Nile Reach</span>
        </Link>

        {/* Centered nav */}
        <nav aria-label="Primary" className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-1 text-[14px] font-medium text-white/75">
            {nav.map((item) => (
              <li key={item.label} onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}>
                <Link
                  to={item.to}
                  className={`nav-pill relative px-4 py-2 rounded-[999px] transition-colors duration-300 hover:text-white ${
                    openMenu === item.label ? "text-white" : ""
                  }`}
                  activeProps={{ className: "text-white" }}
                >
                  <MagneticItem>{item.label}</MagneticItem>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            className="hidden md:inline-flex items-center gap-2 h-9 rounded-[999px] border border-white/15 bg-white/5 px-3 text-[12px] text-white/60 hover:text-white hover:border-white/30 transition-colors duration-300"
          >
            {IconSearch}
            <span className="hidden xl:inline">Search</span>
            <kbd className="hidden xl:inline rounded-[6px] border border-white/15 px-1.5 py-0.5 text-[10px] text-white/45">⌘K</kbd>
          </button>
          <Link
            to="/contact"
            className="btn-glow hidden sm:inline-flex items-center rounded-[12px] bg-white text-[#0B0B0F] px-4 h-9 text-[13px] font-medium transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
          >
            Book a call
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden grid place-items-center size-11 rounded-[12px] text-white hover:bg-white/10 transition"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="block space-y-[5px]">
              <span className={`block w-5 h-px bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block w-5 h-px bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mega menu */}
      {active?.children && (
        <div className="hidden lg:block absolute inset-x-0 top-full">
          <div className="mx-auto w-full max-w-[1440px] px-6">
            <div className="dropdown-in bg-white text-[#1D1D1F] rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-black/5 p-6 grid grid-cols-[1fr_260px] gap-6 mb-8">
              <div className="grid grid-cols-3 gap-1">
                {active.children.map((s) => (
                  <Link
                    key={s.label}
                    to={s.to}
                    onClick={close}
                    className="group flex items-start gap-3 rounded-[16px] p-3 transition-colors duration-300 hover:bg-[#F5F5F7]"
                  >
                    <span className="grid place-items-center size-9 shrink-0 rounded-[12px] bg-[#F5F5F7] text-[#4B2E83] transition-colors duration-300 group-hover:bg-white">
                      {s.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[14px] font-medium">{s.label}</span>
                      <span className="block text-[12.5px] leading-snug text-[#6E6E73] mt-0.5">{s.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="rounded-[16px] p-5 flex flex-col justify-between bg-[linear-gradient(150deg,#1B1035,#4B2E83_55%,#6E5BFF)] text-white">
                <div>
                  <p className="text-[11px] uppercase tracking-[1.5px] text-[#8A7CFF]">Start here</p>
                  <p className="mt-3 text-[19px] leading-[1.25] font-medium tracking-[-0.01em]">
                    A 30-minute growth diagnostic. No deck, no pitch.
                  </p>
                </div>
                <Link
                  to="/contact"
                  onClick={close}
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-[12px] bg-white px-4 py-2 text-[13px] font-medium text-[#1B1035] transition-transform duration-300 hover:scale-[1.03]"
                >
                  Book a call <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline search */}
      {searchOpen && (
        <div className="hidden md:block border-t border-white/10 bg-[#0B0B0F]/90 backdrop-blur-[30px]">
          <div className="mx-auto w-full max-w-[1440px] px-6 py-4 flex items-center gap-3 text-white/60">
            {IconSearch}
            <input
              autoFocus
              aria-label="Search Nile Reach"
              placeholder="Search services, work, insights…"
              className="w-full bg-transparent outline-none text-white placeholder:text-white/40 text-[15px]"
            />
            <button onClick={() => setSearchOpen(false)} className="text-[11px] rounded-[6px] border border-white/15 px-2 py-1 hover:text-white">
              Esc
            </button>
          </div>
        </div>
      )}

      {/* Mobile */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B0B0F]/95 backdrop-blur-[30px] px-6 pb-8 pt-4 max-h-[calc(100dvh-72px)] overflow-y-auto">
          <ul className="divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.label} className="py-1">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileSection((s) => (s === item.label ? null : item.label))}
                      aria-expanded={mobileSection === item.label}
                      className="w-full flex items-center justify-between py-3 text-[16px] text-white/85"
                    >
                      {item.label}
                      <span className={`transition-transform duration-300 ${mobileSection === item.label ? "rotate-180" : ""}`}>⌄</span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ gridTemplateRows: mobileSection === item.label ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-3 space-y-1">
                          {item.children.map((s) => (
                            <Link
                              key={s.label}
                              to={s.to}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 rounded-[12px] px-2 py-2.5 text-[14px] text-white/70 hover:bg-white/5"
                            >
                              <span className="text-white/50">{s.icon}</span>
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-[16px] text-white/85"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 flex items-center justify-center rounded-[12px] bg-white text-[#0B0B0F] px-4 py-3 text-[14px] font-medium"
          >
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
}

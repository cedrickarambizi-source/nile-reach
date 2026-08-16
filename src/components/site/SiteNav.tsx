import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NileReachMark } from "./NileReachLogo";
import { CommandPalette } from "./CommandPalette";
import { BUSINESS } from "@/lib/seo";

/**
 * Institutional two-tier navigation (Carnegie-Mellon-style):
 *  - slim utility strip with secondary destinations + phone
 *  - main white bar: wordmark left, minimal text links, search, outlined "Get a Quote"
 * Active links get a red underline; there is no glass/pill/mega-menu chrome.
 */

const utility = [
  { to: "/insights", label: "Insights" },
  { to: "/careers", label: "Careers" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact us" },
] as const;

const primary = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/work", label: "Work" },
  { to: "/case-studies", label: "Case studies" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
] as const;

const IconSearch = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="size-[18px]">
    <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-3.6-3.6" />
  </svg>
);

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // On the home page the nav floats over the cinematic hero until the user scrolls.
  const overlay = pathname === "/" && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((v) => !v);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkBase =
    `relative py-2 text-[11.5px] uppercase tracking-[0.18em] font-medium transition-colors ${
      overlay ? "text-white hover:text-white" : "text-[#1A1A1A] hover:text-[#A6192E]"
    } ` +
    "after:absolute after:left-0 after:right-0 after:-bottom-[1px] after:h-[2px] after:bg-current after:scale-x-0 " +
    "after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 print:hidden transition-colors duration-500 ${
        overlay ? "bg-transparent border-b border-white/15 text-white" : "bg-white border-b border-[#DCDCDC]"
      }`}
    >
      {/* Utility strip */}
      <div className={`hidden md:block text-white/70 transition-colors duration-500 ${overlay ? "bg-transparent" : "bg-[#1A1A1A]"}`}>
        <div className="mx-auto w-full max-w-[1400px] px-6 h-9 flex items-center justify-between text-[12px]">
          <p className="tracking-[0.08em] uppercase">Digital &amp; AI transformation · Kigali, Rwanda</p>
          <div className="flex items-center gap-6">
            {utility.map((u) => (
              <Link key={u.label} to={u.to} className="hover:text-white transition-colors">
                {u.label}
              </Link>
            ))}
            <a href={BUSINESS.phoneHref} className="hover:text-white transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto w-full max-w-[1400px] px-6 h-[76px] flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <span className={`grid place-items-center size-9 p-1.5 transition-colors duration-500 ${overlay ? "bg-white/15" : "bg-[#A6192E]"}`}>
            <NileReachMark className="h-full w-full" />
          </span>
          <span className={`text-[16px] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${overlay ? "text-white" : "text-[#A6192E]"}`}>
            Nile Reach
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {primary.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={linkBase}
                  activeProps={{ className: "text-[#A6192E] after:scale-x-100" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className={`grid place-items-center size-9 transition-colors ${overlay ? "text-white hover:text-white/70" : "text-[#1A1A1A] hover:text-[#A6192E]"}`}
          >
            {IconSearch}
          </button>
          <Link
            to="/contact"
            className={`hidden sm:inline-flex items-center px-6 h-11 text-[11px] font-medium uppercase tracking-[0.2em] border transition-colors ${
              overlay
                ? "border-white/70 text-white hover:bg-white hover:text-[#1A1A1A]"
                : "border-[#A6192E] text-[#A6192E] hover:bg-[#A6192E] hover:text-white"
            }`}
          >
            Enquire Now
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`lg:hidden grid place-items-center size-10 ${overlay ? "text-white" : "text-[#1A1A1A]"}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="block space-y-[5px]">
              <span className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <CommandPalette open={searchOpen} onClose={() => setSearchOpen(false)} />

      {mobileOpen && (
        <div className="lg:hidden border-t border-[#DCDCDC] bg-white px-6 pb-8 pt-2 max-h-[calc(100dvh-76px)] overflow-y-auto">
          <ul className="divide-y divide-[#DCDCDC]">
            {[...primary, ...utility].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3.5 text-[16px] font-medium text-[#1A1A1A]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 flex items-center justify-center bg-[#A6192E] text-white px-4 py-3.5 text-[14px] font-semibold"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}

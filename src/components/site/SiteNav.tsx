import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/careers", label: "Careers" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-nile-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="size-7 bg-nile-gold rounded-sm rotate-45 shrink-0" aria-hidden />
          <span className="font-serif text-2xl tracking-tight font-semibold">Nile Reach</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-nile-clay/70 hover:text-nile-gold transition-colors"
              activeProps={{ className: "text-nile-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-block bg-nile-gold text-nile-dark px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-white transition-colors"
          >
            Start Project
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-nile-clay p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-nile-dark/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="hover:text-nile-gold">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="text-nile-gold">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

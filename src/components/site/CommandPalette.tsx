import { useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

type Cmd = { label: string; hint: string; to: string; group: string };

const COMMANDS: Cmd[] = [
  { label: "Home", hint: "The growth thesis", to: "/", group: "Pages" },
  { label: "Services", hint: "SEO, paid media, AI", to: "/services", group: "Pages" },
  { label: "Work", hint: "Client case studies", to: "/work", group: "Pages" },
  { label: "About", hint: "Kigali, 2023 — and forward", to: "/about", group: "Pages" },
  { label: "Team", hint: "The people doing the work", to: "/team", group: "Pages" },
  { label: "Industries", hint: "Sectors we know deeply", to: "/industries", group: "Pages" },
  { label: "Pricing", hint: "RWF 300K – 1.5M monthly", to: "/pricing", group: "Pages" },
  { label: "Careers", hint: "Build Nile Reach with us", to: "/careers", group: "Pages" },
  { label: "Contact", hint: "Start a conversation", to: "/contact", group: "Pages" },
  { label: "SEO", hint: "Rank where intent already lives", to: "/services", group: "Services" },
  { label: "Paid Media", hint: "ROAS-first performance systems", to: "/services", group: "Services" },
  { label: "Brand Strategy", hint: "Positioning that travels", to: "/services", group: "Services" },
  { label: "Content Marketing", hint: "Editorial that compounds", to: "/services", group: "Services" },
  { label: "Web Development", hint: "Sites engineered to convert", to: "/services", group: "Services" },
  { label: "UI / UX", hint: "Interfaces with a point of view", to: "/services", group: "Services" },
  { label: "Automation", hint: "Workflows that remove friction", to: "/services", group: "Services" },
  { label: "AI Solutions", hint: "Agents, chat, and prediction", to: "/services", group: "Services" },
  { label: "Consulting", hint: "Growth architecture, quarterly", to: "/services", group: "Services" },
  { label: "Book a call", hint: "30-minute growth diagnostic", to: "/contact", group: "Actions" },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return COMMANDS;
    return COMMANDS.filter(
      (c) => c.label.toLowerCase().includes(needle) || c.hint.toLowerCase().includes(needle),
    );
  }, [q]);

  useEffect(() => { setIndex(0); }, [q, open]);
  useEffect(() => { if (!open) setQ(""); }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setIndex((i) => (i + 1) % Math.max(results.length, 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1)); }
      if (e.key === "Enter") {
        const r = results[index];
        if (r) { onClose(); navigate({ to: r.to }); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, index, navigate, onClose]);

  if (!open) return null;

  let lastGroup = "";

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[14vh]" role="dialog" aria-modal="true" aria-label="Command palette">
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-[#08080C]/60 backdrop-blur-[6px] animate-[fade-in_.2s_ease-out]" />
      <div className="palette-in relative w-full max-w-[640px] overflow-hidden rounded-[20px] border border-black/5 bg-[var(--nile-card)] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.45)]">
        <div className="flex items-center gap-3 border-b border-black/5 px-5 py-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-[18px] text-[#5C6864]">
            <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14ZM20 20l-3.6-3.6" strokeLinecap="round" />
          </svg>
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages, services, actions…"
            aria-label="Search Nile Reach"
            className="w-full bg-transparent text-[15px] text-[#10201C] outline-none placeholder:text-[#5C6864]"
          />
          <kbd className="rounded-[6px] border border-black/10 px-1.5 py-0.5 text-[10px] text-[#5C6864]">ESC</kbd>
        </div>
        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="px-4 py-8 text-center text-[13px] text-[#5C6864]">No matches. Try “SEO” or “pricing”.</p>
          )}
          {results.map((r, i) => {
            const header = r.group !== lastGroup ? ((lastGroup = r.group), r.group) : null;
            return (
              <div key={`${r.group}-${r.label}`}>
                {header && (
                  <p className="px-3 pb-1 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#5C6864]">{header}</p>
                )}
                <button
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => { onClose(); navigate({ to: r.to }); }}
                  className={`flex w-full items-center justify-between gap-4 rounded-[12px] px-3 py-2.5 text-left transition-colors duration-200 ${
                    i === index ? "bg-[color-mix(in_oklab,var(--nile-river)_10%,transparent)]" : ""
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate text-[14px] font-medium text-[#10201C]">{r.label}</span>
                    <span className="block truncate text-[12.5px] text-[#5C6864]">{r.hint}</span>
                  </span>
                  <span aria-hidden className="text-[13px] text-[#5C6864]">↵</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

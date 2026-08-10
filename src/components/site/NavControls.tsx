import { useEffect, useRef, useState } from "react";
import { ACCENT_THEMES, LANGS, useTheme, type Mode } from "./theme";

const MODES: { id: Mode; label: string; icon: string }[] = [
  { id: "light", label: "Light", icon: "M12 4V2M12 22v-2M4 12H2M22 12h-2M6 6 4.5 4.5M19.5 19.5 18 18M18 6l1.5-1.5M4.5 19.5 6 18M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" },
  { id: "dark", label: "Dark", icon: "M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" },
  { id: "system", label: "System", icon: "M4 5h16v10H4zM9 19h6M12 15v4" },
];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-[16px]">
      <path d={d} />
    </svg>
  );
}

function Pop({
  label,
  trigger,
  children,
}: {
  label: string;
  trigger: React.ReactNode;
  children: (close: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 items-center gap-1.5 rounded-[999px] border border-white/15 bg-white/5 px-3 text-[12px] text-white/65 transition-colors duration-300 hover:border-white/30 hover:text-white"
      >
        {trigger}
      </button>
      {open && (
        <div className="dropdown-in absolute right-0 top-[calc(100%+10px)] z-50 rounded-[16px] border border-black/5 bg-[var(--nile-card)] p-2 text-[#1A1A1A] shadow-[0_18px_50px_-20px_rgba(0,0,0,0.35)]">
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}

export function NavControls() {
  const { mode, setMode, accent, setAccent, lang, setLang, t } = useTheme();
  const current = LANGS.find((l) => l.id === lang)!;

  return (
    <>
      {/* Theme switcher: mode + 20 accents */}
      <Pop
        label={t("Theme")}
        trigger={
          <>
            <span
              className="size-[13px] rounded-full ring-1 ring-white/30"
              style={{ background: `linear-gradient(135deg, ${accent.river}, ${accent.glow})` }}
            />
            <span className="hidden xl:inline">{t("Theme")}</span>
          </>
        }
      >
        {() => (
          <div className="w-[268px]">
            <div className="grid grid-cols-3 gap-1 rounded-[12px] bg-black/[0.04] p-1">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`flex items-center justify-center gap-1.5 rounded-[9px] py-2 text-[12px] font-medium transition-all duration-300 ${
                    mode === m.id ? "bg-[var(--nile-card)] shadow-[0_2px_10px_rgba(0,0,0,0.10)]" : "text-[#5A5A5A] hover:text-[#1A1A1A]"
                  }`}
                >
                  <Icon d={m.icon} />
                  {m.label}
                </button>
              ))}
            </div>
            <p className="px-2 pb-1.5 pt-3 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#5A5A5A]">Accent</p>
            <div className="grid grid-cols-10 gap-1.5 px-1 pb-1">
              {ACCENT_THEMES.map((a) => (
                <button
                  key={a.id}
                  title={a.name}
                  aria-label={a.name}
                  aria-pressed={accent.id === a.id}
                  onClick={() => setAccent(a.id)}
                  className={`size-[20px] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-125 ${
                    accent.id === a.id ? "ring-2 ring-offset-2 ring-offset-[var(--nile-card)]" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${a.river}, ${a.glow})`,
                    boxShadow: accent.id === a.id ? `0 0 0 2px ${a.river}` : undefined,
                  }}
                />
              ))}
            </div>
            <p className="px-2 pb-1 pt-2 text-[11.5px] text-[#5A5A5A]">{accent.name}</p>
          </div>
        )}
      </Pop>

      {/* Language switcher */}
      <Pop
        label={t("Language")}
        trigger={
          <>
            <span className="text-[11px] font-semibold tracking-[0.08em]">{current.short}</span>
          </>
        }
      >
        {(close) => (
          <div className="w-[176px]">
            {LANGS.map((l) => (
              <button
                key={l.id}
                onClick={() => { setLang(l.id); close(); }}
                className={`flex w-full items-center justify-between rounded-[10px] px-3 py-2 text-[13.5px] transition-colors duration-200 hover:bg-black/[0.04] ${
                  lang === l.id ? "font-medium" : "text-[#5A5A5A]"
                }`}
              >
                {l.label}
                {lang === l.id && <span aria-hidden>✓</span>}
              </button>
            ))}
          </div>
        )}
      </Pop>
    </>
  );
}

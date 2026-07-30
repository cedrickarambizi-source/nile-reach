import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Mode = "light" | "dark" | "system";

export type AccentTheme = {
  id: string;
  name: string;
  /** primary accent */
  river: string;
  /** secondary accent */
  gold: string;
  /** soft accent */
  soft: string;
  /** glow / focus ring */
  glow: string;
};

/** 20 curated navigation / brand accent themes. */
export const ACCENT_THEMES: AccentTheme[] = [
  { id: "midnight", name: "Midnight Black", river: "#0B0B0F", gold: "#2A2A35", soft: "#6E6E73", glow: "#8A8A99" },
  { id: "pure", name: "Pure White", river: "#1D1D1F", gold: "#4A4A52", soft: "#B8B8C0", glow: "#D4D4DC" },
  { id: "royal", name: "Royal Blue", river: "#2563EB", gold: "#1D4ED8", soft: "#93C5FD", glow: "#60A5FA" },
  { id: "electric", name: "Electric Purple", river: "#7C3AED", gold: "#6D28D9", soft: "#C4B5FD", glow: "#A78BFA" },
  { id: "emerald", name: "Emerald", river: "#10B981", gold: "#059669", soft: "#6EE7B7", glow: "#34D399" },
  { id: "crimson", name: "Crimson", river: "#DC2626", gold: "#B91C1C", soft: "#FCA5A5", glow: "#F87171" },
  { id: "sunset", name: "Sunset Orange", river: "#EA580C", gold: "#C2410C", soft: "#FDBA74", glow: "#FB923C" },
  { id: "gold", name: "Luxury Gold", river: "#B58900", gold: "#FACC15", soft: "#FDE68A", glow: "#FACC15" },
  { id: "aqua", name: "Ocean Aqua", river: "#06B6D4", gold: "#0891B2", soft: "#67E8F9", glow: "#22D3EE" },
  { id: "sapphire", name: "Sapphire", river: "#1D4ED8", gold: "#2563EB", soft: "#93C5FD", glow: "#3B82F6" },
  { id: "indigo", name: "Indigo", river: "#4338CA", gold: "#7C3AED", soft: "#A78BFA", glow: "#8A7CFF" },
  { id: "rose", name: "Rose", river: "#F43F5E", gold: "#E11D48", soft: "#FDA4AF", glow: "#FB7185" },
  { id: "violet", name: "Violet", river: "#8B5CF6", gold: "#7C3AED", soft: "#C4B5FD", glow: "#A78BFA" },
  { id: "teal", name: "Teal", river: "#0F766E", gold: "#14B8A6", soft: "#5EEAD4", glow: "#2DD4BF" },
  { id: "silver", name: "Silver", river: "#64748B", gold: "#CBD5E1", soft: "#E2E8F0", glow: "#94A3B8" },
  { id: "graphite", name: "Graphite", river: "#1E293B", gold: "#334155", soft: "#94A3B8", glow: "#64748B" },
  { id: "neon", name: "Neon Green", river: "#22C55E", gold: "#16A34A", soft: "#86EFAC", glow: "#4ADE80" },
  { id: "sky", name: "Sky Blue", river: "#0284C7", gold: "#38BDF8", soft: "#BAE6FD", glow: "#38BDF8" },
  { id: "copper", name: "Copper", river: "#C2410C", gold: "#9A3412", soft: "#FDBA74", glow: "#EA8C55" },
  { id: "aurora", name: "Aurora Gradient", river: "#6E5BFF", gold: "#8A7CFF", soft: "#A9B8FF", glow: "#06B6D4" },
];

export type Lang = "en" | "fr" | "rw";

export const LANGS: { id: Lang; label: string; short: string }[] = [
  { id: "en", label: "English", short: "EN" },
  { id: "fr", label: "Français", short: "FR" },
  { id: "rw", label: "Kinyarwanda", short: "RW" },
];

export const NAV_COPY: Record<Lang, Record<string, string>> = {
  en: {
    Services: "Services", Work: "Work", About: "About", Pricing: "Pricing", Contact: "Contact",
    "Book a call": "Book a call", Search: "Search", Theme: "Theme", Language: "Language",
  },
  fr: {
    Services: "Services", Work: "Réalisations", About: "À propos", Pricing: "Tarifs", Contact: "Contact",
    "Book a call": "Réserver un appel", Search: "Rechercher", Theme: "Thème", Language: "Langue",
  },
  rw: {
    Services: "Serivisi", Work: "Imirimo", About: "Abo turi bo", Pricing: "Ibiciro", Contact: "Twandikire",
    "Book a call": "Fata igihe", Search: "Shakisha", Theme: "Insanganyamatsiko", Language: "Ururimi",
  },
};

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  resolved: "light" | "dark";
  accent: AccentTheme;
  setAccent: (id: string) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const ThemeCtx = createContext<Ctx | null>(null);

const DEFAULT_ACCENT = ACCENT_THEMES.find((a) => a.id === "indigo")!;

function applyAccent(a: AccentTheme) {
  const r = document.documentElement.style;
  r.setProperty("--nile-river", a.river);
  r.setProperty("--nile-gold", a.gold);
  r.setProperty("--nile-gold-soft", a.soft);
  r.setProperty("--glow", a.glow);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("light");
  const [accentId, setAccentId] = useState(DEFAULT_ACCENT.id);
  const [lang, setLangState] = useState<Lang>("en");
  const [systemDark, setSystemDark] = useState(false);

  // hydrate from storage
  useEffect(() => {
    const m = localStorage.getItem("nr-mode") as Mode | null;
    const a = localStorage.getItem("nr-accent");
    const l = localStorage.getItem("nr-lang") as Lang | null;
    if (m) setModeState(m);
    if (a && ACCENT_THEMES.some((x) => x.id === a)) setAccentId(a);
    if (l) setLangState(l);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const resolved: "light" | "dark" = mode === "system" ? (systemDark ? "dark" : "light") : mode;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolved === "dark");
    document.documentElement.style.colorScheme = resolved;
  }, [resolved]);

  const accent = useMemo(
    () => ACCENT_THEMES.find((a) => a.id === accentId) ?? DEFAULT_ACCENT,
    [accentId],
  );

  useEffect(() => { applyAccent(accent); }, [accent]);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    localStorage.setItem("nr-mode", m);
  }, []);
  const setAccent = useCallback((id: string) => {
    setAccentId(id);
    localStorage.setItem("nr-accent", id);
  }, []);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("nr-lang", l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback((key: string) => NAV_COPY[lang][key] ?? key, [lang]);

  const value = useMemo(
    () => ({ mode, setMode, resolved, accent, setAccent, lang, setLang, t }),
    [mode, setMode, resolved, accent, setAccent, lang, setLang, t],
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

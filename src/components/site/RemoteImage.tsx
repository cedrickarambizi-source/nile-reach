import { useEffect, useRef, useState } from "react";
import {
  screenshotUrl,
  screenshotFallbackUrl,
  faviconUrl,
  faviconFallbackUrl,
} from "@/lib/projects";

const MAX_ROUNDS = 2; // full passes over all sources before giving up
const RETRY_DELAY = 1200; // ms between passes — screenshot APIs often need a warm-up

/**
 * Website screenshot with a loading skeleton and graceful retry: it cycles
 * every source, waits, then retries the whole list with a cache-busting
 * parameter before falling back to a branded placeholder.
 */
export function SiteShot({
  domain,
  name,
  className = "",
  imgClassName = "",
}: {
  domain?: string;
  name: string;
  className?: string;
  imgClassName?: string;
}) {
  const sources = [screenshotUrl(domain), screenshotFallbackUrl(domain)].filter(
    Boolean,
  ) as string[];

  const [step, setStep] = useState(0);
  const [round, setRound] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const base = sources[step];
  const exhausted = round >= MAX_ROUNDS;

  function handleError() {
    if (step + 1 < sources.length) {
      setStep(step + 1);
      return;
    }
    if (round + 1 < MAX_ROUNDS) {
      timer.current = setTimeout(() => {
        setStep(0);
        setRound((r) => r + 1);
      }, RETRY_DELAY);
      return;
    }
    setRound(MAX_ROUNDS);
  }

  if (!base || exhausted) {
    return <ShotPlaceholder name={name} className={`${className} grid`} />;
  }

  const src = round === 0 ? base : `${base}${base.includes("?") ? "&" : "?"}r=${round}`;

  return (
    <div className={`relative overflow-hidden bg-[#F2F2F2] ${className}`}>
      {!loaded && <ShotSkeleton name={name} />}
      <img
        key={src}
        src={src}
        alt={`${name} website preview`}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={handleError}
        className={`relative h-full w-full object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}

/** Shimmering placeholder shown while a screenshot is still rendering. */
function ShotSkeleton({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 skeleton-shimmer" aria-hidden="true">
      <div className="absolute inset-0 grid place-items-center px-6 text-center">
        <div>
          <div className="text-lg md:text-xl font-semibold tracking-tight text-[#1A1A1A]/45">
            {name}
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#A6192E]/55">
            Loading preview
          </p>
        </div>
      </div>
    </div>
  );
}

function ShotPlaceholder({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div className={`grid place-items-center bg-[#F2F2F2] ${className}`}>
      <div className="text-center px-6">
        <div className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1A1A1A]">
          {name}
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">
          Nile Reach client
        </p>
      </div>
    </div>
  );
}

/**
 * Client favicon with a skeleton while loading, a secondary icon provider,
 * and a monogram fallback so the slot is never empty.
 */
export function SiteFavicon({
  domain,
  name = "",
  className = "size-5 rounded-sm",
}: {
  domain?: string;
  name?: string;
  className?: string;
}) {
  const sources = [faviconUrl(domain), faviconFallbackUrl(domain)].filter(
    Boolean,
  ) as string[];
  const [step, setStep] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const src = sources[step];

  if (!src) return <Monogram name={name} className={className} />;

  return (
    <span className={`relative inline-block ${className}`}>
      {!loaded && (
        <span className="absolute inset-0 skeleton-shimmer rounded-sm" aria-hidden="true" />
      )}
      <img
        key={src}
        src={src}
        alt={name ? `${name} logo` : ""}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setStep((s) => s + 1)}
        className={`h-full w-full object-contain transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

function Monogram({ name, className = "" }: { name?: string; className?: string }) {
  const initial = (name || "N").trim().charAt(0).toUpperCase();
  return (
    <span
      className={`grid place-items-center bg-[#A6192E]/10 text-[10px] font-semibold text-[#A6192E] ${className}`}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

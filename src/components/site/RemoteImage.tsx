import { useState } from "react";
import {
  screenshotUrl,
  screenshotFallbackUrl,
  faviconUrl,
  faviconFallbackUrl,
} from "@/lib/projects";

/**
 * Website screenshot with graceful degradation: primary source (Microlink),
 * then a secondary renderer, then a branded placeholder — so a third-party
 * outage never leaves a broken-image icon on the page.
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
  const [loaded, setLoaded] = useState(false);
  const src = sources[step];

  if (!src) return <ShotPlaceholder name={name} className={className} />;

  return (
    <div className={`relative overflow-hidden bg-[#F2F2F2] ${className}`}>
      {!loaded && <ShotPlaceholder name={name} className="absolute inset-0" />}
      <img
        key={src}
        src={src}
        alt={`${name} website preview`}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setStep((s) => s + 1)}
        className={`relative h-full w-full object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClassName}`}
      />
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

/** Client favicon with a secondary icon provider and silent removal on failure. */
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
  const src = sources[step];
  if (!src) return null;

  return (
    <img
      key={src}
      src={src}
      alt={name ? `${name} logo` : ""}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setStep((s) => s + 1)}
      className={className}
    />
  );
}

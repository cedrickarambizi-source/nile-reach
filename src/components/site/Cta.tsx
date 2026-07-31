import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Shared arrow-out icon for external "visit live site" style CTAs.
 * Previously duplicated inline in ProjectCard.tsx and work.tsx.
 */
export function ExternalLinkIcon({ className = "size-[11px]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden
      className={className}
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

type CtaVariant = "solid-dark" | "solid-light" | "outline-light";
type CtaSize = "default" | "sm";

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all " +
  "active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<CtaVariant, string> = {
  // Dark pill on light surfaces — e.g. "Visit live website", "Live site"
  "solid-dark": "bg-[#1D1D1F] text-white hover:bg-[#4B2E83] focus-visible:ring-[#4B2E83]",
  // White pill on dark sections — primary CTA on hero/footer
  "solid-light":
    "bg-white text-[#0A0A1F] hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.35)] focus-visible:ring-white",
  // Transparent pill on dark sections — secondary CTA
  "outline-light": "border border-white/25 text-white hover:border-white/60 focus-visible:ring-white/60",
};

const sizeStyles: Record<CtaSize, string> = {
  default: "gap-2 px-7 py-3.5 text-sm",
  sm: "gap-1.5 px-3.5 py-1.5 text-[12px]",
};

function ctaClassName(variant: CtaVariant, size: CtaSize, className?: string) {
  return [base, variantStyles[variant], sizeStyles[size], className].filter(Boolean).join(" ");
}

// Elegant, physical easing already used elsewhere on the site (ProjectCard hover) —
// reused here so every CTA moves with the same "confident, smooth, never bouncy" feel.
const motion = { transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)", transitionDuration: "300ms" };

interface CtaProps {
  /** Internal route, e.g. "/contact" — renders a TanStack Router Link */
  to?: string;
  /** Hash to scroll to on the target route */
  hash?: string;
  /** External or absolute URL — renders an <a>. Auto-adds target=_blank + rel for http(s) links. */
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: CtaVariant;
  size?: CtaSize;
  className?: string;
  children: ReactNode;
}

export function Cta({
  to,
  hash,
  href,
  target,
  rel,
  onClick,
  type = "button",
  disabled,
  variant = "solid-dark",
  size = "default",
  className,
  children,
}: CtaProps) {
  const cls = ctaClassName(variant, size, className);

  if (to) {
    return (
      <Link to={to} hash={hash} className={cls} style={motion} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={cls}
        style={motion}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={cls} style={motion} onClick={onClick}>
      {children}
    </button>
  );
}

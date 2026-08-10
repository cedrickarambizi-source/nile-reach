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
  "inline-flex items-center justify-center font-semibold transition-all " +
  "active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<CtaVariant, string> = {
  // Red block on light surfaces — e.g. "Visit live website", "Live site"
  "solid-dark": "bg-[#A6192E] text-white hover:bg-[#1A1A1A] focus-visible:ring-[#A6192E]",
  // White block on red/dark sections — primary CTA
  "solid-light": "bg-white text-[#A6192E] hover:bg-[#1A1A1A] hover:text-white focus-visible:ring-white",
  // Outlined block on red/dark sections — secondary CTA
  "outline-light": "border border-white/60 text-white hover:bg-white hover:text-[#A6192E] focus-visible:ring-white",
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

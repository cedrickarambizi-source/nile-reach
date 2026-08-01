// Shared SEO constants and helpers, used across route head() functions.

export const SITE_URL = "https://nilereach.site";
export const SITE_NAME = "Nile Reach";

/** Real, currently-verified business contact info — keep in sync with SiteFooter. */
export const BUSINESS = {
  phone: "+250 796 692 269",
  phoneHref: "tel:+250796692269",
  email: "hello@nilereach.rw",
  addressLine: "Remera, Kigali, Rwanda",
  locality: "Kigali",
  country: "RW",
};

/**
 * Canonical link tag for a route. Pass the route's own path, e.g. "/" or "/about".
 * Prevents duplicate-content ambiguity (e.g. trailing slashes, alternate domains)
 * by telling search engines exactly which URL is the authoritative one to index.
 */
export function canonical(path: string) {
  const clean = path === "/" ? "/" : path.replace(/\/+$/, "");
  return { rel: "canonical", href: `${SITE_URL}${clean}` } as const;
}

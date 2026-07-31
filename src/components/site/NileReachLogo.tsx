import logoUrl from "@/assets/nile-reach-logo.png";

/**
 * Nile Reach brand mark — the real logo file, imported directly from
 * source so Vite bundles and hashes it like any other static asset.
 *
 * Previously this only existed as a Lovable-hosted asset reference
 * (src/assets/nile-reach-logo.png.asset.json pointing at a
 * `/__l5e/assets-v1/...` URL). That URL only resolves inside Lovable's
 * own preview/editor — once the site is deployed elsewhere (or viewed
 * outside Lovable), the request 404s and the browser shows a
 * broken-image icon. Bundling the actual file means it always renders,
 * everywhere, with no dependency on Lovable's infrastructure.
 */
export function NileReachMark({ className = "size-6" }: { className?: string }) {
  return <img src={logoUrl} alt="Nile Reach" className={`${className} object-contain`} />;
}

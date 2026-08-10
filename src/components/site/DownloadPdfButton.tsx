/**
 * "Download PDF" via the browser's native print pipeline.
 *
 * Why not generate an actual .pdf file? This site deploys to Cloudflare
 * Workers (see wrangler config in .output), which has no filesystem and no
 * headless-browser support — the usual server-side PDF renderers (Puppeteer,
 * etc.) can't run there. The browser's own print engine already produces a
 * proper, selectable-text, correctly-paginated PDF when the user picks
 * "Save as PDF" — and it respects the print:* styles already added to
 * PageHeader/SiteNav/SiteFooter, so the output looks clean, not like a
 * screenshot of the live page.
 */
export function DownloadPdfButton({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const variantClass =
    variant === "dark"
      ? "border-white/25 text-white hover:border-white/60"
      : "border-black/15 text-[#1A1A1A] hover:border-[#A6192E] hover:text-[#A6192E]";
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`print:hidden inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${variantClass} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4" aria-hidden>
        <path d="M12 3v12m0 0-4-4m4 4 4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
      </svg>
      Download PDF
    </button>
  );
}

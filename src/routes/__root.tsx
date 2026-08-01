import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportNileReachError } from "../lib/nilereach-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { ThemeProvider } from "../components/site/theme";
import { SmoothScroll } from "../components/site/SmoothScroll";
import { SiteFooter } from "../components/site/SiteFooter";
import { SITE_URL, BUSINESS } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nile-dark px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="font-serif text-6xl text-nile-clay">Page not found</h1>
        <p className="mt-4 text-sm text-nile-clay/60">
          The current has carried this page elsewhere.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 bg-nile-gold text-nile-dark px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportNileReachError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-nile-dark px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">Something went wrong</p>
        <h1 className="font-serif text-4xl text-nile-clay">This page didn't load</h1>
        <p className="mt-4 text-sm text-nile-clay/60">
          Try again, or head back to steady ground.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-nile-gold text-nile-dark px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-white/15 text-nile-clay px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:border-nile-gold hover:text-nile-gold transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nile Reach — AI-Powered Digital Growth Agency, Kigali" },
      {
        name: "description",
        content:
          "Nile Reach is a Kigali-based digital & AI marketing agency helping ambitious brands across Africa scale faster with SEO, paid media, automation, and design.",
      },
      { name: "author", content: "Nile Reach" },
      { property: "og:title", content: "Nile Reach — AI-Powered Digital Growth Agency, Kigali" },
      {
        property: "og:description",
        content:
          "Nile Reach is a Kigali-based digital & AI marketing agency helping ambitious brands across Africa scale faster with SEO, paid media, automation, and design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nile Reach — AI-Powered Digital Growth Agency, Kigali" },
      { name: "twitter:description", content: "Nile Reach is a Kigali-based digital & AI marketing agency helping ambitious brands across Africa scale faster with SEO, paid media, automation, and design." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CIXySmq6NVPtxaCSZTCkXQ2dMEX2/social-images/social-1784828181479-8fe6e9db-8391-4287-8b7e-8f594235a979.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/CIXySmq6NVPtxaCSZTCkXQ2dMEX2/social-images/social-1784828181479-8fe6e9db-8391-4287-8b7e-8f594235a979.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#organization`,
              name: "Nile Reach",
              url: `${SITE_URL}/`,
              logo: `${SITE_URL}/logo.png`,
              image: `${SITE_URL}/logo.png`,
              description:
                "Nile Reach is a Kigali-based digital & AI marketing agency helping ambitious brands across Africa scale faster with SEO, paid media, automation, and design.",
              telephone: BUSINESS.phoneHref.replace("tel:", ""),
              email: BUSINESS.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Remera",
                addressLocality: BUSINESS.locality,
                addressCountry: BUSINESS.country,
              },
              areaServed: ["Rwanda", "East Africa"],
              priceRange: "$$",
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "Nile Reach",
              url: `${SITE_URL}/`,
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
      <SmoothScroll />
      <div className="min-h-screen bg-white text-[#1D1D1F]">
        <SiteNav />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
        <a
          href="https://wa.me/250796692269?text=Hi%20Nile%20Reach%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.65a11.87 11.87 0 0 0 5.74 1.46h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.17-1.24-6.16-3.43-8.44zM12.06 21.3h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.75.98 1-3.65-.22-.37a9.4 9.4 0 0 1-1.44-4.86c0-5.19 4.22-9.41 9.41-9.41 2.51 0 4.87.98 6.64 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.19-4.22 9.41-9.25 9.41zm5.16-7.05c-.28-.14-1.67-.83-1.93-.92-.26-.09-.45-.14-.63.14-.19.28-.72.92-.88 1.11-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.09-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.33 0 1.38 1 2.7 1.14 2.89.14.19 1.97 3.01 4.78 4.22.67.29 1.19.47 1.6.6.67.21 1.28.18 1.76.11.54-.08 1.67-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33z"/>
          </svg>
          WhatsApp
        </a>
      </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}



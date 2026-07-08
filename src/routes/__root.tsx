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
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";

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
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
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
      { title: "Nile Reach — Digital & AI Marketing Agency, Kigali" },
      {
        name: "description",
        content:
          "Nile Reach is a Kigali-based Digital & AI Marketing Agency helping retail, healthcare, e-commerce and corporate brands grow across Africa and globally.",
      },
      { name: "author", content: "Nile Reach" },
      { property: "og:title", content: "Nile Reach — Digital & AI Marketing Agency" },
      {
        property: "og:description",
        content:
          "Digital and AI marketing built in Kigali, reaching across Africa. SEO, paid media, branding, web design and AI automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@300;400;500;600;700&display=swap",
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
      <div className="min-h-screen bg-nile-dark text-nile-clay">
        <SiteNav />
        <main className="pt-0">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

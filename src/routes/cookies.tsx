import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { BUSINESS, canonical } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Notice — Nile Reach" },
      {
        name: "description",
        content:
          "Which cookies and local storage nilereach.site uses, what each one does, and how to switch them off in your browser.",
      },
      { property: "og:title", content: "Cookie Notice — Nile Reach" },
      { property: "og:description", content: "The short list of cookies and local storage this site uses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [canonical("/cookies")],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Notice"
      intro="A short, honest list of what this site stores in your browser and why."
      updated="1 August 2026"
      sections={[
        {
          heading: "Preferences stored on your device",
          body: (
            <p>
              This site saves three preferences in your browser's local storage: your colour mode (light, dark
              or system), your chosen accent theme, and your language. They never leave your device and are not
              used to identify you.
            </p>
          ),
        },
        {
          heading: "Analytics",
          body: (
            <p>
              We use aggregated page analytics to see which pages are read and which are ignored. These are
              counted at the page level, not tied to a named individual, and we do not run advertising or
              retargeting pixels on this site.
            </p>
          ),
        },
        {
          heading: "Third-party embeds",
          body: (
            <p>
              Client logos are loaded from Google's public favicon service and fonts are served by Google
              Fonts. Those requests are subject to Google's own policies.
            </p>
          ),
        },
        {
          heading: "Turning them off",
          body: (
            <p>
              Clearing site data in your browser removes the stored preferences. The site continues to work; it
              simply forgets your theme and language choice. Questions: {BUSINESS.email}.
            </p>
          ),
        },
      ]}
    />
  );
}

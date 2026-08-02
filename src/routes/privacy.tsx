import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { BUSINESS, canonical } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nile Reach" },
      {
        name: "description",
        content:
          "How Nile Reach collects, uses and protects the personal information submitted through nilereach.site and during client engagements.",
      },
      { property: "og:title", content: "Privacy Policy — Nile Reach" },
      { property: "og:description", content: "What data we collect, why we collect it, and how to have it removed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [canonical("/privacy")],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect when you contact Nile Reach, why we collect it, and how to have it deleted."
      updated="1 August 2026"
      sections={[
        {
          heading: "Who we are",
          body: (
            <p>
              Nile Reach Ltd is a digital transformation and AI consultancy registered in Rwanda, based in
              Remera, Kigali. You can reach us at {BUSINESS.email} or {BUSINESS.phone}.
            </p>
          ),
        },
        {
          heading: "What we collect",
          body: (
            <p>
              Information you submit through the consultation form — name, company, email, phone number,
              sector and the description of your objective. We also collect basic, aggregated analytics about
              page visits so we know which pages are useful. We do not buy or sell contact lists.
            </p>
          ),
        },
        {
          heading: "Why we collect it",
          body: (
            <p>
              Solely to respond to your inquiry, prepare a proposal, and deliver work you have engaged us for.
              We do not use your details for unrelated marketing without asking you first.
            </p>
          ),
        },
        {
          heading: "How long we keep it",
          body: (
            <p>
              Inquiry records are kept for 24 months. Client project records are kept for the duration of the
              engagement plus seven years, where Rwandan accounting rules require it.
            </p>
          ),
        },
        {
          heading: "Sharing",
          body: (
            <p>
              We share data only with the service providers needed to run our business — email hosting,
              analytics, and cloud infrastructure — and only to the extent required. We never sell it.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You can ask us for a copy of what we hold about you, ask for it to be corrected, or ask for it to
              be deleted. Email {BUSINESS.email} and we will respond within 30 days.
            </p>
          ),
        },
      ]}
    />
  );
}

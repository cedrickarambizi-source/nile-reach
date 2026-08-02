import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { BUSINESS, canonical } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Nile Reach" },
      {
        name: "description",
        content:
          "The terms that govern Nile Reach consulting, development and retainer engagements, including scope, payment, ownership and confidentiality.",
      },
      { property: "og:title", content: "Terms of Service — Nile Reach" },
      { property: "og:description", content: "Scope, payment, ownership and confidentiality for Nile Reach engagements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [canonical("/terms")],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The working agreement behind every Nile Reach engagement — scope, payment, ownership and confidentiality."
      updated="1 August 2026"
      sections={[
        {
          heading: "Scope of work",
          body: (
            <p>
              Every engagement is defined in a written proposal listing deliverables, timeline and price. Work
              outside that document is quoted separately before it starts. Nothing on this website constitutes
              an offer or a fixed quotation.
            </p>
          ),
        },
        {
          heading: "Payment",
          body: (
            <p>
              Monthly retainers are invoiced in advance and payable within 14 days. One-time projects are
              invoiced 50% on signature and 50% on delivery. Prices are quoted in Rwandan Francs, exclusive of
              VAT where applicable.
            </p>
          ),
        },
        {
          heading: "Client responsibilities",
          body: (
            <p>
              Delivery depends on timely access to accounts, content, approvals and a named decision-maker. If
              those are delayed, timelines move accordingly.
            </p>
          ),
        },
        {
          heading: "Ownership",
          body: (
            <p>
              On full payment, you own the websites, brand assets, content and configurations we produce for
              you, along with the accounts they run on. We retain ownership of our internal frameworks,
              templates and tooling.
            </p>
          ),
        },
        {
          heading: "Confidentiality",
          body: (
            <p>
              Commercial information shared with us stays confidential. We will not publish a client as a case
              study without written permission.
            </p>
          ),
        },
        {
          heading: "Termination",
          body: (
            <p>
              Retainers may be ended by either party with 30 days written notice. Work completed up to the end
              of the notice period remains payable.
            </p>
          ),
        },
        {
          heading: "Questions",
          body: (
            <p>
              Write to {BUSINESS.email} or call {BUSINESS.phone}. These terms are governed by the laws of
              Rwanda.
            </p>
          ),
        },
      ]}
    />
  );
}

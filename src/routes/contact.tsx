import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { useState } from "react";
import { BUSINESS, canonical } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Consultation — Nile Reach" },
      {
        name: "description",
        content:
          "Book a strategy consultation or request a free digital growth audit with Nile Reach — digital transformation and AI growth consulting in Kigali, Rwanda.",
      },
      { property: "og:title", content: "Book a Strategy Consultation — Nile Reach" },
      {
        property: "og:description",
        content: "Talk to a Nile Reach consultant about digital growth, AI automation and technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/contact")],
  }),
  component: Contact,
});

const goals = [
  "Digital transformation consulting",
  "AI & business automation",
  "Digital growth marketing",
  "Website or software project",
  "Data & analytics",
  "Free digital growth audit",
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Strategy consultation"
        title={<>Let's find the growth<br />hiding in your business.</>}
        intro="Share where you are today and we'll come back within one working day with times for a consultation — or with your free digital growth audit."
        scene="prism"
      />

      <section id="audit" className="bg-white py-24 md:py-32 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.75fr_1.25fr] gap-16">
          <aside className="space-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-3">Office</p>
              <p className="text-xl font-semibold text-[#1A1A1A] tracking-tight">{BUSINESS.addressLine}</p>
              <p className="text-sm text-[#5A5A5A] mt-1">By appointment</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-3">Email</p>
              <a href={`mailto:${BUSINESS.email}`} className="text-xl font-semibold text-[#1A1A1A] hover:text-[#A6192E] transition-colors">
                {BUSINESS.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-3">Phone &amp; WhatsApp</p>
              <a href={BUSINESS.phoneHref} className="text-xl font-semibold text-[#1A1A1A] hover:text-[#A6192E] transition-colors">
                {BUSINESS.phone}
              </a>
            </div>
            <div className="rounded-none border border-black/8 bg-[#F2F2F2] p-7">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-3">Consultation slots</p>
              <p className="text-[15px] text-[#3F4B47] leading-relaxed">
                Monday – Friday, 09:00 – 17:00 CAT. Sessions run 45 minutes, remotely or at our Kigali
                office, with a senior consultant — not a sales rep.
              </p>
              <ul className="mt-5 space-y-2 text-[14px] text-[#5A5A5A]">
                <li>— Review of your current digital position</li>
                <li>— Two or three prioritised opportunities</li>
                <li>— Indicative roadmap and investment range</li>
              </ul>
            </div>
          </aside>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-none border border-black/8 bg-[#F2F2F2] p-8 md:p-10 space-y-6"
          >
            {sent ? (
              <div className="py-16 text-center">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E] mb-4">Thank you</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-3">
                  Your request is in.
                </h2>
                <p className="text-[#5A5A5A]">A consultant will reply within one working day.</p>
              </div>
            ) : (
              <>
                <div>
                  <h2 className="text-2xl font-semibold text-[#1A1A1A] tracking-tight">Book a consultation</h2>
                  <p className="mt-2 text-[15px] text-[#5A5A5A]">
                    Prefer to talk now? Call {BUSINESS.phone}.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Full name" name="name" placeholder="Jean-Luc Munyaneza" />
                  <Field label="Work email" name="email" type="email" placeholder="you@company.com" />
                  <Field label="Company" name="company" placeholder="Company Ltd." />
                  <Field label="Phone" name="phone" type="tel" placeholder="+250 ..." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="goal" className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">
                    What do you need help with?
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    className="w-full rounded-none bg-white border border-black/10 p-4 text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#A6192E] transition-colors"
                  >
                    {goals.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Preferred date" name="date" type="date" />
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">
                      Preferred time
                    </label>
                    <select
                      id="time"
                      name="time"
                      className="w-full rounded-none bg-white border border-black/10 p-4 text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#A6192E] transition-colors"
                    >
                      {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((t) => (
                        <option key={t}>{t} CAT</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="brief" className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">
                    Where is growth stalling today?
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    rows={5}
                    required
                    maxLength={1000}
                    className="w-full rounded-none bg-white border border-black/10 p-4 text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#A6192E] transition-colors resize-y"
                    placeholder="Tell us about your business, market and timeline."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full py-4 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-[#A6192E] transition-colors"
                >
                  Book consultation →
                </button>
                <p className="text-[13px] text-[#5A5A5A] text-center">
                  No obligation. We'll confirm the slot by email.
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.22em] text-[#A6192E]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={120}
        placeholder={placeholder}
        className="w-full rounded-none bg-white border border-black/10 p-4 text-[15px] text-[#1A1A1A] focus:outline-none focus:border-[#A6192E] transition-colors"
      />
    </div>
  );
}

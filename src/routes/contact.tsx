import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "../components/site/PageHeader";
import { useState } from "react";
import { BUSINESS, canonical } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nile Reach" },
      { name: "description", content: "Talk to Nile Reach about your next digital or AI marketing project. Based in Kigali, Rwanda." },
      { property: "og:title", content: "Contact Nile Reach" },
      { property: "og:description", content: "Start a project with a Kigali-based digital and AI marketing agency." },
    ],
    links: [canonical("/contact")],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title={<>Tell us where you want to reach.</>}
        intro="Share a little about your business and we'll come back within one working day."
      />
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
          <aside className="space-y-10">
            <div>
              <p className="eyebrow mb-3">Office</p>
              <p className="font-serif text-2xl">{BUSINESS.addressLine}</p>
              <p className="text-sm text-nile-clay/50 mt-2">By appointment</p>
            </div>
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a href={`mailto:${BUSINESS.email}`} className="font-serif text-2xl hover:text-nile-gold transition-colors">
                {BUSINESS.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Phone</p>
              <a href={BUSINESS.phoneHref} className="font-serif text-2xl hover:text-nile-gold transition-colors">
                {BUSINESS.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-3">Follow</p>
              <div className="flex gap-4 text-sm uppercase tracking-[0.2em] text-nile-clay/70">
                <a href="#" className="hover:text-nile-gold">LinkedIn</a>
                <a href="#" className="hover:text-nile-gold">Instagram</a>
                <a href="#" className="hover:text-nile-gold">X</a>
              </div>
            </div>
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass-layer rounded-xl p-10 space-y-6"
          >
            {sent ? (
              <div className="py-12 text-center">
                <p className="eyebrow mb-4">Thank you</p>
                <h2 className="font-serif text-4xl mb-3">We'll be in touch.</h2>
                <p className="text-nile-clay/60">Expect a reply within one working day.</p>
              </div>
            ) : (
              <>
                <Field label="Full name" name="name" placeholder="Jean-Luc Munyaneza" />
                <Field label="Work email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Company" name="company" placeholder="Company Ltd." />
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-nile-gold">
                    What are you looking to grow?
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 p-4 text-nile-clay focus:outline-none focus:border-nile-gold transition-colors resize-y"
                    placeholder="Tell us about your business, market and timeline."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-nile-gold text-nile-dark font-bold uppercase tracking-[0.25em] text-xs hover:bg-white transition-all"
                >
                  Send inquiry
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[10px] uppercase tracking-widest font-bold text-nile-gold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 p-4 text-nile-clay focus:outline-none focus:border-nile-gold transition-colors"
      />
    </div>
  );
}

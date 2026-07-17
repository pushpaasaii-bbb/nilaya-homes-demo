"use client";
import Link from "next/link";

import { FormEvent, useState } from "react";
import { site } from "../lib/site";

export default function ContactPage() {
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const subject = encodeURIComponent(`Furniture enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nRequirement:\n${message}`,
    );

    setStatusMessage(
      "Your email app will now open with this enquiry. Replace the demo email in app/lib/site.ts before publishing.",
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">
      <nav className="border-b border-black/5 bg-[#f8f5ef]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-2xl font-semibold">
            {site.shortName}
            <span className="text-[#9a6d3c]">.</span>
          </Link>

          <Link href="/"
            className="rounded-full border border-[#1d1b18]/20 px-4 py-2 text-sm font-semibold transition hover:bg-[#1d1b18] hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            CONTACT & VISIT
          </p>

          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
            Let&apos;s find furniture that feels right at home.
          </h1>

          <p className="mt-6 leading-7 text-[#625d56]">
            Visit the showroom, ask about a product, or share your custom
            furniture idea with our team.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-3xl bg-[#28231e] p-8 text-[#f8f5ef]">
            <p className="text-xs font-bold tracking-[0.2em] text-[#e6c292]">
              SHOWROOM DETAILS
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-[#cfc4b7]">
                  ADDRESS
                </p>
                <p className="mt-2 leading-7">{site.address}</p>
                <p className="mt-1 text-sm text-[#d8d0c7]">{site.city}</p>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-[#cfc4b7]">
                  PHONE
                </p>
                <a
                  href={site.phoneLink}
                  className="mt-2 inline-block text-lg font-semibold hover:text-[#e6c292]"
                >
                  {site.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-[#cfc4b7]">
                  EMAIL
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-block break-all hover:text-[#e6c292]"
                >
                  {site.email}
                </a>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.12em] text-[#cfc4b7]">
                  WORKING HOURS
                </p>
                <p className="mt-2 leading-7">{site.workingHours}</p>
              </div>
            </div>

            <p className="mt-10 border-t border-white/15 pt-5 text-xs leading-5 text-[#cfc4b7]">
              Demo note: Replace all showroom details in{" "}
              <code className="text-[#e6c292]">app/lib/site.ts</code> before
              publishing for a real client.
            </p>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="font-serif text-3xl">Send an enquiry</h2>
            <p className="mt-3 text-sm leading-6 text-[#625d56]">
              Tell us what you are looking for. This demo form opens an email
              draft with your enquiry details.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Your Name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-[#f8f5ef] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                />
              </label>

              <label className="text-sm font-semibold">
                Phone Number
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-[#f8f5ef] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold">
              What do you need?
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Example: I need a custom wardrobe for my bedroom."
                className="mt-2 w-full resize-none rounded-xl border border-[#1d1b18]/15 bg-[#f8f5ef] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
              />
            </label>

            <button
              type="submit"
              className="mt-6 rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9a6d3c]"
            >
              Prepare Email Enquiry
            </button>

            {statusMessage ? (
              <p className="mt-4 text-sm leading-6 text-[#625d56]">
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
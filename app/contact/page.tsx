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

    const whatsappMessage = encodeURIComponent(
      `Hello AURA Furnitures & Interiors,\n\nI would like to enquire.\n\nName: ${name}\nPhone: ${phone}\n\nRequirement:\n${message}`,
    );

    setStatusMessage("Opening WhatsApp with your enquiry details...");

    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">
      <nav className="border-b border-black/5 bg-[#f8f5ef]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-2xl font-semibold">
            {site.shortName}
            <span className="text-[#9a6d3c]">.</span>
          </Link>

          <Link
            href="/"
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
            Call, WhatsApp, visit us, or share your furniture requirement with
            our team. We are ready to help you create a beautiful space.
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
                  CALL US
                </p>
                <a
                  href={site.phoneLink}
                  className="mt-2 inline-block text-lg font-semibold transition hover:text-[#e6c292]"
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
                  className="mt-2 inline-block break-all transition hover:text-[#e6c292]"
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

            <div className="mt-10 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href={site.phoneLink}
                className="rounded-full bg-[#f8f5ef] px-5 py-3 text-center text-sm font-bold text-[#1d1b18] transition hover:bg-[#e6c292]"
              >
                Call Now
              </a>

              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-bold text-[#102b18] transition hover:bg-[#7ee89e]"
              >
                WhatsApp Us
              </a>

              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 px-5 py-3 text-center text-sm font-bold transition hover:bg-white hover:text-[#1d1b18]"
              >
                Get Directions
              </a>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-6 shadow-sm sm:p-8"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[#9a6d3c]">
              QUICK ENQUIRY
            </p>

            <h2 className="mt-3 font-serif text-3xl">
              Send your requirement on WhatsApp
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#625d56]">
              Fill in the details below. When you submit, WhatsApp will open
              with your enquiry already prepared for AURA.
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
                  inputMode="numeric"
                  placeholder="Enter your phone number"
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-[#f8f5ef] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold">
              What furniture do you need?
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Example: I need a custom wardrobe for my bedroom. My room size is..."
                className="mt-2 w-full resize-none rounded-xl border border-[#1d1b18]/15 bg-[#f8f5ef] px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
              />
            </label>

            <button
              type="submit"
              className="mt-6 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#102b18] transition hover:bg-[#7ee89e]"
            >
              Send Enquiry on WhatsApp
            </button>

            {statusMessage ? (
              <p className="mt-4 text-sm leading-6 text-[#625d56]">
                {statusMessage}
              </p>
            ) : null}

            <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-[#f8f5ef] p-6">
              <p className="text-xs font-bold tracking-[0.18em] text-[#9a6d3c]">
                VISIT OUR SHOWROOM
              </p>
              <p className="mt-3 font-serif text-2xl">{site.city}</p>
              <p className="mt-2 leading-7 text-[#625d56]">{site.address}</p>

              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-bold underline underline-offset-4"
              >
                Open location in Google Maps →
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
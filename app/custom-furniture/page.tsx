"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "../lib/site";

const processSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us what you need, your preferred style, room measurements, and budget.",
  },
  {
    number: "02",
    title: "Get Design & Quote",
    description:
      "Our team discusses the right material, finish, design, and pricing with you.",
  },
  {
    number: "03",
    title: "Crafted for Your Space",
    description:
      "Your furniture is carefully made to suit your home, office, or interior project.",
  },
  {
    number: "04",
    title: "Delivery & Installation",
    description:
      "We arrange delivery and help make sure your new furniture fits beautifully.",
  },
];

export default function CustomFurniturePage() {
  const [statusMessage, setStatusMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const furnitureType = formData.get("furnitureType")?.toString() || "";
    const room = formData.get("room")?.toString() || "";
    const measurements = formData.get("measurements")?.toString() || "";
    const material = formData.get("material")?.toString() || "";
    const colour = formData.get("colour")?.toString() || "";
    const budget = formData.get("budget")?.toString() || "";
    const details = formData.get("details")?.toString() || "";

    const whatsappMessage = encodeURIComponent(
      `Hello AURA Furnitures & Interiors,

I would like a custom furniture quote.

Name: ${name}
Phone: ${phone}
Furniture needed: ${furnitureType}
Room/Space: ${room}
Measurements: ${measurements}
Preferred material: ${material}
Preferred colour/finish: ${colour}
Budget range: ${budget}

Requirement details:
${details}`,
    );

    setStatusMessage("Opening WhatsApp with your custom furniture request...");

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

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            CUSTOM FURNITURE
          </p>

          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            Made around your space, style, and story.
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-[#625d56]">
            From a single statement piece to complete home interiors, we help
            create furniture that feels made for you—because it is.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#custom-quote"
              className="rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9a6d3c]"
            >
              Request a Custom Quote
            </a>

            <Link
              href="/collections"
              className="rounded-full border border-[#1d1b18]/20 px-6 py-3.5 text-sm font-semibold transition hover:border-[#1d1b18] hover:bg-white"
            >
              View Collections
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85"
            alt="Custom furniture in a modern home"
            className="h-80 w-full rounded-2xl object-cover shadow-xl shadow-black/10"
          />
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85"
            alt="Modern custom wardrobe"
            className="mt-12 h-80 w-full rounded-2xl object-cover shadow-xl shadow-black/10"
          />
        </div>
      </section>

      <section
        id="custom-quote"
        className="border-y border-black/5 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
              CUSTOM ORDER REQUEST
            </p>

            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              Tell us what you want to create.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#625d56]">
              Fill in your requirements. WhatsApp will open with all your details
              ready to send directly to the AURA team.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-3xl bg-[#f8f5ef] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">
                Your Name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
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
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                />
              </label>

              <label className="text-sm font-semibold">
                Furniture You Need
                <select
                  required
                  name="furnitureType"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                >
                  <option value="" disabled>
                    Select furniture type
                  </option>
                  <option>Wardrobe</option>
                  <option>Modular Kitchen</option>
                  <option>TV Unit</option>
                  <option>Sofa</option>
                  <option>Bed</option>
                  <option>Dining Table</option>
                  <option>Study Table</option>
                  <option>Office Furniture</option>
                  <option>Complete Home Interiors</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="text-sm font-semibold">
                Room / Space
                <input
                  required
                  name="room"
                  type="text"
                  placeholder="Example: Master bedroom"
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                />
              </label>

              <label className="text-sm font-semibold">
                Measurements
                <input
                  name="measurements"
                  type="text"
                  placeholder="Example: 8 ft × 7 ft"
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                />
              </label>

              <label className="text-sm font-semibold">
                Preferred Material
                <select
                  name="material"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                >
                  <option value="">Not decided yet</option>
                  <option>Plywood</option>
                  <option>Solid Wood</option>
                  <option>MDF</option>
                  <option>Particle Board</option>
                  <option>Steel</option>
                  <option>Other / Need guidance</option>
                </select>
              </label>

              <label className="text-sm font-semibold">
                Preferred Colour / Finish
                <input
                  name="colour"
                  type="text"
                  placeholder="Example: Walnut brown / White"
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                />
              </label>

              <label className="text-sm font-semibold">
                Budget Range
                <select
                  name="budget"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
                >
                  <option value="">Not decided yet</option>
                  <option>Below ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>Above ₹1,00,000</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold">
              Tell us more about your requirement
              <textarea
                required
                name="details"
                rows={6}
                placeholder="Describe the design, storage needs, style, delivery location, or anything else you need."
                className="mt-2 w-full resize-none rounded-xl border border-[#1d1b18]/15 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#9a6d3c]/20"
              />
            </label>

            <p className="mt-4 text-sm leading-6 text-[#625d56]">
              You can also send room photos, measurements, or inspiration images
              after WhatsApp opens.
            </p>

            <button
              type="submit"
              className="mt-6 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#102b18] transition hover:bg-[#7ee89e]"
            >
              Send Custom Request on WhatsApp
            </button>

            {statusMessage ? (
              <p className="mt-4 text-sm leading-6 text-[#625d56]">
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="bg-[#28231e] py-20 text-[#f8f5ef] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold tracking-[0.22em] text-[#cda66f]">
            OUR PROCESS
          </p>

          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
            Simple from idea to installation.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="border-t border-white/20 pt-5"
              >
                <p className="text-sm font-bold text-[#e6c292]">{step.number}</p>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#d8d0c7]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
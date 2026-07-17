import { site } from "../lib/site";
import Link from "next/link"

const values = [
  {
    title: "Thoughtful Design",
    description:
      "We believe furniture should feel beautiful, useful, and right for everyday living.",
  },
  {
    title: "Lasting Quality",
    description:
      "We focus on materials, finishes, and details that make furniture dependable over time.",
  },
  {
    title: "Personal Service",
    description:
      "From choosing a product to planning a custom piece, we help customers make confident decisions.",
  },
];

export default function AboutPage() {
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

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            ABOUT {site.name.toUpperCase()}
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight sm:text-6xl">
            Furniture made for homes that feel like you.
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-[#625d56]">
            {site.name} is a furniture showroom concept focused on warm,
            thoughtful spaces. We help customers discover furniture that brings
            comfort, style, and practical living together.
          </p>

          <p className="mt-4 max-w-xl leading-7 text-[#625d56]">
            Whether you are furnishing one room or creating an entire home, our
            collection is designed to make choosing furniture simple and
            personal.
          </p>

          <Link href="/collections"
            className="mt-8 inline-block rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9a6d3c]"
          >
            Explore Our Collections
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85"
          alt="Warm and elegant home interior"
          className="h-115 w-full rounded-4xl object-cover shadow-2xl shadow-black/10"
        />
      </section>

      <section className="bg-[#efe9df] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            WHAT MATTERS TO US
          </p>

          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
            The details that make a home feel complete.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl bg-white p-7 shadow-sm"
              >
                <h3 className="font-serif text-2xl">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#625d56]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#28231e] py-20 text-[#f8f5ef] sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-[#cda66f]">
            VISIT THE SHOWROOM
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Let&apos;s find furniture that feels right at home.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#d8d0c7]">
            Explore our collection, compare finishes, and discuss your custom
            furniture requirement with our team.
          </p>

          <Link href="/#contact"
            className="mt-8 inline-block rounded-full bg-[#e6c292] px-6 py-3.5 text-sm font-semibold text-[#28231e] transition hover:bg-white"
          >
            Contact {site.shortName}
          </Link>
        </div>
      </section>
    </main>
  );
}
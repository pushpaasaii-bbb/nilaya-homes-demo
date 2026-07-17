import { site } from "../lib/site";
import Link from "next/link"

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
            <Link
              href="/#contact"
              className="rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9a6d3c]"
            >
              Request a Custom Quote
            </Link>

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

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            YOUR IDEA, OUR CRAFT
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Ready to create something personal?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#625d56]">
            Share your requirement with the {site.name} team. We will help you
            choose the right furniture design, material, dimensions, and finish.
          </p>

          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9a6d3c]"
          >
            Talk to Our Team
          </Link>
        </div>
      </section>
    </main>
  );
}
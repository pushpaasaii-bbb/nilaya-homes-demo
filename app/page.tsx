import MobileMenu from "./components/MobileMenu";
import { site } from "./lib/site";
import Link from "next/link"

const collections = [
  {
    name: "Living Room",
    description: "Sofas, lounge chairs, and coffee tables.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Bedroom",
    description: "Beds, wardrobes, and bedside comfort.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Dining",
    description: "Dining sets made for everyday gatherings.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
];

const bestSellers = [
  {
    name: "Oslo Fabric Sofa",
    price: "From ₹32,999",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Verona King Size Bed",
    price: "From ₹41,999",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Oakline Dining Set",
    price: "From ₹28,999",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ef] text-[#1d1b18]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f8f5ef]/95 backdrop-blur">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
            {site.shortName}
            <span className="text-[#9a6d3c]">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/collections" className="transition hover:text-[#9a6d3c]">
              Collections
            </Link>
            <Link href="/custom-furniture"
              className="transition hover:text-[#9a6d3c]"
            >
              Custom Furniture
            </Link>
            <Link href="/about" className="transition hover:text-[#9a6d3c]">
              About Us
            </Link>
            <Link href="/contact" className="transition hover:text-[#9a6d3c]">
              Visit Showroom
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact"
              className="rounded-full bg-[#1d1b18] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#9a6d3c]"
            >
              Enquire Now
            </Link>
          </div>

          <MobileMenu />
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            TIMELESS INTERIORS, THOUGHTFULLY MADE
          </p>
          <h1 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
            Furniture that makes home feel complete.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#625d56]">
            Discover comfortable, lasting furniture for every corner of your
            home—from relaxed living rooms to welcoming dining spaces.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/collections"
              className="rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#9a6d3c]"
            >
              Explore Collections
            </Link>
            <Link href="/contact"
              className="rounded-full border border-[#1d1b18]/20 px-6 py-3.5 text-sm font-bold transition hover:border-[#1d1b18] hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#d9c2a3]/50 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"
            alt="Elegant modern living room furniture"
            className="relative h-110 w-full rounded-4xl object-cover shadow-2xl shadow-black/15 sm:h-140"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-[#f8f5ef]/95 px-5 py-4 shadow-lg backdrop-blur">
            <p className="text-xs font-bold tracking-[0.16em] text-[#9a6d3c]">
              CURATED FOR YOU
            </p>
            <p className="mt-1 font-serif text-lg">Warm spaces. Better living.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/45">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
                SHOP BY ROOM
              </p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
                Made for every part of home.
              </h2>
            </div>
            <Link href="/collections"
              className="text-sm font-bold underline decoration-[#9a6d3c] underline-offset-4"
            >
              View all collections →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <Link key={collection.name}
                href="/collections"
                className="group overflow-hidden rounded-2xl bg-[#e8e1d7]"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="font-serif text-3xl">{collection.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#625d56]">
                    {collection.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
              MOST LOVED
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              Best sellers for beautiful homes.
            </h2>
          </div>
          <Link href="/collections"
            className="text-sm font-bold underline decoration-[#9a6d3c] underline-offset-4"
          >
            Browse all furniture →
          </Link>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-3">
          {bestSellers.map((product) => (
            <article key={product.name} className="group">
              <div className="overflow-hidden rounded-2xl bg-[#e8e1d7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-serif text-2xl">{product.name}</h3>
                <p className="mt-2 text-sm font-semibold">{product.price}</p>
                <Link href="/contact"
                  className="mt-4 inline-block text-sm font-bold underline decoration-[#9a6d3c] underline-offset-4"
                >
                  Enquire now →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#1d1b18] text-[#f8f5ef]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#d9b98d]">
              MADE FOR YOUR SPACE
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl tracking-tight sm:text-5xl">
              Need furniture that fits your exact home?
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="max-w-lg leading-7 text-[#ded7ce]">
              Tell us your room size, style, and requirements. We will help you
              explore custom furniture options made for your space.
            </p>
            <Link href="/custom-furniture"
              className="mt-7 rounded-full bg-[#f8f5ef] px-6 py-3.5 text-sm font-bold text-[#1d1b18] transition hover:bg-[#d9b98d]"
            >
              Explore Custom Furniture
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 rounded-3xl bg-[#e8e1d7] p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
              VISIT OUR SHOWROOM
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              See, feel, and choose with confidence.
            </h2>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="leading-7 text-[#625d56]">
              {site.city} · {site.workingHours}
            </p>
            <Link href="/contact"
              className="mt-6 rounded-full border border-[#1d1b18]/20 px-6 py-3.5 text-sm font-bold transition hover:bg-[#1d1b18] hover:text-white"
            >
              Contact the Showroom
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-2 lg:px-8">
          <div>
            <p className="font-serif text-2xl font-semibold">
              {site.shortName}
              <span className="text-[#9a6d3c]">.</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#625d56]">
              {site.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold md:justify-end">
            <Link href="/collections">Collections</Link>
            <Link href="/custom-furniture">Custom Furniture</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
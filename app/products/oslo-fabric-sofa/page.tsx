import { site } from "../../lib/site";
import Link from "next/link"

const details = [
  ["Category", "Living Room Sofa"],
  ["Material", "Premium Fabric"],
  ["Seating Capacity", "3 Seater"],
  ["Style", "Modern Contemporary"],
  ["Colour Options", "Available on enquiry"],
  ["Delivery", "Confirm with showroom"],
];

export default function OsloFabricSofaPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">
      <nav className="border-b border-black/5 bg-[#f8f5ef]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="font-serif text-2xl font-semibold">
            {site.shortName}
            <span className="text-[#9a6d3c]">.</span>
          </Link>

          <Link href="/collections"
            className="rounded-full border border-[#1d1b18]/20 px-4 py-2 text-sm font-semibold transition hover:bg-[#1d1b18] hover:text-white"
          >
            ← Back to Collections
          </Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="grid gap-4">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=90"
            alt="Oslo Fabric Sofa"
            className="h-115 w-full rounded-3xl object-cover shadow-xl shadow-black/10"
          />

          <div className="grid grid-cols-3 gap-3">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
              alt="Oslo Fabric Sofa front view"
              className="h-28 w-full rounded-xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=500&q=80"
              alt="Sofa in living room"
              className="h-28 w-full rounded-xl object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=500&q=80"
              alt="Modern furniture room"
              className="h-28 w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="lg:pt-5">
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            LIVING ROOM COLLECTION
          </p>

          <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
            Oslo Fabric Sofa
          </h1>

          <p className="mt-5 text-xl font-semibold">From ₹32,999</p>

          <p className="mt-6 max-w-xl leading-7 text-[#625d56]">
            A comfortable three-seater sofa designed with soft premium fabric,
            clean lines, and a relaxed modern shape. A beautiful choice for
            everyday living rooms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact"
              className="rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9a6d3c]"
            >
              Request a Quote
            </Link>

            <Link href="/custom-furniture"
              className="rounded-full border border-[#1d1b18]/20 px-6 py-3.5 text-sm font-semibold transition hover:border-[#1d1b18] hover:bg-white"
            >
              Ask About Customisation
            </Link>
          </div>

          <div className="mt-10 divide-y divide-[#1d1b18]/10">
            {details.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-6 py-4 text-sm">
                <span className="font-semibold">{label}</span>
                <span className="text-right text-[#625d56]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe9df] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            NEED HELP CHOOSING?
          </p>

          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
            Visit {site.name} to compare fabric, comfort, and colour options.
          </h2>

          <Link href="/contact"
            className="mt-7 inline-block rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9a6d3c]"
          >
            Contact the Showroom
          </Link>
        </div>
      </section>
    </main>
  );
}
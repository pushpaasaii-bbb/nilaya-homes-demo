import Link from "next/link";

export default function CurtainsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
              PREMIUM CURTAINS
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
              Luxury Curtains for Every Home
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#625d56]">
              Discover premium curtains crafted to enhance privacy, comfort,
              elegance and natural lighting for modern interiors.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#1d1b18] px-6 py-3 text-white font-semibold hover:bg-[#9a6d3c]"
              >
                Enquire Now
              </Link>

              <Link
                href="/furnishings"
                className="rounded-full border px-6 py-3 font-semibold hover:bg-white"
              >
                Back
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=90"
            alt="Luxury Curtains"
            className="h-[650px] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      {/* Types */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <h2 className="font-serif text-4xl">
          Curtain Collections
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Blackout Curtains",
            "Sheer Curtains",
            "Eyelet Curtains",
            "Pleated Curtains",
            "Motorized Curtains",
            "Velvet Curtains",
            "Linen Curtains",
            "Custom Curtains",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <h3 className="font-serif text-2xl">{item}</h3>

              <p className="mt-3 text-[#625d56]">
                Premium quality curtains made for elegant interiors.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#1d1b18] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-serif text-4xl">
            Why Choose AURA Curtains?
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Premium Fabrics",
              "Custom Stitching",
              "Professional Installation",
              "Affordable Pricing",
            ].map((item) => (
              <div key={item}>
                <h3 className="text-2xl font-serif">
                  {item}
                </h3>

                <p className="mt-3 text-gray-300">
                  Designed for durability and timeless elegance.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center lg:px-8">
        <h2 className="font-serif text-5xl">
          Ready to Transform Your Windows?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[#625d56]">
          Visit our showroom or contact our experts for personalized curtain
          solutions.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[#1d1b18] px-8 py-4 font-semibold text-white hover:bg-[#9a6d3c]"
        >
          Contact AURA
        </Link>
      </section>
    </main>
  );
}
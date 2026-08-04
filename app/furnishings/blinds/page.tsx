import Link from "next/link";

export default function BlindsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold">
          Premium Blinds
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600">
          Transform your interiors with elegant blinds designed for privacy,
          comfort, and modern luxury living.
        </p>
      </section>


      {/* Categories */}
      <section className="px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            {
              title: "Roller Blinds",
              desc: "Clean and minimal blinds perfect for modern homes."
            },
            {
              title: "Roman Blinds",
              desc: "Classic fabric blinds adding warmth and luxury."
            },
            {
              title: "Venetian Blinds",
              desc: "Adjustable blinds for complete light control."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#1d1b18] text-white py-16 text-center px-6">

        <h2 className="text-3xl font-serif">
          Design Your Perfect Space
        </h2>

        <p className="mt-4 text-gray-300">
          Get expert guidance for selecting the right blinds for your home.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-[#c9a96e] text-black px-8 py-3 rounded-full font-medium"
        >
          Book Consultation
        </Link>

      </section>

    </main>
  );
}
import Link from "next/link";

export default function FurnishingsPage() {
  const categories = [
    {
      title: "Curtains",
      description:
        "Luxury blackout, sheer and designer curtain collections.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      link: "/furnishings/curtains",
    },
    {
      title: "Upholstery Fabrics",
      description:
        "Premium fabrics for sofas, chairs and custom interiors.",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      link: "/furnishings/fabrics",
    },
    {
      title: "Blinds",
      description:
        "Roller, zebra and motorized blinds for modern homes.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      link: "/furnishings/blinds",
    },
    {
      title: "Carpets & Rugs",
      description:
        "Elegant carpets and rugs crafted for luxurious living.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      link: "/furnishings/carpets",
    },
    {
      title: "Wallpapers",
      description:
        "Designer wallpapers that transform every wall.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      link: "/furnishings/wallpapers",
    },
    {
      title: "Wooden Flooring",
      description:
        "Premium wooden flooring with timeless elegance.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      link: "/furnishings/flooring",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">

        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
            PREMIUM HOME FURNISHINGS
          </p>

          <h1 className="mt-5 font-serif text-5xl leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
            Curtains, Fabrics & Interiors Crafted for Elegant Living.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#625d56]">
            Discover premium curtains, upholstery fabrics, blinds,
            wallpapers, carpets and flooring solutions designed to
            elevate every space with timeless elegance and exceptional quality.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-[#1d1b18] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#9a6d3c]"
            >
              Enquire Now
            </Link>

            <Link
              href="#categories"
              className="rounded-full border border-[#1d1b18]/20 px-6 py-3.5 text-sm font-bold transition hover:border-[#1d1b18] hover:bg-white"
            >
              Explore Collections
            </Link>

          </div>
        </div>


        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=90"
            alt="Luxury Furnishings"
            className="relative h-[650px] w-full rounded-3xl object-cover shadow-2xl shadow-black/15"
          />

        </div>

      </section>


      <section
        id="categories"
        className="border-y border-black/5 bg-white/40"
      >

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

          <div className="text-center">

            <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
              OUR COLLECTIONS
            </p>

            <h2 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
              Premium Furnishing Categories
            </h2>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((item) => (

              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-[#e8e1d7] shadow-sm transition hover:shadow-xl"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />


                <div className="p-6">

                  <h3 className="font-serif text-3xl">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-[#625d56]">
                    {item.description}
                  </p>


                  <Link
                    href={item.link}
                    className="mt-6 inline-flex font-semibold text-[#9a6d3c] transition hover:translate-x-1"
                  >
                    Explore Collection →
                  </Link>


                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
import Link from "next/link";

export default function FabricsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">

      <section className="px-6 py-20 text-center">
        <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
          PREMIUM UPHOLSTERY FABRICS
        </p>

        <h1 className="mt-5 font-serif text-5xl sm:text-6xl">
          Luxury Fabrics Crafted for Beautiful Interiors.
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-[#625d56]">
          Explore premium upholstery fabrics designed for sofas, chairs,
          curtains and custom interior projects.
        </p>
      </section>


      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-3">

        {[
          {
            title: "Velvet Fabrics",
            desc: "Rich textures creating a luxurious premium look."
          },
          {
            title: "Cotton Fabrics",
            desc: "Soft and comfortable fabrics for elegant spaces."
          },
          {
            title: "Designer Fabrics",
            desc: "Exclusive patterns for customized interiors."
          }
        ].map((item)=>(
          <div
            key={item.title}
            className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-xl"
          >
            <h2 className="font-serif text-3xl">
              {item.title}
            </h2>

            <p className="mt-4 text-[#625d56]">
              {item.desc}
            </p>
          </div>
        ))}

      </section>


      <section className="bg-[#1d1b18] px-6 py-16 text-center text-white">

        <h2 className="font-serif text-4xl">
          Create Your Dream Interior
        </h2>

        <p className="mt-4 text-gray-300">
          Get expert guidance for selecting the perfect fabrics.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-[#c9a96e] px-8 py-3 font-semibold text-black"
        >
          Book Consultation
        </Link>

      </section>

    </main>
  );
}
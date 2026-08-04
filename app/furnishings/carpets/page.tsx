import Link from "next/link";

export default function CarpetsPage(){

return(
<main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">

<section className="px-6 py-20 text-center">

<p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
LUXURY CARPETS & RUGS
</p>

<h1 className="mt-5 font-serif text-5xl sm:text-6xl">
Premium Carpets for Timeless Interiors.
</h1>

<p className="mx-auto mt-6 max-w-3xl text-lg text-[#625d56]">
Elegant carpets and rugs adding warmth, comfort and luxury to every room.
</p>

</section>


<section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-3">

{[
"Luxury Rugs",
"Designer Carpets",
"Custom Floor Rugs"
].map(item=>(

<div key={item}
className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl">

<h2 className="font-serif text-3xl">
{item}
</h2>

<p className="mt-4 text-[#625d56]">
Premium designs crafted for beautiful homes.
</p>

</div>

))}

</section>


<Link
href="/contact"
className="mx-auto mb-16 block w-fit rounded-full bg-[#1d1b18] px-8 py-3 text-white"
>
Book Consultation
</Link>


</main>
)

}
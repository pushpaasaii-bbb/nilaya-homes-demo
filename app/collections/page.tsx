"use client";
import Link from "next/link";

import { useState } from "react";
import { site } from "../lib/site";

type Product = {
  name: string;
  category: string;
  material: string;
  price: string;
  image: string;
  productLink: string | null;
};

const products: Product[] = [
  {
    name: "Oslo Fabric Sofa",
    category: "Sofas",
    material: "Premium Fabric",
    price: "From ₹32,999",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85",
    productLink: "/products/oslo-fabric-sofa",
  },
  {
    name: "Luna L-Shaped Sofa",
    category: "Sofas",
    material: "Soft Linen Fabric",
    price: "From ₹54,999",
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=900&q=85",
    productLink: null,
  },
  {
    name: "Verona King Size Bed",
    category: "Beds",
    material: "Solid Wood",
    price: "From ₹41,999",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
    productLink: null,
  },
  {
    name: "Oakline Dining Set",
    category: "Dining",
    material: "Engineered Wood",
    price: "From ₹28,999",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    productLink: null,
  },
  {
    name: "Modern Sliding Wardrobe",
    category: "Wardrobes",
    material: "Engineered Wood",
    price: "Request Price",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85",
    productLink: null,
  },
  {
    name: "Executive Office Desk",
    category: "Office",
    material: "Wood & Metal",
    price: "From ₹18,999",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85",
    productLink: null,
  },
];

const categories = ["All", "Sofas", "Beds", "Dining", "Wardrobes", "Office"];

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
          FURNITURE COLLECTIONS
        </p>

        <h1 className="mt-3 max-w-2xl font-serif text-5xl tracking-tight sm:text-6xl">
          Find furniture made for your everyday life.
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-[#625d56]">
          Explore our curated collection of comfortable, practical, and timeless
          furniture for every room in your home.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#1d1b18] text-white"
                  : "border border-[#1d1b18]/15 bg-white hover:border-[#1d1b18]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#625d56]">
          Showing {filteredProducts.length} furniture item
          {filteredProducts.length === 1 ? "" : "s"}.
        </p>

        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.name} className="group">
              <div className="overflow-hidden rounded-2xl bg-[#e8e1d7]">
                {product.productLink ? (
                  <Link href={product.productLink}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              <div className="pt-5">
                <p className="text-xs font-bold tracking-[0.14em] text-[#9a6d3c]">
                  {product.category}
                </p>

                <div className="mt-2 flex items-start justify-between gap-3">
                  <div>
                    {product.productLink ? (
                      <Link
                        href={product.productLink}
                        className="font-serif text-2xl transition hover:text-[#9a6d3c]"
                      >
                        {product.name}
                      </Link>
                    ) : (
                      <h2 className="font-serif text-2xl">{product.name}</h2>
                    )}

                    <p className="mt-2 text-sm text-[#625d56]">
                      {product.material}
                    </p>

                    <p className="mt-2 text-sm font-semibold">
                      {product.price}
                    </p>
                  </div>

                  <Link
                    href={product.productLink || "/contact"}
                    className="rounded-full border border-[#1d1b18]/20 px-3 py-2 text-xs font-bold transition hover:bg-[#1d1b18] hover:text-white"
                  >
                    {product.productLink ? "View" : "Enquire"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
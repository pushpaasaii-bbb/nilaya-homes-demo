"use client";
import Link from "next/link";

import { useState } from "react";
import { site } from "../lib/site";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-[#1d1b18] transition hover:border-black/40"
      >
        <span className="text-xl leading-none">{isOpen ? "×" : "☰"}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-black/10 bg-[#f8f5ef] px-5 py-5 shadow-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link href="/collections"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold hover:bg-black/5"
            >
              Collections
            </Link>
            <Link href="/custom-furniture"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold hover:bg-black/5"
            >
              Custom Furniture
            </Link>
            <Link href="/about"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold hover:bg-black/5"
            >
              About Us
            </Link>
            <Link href="/contact"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 font-semibold hover:bg-black/5"
            >
              Contact
            </Link>
            <Link href="/contact"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-[#1d1b18] px-4 py-3 text-center font-semibold text-white"
            >
              Enquire at {site.name}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
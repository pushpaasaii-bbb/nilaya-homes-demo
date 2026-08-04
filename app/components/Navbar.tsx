import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { site } from "../lib/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f8f5ef]/95 backdrop-blur">

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-tight"
        >
          {site.shortName}
          <span className="text-[#9a6d3c]">.</span>
        </Link>


        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">

          <Link
            href="/collections"
            className="transition hover:text-[#9a6d3c]"
          >
            Collections
          </Link>


          <Link
            href="/furnishings"
            className="transition hover:text-[#9a6d3c]"
          >
            Furnishings
          </Link>


          <Link
            href="/custom-furniture"
            className="transition hover:text-[#9a6d3c]"
          >
            Custom Furniture
          </Link>


          <Link
            href="/about"
            className="transition hover:text-[#9a6d3c]"
          >
            About Us
          </Link>


          <Link
            href="/contact"
            className="transition hover:text-[#9a6d3c]"
          >
            Visit Showroom
          </Link>

        </nav>


        <div className="hidden md:block">

          <Link
            href="/contact"
            className="rounded-full bg-[#1d1b18] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#9a6d3c]"
          >
            Enquire Now
          </Link>

        </div>


        <MobileMenu />

      </div>

    </header>
  );
}
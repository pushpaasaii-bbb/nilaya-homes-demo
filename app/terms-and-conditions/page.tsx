import Link from "next/link";
import { site } from "../lib/site";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1d1b18]">
      <nav className="border-b border-black/5 bg-[#f8f5ef]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 lg:px-8">
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

      <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#9a6d3c]">
          LEGAL INFORMATION
        </p>

        <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
          Terms & Conditions
        </h1>

        <p className="mt-6 text-sm leading-7 text-[#625d56]">
          Last updated: July 2026
        </p>

        <div className="mt-12 space-y-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <section>
            <h2 className="font-serif text-3xl">Using this website</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              By using the {site.name} website, you agree to use it lawfully
              and responsibly. The website is intended to help customers view
              furniture collections and make enquiries.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Product information</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              Product images, prices, colours, materials, dimensions, and
              availability may change. Please confirm final product details,
              pricing, delivery timelines, and specifications with the showroom
              before placing an order.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Custom furniture</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              Custom furniture quotations depend on design, dimensions,
              materials, finish, and delivery requirements. A final quotation
              will be provided after discussing the customer’s exact
              requirement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Website enquiries</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              Sending an enquiry does not create a confirmed order, reservation,
              or contract. A member of the showroom team must confirm all order
              details separately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Intellectual property</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              Website content, branding, design, and images should not be copied
              or reused without permission from the business or the relevant
              content owner.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Updates to these terms</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              These terms may be updated when the website, services, or business
              information changes. The latest version will be available on this
              page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Contact</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              For questions about these terms, contact{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-[#9a6d3c] underline underline-offset-4"
              >
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
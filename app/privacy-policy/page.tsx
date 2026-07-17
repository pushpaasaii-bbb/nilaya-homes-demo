import Link from "next/link";
import { site } from "../lib/site";

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p className="mt-6 text-sm leading-7 text-[#625d56]">
          Last updated: July 2026
        </p>

        <div className="mt-12 space-y-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <section>
            <h2 className="font-serif text-3xl">Introduction</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              {site.name} respects your privacy. This policy explains what
              information may be collected when you use this website and how it
              may be used.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Information we may collect</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              When you contact us, submit an enquiry, call, email, or use a
              future WhatsApp link, we may receive information such as your
              name, phone number, email address, and furniture requirement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">How we use information</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              Information is used only to respond to enquiries, provide product
              or custom-furniture details, improve customer service, and
              communicate about a request you have made.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Cookies and analytics</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              This website may use basic cookies or analytics tools in the
              future to understand website performance and improve the user
              experience. You can manage cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Sharing information</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              We do not sell personal information. Information may only be
              shared when necessary to respond to a customer request, provide a
              service, comply with legal obligations, or operate the website
              securely.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl">Contact us</h2>
            <p className="mt-4 leading-7 text-[#625d56]">
              For privacy-related questions, contact us at{" "}
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
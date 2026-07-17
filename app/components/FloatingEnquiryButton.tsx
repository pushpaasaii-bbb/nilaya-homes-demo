import { site } from "../lib/site";

export default function FloatingEnquiryButton() {
  return (
    <a
      href="/contact"
      aria-label={`Enquire with ${site.name}`}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1d1b18] px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#9a6d3c]"
    >
      <span className="text-lg leading-none">✦</span>
      Enquire Now
    </a>
  );
}
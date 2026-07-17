import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { site } from "./lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} | Premium Furniture Showroom`,
  description:
    "Discover timeless sofas, beds, dining sets, wardrobes, and custom furniture designed for beautiful living spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfairDisplay.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
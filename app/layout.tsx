import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const description =
  "Peppera is a black-pepper-themed restaurant from Kerala: authentic organic ingredients and pepper-led dining. Opening soon.";

export const metadata: Metadata = {
  title: "Peppera — Pepper-Themed Dining, Kerala",
  description,
  openGraph: {
    title: "Peppera — Pepper-Themed Dining, Kerala",
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Peppera",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-clip">
        <MotionProvider>{children}</MotionProvider>
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}

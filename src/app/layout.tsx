import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "XI DESIGN BUILD | Luxury Architecture & Interior Design Studio",
    template: "%s | XI DESIGN BUILD"
  },
  description: "Bespoke architectural excellence and premium interior design solutions for sophisticated living spaces globally. Specializing in high-end residential and commercial architecture in London.",
  keywords: ["Luxury Architecture", "Interior Design", "Bespoke Home Design", "London Architects", "Modern Living", "High-end Residential"],
  authors: [{ name: "XI Design & Build" }],
  creator: "XI Design & Build",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://xidesignbuild.com",
    title: "XI DESIGN BUILD | Luxury Architecture & Interior Design Studio",
    description: "Bespoke architectural excellence and premium interior design solutions.",
    siteName: "XI DESIGN BUILD",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XI DESIGN BUILD | Luxury Architecture & Interior Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XI DESIGN BUILD | Luxury Architecture & Interior Design Studio",
    description: "Bespoke architectural excellence and premium interior design solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased selection:bg-luxury-gold selection:text-rich-black">
        {children}
      </body>
    </html>
  );
}



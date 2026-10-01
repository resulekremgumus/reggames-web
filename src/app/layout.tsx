import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reggames.net"),
  title: "RegGames — İstanbul'dan mobil oyun stüdyosu",
  description:
    "RegGames, İstanbul merkezli bağımsız bir mobil oyun stüdyosu. Oyunlarımız: sonsuz koşu Yetish ve tangram bulmacası Kara Kutu.",
  openGraph: {
    type: "website",
    siteName: "RegGames",
    images: [{ url: "/og/studio.jpg", width: 1200, height: 630, alt: "RegGames" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${outfit.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}

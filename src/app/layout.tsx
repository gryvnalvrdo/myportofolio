import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Michelle Nathalie — Event Planner & Organizational Leadership Portfolio",
  description:
    "Portofolio faktual Michelle Nathalie (S1 Manajemen Universitas Ciputra Makassar, IPK 3.77/4.00) — pengalaman kepemimpinan BEM, Himpunan Mahasiswa Manajemen, REKFEST 2.0, dan seri ENTRANCE 1.0–3.0.",
  keywords: [
    "Michelle Nathalie",
    "Event Planner Makassar",
    "Event Management",
    "Universitas Ciputra Makassar",
    "REKFEST 2.0",
    "ENTRANCE",
    "Portfolio",
  ],
  authors: [{ name: "Michelle Nathalie" }],
  openGraph: {
    title: "Michelle Nathalie — Event Planner & Organizational Leadership",
    description:
      "Rekam jejak terstruktur kepemimpinan organisasi dan manajemen acara berskala hingga 30.000+ pengunjung di Makassar, Indonesia.",
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    siteName: "Michelle Nathalie Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#FAF8F5] text-[#171717] antialiased selection:bg-[#6B2737] selection:text-[#FAF8F5]">
        {children}
      </body>
    </html>
  );
}

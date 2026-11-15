import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Michelle Nathalie — Portfolio & Curriculum Vitae",
  description:
    "Portofolio dan CV Michelle Nathalie (S1 Manajemen Universitas Ciputra Makassar, IPK 3.77/4.00) — pengalaman kepemimpinan organisasi, manajemen acara, REKFEST 2.0, dan seri ENTRANCE 1.0–3.0.",
  keywords: [
    "Michelle Nathalie",
    "Event Planner",
    "Event Management",
    "Project Management",
    "Universitas Ciputra Makassar",
    "REKFEST 2.0",
    "ENTRANCE",
    "Makassar",
  ],
  authors: [{ name: "Michelle Nathalie" }],
  openGraph: {
    title: "Michelle Nathalie — Portfolio & Curriculum Vitae",
    description:
      "Lulusan S1 Manajemen Universitas Ciputra Makassar dengan rekam jejak kepemimpinan organisasi dan manajemen acara berskala hingga 30.000+ pengunjung.",
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    siteName: "Michelle Nathalie",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#FAF9F7] text-[#18181B] antialiased selection:bg-[#6B2737] selection:text-[#FAF9F7]">
        {children}
      </body>
    </html>
  );
}

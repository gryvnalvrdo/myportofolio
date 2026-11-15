import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAF8F5] px-6 text-center text-[#171717]">
      <p className="font-mono text-xs tracking-[0.2em] text-[#6B2737] uppercase">
        404 // Halaman Tidak Ditemukan
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Halaman yang Anda cari tidak tersedia
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#52525B]">
        Kembali ke halaman utama portofolio Michelle Nathalie untuk melihat rekam jejak acara dan kepemimpinan organisasi.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#171717] px-6 py-2.5 text-sm font-medium text-[#FAF8F5] transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}

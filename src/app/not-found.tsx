import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAF9F7] px-6 text-center text-[#18181B]">
      <p className="text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
        404 · Halaman Tidak Ditemukan
      </p>
      <h1 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Halaman yang Anda cari tidak tersedia
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#52525B]">
        Kembali ke halaman utama portofolio Michelle Nathalie untuk melihat rekam jejak acara dan kepemimpinan organisasi.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#18181B] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}

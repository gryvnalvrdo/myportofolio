"use client";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAF8F5] px-6 text-center text-[#171717]">
      <p className="font-mono text-xs tracking-[0.2em] text-[#6B2737] uppercase">
        Terjadi Gangguan Tampilan
      </p>
      <h1 className="mt-3 font-serif text-3xl font-medium tracking-tight">
        Maaf, halaman gagal dimuat
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#52525B]">
        Silakan muat ulang halaman untuk menampilkan portofolio kembali.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-7 inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#171717] px-6 py-2.5 text-sm font-medium text-[#FAF8F5] transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
      >
        Muat Ulang Halaman
      </button>
    </main>
  );
}

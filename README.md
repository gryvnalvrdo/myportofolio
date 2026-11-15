# Portofolio Michelle Nathalie — Curriculum Vitae & Showcase

Web portofolio dwibahasa (**Bahasa Indonesia & English**) untuk **Michelle Nathalie** (Lulusan S1 Manajemen Universitas Ciputra Makassar, IPK `3.77 / 4.00`), dibangun menggunakan **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Framer Motion**, serta dirancang sesuai panduan di [skills.md](./skills.md).

## Fitur Utama
- **Dwibahasa Penuh (`ID | EN`)**: Seluruh antarmuka web, ringkasan profil, poin tanggung jawab CV, hingga **CV siap cetak/PDF** dapat diganti antara Bahasa Indonesia dan Bahasa Inggris.
- **Tata Grid Simetris (Desktop & Mobile)**:
  - **Hero Seimbang & Terfokus**: Profil, ringkasan, info akademik ringkas, dan tombol aksi sejajar simetris dengan kartu foto portrait di sebelah kanan.
  - **1 Flagship Series Card**: Menggabungkan **ENTRANCE 1.0, 2.0, dan 3.0** dalam satu kartu. Sekali klik langsung menampilkan perbandingan ketiga edisi beserta perbedaan peringkat perannya (`Sponsorship Department` → `Ketua` → `Ketua`).
  - **6 Kartu Pengalaman Simetris dengan Transisi Animasi**: REKFEST 2.0, Badan Eksekutif Mahasiswa (BEM), Himpunan Mahasiswa Manajemen, Seminar Bela Negara & Anti Narkoba 2025, Orientation Week UC Makassar, dan FLAMIANS 1.0 — tampil ringkas di luar, dan terbuka berdampingan (**Teks + Galeri Foto Multi-Slide**) saat diklik.
  - **Galeri Foto Skalabel**: Mendukung jumlah foto tak terbatas per acara lewat viewer utama + filmstrip thumbnail + lightbox layar penuh.
  - **Drawer Navigasi Mobile Slide-Kiri**: Menu mobile muncul meluncur halus dari sisi kiri saat tombol garis 3 ditekan.
- **CV Siap Cetak HR (`ID / EN`)**: Fitur *Lihat / Cetak CV* untuk membaca dan menyimpan CV resmi ke PDF dalam dua bahasa (termasuk rincian pendidikan, Hard Skills, Soft Skills, dan Bahasa).

## Cara Menambahkan Foto Asli
Saat ini seluruh slot foto menggunakan placeholder arsitektural terstruktur agar tata letak tetap rapi sebelum foto diberikan. Ketika foto sudah tersedia:
1. Simpan file foto (`.jpg` / `.webp` / `.png`) ke dalam folder `public/images/` (misalnya `public/images/portrait.jpg`, `public/images/rekfest-cover.jpg`).
2. Buka `src/data/portfolio.ts`, lalu isi properti `src` pada slot terkait dari `null` menjadi path relatifnya:
   ```ts
   src: "/images/rekfest-cover.jpg"
   ```
3. Komponen `<EventMediaFrame />` otomatis merender foto dengan optimasi `next/image` serta mengaktifkan fitur perbesar (*lightbox*) saat foto di dalam modal diklik.

## Keamanan & Kesiapan Deploy Vercel
- **HTTP Security Headers (`next.config.ts`)**: `Content-Security-Policy`, `Strict-Transport-Security` (HSTS), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, `Cross-Origin-Resource-Policy`, dan `poweredByHeader: false`.
- **Proteksi Tautan & Aset**: Validasi protokol URL (`src/lib/security.ts`), `rel="noopener noreferrer"` pada tautan eksternal (LinkedIn), serta pembatasan aset gambar lokal agar terhindar dari penyalahgunaan *image proxy*.
- **Font Self-Hosted**: Tipografi Google Fonts dimuat saat *build time* lewat `next/font/google` sehingga tidak bergantung pada request CDN pihak ketiga di browser pengunjung.

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
```

## Verifikasi Sebelum Deploy ke Vercel
```bash
npm run typecheck
npm run lint
npm run build
```

Saat deploy di **Vercel**:
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Environment Variable opsional: `NEXT_PUBLIC_SITE_URL=https://domain-anda.vercel.app` (untuk URL `sitemap.xml` & `robots.txt`).

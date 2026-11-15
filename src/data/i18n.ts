import type { Locale } from "./portfolio";

export const UI_COPY: Record<
  Locale,
  {
    nav: {
      overview: string;
      experiences: string;
      contact: string;
      viewCv: string;
      languageLabel: string;
    };
    hero: {
      subtitle: string;
      availableLocation: string;
      academicLine: string;
      ctaExplore: string;
      ctaCv: string;
      ctaLinkedIn: string;
    };
    experiences: {
      kicker: string;
      heading: string;
      subheading: string;
      filterAll: string;
      filterEvent: string;
      filterOrg: string;
      seriesBadge: string;
      openSeriesCta: string;
      openCardCta: string;
      categoryEvent: string;
      categoryOrg: string;
    };
    modal: {
      close: string;
      prev: string;
      next: string;
      responsibilitiesTitle: string;
      galleryTitle: string;
      galleryHint: string;
      galleryPrevPhoto: string;
      galleryNextPhoto: string;
      galleryMultiSupportNote: string;
      editionComparisonTitle: string;
      allEditionsTab: string;
      umbrellaLabel: string;
      zoomPhoto: string;
    };
    cvModal: {
      title: string;
      subtitle: string;
      printButton: string;
      switchCvLang: string;
      summaryHeading: string;
      experienceHeading: string;
      educationHeading: string;
      skillsHeading: string;
      close: string;
    };
    contact: {
      kicker: string;
      heading: string;
      subheading: string;
      emailLabel: string;
      emailHint: string;
      phoneLabel: string;
      phoneHint: string;
      linkedinLabel: string;
      copyAction: string;
      copied: string;
      openLinkedIn: string;
      sendEmail: string;
      callPhone: string;
    };
    placeholder: {
      awaitingPhoto: string;
      aspectLabel: string;
    };
    footer: {
      copyright: string;
      credentialLine: string;
      backToTop: string;
    };
  }
> = {
  id: {
    nav: {
      overview: "Profil",
      experiences: "Pengalaman",
      contact: "Kontak",
      viewCv: "Lihat / Cetak CV",
      languageLabel: "Bahasa Tampilan",
    },
    hero: {
      subtitle: "S1 Manajemen · Manajemen Proyek, Acara & Kepemimpinan Organisasi",
      availableLocation: "Makassar, Indonesia",
      academicLine: "Universitas Ciputra Makassar (2022–2026) · IPK 3.77 / 4.00",
      ctaExplore: "Lihat Pengalaman",
      ctaCv: "Lihat / Cetak CV",
      ctaLinkedIn: "LinkedIn",
    },
    experiences: {
      kicker: "Rekam Jejak Pengalaman",
      heading: "Pengalaman Acara & Organisasi",
      subheading:
        "Klik kartu mana pun untuk membuka rincian tanggung jawab berdampingan dengan galeri foto dokumentasi.",
      filterAll: "Semua (7)",
      filterEvent: "Acara (5)",
      filterOrg: "Organisasi (2)",
      seriesBadge: "Seri 3 Edisi · 2022–2025",
      openSeriesCta: "Buka 3 Edisi ENTRANCE",
      openCardCta: "Lihat Detail & Foto",
      categoryEvent: "Acara / Program",
      categoryOrg: "Organisasi",
    },
    modal: {
      close: "Tutup",
      prev: "Sebelumnya",
      next: "Berikutnya",
      responsibilitiesTitle: "Tanggung Jawab & Pelaksanaan",
      galleryTitle: "Galeri Dokumentasi",
      galleryHint: "Pilih thumbnail di bawah atau klik foto utama untuk memperbesar.",
      galleryPrevPhoto: "Foto sebelumnya",
      galleryNextPhoto: "Foto berikutnya",
      galleryMultiSupportNote: "Mendukung banyak foto dalam satu galeri slide.",
      editionComparisonTitle: "Progresi Peran Lintas 3 Edisi",
      allEditionsTab: "Semua 3 Edisi",
      umbrellaLabel: "Naungan",
      zoomPhoto: "Perbesar",
    },
    cvModal: {
      title: "Ringkasan CV Dwibahasa",
      subtitle: "Format siap baca HR dan dapat dicetak atau disimpan ke PDF (Indonesia / English).",
      printButton: "Cetak / PDF",
      switchCvLang: "Bahasa CV:",
      summaryHeading: "Ringkasan Profil",
      experienceHeading: "Pengalaman Organisasi & Acara",
      educationHeading: "Pendidikan",
      skillsHeading: "Kemampuan & Bahasa",
      close: "Tutup",
    },
    contact: {
      kicker: "Kontak Profesional",
      heading: "Terbuka untuk Kesempatan Kerja & Kolaborasi",
      subheading:
        "Untuk keperluan proses rekrutmen HR, koordinasi acara, atau wawancara kerja, silakan hubungi melalui kontak berikut.",
      emailLabel: "Email",
      emailHint: "Korespondensi email langsung",
      phoneLabel: "Telepon",
      phoneHint: "Kontak telepon langsung",
      linkedinLabel: "LinkedIn",
      copyAction: "Salin",
      copied: "Tersalin",
      openLinkedIn: "Buka LinkedIn",
      sendEmail: "Kirim Email",
      callPhone: "Hubungi via Telepon",
    },
    placeholder: {
      awaitingPhoto: "Slot Foto Siap Diisi",
      aspectLabel: "Rasio",
    },
    footer: {
      copyright: "Michelle Nathalie · S1 Manajemen",
      credentialLine: "Universitas Ciputra Makassar · Makassar, Indonesia",
      backToTop: "Kembali ke atas",
    },
  },
  en: {
    nav: {
      overview: "Profile",
      experiences: "Experience",
      contact: "Contact",
      viewCv: "View / Print CV",
      languageLabel: "Display Language",
    },
    hero: {
      subtitle: "Bachelor of Management · Project, Event & Organizational Leadership",
      availableLocation: "Makassar, Indonesia",
      academicLine: "Universitas Ciputra Makassar (2022–2026) · GPA 3.77 / 4.00",
      ctaExplore: "Explore Experience",
      ctaCv: "View / Print CV",
      ctaLinkedIn: "LinkedIn",
    },
    experiences: {
      kicker: "Verified Track Record",
      heading: "Event & Organizational Experience",
      subheading:
        "Click any card to inspect full responsibilities paired side-by-side with the event photo gallery.",
      filterAll: "All (7)",
      filterEvent: "Events (5)",
      filterOrg: "Organizations (2)",
      seriesBadge: "3-Edition Series · 2022–2025",
      openSeriesCta: "Open 3 ENTRANCE Editions",
      openCardCta: "View Details & Photos",
      categoryEvent: "Event / Program",
      categoryOrg: "Organization",
    },
    modal: {
      close: "Close",
      prev: "Previous",
      next: "Next",
      responsibilitiesTitle: "Responsibilities & Execution",
      galleryTitle: "Photo Gallery",
      galleryHint: "Select thumbnails below or click the main photo to enlarge.",
      galleryPrevPhoto: "Previous photo",
      galleryNextPhoto: "Next photo",
      galleryMultiSupportNote: "Supports unlimited event photos via carousel strip.",
      editionComparisonTitle: "Role Progression Across 3 Editions",
      allEditionsTab: "All 3 Editions",
      umbrellaLabel: "Organization",
      zoomPhoto: "Enlarge",
    },
    cvModal: {
      title: "Bilingual Resume (ID / EN)",
      subtitle: "Structured HR-ready resume view for printing or saving as PDF in Indonesian or English.",
      printButton: "Print / PDF",
      switchCvLang: "CV Language:",
      summaryHeading: "Profile Summary",
      experienceHeading: "Organizational & Event Experience",
      educationHeading: "Education",
      skillsHeading: "Skills & Languages",
      close: "Close",
    },
    contact: {
      kicker: "Professional Contact",
      heading: "Open for Career Opportunities & Collaboration",
      subheading:
        "For HR recruitment inquiries, interview scheduling, or project collaboration, feel free to reach out directly.",
      emailLabel: "Email",
      emailHint: "Direct email correspondence",
      phoneLabel: "Phone",
      phoneHint: "Direct phone contact",
      linkedinLabel: "LinkedIn",
      copyAction: "Copy",
      copied: "Copied",
      openLinkedIn: "Open LinkedIn",
      sendEmail: "Send Email",
      callPhone: "Call Directly",
    },
    placeholder: {
      awaitingPhoto: "Photo Slot Ready",
      aspectLabel: "Ratio",
    },
    footer: {
      copyright: "Michelle Nathalie · Bachelor of Management",
      credentialLine: "Universitas Ciputra Makassar · Makassar, Indonesia",
      backToTop: "Back to top",
    },
  },
};

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
      summaryHeading: string;
      experienceHeading: string;
      educationHeading: string;
      skillsHeading: string;
      gpaLabel: string;
      close: string;
    };
    contact: {
      kicker: string;
      heading: string;
      emailLabel: string;
      whatsappLabel: string;
      linkedinLabel: string;
      copyAction: string;
      copied: string;
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
      viewCv: "Lihat CV",
      languageLabel: "Bahasa Tampilan",
    },
    hero: {
      subtitle: "S1 Manajemen · Manajemen Proyek, Acara & Kepemimpinan Organisasi",
      availableLocation: "Makassar, Indonesia",
      academicLine: "Universitas Ciputra Makassar (2022–2026)",
      ctaCv: "Lihat CV",
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
      subtitle: "Format siap baca HR yang dapat dicetak atau disimpan sebagai PDF.",
      printButton: "Cetak / PDF",
      summaryHeading: "Ringkasan Profil",
      experienceHeading: "Pengalaman Organisasi & Acara",
      educationHeading: "Pendidikan",
      skillsHeading: "Kemampuan & Bahasa",
      gpaLabel: "IPK",
      close: "Tutup",
    },
    contact: {
      kicker: "Kontak Profesional",
      heading: "Terbuka untuk Kesempatan Kerja & Kolaborasi",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "LinkedIn",
      copyAction: "Salin",
      copied: "Tersalin",
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
      viewCv: "View CV",
      languageLabel: "Display Language",
    },
    hero: {
      subtitle: "Bachelor of Management · Project, Event & Organizational Leadership",
      availableLocation: "Makassar, Indonesia",
      academicLine: "Universitas Ciputra Makassar (2022–2026)",
      ctaCv: "View CV",
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
      subtitle: "Structured HR-ready resume view for printing or saving as PDF.",
      printButton: "Print / PDF",
      summaryHeading: "Profile Summary",
      experienceHeading: "Organizational & Event Experience",
      educationHeading: "Education",
      skillsHeading: "Skills & Languages",
      gpaLabel: "GPA",
      close: "Close",
    },
    contact: {
      kicker: "Professional Contact",
      heading: "Open for Career Opportunities & Collaboration",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "LinkedIn",
      copyAction: "Copy",
      copied: "Copied",
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

import type { Locale } from "./portfolio";

export const UI_COPY: Record<
  Locale,
  {
    nav: {
      overview: string;
      experiences: string;
      skills: string;
      contact: string;
      viewCv: string;
      menuTitle: string;
      languageLabel: string;
    };
    hero: {
      subtitle: string;
      availableLocation: string;
      ctaExplore: string;
      ctaCv: string;
      ctaLinkedIn: string;
      educationLabel: string;
      gpaLabel: string;
      outsideGalleryTitle: string;
    };
    experiences: {
      kicker: string;
      heading: string;
      subheading: string;
      filterAll: string;
      filterEvent: string;
      filterOrg: string;
      seriesBadge: string;
      seriesHint: string;
      openSeriesCta: string;
      openCardCta: string;
      categoryEvent: string;
      categoryOrg: string;
      highlightedSkillBanner: string;
      clearSkillFilter: string;
    };
    modal: {
      close: string;
      prev: string;
      next: string;
      responsibilitiesTitle: string;
      galleryTitle: string;
      galleryHint: string;
      editionComparisonTitle: string;
      allEditionsTab: string;
      umbrellaLabel: string;
      zoomPhoto: string;
    };
    skillsSection: {
      kicker: string;
      heading: string;
      subheading: string;
      educationCardTitle: string;
      skillHint: string;
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
      phoneLabel: string;
      linkedinLabel: string;
      copyEmail: string;
      copied: string;
      copyPhone: string;
      openLinkedIn: string;
      sendEmail: string;
    };
    placeholder: {
      awaitingPhoto: string;
      aspectLabel: string;
    };
    footer: {
      copyright: string;
      backToTop: string;
    };
  }
> = {
  id: {
    nav: {
      overview: "Profil",
      experiences: "Pengalaman",
      skills: "Kompetensi",
      contact: "Kontak",
      viewCv: "Lihat / Cetak CV",
      menuTitle: "Menu Navigasi",
      languageLabel: "Bahasa Tampilan",
    },
    hero: {
      subtitle: "S1 Manajemen · Manajemen Proyek, Acara & Kepemimpinan Organisasi",
      availableLocation: "Makassar, Indonesia",
      ctaExplore: "Lihat Pengalaman",
      ctaCv: "Lihat / Cetak CV",
      ctaLinkedIn: "LinkedIn",
      educationLabel: "Pendidikan",
      gpaLabel: "IPK",
      outsideGalleryTitle: "Dokumentasi Utama (Klik untuk Detail)",
    },
    experiences: {
      kicker: "Rekam Jejak Pengalaman",
      heading: "Pengalaman Acara & Organisasi",
      subheading:
        "Klik kartu pengalaman mana pun untuk melihat detail tanggung jawab lengkap berdampingan dengan foto dokumentasi.",
      filterAll: "Semua (7)",
      filterEvent: "Acara (5)",
      filterOrg: "Organisasi (2)",
      seriesBadge: "Seri 3 Edisi · 2022–2025",
      seriesHint:
        "Klik satu kali untuk melihat ENTRANCE 1.0, 2.0, dan 3.0 sekaligus beserta perbedaan perannya.",
      openSeriesCta: "Buka 3 Edisi ENTRANCE",
      openCardCta: "Lihat Detail & Foto",
      categoryEvent: "Acara / Program",
      categoryOrg: "Organisasi",
      highlightedSkillBanner: "Menampilkan pengalaman terkait kompetensi:",
      clearSkillFilter: "Reset",
    },
    modal: {
      close: "Tutup",
      prev: "Sebelumnya",
      next: "Berikutnya",
      responsibilitiesTitle: "Tanggung Jawab & Pelaksanaan",
      galleryTitle: "Dokumentasi Foto",
      galleryHint: "Klik foto yang tersedia untuk melihat ukuran penuh.",
      editionComparisonTitle: "Progresi Peran Lintas 3 Edisi",
      allEditionsTab: "Semua 3 Edisi",
      umbrellaLabel: "Naungan",
      zoomPhoto: "Perbesar",
    },
    skillsSection: {
      kicker: "Pendidikan & Kemampuan",
      heading: "Latar Akademik & Kompetensi",
      subheading:
        "Klik salah satu kompetensi di bawah untuk menyorot pengalaman organisasi dan acara yang relevan.",
      educationCardTitle: "Pendidikan Formal",
      skillHint: "Klik untuk sorot pengalaman",
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
      phoneLabel: "Telepon",
      linkedinLabel: "LinkedIn",
      copyEmail: "Salin Email",
      copied: "Tersalin!",
      copyPhone: "Salin Nomor",
      openLinkedIn: "Buka LinkedIn",
      sendEmail: "Kirim Email",
    },
    placeholder: {
      awaitingPhoto: "Slot Foto Siap Diisi",
      aspectLabel: "Rasio",
    },
    footer: {
      copyright: "Michelle Nathalie · Makassar, Indonesia",
      backToTop: "Kembali ke atas",
    },
  },
  en: {
    nav: {
      overview: "Profile",
      experiences: "Experience",
      skills: "Skills",
      contact: "Contact",
      viewCv: "View / Print CV",
      menuTitle: "Navigation Menu",
      languageLabel: "Display Language",
    },
    hero: {
      subtitle: "Bachelor of Management · Project, Event & Organizational Leadership",
      availableLocation: "Makassar, Indonesia",
      ctaExplore: "Explore Experience",
      ctaCv: "View / Print CV",
      ctaLinkedIn: "LinkedIn",
      educationLabel: "Education",
      gpaLabel: "GPA",
      outsideGalleryTitle: "Featured Frames (Click to Inspect)",
    },
    experiences: {
      kicker: "Verified Track Record",
      heading: "Event & Organizational Experience",
      subheading:
        "Click any experience card to inspect full responsibilities paired side-by-side with event photography.",
      filterAll: "All (7)",
      filterEvent: "Events (5)",
      filterOrg: "Organizations (2)",
      seriesBadge: "3-Edition Series · 2022–2025",
      seriesHint:
        "Click once to view ENTRANCE 1.0, 2.0, and 3.0 side-by-side with clear role differentiation.",
      openSeriesCta: "Open 3 ENTRANCE Editions",
      openCardCta: "View Details & Photos",
      categoryEvent: "Event / Program",
      categoryOrg: "Organization",
      highlightedSkillBanner: "Highlighting experiences demonstrating:",
      clearSkillFilter: "Reset",
    },
    modal: {
      close: "Close",
      prev: "Previous",
      next: "Next",
      responsibilitiesTitle: "Responsibilities & Execution",
      galleryTitle: "Photo Documentation",
      galleryHint: "Click any populated photo to enlarge.",
      editionComparisonTitle: "Role Progression Across 3 Editions",
      allEditionsTab: "All 3 Editions",
      umbrellaLabel: "Organization",
      zoomPhoto: "Enlarge",
    },
    skillsSection: {
      kicker: "Education & Capabilities",
      heading: "Academic Foundation & Core Skills",
      subheading:
        "Click any skill pill below to highlight matching event and organizational experiences.",
      educationCardTitle: "Education",
      skillHint: "Click to highlight experiences",
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
      phoneLabel: "Phone",
      linkedinLabel: "LinkedIn",
      copyEmail: "Copy Email",
      copied: "Copied!",
      copyPhone: "Copy Number",
      openLinkedIn: "Open LinkedIn",
      sendEmail: "Send Email",
    },
    placeholder: {
      awaitingPhoto: "Photo Slot Ready",
      aspectLabel: "Ratio",
    },
    footer: {
      copyright: "Michelle Nathalie · Makassar, Indonesia",
      backToTop: "Back to top",
    },
  },
};

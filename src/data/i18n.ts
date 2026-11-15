import type { Locale } from "./portfolio";

export const UI_COPY: Record<
  Locale,
  {
    nav: {
      overview: string;
      highlights: string;
      experiences: string;
      timeline: string;
      skills: string;
      contact: string;
      viewCv: string;
    };
    hero: {
      eyebrow: string;
      availableLocation: string;
      ctaExplore: string;
      ctaCv: string;
      ctaLinkedIn: string;
      educationLabel: string;
      gpaLabel: string;
      portraitSlotHint: string;
    };
    highlights: {
      kicker: string;
      heading: string;
      subheading: string;
      openDetail: string;
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
      rankPrefix: string;
      umbrellaLabel: string;
      scaleLabel: string;
      zoomPhoto: string;
    };
    timeline: {
      kicker: string;
      heading: string;
      subheading: string;
      clickToInspect: string;
      concurrentNote: string;
    };
    skillsSection: {
      kicker: string;
      heading: string;
      subheading: string;
      educationCardTitle: string;
      skillHint: string;
      matchedCount: string;
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
      languagesLabel: string;
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
      builtFactual: string;
      copyright: string;
    };
  }
> = {
  id: {
    nav: {
      overview: "Profil",
      highlights: "Sorotan",
      experiences: "Pengalaman",
      timeline: "Linimasa",
      skills: "Kompetensi",
      contact: "Kontak",
      viewCv: "Lihat / Cetak CV",
    },
    hero: {
      eyebrow: "Portofolio Event Planner & Kepemimpinan Organisasi",
      availableLocation: "Berbasis di Makassar, Indonesia",
      ctaExplore: "Jelajahi Pengalaman",
      ctaCv: "Lihat / Cetak CV (ID · EN)",
      ctaLinkedIn: "Profil LinkedIn",
      educationLabel: "Pendidikan Terakhir",
      gpaLabel: "IPK",
      portraitSlotHint: "Siap diisi foto profil resmi di /public/images/",
    },
    highlights: {
      kicker: "Dokumentasi Pilihan",
      heading: "Sorotan Lapangan & Acara",
      subheading:
        "Cuplikan visual yang tampil langsung di halaman utama. Klik frame mana pun untuk membuka rincian acara dan dokumentasi lengkapnya.",
      openDetail: "Buka Rincian",
    },
    experiences: {
      kicker: "Rekam Jejak Terstruktur",
      heading: "Pengalaman Acara & Organisasi",
      subheading:
        "Ringkasan padat untuk memudahkan peninjauan HR. Klik salah satu kartu untuk membuka deskripsi tanggung jawab berdampingan dengan galeri dokumentasi.",
      filterAll: "Semua (7)",
      filterEvent: "Acara & Festival (5)",
      filterOrg: "Organisasi (2)",
      seriesBadge: "Seri 3 Edisi · 2022–2025",
      seriesHint:
        "Klik satu kali untuk membandingkan seluruh 3 edisi (1.0, 2.0, 3.0) beserta perbedaan peran dan tanggung jawabnya.",
      openSeriesCta: "Buka 3 Edisi ENTRANCE",
      openCardCta: "Lihat Teks & Dokumentasi",
      categoryEvent: "Acara / Program",
      categoryOrg: "Organisasi",
      highlightedSkillBanner: "Menampilkan pengalaman terkait kompetensi:",
      clearSkillFilter: "Reset Sorotan",
    },
    modal: {
      close: "Tutup",
      prev: "Sebelumnya",
      next: "Berikutnya",
      responsibilitiesTitle: "Tanggung Jawab & Pelaksanaan",
      galleryTitle: "Dokumentasi Foto",
      galleryHint: "Klik bingkai foto yang tersedia untuk melihat pratinjau ukuran penuh.",
      editionComparisonTitle: "Progresi Peran Lintas 3 Edisi",
      allEditionsTab: "Semua 3 Edisi",
      rankPrefix: "Peringkat Peran",
      umbrellaLabel: "Naungan",
      scaleLabel: "Skala Tercatat",
      zoomPhoto: "Perbesar",
    },
    timeline: {
      kicker: "Kronologi Kerja 2022–2026",
      heading: "Linimasa Kepemimpinan & Acara",
      subheading:
        "Menunjukkan koordinasi berbagai tanggung jawab acara dan organisasi yang berjalan beriringan. Klik entri untuk melihat detail.",
      clickToInspect: "Klik untuk rincian",
      concurrentNote: "Periode berjalan beriringan sesuai data CV",
    },
    skillsSection: {
      kicker: "Pendidikan & Kemampuan",
      heading: "Latar Akademik & Kompetensi",
      subheading:
        "Klik salah satu kemampuan untuk menyorot pengalaman organisasi dan acara yang menerapkannya secara nyata.",
      educationCardTitle: "Pendidikan Formal",
      skillHint: "Klik skill untuk sorot pengalaman",
      matchedCount: "pengalaman terkait",
    },
    cvModal: {
      title: "Ringkasan CV Dwibahasa (Faktual)",
      subtitle: "Format siap baca HR dan dapat dicetak atau disimpan sebagai PDF dalam Bahasa Indonesia maupun English.",
      printButton: "Cetak / Simpan PDF",
      switchCvLang: "Bahasa CV:",
      summaryHeading: "Ringkasan Profil",
      experienceHeading: "Pengalaman Organisasi & Acara",
      educationHeading: "Pendidikan",
      skillsHeading: "Kemampuan & Bahasa",
      languagesLabel: "Bahasa",
      close: "Tutup",
    },
    contact: {
      kicker: "Hubungi Michelle Nathalie",
      heading: "Terbuka untuk Diskusi & Peluang Karier",
      subheading:
        "Untuk kebutuhan rekrutmen HR, koordinasi acara, atau diskusi profesional lebih lanjut, silakan hubungi melalui kanal berikut.",
      emailLabel: "Email Langsung",
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
      builtFactual: "Seluruh data disusun faktual berdasarkan CV resmi Michelle Nathalie.",
      copyright: "Michelle Nathalie · Makassar, Indonesia",
    },
  },
  en: {
    nav: {
      overview: "Profile",
      highlights: "Highlights",
      experiences: "Experience",
      timeline: "Timeline",
      skills: "Skills",
      contact: "Contact",
      viewCv: "View / Print CV",
    },
    hero: {
      eyebrow: "Event Planner & Organizational Leadership Portfolio",
      availableLocation: "Based in Makassar, Indonesia",
      ctaExplore: "Explore Experience",
      ctaCv: "View / Print CV (ID · EN)",
      ctaLinkedIn: "LinkedIn Profile",
      educationLabel: "Education",
      gpaLabel: "GPA",
      portraitSlotHint: "Ready for official portrait in /public/images/",
    },
    highlights: {
      kicker: "Selected Documentation",
      heading: "Field & Event Highlights",
      subheading:
        "Curated visual slots displayed upfront on the landing page. Click any frame to inspect full event details and documentation.",
      openDetail: "Inspect Event",
    },
    experiences: {
      kicker: "Structured Track Record",
      heading: "Event & Organizational Experience",
      subheading:
        "Concise cards designed for effortless HR review. Click any card to inspect complete responsibilities paired side-by-side with event photos.",
      filterAll: "All (7)",
      filterEvent: "Events & Festivals (5)",
      filterOrg: "Organizations (2)",
      seriesBadge: "3-Edition Series · 2022–2025",
      seriesHint:
        "Click once to compare all 3 editions (1.0, 2.0, 3.0) together with clear role and rank differentiation.",
      openSeriesCta: "Open 3 ENTRANCE Editions",
      openCardCta: "View Details & Photos",
      categoryEvent: "Event / Program",
      categoryOrg: "Organization",
      highlightedSkillBanner: "Highlighting experiences demonstrating:",
      clearSkillFilter: "Clear Highlight",
    },
    modal: {
      close: "Close",
      prev: "Previous",
      next: "Next",
      responsibilitiesTitle: "Responsibilities & Execution",
      galleryTitle: "Photo Documentation",
      galleryHint: "Click any populated frame to enlarge the photo.",
      editionComparisonTitle: "Role Progression Across 3 Editions",
      allEditionsTab: "All 3 Editions",
      rankPrefix: "Role Tier",
      umbrellaLabel: "Organization",
      scaleLabel: "Recorded Scale",
      zoomPhoto: "Enlarge",
    },
    timeline: {
      kicker: "2022–2026 Chronology",
      heading: "Leadership & Event Run-of-Show",
      subheading:
        "Displays concurrent event productions and organizational mandates across years. Select any item to inspect full details.",
      clickToInspect: "Click to inspect",
      concurrentNote: "Concurrent periods based on verified CV dates",
    },
    skillsSection: {
      kicker: "Education & Capabilities",
      heading: "Academic Foundation & Core Skills",
      subheading:
        "Select any skill pill to highlight the documented organizational or event experiences where it was applied.",
      educationCardTitle: "Education",
      skillHint: "Click any skill to highlight matching experiences",
      matchedCount: "related experiences",
    },
    cvModal: {
      title: "Bilingual Factual Resume (ID / EN)",
      subtitle: "HR-ready structured view for printing or saving as PDF in either Indonesian or English.",
      printButton: "Print / Save PDF",
      switchCvLang: "CV Language:",
      summaryHeading: "Profile Summary",
      experienceHeading: "Organizational & Event Experience",
      educationHeading: "Education",
      skillsHeading: "Skills & Languages",
      languagesLabel: "Languages",
      close: "Close",
    },
    contact: {
      kicker: "Connect with Michelle Nathalie",
      heading: "Open for HR Inquiries & Event Collaboration",
      subheading:
        "For recruitment discussions, corporate event coordination, or interview scheduling, reach out directly through the verified channels below.",
      emailLabel: "Direct Email",
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
      builtFactual: "All portfolio records are strictly factual and sourced from Michelle Nathalie's official CV.",
      copyright: "Michelle Nathalie · Makassar, Indonesia",
    },
  },
};

export type Locale = "id" | "en";

export interface LocalizedText {
  id: string;
  en: string;
}

export interface MediaSlot {
  id: string;
  /** Drop real image path under /public/images/... e.g. "/images/rekfest/cover.jpg" */
  src: string | null;
  slotCode: string;
  aspect: "16/10" | "4/5" | "4/3";
  caption: LocalizedText;
  alt: LocalizedText;
}

export interface FactualMetric {
  value: string;
  label: LocalizedText;
}

export interface EntranceEdition {
  id: "entrance-1" | "entrance-2" | "entrance-3";
  editionLabel: string;
  period: string;
  rankTier: number;
  rankBadge: LocalizedText;
  roleTitle: LocalizedText;
  umbrella?: LocalizedText;
  summaryHook: LocalizedText;
  metrics: FactualMetric[];
  responsibilities: {
    id: string[];
    en: string[];
  };
  coverSlot: MediaSlot;
  gallerySlots: MediaSlot[];
}

export type ExperienceCategory = "event" | "organization";

export interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  title: LocalizedText;
  shortCode: string;
  period: string;
  /** Numeric timeline bounds [startYearMonth, endYearMonth] for chronological run-of-show */
  timelineStart: { year: number; month: number };
  timelineEnd: { year: number; month: number };
  role: LocalizedText;
  umbrella?: LocalizedText;
  summaryHook: LocalizedText;
  metrics: FactualMetric[];
  relatedSkills: string[];
  responsibilities: {
    id: string[];
    en: string[];
  };
  coverSlot: MediaSlot;
  gallerySlots: MediaSlot[];
}

export interface HighlightFrame {
  id: string;
  targetExperienceId: string;
  tag: LocalizedText;
  title: LocalizedText;
  slot: MediaSlot;
}

export interface SkillGroup {
  id: "hard" | "soft" | "languages";
  title: LocalizedText;
  items: {
    key: string;
    label: LocalizedText;
    relatedExperienceIds: string[];
  }[];
}

export const PORTFOLIO_PROFILE = {
  name: "Michelle Nathalie",
  location: "Makassar, Indonesia",
  email: "micnatar@gmail.com",
  phoneDisplay: "082291956529",
  phoneHref: "tel:+6282291956529",
  linkedinUrl: "https://www.linkedin.com/in/michelle-nathalie-a3aaab295/",
  summary: {
    id: "Lulusan S1 Manajemen Universitas Ciputra Makassar dengan pengalaman memimpin organisasi, administrasi, mengelola berbagai program kerja, dan pengelolaan tim. Memiliki kemampuan analitis dan strategis dalam merencanakan serta mengelola proyek, disertai kemampuan komunikasi dan pemecahan masalah yang baik, mengelola berbagai tanggung jawab secara terstruktur, dan beradaptasi dengan lingkungan kerja yang dinamis.",
    en: "Bachelor of Management graduate from Universitas Ciputra Makassar with experience in organizational leadership, administration, managing work programs, and team management. Possesses analytical and strategic capabilities in planning and managing projects, complemented by strong communication and problem-solving skills, structured management of responsibilities, and adaptability to dynamic work environments.",
  },
  portraitSlot: {
    id: "hero-portrait",
    src: null,
    slotCode: "PROFIL // PORTRAIT",
    aspect: "4/3" as const,
    caption: {
      id: "Michelle Nathalie — Makassar, Indonesia",
      en: "Michelle Nathalie — Makassar, Indonesia",
    },
    alt: {
      id: "Foto profil Michelle Nathalie",
      en: "Profile portrait of Michelle Nathalie",
    },
  },
  education: {
    university: "Universitas Ciputra Makassar",
    city: "Makassar",
    period: "Sep 2022 – Oct 2026",
    degree: {
      id: "S1 Manajemen (Bachelor of Management)",
      en: "Bachelor of Management",
    },
    status: {
      id: "Lulusan S1 Manajemen",
      en: "Bachelor of Management Graduate",
    },
    gpa: "3.77 / 4.00",
  },
};

export const ENTRANCE_SERIES = {
  id: "entrance-series",
  shortCode: "SERIES // 2022–2025",
  period: "Nov 2022 – May 2025",
  title: {
    id: "ENTRANCE Series (1.0 · 2.0 · 3.0)",
    en: "ENTRANCE Series (1.0 · 2.0 · 3.0)",
  },
  subtitle: {
    id: "Tiga edisi berurutan dengan peningkatan tanggung jawab dari Sponsorship Department hingga Ketua Pelaksana.",
    en: "Three consecutive editions progressing from Sponsorship Department to Chairperson.",
  },
  umbrella: {
    id: "Himpunan Mahasiswa Manajemen",
    en: "Management Student Union (Himpunan Mahasiswa Manajemen)",
  },
  relatedSkills: [
    "Event Management",
    "Strategic Planning",
    "Leadership",
    "Communication",
    "Decision Making",
    "Problem Solving",
    "Time Management",
  ],
  coverSlot: {
    id: "entrance-cover",
    src: null,
    slotCode: "COVER // ENTRANCE 1.0–3.0",
    aspect: "16/10" as const,
    caption: {
      id: "Highlight pelaksanaan ENTRANCE Series",
      en: "ENTRANCE Series flagship documentation",
    },
    alt: {
      id: "Sampul portofolio ENTRANCE Series 1.0 hingga 3.0",
      en: "ENTRANCE Series 1.0 to 3.0 portfolio cover",
    },
  },
  editions: [
    {
      id: "entrance-1",
      editionLabel: "ENTRANCE 1.0",
      period: "Nov 2022 – May 2023",
      rankTier: 1,
      rankBadge: {
        id: "Tingkat 1 · Divisi",
        en: "Tier 1 · Department",
      },
      roleTitle: {
        id: "Sponsorship Department",
        en: "Sponsorship Department",
      },
      summaryHook: {
        id: "Pendekatan, negosiasi, dan kerja sama sponsor perusahaan.",
        en: "Prospecting, negotiation, and corporate sponsorship acquisition.",
      },
      metrics: [
        {
          value: "3",
          label: { id: "Perusahaan Sponsor", en: "Corporate Sponsors" },
        },
      ],
      responsibilities: {
        id: [
          "Mengidentifikasi dan melakukan pendekatan kepada calon sponsor untuk mendukung pelaksanaan ENTRANCE 1.0.",
          "Melakukan komunikasi dan negosiasi terkait bentuk kerja sama dengan calon sponsor.",
          "Berhasil menjalin kerja sama dengan 3 perusahaan sebagai sponsor untuk ENTRANCE 1.0.",
        ],
        en: [
          "Identified and approached prospective sponsors to support the execution of ENTRANCE 1.0.",
          "Conducted communication and partnership negotiations regarding collaboration terms with prospective sponsors.",
          "Successfully established partnerships with 3 companies as sponsors for ENTRANCE 1.0.",
        ],
      },
      coverSlot: {
        id: "e1-cover",
        src: null,
        slotCode: "ENTRANCE 1.0 // SPONSORSHIP",
        aspect: "16/10",
        caption: {
          id: "Dokumentasi ENTRANCE 1.0 — Sponsorship Department",
          en: "ENTRANCE 1.0 documentation — Sponsorship Department",
        },
        alt: {
          id: "Dokumentasi ENTRANCE 1.0",
          en: "ENTRANCE 1.0 documentation",
        },
      },
      gallerySlots: [
        {
          id: "e1-g1",
          src: null,
          slotCode: "ENTRANCE 1.0 // FOTO 01",
          aspect: "16/10",
          caption: {
            id: "Dokumentasi kemitraan & pelaksanaan ENTRANCE 1.0",
            en: "Partnership & execution documentation for ENTRANCE 1.0",
          },
          alt: { id: "Foto ENTRANCE 1.0 #1", en: "ENTRANCE 1.0 Photo #1" },
        },
        {
          id: "e1-g2",
          src: null,
          slotCode: "ENTRANCE 1.0 // FOTO 02",
          aspect: "16/10",
          caption: {
            id: "Tim Sponsorship ENTRANCE 1.0",
            en: "ENTRANCE 1.0 Sponsorship team documentation",
          },
          alt: { id: "Foto ENTRANCE 1.0 #2", en: "ENTRANCE 1.0 Photo #2" },
        },
      ],
    },
    {
      id: "entrance-2",
      editionLabel: "ENTRANCE 2.0",
      period: "Oct 2023 – May 2024",
      rankTier: 2,
      rankBadge: {
        id: "Tingkat 2 · Pimpinan Acara",
        en: "Tier 2 · Chairperson",
      },
      roleTitle: {
        id: "Ketua",
        en: "Chairperson",
      },
      summaryHook: {
        id: "Memimpin 150 anggota dan seluruh divisi selama 4 hari pelaksanaan.",
        en: "Led 150 members and all divisions across a 4-day event.",
      },
      metrics: [
        { value: "150", label: { id: "Anggota", en: "Members" } },
        { value: "4 Hari", label: { id: "Durasi Acara", en: "Event Days" } },
        { value: "15.000+", label: { id: "Pengunjung", en: "Attendees" } },
      ],
      responsibilities: {
        id: [
          "Memimpin dan bertanggung jawab atas keseluruhan pelaksanaan ENTRANCE 2.0.",
          "Mengoordinasikan 150 anggota dan seluruh divisi dalam persiapan hingga pelaksanaan acara.",
          "Mengelola koordinasi, timeline, dan penyelesaian kendala untuk memastikan acara berjalan sesuai rencana.",
          "Berhasil menyelenggarakan acara selama 4 hari dengan total 15.000+ pengunjung.",
        ],
        en: [
          "Led and held overall accountability for the execution of ENTRANCE 2.0.",
          "Coordinated 150 members and all divisions from preparation through event execution.",
          "Managed cross-team coordination, timeline, and issue resolution to keep the event on plan.",
          "Successfully delivered a 4-day event with a total of 15,000+ attendees.",
        ],
      },
      coverSlot: {
        id: "e2-cover",
        src: null,
        slotCode: "ENTRANCE 2.0 // KETUA",
        aspect: "16/10",
        caption: {
          id: "Dokumentasi ENTRANCE 2.0 — 4 Hari, 15.000+ Pengunjung",
          en: "ENTRANCE 2.0 documentation — 4 Days, 15,000+ Attendees",
        },
        alt: {
          id: "Dokumentasi ENTRANCE 2.0",
          en: "ENTRANCE 2.0 documentation",
        },
      },
      gallerySlots: [
        {
          id: "e2-g1",
          src: null,
          slotCode: "ENTRANCE 2.0 // FOTO 01",
          aspect: "16/10",
          caption: {
            id: "Suasana acara ENTRANCE 2.0 (15.000+ pengunjung)",
            en: "ENTRANCE 2.0 event crowd (15,000+ attendees)",
          },
          alt: { id: "Foto ENTRANCE 2.0 #1", en: "ENTRANCE 2.0 Photo #1" },
        },
        {
          id: "e2-g2",
          src: null,
          slotCode: "ENTRANCE 2.0 // FOTO 02",
          aspect: "16/10",
          caption: {
            id: "Koordinasi 150 anggota & seluruh divisi ENTRANCE 2.0",
            en: "Coordination of 150 members & divisions at ENTRANCE 2.0",
          },
          alt: { id: "Foto ENTRANCE 2.0 #2", en: "ENTRANCE 2.0 Photo #2" },
        },
      ],
    },
    {
      id: "entrance-3",
      editionLabel: "ENTRANCE 3.0",
      period: "Oct 2024 – May 2025",
      rankTier: 3,
      rankBadge: {
        id: "Tingkat 3 · Pimpinan Acara (HMM)",
        en: "Tier 3 · Chairperson (Student Union)",
      },
      roleTitle: {
        id: "Ketua",
        en: "Chairperson",
      },
      umbrella: {
        id: "Di bawah naungan Himpunan Mahasiswa Manajemen",
        en: "Under Management Student Union",
      },
      summaryHook: {
        id: "Menyusun konsep & memimpin 150+ anggota dengan total 20.000+ pengunjung.",
        en: "Designed concept & led 150+ members reaching 20,000+ attendees.",
      },
      metrics: [
        { value: "150+", label: { id: "Anggota", en: "Members" } },
        { value: "3 Hari", label: { id: "Durasi Acara", en: "Event Days" } },
        { value: "20.000+", label: { id: "Pengunjung", en: "Attendees" } },
      ],
      responsibilities: {
        id: [
          "Memimpin dan bertanggung jawab atas keseluruhan pelaksanaan ENTRANCE 3.0 di bawah naungan Himpunan Mahasiswa Manajemen.",
          "Memimpin dan mengoordinasikan 150+ anggota dalam persiapan hingga pelaksanaan acara.",
          "Menyusun konsep dan timeline serta mengawasi progres setiap divisi untuk memastikan kegiatan berjalan sesuai rencana.",
          "Mengambil keputusan dan menangani kendala selama persiapan hingga pelaksanaan acara.",
          "Berhasil menyelenggarakan acara selama 3 hari dengan total 20.000+ pengunjung.",
        ],
        en: [
          "Led and held overall accountability for ENTRANCE 3.0 under the Management Student Union.",
          "Led and coordinated 150+ committee members from preparation through execution.",
          "Developed the event concept and timeline while monitoring each division's progress against plan.",
          "Made decisions and resolved operational issues throughout preparation and event days.",
          "Successfully delivered a 3-day event with a total of 20,000+ attendees.",
        ],
      },
      coverSlot: {
        id: "e3-cover",
        src: null,
        slotCode: "ENTRANCE 3.0 // KETUA",
        aspect: "16/10",
        caption: {
          id: "Dokumentasi ENTRANCE 3.0 — 3 Hari, 20.000+ Pengunjung",
          en: "ENTRANCE 3.0 documentation — 3 Days, 20,000+ Attendees",
        },
        alt: {
          id: "Dokumentasi ENTRANCE 3.0",
          en: "ENTRANCE 3.0 documentation",
        },
      },
      gallerySlots: [
        {
          id: "e3-g1",
          src: null,
          slotCode: "ENTRANCE 3.0 // FOTO 01",
          aspect: "16/10",
          caption: {
            id: "Area utama ENTRANCE 3.0 (20.000+ pengunjung)",
            en: "ENTRANCE 3.0 main event ground (20,000+ attendees)",
          },
          alt: { id: "Foto ENTRANCE 3.0 #1", en: "ENTRANCE 3.0 Photo #1" },
        },
        {
          id: "e3-g2",
          src: null,
          slotCode: "ENTRANCE 3.0 // FOTO 02",
          aspect: "16/10",
          caption: {
            id: "Panitia 150+ anggota ENTRANCE 3.0",
            en: "150+ committee members of ENTRANCE 3.0",
          },
          alt: { id: "Foto ENTRANCE 3.0 #2", en: "ENTRANCE 3.0 Photo #2" },
        },
      ],
    },
  ] satisfies EntranceEdition[],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "rekfest-2",
    category: "event",
    shortCode: "EVT // 01",
    title: {
      id: "REKFEST 2.0",
      en: "REKFEST 2.0",
    },
    period: "Oct 2025 – May 2026",
    timelineStart: { year: 2025, month: 10 },
    timelineEnd: { year: 2026, month: 5 },
    role: {
      id: "Penanggung Jawab",
      en: "Person in Charge",
    },
    umbrella: {
      id: "Di bawah naungan Badan Eksekutif Mahasiswa (BEM)",
      en: "Under Student Executive Board (BEM)",
    },
    summaryHook: {
      id: "Penanggung jawab utama festival 3 hari dengan >100 anggota & 30.000+ pengunjung.",
      en: "Primary lead of a 3-day festival managing >100 members & 30,000+ attendees.",
    },
    metrics: [
      { value: ">100", label: { id: "Anggota", en: "Members" } },
      { value: "3 Hari", label: { id: "Durasi Acara", en: "Event Days" } },
      { value: "30.000+", label: { id: "Pengunjung", en: "Attendees" } },
    ],
    relatedSkills: [
      "Event Management",
      "Strategic Planning",
      "Leadership",
      "Communication",
      "Decision Making",
      "Time Management",
    ],
    responsibilities: {
      id: [
        "Bertanggung jawab sebagai penanggung jawab utama REKFEST 2.0, acara di bawah naungan BEM.",
        "Memimpin dan mengoordinasikan >100 anggota dalam persiapan hingga pelaksanaan kegiatan.",
        "Menjadi penghubung antara tim pelaksana dan pihak kampus dalam mengoordinasikan kebutuhan acara.",
        "Mengawasi koordinasi antar-divisi serta memastikan seluruh rangkaian acara berjalan sesuai perencanaan dan timeline.",
        "Berhasil menyelenggarakan acara selama 3 hari dengan total 30.000+ pengunjung.",
      ],
      en: [
        "Served as the primary Person in Charge for REKFEST 2.0 under the Student Council (BEM).",
        "Led and coordinated >100 committee members from preparation through event execution.",
        "Acted as liaison between the organizing team and university authorities to coordinate event requirements.",
        "Supervised cross-division coordination and ensured the full event schedule aligned with planning and timeline.",
        "Successfully delivered a 3-day event with a total of 30,000+ attendees.",
      ],
    },
    coverSlot: {
      id: "rekfest-cover",
      src: null,
      slotCode: "COVER // REKFEST 2.0",
      aspect: "16/10",
      caption: {
        id: "Dokumentasi utama REKFEST 2.0",
        en: "REKFEST 2.0 primary documentation",
      },
      alt: {
        id: "Sampul dokumentasi REKFEST 2.0",
        en: "REKFEST 2.0 documentation cover",
      },
    },
    gallerySlots: [
      {
        id: "rekfest-g1",
        src: null,
        slotCode: "REKFEST 2.0 // FOTO 01",
        aspect: "16/10",
        caption: {
          id: "Suasana pengunjung REKFEST 2.0 (30.000+ pengunjung)",
          en: "REKFEST 2.0 festival crowd (30,000+ attendees)",
        },
        alt: { id: "Foto REKFEST 2.0 #1", en: "REKFEST 2.0 Photo #1" },
      },
      {
        id: "rekfest-g2",
        src: null,
        slotCode: "REKFEST 2.0 // FOTO 02",
        aspect: "16/10",
        caption: {
          id: "Koordinasi tim pelaksana (>100 anggota)",
          en: "Organizing committee coordination (>100 members)",
        },
        alt: { id: "Foto REKFEST 2.0 #2", en: "REKFEST 2.0 Photo #2" },
      },
      {
        id: "rekfest-g3",
        src: null,
        slotCode: "REKFEST 2.0 // FOTO 03",
        aspect: "16/10",
        caption: {
          id: "Momen pelaksanaan hari acara",
          en: "Event day execution moment",
        },
        alt: { id: "Foto REKFEST 2.0 #3", en: "REKFEST 2.0 Photo #3" },
      },
    ],
  },
  {
    id: "bem-uc",
    category: "organization",
    shortCode: "ORG // 01",
    title: {
      id: "Badan Eksekutif Mahasiswa (Student Council)",
      en: "Student Executive Board (Student Council)",
    },
    period: "Jul 2025 – Aug 2026",
    timelineStart: { year: 2025, month: 7 },
    timelineEnd: { year: 2026, month: 8 },
    role: {
      id: "Ketua",
      en: "Chairperson",
    },
    umbrella: {
      id: "Universitas Ciputra Makassar",
      en: "Universitas Ciputra Makassar",
    },
    summaryHook: {
      id: "Memimpin >15 organisasi, 32 anggota, dan 8 program kerja dalam satu periode.",
      en: "Led >15 student organizations, 32 council members, and 8 annual work programs.",
    },
    metrics: [
      { value: ">15", label: { id: "Organisasi", en: "Organizations" } },
      { value: "32", label: { id: "Anggota", en: "Members" } },
      { value: "8", label: { id: "Program Kerja", en: "Work Programs" } },
    ],
    relatedSkills: [
      "Strategic Planning",
      "Administrative Management",
      "Leadership",
      "Analytical Thinking",
      "Decision Making",
      "Communication",
    ],
    responsibilities: {
      id: [
        "Memimpin dan mengoordinasikan >15 organisasi serta 32 anggota selama satu periode kepengurusan.",
        "Mengelola dan menyukseskan 8 program kerja selama satu tahun, mulai dari perencanaan hingga evaluasi.",
        "Mengambil keputusan strategis dan menyelesaikan kendala dalam pelaksanaan program organisasi.",
        "Berkoordinasi dengan pihak universitas dan organisasi mahasiswa dalam mendukung pelaksanaan kegiatan.",
      ],
      en: [
        "Led and coordinated >15 student organizations and 32 council members across a full governance term.",
        "Managed and delivered 8 work programs over one year, from planning through post-program evaluation.",
        "Made strategic decisions and resolved obstacles in organizational program execution.",
        "Coordinated with university leadership and student organizations to support campus activities.",
      ],
    },
    coverSlot: {
      id: "bem-cover",
      src: null,
      slotCode: "COVER // BEM UC MAKASSAR",
      aspect: "16/10",
      caption: {
        id: "Kepengurusan Badan Eksekutif Mahasiswa",
        en: "Student Council governance documentation",
      },
      alt: {
        id: "Sampul Badan Eksekutif Mahasiswa",
        en: "Student Council cover",
      },
    },
    gallerySlots: [
      {
        id: "bem-g1",
        src: null,
        slotCode: "BEM // FOTO 01",
        aspect: "16/10",
        caption: {
          id: "Rapat koordinasi bersama >15 organisasi mahasiswa",
          en: "Coordination meeting across >15 student organizations",
        },
        alt: { id: "Foto BEM #1", en: "BEM Photo #1" },
      },
      {
        id: "bem-g2",
        src: null,
        slotCode: "BEM // FOTO 02",
        aspect: "16/10",
        caption: {
          id: "Pengurus inti 32 anggota BEM UC Makassar",
          en: "32-member Student Council team at UC Makassar",
        },
        alt: { id: "Foto BEM #2", en: "BEM Photo #2" },
      },
    ],
  },
  {
    id: "hmm-uc",
    category: "organization",
    shortCode: "ORG // 02",
    title: {
      id: "Himpunan Mahasiswa Manajemen (Student Union)",
      en: "Management Student Union",
    },
    period: "Aug 2024 – Aug 2025",
    timelineStart: { year: 2024, month: 8 },
    timelineEnd: { year: 2025, month: 8 },
    role: {
      id: "Ketua",
      en: "Chairperson",
    },
    umbrella: {
      id: "Universitas Ciputra Makassar",
      en: "Universitas Ciputra Makassar",
    },
    summaryHook: {
      id: "Mengoordinasikan 42 anggota serta menyusun strategi & evaluasi 7 program kerja.",
      en: "Coordinated 42 members and directed strategy & evaluation for 7 work programs.",
    },
    metrics: [
      { value: "42", label: { id: "Anggota", en: "Members" } },
      { value: "7", label: { id: "Program Kerja", en: "Work Programs" } },
      { value: "1 Thn", label: { id: "Periode", en: "Term" } },
    ],
    relatedSkills: [
      "Strategic Planning",
      "Administrative Management",
      "Leadership",
      "Problem Solving",
      "Teamwork",
      "Decision Making",
    ],
    responsibilities: {
      id: [
        "Memimpin dan mengoordinasikan 42 anggota dalam menjalankan program dan kegiatan organisasi.",
        "Menyusun strategi serta mengelola perencanaan, pelaksanaan, dan evaluasi 7 program kerja selama satu periode.",
        "Mengoordinasikan setiap divisi, timeline, dan pembagian tugas untuk memastikan program berjalan sesuai target.",
        "Berkoordinasi dengan pihak internal dan eksternal dalam mendukung pelaksanaan kegiatan organisasi.",
        "Mengambil keputusan dan menyelesaikan berbagai kendala dalam pengelolaan organisasi.",
      ],
      en: [
        "Led and coordinated 42 members in executing organizational programs and activities.",
        "Formulated strategy and oversaw planning, execution, and evaluation of 7 work programs over one term.",
        "Coordinated divisions, timelines, and task allocation to ensure programs met their targets.",
        "Collaborated with internal and external stakeholders in supporting organizational initiatives.",
        "Made decisions and resolved operational challenges in organizational management.",
      ],
    },
    coverSlot: {
      id: "hmm-cover",
      src: null,
      slotCode: "COVER // HIMPUNAN MANAJEMEN",
      aspect: "16/10",
      caption: {
        id: "Kepengurusan Himpunan Mahasiswa Manajemen",
        en: "Management Student Union documentation",
      },
      alt: {
        id: "Sampul Himpunan Mahasiswa Manajemen",
        en: "Management Student Union cover",
      },
    },
    gallerySlots: [
      {
        id: "hmm-g1",
        src: null,
        slotCode: "HIMPUNAN // FOTO 01",
        aspect: "16/10",
        caption: {
          id: "42 anggota Himpunan Mahasiswa Manajemen",
          en: "42 members of the Management Student Union",
        },
        alt: { id: "Foto Himpunan #1", en: "Student Union Photo #1" },
      },
      {
        id: "hmm-g2",
        src: null,
        slotCode: "HIMPUNAN // FOTO 02",
        aspect: "16/10",
        caption: {
          id: "Evaluasi & pelaksanaan 7 program kerja",
          en: "Execution & evaluation of 7 work programs",
        },
        alt: { id: "Foto Himpunan #2", en: "Student Union Photo #2" },
      },
    ],
  },
  {
    id: "seminar-bela-negara",
    category: "event",
    shortCode: "EVT // 02",
    title: {
      id: "Seminar Bela Negara & Anti Narkoba 2025",
      en: "National Defense & Anti-Drug Seminar 2025",
    },
    period: "Oct 2025 – Nov 2025",
    timelineStart: { year: 2025, month: 10 },
    timelineEnd: { year: 2025, month: 11 },
    role: {
      id: "Koordinator Perlengkapan dan Penanggung Jawab",
      en: "Equipment Coordinator & Person in Charge",
    },
    summaryHook: {
      id: "Koordinasi teknis, venue, administrasi & pembicara BNN, Dokter Residen, TNI AD.",
      en: "Managed venue logistics, decor, administration & speakers from BNN, Resident Doctors, TNI AD.",
    },
    metrics: [
      { value: "3", label: { id: "Instansi Pembicara", en: "Speaker Institutions" } },
      { value: "2 Bulan", label: { id: "Siklus Persiapan", en: "Prep Cycle" } },
    ],
    relatedSkills: [
      "Event Management",
      "Administrative Management",
      "Communication",
      "Problem Solving",
      "Adaptability",
    ],
    responsibilities: {
      id: [
        "Bertanggung jawab atas perlengkapan, dekorasi, dan kebutuhan teknis seminar dari tahap persiapan hingga pelaksanaan.",
        "Mengoordinasikan komunikasi dan kebutuhan dengan pembicara dari BNN, Dokter Residen, dan TNI AD.",
        "Memastikan kesiapan administrasi, venue, dan kebutuhan acara untuk mendukung kelancaran kegiatan.",
        "Mengoordinasikan pihak terkait serta menangani kebutuhan operasional selama pelaksanaan seminar.",
      ],
      en: [
        "Managed equipment, decor, and technical seminar requirements from preparation to execution.",
        "Coordinated communication and logistical requirements with speakers from BNN, Resident Doctors, and TNI AD.",
        "Ensured administrative readiness, venue setup, and event supplies to support smooth execution.",
        "Coordinated relevant stakeholders and handled on-site operational needs during the seminar.",
      ],
    },
    coverSlot: {
      id: "seminar-cover",
      src: null,
      slotCode: "COVER // SEMINAR 2025",
      aspect: "16/10",
      caption: {
        id: "Dokumentasi Seminar Bela Negara & Anti Narkoba 2025",
        en: "National Defense & Anti-Drug Seminar 2025 documentation",
      },
      alt: {
        id: "Sampul Seminar Bela Negara & Anti Narkoba 2025",
        en: "National Defense & Anti-Drug Seminar 2025 cover",
      },
    },
    gallerySlots: [
      {
        id: "seminar-g1",
        src: null,
        slotCode: "SEMINAR // FOTO 01",
        aspect: "16/10",
        caption: {
          id: "Sesi pembicara bersama BNN, Dokter Residen, dan TNI AD",
          en: "Speaker session with BNN, Resident Doctors, and TNI AD",
        },
        alt: { id: "Foto Seminar #1", en: "Seminar Photo #1" },
      },
      {
        id: "seminar-g2",
        src: null,
        slotCode: "SEMINAR // FOTO 02",
        aspect: "16/10",
        caption: {
          id: "Persiapan venue, perlengkapan & teknis seminar",
          en: "Venue, equipment & technical setup",
        },
        alt: { id: "Foto Seminar #2", en: "Seminar Photo #2" },
      },
    ],
  },
  {
    id: "oweek-uc",
    category: "event",
    shortCode: "EVT // 03",
    title: {
      id: "Orientation Week UC Makassar",
      en: "Orientation Week UC Makassar",
    },
    period: "Jan 2024 – Sep 2024",
    timelineStart: { year: 2024, month: 1 },
    timelineEnd: { year: 2024, month: 9 },
    role: {
      id: "Inventory & Resources Dept · PIC Closing",
      en: "Inventory & Resources Dept · PIC Closing",
    },
    umbrella: {
      id: "Universitas Ciputra Makassar",
      en: "Universitas Ciputra Makassar",
    },
    summaryHook: {
      id: "Mengelola inventaris & distribusi sumber daya serta dipercaya sebagai PIC Closing.",
      en: "Managed event inventory & resource distribution and served as PIC Closing.",
    },
    metrics: [
      { value: "9 Bulan", label: { id: "Periode Kerja", en: "Duration" } },
      { value: "PIC", label: { id: "Acara Penutupan", en: "Closing Ceremony" } },
    ],
    relatedSkills: [
      "Event Management",
      "Spreadsheet",
      "Administrative Management",
      "Teamwork",
      "Time Management",
    ],
    responsibilities: {
      id: [
        "Mengelola inventaris dan kebutuhan sumber daya untuk mendukung kelancaran kegiatan.",
        "Berkoordinasi dengan berbagai divisi dalam pemenuhan dan distribusi kebutuhan acara.",
        "Dipercaya sebagai PIC Closing untuk mengoordinasikan persiapan hingga pelaksanaan acara penutupan.",
      ],
      en: [
        "Managed inventory and resource requirements to support smooth event operations.",
        "Coordinated across multiple divisions to fulfill and distribute event supplies.",
        "Entrusted as PIC Closing to coordinate preparation through execution of the closing ceremony.",
      ],
    },
    coverSlot: {
      id: "oweek-cover",
      src: null,
      slotCode: "COVER // O-WEEK UC",
      aspect: "16/10",
      caption: {
        id: "Dokumentasi Orientation Week UC Makassar",
        en: "Orientation Week UC Makassar documentation",
      },
      alt: {
        id: "Sampul Orientation Week UC Makassar",
        en: "Orientation Week UC Makassar cover",
      },
    },
    gallerySlots: [
      {
        id: "oweek-g1",
        src: null,
        slotCode: "O-WEEK // FOTO 01",
        aspect: "16/10",
        caption: {
          id: "Pelaksanaan acara penutupan (PIC Closing)",
          en: "Closing ceremony execution (PIC Closing)",
        },
        alt: { id: "Foto O-Week #1", en: "O-Week Photo #1" },
      },
      {
        id: "oweek-g2",
        src: null,
        slotCode: "O-WEEK // FOTO 02",
        aspect: "16/10",
        caption: {
          id: "Operasional Inventory & Resources Department",
          en: "Inventory & Resources Department operations",
        },
        alt: { id: "Foto O-Week #2", en: "O-Week Photo #2" },
      },
    ],
  },
  {
    id: "flamians-1",
    category: "event",
    shortCode: "EVT // 04",
    title: {
      id: "FLAMIANS 1.0 (FLAMIANS CUP 1.0)",
      en: "FLAMIANS 1.0 (FLAMIANS CUP 1.0)",
    },
    period: "Apr 2023 – Jun 2023",
    timelineStart: { year: 2023, month: 4 },
    timelineEnd: { year: 2023, month: 6 },
    role: {
      id: "Koordinator Acara",
      en: "Event Coordinator",
    },
    umbrella: {
      id: "Di bawah naungan Himpunan Mahasiswa Manajemen",
      en: "Under Management Student Union",
    },
    summaryHook: {
      id: "Menyusun konsep, rundown & timeline acara serta memimpin 10 anggota pelaksana.",
      en: "Built event concept, rundown & timeline while leading a 10-member event team.",
    },
    metrics: [
      { value: "10", label: { id: "Anggota", en: "Members" } },
      { value: "3 Bulan", label: { id: "Periode", en: "Duration" } },
    ],
    relatedSkills: [
      "Event Management",
      "Time Management",
      "Teamwork",
      "Problem Solving",
      "Adaptability",
    ],
    responsibilities: {
      id: [
        "Memimpin dan mengoordinasikan 10 anggota dalam pelaksanaan FLAMIANS CUP 1.0 di bawah naungan Himpunan Mahasiswa Manajemen.",
        "Menyusun konsep, rundown, dan timeline acara.",
        "Mengoordinasikan kebutuhan acara dengan divisi terkait serta memastikan pelaksanaan berjalan sesuai rencana.",
        "Mengawasi pelaksanaan dan menangani kendala selama kegiatan berlangsung.",
      ],
      en: [
        "Led and coordinated 10 team members in delivering FLAMIANS CUP 1.0 under the Management Student Union.",
        "Designed the event concept, run-of-show rundown, and master timeline.",
        "Coordinated event requirements across divisions and ensured execution stayed on plan.",
        "Supervised on-site operations and resolved issues during the event.",
      ],
    },
    coverSlot: {
      id: "flamians-cover",
      src: null,
      slotCode: "COVER // FLAMIANS 1.0",
      aspect: "16/10",
      caption: {
        id: "Dokumentasi FLAMIANS CUP 1.0",
        en: "FLAMIANS CUP 1.0 documentation",
      },
      alt: {
        id: "Sampul FLAMIANS 1.0",
        en: "FLAMIANS 1.0 cover",
      },
    },
    gallerySlots: [
      {
        id: "flamians-g1",
        src: null,
        slotCode: "FLAMIANS // FOTO 01",
        aspect: "16/10",
        caption: {
          id: "Pelaksanaan FLAMIANS CUP 1.0",
          en: "FLAMIANS CUP 1.0 execution",
        },
        alt: { id: "Foto FLAMIANS 1.0 #1", en: "FLAMIANS 1.0 Photo #1" },
      },
      {
        id: "flamians-g2",
        src: null,
        slotCode: "FLAMIANS // FOTO 02",
        aspect: "16/10",
        caption: {
          id: "Tim divisi acara (10 anggota)",
          en: "Event division team (10 members)",
        },
        alt: { id: "Foto FLAMIANS 1.0 #2", en: "FLAMIANS 1.0 Photo #2" },
      },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "hard",
    title: {
      id: "Hard Skills",
      en: "Hard Skills",
    },
    items: [
      {
        key: "Event Management",
        label: { id: "Event Management", en: "Event Management" },
        relatedExperienceIds: [
          "entrance-series",
          "rekfest-2",
          "seminar-bela-negara",
          "oweek-uc",
          "flamians-1",
        ],
      },
      {
        key: "Spreadsheet",
        label: { id: "Spreadsheet", en: "Spreadsheet" },
        relatedExperienceIds: ["oweek-uc", "bem-uc", "hmm-uc"],
      },
      {
        key: "Strategic Planning",
        label: { id: "Strategic Planning", en: "Strategic Planning" },
        relatedExperienceIds: ["entrance-series", "rekfest-2", "bem-uc", "hmm-uc"],
      },
      {
        key: "Administrative Management",
        label: { id: "Administrative Management", en: "Administrative Management" },
        relatedExperienceIds: ["bem-uc", "hmm-uc", "seminar-bela-negara", "oweek-uc"],
      },
    ],
  },
  {
    id: "soft",
    title: {
      id: "Soft Skills",
      en: "Soft Skills",
    },
    items: [
      {
        key: "Leadership",
        label: { id: "Leadership", en: "Leadership" },
        relatedExperienceIds: ["entrance-series", "rekfest-2", "bem-uc", "hmm-uc"],
      },
      {
        key: "Analytical Thinking",
        label: { id: "Analytical Thinking", en: "Analytical Thinking" },
        relatedExperienceIds: ["bem-uc", "hmm-uc", "entrance-series"],
      },
      {
        key: "Problem Solving",
        label: { id: "Problem Solving", en: "Problem Solving" },
        relatedExperienceIds: ["entrance-series", "rekfest-2", "seminar-bela-negara", "hmm-uc", "flamians-1"],
      },
      {
        key: "Decision Making",
        label: { id: "Decision Making", en: "Decision Making" },
        relatedExperienceIds: ["entrance-series", "rekfest-2", "bem-uc", "hmm-uc"],
      },
      {
        key: "Adaptability",
        label: { id: "Adaptability", en: "Adaptability" },
        relatedExperienceIds: ["seminar-bela-negara", "oweek-uc", "flamians-1"],
      },
      {
        key: "Communication",
        label: { id: "Communication", en: "Communication" },
        relatedExperienceIds: ["entrance-series", "rekfest-2", "bem-uc", "seminar-bela-negara"],
      },
      {
        key: "Teamwork",
        label: { id: "Teamwork", en: "Teamwork" },
        relatedExperienceIds: ["oweek-uc", "flamians-1", "hmm-uc"],
      },
      {
        key: "Time Management",
        label: { id: "Time Management", en: "Time Management" },
        relatedExperienceIds: ["entrance-series", "rekfest-2", "oweek-uc", "flamians-1"],
      },
    ],
  },
  {
    id: "languages",
    title: {
      id: "Bahasa",
      en: "Languages",
    },
    items: [
      {
        key: "Indonesia",
        label: { id: "Bahasa Indonesia", en: "Indonesian" },
        relatedExperienceIds: [],
      },
      {
        key: "Inggris",
        label: { id: "Bahasa Inggris", en: "English" },
        relatedExperienceIds: [],
      },
      {
        key: "Hokkien",
        label: { id: "Hokkien", en: "Hokkien" },
        relatedExperienceIds: [],
      },
    ],
  },
];

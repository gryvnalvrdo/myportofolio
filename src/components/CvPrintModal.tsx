"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Printer, X } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import {
  ENTRANCE_SERIES,
  EXPERIENCES,
  PORTFOLIO_PROFILE,
  SKILL_GROUPS,
} from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";

interface CvPrintModalProps {
  isOpen: boolean;
  initialLocale: Locale;
  onClose: () => void;
}

export function CvPrintModal({
  isOpen,
  initialLocale,
  onClose,
}: CvPrintModalProps) {
  const [cvLangOverride, setCvLangOverride] = useState<Locale | null>(null);
  const cvLang = cvLangOverride ?? initialLocale;
  const ui = UI_COPY[initialLocale];
  const cvLabels = UI_COPY[cvLang].cvModal;

  const handleClose = useCallback(() => {
    setCvLangOverride(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const handleAfterPrint = () => {
      delete document.documentElement.dataset.printMode;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("afterprint", handleAfterPrint);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("afterprint", handleAfterPrint);
      delete document.documentElement.dataset.printMode;
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

  const handlePrint = () => {
    document.documentElement.dataset.printMode = "cv";
    window.print();
  };

  // Assemble CV entries in chronological order consistent with official CV
  const cvEntries = [
    {
      id: "bem",
      title: EXPERIENCES[1]!.title[cvLang],
      role: EXPERIENCES[1]!.role[cvLang],
      period: EXPERIENCES[1]!.period,
      bullets: EXPERIENCES[1]!.responsibilities[cvLang],
    },
    {
      id: "rekfest",
      title: EXPERIENCES[0]!.title[cvLang],
      role: EXPERIENCES[0]!.role[cvLang],
      period: EXPERIENCES[0]!.period,
      bullets: EXPERIENCES[0]!.responsibilities[cvLang],
    },
    {
      id: "seminar",
      title: EXPERIENCES[3]!.title[cvLang],
      role: EXPERIENCES[3]!.role[cvLang],
      period: EXPERIENCES[3]!.period,
      bullets: EXPERIENCES[3]!.responsibilities[cvLang],
    },
    {
      id: "entrance-3",
      title: ENTRANCE_SERIES.editions[2]!.editionLabel,
      role: ENTRANCE_SERIES.editions[2]!.roleTitle[cvLang],
      period: ENTRANCE_SERIES.editions[2]!.period,
      bullets: ENTRANCE_SERIES.editions[2]!.responsibilities[cvLang],
    },
    {
      id: "oweek",
      title: EXPERIENCES[4]!.title[cvLang],
      role: EXPERIENCES[4]!.role[cvLang],
      period: EXPERIENCES[4]!.period,
      bullets: EXPERIENCES[4]!.responsibilities[cvLang],
    },
    {
      id: "entrance-2",
      title: ENTRANCE_SERIES.editions[1]!.editionLabel,
      role: ENTRANCE_SERIES.editions[1]!.roleTitle[cvLang],
      period: ENTRANCE_SERIES.editions[1]!.period,
      bullets: ENTRANCE_SERIES.editions[1]!.responsibilities[cvLang],
    },
    {
      id: "hmm",
      title: EXPERIENCES[2]!.title[cvLang],
      role: EXPERIENCES[2]!.role[cvLang],
      period: EXPERIENCES[2]!.period,
      bullets: EXPERIENCES[2]!.responsibilities[cvLang],
    },
    {
      id: "flamians",
      title: EXPERIENCES[5]!.title[cvLang],
      role: EXPERIENCES[5]!.role[cvLang],
      period: EXPERIENCES[5]!.period,
      bullets: EXPERIENCES[5]!.responsibilities[cvLang],
    },
    {
      id: "entrance-1",
      title: ENTRANCE_SERIES.editions[0]!.editionLabel,
      role: ENTRANCE_SERIES.editions[0]!.roleTitle[cvLang],
      period: ENTRANCE_SERIES.editions[0]!.period,
      bullets: ENTRANCE_SERIES.editions[0]!.responsibilities[cvLang],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="cv-print-portal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/65 p-3 backdrop-blur-xs sm:p-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="cv-print-paper flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#DCD6CA] bg-white shadow-2xl"
          >
            {/* Toolbar (hidden during print) */}
            <div className="cv-print-hide flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E0D6] bg-[#FAF8F5] px-4 py-3.5 sm:px-6">
              <div>
                <h2 id="cv-modal-title" className="text-sm font-semibold text-[#171717]">
                  {ui.cvModal.title}
                </h2>
                <p className="text-xs text-[#52525B]">{ui.cvModal.subtitle}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1 rounded-full border border-[#DCD6CA] bg-white p-0.5">
                  <span className="pl-2.5 font-mono text-[11px] text-[#52525B]">
                    {ui.cvModal.switchCvLang}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCvLangOverride("id")}
                    className={`min-h-[30px] rounded-full px-2.5 font-mono text-xs font-medium ${
                      cvLang === "id"
                        ? "bg-[#171717] text-white"
                        : "text-[#52525B] hover:text-[#171717]"
                    }`}
                  >
                    ID
                  </button>
                  <button
                    type="button"
                    onClick={() => setCvLangOverride("en")}
                    className={`min-h-[30px] rounded-full px-2.5 font-mono text-xs font-medium ${
                      cvLang === "en"
                        ? "bg-[#171717] text-white"
                        : "text-[#52525B] hover:text-[#171717]"
                    }`}
                  >
                    EN
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-[#6B2737] px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#531D2A]"
                >
                  <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                  {ui.cvModal.printButton}
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label={ui.cvModal.close}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DCD6CA] bg-white text-[#171717] hover:bg-[#171717] hover:text-white"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Printable Resume Body */}
            <div className="overflow-y-auto p-6 sm:p-10">
              <header className="border-b-2 border-[#171717] pb-4">
                <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#171717] uppercase">
                  {PORTFOLIO_PROFILE.name}
                </h1>
                <p className="mt-1 text-xs text-[#3F3F46] sm:text-sm">
                  {PORTFOLIO_PROFILE.phoneDisplay} | {PORTFOLIO_PROFILE.email} |{" "}
                  {PORTFOLIO_PROFILE.location}
                </p>
                <p className="mt-0.5 text-xs text-[#52525B]">
                  LinkedIn: {PORTFOLIO_PROFILE.linkedinUrl}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#27272A] sm:text-sm">
                  {PORTFOLIO_PROFILE.summary[cvLang]}
                </p>
              </header>

              <section className="mt-5">
                <h3 className="border-b border-[#D4CEC2] pb-1 font-mono text-xs font-bold tracking-wider text-[#171717] uppercase">
                  {cvLabels.experienceHeading}
                </h3>

                <div className="mt-3 space-y-4">
                  {cvEntries.map((entry) => (
                    <div key={entry.id}>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#171717]">{entry.title}</h4>
                        <span className="font-mono text-xs text-[#52525B] tabular-nums">
                          {entry.period}
                        </span>
                      </div>
                      <p className="text-xs font-medium italic text-[#6B2737]">{entry.role}</p>
                      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-xs leading-relaxed text-[#27272A]">
                        {entry.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-6">
                <h3 className="border-b border-[#D4CEC2] pb-1 font-mono text-xs font-bold tracking-wider text-[#171717] uppercase">
                  {cvLabels.educationHeading}
                </h3>
                <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-[#171717]">
                      {PORTFOLIO_PROFILE.education.university} —{" "}
                      {PORTFOLIO_PROFILE.education.city}
                    </p>
                    <p className="text-xs italic text-[#3F3F46]">
                      {PORTFOLIO_PROFILE.education.degree[cvLang]}, GPA{" "}
                      {PORTFOLIO_PROFILE.education.gpa}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#52525B] tabular-nums">
                    {PORTFOLIO_PROFILE.education.period}
                  </span>
                </div>
              </section>

              <section className="mt-6">
                <h3 className="border-b border-[#D4CEC2] pb-1 font-mono text-xs font-bold tracking-wider text-[#171717] uppercase">
                  {cvLabels.skillsHeading}
                </h3>
                <div className="mt-2 space-y-1 text-xs leading-relaxed text-[#27272A]">
                  {SKILL_GROUPS.map((group) => (
                    <p key={group.id}>
                      <span className="font-semibold text-[#171717]">
                        {group.title[cvLang]}:{" "}
                      </span>
                      {group.items.map((item) => item.label[cvLang]).join(", ")}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

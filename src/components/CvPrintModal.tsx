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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181B]/65 p-0 backdrop-blur-xs sm:p-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="cv-print-paper flex h-[100dvh] w-full max-w-4xl flex-col overflow-hidden bg-white shadow-2xl sm:h-auto sm:max-h-[92vh] sm:rounded-2xl sm:border sm:border-[#DCDAD3]"
          >
            {/* Responsive Toolbar: Close stays top-right on mobile via flex order, zero duplicated controls */}
            <div className="cv-print-hide border-b border-[#E4E2DC] bg-[#FAF9F7] px-4 py-3 sm:px-6 sm:py-3.5">
              <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                <div className="min-w-0 flex-1 pr-2">
                  <h2
                    id="cv-modal-title"
                    className="truncate text-sm font-bold text-[#18181B] sm:text-base"
                  >
                    {cvLabels.title}
                  </h2>
                  <p className="hidden text-xs text-[#52525B] sm:block">{cvLabels.subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label={cvLabels.close}
                  className="order-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCDAD3] bg-white text-[#18181B] hover:bg-[#18181B] hover:text-white sm:order-3"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>

                <div className="order-3 flex w-full items-center justify-between gap-2 sm:order-2 sm:w-auto sm:justify-end">
                  <div
                    role="group"
                    aria-label="ID / EN"
                    className="inline-flex items-center rounded-full border border-[#DCDAD3] bg-white p-0.5"
                  >
                    {(["id", "en"] as const).map((langOption) => (
                      <button
                        key={langOption}
                        type="button"
                        onClick={() => setCvLangOverride(langOption)}
                        aria-pressed={cvLang === langOption}
                        className={`min-h-[30px] rounded-full px-3 text-xs font-semibold uppercase transition-colors ${
                          cvLang === langOption
                            ? "bg-[#18181B] text-white"
                            : "text-[#52525B] hover:text-[#18181B]"
                        }`}
                      >
                        {langOption}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-[#6B2737] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#531D2A]"
                  >
                    <Printer className="h-3.5 w-3.5" aria-hidden="true" />
                    {cvLabels.printButton}
                  </button>
                </div>
              </div>
            </div>

            {/* Printable Resume Body */}
            <div className="flex-1 overflow-y-auto px-4 py-5 sm:p-9">
              <header className="border-b-2 border-[#18181B] pb-4">
                <h1 className="font-display text-xl font-bold tracking-tight text-[#18181B] uppercase sm:text-3xl">
                  {PORTFOLIO_PROFILE.name}
                </h1>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-xs text-[#3F3F46] tabular-nums sm:text-sm">
                  <span>{PORTFOLIO_PROFILE.phoneDisplay}</span>
                  <span aria-hidden="true" className="text-[#A1A1AA]">·</span>
                  <span className="break-all">{PORTFOLIO_PROFILE.email}</span>
                  <span aria-hidden="true" className="text-[#A1A1AA]">·</span>
                  <span>{PORTFOLIO_PROFILE.location}</span>
                </div>
                <p className="mt-1 break-all text-xs text-[#52525B]">
                  LinkedIn: {PORTFOLIO_PROFILE.linkedinUrl}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-[#27272A] sm:text-sm">
                  {PORTFOLIO_PROFILE.summary[cvLang]}
                </p>
              </header>

              <section className="mt-5">
                <h3 className="border-b border-[#D4D2CC] pb-1 text-xs font-bold tracking-wider text-[#18181B] uppercase">
                  {cvLabels.experienceHeading}
                </h3>

                <div className="mt-3.5 space-y-4">
                  {cvEntries.map((entry) => (
                    <div key={entry.id}>
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                        <h4 className="text-sm font-bold text-[#18181B]">{entry.title}</h4>
                        <span className="text-xs font-medium text-[#52525B] tabular-nums">
                          {entry.period}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#6B2737]">{entry.role}</p>
                      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-[13px] leading-relaxed text-[#27272A] sm:text-xs">
                        {entry.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-6">
                <h3 className="border-b border-[#D4D2CC] pb-1 text-xs font-bold tracking-wider text-[#18181B] uppercase">
                  {cvLabels.educationHeading}
                </h3>
                <div className="mt-2 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2">
                  <div>
                    <p className="text-sm font-bold text-[#18181B]">
                      {PORTFOLIO_PROFILE.education.university} —{" "}
                      {PORTFOLIO_PROFILE.education.city}
                    </p>
                    <p className="text-xs text-[#3F3F46]">
                      {PORTFOLIO_PROFILE.education.degree[cvLang]}, {cvLabels.gpaLabel}{" "}
                      {PORTFOLIO_PROFILE.education.gpa}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[#52525B] tabular-nums">
                    {PORTFOLIO_PROFILE.education.period}
                  </span>
                </div>
              </section>

              <section className="mt-6 pb-4 sm:pb-0">
                <h3 className="border-b border-[#D4D2CC] pb-1 text-xs font-bold tracking-wider text-[#18181B] uppercase">
                  {cvLabels.skillsHeading}
                </h3>
                <div className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-[#27272A] sm:space-y-1 sm:text-xs">
                  {SKILL_GROUPS.map((group) => (
                    <p key={group.id}>
                      <span className="font-semibold text-[#18181B]">
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

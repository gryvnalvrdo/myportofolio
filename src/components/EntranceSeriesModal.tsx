"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Layers, X } from "lucide-react";
import type { EntranceEdition, Locale, MediaSlot } from "@/data/portfolio";
import { ENTRANCE_SERIES } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { isSafeLocalAssetPath } from "@/lib/security";
import { EventMediaFrame } from "./EventMediaFrame";

interface EntranceSeriesModalProps {
  isOpen: boolean;
  locale: Locale;
  onClose: () => void;
}

type EditionFilter = "all" | EntranceEdition["id"];

export function EntranceSeriesModal({
  isOpen,
  locale,
  onClose,
}: EntranceSeriesModalProps) {
  const [selectedEdition, setSelectedEdition] = useState<EditionFilter>("all");
  const [zoomedSlot, setZoomedSlot] = useState<MediaSlot | null>(null);
  const copy = UI_COPY[locale];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomedSlot) {
          setZoomedSlot(null);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, zoomedSlot, onClose]);

  const visibleEditions =
    selectedEdition === "all"
      ? ENTRANCE_SERIES.editions
      : ENTRANCE_SERIES.editions.filter((ed) => ed.id === selectedEdition);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="entrance-series-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171717]/65 p-3 backdrop-blur-xs sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#DCD6CA] bg-[#FAF8F5] shadow-2xl"
          >
            {/* Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E0D6] bg-white px-4 py-4 sm:px-6">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7EFF1] px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#6B2737]">
                    <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                    {ENTRANCE_SERIES.shortCode}
                  </span>
                  <span className="font-mono text-xs text-[#52525B] tabular-nums">
                    {ENTRANCE_SERIES.period}
                  </span>
                </div>
                <h2
                  id="entrance-series-title"
                  className="mt-1.5 font-serif text-xl font-medium text-[#171717] sm:text-2xl"
                >
                  {ENTRANCE_SERIES.title[locale]}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={copy.modal.close}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DCD6CA] bg-[#FAF8F5] text-[#171717] transition-colors hover:bg-[#171717] hover:text-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Edition Switcher Bar (View All 3 Simultaneously or Focus Individual) */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E0D6] bg-[#F3EFE8] px-4 py-3 sm:px-6">
              <span className="font-mono text-[11px] font-medium tracking-wider text-[#52525B] uppercase">
                {copy.modal.editionComparisonTitle}
              </span>

              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSelectedEdition("all")}
                  className={`min-h-[34px] rounded-full px-3.5 text-xs font-medium transition-colors ${
                    selectedEdition === "all"
                      ? "bg-[#171717] text-[#FAF8F5]"
                      : "border border-[#DCD6CA] bg-white text-[#52525B] hover:text-[#171717]"
                  }`}
                >
                  {copy.modal.allEditionsTab}
                </button>
                {ENTRANCE_SERIES.editions.map((edition) => (
                  <button
                    key={edition.id}
                    type="button"
                    onClick={() => setSelectedEdition(edition.id)}
                    className={`min-h-[34px] rounded-full px-3.5 text-xs font-medium transition-colors ${
                      selectedEdition === edition.id
                        ? "bg-[#6B2737] text-[#FAF8F5]"
                        : "border border-[#DCD6CA] bg-white text-[#52525B] hover:text-[#171717]"
                    }`}
                  >
                    {edition.editionLabel} · {edition.roleTitle[locale]}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Body showing all 3 Rank-Differentiated Editions */}
            <div className="space-y-6 overflow-y-auto p-4 sm:p-6">
              {visibleEditions.map((edition) => {
                const tierStyles =
                  edition.rankTier === 3
                    ? {
                        cardBorder: "border-[#6B2737]/45",
                        badgeBg: "bg-[#6B2737] text-[#FAF8F5]",
                        accentText: "text-[#6B2737]",
                        headerBg: "bg-[#F7EFF1]/80",
                      }
                    : edition.rankTier === 2
                      ? {
                          cardBorder: "border-[#8A6238]/40",
                          badgeBg: "bg-[#8A6238] text-[#FAF8F5]",
                          accentText: "text-[#7A5129]",
                          headerBg: "bg-[#F7F1E8]/80",
                        }
                      : {
                          cardBorder: "border-[#D4CEC2]",
                          badgeBg: "bg-[#3F3F46] text-[#FAF8F5]",
                          accentText: "text-[#3F3F46]",
                          headerBg: "bg-[#F3EFE8]",
                        };

                return (
                  <article
                    key={edition.id}
                    className={`overflow-hidden rounded-2xl border bg-white ${tierStyles.cardBorder}`}
                  >
                    {/* Edition Rank Banner */}
                    <div
                      className={`flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E0D6] px-4 py-3.5 sm:px-6 ${tierStyles.headerBg}`}
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-semibold ${tierStyles.badgeBg}`}
                        >
                          <Award className="h-3.5 w-3.5" aria-hidden="true" />
                          {edition.rankBadge[locale]}
                        </span>
                        <h3 className="font-serif text-xl font-medium text-[#171717]">
                          {edition.editionLabel}
                        </h3>
                        <span className={`text-sm font-semibold ${tierStyles.accentText}`}>
                          — {edition.roleTitle[locale]}
                        </span>
                      </div>

                      <span className="font-mono text-xs font-medium text-[#52525B] tabular-nums">
                        {edition.period}
                      </span>
                    </div>

                    {/* Split Content: Text Left + Photos Right */}
                    <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 lg:grid-cols-12">
                      <div className="lg:col-span-6">
                        {edition.umbrella && (
                          <p className="mb-3 text-xs font-medium text-[#52525B]">
                            {copy.modal.umbrellaLabel}: {edition.umbrella[locale]}
                          </p>
                        )}

                        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                          {edition.metrics.map((metric) => (
                            <div
                              key={`${edition.id}-${metric.value}`}
                              className="rounded-xl border border-[#E5E0D6] bg-[#FAF8F5] p-3"
                            >
                              <p className="font-mono text-base font-semibold text-[#171717] tabular-nums">
                                {metric.value}
                              </p>
                              <p className="mt-0.5 text-[11px] text-[#52525B]">
                                {metric.label[locale]}
                              </p>
                            </div>
                          ))}
                        </div>

                        <ul className="mt-4 space-y-2.5">
                          {edition.responsibilities[locale].map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 rounded-xl border border-[#EFECE4] bg-[#FAF8F5] p-3 text-sm leading-relaxed text-[#27272A]"
                            >
                              <span
                                className={`mt-0.5 font-mono text-xs font-semibold tabular-nums ${tierStyles.accentText}`}
                              >
                                0{idx + 1}
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-6">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {edition.gallerySlots.map((slot) => (
                            <div key={slot.id} className="space-y-1.5">
                              <EventMediaFrame
                                slot={slot}
                                locale={locale}
                                compact
                                onZoom={setZoomedSlot}
                                sizes="(max-width: 640px) 100vw, 280px"
                              />
                              <p className="px-0.5 text-xs leading-snug text-[#52525B]">
                                {slot.caption[locale]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>

          {/* Zoom Lightbox */}
          {zoomedSlot && isSafeLocalAssetPath(zoomedSlot.src) && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-[#171717]/90 p-4"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedSlot(null);
              }}
            >
              <button
                type="button"
                onClick={() => setZoomedSlot(null)}
                aria-label={copy.modal.close}
                className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#171717]"
              >
                <X className="h-5 w-5" />
              </button>
              <div
                className="relative h-[78vh] w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={zoomedSlot.src}
                  alt={zoomedSlot.alt[locale]}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
                <p className="absolute inset-x-0 -bottom-8 text-center text-sm text-[#FAF8F5]">
                  {zoomedSlot.caption[locale]}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

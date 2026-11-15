"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Layers, X } from "lucide-react";
import type { EntranceEdition, Locale, MediaSlot } from "@/data/portfolio";
import { ENTRANCE_SERIES } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { EventPhotoGallery } from "./EventPhotoGallery";
import { PhotoLightbox } from "./PhotoLightbox";

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
  const [zoomSlots, setZoomSlots] = useState<MediaSlot[]>([]);
  const copy = UI_COPY[locale];

  const handleClose = useCallback(() => {
    setZoomedSlot(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181B]/65 p-0 backdrop-blur-xs sm:p-6"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-[#FAF9F7] shadow-2xl sm:h-auto sm:max-h-[92vh] sm:rounded-2xl sm:border sm:border-[#DCDAD3]"
          >
            {/* Compact Sticky Header: Single 56px bar on mobile so scroll area fills the screen */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#E4E2DC] bg-white px-4 py-3 sm:px-6 sm:py-4">
              <div className="min-w-0">
                <div className="hidden flex-wrap items-center gap-2 sm:flex">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F7EFF1] px-2.5 py-0.5 text-[11px] font-semibold text-[#6B2737]">
                    <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                    {copy.experiences.seriesBadge}
                  </span>
                  <span className="text-xs font-medium text-[#52525B] tabular-nums">
                    {ENTRANCE_SERIES.period}
                  </span>
                </div>
                <h2
                  id="entrance-series-title"
                  className="font-display truncate text-base font-bold text-[#18181B] sm:mt-1.5 sm:text-2xl"
                >
                  {ENTRANCE_SERIES.title[locale]}
                </h2>
              </div>

              <button
                type="button"
                onClick={handleClose}
                aria-label={copy.modal.close}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCDAD3] bg-[#FAF9F7] text-[#18181B] transition-colors hover:bg-[#18181B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] sm:h-10 sm:w-10"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Everything inside scrolls freely on mobile; switcher bar stays sticky only on sm+ */}
            <div className="flex-1 overflow-y-auto">
              {/* Mobile-only compact series meta (scrolls away cleanly instead of blocking screen) */}
              <div className="flex items-center justify-between gap-2 border-b border-[#ECEAE4] bg-white/70 px-4 py-2 text-xs text-[#52525B] sm:hidden">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#6B2737]">
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.experiences.seriesBadge}
                </span>
                <span className="tabular-nums">{ENTRANCE_SERIES.period}</span>
              </div>

              {/* Edition Switcher Bar: scrolls naturally on mobile, sticky single bar on desktop */}
              <div className="border-b border-[#E4E2DC] bg-[#F3F1ED] px-4 py-2.5 sm:sticky sm:top-0 sm:z-10 sm:px-6 sm:py-3">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[11px] font-semibold tracking-wider text-[#52525B] uppercase">
                    {copy.modal.editionComparisonTitle}
                  </span>

                  <div className="grid grid-cols-4 gap-1 sm:flex sm:flex-wrap sm:items-center sm:gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedEdition("all")}
                      className={`min-h-[34px] rounded-lg px-2 text-xs font-semibold transition-colors sm:px-3 ${
                        selectedEdition === "all"
                          ? "bg-[#18181B] text-white"
                          : "border border-[#DCDAD3] bg-white text-[#52525B] hover:text-[#18181B]"
                      }`}
                    >
                      <span className="sm:hidden">{copy.modal.allCompactTab}</span>
                      <span className="hidden sm:inline">{copy.modal.allEditionsTab}</span>
                    </button>
                    {ENTRANCE_SERIES.editions.map((edition) => {
                      const shortVersion = edition.editionLabel.replace("ENTRANCE ", "");
                      return (
                        <button
                          key={edition.id}
                          type="button"
                          onClick={() => setSelectedEdition(edition.id)}
                          className={`min-h-[34px] rounded-lg px-2 text-xs font-semibold tabular-nums transition-colors sm:px-3 ${
                            selectedEdition === edition.id
                              ? "bg-[#6B2737] text-white"
                              : "border border-[#DCDAD3] bg-white text-[#52525B] hover:text-[#18181B]"
                          }`}
                        >
                          <span className="sm:hidden">{shortVersion}</span>
                          <span className="hidden sm:inline">{edition.editionLabel}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Editions Stack */}
              <div className="space-y-4 p-3.5 sm:space-y-5 sm:p-6">
                {visibleEditions.map((edition) => {
                  const tierStyles =
                    edition.rankTier === 3
                      ? {
                          cardBorder: "border-[#6B2737]/40",
                          badgeBg: "bg-[#6B2737] text-white",
                          accentText: "text-[#6B2737]",
                          headerBg: "bg-[#F7EFF1]/80",
                        }
                      : edition.rankTier === 2
                        ? {
                            cardBorder: "border-[#8A6238]/35",
                            badgeBg: "bg-[#8A6238] text-white",
                            accentText: "text-[#7A5129]",
                            headerBg: "bg-[#F7F1E8]/80",
                          }
                        : {
                            cardBorder: "border-[#D4D2CC]",
                            badgeBg: "bg-[#3F3F46] text-white",
                            accentText: "text-[#3F3F46]",
                            headerBg: "bg-[#F3F1ED]",
                          };

                  return (
                    <article
                      key={edition.id}
                      className={`overflow-hidden rounded-2xl border bg-white ${tierStyles.cardBorder}`}
                    >
                      {/* Edition Rank Banner */}
                      <div
                        className={`flex flex-wrap items-center justify-between gap-2 border-b border-[#E4E2DC] px-4 py-3 sm:px-6 ${tierStyles.headerBg}`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold ${tierStyles.badgeBg}`}
                          >
                            <Award className="h-3.5 w-3.5" aria-hidden="true" />
                            {edition.rankBadge[locale]}
                          </span>
                          <h3 className="font-display text-base font-bold text-[#18181B] sm:text-lg">
                            {edition.editionLabel}
                          </h3>
                          <span className={`text-xs font-semibold sm:text-sm ${tierStyles.accentText}`}>
                            — {edition.roleTitle[locale]}
                          </span>
                        </div>

                        <span className="text-xs font-medium text-[#52525B] tabular-nums">
                          {edition.period}
                        </span>
                      </div>

                      {/* Responsive Split Content: Photo Gallery first on mobile, Text Left + Gallery Right on desktop */}
                      <div className="grid grid-cols-1 gap-5 p-4 sm:p-6 lg:grid-cols-12">
                        <div className="order-2 lg:order-1 lg:col-span-6">
                          {edition.umbrella && (
                            <p className="mb-3 text-xs font-medium text-[#52525B]">
                              {copy.modal.umbrellaLabel}: {edition.umbrella[locale]}
                            </p>
                          )}

                          <div
                            className={`grid gap-2 sm:gap-2.5 ${
                              edition.metrics.length === 1
                                ? "grid-cols-1"
                                : edition.metrics.length === 2
                                  ? "grid-cols-2"
                                  : "grid-cols-3"
                            }`}
                          >
                            {edition.metrics.map((metric) => (
                              <div
                                key={`${edition.id}-${metric.value}`}
                                className="rounded-xl border border-[#E4E2DC] bg-[#FAF9F7] p-2.5 sm:p-3"
                              >
                                <p className="text-sm font-bold text-[#18181B] tabular-nums sm:text-base">
                                  {metric.value}
                                </p>
                                <p className="mt-0.5 text-[11px] leading-tight text-[#52525B]">
                                  {metric.label[locale]}
                                </p>
                              </div>
                            ))}
                          </div>

                          <ul className="mt-4 space-y-2">
                            {edition.responsibilities[locale].map((bullet, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 rounded-xl border border-[#ECEAE4] bg-[#FAF9F7] p-3 text-[13px] leading-relaxed text-[#27272A] sm:gap-3 sm:text-sm"
                              >
                                <span
                                  className={`mt-0.5 text-xs font-bold tabular-nums ${tierStyles.accentText}`}
                                >
                                  0{idx + 1}
                                </span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="order-1 lg:order-2 lg:col-span-6">
                          <EventPhotoGallery
                            slots={[edition.coverSlot, ...edition.gallerySlots]}
                            locale={locale}
                            onZoom={(slot, gallerySlots) => {
                              setZoomedSlot(slot);
                              setZoomSlots(gallerySlots);
                            }}
                            sizes="(max-width: 1024px) 100vw, 480px"
                          />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <PhotoLightbox
            activeSlot={zoomedSlot}
            slots={zoomSlots}
            locale={locale}
            onSelectSlot={setZoomedSlot}
            onClose={() => setZoomedSlot(null)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ExperienceItem, Locale, MediaSlot } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { EventPhotoGallery } from "./EventPhotoGallery";
import { PhotoLightbox } from "./PhotoLightbox";

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  locale: Locale;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ExperienceModal({
  experience,
  locale,
  onClose,
  onPrev,
  onNext,
}: ExperienceModalProps) {
  const [zoomedSlot, setZoomedSlot] = useState<MediaSlot | null>(null);
  const [zoomSlots, setZoomSlots] = useState<MediaSlot[]>([]);
  const copy = UI_COPY[locale];

  const allSlots = useMemo(() => {
    if (!experience) return [];
    return [experience.coverSlot, ...experience.gallerySlots];
  }, [experience]);

  const handleClose = useCallback(() => {
    setZoomedSlot(null);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!experience) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      } else if (event.key === "ArrowLeft") {
        onPrev();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [experience, handleClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {experience && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-modal-title"
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
            className="flex h-[100dvh] w-full max-w-5xl flex-col overflow-hidden bg-[#FAF9F7] shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-2xl sm:border sm:border-[#DCDAD3]"
          >
            {/* Top Modal Toolbar */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#E4E2DC] bg-white px-4 py-3 sm:px-6">
              <span className="text-xs font-medium text-[#52525B] tabular-nums">
                {experience.period}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setZoomedSlot(null);
                    onPrev();
                  }}
                  aria-label={copy.modal.prev}
                  className="inline-flex h-9 items-center gap-1 rounded-full border border-[#DCDAD3] bg-white px-3 text-xs font-medium text-[#18181B] transition-colors hover:border-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{copy.modal.prev}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setZoomedSlot(null);
                    onNext();
                  }}
                  aria-label={copy.modal.next}
                  className="inline-flex h-9 items-center gap-1 rounded-full border border-[#DCDAD3] bg-white px-3 text-xs font-medium text-[#18181B] transition-colors hover:border-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
                >
                  <span className="hidden sm:inline">{copy.modal.next}</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label={copy.modal.close}
                  className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DCDAD3] bg-[#FAF9F7] text-[#18181B] transition-colors hover:bg-[#18181B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Scrollable Split Body: gallery first on mobile, side-by-side on desktop */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.18 }}
                  className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-7"
                >
                  {/* Left Column on Desktop, Second on Mobile: Factual Text & Responsibilities */}
                  <div className="order-2 lg:order-1 lg:col-span-6">
                    <p className="text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
                      {experience.role[locale]}
                    </p>
                    <h2
                      id="experience-modal-title"
                      className="font-display mt-1.5 text-2xl font-bold tracking-tight text-[#18181B] sm:text-3xl"
                    >
                      {experience.title[locale]}
                    </h2>
                    {experience.umbrella && (
                      <p className="mt-1.5 text-xs font-medium text-[#52525B]">
                        {copy.modal.umbrellaLabel}: {experience.umbrella[locale]}
                      </p>
                    )}

                    {/* Symmetric Metrics Grid */}
                    <div
                      className={`mt-5 grid gap-2.5 ${
                        experience.metrics.length === 2 ? "grid-cols-2" : "grid-cols-3"
                      }`}
                    >
                      {experience.metrics.map((metric) => (
                        <div
                          key={metric.value}
                          className="rounded-xl border border-[#E4E2DC] bg-white p-3"
                        >
                          <p className="text-sm font-bold text-[#18181B] tabular-nums sm:text-base">
                            {metric.value}
                          </p>
                          <p className="mt-0.5 text-[11px] text-[#52525B]">
                            {metric.label[locale]}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Responsibilities List */}
                    <div className="mt-6">
                      <h3 className="text-xs font-semibold tracking-wider text-[#18181B] uppercase">
                        {copy.modal.responsibilitiesTitle}
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {experience.responsibilities[locale].map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 rounded-xl border border-[#E4E2DC] bg-white p-3.5 text-sm leading-relaxed text-[#27272A]"
                          >
                            <span className="mt-0.5 text-xs font-bold text-[#6B2737] tabular-nums">
                              0{idx + 1}
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Competencies */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {experience.relatedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-[#E4E2DC] bg-[#F3F1ED] px-3 py-1 text-[11px] font-medium text-[#3F3F46]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column on Desktop, First on Mobile: Scalable Multi-Photo Gallery Viewer */}
                  <div className="order-1 lg:order-2 lg:col-span-6">
                    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xs font-semibold tracking-wider text-[#18181B] uppercase">
                        {copy.modal.galleryTitle}
                      </h3>
                      <span className="text-[11px] text-[#71717A]">
                        {copy.modal.galleryHint}
                      </span>
                    </div>

                    <EventPhotoGallery
                      slots={allSlots}
                      locale={locale}
                      onZoom={(slot, gallerySlots) => {
                        setZoomedSlot(slot);
                        setZoomSlots(gallerySlots);
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
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

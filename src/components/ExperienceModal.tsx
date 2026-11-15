"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ExperienceItem, Locale, MediaSlot } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { isSafeLocalAssetPath } from "@/lib/security";
import { EventMediaFrame } from "./EventMediaFrame";

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
  const copy = UI_COPY[locale];

  useEffect(() => {
    if (!experience) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomedSlot) {
          setZoomedSlot(null);
        } else {
          onClose();
        }
      } else if (event.key === "ArrowLeft" && !zoomedSlot) {
        onPrev();
      } else if (event.key === "ArrowRight" && !zoomedSlot) {
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
  }, [experience, zoomedSlot, onClose, onPrev, onNext]);

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#18181B]/65 p-3 backdrop-blur-xs sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#DCDAD3] bg-[#FAF9F7] shadow-2xl"
          >
            {/* Top Modal Toolbar */}
            <div className="flex items-center justify-between gap-3 border-b border-[#E4E2DC] bg-white px-4 py-3 sm:px-6">
              <span className="text-xs font-medium text-[#52525B] tabular-nums">
                {experience.period}
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={onPrev}
                  aria-label={copy.modal.prev}
                  className="inline-flex h-9 items-center gap-1 rounded-full border border-[#DCDAD3] bg-white px-3 text-xs font-medium text-[#18181B] transition-colors hover:border-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{copy.modal.prev}</span>
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  aria-label={copy.modal.next}
                  className="inline-flex h-9 items-center gap-1 rounded-full border border-[#DCDAD3] bg-white px-3 text-xs font-medium text-[#18181B] transition-colors hover:border-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
                >
                  <span className="hidden sm:inline">{copy.modal.next}</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={copy.modal.close}
                  className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#DCDAD3] bg-[#FAF9F7] text-[#18181B] transition-colors hover:bg-[#18181B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Scrollable Split Body: Text Left + Photo Gallery Right */}
            <div className="overflow-y-auto p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-7 lg:grid-cols-12">
                {/* Left Column: Factual Text & Responsibilities */}
                <div className="lg:col-span-6">
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

                {/* Right Column: Side-by-Side Photo Gallery */}
                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xs font-semibold tracking-wider text-[#18181B] uppercase">
                      {copy.modal.galleryTitle}
                    </h3>
                    <span className="text-[11px] text-[#71717A]">
                      {copy.modal.galleryHint}
                    </span>
                  </div>

                  <div className="mt-3 space-y-4">
                    <EventMediaFrame
                      slot={experience.coverSlot}
                      locale={locale}
                      onZoom={setZoomedSlot}
                      showCaptionOverlay
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {experience.gallerySlots.map((slot) => (
                        <div key={slot.id} className="space-y-1.5">
                          <EventMediaFrame
                            slot={slot}
                            locale={locale}
                            compact
                            onZoom={setZoomedSlot}
                            sizes="(max-width: 640px) 100vw, 240px"
                          />
                          <p className="px-0.5 text-xs leading-snug text-[#52525B]">
                            {slot.caption[locale]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lightbox Overlay */}
          {zoomedSlot && isSafeLocalAssetPath(zoomedSlot.src) && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-[#18181B]/90 p-4"
              onClick={(e) => {
                e.stopPropagation();
                setZoomedSlot(null);
              }}
            >
              <button
                type="button"
                onClick={() => setZoomedSlot(null)}
                aria-label={copy.modal.close}
                className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#18181B]"
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
                <p className="absolute inset-x-0 -bottom-8 text-center text-sm text-white">
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

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Locale, MediaSlot } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { isSafeLocalAssetPath } from "@/lib/security";

interface PhotoLightboxProps {
  activeSlot: MediaSlot | null;
  slots: MediaSlot[];
  locale: Locale;
  onSelectSlot: (slot: MediaSlot) => void;
  onClose: () => void;
}

export function PhotoLightbox({
  activeSlot,
  slots,
  locale,
  onSelectSlot,
  onClose,
}: PhotoLightboxProps) {
  const copy = UI_COPY[locale];

  const populatedSlots = slots.filter((slot) => isSafeLocalAssetPath(slot.src));
  const navigableSlots = populatedSlots.length > 0 ? populatedSlots : slots;
  const currentIndex = activeSlot
    ? navigableSlots.findIndex((slot) => slot.id === activeSlot.id)
    : -1;
  const hasMultiple = navigableSlots.length > 1;

  const goPrev = () => {
    if (!hasMultiple || currentIndex === -1) return;
    const prevSlot =
      navigableSlots[(currentIndex - 1 + navigableSlots.length) % navigableSlots.length];
    if (prevSlot) onSelectSlot(prevSlot);
  };

  const goNext = () => {
    if (!hasMultiple || currentIndex === -1) return;
    const nextSlot = navigableSlots[(currentIndex + 1) % navigableSlots.length];
    if (nextSlot) onSelectSlot(nextSlot);
  };

  useEffect(() => {
    if (!activeSlot) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopImmediatePropagation();
        onClose();
      } else if (event.key === "ArrowLeft" && hasMultiple) {
        event.stopImmediatePropagation();
        const prevSlot =
          navigableSlots[(currentIndex - 1 + navigableSlots.length) % navigableSlots.length];
        if (prevSlot) onSelectSlot(prevSlot);
      } else if (event.key === "ArrowRight" && hasMultiple) {
        event.stopImmediatePropagation();
        const nextSlot = navigableSlots[(currentIndex + 1) % navigableSlots.length];
        if (nextSlot) onSelectSlot(nextSlot);
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [activeSlot, hasMultiple, currentIndex, navigableSlots, onSelectSlot, onClose]);

  const hasRealImage = activeSlot ? isSafeLocalAssetPath(activeSlot.src) : false;

  return (
    <AnimatePresence>
      {activeSlot && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={activeSlot.alt[locale]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#18181B]/92 p-4 backdrop-blur-xs sm:p-6"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label={copy.modal.close}
            className="absolute top-4 right-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#18181B] shadow-lg transition-colors hover:bg-[#6B2737] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:top-6 sm:right-6"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Counter Pill */}
          {hasMultiple && currentIndex >= 0 && (
            <div className="pointer-events-none absolute top-5 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/15 bg-[#18181B]/80 px-3.5 py-1 text-xs font-semibold text-white tabular-nums sm:top-7">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(navigableSlots.length).padStart(2, "0")}
            </div>
          )}

          {/* Previous / Next Navigation Buttons */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label={copy.modal.galleryPrevPhoto}
                className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#18181B] shadow-lg transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label={copy.modal.galleryNextPhoto}
                className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#18181B] shadow-lg transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}

          {/* Active Enlarged Photo or Slot Preview */}
          <div
            className="flex w-full max-w-4xl flex-col items-center gap-3 px-10 sm:px-14"
            onClick={(e) => e.stopPropagation()}
          >
            {hasRealImage && activeSlot.src ? (
              <div className="relative h-[72vh] w-full">
                <Image
                  src={activeSlot.src}
                  alt={activeSlot.alt[locale]}
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div
                className={`media-slot-grid flex w-full max-w-2xl flex-col justify-between rounded-2xl border border-[#DCDAD3] bg-[#F3F1ED] p-6 sm:p-8 ${
                  activeSlot.aspect === "4/3"
                    ? "aspect-[4/3]"
                    : activeSlot.aspect === "4/5"
                      ? "aspect-[4/5] max-h-[70vh] w-auto"
                      : "aspect-[16/10]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#E4E2DC] bg-white px-2.5 py-1 text-xs font-semibold text-[#52525B] uppercase">
                    <Camera className="h-3.5 w-3.5 text-[#6B2737]" aria-hidden="true" />
                    {activeSlot.slotCode}
                  </span>
                  <span className="rounded-md bg-white px-2 py-0.5 text-xs font-medium text-[#71717A] tabular-nums">
                    {activeSlot.aspect.replace("/", ":")}
                  </span>
                </div>

                <div className="my-auto text-center">
                  <p className="text-xs font-bold tracking-wider text-[#6B2737] uppercase">
                    {copy.placeholder.awaitingPhoto}
                  </p>
                  <p className="mx-auto mt-2 max-w-[34ch] text-sm font-medium text-[#3F3F46]">
                    {activeSlot.caption[locale]}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#DCDAD3] pt-3 text-xs text-[#71717A]">
                  <span>/public/images/</span>
                  <span>
                    {copy.placeholder.aspectLabel} {activeSlot.aspect.replace("/", ":")}
                  </span>
                </div>
              </div>
            )}

            <p className="max-w-2xl text-center text-sm font-medium text-white/95">
              {activeSlot.caption[locale]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

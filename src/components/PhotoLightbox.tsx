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

const FRAME_ASPECT_CLASSES: Record<MediaSlot["aspect"], string> = {
  "16/10": "aspect-[16/10]",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
};

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
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#18181B]/88 p-4 backdrop-blur-xs sm:p-6"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className={`w-full overflow-hidden rounded-2xl border border-white/15 bg-[#18181B] shadow-2xl ${
              activeSlot.aspect === "4/5" ? "max-w-md" : "max-w-3xl"
            }`}
          >
            {/* Photo Viewport with In-Frame Controls */}
            <div
              className={`relative w-full ${FRAME_ASPECT_CLASSES[activeSlot.aspect]} max-h-[75vh] ${
                hasRealImage ? "bg-[#111114]" : "media-slot-grid bg-[#F3F1ED]"
              }`}
            >
              {hasRealImage && activeSlot.src ? (
                <Image
                  src={activeSlot.src}
                  alt={activeSlot.alt[locale]}
                  fill
                  sizes="(max-width: 768px) 95vw, 768px"
                  className="object-contain"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center px-14 text-center sm:px-16">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-[#E4E2DC] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#52525B] uppercase">
                    <Camera className="h-3.5 w-3.5 text-[#6B2737]" aria-hidden="true" />
                    {activeSlot.slotCode} · {activeSlot.aspect.replace("/", ":")}
                  </span>
                  <p className="mt-3 text-xs font-bold tracking-wider text-[#6B2737] uppercase sm:text-sm">
                    {copy.placeholder.awaitingPhoto}
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium text-[#71717A]">
                    /public/images/
                  </p>
                </div>
              )}

              {/* Counter Inside Photo Frame (Top-Left) */}
              {hasMultiple && currentIndex >= 0 && (
                <div className="pointer-events-none absolute top-3 left-3 z-10 rounded-full border border-white/15 bg-[#18181B]/75 px-3 py-1 text-xs font-semibold text-white tabular-nums backdrop-blur-xs">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(navigableSlots.length).padStart(2, "0")}
                </div>
              )}

              {/* Close Button Inside Photo Frame (Top-Right) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                aria-label={copy.modal.close}
                className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#18181B]/75 text-white shadow-md backdrop-blur-xs transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:w-10"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              </button>

              {/* Prev / Next Controls Inside Photo Frame */}
              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goPrev();
                    }}
                    aria-label={copy.modal.galleryPrevPhoto}
                    className="absolute left-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#18181B]/75 text-white shadow-md backdrop-blur-xs transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:w-10"
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
                    className="absolute right-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#18181B]/75 text-white shadow-md backdrop-blur-xs transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-10 sm:w-10"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Clean Caption Footer Bar */}
            <div className="border-t border-white/10 bg-[#18181B] px-4 py-3 text-center">
              <p className="text-xs font-medium text-white/95 sm:text-sm">
                {activeSlot.caption[locale]}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

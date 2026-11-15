"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import type { Locale, MediaSlot } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { isSafeLocalAssetPath } from "@/lib/security";
import { EventMediaFrame } from "./EventMediaFrame";

interface EventPhotoGalleryProps {
  slots: MediaSlot[];
  locale: Locale;
  onZoom: (slot: MediaSlot) => void;
  sizes?: string;
}

export function EventPhotoGallery({
  slots,
  locale,
  onZoom,
  sizes = "(max-width: 1024px) 100vw, 480px",
}: EventPhotoGalleryProps) {
  const copy = UI_COPY[locale];

  // If at least one real photo has been provided, show only real photos cleanly
  const activeSlots = useMemo(() => {
    const populated = slots.filter((slot) => isSafeLocalAssetPath(slot.src));
    return populated.length > 0 ? populated : slots;
  }, [slots]);

  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = activeIndex < activeSlots.length ? activeIndex : 0;
  const currentSlot = activeSlots[safeIndex] ?? activeSlots[0];

  if (!currentSlot) return null;

  const total = activeSlots.length;
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <div className="space-y-3">
      {/* Main Stage Frame */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlot.id}
            initial={{ opacity: 0.35, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.35, scale: 0.99 }}
            transition={{ duration: 0.18 }}
          >
            <EventMediaFrame
              slot={currentSlot}
              locale={locale}
              onZoom={onZoom}
              sizes={sizes}
            />
          </motion.div>
        </AnimatePresence>

        {/* Photo Counter Pill */}
        {total > 1 && (
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-[#18181B]/75 px-2.5 py-1 text-[11px] font-semibold text-white tabular-nums backdrop-blur-xs">
            {String(safeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        )}

        {/* Prev / Next Controls */}
        {total > 1 && (
          <div className="absolute right-3 bottom-3 flex items-center gap-1.5">
            <button
              type="button"
              onClick={goPrev}
              aria-label={copy.modal.galleryPrevPhoto}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#18181B]/75 text-white backdrop-blur-xs transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={copy.modal.galleryNextPhoto}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-[#18181B]/75 text-white backdrop-blur-xs transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {/* Active Caption */}
      <div className="flex items-center justify-between gap-2 px-0.5">
        <p className="text-xs font-medium text-[#3F3F46]">
          {currentSlot.caption[locale]}
        </p>
      </div>

      {/* Scalable Horizontal Thumbnail Filmstrip (handles 2 or 20+ photos neatly) */}
      {total > 1 && (
        <div
          role="listbox"
          aria-label={copy.modal.galleryTitle}
          className="flex gap-2 overflow-x-auto pb-1.5"
        >
          {activeSlots.map((slot, index) => {
            const isSelected = index === safeIndex;
            const hasImage = isSafeLocalAssetPath(slot.src);

            return (
              <button
                key={slot.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-[16/10] w-24 shrink-0 overflow-hidden rounded-lg border transition-all sm:w-28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
                  isSelected
                    ? "border-[#6B2737] ring-2 ring-[#6B2737]/25"
                    : "border-[#E4E2DC] opacity-75 hover:opacity-100"
                }`}
              >
                {hasImage ? (
                  <Image
                    src={slot.src!}
                    alt={slot.alt[locale]}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                ) : (
                  <div className="media-slot-grid flex h-full w-full flex-col items-center justify-center gap-1 p-1.5">
                    <Camera className="h-3.5 w-3.5 text-[#6B2737]" aria-hidden="true" />
                    <span className="text-[10px] font-semibold text-[#52525B] tabular-nums">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

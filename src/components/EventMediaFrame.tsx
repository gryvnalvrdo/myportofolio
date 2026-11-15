"use client";

import Image from "next/image";
import { Camera, Maximize2 } from "lucide-react";
import type { Locale, MediaSlot } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { isSafeLocalAssetPath } from "@/lib/security";

interface EventMediaFrameProps {
  slot: MediaSlot;
  locale: Locale;
  sizes?: string;
  priority?: boolean;
  onZoom?: (slot: MediaSlot) => void;
  showCaptionOverlay?: boolean;
  compact?: boolean;
  className?: string;
}

const ASPECT_CLASSES: Record<MediaSlot["aspect"], string> = {
  "16/10": "aspect-[16/10]",
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
};

export function EventMediaFrame({
  slot,
  locale,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  onZoom,
  showCaptionOverlay = false,
  compact = false,
  className = "",
}: EventMediaFrameProps) {
  const hasRealImage = isSafeLocalAssetPath(slot.src);
  const copy = UI_COPY[locale];

  const frameContent = hasRealImage ? (
    <>
      <Image
        src={slot.src!}
        alt={slot.alt[locale]}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      {showCaptionOverlay && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/35 to-transparent p-3.5 text-left">
          <p className="line-clamp-2 text-xs font-medium text-[#FAF8F5]">
            {slot.caption[locale]}
          </p>
        </div>
      )}
      {onZoom && (
        <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-[#171717]/75 px-2.5 py-1 font-mono text-[10px] text-[#FAF8F5] opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
          <Maximize2 className="h-3 w-3" aria-hidden="true" />
          {copy.modal.zoomPhoto}
        </span>
      )}
    </>
  ) : (
    <div className="media-slot-grid relative flex h-full w-full flex-col justify-between p-3.5 sm:p-4">
      {/* Subtle architectural corner registration marks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2.5 left-2.5 h-3 w-3 border-t border-l border-[#6B2737]/35"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2.5 right-2.5 h-3 w-3 border-t border-r border-[#6B2737]/35"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-[#6B2737]/35"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2.5 bottom-2.5 h-3 w-3 border-r border-b border-[#6B2737]/35"
      />

      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#DCD6CA] bg-[#FAF8F5]/90 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-[#52525B] uppercase">
          <Camera className="h-3 w-3 text-[#6B2737]" aria-hidden="true" />
          {slot.slotCode}
        </span>
        <span className="rounded-sm bg-[#FAF8F5]/85 px-1.5 py-0.5 font-mono text-[10px] text-[#71717A]">
          {slot.aspect.replace("/", ":")}
        </span>
      </div>

      <div className="my-auto py-2 text-center">
        <p className="font-mono text-[10px] tracking-[0.16em] text-[#6B2737] uppercase">
          {copy.placeholder.awaitingPhoto}
        </p>
        {!compact && (
          <p className="mx-auto mt-1 max-w-[26ch] text-xs leading-snug text-[#52525B]">
            {slot.caption[locale]}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[#E5E0D6]/80 pt-1.5 font-mono text-[10px] text-[#71717A]">
        <span>/public/images/</span>
        <span>
          {copy.placeholder.aspectLabel} {slot.aspect.replace("/", ":")}
        </span>
      </div>
    </div>
  );

  const baseClass = `group relative w-full overflow-hidden rounded-xl border border-[#E5E0D6] bg-[#F4F0E8] ${ASPECT_CLASSES[slot.aspect]} ${className}`;

  if (onZoom && hasRealImage) {
    return (
      <button
        type="button"
        onClick={() => onZoom(slot)}
        aria-label={`${copy.modal.zoomPhoto}: ${slot.alt[locale]}`}
        className={`${baseClass} block cursor-zoom-in text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2`}
      >
        {frameContent}
      </button>
    );
  }

  return <div className={baseClass}>{frameContent}</div>;
}

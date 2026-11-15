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
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#18181B]/80 via-[#18181B]/35 to-transparent p-3.5 text-left">
          <p className="line-clamp-2 text-xs font-medium text-white">
            {slot.caption[locale]}
          </p>
        </div>
      )}
      {onZoom && (
        <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-[#18181B]/75 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
          <Maximize2 className="h-3 w-3" aria-hidden="true" />
          {copy.modal.zoomPhoto}
        </span>
      )}
    </>
  ) : (
    <div className="media-slot-grid relative flex h-full w-full flex-col justify-between p-3 sm:p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex min-w-0 items-center gap-1.5 truncate rounded-md border border-[#E4E2DC] bg-white/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#52525B] uppercase">
          <Camera className="h-3 w-3 shrink-0 text-[#6B2737]" aria-hidden="true" />
          <span className="truncate">{slot.slotCode}</span>
        </span>
        <span className="shrink-0 rounded-md bg-white/85 px-1.5 py-0.5 text-[10px] font-medium text-[#71717A] tabular-nums">
          {slot.aspect.replace("/", ":")}
        </span>
      </div>

      <div className="my-auto py-1 text-center">
        <p className="text-[11px] font-semibold tracking-wide text-[#6B2737] uppercase">
          {copy.placeholder.awaitingPhoto}
        </p>
        {!compact && (
          <p className="mx-auto mt-1 max-w-[28ch] text-xs leading-snug text-[#52525B]">
            {slot.caption[locale]}
          </p>
        )}
      </div>

      {!compact ? (
        <div className="flex items-center justify-between border-t border-[#E4E2DC]/80 pt-1.5 text-[10px] font-medium text-[#71717A]">
          <span>/public/images/</span>
          <span className="inline-flex items-center gap-1.5">
            {onZoom && (
              <span className="inline-flex items-center gap-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-[#6B2737]">
                <Maximize2 className="h-2.5 w-2.5" aria-hidden="true" />
                {copy.modal.zoomPhoto}
              </span>
            )}
            <span>
              {copy.placeholder.aspectLabel} {slot.aspect.replace("/", ":")}
            </span>
          </span>
        </div>
      ) : (
        <div className="h-1" aria-hidden="true" />
      )}
    </div>
  );

  const baseClass = `group relative w-full overflow-hidden rounded-xl border border-[#E4E2DC] bg-[#F3F1ED] ${ASPECT_CLASSES[slot.aspect]} ${className}`;

  if (onZoom) {
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

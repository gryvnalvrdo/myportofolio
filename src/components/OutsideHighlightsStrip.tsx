"use client";

import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { OUTSIDE_HIGHLIGHT_FRAMES } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { EventMediaFrame } from "./EventMediaFrame";

interface OutsideHighlightsStripProps {
  locale: Locale;
  onSelectExperience: (id: string) => void;
}

export function OutsideHighlightsStrip({
  locale,
  onSelectExperience,
}: OutsideHighlightsStripProps) {
  const copy = UI_COPY[locale];

  return (
    <section
      id="sorotan"
      className="border-b border-[#E5E0D6] bg-[#F3EFE8]/60 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#6B2737] uppercase">
              {copy.highlights.kicker}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium tracking-tight text-[#171717] sm:text-3xl">
              {copy.highlights.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#52525B]">
            {copy.highlights.subheading}
          </p>
        </div>

        {/* Symmetric 2x2 Mobile / 4x1 Desktop Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {OUTSIDE_HIGHLIGHT_FRAMES.map((frame) => (
            <button
              key={frame.id}
              type="button"
              onClick={() => onSelectExperience(frame.targetExperienceId)}
              className="group flex h-full flex-col justify-between rounded-2xl border border-[#E5E0D6] bg-white p-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6B2737]/50 hover:shadow-[0_6px_20px_rgba(23,23,23,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:p-3"
            >
              <div>
                <EventMediaFrame
                  slot={frame.slot}
                  locale={locale}
                  compact
                  sizes="(max-width: 1024px) 48vw, 280px"
                />
                <div className="mt-3 px-1">
                  <span className="font-mono text-[10px] font-medium tracking-wider text-[#6B2737] uppercase">
                    {frame.tag[locale]}
                  </span>
                  <h3 className="mt-1 line-clamp-2 text-xs font-semibold leading-snug text-[#171717] sm:text-sm">
                    {frame.title[locale]}
                  </h3>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-[#F0ECE4] px-1 pt-2.5 text-[11px] font-medium text-[#52525B] transition-colors group-hover:text-[#6B2737]">
                <span>{copy.highlights.openDetail}</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { CalendarClock, ChevronRight } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { ENTRANCE_SERIES, EXPERIENCES } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";

interface TimelineRunOfShowProps {
  locale: Locale;
  onSelectExperience: (id: string) => void;
  onSelectEntrance: () => void;
}

interface TimelineRow {
  key: string;
  label: string;
  role: string;
  period: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  kind: "entrance" | "event" | "organization";
  action: () => void;
}

// Timeline bounds: Nov 2022 (month index 0) to Aug 2026 (month index 45) => total 46 months
const ORIGIN_YEAR = 2022;
const ORIGIN_MONTH = 11;
const TOTAL_MONTHS = 46;

function toMonthOffset(year: number, month: number): number {
  return (year - ORIGIN_YEAR) * 12 + (month - ORIGIN_MONTH);
}

export function TimelineRunOfShow({
  locale,
  onSelectExperience,
  onSelectEntrance,
}: TimelineRunOfShowProps) {
  const copy = UI_COPY[locale];

  const rows: TimelineRow[] = [
    {
      key: "bem-uc",
      label: EXPERIENCES[1]!.title[locale],
      role: EXPERIENCES[1]!.role[locale],
      period: EXPERIENCES[1]!.period,
      startYear: 2025,
      startMonth: 7,
      endYear: 2026,
      endMonth: 8,
      kind: "organization",
      action: () => onSelectExperience("bem-uc"),
    },
    {
      key: "rekfest-2",
      label: EXPERIENCES[0]!.title[locale],
      role: EXPERIENCES[0]!.role[locale],
      period: EXPERIENCES[0]!.period,
      startYear: 2025,
      startMonth: 10,
      endYear: 2026,
      endMonth: 5,
      kind: "event",
      action: () => onSelectExperience("rekfest-2"),
    },
    {
      key: "seminar-bela-negara",
      label: EXPERIENCES[3]!.title[locale],
      role: EXPERIENCES[3]!.role[locale],
      period: EXPERIENCES[3]!.period,
      startYear: 2025,
      startMonth: 10,
      endYear: 2025,
      endMonth: 11,
      kind: "event",
      action: () => onSelectExperience("seminar-bela-negara"),
    },
    {
      key: "hmm-uc",
      label: EXPERIENCES[2]!.title[locale],
      role: EXPERIENCES[2]!.role[locale],
      period: EXPERIENCES[2]!.period,
      startYear: 2024,
      startMonth: 8,
      endYear: 2025,
      endMonth: 8,
      kind: "organization",
      action: () => onSelectExperience("hmm-uc"),
    },
    {
      key: "entrance-3",
      label: ENTRANCE_SERIES.editions[2]!.editionLabel,
      role: ENTRANCE_SERIES.editions[2]!.roleTitle[locale],
      period: ENTRANCE_SERIES.editions[2]!.period,
      startYear: 2024,
      startMonth: 10,
      endYear: 2025,
      endMonth: 5,
      kind: "entrance",
      action: onSelectEntrance,
    },
    {
      key: "oweek-uc",
      label: EXPERIENCES[4]!.title[locale],
      role: EXPERIENCES[4]!.role[locale],
      period: EXPERIENCES[4]!.period,
      startYear: 2024,
      startMonth: 1,
      endYear: 2024,
      endMonth: 9,
      kind: "event",
      action: () => onSelectExperience("oweek-uc"),
    },
    {
      key: "entrance-2",
      label: ENTRANCE_SERIES.editions[1]!.editionLabel,
      role: ENTRANCE_SERIES.editions[1]!.roleTitle[locale],
      period: ENTRANCE_SERIES.editions[1]!.period,
      startYear: 2023,
      startMonth: 10,
      endYear: 2024,
      endMonth: 5,
      kind: "entrance",
      action: onSelectEntrance,
    },
    {
      key: "flamians-1",
      label: EXPERIENCES[5]!.title[locale],
      role: EXPERIENCES[5]!.role[locale],
      period: EXPERIENCES[5]!.period,
      startYear: 2023,
      startMonth: 4,
      endYear: 2023,
      endMonth: 6,
      kind: "event",
      action: () => onSelectExperience("flamians-1"),
    },
    {
      key: "entrance-1",
      label: ENTRANCE_SERIES.editions[0]!.editionLabel,
      role: ENTRANCE_SERIES.editions[0]!.roleTitle[locale],
      period: ENTRANCE_SERIES.editions[0]!.period,
      startYear: 2022,
      startMonth: 11,
      endYear: 2023,
      endMonth: 5,
      kind: "entrance",
      action: onSelectEntrance,
    },
  ];

  const yearMarkers = [2022, 2023, 2024, 2025, 2026];

  return (
    <section id="linimasa" className="border-b border-[#E5E0D6] bg-[#F3EFE8]/55 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#6B2737] uppercase">
              {copy.timeline.kicker}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl">
              {copy.timeline.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#52525B]">
            {copy.timeline.subheading}
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#DCD6CA] bg-white">
          {/* Desktop Chronological Grid Header */}
          <div className="hidden border-b border-[#E5E0D6] bg-[#FAF8F5] px-6 py-3 lg:grid lg:grid-cols-12 lg:items-center lg:gap-4">
            <div className="col-span-5 flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider text-[#52525B] uppercase">
              <CalendarClock className="h-3.5 w-3.5 text-[#6B2737]" aria-hidden="true" />
              <span>{copy.timeline.concurrentNote}</span>
            </div>
            <div className="col-span-7 grid grid-cols-5 border-l border-[#E5E0D6] pl-4 font-mono text-xs font-medium text-[#52525B] tabular-nums">
              {yearMarkers.map((yr) => (
                <span key={yr}>{yr}</span>
              ))}
            </div>
          </div>

          <div className="divide-y divide-[#EFECE4]">
            {rows.map((row) => {
              const startOffset = Math.max(0, toMonthOffset(row.startYear, row.startMonth));
              const endOffset = Math.min(TOTAL_MONTHS, toMonthOffset(row.endYear, row.endMonth) + 1);
              const leftPct = (startOffset / TOTAL_MONTHS) * 100;
              const widthPct = Math.max(4.5, ((endOffset - startOffset) / TOTAL_MONTHS) * 100);

              const barColor =
                row.kind === "entrance"
                  ? "bg-[#6B2737]"
                  : row.kind === "organization"
                    ? "bg-[#171717]"
                    : "bg-[#8A6238]";

              return (
                <button
                  key={row.key}
                  type="button"
                  onClick={row.action}
                  className="group grid w-full grid-cols-1 items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-[#FAF8F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#6B2737] sm:px-6 lg:grid-cols-12 lg:gap-4"
                >
                  <div className="lg:col-span-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-[#171717] transition-colors group-hover:text-[#6B2737]">
                        {row.label}
                      </span>
                      <ChevronRight
                        className="h-4 w-4 shrink-0 text-[#71717A] transition-transform group-hover:translate-x-0.5 group-hover:text-[#6B2737] lg:hidden"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-[#52525B]">
                      <span className="font-medium text-[#3F3F46]">{row.role}</span>
                      <span aria-hidden="true" className="text-[#D4CEC2]">
                        ·
                      </span>
                      <span className="font-mono text-[11px] tabular-nums">{row.period}</span>
                    </div>
                  </div>

                  {/* Desktop Gantt Bar */}
                  <div className="hidden lg:col-span-7 lg:flex lg:items-center lg:gap-3 lg:border-l lg:border-[#E5E0D6] lg:pl-4">
                    <div className="relative h-7 w-full rounded-full bg-[#F3EFE8]">
                      <div
                        style={{
                          left: `${leftPct}%`,
                          width: `${widthPct}%`,
                        }}
                        className={`absolute top-1.5 bottom-1.5 rounded-full transition-opacity group-hover:opacity-90 ${barColor}`}
                      />
                    </div>
                    <span className="shrink-0 font-mono text-[11px] font-medium text-[#52525B] opacity-0 transition-opacity group-hover:opacity-100">
                      {copy.timeline.clickToInspect}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

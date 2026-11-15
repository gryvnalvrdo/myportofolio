"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles, X } from "lucide-react";
import type { ExperienceCategory, Locale } from "@/data/portfolio";
import { ENTRANCE_SERIES, EXPERIENCES } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { EventMediaFrame } from "./EventMediaFrame";

export type ExperienceFilter = "all" | ExperienceCategory;

interface ExperienceShowcaseProps {
  locale: Locale;
  activeFilter: ExperienceFilter;
  onFilterChange: (filter: ExperienceFilter) => void;
  highlightedSkill: string | null;
  onClearSkillHighlight: () => void;
  onOpenExperience: (id: string) => void;
  onOpenEntranceSeries: () => void;
}

export function ExperienceShowcase({
  locale,
  activeFilter,
  onFilterChange,
  highlightedSkill,
  onClearSkillHighlight,
  onOpenExperience,
  onOpenEntranceSeries,
}: ExperienceShowcaseProps) {
  const copy = UI_COPY[locale];

  const filteredExperiences = EXPERIENCES.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const showEntranceSeries = activeFilter === "all" || activeFilter === "event";
  const entranceMatchesSkill =
    !highlightedSkill || ENTRANCE_SERIES.relatedSkills.includes(highlightedSkill);

  // Enforce zero-orphan symmetric grids across desktop and tablet
  const gridColsClass =
    filteredExperiences.length === 2 || filteredExperiences.length === 4
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const filterOptions: { key: ExperienceFilter; label: string }[] = [
    { key: "all", label: copy.experiences.filterAll },
    { key: "event", label: copy.experiences.filterEvent },
    { key: "organization", label: copy.experiences.filterOrg },
  ];

  return (
    <section id="pengalaman" className="border-b border-[#E5E0D6] bg-[#FAF8F5] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header + Symmetric Filter Bar */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#6B2737] uppercase">
              {copy.experiences.kicker}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl">
              {copy.experiences.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#52525B] sm:text-base">
              {copy.experiences.subheading}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter Pengalaman"
            className="inline-flex flex-wrap items-center gap-1 rounded-full border border-[#DCD6CA] bg-[#F3EFE8] p-1 self-start lg:self-auto"
          >
            {filterOptions.map((option) => {
              const isActive = activeFilter === option.key;
              return (
                <button
                  key={option.key}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => onFilterChange(option.key)}
                  className={`relative min-h-[38px] rounded-full px-4 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] sm:text-sm ${
                    isActive ? "text-[#FAF8F5]" : "text-[#52525B] hover:text-[#171717]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="experience-filter-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-full bg-[#171717]"
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Skill Highlight Indicator */}
        {highlightedSkill && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#6B2737]/30 bg-[#F7EFF1] px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-[#171717]">
              <Sparkles className="h-4 w-4 text-[#6B2737]" aria-hidden="true" />
              <span>{copy.experiences.highlightedSkillBanner}</span>
              <span className="rounded-md bg-[#6B2737] px-2.5 py-0.5 font-mono text-xs font-medium text-[#FAF8F5]">
                {highlightedSkill}
              </span>
            </div>
            <button
              type="button"
              onClick={onClearSkillHighlight}
              className="inline-flex min-h-[34px] items-center gap-1 rounded-full border border-[#6B2737]/30 bg-white px-3 py-1 text-xs font-medium text-[#6B2737] transition-colors hover:bg-[#6B2737] hover:text-white"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              {copy.experiences.clearSkillFilter}
            </button>
          </div>
        )}

        {/* Flagship Consolidated ENTRANCE Series Card (1.0 · 2.0 · 3.0) */}
        {showEntranceSeries && (
          <div className="mt-8">
            <button
              type="button"
              onClick={onOpenEntranceSeries}
              className={`group w-full rounded-2xl border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(23,23,23,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:p-6 ${
                highlightedSkill
                  ? entranceMatchesSkill
                    ? "border-[#6B2737] ring-2 ring-[#6B2737]/20"
                    : "border-[#E5E0D6] opacity-45"
                  : "border-[#DCD6CA] hover:border-[#6B2737]"
              }`}
            >
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <EventMediaFrame
                    slot={ENTRANCE_SERIES.coverSlot}
                    locale={locale}
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                </div>

                <div className="flex flex-col justify-between lg:col-span-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6B2737]/25 bg-[#F7EFF1] px-3 py-1 font-mono text-[11px] font-medium text-[#6B2737]">
                        <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                        {copy.experiences.seriesBadge}
                      </span>
                      <span className="font-mono text-xs text-[#52525B] tabular-nums">
                        {ENTRANCE_SERIES.period}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[#171717] sm:text-3xl">
                      {ENTRANCE_SERIES.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#52525B]">
                      {ENTRANCE_SERIES.subtitle[locale]}
                    </p>

                    {/* 3-Edition Rank Progression Preview Strip */}
                    <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                      {ENTRANCE_SERIES.editions.map((edition) => (
                        <div
                          key={edition.id}
                          className={`rounded-xl border p-3 transition-colors ${
                            edition.rankTier === 3
                              ? "border-[#6B2737]/40 bg-[#F7EFF1]/70"
                              : edition.rankTier === 2
                                ? "border-[#8A6238]/35 bg-[#F7F1E8]/70"
                                : "border-[#E5E0D6] bg-[#FAF8F5]"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="font-mono text-xs font-semibold text-[#171717]">
                              {edition.editionLabel}
                            </span>
                            <span className="font-mono text-[10px] text-[#52525B] tabular-nums">
                              {edition.period.split("–")[0]?.trim()}
                            </span>
                          </div>
                          <p
                            className={`mt-1 text-xs font-semibold ${
                              edition.rankTier === 3
                                ? "text-[#6B2737]"
                                : edition.rankTier === 2
                                  ? "text-[#7A5129]"
                                  : "text-[#3F3F46]"
                            }`}
                          >
                            {edition.roleTitle[locale]}
                          </p>
                          <p className="mt-1 font-mono text-[11px] text-[#52525B] tabular-nums">
                            {edition.metrics.map((m) => `${m.value} ${m.label[locale]}`).join(" · ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#EFECE4] pt-4">
                    <p className="text-xs text-[#52525B]">{copy.experiences.seriesHint}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B2737] transition-transform group-hover:translate-x-0.5">
                      {copy.experiences.openSeriesCta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Symmetric Grid of Individual Experiences (6 Cards = 3x2, 4 Cards = 2x2, 2 Cards = 2x1) */}
        <div className={`mt-6 grid gap-5 lg:gap-6 ${gridColsClass}`}>
          {filteredExperiences.map((item) => {
            const matchesSkill =
              !highlightedSkill || item.relatedSkills.includes(highlightedSkill);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpenExperience(item.id)}
                className={`group flex h-full flex-col justify-between rounded-2xl border bg-white p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(23,23,23,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:p-5 ${
                  highlightedSkill
                    ? matchesSkill
                      ? "border-[#6B2737] ring-2 ring-[#6B2737]/20"
                      : "border-[#E5E0D6] opacity-45"
                    : "border-[#E5E0D6] hover:border-[#6B2737]/60"
                }`}
              >
                <div className="w-full">
                  <EventMediaFrame
                    slot={item.coverSlot}
                    locale={locale}
                    compact
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />

                  {/* Metadata Row */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="rounded-md bg-[#F3EFE8] px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-[#52525B] uppercase">
                      {item.category === "event"
                        ? copy.experiences.categoryEvent
                        : copy.experiences.categoryOrg}
                    </span>
                    <span className="font-mono text-[11px] text-[#52525B] tabular-nums">
                      {item.period}
                    </span>
                  </div>

                  {/* Role & Title */}
                  <p className="mt-3 text-xs font-semibold tracking-wide text-[#6B2737] uppercase">
                    {item.role[locale]}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-medium leading-snug text-[#171717]">
                    {item.title[locale]}
                  </h3>

                  {/* Concise 2-line preview hook (no wall of text outside) */}
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#52525B]">
                    {item.summaryHook[locale]}
                  </p>
                </div>

                {/* Bottom Metrics + Click Cue */}
                <div className="mt-5 w-full">
                  <div className="grid grid-cols-2 gap-2 border-t border-[#F0ECE4] pt-3.5 sm:grid-cols-3">
                    {item.metrics.slice(0, 3).map((metric) => (
                      <div key={`${item.id}-${metric.value}`} className="min-w-0">
                        <p className="font-mono text-xs font-semibold text-[#171717] tabular-nums">
                          {metric.value}
                        </p>
                        <p className="truncate text-[11px] text-[#71717A]">
                          {metric.label[locale]}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-[#F0ECE4] pt-3 text-xs font-semibold text-[#171717] transition-colors group-hover:text-[#6B2737]">
                    <span>{copy.experiences.openCardCta}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

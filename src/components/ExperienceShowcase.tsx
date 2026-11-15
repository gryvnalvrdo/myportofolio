"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Images, Layers } from "lucide-react";
import type { ExperienceCategory, Locale } from "@/data/portfolio";
import { ENTRANCE_SERIES, EXPERIENCES } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { isSafeLocalAssetPath } from "@/lib/security";
import { EventMediaFrame } from "./EventMediaFrame";

export type ExperienceFilter = "all" | ExperienceCategory;

interface ExperienceShowcaseProps {
  locale: Locale;
  activeFilter: ExperienceFilter;
  onFilterChange: (filter: ExperienceFilter) => void;
  onOpenExperience: (id: string) => void;
  onOpenEntranceSeries: () => void;
}

export function ExperienceShowcase({
  locale,
  activeFilter,
  onFilterChange,
  onOpenExperience,
  onOpenEntranceSeries,
}: ExperienceShowcaseProps) {
  const copy = UI_COPY[locale];

  const filteredExperiences = EXPERIENCES.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  const showEntranceSeries = activeFilter === "all" || activeFilter === "event";

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
    <section id="pengalaman" className="border-b border-[#E4E2DC] bg-[#F3F1ED]/60 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header + Symmetric Single-Row 3-Tab Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
              {copy.experiences.kicker}
            </p>
            <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-[#18181B] sm:text-3xl">
              {copy.experiences.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#52525B] sm:text-base">
              {copy.experiences.subheading}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter Pengalaman"
            className="grid w-full grid-cols-3 gap-1 rounded-xl border border-[#DCDAD3] bg-white p-1 sm:w-auto sm:min-w-[340px]"
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
                  className={`relative min-h-[38px] rounded-lg px-2 py-1.5 text-center text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] sm:px-4 sm:text-sm ${
                    isActive ? "text-white" : "text-[#52525B] hover:text-[#18181B]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="experience-filter-pill"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-lg bg-[#18181B]"
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Flagship Consolidated ENTRANCE Series Card (1.0 · 2.0 · 3.0) */}
        <AnimatePresence mode="popLayout">
          {showEntranceSeries && (
            <motion.div
              key="entrance-series-card"
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mt-7"
            >
              <button
                type="button"
                onClick={onOpenEntranceSeries}
                className="group w-full rounded-2xl border border-[#DCDAD3] bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6B2737] hover:shadow-[0_14px_34px_rgba(24,24,27,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:p-6"
              >
                <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-8">
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
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#F7EFF1] px-2.5 py-1 text-[11px] font-semibold text-[#6B2737]">
                          <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                          {copy.experiences.seriesBadge}
                        </span>
                        <span className="text-xs font-medium text-[#52525B] tabular-nums">
                          {ENTRANCE_SERIES.period}
                        </span>
                      </div>

                      <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-[#18181B] sm:text-2xl">
                        {ENTRANCE_SERIES.title[locale]}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#52525B]">
                        {ENTRANCE_SERIES.subtitle[locale]}
                      </p>

                      {/* 3-Edition Rank Progression Preview Strip */}
                      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {ENTRANCE_SERIES.editions.map((edition) => (
                          <div
                            key={edition.id}
                            className={`rounded-xl border p-3 transition-colors duration-200 ${
                              edition.rankTier === 3
                                ? "border-[#6B2737]/35 bg-[#F7EFF1]/70 group-hover:border-[#6B2737]/60"
                                : edition.rankTier === 2
                                  ? "border-[#8A6238]/35 bg-[#F7F1E8]/70 group-hover:border-[#8A6238]/60"
                                  : "border-[#E4E2DC] bg-[#FAF9F7] group-hover:border-[#D4D2CC]"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-[#18181B]">
                                {edition.editionLabel}
                              </span>
                              <span className="text-[11px] font-medium text-[#71717A] tabular-nums">
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
                            <p className="mt-1 text-[11px] text-[#52525B] tabular-nums">
                              {edition.metrics
                                .map((m) => `${m.value} ${m.label[locale]}`)
                                .join(" · ")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2 border-t border-[#ECEAE4] pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-[#52525B]">{copy.experiences.seriesHint}</p>
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#6B2737] transition-transform duration-200 group-hover:translate-x-1">
                        {copy.experiences.openSeriesCta}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Symmetric Animated Grid of Individual Experiences */}
        <motion.div layout className={`mt-5 grid gap-4 sm:gap-5 lg:gap-6 ${gridColsClass}`}>
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((item, idx) => {
              const metricColsClass =
                item.metrics.length === 2 ? "grid-cols-2" : "grid-cols-3";
              const realPhotosCount = [item.coverSlot, ...item.gallerySlots].filter((slot) =>
                isSafeLocalAssetPath(slot.src)
              ).length;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.04, 0.2) }}
                  className="h-full"
                >
                  <button
                    type="button"
                    onClick={() => onOpenExperience(item.id)}
                    className="group flex h-full w-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-white p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#6B2737]/65 hover:shadow-[0_12px_28px_rgba(24,24,27,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:p-5"
                  >
                    <div className="w-full">
                      <div className="relative">
                        <EventMediaFrame
                          slot={item.coverSlot}
                          locale={locale}
                          compact
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                        />
                        {realPhotosCount > 0 && (
                          <span className="absolute right-2.5 bottom-2.5 inline-flex items-center gap-1 rounded-full bg-[#18181B]/75 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-xs tabular-nums">
                            <Images className="h-3 w-3" aria-hidden="true" />
                            {realPhotosCount}
                          </span>
                        )}
                      </div>

                      {/* Metadata Row */}
                      <div className="mt-3.5 flex items-center justify-between gap-2">
                        <span className="rounded-md bg-[#F3F1ED] px-2 py-0.5 text-[11px] font-semibold text-[#52525B]">
                          {item.category === "event"
                            ? copy.experiences.categoryEvent
                            : copy.experiences.categoryOrg}
                        </span>
                        <span className="text-[11px] font-medium text-[#52525B] tabular-nums">
                          {item.period}
                        </span>
                      </div>

                      {/* Role & Title */}
                      <p className="mt-2.5 text-xs font-semibold text-[#6B2737]">
                        {item.role[locale]}
                      </p>
                      <h3 className="font-display mt-1 text-lg font-bold leading-snug text-[#18181B]">
                        {item.title[locale]}
                      </h3>

                      {/* Concise 2-line preview hook */}
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#52525B]">
                        {item.summaryHook[locale]}
                      </p>
                    </div>

                    {/* Symmetric Bottom Metrics + Click Cue */}
                    <div className="mt-4 w-full">
                      <div className={`grid gap-2 border-t border-[#ECEAE4] pt-3 ${metricColsClass}`}>
                        {item.metrics.slice(0, 3).map((metric) => (
                          <div key={`${item.id}-${metric.value}`} className="min-w-0">
                            <p className="text-xs font-bold text-[#18181B] tabular-nums sm:text-sm">
                              {metric.value}
                            </p>
                            <p className="truncate text-[11px] text-[#71717A]">
                              {metric.label[locale]}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3.5 flex items-center justify-between border-t border-[#ECEAE4] pt-3 text-xs font-semibold text-[#18181B] transition-colors group-hover:text-[#6B2737]">
                        <span>{copy.experiences.openCardCta}</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

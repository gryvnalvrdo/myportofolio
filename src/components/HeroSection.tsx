"use client";

import { ArrowDownRight, ExternalLink, FileText, GraduationCap, MapPin } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { PORTFOLIO_PROFILE } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { getSafeExternalHref } from "@/lib/security";
import { EventMediaFrame } from "./EventMediaFrame";

interface HeroSectionProps {
  locale: Locale;
  onOpenCvModal: () => void;
  onSelectExperience: (id: string) => void;
}

export function HeroSection({
  locale,
  onOpenCvModal,
  onSelectExperience,
}: HeroSectionProps) {
  const copy = UI_COPY[locale];
  const safeLinkedIn = getSafeExternalHref(PORTFOLIO_PROFILE.linkedinUrl);

  return (
    <section
      id="profil"
      className="border-b border-[#E4E2DC] bg-[#FAF9F7] py-8 sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Balanced Profile Summary & Actions */}
          <div className="lg:col-span-6">
            <h1 className="font-display text-3xl font-bold tracking-tight text-[#18181B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {PORTFOLIO_PROFILE.name}
            </h1>

            <p className="mt-2.5 text-sm font-semibold text-[#6B2737] sm:text-base">
              {copy.hero.subtitle}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-[#52525B] sm:text-sm">
              <span className="inline-flex items-center gap-1.5 text-[#18181B]">
                <MapPin className="h-4 w-4 text-[#6B2737]" aria-hidden="true" />
                {copy.hero.availableLocation}
              </span>
              <span aria-hidden="true" className="text-[#D4D4D8]">
                ·
              </span>
              <span className="tabular-nums">
                {PORTFOLIO_PROFILE.education.university} ({PORTFOLIO_PROFILE.education.period})
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#3F3F46] sm:text-base sm:leading-[1.7]">
              {PORTFOLIO_PROFILE.summary[locale]}
            </p>

            {/* Compact Education Bar */}
            <div className="mt-6 flex items-center justify-between gap-4 rounded-xl border border-[#E4E2DC] bg-white px-4 py-3">
              <div className="min-w-0">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-[#6B2737] uppercase">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  {copy.hero.educationLabel}
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-[#18181B]">
                  {PORTFOLIO_PROFILE.education.university}
                </p>
                <p className="truncate text-xs text-[#52525B]">
                  {PORTFOLIO_PROFILE.education.degree[locale]}
                </p>
              </div>
              <div className="shrink-0 rounded-lg border border-[#E4E2DC] bg-[#FAF9F7] px-3 py-1.5 text-right">
                <p className="text-[10px] font-semibold tracking-wider text-[#71717A] uppercase">
                  {copy.hero.gpaLabel}
                </p>
                <p className="text-sm font-bold text-[#18181B] tabular-nums">
                  {PORTFOLIO_PROFILE.education.gpa}
                </p>
              </div>
            </div>

            {/* Symmetric Action Buttons on Mobile & Desktop */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#pengalaman"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-[#18181B] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6B2737] sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
              >
                {copy.hero.ctaExplore}
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center">
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-[#6B2737]/40 bg-white px-4 py-2.5 text-sm font-semibold text-[#6B2737] transition-colors hover:border-[#6B2737] hover:bg-[#F7EFF1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {copy.hero.ctaCv}
                </button>

                <a
                  href={safeLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full border border-[#DCDAD3] bg-white px-4 py-2.5 text-sm font-semibold text-[#18181B] transition-colors hover:border-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
                >
                  {copy.hero.ctaLinkedIn}
                  <ExternalLink className="h-3.5 w-3.5 text-[#52525B]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Photo Showcase Card (Portrait + 2 Outside Event Highlights) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#E4E2DC] bg-white p-3 shadow-[0_1px_3px_rgba(24,24,27,0.04)] sm:p-4">
              <EventMediaFrame
                slot={PORTFOLIO_PROFILE.portraitSlot}
                locale={locale}
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
              />

              <div className="mt-3">
                <p className="mb-2 text-[11px] font-semibold tracking-wide text-[#71717A] uppercase">
                  {copy.hero.outsideGalleryTitle}
                </p>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {PORTFOLIO_PROFILE.heroEventFrames.map((frame) => (
                    <button
                      key={frame.id}
                      type="button"
                      onClick={() => onSelectExperience(frame.targetExperienceId)}
                      className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 rounded-xl"
                    >
                      <EventMediaFrame
                        slot={frame.slot}
                        locale={locale}
                        compact
                        sizes="(max-width: 1024px) 46vw, 260px"
                      />
                      <p className="mt-1.5 truncate px-0.5 text-xs font-medium text-[#3F3F46] transition-colors group-hover:text-[#6B2737]">
                        {frame.label[locale]}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

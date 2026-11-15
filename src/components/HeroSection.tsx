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
}

export function HeroSection({ locale, onOpenCvModal }: HeroSectionProps) {
  const copy = UI_COPY[locale];
  const safeLinkedIn = getSafeExternalHref(PORTFOLIO_PROFILE.linkedinUrl);

  return (
    <section
      id="profil"
      className="border-b border-[#E5E0D6] bg-[#FAF8F5] pt-10 pb-12 sm:pt-14 sm:pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Identity & Summary */}
          <div className="lg:col-span-7">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#DCD6CA] bg-white px-3.5 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#6B2737]" aria-hidden="true" />
              <span className="font-mono text-[11px] font-medium tracking-wider text-[#52525B] uppercase">
                {copy.hero.eyebrow}
              </span>
            </div>

            <h1 className="mt-5 font-serif text-4xl font-medium tracking-tight text-[#171717] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {PORTFOLIO_PROFILE.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#52525B]">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#171717]">
                <MapPin className="h-4 w-4 text-[#6B2737]" aria-hidden="true" />
                {copy.hero.availableLocation}
              </span>
              <span aria-hidden="true" className="text-[#D4CEC2]">
                |
              </span>
              <span className="font-mono text-xs text-[#52525B] tabular-nums">
                {PORTFOLIO_PROFILE.education.university} · {PORTFOLIO_PROFILE.education.period}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-[1.75] text-[#3F3F46] sm:text-[1.0625rem]">
              {PORTFOLIO_PROFILE.summary[locale]}
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pengalaman"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-2.5 text-sm font-medium text-[#FAF8F5] transition-colors hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
              >
                {copy.hero.ctaExplore}
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#6B2737]/40 bg-white px-5 py-2.5 text-sm font-medium text-[#6B2737] transition-colors hover:border-[#6B2737] hover:bg-[#F7EFF1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                {copy.hero.ctaCv}
              </button>

              <a
                href={safeLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#DCD6CA] bg-white px-5 py-2.5 text-sm font-medium text-[#171717] transition-colors hover:border-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
              >
                {copy.hero.ctaLinkedIn}
                <ExternalLink className="h-3.5 w-3.5 text-[#52525B]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Outside Portrait Photo Frame + Education Dossier */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E5E0D6] bg-white p-3.5 shadow-[0_1px_2px_rgba(23,23,23,0.04)] sm:p-4">
              <EventMediaFrame
                slot={PORTFOLIO_PROFILE.portraitSlot}
                locale={locale}
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
              />

              <div className="mt-3.5 flex items-start justify-between gap-3 border-t border-[#E5E0D6] pt-3.5">
                <div className="min-w-0">
                  <p className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-wider text-[#6B2737] uppercase">
                    <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                    {copy.hero.educationLabel}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#171717]">
                    {PORTFOLIO_PROFILE.education.university}
                  </p>
                  <p className="text-xs text-[#52525B]">
                    {PORTFOLIO_PROFILE.education.degree[locale]}
                  </p>
                </div>
                <div className="shrink-0 rounded-lg border border-[#E5E0D6] bg-[#FAF8F5] px-3 py-1.5 text-right">
                  <p className="font-mono text-[10px] text-[#52525B] uppercase">
                    {copy.hero.gpaLabel}
                  </p>
                  <p className="font-mono text-sm font-semibold text-[#171717] tabular-nums">
                    {PORTFOLIO_PROFILE.education.gpa}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Symmetric 4-Cell Verified Metrics Row (2x2 on mobile, 4x1 on desktop) */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {PORTFOLIO_PROFILE.verifiedHighlights.map((item) => (
            <div
              key={item.value}
              className="flex h-full flex-col justify-between rounded-xl border border-[#E5E0D6] bg-white p-4 sm:p-5"
            >
              <p className="font-serif text-2xl font-medium tracking-tight text-[#171717] tabular-nums sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#52525B] sm:text-sm">
                {item.label[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

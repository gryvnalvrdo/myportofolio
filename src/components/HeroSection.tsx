"use client";

import { motion } from "framer-motion";
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
      className="border-b border-[#E4E2DC] bg-[#FAF9F7] pt-6 pb-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Text & Actions: second on mobile so profile photo slot is immediately visible, left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <h1 className="font-display text-3xl font-bold tracking-tight text-[#18181B] sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
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
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <GraduationCap className="h-4 w-4 text-[#6B2737]" aria-hidden="true" />
                {copy.hero.academicLine}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#3F3F46] sm:text-base sm:leading-[1.72]">
              {PORTFOLIO_PROFILE.summary[locale]}
            </p>

            {/* Symmetric Action Buttons */}
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
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
          </motion.div>

          {/* Portrait Card: first on mobile for immediate profile visibility, right on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <div className="rounded-2xl border border-[#E4E2DC] bg-white p-3 shadow-[0_1px_3px_rgba(24,24,27,0.04)] sm:p-3.5">
              <EventMediaFrame
                slot={PORTFOLIO_PROFILE.portraitSlot}
                locale={locale}
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

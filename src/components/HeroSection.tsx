"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText, GraduationCap, MapPin } from "lucide-react";
import type { Locale, MediaSlot } from "@/data/portfolio";
import { PORTFOLIO_PROFILE } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { getSafeExternalHref } from "@/lib/security";
import { EventMediaFrame } from "./EventMediaFrame";
import { LinkedInIcon } from "./LinkedInIcon";
import { PhotoLightbox } from "./PhotoLightbox";

interface HeroSectionProps {
  locale: Locale;
  onOpenCvModal: () => void;
}

export function HeroSection({ locale, onOpenCvModal }: HeroSectionProps) {
  const [zoomedPortrait, setZoomedPortrait] = useState<MediaSlot | null>(null);
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

            {/* Stacked Location & Education (atas-bawah) without GPA */}
            <div className="mt-3.5 flex flex-col items-start gap-1.5 text-xs font-medium text-[#52525B] sm:text-sm">
              <span className="inline-flex items-center gap-2 text-[#18181B]">
                <MapPin className="h-4 w-4 shrink-0 text-[#6B2737]" aria-hidden="true" />
                {copy.hero.availableLocation}
              </span>
              <span className="inline-flex items-center gap-2 tabular-nums">
                <GraduationCap className="h-4 w-4 shrink-0 text-[#6B2737]" aria-hidden="true" />
                {copy.hero.academicLine}
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#3F3F46] sm:text-base sm:leading-[1.72]">
              {PORTFOLIO_PROFILE.summary[locale]}
            </p>

            {/* Focused Symmetric Action Buttons: Lihat CV + LinkedIn with Brand Icon */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#6B2737] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#531D2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:px-6"
              >
                <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                {copy.hero.ctaCv}
              </button>

              <a
                href={safeLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#DCDAD3] bg-white px-5 py-2.5 text-sm font-semibold text-[#18181B] transition-colors hover:border-[#0A66C2] hover:bg-[#F3F8FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 sm:px-6"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0 text-[#0A66C2]" />
                <span>{copy.hero.ctaLinkedIn}</span>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-[#71717A]" aria-hidden="true" />
              </a>
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
                onZoom={(slot) => setZoomedPortrait(slot)}
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <PhotoLightbox
        activeSlot={zoomedPortrait}
        slots={[PORTFOLIO_PROFILE.portraitSlot]}
        locale={locale}
        onSelectSlot={setZoomedPortrait}
        onClose={() => setZoomedPortrait(null)}
      />
    </section>
  );
}

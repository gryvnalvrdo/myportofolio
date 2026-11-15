"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { MotionConfig } from "framer-motion";
import type { Locale } from "@/data/portfolio";
import { EXPERIENCES } from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import {
  ExperienceShowcase,
  type ExperienceFilter,
} from "@/components/ExperienceShowcase";
import { ExperienceModal } from "@/components/ExperienceModal";
import { EntranceSeriesModal } from "@/components/EntranceSeriesModal";
import { CvPrintModal } from "@/components/CvPrintModal";
import { ContactFooterSection } from "@/components/ContactFooterSection";
import { BackToTopButton } from "@/components/BackToTopButton";

const LOCALE_STORAGE_KEY = "mn_portfolio_locale";
const LOCALE_EVENT = "mn-locale-change";
let fallbackLocale: Locale = "id";

function subscribeLocale(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(LOCALE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LOCALE_EVENT, callback);
  };
}

function getLocaleSnapshot(): Locale {
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === "id" || saved === "en") {
      fallbackLocale = saved;
      return saved;
    }
    return fallbackLocale;
  } catch {
    return fallbackLocale;
  }
}

function getServerLocaleSnapshot(): Locale {
  return "id";
}

export default function PortfolioPage() {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  );
  const [activeFilter, setActiveFilter] = useState<ExperienceFilter>("all");
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);
  const [isEntranceOpen, setIsEntranceOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const handleChangeLocale = (next: Locale) => {
    fallbackLocale = next;
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Ignore storage errors in strict privacy browsers
    }
    window.dispatchEvent(new Event(LOCALE_EVENT));
  };

  const activeExperience =
    EXPERIENCES.find((exp) => exp.id === selectedExperienceId) ?? null;

  const navigateExperience = (direction: -1 | 1) => {
    if (!selectedExperienceId) return;
    const currentIndex = EXPERIENCES.findIndex((exp) => exp.id === selectedExperienceId);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + EXPERIENCES.length) % EXPERIENCES.length;
    const nextItem = EXPERIENCES[nextIndex];
    if (nextItem) {
      setSelectedExperienceId(nextItem.id);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#FAF9F7] text-[#18181B]">
        <Navbar
          locale={locale}
          onChangeLocale={handleChangeLocale}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        <main>
          <HeroSection
            locale={locale}
            onOpenCvModal={() => setIsCvModalOpen(true)}
          />

          <ExperienceShowcase
            locale={locale}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onOpenExperience={(id) => setSelectedExperienceId(id)}
            onOpenEntranceSeries={() => setIsEntranceOpen(true)}
          />
        </main>

        <ContactFooterSection locale={locale} />

        <BackToTopButton
          locale={locale}
          isHidden={Boolean(selectedExperienceId || isEntranceOpen || isCvModalOpen)}
        />

        {/* Interactive Split Text + Multi-Photo Modals */}
        <ExperienceModal
          experience={activeExperience}
          locale={locale}
          onClose={() => setSelectedExperienceId(null)}
          onPrev={() => navigateExperience(-1)}
          onNext={() => navigateExperience(1)}
        />

        <EntranceSeriesModal
          isOpen={isEntranceOpen}
          locale={locale}
          onClose={() => setIsEntranceOpen(false)}
        />

        <CvPrintModal
          isOpen={isCvModalOpen}
          initialLocale={locale}
          onClose={() => setIsCvModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}

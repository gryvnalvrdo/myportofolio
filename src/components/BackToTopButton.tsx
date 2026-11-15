"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";

interface BackToTopButtonProps {
  locale: Locale;
  isHidden?: boolean;
}

export function BackToTopButton({ locale, isHidden = false }: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);
  const copy = UI_COPY[locale];

  useEffect(() => {
    let frameId: number | null = null;

    const updateVisibility = () => {
      frameId = null;
      setVisible(window.scrollY > 460);
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateVisibility);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
    };
  }, []);

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && !isHidden && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          aria-label={copy.footer.backToTop}
          title={copy.footer.backToTop}
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed right-5 bottom-5 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DCDAD3] bg-white/95 text-[#3F3F46] shadow-[0_6px_18px_rgba(24,24,27,0.12)] backdrop-blur-xs transition-colors duration-200 hover:border-[#18181B] hover:text-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:right-7 sm:bottom-7"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

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

const CIRCLE_RADIUS = 20;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function BackToTopButton({ locale, isHidden = false }: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const copy = UI_COPY[locale];

  useEffect(() => {
    let frameId: number | null = null;

    const updateScroll = () => {
      frameId = null;
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(Math.max(scrollTop / maxScroll, 0), 1) : 0;
      setVisible(scrollTop > 320);
      setProgress(ratio);
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScroll);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const dashOffset = CIRCLE_CIRCUMFERENCE * (1 - progress);

  return (
    <AnimatePresence>
      {visible && !isHidden && (
        <motion.button
          type="button"
          onClick={handleScrollToTop}
          aria-label={copy.footer.backToTop}
          title={copy.footer.backToTop}
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="group fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#6B2737] text-white shadow-[0_10px_28px_rgba(24,24,27,0.28)] ring-1 ring-white/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#531D2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:right-7 sm:bottom-7"
        >
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <circle
              cx="24"
              cy="24"
              r={CIRCLE_RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="2"
            />
            <circle
              cx="24"
              cy="24"
              r={CIRCLE_RADIUS}
              fill="none"
              stroke="#FAF9F7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={CIRCLE_CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <ArrowUp
            className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

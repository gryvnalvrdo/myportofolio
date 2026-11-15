"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Mail, Menu, X } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { PORTFOLIO_PROFILE } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";

type SectionId = "profil" | "pengalaman" | "kontak";
const SECTION_IDS: SectionId[] = ["profil", "pengalaman", "kontak"];

interface NavbarProps {
  locale: Locale;
  onChangeLocale: (next: Locale) => void;
  onOpenCvModal: () => void;
}

export function Navbar({ locale, onChangeLocale, onOpenCvModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("profil");
  const [scrollProgress, setScrollProgress] = useState(0);
  const copy = UI_COPY[locale];

  const navLinks: { id: SectionId; href: string; label: string }[] = [
    { id: "profil", href: "#profil", label: copy.nav.overview },
    { id: "pengalaman", href: "#pengalaman", label: copy.nav.experiences },
    { id: "kontak", href: "#kontak", label: copy.nav.contact },
  ];

  const activeNavLabel =
    navLinks.find((item) => item.id === activeSection)?.label ?? copy.nav.overview;

  useEffect(() => {
    let frameId: number | null = null;

    const updateScrollState = () => {
      frameId = null;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      setScrollProgress(progress);

      if (window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 48) {
        setActiveSection("kontak");
        return;
      }

      if (scrollTop < 48) {
        setActiveSection("profil");
        return;
      }

      const triggerOffset = 140;
      let current: SectionId = "profil";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= triggerOffset) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollState);
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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#E4E2DC] bg-[#FAF9F7]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3.5 sm:gap-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation drawer"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E4E2DC] bg-white text-[#18181B] transition-colors hover:border-[#6B2737] sm:h-10 sm:w-10 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </button>

            <a
              href="#profil"
              className="font-display shrink-0 rounded-md text-sm font-bold tracking-tight text-[#18181B] transition-colors hover:text-[#6B2737] sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
            >
              {PORTFOLIO_PROFILE.name}
            </a>

            <span className="inline-flex min-w-0 items-center gap-1 rounded-full border border-[#E4C9CF] bg-[#F7EFF1] px-2 py-0.5 text-[11px] font-semibold text-[#6B2737] sm:gap-1.5 sm:px-2.5 sm:text-xs lg:hidden">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6B2737]" aria-hidden="true" />
              <span className="truncate">{activeNavLabel}</span>
            </span>
          </div>

          <nav aria-label="Navigasi Utama" className="hidden items-center gap-1.5 lg:flex">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
                    isActive
                      ? "font-semibold text-[#6B2737]"
                      : "font-medium text-[#52525B] hover:text-[#18181B]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-active"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-full border border-[#E4C9CF] bg-[#F7EFF1]"
                    />
                  )}
                  <span
                    className={`relative z-10 h-1.5 w-1.5 rounded-full transition-colors ${
                      isActive ? "bg-[#6B2737]" : "bg-transparent"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Language Switcher ID / EN */}
            <div
              role="group"
              aria-label={copy.nav.languageLabel}
              className="inline-flex items-center rounded-full border border-[#DCDAD3] bg-[#F3F1ED] p-0.5"
            >
              <button
                type="button"
                onClick={() => onChangeLocale("id")}
                aria-pressed={locale === "id"}
                className={`min-h-[30px] rounded-full px-2.5 text-[11px] font-semibold transition-colors sm:min-h-[32px] sm:px-3 sm:text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
                  locale === "id"
                    ? "bg-[#18181B] text-white"
                    : "text-[#52525B] hover:text-[#18181B]"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => onChangeLocale("en")}
                aria-pressed={locale === "en"}
                className={`min-h-[30px] rounded-full px-2.5 text-[11px] font-semibold transition-colors sm:min-h-[32px] sm:px-3 sm:text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
                  locale === "en"
                    ? "bg-[#18181B] text-white"
                    : "text-[#52525B] hover:text-[#18181B]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={onOpenCvModal}
              className="hidden min-h-[38px] items-center gap-1.5 rounded-full bg-[#6B2737] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#531D2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:inline-flex"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {copy.nav.viewCv}
            </button>
          </div>
        </div>

        {/* Continuous Scroll Progress Indicator */}
        <div className="pointer-events-none h-[2px] w-full bg-transparent" aria-hidden="true">
          <div
            className="h-full origin-left bg-[#6B2737]/75 transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </header>

      {/* Mobile Left Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#18181B]/50 backdrop-blur-xs"
            />

            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label={PORTFOLIO_PROFILE.name}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.24, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 flex w-[280px] max-w-[82vw] flex-col justify-between border-r border-[#E4E2DC] bg-[#FAF9F7] p-5 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#E4E2DC] pb-4">
                  <span className="font-display text-base font-bold text-[#18181B]">
                    {PORTFOLIO_PROFILE.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={copy.modal.close}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E4E2DC] bg-white text-[#18181B] hover:border-[#6B2737]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <nav className="mt-4 flex flex-col gap-1.5">
                  {navLinks.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "location" : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex min-h-[44px] items-center justify-between rounded-xl border px-3.5 text-sm transition-colors ${
                          isActive
                            ? "border-[#6B2737]/30 bg-[#F7EFF1] font-semibold text-[#6B2737]"
                            : "border-transparent font-medium text-[#18181B] hover:border-[#E4E2DC] hover:bg-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span
                            className="h-2 w-2 rounded-full bg-[#6B2737]"
                            aria-hidden="true"
                          />
                        )}
                      </a>
                    );
                  })}
                </nav>

                <div className="mt-5 border-t border-[#E4E2DC] pt-5">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCvModal();
                    }}
                    className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#6B2737] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#531D2A]"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    {copy.nav.viewCv}
                  </button>
                </div>
              </div>

              <div className="border-t border-[#E4E2DC] pt-4 text-xs text-[#52525B]">
                <p className="font-semibold text-[#18181B]">{PORTFOLIO_PROFILE.location}</p>
                <a
                  href={`mailto:${PORTFOLIO_PROFILE.email}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-[#6B2737] hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  {PORTFOLIO_PROFILE.email}
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

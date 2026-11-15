"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Mail, Menu, X } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { PORTFOLIO_PROFILE } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";

interface NavbarProps {
  locale: Locale;
  onChangeLocale: (next: Locale) => void;
  onOpenCvModal: () => void;
}

export function Navbar({ locale, onChangeLocale, onOpenCvModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const copy = UI_COPY[locale];

  const navLinks = [
    { href: "#profil", label: copy.nav.overview },
    { href: "#pengalaman", label: copy.nav.experiences },
    { href: "#kompetensi", label: copy.nav.skills },
    { href: "#kontak", label: copy.nav.contact },
  ];

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
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5">
            {/* Mobile Left Drawer Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation drawer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E2DC] bg-white text-[#18181B] transition-colors hover:border-[#6B2737] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>

            <a
              href="#profil"
              className="font-display rounded-md text-base font-bold tracking-tight text-[#18181B] transition-colors hover:text-[#6B2737] sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
            >
              {PORTFOLIO_PROFILE.name}
            </a>
          </div>

          <nav aria-label="Navigasi Utama" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#52525B] transition-colors hover:text-[#18181B] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
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
                className={`min-h-[32px] rounded-full px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
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
                className={`min-h-[32px] rounded-full px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
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
      </header>

      {/* Mobile Left Slide-Over Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#18181B]/50 backdrop-blur-xs"
            />

            {/* Slide-In Left Panel */}
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label={copy.nav.menuTitle}
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

                <p className="mt-5 text-[11px] font-semibold tracking-wider text-[#71717A] uppercase">
                  {copy.nav.menuTitle}
                </p>

                <nav className="mt-2.5 flex flex-col gap-1.5">
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex min-h-[44px] items-center rounded-xl border border-transparent px-3.5 text-sm font-medium text-[#18181B] transition-colors hover:border-[#E4E2DC] hover:bg-white"
                    >
                      {item.label}
                    </a>
                  ))}
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

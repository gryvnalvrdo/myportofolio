"use client";

import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";
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
    { href: "#sorotan", label: copy.nav.highlights },
    { href: "#pengalaman", label: copy.nav.experiences },
    { href: "#linimasa", label: copy.nav.timeline },
    { href: "#kompetensi", label: copy.nav.skills },
    { href: "#kontak", label: copy.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E0D6] bg-[#FAF8F5]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#profil"
          className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#6B2737]/25 bg-[#171717] font-serif text-sm font-semibold tracking-wider text-[#FAF8F5]">
            {PORTFOLIO_PROFILE.initials}
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#171717]">
              {PORTFOLIO_PROFILE.name}
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[#52525B] uppercase">
              Event Planner
            </span>
          </span>
        </a>

        <nav aria-label="Navigasi Utama" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#52525B] transition-colors hover:text-[#171717] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Bilingual Switcher ID / EN */}
          <div
            role="group"
            aria-label="Language Switcher"
            className="inline-flex items-center rounded-full border border-[#DCD6CA] bg-[#F3EFE8] p-0.5"
          >
            <button
              type="button"
              onClick={() => onChangeLocale("id")}
              aria-pressed={locale === "id"}
              className={`min-h-[34px] rounded-full px-3 font-mono text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
                locale === "id"
                  ? "bg-[#171717] text-[#FAF8F5]"
                  : "text-[#52525B] hover:text-[#171717]"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => onChangeLocale("en")}
              aria-pressed={locale === "en"}
              className={`min-h-[34px] rounded-full px-3 font-mono text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
                locale === "en"
                  ? "bg-[#171717] text-[#FAF8F5]"
                  : "text-[#52525B] hover:text-[#171717]"
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenCvModal}
            className="hidden min-h-[38px] items-center gap-1.5 rounded-full border border-[#6B2737] bg-[#6B2737] px-4 py-1.5 text-xs font-medium text-[#FAF8F5] transition-colors hover:bg-[#531D2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] focus-visible:ring-offset-2 sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            {copy.nav.viewCv}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E0D6] bg-white text-[#171717] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Symmetric Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E5E0D6] bg-[#FAF8F5] px-4 py-4 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center justify-center rounded-lg border border-[#E5E0D6] bg-white px-3 text-sm font-medium text-[#171717] transition-colors hover:border-[#6B2737]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCvModal();
            }}
            className="mt-3 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#6B2737] px-4 text-sm font-medium text-[#FAF8F5]"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            {copy.nav.viewCv}
          </button>
        </div>
      )}
    </header>
  );
}

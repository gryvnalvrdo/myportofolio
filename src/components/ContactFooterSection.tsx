"use client";

import { useState } from "react";
import { ArrowUp, Check, Copy, ExternalLink, Mail, Phone } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { PORTFOLIO_PROFILE } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { getSafeContactHref, getSafeExternalHref } from "@/lib/security";

interface ContactFooterSectionProps {
  locale: Locale;
}

export function ContactFooterSection({ locale }: ContactFooterSectionProps) {
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  const copy = UI_COPY[locale];

  const handleCopy = async (value: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts; direct links remain active
    }
  };

  const mailHref = getSafeContactHref(`mailto:${PORTFOLIO_PROFILE.email}`);
  const telHref = getSafeContactHref(PORTFOLIO_PROFILE.phoneHref);
  const linkedInHref = getSafeExternalHref(PORTFOLIO_PROFILE.linkedinUrl);

  return (
    <footer id="kontak" className="bg-[#18181B] pt-12 pb-8 text-[#FAF9F7] sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#E2A8B4] uppercase">
            {copy.contact.kicker}
          </p>
          <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {copy.contact.heading}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
            {copy.contact.subheading}
          </p>
        </div>

        {/* Symmetric 3-Column Contact Cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {/* Email Card */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#2E2E32] bg-[#222226] p-5">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#E2A8B4] uppercase">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {copy.contact.emailLabel}
              </span>
              <p className="mt-3 break-all text-base font-semibold text-white">
                {PORTFOLIO_PROFILE.email}
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <a
                href={mailHref}
                className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-[#FAF9F7] px-4 text-xs font-semibold text-[#18181B] transition-colors hover:bg-[#E2A8B4]"
              >
                {copy.contact.sendEmail}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PORTFOLIO_PROFILE.email, "email")}
                className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full border border-[#3F3F46] px-3.5 text-xs font-medium text-[#E4E4E7] transition-colors hover:border-white hover:text-white"
              >
                {copiedField === "email" ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    {copy.contact.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    {copy.contact.copyEmail}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#2E2E32] bg-[#222226] p-5">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#E2A8B4] uppercase">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {copy.contact.linkedinLabel}
              </span>
              <p className="mt-3 text-base font-semibold text-white">
                {PORTFOLIO_PROFILE.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-[#A1A1AA]">
                linkedin.com/in/michelle-nathalie-a3aaab295
              </p>
            </div>
            <div className="mt-5">
              <a
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] w-full items-center justify-center gap-1.5 rounded-full bg-[#6B2737] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#823245] sm:w-auto"
              >
                {copy.contact.openLinkedIn}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#2E2E32] bg-[#222226] p-5">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#E2A8B4] uppercase">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {copy.contact.phoneLabel}
              </span>
              <p className="mt-3 text-base font-semibold text-white tabular-nums">
                {PORTFOLIO_PROFILE.phoneDisplay}
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <a
                href={telHref}
                className="inline-flex min-h-[40px] items-center justify-center rounded-full bg-[#FAF9F7] px-4 text-xs font-semibold text-[#18181B] tabular-nums transition-colors hover:bg-[#E2A8B4]"
              >
                {PORTFOLIO_PROFILE.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PORTFOLIO_PROFILE.phoneDisplay, "phone")}
                className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-full border border-[#3F3F46] px-3.5 text-xs font-medium text-[#E4E4E7] transition-colors hover:border-white hover:text-white"
              >
                {copiedField === "phone" ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    {copy.contact.copied}
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    {copy.contact.copyPhone}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-[#2E2E32] pt-6 text-xs text-[#A1A1AA]">
          <p>{copy.footer.copyright}</p>
          <a
            href="#profil"
            className="inline-flex items-center gap-1.5 font-medium text-[#E4E4E7] transition-colors hover:text-white"
          >
            {copy.footer.backToTop}
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

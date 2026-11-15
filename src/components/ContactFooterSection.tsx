"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Mail, Phone } from "lucide-react";
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
    <footer id="kontak" className="bg-[#171717] pt-14 pb-10 text-[#FAF8F5] sm:pt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#D8A7B1] uppercase">
            {copy.contact.kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {copy.contact.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
            {copy.contact.subheading}
          </p>
        </div>

        {/* Symmetric 3-Column Contact Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {/* Email Card */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#2E2E32] bg-[#202024] p-5">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[#D8A7B1] uppercase">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {copy.contact.emailLabel}
              </span>
              <p className="mt-3 break-all text-base font-semibold text-white">
                {PORTFOLIO_PROFILE.email}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={mailHref}
                className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#FAF8F5] px-4 text-xs font-semibold text-[#171717] transition-colors hover:bg-[#D8A7B1]"
              >
                {copy.contact.sendEmail}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PORTFOLIO_PROFILE.email, "email")}
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-[#3F3F46] px-3.5 text-xs font-medium text-[#E4E4E7] transition-colors hover:border-white hover:text-white"
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
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#2E2E32] bg-[#202024] p-5">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[#D8A7B1] uppercase">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                {copy.contact.linkedinLabel}
              </span>
              <p className="mt-3 text-base font-semibold text-white">
                Michelle Nathalie
              </p>
              <p className="mt-0.5 truncate font-mono text-xs text-[#A1A1AA]">
                /in/michelle-nathalie-a3aaab295
              </p>
            </div>
            <div className="mt-5">
              <a
                href={linkedInHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-[#6B2737] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#823245]"
              >
                {copy.contact.openLinkedIn}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#2E2E32] bg-[#202024] p-5">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-[#D8A7B1] uppercase">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {copy.contact.phoneLabel}
              </span>
              <p className="mt-3 font-mono text-base font-semibold text-white tabular-nums">
                {PORTFOLIO_PROFILE.phoneDisplay}
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={telHref}
                className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#FAF8F5] px-4 text-xs font-semibold text-[#171717] transition-colors hover:bg-[#D8A7B1]"
              >
                {PORTFOLIO_PROFILE.phoneDisplay}
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PORTFOLIO_PROFILE.phoneDisplay, "phone")}
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-[#3F3F46] px-3.5 text-xs font-medium text-[#E4E4E7] transition-colors hover:border-white hover:text-white"
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

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-[#2E2E32] pt-6 text-xs text-[#A1A1AA] sm:flex-row sm:items-center">
          <p>{copy.footer.builtFactual}</p>
          <p className="font-mono">{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

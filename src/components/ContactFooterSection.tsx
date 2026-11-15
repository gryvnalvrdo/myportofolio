"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { PORTFOLIO_PROFILE } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { getSafeContactHref, getSafeExternalHref } from "@/lib/security";

interface ContactFooterSectionProps {
  locale: Locale;
  onOpenCvModal?: () => void;
}

type CopyField = "email" | "linkedin" | "phone";

export function ContactFooterSection({ locale, onOpenCvModal }: ContactFooterSectionProps) {
  const [copiedField, setCopiedField] = useState<CopyField | null>(null);
  const copy = UI_COPY[locale];

  const handleCopy = async (value: string, field: CopyField) => {
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

  const cards: {
    id: CopyField;
    label: string;
    primaryValue: string;
    secondaryValue: string;
    copyValue: string;
    actionLabel: string;
    href: string;
    external?: boolean;
    tabular?: boolean;
    breakValue?: boolean;
    Icon: typeof Mail;
  }[] = [
    {
      id: "email",
      label: copy.contact.emailLabel,
      primaryValue: PORTFOLIO_PROFILE.email,
      secondaryValue: copy.contact.emailHint,
      copyValue: PORTFOLIO_PROFILE.email,
      actionLabel: copy.contact.sendEmail,
      href: mailHref,
      breakValue: true,
      Icon: Mail,
    },
    {
      id: "linkedin",
      label: copy.contact.linkedinLabel,
      primaryValue: PORTFOLIO_PROFILE.name,
      secondaryValue: "linkedin.com/in/michelle-nathalie-a3aaab295",
      copyValue: PORTFOLIO_PROFILE.linkedinUrl,
      actionLabel: copy.contact.openLinkedIn,
      href: linkedInHref,
      external: true,
      Icon: ExternalLink,
    },
    {
      id: "phone",
      label: copy.contact.phoneLabel,
      primaryValue: PORTFOLIO_PROFILE.phoneDisplay,
      secondaryValue: copy.contact.phoneHint,
      copyValue: PORTFOLIO_PROFILE.phoneDisplay,
      actionLabel: copy.contact.callPhone,
      href: telHref,
      tabular: true,
      Icon: Phone,
    },
  ];

  return (
    <footer
      id="kontak"
      className="border-t border-[#2A2A2F] bg-[#161619] pt-14 pb-10 text-[#FAF9F7] sm:pt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Balanced Header Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-wider text-[#E598A8] uppercase">
              {copy.contact.kicker}
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {copy.contact.heading}
            </h2>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[#C4C4CC] sm:text-base">
              {copy.contact.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
            <span className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-[#2E2E34] bg-[#1F1F24] px-3.5 text-xs font-medium text-[#D4D4D8]">
              <MapPin className="h-3.5 w-3.5 text-[#E598A8]" aria-hidden="true" />
              {PORTFOLIO_PROFILE.location}
            </span>
            {onOpenCvModal && (
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#6B2737] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#823245] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E598A8]"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {copy.nav.viewCv}
              </button>
            )}
          </div>
        </div>

        {/* Symmetric 3-Column Contact Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {cards.map((card) => {
            const IconComponent = card.Icon;
            const isCopied = copiedField === card.id;

            return (
              <div
                key={card.id}
                className="group flex h-full flex-col justify-between rounded-2xl border border-[#2A2A30] bg-[#1E1E23] p-5 transition-colors duration-200 hover:border-[#6B2737]/70"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-wider text-[#E598A8] uppercase">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#6B2737]/45 bg-[#6B2737]/20 text-[#E598A8]">
                        <IconComponent className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {card.label}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleCopy(card.copyValue, card.id)}
                      className="inline-flex min-h-[30px] items-center gap-1 rounded-full border border-[#32323A] bg-[#25252B] px-2.5 text-[11px] font-medium text-[#D4D4D8] transition-colors hover:border-[#E598A8]/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E598A8]"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                          {copy.contact.copied}
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" aria-hidden="true" />
                          {copy.contact.copyAction}
                        </>
                      )}
                    </button>
                  </div>

                  <p
                    className={`mt-5 text-base font-semibold text-white ${
                      card.breakValue ? "break-all" : ""
                    } ${card.tabular ? "tabular-nums" : ""}`}
                  >
                    {card.primaryValue}
                  </p>
                  <p className="mt-1 truncate text-xs text-[#A1A1AA]">{card.secondaryValue}</p>
                </div>

                <div className="mt-6">
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="inline-flex min-h-[42px] w-full items-center justify-between rounded-xl border border-[#32323A] bg-[#26262C] px-4 text-xs font-semibold text-white transition-colors duration-200 hover:border-[#6B2737] hover:bg-[#6B2737] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E598A8]"
                  >
                    <span>{card.actionLabel}</span>
                    {card.external ? (
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Factual Bottom Bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-[#26262C] pt-6 text-xs text-[#A1A1AA] sm:flex-row sm:items-center">
          <p className="font-medium text-[#D4D4D8]">{copy.footer.copyright}</p>
          <p>{copy.footer.credentialLine}</p>
        </div>
      </div>
    </footer>
  );
}

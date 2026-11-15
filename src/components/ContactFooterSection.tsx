"use client";

import { useState, type ComponentType } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { PORTFOLIO_PROFILE } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";
import { getSafeContactHref, getSafeExternalHref } from "@/lib/security";
import { LinkedInIcon } from "./LinkedInIcon";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface ContactFooterSectionProps {
  locale: Locale;
}

type CopyField = "email" | "whatsapp";

export function ContactFooterSection({ locale }: ContactFooterSectionProps) {
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
  const linkedInHref = getSafeExternalHref(PORTFOLIO_PROFILE.linkedinUrl);
  const whatsappHref = getSafeExternalHref("https://wa.me/6282291956529");

  const items: {
    id: "email" | "linkedin" | "whatsapp";
    label: string;
    value: string;
    href: string;
    external?: boolean;
    copyField?: CopyField;
    tabular?: boolean;
    iconContainerClass: string;
    hoverTextClass: string;
    Icon: ComponentType<{ className?: string }>;
  }[] = [
    {
      id: "email",
      label: copy.contact.emailLabel,
      value: PORTFOLIO_PROFILE.email,
      href: mailHref,
      copyField: "email",
      iconContainerClass: "bg-[#6B2737]/25 text-[#E598A8]",
      hoverTextClass: "group-hover:text-[#E598A8]",
      Icon: Mail,
    },
    {
      id: "linkedin",
      label: copy.contact.linkedinLabel,
      value: PORTFOLIO_PROFILE.name,
      href: linkedInHref,
      external: true,
      iconContainerClass: "bg-[#0A66C2]/18 text-[#60A5FA]",
      hoverTextClass: "group-hover:text-[#60A5FA]",
      Icon: LinkedInIcon,
    },
    {
      id: "whatsapp",
      label: copy.contact.whatsappLabel,
      value: PORTFOLIO_PROFILE.phoneDisplay,
      href: whatsappHref,
      external: true,
      copyField: "whatsapp",
      tabular: true,
      iconContainerClass: "bg-[#25D366]/18 text-[#4ADE80]",
      hoverTextClass: "group-hover:text-[#4ADE80]",
      Icon: WhatsAppIcon,
    },
  ];

  return (
    <footer
      id="kontak"
      className="border-t border-[#2A2A2F] bg-[#161619] py-8 text-[#FAF9F7] sm:py-10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-[11px] font-semibold tracking-wider text-[#E598A8] uppercase">
            {copy.contact.kicker}
          </p>
          <h2 className="font-display mt-1 text-lg font-bold tracking-tight text-white sm:text-xl">
            {copy.contact.heading}
          </h2>
        </div>

        {/* Compact 3-Channel Logo + Info Strip */}
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
          {items.map((item) => {
            const IconComponent = item.Icon;
            const isCopied = item.copyField ? copiedField === item.copyField : false;

            return (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2.5 rounded-xl border border-[#2A2A30] bg-[#1E1E23] px-3.5 py-2.5 transition-colors hover:border-[#4A4A55]"
              >
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex min-w-0 flex-1 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E598A8] rounded-lg"
                >
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconContainerClass}`}
                  >
                    <IconComponent className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-[#A1A1AA]">{item.label}</p>
                    <p
                      className={`truncate text-sm font-semibold text-white transition-colors ${
                        item.hoverTextClass
                      } ${item.tabular ? "tabular-nums" : ""}`}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>

                {item.copyField ? (
                  <button
                    type="button"
                    onClick={() => handleCopy(item.value, item.copyField!)}
                    aria-label={`${copy.contact.copyAction} ${item.label}`}
                    title={isCopied ? copy.contact.copied : copy.contact.copyAction}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#A1A1AA] transition-colors hover:bg-[#2A2A32] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E598A8]"
                  >
                    {isCopied ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#A1A1AA] transition-colors hover:bg-[#2A2A32] hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-1 border-t border-[#26262C] pt-4 text-xs text-[#A1A1AA] sm:flex-row sm:items-center">
          <p className="font-medium text-[#D4D4D8]">{copy.footer.copyright}</p>
          <p>{copy.footer.credentialLine}</p>
        </div>
      </div>
    </footer>
  );
}

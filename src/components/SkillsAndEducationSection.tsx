"use client";

import { GraduationCap, Globe, Sparkles, Wrench } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { PORTFOLIO_PROFILE, SKILL_GROUPS } from "@/data/portfolio";
import { UI_COPY } from "@/data/i18n";

interface SkillsAndEducationSectionProps {
  locale: Locale;
  activeSkill: string | null;
  onSelectSkill: (skillKey: string | null) => void;
}

export function SkillsAndEducationSection({
  locale,
  activeSkill,
  onSelectSkill,
}: SkillsAndEducationSectionProps) {
  const copy = UI_COPY[locale];

  const handleSkillClick = (skillKey: string, hasRelated: boolean) => {
    if (!hasRelated) return;
    const nextSkill = activeSkill === skillKey ? null : skillKey;
    onSelectSkill(nextSkill);
    if (nextSkill) {
      const target = document.getElementById("pengalaman");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="kompetensi" className="border-b border-[#E4E2DC] bg-[#FAF9F7] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
            {copy.skillsSection.kicker}
          </p>
          <h2 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-[#18181B] sm:text-3xl">
            {copy.skillsSection.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#52525B] sm:text-base">
            {copy.skillsSection.subheading}
          </p>
        </div>

        {/* Symmetric 2x2 Grid on Tablet/Desktop, 1x4 Stack on Mobile */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
          {/* Card 1: Education */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-white p-5 sm:p-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  {copy.skillsSection.educationCardTitle}
                </span>
                <span className="text-xs font-medium text-[#52525B] tabular-nums">
                  {PORTFOLIO_PROFILE.education.period}
                </span>
              </div>

              <h3 className="font-display mt-4 text-xl font-bold text-[#18181B] sm:text-2xl">
                {PORTFOLIO_PROFILE.education.university}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#3F3F46]">
                {PORTFOLIO_PROFILE.education.degree[locale]} · {PORTFOLIO_PROFILE.education.city}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-[#E4E2DC] bg-[#FAF9F7] px-4 py-3">
              <span className="text-xs font-medium text-[#52525B]">
                {PORTFOLIO_PROFILE.education.status[locale]}
              </span>
              <span className="text-sm font-bold text-[#18181B] tabular-nums">
                {copy.hero.gpaLabel} {PORTFOLIO_PROFILE.education.gpa}
              </span>
            </div>
          </div>

          {/* Cards 2–4: Hard Skills, Soft Skills, Languages */}
          {SKILL_GROUPS.map((group) => {
            const Icon =
              group.id === "hard" ? Wrench : group.id === "soft" ? Sparkles : Globe;

            return (
              <div
                key={group.id}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#E4E2DC] bg-white p-5 sm:p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {group.title[locale]}
                    </span>
                    {group.id !== "languages" && (
                      <span className="text-[11px] font-medium text-[#71717A]">
                        {copy.skillsSection.skillHint}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => {
                      const isInteractive = skill.relatedExperienceIds.length > 0;
                      const isSelected = activeSkill === skill.key;

                      if (!isInteractive) {
                        return (
                          <span
                            key={skill.key}
                            className="inline-flex min-h-[36px] items-center rounded-full border border-[#E4E2DC] bg-[#FAF9F7] px-3.5 py-1.5 text-xs font-medium text-[#18181B]"
                          >
                            {skill.label[locale]}
                          </span>
                        );
                      }

                      return (
                        <button
                          key={skill.key}
                          type="button"
                          onClick={() => handleSkillClick(skill.key, isInteractive)}
                          aria-pressed={isSelected}
                          className={`inline-flex min-h-[36px] items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B2737] ${
                            isSelected
                              ? "border-[#6B2737] bg-[#6B2737] text-white"
                              : "border-[#DCDAD3] bg-[#FAF9F7] text-[#18181B] hover:border-[#6B2737] hover:bg-[#F7EFF1]"
                          }`}
                        >
                          <span>{skill.label[locale]}</span>
                          <span
                            className={`text-[11px] tabular-nums ${
                              isSelected ? "text-white/80" : "text-[#71717A]"
                            }`}
                          >
                            ({skill.relatedExperienceIds.length})
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

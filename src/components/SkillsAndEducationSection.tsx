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
    <section id="kompetensi" className="border-b border-[#E5E0D6] bg-[#FAF8F5] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#6B2737] uppercase">
            {copy.skillsSection.kicker}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[#171717] sm:text-4xl">
            {copy.skillsSection.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52525B] sm:text-base">
            {copy.skillsSection.subheading}
          </p>
        </div>

        {/* Symmetric Grid: Education Card + 3 Skill Cards (2x2 on lg, 1x4 on mobile) */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {/* Card 1: Education */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-[#DCD6CA] bg-white p-5 sm:p-6">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  {copy.skillsSection.educationCardTitle}
                </span>
                <span className="font-mono text-xs text-[#52525B] tabular-nums">
                  {PORTFOLIO_PROFILE.education.period}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-2xl font-medium text-[#171717]">
                {PORTFOLIO_PROFILE.education.university}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#3F3F46]">
                {PORTFOLIO_PROFILE.education.degree[locale]} · {PORTFOLIO_PROFILE.education.city}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl border border-[#E5E0D6] bg-[#FAF8F5] px-4 py-3">
              <span className="text-xs font-medium text-[#52525B]">
                {PORTFOLIO_PROFILE.education.status[locale]}
              </span>
              <span className="font-mono text-sm font-semibold text-[#171717] tabular-nums">
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
                className="flex h-full flex-col justify-between rounded-2xl border border-[#DCD6CA] bg-white p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#6B2737] uppercase">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {group.title[locale]}
                    </span>
                    {group.id !== "languages" && (
                      <span className="text-[11px] text-[#71717A]">
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
                            className="inline-flex min-h-[36px] items-center rounded-full border border-[#E5E0D6] bg-[#FAF8F5] px-3.5 py-1.5 text-xs font-medium text-[#171717]"
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
                              ? "border-[#6B2737] bg-[#6B2737] text-[#FAF8F5]"
                              : "border-[#DCD6CA] bg-[#FAF8F5] text-[#171717] hover:border-[#6B2737] hover:bg-[#F7EFF1]"
                          }`}
                        >
                          <span>{skill.label[locale]}</span>
                          <span
                            className={`font-mono text-[10px] tabular-nums ${
                              isSelected ? "text-[#FAF8F5]/80" : "text-[#71717A]"
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

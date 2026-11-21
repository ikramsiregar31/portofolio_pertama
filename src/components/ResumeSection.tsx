import React, { useState } from 'react';
import { BookOpen, Briefcase, Laptop, TrendingUp } from 'lucide-react';
import {
  CORE_SKILLS,
  EDUCATION_ITEMS,
  FOCUS_AREAS,
  INTERESTS,
  LANGUAGES,
  PATHWAY_ITEMS,
  PERSONAL_ATTRIBUTES,
  type InterestItem,
} from '../data/portfolio';

const renderInterestIcon = (icon: InterestItem['icon']) => {
  switch (icon) {
    case 'book':
      return <BookOpen className="w-4 h-4" aria-hidden="true" />;
    case 'briefcase':
      return <Briefcase className="w-4 h-4" aria-hidden="true" />;
    case 'laptop':
      return <Laptop className="w-4 h-4" aria-hidden="true" />;
    case 'chart':
      return <TrendingUp className="w-4 h-4" aria-hidden="true" />;
  }
};

export const ResumeSection: React.FC = () => {
  const [selectedInterestId, setSelectedInterestId] = useState<string | null>(null);

  const selectedInterest = INTERESTS.find((item) => item.id === selectedInterestId) ?? null;

  return (
    <section id="resume" className="py-28 border-b border-[#272B30] bg-[#111315]/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-heading font-semibold text-[#2D8CFF] mb-2">
            Qualifications &amp; Background
          </p>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase text-balance">
            RESUME &amp; COMPETENCIES
          </h2>
        </div>

        {/* 3-Column Structured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
          {/* COLUMN 1: SKILLS & ABILITIES */}
          <div className="space-y-12">
            <div>
              <div className="inline-block relative mb-6">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  LEARNING &amp; CORE SKILLS
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>

              <div className="space-y-6">
                {CORE_SKILLS.map((skill) => (
                  <div key={skill.code} className="space-y-2">
                    <div className="flex items-center justify-between text-xs gap-2">
                      <div className="flex items-center space-x-2.5 min-w-0">
                        <span className="w-6 h-6 rounded bg-[#181B1E] border border-[#272B30] text-[10px] font-mono text-[#2D8CFF] font-bold flex items-center justify-center shrink-0">
                          {skill.code}
                        </span>
                        <span className="text-slate-200 font-medium truncate">{skill.name}</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[11px] tabular-nums shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="progress-track rounded-full"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={skill.name}
                    >
                      <div className="progress-fill" style={{ width: `${skill.level}%` }} />
                      <div className="progress-dot" style={{ left: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="inline-block relative mb-6">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  LANGUAGES
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>

              <div className="space-y-5">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-xs gap-2">
                      <span className="text-slate-200">{lang.name}</span>
                      <span className="text-slate-400 font-mono text-[11px] tabular-nums shrink-0">
                        {lang.level}%
                      </span>
                    </div>
                    <div
                      className="progress-track rounded-full"
                      role="progressbar"
                      aria-valuenow={lang.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={lang.name}
                    >
                      <div className="progress-fill" style={{ width: `${lang.level}%` }} />
                      <div className="progress-dot" style={{ left: `${lang.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Attributes */}
            <div>
              <div className="inline-block relative mb-4">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  PERSONAL ATTRIBUTES
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {PERSONAL_ATTRIBUTES}
              </p>
            </div>
          </div>

          {/* COLUMN 2: EXPERIENCE & EDUCATION TIMELINE */}
          <div className="space-y-12">
            <div>
              <div className="inline-block relative mb-8">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  EXPERIENCE &amp; PATHWAY
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>

              <div className="relative pl-8 border-l border-[#272B30] space-y-9">
                {PATHWAY_ITEMS.map((item) => (
                  <div key={item.title} className="relative">
                    <div
                      className={`absolute -left-[49px] top-0 w-8 h-8 rounded-full flex items-center justify-center text-[9px] font-bold font-mono uppercase ${
                        item.active
                          ? 'bg-[#2D8CFF]/20 border border-[#2D8CFF] text-[#2D8CFF] shadow-[0_0_12px_rgba(45,140,255,0.25)]'
                          : 'bg-[#181B1E] border border-slate-600 text-slate-300'
                      }`}
                    >
                      {item.badge}
                    </div>
                    <div>
                      <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                        {item.title}
                      </h4>
                      <p
                        className={`text-[11px] mt-0.5 ${
                          item.active ? 'text-[#2D8CFF]' : 'text-slate-400'
                        }`}
                      >
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Block */}
            <div>
              <div className="inline-block relative mb-6">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  EDUCATION
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>

              <div className="space-y-5">
                {EDUCATION_ITEMS.map((edu) => (
                  <div
                    key={edu.institution}
                    className="p-4 rounded-xl bg-[#181B1E]/60 border border-[#272B30]"
                  >
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="text-xs font-heading font-bold text-white uppercase tracking-wide">
                        {edu.institution}
                      </h4>
                      <span
                        className={`text-[11px] font-mono tabular-nums shrink-0 ${
                          edu.isCurrent ? 'text-[#2D8CFF]' : 'text-slate-400'
                        }`}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">{edu.program}</p>
                    <p className="text-[11px] text-slate-500 mt-1">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 3: FOCUS, CAREER & HOBBIES */}
          <div className="space-y-12">
            <div>
              <div className="inline-block relative mb-6">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  WHAT AM I FOCUSING ON ?
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                {FOCUS_AREAS.map((area) => (
                  <li key={area} className="flex items-center space-x-2.5">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[#2D8CFF] shrink-0"
                    />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-block relative mb-6">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  CAREER OBJECTIVE
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>

              <div className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
                <p>
                  <span className="text-slate-200 font-medium">Dedikasi Pembelajaran:</span>{' '}
                  Menempuh pendidikan tinggi dengan konsistensi akademik tinggi untuk menyerap ilmu
                  teknik mutakhir.
                </p>
                <p>
                  <span className="text-slate-200 font-medium">Target Ikatan Kerja:</span> Memenuhi
                  seluruh prasyarat dan kualifikasi program ikatan dinas / kerja dengan integritas
                  profesional.
                </p>
              </div>
            </div>

            <div>
              <div className="inline-block relative mb-6">
                <h3 className="text-xs font-heading font-bold uppercase tracking-widest text-white">
                  HOBBIES &amp; INTERESTS
                </h3>
                <div className="h-[2px] w-8 bg-[#2D8CFF] mt-1" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {INTERESTS.map((item) => {
                  const isSelected = selectedInterestId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setSelectedInterestId(isSelected ? null : item.id)
                      }
                      aria-pressed={isSelected}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-colors duration-200 text-center group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] ${
                        isSelected
                          ? 'bg-[#181B1E] border-[#2D8CFF]/80'
                          : 'bg-[#181B1E]/50 border-[#272B30] hover:border-[#2D8CFF]/60'
                      }`}
                    >
                      <div
                        className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors duration-200 mb-2.5 ${
                          isSelected
                            ? 'border-[#2D8CFF] text-[#2D8CFF] bg-[#2D8CFF]/10'
                            : 'border-slate-700 group-hover:border-[#2D8CFF] text-slate-300 group-hover:text-[#2D8CFF]'
                        }`}
                      >
                        {renderInterestIcon(item.icon)}
                      </div>
                      <span className="text-[11px] font-heading font-semibold text-slate-300">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {selectedInterest && (
                <div className="mt-4 p-3.5 rounded-xl bg-[#181B1E]/80 border border-[#2D8CFF]/30 text-xs text-slate-300 leading-relaxed">
                  <span className="block font-heading font-semibold text-white text-[11px] uppercase tracking-wider mb-1">
                    {selectedInterest.label}
                  </span>
                  {selectedInterest.note}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

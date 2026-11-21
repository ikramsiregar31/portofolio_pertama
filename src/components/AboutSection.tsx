import React, { useState } from 'react';
import { Check, Copy, Expand, Zap } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface AboutSectionProps {
  onOpenPortrait: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPortrait }) => {
  const [copied, setCopied] = useState(false);
  const [portraitError, setPortraitError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="about" className="relative py-28 border-b border-[#272B30] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div>
              <div className="inline-block relative">
                <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white uppercase pb-1">
                  ABOUT
                </h2>
                <div className="h-1 w-12 bg-[#2D8CFF] rounded-full mt-1" />
              </div>

              <div className="mt-3 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white font-mono text-xs sm:text-sm tracking-wide transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm"
                  title="Salin alamat email"
                >
                  <span>{PROFILE.email}</span>
                  {copied ? (
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#2D8CFF]">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Disalin</span>
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Personal Editorial Bio */}
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Hai, saya{' '}
                <span className="text-white font-medium">{PROFILE.fullName}</span>. Mahasiswa baru
                program studi <span className="text-white font-medium">{PROFILE.programStudy}</span>{' '}
                di <span className="text-white font-medium">{PROFILE.university}</span> yang
                memiliki tekad tinggi untuk terus belajar, beradaptasi, dan berkembang guna
                menggapai cita-cita di dunia teknologi dan rekayasa modern.
              </p>
              <p className="text-slate-400">
                Saat ini saya berfokus pada pengembangan Artificial Intelligence (AI), pengkodean
                menggunakan <span className="text-slate-200 font-medium">Python</span> dan{' '}
                <span className="text-slate-200 font-medium">C++</span>, melatih daya nalar
                algoritmik, serta mempersiapkan diri secara disiplin untuk meraih peluang berharga
                dalam program ikatan kerja.
              </p>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 gap-6 py-4 border-y border-[#272B30]/70">
              {PROFILE.highlights.map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="block text-white font-heading font-bold text-lg tabular-nums">
                    {item.value}
                  </span>
                  <span className="text-xs text-[#94A3B8] uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Location Meta */}
            <div className="pt-2">
              <div className="flex items-center space-x-3 text-xs tracking-wider uppercase font-heading text-slate-400">
                <span className="w-6 h-[1px] bg-[#2D8CFF] inline-block" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </div>
            </div>
          </div>

          {/* Right Monochrome Portrait Column */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <button
              type="button"
              onClick={onOpenPortrait}
              aria-label="Perbesar profil Muhammad Ikram Mangaraja Siregar"
              className="group relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-[#111315] border border-[#272B30] hover:border-[#2D8CFF]/60 transition-colors duration-200 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF]"
            >
              {!portraitError ? (
                <img
                  src={PROFILE.portraitImageUrl}
                  alt="Muhammad Ikram Mangaraja Siregar Portrait"
                  referrerPolicy="no-referrer"
                  onError={() => setPortraitError(true)}
                  className="w-full h-full object-cover object-top grayscale contrast-105 brightness-95 portrait-mask transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1e2226] to-[#111315] p-6 text-center">
                  <span className="text-3xl font-heading font-black text-white tracking-wider">
                    MI
                  </span>
                  <span className="mt-2 text-xs text-[#94A3B8] uppercase tracking-widest">
                    {PROFILE.shortName}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Subtle inspect indicator on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#111315]/70 border border-[#272B30] flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Expand className="w-3.5 h-3.5" aria-hidden="true" />
              </div>

              {/* Floating Corner Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#181B1E]/85 backdrop-blur-md border border-[#272B30]/80 flex items-center justify-between text-xs">
                <div>
                  <p className="font-heading font-bold text-white uppercase text-[11px] tracking-wider">
                    {PROFILE.shortName}
                  </p>
                  <p className="text-[#94A3B8] text-[10px] mt-0.5">{PROFILE.badgeRole}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#2D8CFF]/20 flex items-center justify-center text-[#2D8CFF] shrink-0">
                  <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

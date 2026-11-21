import React, { useState } from 'react';
import { Mail, Maximize2, Minimize2 } from 'lucide-react';
import { PROFILE } from '../data/portfolio';
import type { SectionId } from './Navbar';

interface HeroSectionProps {
  onNavigate: (id: SectionId) => void;
  onOpenContact: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenContact,
  isFullscreen,
  onToggleFullscreen,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden border-b border-[#272B30]"
    >
      {/* Moody Workspace Backdrop */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full z-0 opacity-45 lg:opacity-75 hero-mask pointer-events-none select-none">
        {!imgError ? (
          <img
            src={PROFILE.workspaceImageUrl}
            alt="Dark ambient minimalist workspace setup with monitor and lamp"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-125"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#181B1E] via-[#111315] to-[#0c0e10]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Staggered Name Display */}
          <div className="space-y-1.5 mb-6">
            <p className="text-2xl sm:text-4xl lg:text-[44px] tracking-[0.14em] font-heading font-light text-slate-200 uppercase leading-tight">
              {PROFILE.firstName}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white uppercase leading-none text-balance">
              {PROFILE.lastNameLine1}
              <br />
              <span className="text-white drop-shadow-sm">{PROFILE.lastNameLine2}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm tracking-[0.25em] font-heading font-medium text-[#94A3B8] uppercase mb-10 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-[#2D8CFF] inline-block shrink-0"
            />
            <span>{PROFILE.role}</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('resume');
              }}
              className="px-8 py-3 rounded-full border border-slate-400/80 text-xs font-heading font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-[#111315] transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF]"
            >
              Resume
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className="px-8 py-3 rounded-full border border-slate-700 bg-[#181B1E]/50 text-xs font-heading font-semibold uppercase tracking-widest text-slate-300 hover:border-slate-400 hover:text-white transition-all duration-200 backdrop-blur-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF]"
            >
              About Me
            </a>
          </div>

          {/* Bottom Meta Bar */}
          <div className="pt-8 border-t border-[#272B30]/70 flex items-center justify-between text-[#94A3B8] max-w-lg">
            <div className="flex items-center space-x-6 text-sm">
              <button
                type="button"
                onClick={onOpenContact}
                aria-label="Email"
                title="Email"
                className="hover:text-[#2D8CFF] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm p-0.5"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                aria-label="LinkedIn"
                title="LinkedIn"
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2D8CFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm p-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                aria-label="GitHub"
                title="GitHub"
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2D8CFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm p-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.11.79-.25.79-.55v-2.16c-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18a10.95 10.95 0 0 1 5.76 0c2.19-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

              <a
                aria-label="Instagram"
                title="Instagram"
                href={PROFILE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2D8CFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm p-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>

              <a
                aria-label="WhatsApp"
                title="WhatsApp"
                href={PROFILE.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2D8CFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm p-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m5.81 14.08c-.24.68-1.42 1.31-1.97 1.39-.51.07-1.15.1-1.85-.12-.43-.14-.98-.32-1.69-.63-2.97-1.28-4.91-4.27-5.06-4.47-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.59.84 2.04.91 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.3.77 1.27 1.65 2.06 1.13 1.01 2.09 1.32 2.39 1.47.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.49.22.57.34.07.12.07.72-.17 1.4z" />
                </svg>
              </a>
            </div>

            <button
              type="button"
              onClick={onToggleFullscreen}
              className="text-xs flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm px-1.5 py-1"
              title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            >
              <span className="tracking-widest uppercase font-heading text-[10px] whitespace-nowrap">
                PLN Tech Student
              </span>
              {isFullscreen ? (
                <Minimize2 className="w-3.5 h-3.5 text-[#2D8CFF]" aria-hidden="true" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

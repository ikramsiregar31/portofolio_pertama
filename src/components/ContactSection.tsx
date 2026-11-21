import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface ContactSectionProps {
  onOpenContact: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#181B1E]/30">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <p className="text-xs uppercase tracking-[0.3em] font-heading font-semibold text-[#2D8CFF]">
          Get in Touch
        </p>
        <h2 className="text-4xl sm:text-5xl font-heading font-black tracking-tight text-white uppercase text-balance">
          LET&apos;S CONNECT
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Terbuka untuk kolaborasi akademik, diskusi teknologi, bimbingan studi, maupun peluang
          dalam program ikatan kerja industri energi &amp; ketenagalistrikan.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="px-8 py-3.5 rounded-full bg-[#2D8CFF] text-white text-xs font-heading font-semibold uppercase tracking-widest hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-[#2D8CFF]/20 inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Email Me</span>
          </button>

          <a
            href={PROFILE.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full border border-[#272B30] bg-[#181B1E] text-slate-300 text-xs font-heading font-semibold uppercase tracking-widest hover:text-white hover:border-slate-500 transition-all duration-200 inline-flex items-center gap-2 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Footer Micro Bar */}
      <footer className="mt-20 pt-8 border-t border-[#272B30]/60 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
        <div>
          © 2026 <span className="text-slate-300 font-medium">{PROFILE.fullName}</span>. All rights
          reserved.
        </div>
        <div className="flex items-center space-x-2 text-[11px] font-mono">
          <span>{PROFILE.footerLocation}</span>
          <span>—</span>
          <span className="text-[#2D8CFF]">{PROFILE.university}</span>
        </div>
      </footer>
    </section>
  );
};

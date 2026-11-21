import React from 'react';
import { Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

export type SectionId = 'home' | 'about' | 'resume' | 'contact';

interface NavbarProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
  onOpenContact: () => void;
}

const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContact,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#111315]/85 border-b border-[#272B30]/60 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between gap-4 sm:gap-8">
        <nav
          aria-label="Primary navigation"
          className="flex items-center space-x-5 sm:space-x-8 text-xs font-semibold tracking-widest uppercase font-heading"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF] rounded-sm ${
                  isActive
                    ? 'text-white'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#2D8CFF] rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onOpenContact}
          className="hidden sm:inline-flex items-center space-x-2 text-xs font-heading font-medium tracking-wider text-[#94A3B8] hover:text-white border border-[#272B30] hover:border-[#2D8CFF]/60 px-3.5 py-2 rounded-full bg-[#181B1E]/70 backdrop-blur-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF]"
          aria-label={`Contact ${PROFILE.email}`}
        >
          <Mail className="w-3.5 h-3.5 text-[#2D8CFF]" aria-hidden="true" />
          <span>{PROFILE.email}</span>
        </button>
      </div>
    </header>
  );
};

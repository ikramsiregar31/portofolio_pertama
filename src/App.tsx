/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactModal } from './components/ContactModal';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { Navbar, type SectionId } from './components/Navbar';
import { PortraitModal } from './components/PortraitModal';
import { ResumeSection } from './components/ResumeSection';

const SECTION_IDS: SectionId[] = ['home', 'about', 'resume', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPortraitOpen, setIsPortraitOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNavigate = useCallback((id: SectionId) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current: SectionId = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 160) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const handleToggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen may be restricted inside sandboxed iframes; fall back silently
    }
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#E2E8F0] bg-grid-pattern">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main>
        <HeroSection
          onNavigate={handleNavigate}
          onOpenContact={() => setIsContactOpen(true)}
          isFullscreen={isFullscreen}
          onToggleFullscreen={handleToggleFullscreen}
        />
        <AboutSection onOpenPortrait={() => setIsPortraitOpen(true)} />
        <ResumeSection />
        <ContactSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <PortraitModal isOpen={isPortraitOpen} onClose={() => setIsPortraitOpen(false)} />
    </div>
  );
}

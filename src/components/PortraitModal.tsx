import React, { useEffect, useState } from 'react';
import { X, Zap } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface PortraitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortraitModal: React.FC<PortraitModalProps> = ({ isOpen, onClose }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portrait-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden bg-[#181B1E] border border-[#272B30] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup tampilan foto profil"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#111315]/80 border border-[#272B30] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF]"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        <div className="aspect-[3/4] w-full bg-[#111315] relative">
          {!imgError ? (
            <img
              src={PROFILE.portraitImageUrl}
              alt={PROFILE.fullName}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top grayscale contrast-105 brightness-95"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl font-heading font-black text-white">
              MI
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>

        <div className="p-5 border-t border-[#272B30] flex items-center justify-between gap-4">
          <div>
            <h3
              id="portrait-modal-title"
              className="font-heading font-bold text-white uppercase text-xs tracking-wider"
            >
              {PROFILE.fullName}
            </h3>
            <p className="text-[#94A3B8] text-xs mt-1">{PROFILE.location}</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#2D8CFF]/20 flex items-center justify-center text-[#2D8CFF] shrink-0">
            <Zap className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

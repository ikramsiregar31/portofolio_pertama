import React, { useEffect, useState } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [subject, setSubject] = useState('Diskusi Akademik / Kolaborasi');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    subject.trim() || 'Halo Ikram'
  )}&body=${encodeURIComponent(message.trim())}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-[#181B1E] border border-[#272B30] shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-heading font-semibold uppercase tracking-[0.2em] text-[#2D8CFF]">
              Direct Inquiry
            </p>
            <h3
              id="contact-modal-title"
              className="text-xl font-heading font-bold text-white uppercase mt-1"
            >
              Hubungi {PROFILE.shortName}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup dialog kontak"
            className="w-9 h-9 rounded-full border border-[#272B30] text-slate-400 hover:text-white hover:border-slate-500 flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8CFF]"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Copyable Email Strip */}
        <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#111315] border border-[#272B30]">
          <div className="flex items-center gap-2.5 min-w-0">
            <Mail className="w-4 h-4 text-[#2D8CFF] shrink-0" aria-hidden="true" />
            <span className="text-xs font-mono text-slate-200 truncate">{PROFILE.email}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#272B30] bg-[#181B1E] hover:border-[#2D8CFF]/60 text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-200 transition-colors shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#2D8CFF]" aria-hidden="true" />
                <span>Disalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Salin</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Message Composer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
          className="space-y-4"
        >
          <div className="space-y-1.5">
            <label
              htmlFor="contact-subject"
              className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-400"
            >
              Subjek
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-xl bg-[#111315] border border-[#272B30] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2D8CFF]"
              placeholder="Topik diskusi atau kolaborasi"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="block text-[11px] font-heading font-semibold uppercase tracking-wider text-slate-400"
            >
              Pesan
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl bg-[#111315] border border-[#272B30] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#2D8CFF] resize-none"
              placeholder="Tulis pesan singkat Anda di sini..."
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#272B30] text-xs font-heading font-semibold uppercase tracking-wider text-slate-300 hover:text-white hover:border-slate-500 transition-colors cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#2D8CFF] hover:bg-blue-600 text-xs font-heading font-semibold uppercase tracking-wider text-white inline-flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Buka Email</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

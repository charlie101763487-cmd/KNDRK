import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, Mail, User, Building } from 'lucide-react';
import confetti from 'canvas-confetti';
import kndrkLogo from '../assets/images/kndrk_logo_1785268005344.jpg';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledService = '' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setNotes(`Interesse an der Leistung: ${prefilledService}`);
    }
  }, [prefilledService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.5 }
        });
      } catch (e) {
        // ignore
      }
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b35] border border-cyan-500/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-left overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-slate-800"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Anfrage erhalten!</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Vielen Dank! KNDRK Design prüft Ihre Angaben und meldet sich kurzfristig bei Ihnen.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Fenster schließen
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-cyan-500/40 shadow-md shadow-cyan-500/20 bg-[#0b132b] p-0.5 flex-shrink-0">
                <img
                  src={kndrkLogo}
                  alt="KNDRK Design Logo"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">Angebot anfragen</h3>
                <p className="text-xs text-cyan-400 font-medium">KNDRK Design • Kostenlos & 100% unverbindlich</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ihr Vor- & Nachname"
                    className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">E-Mail *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@betrieb.de"
                    className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Firma / Betrieb</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Name Ihres Betriebs"
                  className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Wünsche / Projektbeschreibung</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Beschreiben Sie kurz Ihre Wünsche oder bestehende Website..."
                  className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl p-3 text-sm text-white outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Jetzt unverbindlich absenden</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-slate-500">
                KNDRK Design • Antwort innerhalb von 24h
              </p>

            </form>

          </div>
        )}

      </div>
    </div>
  );
};

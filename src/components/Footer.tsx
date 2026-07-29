import React from 'react';
import { Mail, ChevronUp, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/portfolioData';
import kndrkLogo from '../assets/images/kndrk_logo_1785268005344.jpg';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080e21] border-t border-cyan-900/40 text-slate-400 text-xs sm:text-sm pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/40 shadow-md shadow-cyan-500/20 bg-[#0b132b] p-0.5 flex-shrink-0">
                <img
                  src={kndrkLogo}
                  alt="KNDRK Design Logo"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-xl tracking-tight text-white font-display">
                    KNDRK
                  </span>
                  <span className="text-cyan-400 font-extrabold text-xl">.</span>
                  <span className="font-light text-xl text-slate-300">DESIGN</span>
                </div>
                <p className="text-[10px] text-cyan-400 font-mono tracking-wider uppercase">
                  Modern . Kreativ . Individuell
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Spezialisiert auf die individuelle Erstellung & Entwicklung moderner Unternehmenswebsites für Handwerksbetriebe und den Mittelstand (Übergabe & Einrichtung auf Ihrem Kunden-Webspace).
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-slate-950 font-bold text-xs transition-all inline-flex items-center gap-2"
              >
                <span>Jetzt Angebot anfragen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase text-white font-mono tracking-wider">Navigation</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-cyan-400 transition-colors">
                  Startseite
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('leistungen')} className="hover:text-cyan-400 transition-colors">
                  Leistungen
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('warum-uns')} className="hover:text-cyan-400 transition-colors">
                  Warum KNDRK?
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('referenzen')} className="hover:text-cyan-400 transition-colors">
                  Referenzen
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('uber-mich')} className="hover:text-cyan-400 transition-colors">
                  Über mich
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('ablauf')} className="hover:text-cyan-400 transition-colors">
                  Ablauf
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('preise')} className="hover:text-cyan-400 transition-colors">
                  Preise & Kalkulator
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase text-white font-mono tracking-wider">Kontakt</p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="truncate">{COMPANY_CONTACT.email}</span>
                </a>
              </li>

            </ul>
          </div>

          {/* Rechtliches */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase text-white font-mono tracking-wider">Rechtliches</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal('impressum')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('datenschutz')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Datenschutz
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('kontakt')} className="hover:text-cyan-400 transition-colors">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-300 font-medium">
            Copyright © {new Date().getFullYear()} KNDRK Design. Alle Rechte vorbehalten.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-[#131b35] border border-cyan-900/40 px-3.5 py-2 rounded-xl transition-all"
            aria-label="Nach oben scrollen"
          >
            <span>Nach oben</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

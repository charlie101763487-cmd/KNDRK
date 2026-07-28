import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/portfolioData';
import kndrkLogo from '../assets/images/kndrk_logo_1785268005344.jpg';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'leistungen', 'warum-uns', 'referenzen', 'ablauf', 'preise', 'kontakt'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Startseite' },
    { id: 'leistungen', label: 'Leistungen' },
    { id: 'warum-uns', label: 'Warum KNDRK?' },
    { id: 'referenzen', label: 'Referenzen' },
    { id: 'ablauf', label: 'Ablauf' },
    { id: 'preise', label: 'Preise' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b132b]/95 backdrop-blur-md shadow-lg shadow-cyan-950/20 py-3 border-b border-cyan-900/30'
          : 'bg-[#0b132b]/80 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-cyan-500/40 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform bg-[#0b132b] flex items-center justify-center p-0.5">
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
              <p className="text-[10px] text-cyan-400/90 font-mono tracking-wider uppercase -mt-1 hidden sm:block">
                Modern . Kreativ . Individuell
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1c2541]/50 p-1.5 rounded-full border border-cyan-900/30">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-800"
              title="E-Mail schreiben"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>

            <button
              onClick={onOpenQuote}
              id="nav-cta-btn"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Angebot anfragen</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="sm:hidden text-xs bg-cyan-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg"
            >
              Angebot
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 rounded-xl bg-[#1c2541] border border-cyan-900/40 text-slate-200 hover:text-white"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-slate-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0b132b] border-b border-cyan-900/40 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-slate-200 text-sm font-medium border border-slate-800"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{COMPANY_CONTACT.email}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>Jetzt Angebot anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

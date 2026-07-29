import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Smartphone, Award, Star, Eye } from 'lucide-react';
import { heroImg } from '../data/portfolioData';
import kndrkLogo from '../assets/images/kndrk_logo_1785268005344.jpg';

interface HeroProps {
  onOpenQuote: () => void;
  onViewReferences: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onViewReferences }) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0b132b]">
      {/* Background Glows & Patterns */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#06b6d4 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide">
              <img
                src={kndrkLogo}
                alt="KNDRK Logo"
                className="w-5 h-5 rounded-md object-cover border border-cyan-400/40"
                referrerPolicy="no-referrer"
              />
              <span className="font-semibold text-white">KNDRK Design</span>
              <span className="text-cyan-500">•</span>
              <span>Websites für Handwerk & KMU</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
              Professionelle Websites für Unternehmen.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
                Modern. Individuell. Bezahlbar.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              KNDRK Design erstellt und entwickelt moderne Websites für Handwerksbetriebe und Unternehmen – individuell gestaltet, mobiloptimiert und schlüsselfertig zur Übergabe für Ihren eigenen Webspace.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                id="hero-cta-quote-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 group"
              >
                <span>Angebot anfragen</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewReferences}
                id="hero-cta-references-btn"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-[#1c2541]/80 hover:bg-[#1c2541] border border-cyan-900/50 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5 text-cyan-400" />
                <span>Referenzen ansehen</span>
              </button>
            </div>

            {/* Key Advantages Quick List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-800/80">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>100% Individuell (Kein Baukasten)</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-300">
                <Smartphone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Mobiloptimiert & Pfeilschnell</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Faire Fixpreise ohne Abo-Zwang</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame & Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-70" />
              
              {/* Main Laptop/Showcase Container */}
              <div className="relative rounded-2xl bg-[#1c2541] border border-cyan-500/30 p-2 sm:p-3 shadow-2xl overflow-hidden">
                
                {/* Browser bar header */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#0b132b] rounded-t-xl border-b border-slate-800 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-4 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400/90 tracking-tight">
                    kndrk-design.de/demo-handwerk
                  </div>
                  <div className="w-4 h-4 text-slate-600" />
                </div>

                {/* Main Hero Image */}
                <div className="relative rounded-lg overflow-hidden group">
                  <img
                    src={heroImg}
                    alt="KNDRK Design Website Mockup Showcase"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Badge 1: Satisfaction rating */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#0b132b]/95 border border-cyan-500/40 p-3 sm:p-4 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white mt-0.5">100% Handwerk-Fokus</p>
                  <p className="text-[11px] text-slate-400">Mehr Anfragen garantiert</p>
                </div>
              </div>

              {/* Floating Badge 2: Fast Load Time */}
              <div className="absolute -top-5 -right-4 sm:-right-6 bg-[#0b132b]/95 border border-teal-500/40 p-3.5 rounded-2xl shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300 font-extrabold text-sm border border-teal-500/30 font-mono">
                  99+
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Google PageSpeed</p>
                  <p className="text-[11px] text-teal-400 font-medium">Ultraschnelle Ladezeit</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

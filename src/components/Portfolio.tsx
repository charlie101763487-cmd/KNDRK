import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  X, 
  Mail, 
  Star, 
  ChevronRight,
  ShieldAlert,
  Zap
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onOpenQuote: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [demoProject, setDemoProject] = useState<PortfolioItem | null>(null);
  const [demoDevice, setDemoDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [activeDemoTab, setActiveDemoTab] = useState<'home' | 'service' | 'contact'>('home');

  const categories = ['Alle', 'Dachdecker', 'Elektriker', 'GaLaBau', 'Lokales Unternehmen'];

  const filteredProjects = selectedCategory === 'Alle'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="referenzen" className="py-24 bg-[#080e21] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Jetzt durchstarten • Erstkunden-Sonderkonditionen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Seien Sie unser erster Referenzkunde!
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Wir bauen unser Portfolio aktuell auf und suchen engagierte Betriebe, die mit einer modernen Website durchstarten möchten. Sichern Sie sich als erster Referenzkunde exklusive Vorteile und bevorzugte Umsetzung!
          </p>
        </div>

        {/* First Client Spotlight Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-[#131b35] to-blue-950/60 border-2 border-cyan-500/50 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 text-xs font-bold uppercase tracking-wide">
                <Star className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300" />
                <span>Exklusive Erstkunden-Aktion</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Sichern Sie sich den 1. Referenzplatz!
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Als unser erster offizieller Referenzkunde erhalten Sie <strong className="text-cyan-300">höchste Priorität</strong> bei der Umsetzung, persönliche Direct-Lines sowie <strong className="text-cyan-300">atemberaubende Sonderkonditionen</strong> für Ihr gesamtes Website-Projekt.
              </p>
              <div className="flex flex-wrap gap-4 pt-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Bevorzugte Express-Umsetzung</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sonder-Konditionen für Erstkunden</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% maßgeschneidert</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <span>Jetzt 1. Referenzkunde werden</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Concept Notice */}
        <div className="text-center mb-6">
          <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Entdecken Sie hier unsere Design-Konzepte für verschiedene Branchen:
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-[#131b35] text-slate-300 hover:text-white hover:bg-slate-800 border border-cyan-900/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#131b35] border border-cyan-900/40 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b35] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-[#0b132b]/90 border border-cyan-500/30 text-cyan-300 font-bold text-xs px-3 py-1 rounded-full backdrop-blur-md">
                    {project.category}
                  </div>

                  {/* Quick Action Overlay */}
                  <div className="absolute bottom-4 right-4">
                    <button
                      onClick={() => {
                        setDemoProject(project);
                        setActiveDemoTab('home');
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live-Demo vorschauen</span>
                    </button>
                  </div>
                </div>

                {/* Project Text Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono mt-0.5">{project.clientName}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights & Results */}
                  <div className="pt-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Erreichte Ergebnisse:</p>
                    <div className="space-y-1.5">
                      {project.results.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech / Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.liveFeatures.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[11px] bg-slate-900/90 text-cyan-300/90 border border-cyan-900/60 px-2.5 py-0.5 rounded-md"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="px-6 sm:px-8 py-4 bg-[#0b132b]/80 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Ähnliches Projekt geplant?
                </span>
                <button
                  onClick={onOpenQuote}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/link"
                >
                  <span>Angebot für mein Projekt</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#131b35] via-[#1c2541] to-[#131b35] p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Möchten auch Sie mehr Anfragen über Ihre Website gewinnen?
            </h3>
            <p className="text-slate-300 text-sm">
              Wir gestalten eine individuelle Website für Ihren Betrieb, die Sie stolz vorzeigen können und die kontinuierlich neue Kunden bringt.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold text-sm hover:from-cyan-300 hover:to-teal-200 shadow-xl shadow-cyan-500/25 transition-all inline-flex items-center gap-2"
              >
                <span>Jetzt unverbindlich anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Live Website Simulation Modal */}
      {demoProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0b132b] border border-cyan-500/40 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden relative">
            
            {/* Modal Header Bar */}
            <div className="bg-[#131b35] px-4 py-3 border-b border-cyan-900/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="hidden sm:inline text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  https://kndrk-demo.de/{demoProject.id}
                </span>
              </div>

              {/* Device Toggle */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setDemoDevice('desktop')}
                  className={`p-1.5 rounded text-xs font-semibold flex items-center gap-1 transition-colors ${
                    demoDevice === 'desktop' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Desktop Ansicht"
                >
                  <Monitor className="w-4 h-4" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setDemoDevice('mobile')}
                  className={`p-1.5 rounded text-xs font-semibold flex items-center gap-1 transition-colors ${
                    demoDevice === 'mobile' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Smartphone Ansicht"
                >
                  <Smartphone className="w-4 h-4" />
                  <span className="hidden sm:inline">Mobil</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setDemoProject(null)}
                className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Canvas */}
            <div className="flex-1 bg-slate-950 p-4 overflow-y-auto flex justify-center items-start">
              <div
                className={`transition-all duration-300 bg-[#0b132b] border border-cyan-900/50 rounded-xl overflow-hidden shadow-2xl ${
                  demoDevice === 'mobile' ? 'w-[375px] my-4 border-2 border-slate-700' : 'w-full'
                }`}
              >
                {/* Simulated Website Navigation */}
                <div className="bg-[#1c2541] p-3 border-b border-cyan-900/40 flex items-center justify-between text-xs text-white">
                  <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    <span>{demoProject.title}</span>
                  </div>
                  <div className="flex gap-2 text-[11px]">
                    <button
                      onClick={() => setActiveDemoTab('home')}
                      className={`px-2 py-1 rounded ${activeDemoTab === 'home' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300'}`}
                    >
                      Start
                    </button>
                    <button
                      onClick={() => setActiveDemoTab('service')}
                      className={`px-2 py-1 rounded ${activeDemoTab === 'service' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300'}`}
                    >
                      Leistungen
                    </button>
                    <button
                      onClick={() => setActiveDemoTab('contact')}
                      className={`px-2 py-1 rounded ${activeDemoTab === 'contact' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-300'}`}
                    >
                      Kontakt
                    </button>
                  </div>
                </div>

                {/* Simulated Content Based on activeDemoTab */}
                <div className="p-6 space-y-6 text-left">
                  {activeDemoTab === 'home' && (
                    <>
                      {/* Hero Image in Demo */}
                      <div className="relative rounded-xl overflow-hidden h-48 sm:h-60 bg-slate-900">
                        <img
                          src={demoProject.image}
                          alt={demoProject.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 flex flex-col justify-end">
                          <span className="text-[10px] text-cyan-400 font-mono uppercase">Meisterbetrieb aus der Region</span>
                          <h4 className="text-lg sm:text-xl font-bold text-white">{demoProject.clientName}</h4>
                        </div>
                      </div>

                      {/* Call to action bar in demo */}
                      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-4 rounded-xl border border-cyan-500/30 flex items-center justify-between gap-2">
                        <div>
                          <p className="text-xs font-bold text-white">Schneller Notdienst & Terminvereinbarung</p>
                          <p className="text-[10px] text-slate-300">Schreiben Sie uns direkt per E-Mail!</p>
                        </div>
                        <a
                          href={`mailto:${COMPANY_CONTACT.email}`}
                          className="bg-cyan-400 text-slate-950 font-bold text-xs px-3 py-2 rounded-lg flex items-center gap-1"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>E-Mail schreiben</span>
                        </a>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-300">Über uns & Qualitätsversprechen:</p>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Wir bieten erstklassige Handwerksleistungen, pünktliche Ausführung und transparente Festpreise.
                        </p>
                      </div>
                    </>
                  )}

                  {activeDemoTab === 'service' && (
                    <div className="space-y-4">
                      <h4 className="text-base font-bold text-white">Unsere Fachleistungen:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {demoProject.liveFeatures.map((feat, i) => (
                          <div key={i} className="bg-[#131b35] p-3 rounded-lg border border-cyan-900/40 text-xs text-slate-200 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeDemoTab === 'contact' && (
                    <div className="space-y-3 bg-[#131b35] p-4 rounded-xl border border-cyan-900/40">
                      <h4 className="text-sm font-bold text-white">Anfrage an {demoProject.title} senden</h4>
                      <input
                        type="text"
                        placeholder="Ihr Name"
                        disabled
                        className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-400"
                      />
                      <input
                        type="email"
                        placeholder="Ihre E-Mail"
                        disabled
                        className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-1.5 text-xs text-slate-400"
                      />
                      <button
                        disabled
                        className="w-full bg-cyan-500 text-slate-950 font-bold text-xs py-2 rounded"
                      >
                        Anfrage absenden (Demo Mode)
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="bg-[#131b35] px-6 py-4 border-t border-cyan-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-300">
                Gefällt Ihnen dieser Stil? Wir erstellen Ihre eigene Website im gleichen hohen Standard!
              </div>
              <button
                onClick={() => {
                  setDemoProject(null);
                  onOpenQuote();
                }}
                className="px-6 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Eigene Website anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

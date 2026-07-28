import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  FileText,
  Clock,
  ShieldCheck,
  Send
} from 'lucide-react';

interface PricingCalculatorProps {
  onOpenQuoteWithDetails?: (details: string) => void;
  onOpenQuote: () => void;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({ onOpenQuoteWithDetails, onOpenQuote }) => {
  const [projectType, setProjectType] = useState<'kmu' | 'landing' | 'portfolio' | 'relaunch'>('kmu');
  const [pageCount, setPageCount] = useState<number>(5);
  const [hasSeo, setHasSeo] = useState<boolean>(true);
  const [hasEmergencyBtn, setHasEmergencyBtn] = useState<boolean>(true);
  const [hasRecruiting, setHasRecruiting] = useState<boolean>(false);
  const [hasExpress, setHasExpress] = useState<boolean>(false);

  // Approximate estimation logic for orientation (Starter & Einstiegs-Tarife)
  const calculateEstimate = () => {
    let base = 290; // Handwerk & Firmen (rediziert um 500 €)
    if (projectType === 'landing') base = 190; // Landingpage
    if (projectType === 'portfolio') base = 240; // Portfolio & Arbeiten
    if (projectType === 'relaunch') base = 390; // Relaunch

    const extraPages = Math.max(0, pageCount - 3) * 45;
    const seoCost = hasSeo ? 90 : 0;
    const emergencyCost = hasEmergencyBtn ? 40 : 0;
    const recruitingCost = hasRecruiting ? 75 : 0;
    const expressCost = hasExpress ? 120 : 0;

    const min = base + extraPages + seoCost + emergencyCost + recruitingCost + expressCost;
    const max = Math.round(min * 1.25);

    return { min, max };
  };

  const estimate = calculateEstimate();

  const handleSendConfig = () => {
    const summary = `Projekt-Typ: ${projectType.toUpperCase()} | Ca. ${pageCount} Seiten | SEO: ${hasSeo ? 'Ja' : 'Nein'} | Notdienst-Button: ${hasEmergencyBtn ? 'Ja' : 'Nein'} | Recruiting: ${hasRecruiting ? 'Ja' : 'Nein'} | Express: ${hasExpress ? 'Ja' : 'Nein'} | Orientierungsrahmen: ca. ${estimate.min} € - ${estimate.max} €`;
    if (onOpenQuoteWithDetails) {
      onOpenQuoteWithDetails(summary);
    } else {
      onOpenQuote();
    }
  };

  return (
    <section id="preise" className="py-24 bg-[#080e21] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Preise & Kalkulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Transparente Planung ohne Überraschungen
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Keine starren Monatspakete oder versteckte Gebühren. Wir planen Ihre Website exakt nach Ihrem Bedarf.
          </p>
        </div>

        {/* Required Notice Box */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl bg-gradient-to-r from-[#131b35] via-[#1c2541] to-[#131b35] border-2 border-cyan-500/40 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mx-auto shadow-lg shadow-cyan-950">
              <FileText className="w-8 h-8 text-cyan-300" />
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto font-display">
              Jede Website wird individuell geplant. Der Preis richtet sich nach Umfang, Funktionen und Design. Fordern Sie einfach ein unverbindliches Angebot an.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                id="pricing-notice-cta-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
              >
                <span>Jetzt Angebot anfragen</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </button>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                100% Unverbindlich
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                Antwort in unter 24 Std.
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Kostenloses Erstgespräch
              </span>
            </div>

          </div>
        </div>

        {/* Interactive Projekt-Konfigurator Tool */}
        <div className="rounded-3xl bg-[#131b35] border border-cyan-900/50 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Interaktiver Website-Konfigurator</h3>
              <p className="text-xs text-slate-400">Stellen Sie sich Ihre Wunsch-Website zusammen & erhalten Sie einen unverbindlichen Orientierungsrahmen</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Options Left */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Option 1: Projekt-Typ */}
              <div>
                <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3">
                  1. Art des Online-Auftritts:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'kmu', label: 'Handwerk & Firmen', desc: 'Komplette Homepage' },
                    { id: 'landing', label: 'Landingpage', desc: 'Spezifische Zielseite' },
                    { id: 'portfolio', label: 'Portfolio', desc: 'Galerie & Arbeiten' },
                    { id: 'relaunch', label: 'Relaunch', desc: 'Homepage Neuerstellung' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        projectType === item.id
                          ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-md'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <p className="text-xs font-bold text-white">{item.label}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Subpages */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    2. Geschätzte Anzahl der Unterseiten:
                  </label>
                  <span className="text-sm font-bold text-cyan-400 font-mono">
                    {pageCount} {pageCount === 1 ? 'Seite' : 'Seiten'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>1 (Einzelseiter)</span>
                  <span>5 (Standard)</span>
                  <span>10+ (Umfangreich)</span>
                </div>
              </div>

              {/* Option 3: Additional Features Toggle */}
              <div>
                <label className="block text-xs font-bold text-cyan-300 uppercase tracking-wider mb-3">
                  3. Gewünschte Zusatz-Funktionen:
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setHasSeo(!hasSeo)}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      hasSeo ? 'bg-cyan-500/10 border-cyan-400/80 text-white' : 'bg-slate-900/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${hasSeo ? 'text-cyan-400' : 'text-slate-600'}`} />
                    <div>
                      <p className="text-xs font-bold text-white">Google SEO-Paket</p>
                      <p className="text-[10px] text-slate-400">Regionale Keyword-Optimierung</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setHasEmergencyBtn(!hasEmergencyBtn)}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      hasEmergencyBtn ? 'bg-cyan-500/10 border-cyan-400/80 text-white' : 'bg-slate-900/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${hasEmergencyBtn ? 'text-cyan-400' : 'text-slate-600'}`} />
                    <div>
                      <p className="text-xs font-bold text-white">Direkt-Kontakt & Notdienst-Anfrage</p>
                      <p className="text-[10px] text-slate-400">Perfekt für schnelle Mobil-Anfragen</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setHasRecruiting(!hasRecruiting)}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      hasRecruiting ? 'bg-cyan-500/10 border-cyan-400/80 text-white' : 'bg-slate-900/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${hasRecruiting ? 'text-cyan-400' : 'text-slate-600'}`} />
                    <div>
                      <p className="text-xs font-bold text-white">Mitarbeiter-Bewerberformular</p>
                      <p className="text-[10px] text-slate-400">60-Sekunden Express-Bewerbung</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setHasExpress(!hasExpress)}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      hasExpress ? 'bg-cyan-500/10 border-cyan-400/80 text-white' : 'bg-slate-900/80 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 ${hasExpress ? 'text-cyan-400' : 'text-slate-600'}`} />
                    <div>
                      <p className="text-xs font-bold text-white">Express-Umsetzung (&lt; 14 Tage)</p>
                      <p className="text-[10px] text-slate-400">Priorisierte Fertigstellung</p>
                    </div>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-4 bg-[#0b132b] rounded-2xl p-6 border border-cyan-500/30 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold mb-3">
                  <span>Erstkunden & Starter-Sonderpreis (-500 €)</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Unverbindlicher Schätzwert
                </span>
                
                <p className="text-2xl font-extrabold text-white font-display">
                  ca. {estimate.min} – {estimate.max} €
                </p>
                <p className="text-[11px] text-slate-400 mt-1 mb-6">
                  *Einmalige Investition. Keine laufenden Pflicht-Abo-Kosten.
                </p>

                <div className="space-y-2 border-t border-slate-800 pt-4 mb-6">
                  <p className="text-xs font-bold text-slate-300">Konfiguration Übersicht:</p>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Typ: <span className="text-cyan-300 font-semibold">{projectType.toUpperCase()}</span></li>
                    <li>• Seiten: <span className="text-cyan-300 font-semibold">{pageCount} Unterseiten</span></li>
                    <li>• SEO-Paket: <span className="text-cyan-300 font-semibold">{hasSeo ? 'Ja' : 'Nein'}</span></li>
                    <li>• Notdienst Button: <span className="text-cyan-300 font-semibold">{hasEmergencyBtn ? 'Ja' : 'Nein'}</span></li>
                  </ul>
                </div>
              </div>

              <button
                onClick={handleSendConfig}
                className="w-full py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Angebot für diese Auswah anfragen</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

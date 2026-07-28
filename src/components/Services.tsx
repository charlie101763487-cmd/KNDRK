import React, { useState } from 'react';
import { 
  Layout, 
  Target, 
  Image, 
  RefreshCw, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-7 h-7 text-cyan-400" />;
      case 'Target':
        return <Target className="w-7 h-7 text-cyan-400" />;
      case 'Image':
        return <Image className="w-7 h-7 text-cyan-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-7 h-7 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-7 h-7 text-cyan-400" />;
      case 'Search':
        return <Search className="w-7 h-7 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-cyan-400" />;
      default:
        return <Layout className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="leistungen" className="py-24 bg-[#080e21] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Unsere Leistungen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Alles für Ihren digitalen Erfolg
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Wir unterstützen Handwerksbetriebe und Unternehmen von der ersten Idee bis zur fertigen, hochfunktionalen Website und darüber hinaus.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#131b35] border border-cyan-900/30 hover:border-cyan-500/50 p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              {/* Card top badge if feature */}
              {idx === 0 && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                  Beliebteste Wahl
                </div>
              )}

              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-[#1c2541] border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md shadow-cyan-950">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Bullet highlights */}
                <ul className="space-y-2.5 mb-8">
                  {service.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  Details lesen
                </button>

                <button
                  onClick={() => onSelectServiceForQuote(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 text-xs font-bold transition-all border border-cyan-500/30 hover:border-cyan-400 group/btn"
                >
                  <span>Anfragen</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#131b35] border border-cyan-500/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6 text-left">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-900 rounded-full border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedService.title}</h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">KNDRK Design Leistung</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-2">
              <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Inbegriffene Vorteile:</p>
              <div className="space-y-2">
                {selectedService.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0b132b] p-3.5 rounded-xl border border-cyan-900/40 text-xs text-slate-300">
              <span className="font-bold text-white block mb-0.5">Empfohlen für:</span>
              {selectedService.recommendedFor}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-xl text-slate-400 text-xs font-semibold hover:text-white"
              >
                Schließen
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(title);
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300 transition-all flex items-center gap-2"
              >
                <span>Diese Leistung anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

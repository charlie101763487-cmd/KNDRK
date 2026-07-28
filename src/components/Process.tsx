import React from 'react';
import { Sparkles, Send, PhoneCall, Wrench, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

interface ProcessProps {
  onOpenQuote: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Send':
        return <Send className="w-6 h-6 text-cyan-400" />;
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="ablauf" className="py-24 bg-[#0b132b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Transparenter Ablauf</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            In 4 einfachen Schritten zu Ihrer neuen Website
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Wir halten den Prozess für Sie so unkompliziert wie möglich. Sie kümmern sich um Ihr Handwerk – wir erledigen den Rest.
          </p>
        </div>

        {/* 4 Process Steps Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400/50 to-cyan-500/20 z-0 pointer-events-none" />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative z-10 rounded-2xl bg-[#131b35] border border-cyan-900/40 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Top Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#1c2541] border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all shadow-lg shadow-cyan-950">
                    {getIcon(step.iconName)}
                  </div>
                  <span className="text-3xl font-extrabold text-cyan-500/40 group-hover:text-cyan-400 transition-colors font-mono">
                    0{step.stepNumber}
                  </span>
                </div>

                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Schritt {step.stepNumber}
                </span>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ergebnis:</p>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs font-medium text-cyan-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Process CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 text-slate-950 font-bold text-base hover:from-cyan-300 hover:to-teal-200 shadow-xl shadow-cyan-500/25 transition-all inline-flex items-center gap-3 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Jetzt Schritt 1 starten – Anfrage senden</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

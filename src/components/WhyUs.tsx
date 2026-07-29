import React, { useState } from 'react';
import { 
  Palette, 
  Tag, 
  Sparkles, 
  Zap, 
  Smartphone, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight,
  Sliders
} from 'lucide-react';
import { WHY_US_DATA } from '../data/portfolioData';

interface WhyUsProps {
  onOpenQuote: () => void;
}

export const WhyUs: React.FC<WhyUsProps> = ({ onOpenQuote }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-cyan-400" />;
      case 'Tag':
        return <Tag className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="warum-uns" className="py-24 bg-[#0b132b] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Ihre Vorteile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Warum KNDRK Design?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Wir kombinieren modernes Webdesign mit tiefem Verständnis für die Anforderungen von Handwerksbetrieben und regionalen Unternehmen.
          </p>
        </div>

        {/* 6 Grid Advantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#131b35] border border-cyan-900/30 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group relative shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/50">
                    {item.highlightText}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-medium text-cyan-400/90">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Garantierte Qualität</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before/After Web Redesign Slider */}
        <div className="rounded-3xl bg-[#131b35] border border-cyan-900/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40">
                Vorher vs. Nachher Transformation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Vom veralteten Auftritt zur Neukunden-Maschine
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Schieben Sie den Regler, um den Unterschied zwischen einer alten, ungepflegten Homepage und einer modernen KNDRK Design Website zu erleben.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Alt: Unübersichtlich, nicht mobilfreundlich, keine Anfragen</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>KNDRK Design: PFEILSCHNELL, modern, direkte E-Mail-Funktion</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <span>Website Relaunch anfragen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Visual Slider */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0b132b] shadow-2xl select-none">
                
                {/* Visual Label Top Right (Always on NACHHER layer) */}
                <div className="absolute top-3 right-3 z-10 bg-cyan-400 text-slate-950 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md pointer-events-none">
                  KNDRK DESIGN (NEU)
                </div>

                {/* Container height */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                  
                  {/* AFTER (Modern Website Mockup) - Full background */}
                  <div className="absolute inset-0 bg-[#0b132b] flex flex-col justify-between p-6 bg-gradient-to-br from-[#0b132b] via-[#1c2541] to-[#080e21]">
                    <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-cyan-400 flex items-center justify-center font-bold text-slate-950 text-xs">
                          KD
                        </div>
                        <span className="font-extrabold text-white text-sm">Meisterbetrieb Kraft</span>
                      </div>
                      <div className="bg-cyan-400 text-slate-950 px-3 py-1 rounded-lg text-xs font-bold mr-28 sm:mr-36">
                        ✉️ E-Mail schreiben
                      </div>
                    </div>

                    <div className="my-auto space-y-2 max-w-sm">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                        Ihr Meisterbetrieb in der Region
                      </span>
                      <p className="text-lg font-bold text-white leading-tight">
                        Perfektes Handwerk & Schneller Service für Ihr Zuhause.
                      </p>
                      <div className="flex gap-2 pt-1">
                        <span className="text-[10px] bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 px-2 py-0.5 rounded">
                          ★ 4.9 Google Bewertung
                        </span>
                        <span className="text-[10px] bg-teal-500/20 border border-teal-500/40 text-teal-300 px-2 py-0.5 rounded">
                          ✓ Notdienst 24/7
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-slate-800 pt-3 text-center">
                      <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                        <p className="text-[10px] text-slate-400">Dachdecken</p>
                      </div>
                      <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                        <p className="text-[10px] text-slate-400">Sanierung</p>
                      </div>
                      <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                        <p className="text-[10px] text-slate-400">Notdienst</p>
                      </div>
                    </div>
                  </div>

                  {/* BEFORE (Old Clunky Website Mockup) - Clipped Overlay */}
                  <div
                    className="absolute inset-y-0 left-0 bg-[#e2e8f0] text-slate-900 overflow-hidden z-10 border-r-2 border-cyan-400 shadow-2xl"
                    style={{ 
                      width: `${sliderPosition}%`, 
                      display: sliderPosition === 0 ? 'none' : 'block' 
                    }}
                  >
                    <div className="w-[320px] sm:w-[540px] h-full p-6 flex flex-col justify-between relative">
                      {/* Label for ALTE WEBSITE inside clipped area */}
                      <div className="absolute top-3 left-3 bg-slate-800 text-slate-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-600 shadow pointer-events-none">
                        ALTE WEBSITE (ALT)
                      </div>

                      <div className="border-b border-slate-400 pb-2 pt-6">
                        <p className="font-serif font-bold text-red-800 text-sm">Willkommen auf der Homepage (Stand 2008)</p>
                      </div>

                      <div className="my-auto space-y-2 opacity-80">
                        <p className="text-xs font-serif text-slate-800 italic">
                          "Sehr geehrte Besucher, hier finden Sie Informationen über unsere Firma..."
                        </p>
                        <p className="text-[10px] font-mono text-slate-600 bg-slate-300 p-2 rounded">
                          Optimiert für Internet Explorer 6.0 & Auflösung 800x600.
                        </p>
                        <p className="text-[10px] text-rose-700 font-bold">
                          ⚠️ Nicht mobilfähig! Text zu klein auf Handys!
                        </p>
                      </div>

                      <div className="border-t border-slate-400 pt-2 text-[10px] text-slate-600">
                        Letzte Aktualisierung: 14.11.2012
                      </div>
                    </div>
                  </div>

                </div>

                {/* Slider Input Range Control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
                  aria-label="Vorher Nachher Regler"
                />

                {/* Vertical Divider line with handle button */}
                <div
                  className="absolute inset-y-0 z-20 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-cyan-400 text-slate-950 font-bold flex items-center justify-center shadow-xl border-2 border-white">
                    <Sliders className="w-4.5 h-4.5 text-slate-950" />
                  </div>
                </div>

              </div>
              <p className="text-center text-[11px] text-slate-400 mt-2 flex items-center justify-center gap-1">
                <Sliders className="w-3 h-3 text-cyan-400" />
                <span>Schieben Sie den Regler nach links & rechts</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

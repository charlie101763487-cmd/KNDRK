import React from 'react';
import { User, Sparkles, Music, ShieldCheck, HeartHandshake, Zap, Award } from 'lucide-react';
import kendrickPortrait from '../assets/images/kendrick_headshot_sharp_8k_1785324500709.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="uber-mich" className="py-24 bg-[#080e21] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <User className="w-4 h-4 text-cyan-400" />
            <span>Über mich</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Der Kopf hinter <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">KNDRK Design</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Persönliche Betreuung, moderne Technologie und der Ansporn, für Sie beste digitale Ergebnisse zu liefern.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Profile & Values Highlight Box */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#131b35] via-[#0b132b] to-[#080e21] p-8 rounded-3xl border border-cyan-500/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl" />
            
            <div className="space-y-6 relative z-10">
              {/* Profile Photo - Styled Avatar */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="relative group cursor-pointer">
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
                  
                  {/* Photo Container */}
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-cyan-300/80 relative bg-slate-900 shadow-2xl">
                    <img
                      src={kendrickPortrait}
                      alt="Kendrick Mitter - Gewerbeinhaber & Webdesigner"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-slate-950 px-3.5 py-1 rounded-full text-[11px] font-extrabold flex items-center gap-1.5 shadow-xl border border-cyan-100/60 z-10">
                    <Award className="w-3.5 h-3.5 text-slate-950" />
                    <span>Gewerbeinhaber</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white font-display">Kendrick Mitter</h3>
                <p className="text-cyan-400 text-xs font-mono font-medium mt-1">
                  Gewerbeinhaber & Webentwickler
                </p>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Loyal & Verlässlich</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <HeartHandshake className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Freundlich & Kundenorientiert</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Motivierter Berufseinsteiger</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <Music className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Inspiration durch Musik</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 mt-6 text-slate-400 text-[11px] font-mono">
              Inhabergeführte Qualität aus Überzeugung
            </div>
          </div>

          {/* Detailed Biography & Philosophy Text */}
          <div className="lg:col-span-8 bg-[#0b132b] p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-center space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Leidenschaft & Anspruch</span>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Mein Name ist <strong className="text-white">Kendrick Mitter</strong>. Ich bin Gewerbeinhaber von <strong className="text-cyan-300">KNDRK Design</strong> und arbeite als Webdesigner und Webentwickler aus Leidenschaft. Als engagierter Berufseinsteiger bringe ich frische Ideen, moderne Standards und eine tiefe Begeisterung für zeitgemäße Webtechnologien in jedes Projekt ein.
              </p>
              
              <p>
                Die Entscheidung, mich intensiv der Webentwicklung zu widmen, entstand aus einer klaren Motivation: Ich möchte kleinen und mittelständischen Unternehmen sowie Handwerksbetrieben dabei helfen, sich authentisch und hochprofessionell im Internet zu präsentieren. Eine durchdachte Website ist heute das Herzstück der Kundengewinnung – sie schafft Vertrauen und überzeugt Interessenten ab der ersten Sekunde.
              </p>
              
              <p>
                Bei meiner Arbeit lege ich als Inhaber größten Wert auf ein ästhetisches, modernes Design, blitzschnelle Ladezeiten und sauberen, zukunftssicheren Code. Ebenso wichtig sind mir eine verlässliche Kommunikation auf Augenhöhe, höchste Zuverlässigkeit und Lösungen, die exakt auf Ihre individuellen Unternehmensziele zugeschnitten sind. Jedes Detail gestalte ich mit Präzision und dem Anspruch, Ihnen einen messbaren Mehrwert zu bieten.
              </p>
              
              <p>
                Abseits von Code und Design finde ich beim Musik hören Inspiration und Ausgleich. Geschäftspartner und Kunden schätzen meine loyale, freundliche und stets hochmotivierte Art. Wenn Sie nach einer Zusammenarbeit suchen, die persönliche Betreuung mit modernstem Design verbindet, begleite ich Ihr Projekt mit voller Energie.
              </p>
            </div>

            {/* Quality badge list */}
            <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
              <div className="text-xs">
                <span className="font-bold text-white block">Moderne Standards</span>
                <span className="text-slate-400 text-[11px]">Sauberer Code & Ladezeit</span>
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">Inhabergeführt</span>
                <span className="text-slate-400 text-[11px]">Persönlich & Direkt</span>
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block">Kundenorientiert</span>
                <span className="text-slate-400 text-[11px]">Individueller Fokus</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

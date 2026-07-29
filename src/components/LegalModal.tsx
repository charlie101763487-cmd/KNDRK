import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/portfolioData';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#131b35] border border-cyan-500/30 rounded-2xl max-w-2xl w-full h-[80vh] flex flex-col shadow-2xl relative text-left overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1c2541] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'impressum' ? (
              <FileText className="w-5 h-5 text-cyan-400" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            )}
            <h3 className="text-lg font-bold text-white font-display">
              {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded-lg border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {type === 'impressum' ? (
            <div className="space-y-4">
              <p className="font-bold text-white text-base">Angaben gemäß § 5 TMG:</p>
              <div>
                <p className="font-bold text-white">KNDRK Design</p>
                <p className="text-cyan-400 font-semibold">Gewerbeinhaber: Kendrick Mitter</p>
                <p>Webdesign & Digitale Medien für Unternehmen</p>
                <p>Deutschland</p>
              </div>

              <div>
                <p className="font-bold text-white">Kontakt:</p>
                <p>E-Mail: {COMPANY_CONTACT.email}</p>
              </div>

              <div>
                <p className="font-bold text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
                <p>Kendrick Mitter (Gewerbeinhaber)</p>
              </div>

              <div>
                <p className="font-bold text-white">EU-Streitschlichtung:</p>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" className="text-cyan-400 underline">
                    https://ec.europa.eu/consumers/odr
                  </a>.
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="font-bold text-white text-base">Datenschutzerklärung (DSGVO)</p>
              
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
              </p>

              <div>
                <p className="font-bold text-white mb-1">1. Datenerfassung auf dieser Website</p>
                <p>
                  Die Datennutzung erfolgt zur Bearbeitung von Anfragen, die Sie über das Kontaktformular oder per E-Mail an uns richten. Es erfolgt keine unberechtigte Weitergabe an Dritte.
                </p>
              </div>

              <div>
                <p className="font-bold text-white mb-1">2. Ihre Rechte</p>
                <p>
                  Sie haben jederzeit das Recht auf kostenfreie Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                </p>
              </div>

              <div>
                <p className="font-bold text-white mb-1">3. Kontakt zum Datenschutz</p>
                <p>
                  Bei Fragen zum Datenschutz wenden Sie sich jederzeit an:{' '}
                  <span className="text-cyan-400 font-bold">{COMPANY_CONTACT.email}</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#1c2541] px-6 py-3 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs hover:bg-cyan-300"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};

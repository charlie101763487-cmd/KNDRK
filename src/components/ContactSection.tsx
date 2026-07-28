import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  User,
  Building,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_CONTACT } from '../data/portfolioData';
import { ContactFormData } from '../types';
import kndrkLogo from '../assets/images/kndrk_logo_1785268005344.jpg';

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMessage = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    companyName: '',
    industry: 'Handwerksbetrieb',
    message: initialMessage,
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize initialMessage if passed
  React.useEffect(() => {
    if (initialMessage && !formData.message) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Anfrage über Website: ${formData.name} (${formData.industry || 'Handwerk/KMU'})`;
    const body = `Hallo KNDRK Design,\n\nhier ist eine neue Kontaktanfrage über Ihre Website:\n\nName: ${formData.name}\nE-Mail: ${formData.email}\nFirma/Betrieb: ${formData.companyName || 'Nicht angegeben'}\nBranche: ${formData.industry || 'Handwerksbetrieb'}\n\nNachricht:\n${formData.message || 'Keine Nachricht eingegeben.'}\n\nViele Grüße,\n${formData.name}`;

    const mailtoUrl = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.log('Mailto error:', err);
      }

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#3b82f6', '#10b981', '#38bdf8']
        });
      } catch (err) {
        console.log('Confetti error:', err);
      }
    }, 800);
  };

  return (
    <section id="kontakt" className="py-24 bg-[#0b132b] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide">
            <img
              src={kndrkLogo}
              alt="KNDRK Logo"
              className="w-5 h-5 rounded-md object-cover border border-cyan-400/40"
              referrerPolicy="no-referrer"
            />
            <span>Jetzt unverbindlich anfragen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Kontaktieren Sie KNDRK Design
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Wir freuen uns auf Ihr Projekt! Lassen Sie uns gemeinsam besprechen, wie wir Ihre neue Website optimal umsetzen.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Perks */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="rounded-3xl bg-[#131b35] border border-cyan-900/40 p-8 space-y-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white font-display">
                Direkter Draht zu uns
              </h3>

              {/* Email Box */}
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#1c2541]/80 hover:bg-[#1c2541] border border-cyan-500/30 hover:border-cyan-400/60 transition-all group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-mono">E-Mail Adresse</p>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {COMPANY_CONTACT.email}
                  </p>
                  <p className="text-xs text-cyan-400 mt-1">Antwort meist innerhalb von 2 Stunden</p>
                </div>
              </a>
            </div>

            {/* Guarantee Box */}
            <div className="rounded-2xl bg-[#131b35]/60 border border-slate-800 p-6 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <ShieldCheck className="w-5 h-5" />
                <span>KNDRK Design Service-Garantie</span>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  Kostenfreie Erstberatung ohne Risiko
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  Keine Weitergabe Ihrer Daten (100% DSGVO-Konform)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  Transparente Festpreis-Garantie nach Absprache
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#131b35] border border-cyan-900/40 p-8 sm:p-10 shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Öffnen Sie Ihr Postfach
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Ihr E-Mail-Programm wurde automatisch mit Ihrer vorausgefüllten Anfrage an <strong className="text-cyan-400">{COMPANY_CONTACT.email}</strong> geöffnet. Bitte senden Sie die E-Mail dort ab, um Ihre Anfrage abzuschließen.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(`Anfrage: ${formData.name}`)}&body=${encodeURIComponent(`Hallo KNDRK Design,\n\nName: ${formData.name}\nE-Mail: ${formData.email}\nFirma: ${formData.companyName}\nBranche: ${formData.industry}\n\nNachricht:\n${formData.message}`)}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-slate-950" />
                      <span>E-Mail jetzt im Mailprogramm öffnen</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          companyName: '',
                          industry: 'Handwerksbetrieb',
                          message: '',
                          preferredContact: 'email'
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold hover:text-white"
                    >
                      Neue Anfrage verfassen
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300">
                        Ihr Name <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="z. B. Markus Weber"
                          className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* E-Mail */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-300">
                        E-Mail Adresse <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@betrieb.de"
                          className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Firmenname */}
                    <div className="space-y-2">
                      <label htmlFor="contact-company" className="block text-xs font-bold text-slate-300">
                        Firmenname / Betrieb
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          id="contact-company"
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="z. B. Weber Bedachungen GmbH"
                          className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Branche / Industry Selector */}
                    <div className="space-y-2">
                      <label htmlFor="contact-industry" className="block text-xs font-bold text-slate-300">
                        Branche / Fachgebiet
                      </label>
                      <select
                        id="contact-industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      >
                        <option value="Dachdecker">Dachdecker & Zimmerei</option>
                        <option value="Elektriker">Elektro- & Gebäudetechnik</option>
                        <option value="GaLaBau">Garten- & Landschaftsbau</option>
                        <option value="Sanitär">Sanitär, Heizung & Klima</option>
                        <option value="Schreiner">Schreiner & Tischler</option>
                        <option value="Maler">Maler & Lackierer</option>
                        <option value="Lokales Unternehmen">Lokales Unternehmen / KMU</option>
                        <option value="Sonstiges">Sonstige Branche</option>
                      </select>
                    </div>
                  </div>

                  {/* Nachricht */}
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-300">
                      Ihre Nachricht / Wünsche <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Schildern Sie uns kurz Ihre Wünsche (z. B. Neuerstellung, Relaunch, besondere Funktionen)..."
                      className="w-full bg-[#0b132b] border border-cyan-900/50 focus:border-cyan-400 rounded-xl p-4 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-slate-950" />
                        <span>Unverbindliches Angebot jetzt anfragen</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Mit dem Absenden stimmen Sie zu, dass wir Sie bezüglich Ihrer Anfrage kontaktieren dürfen.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

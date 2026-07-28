import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { PricingCalculator } from './components/PricingCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quotePrefilledService, setQuotePrefilledService] = useState('');
  const [contactMessagePrefill, setContactMessagePrefill] = useState('');
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuotePrefilledService(serviceTitle);
    } else {
      setQuotePrefilledService('');
    }
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithDetails = (details: string) => {
    setContactMessagePrefill(details);
    const contactEl = document.getElementById('kontakt');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewReferences = () => {
    const el = document.getElementById('referenzen');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b132b] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Sticky Top Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onViewReferences={handleViewReferences}
        />

        {/* 2. Leistungen (Services) */}
        <Services
          onSelectServiceForQuote={(title) => handleOpenQuote(title)}
        />

        {/* 3. Warum KNDRK Design? (Vorteile & Vorher/Nachher Relaunch Slider) */}
        <WhyUs
          onOpenQuote={() => handleOpenQuote('Website-Relaunch')}
        />

        {/* 4. Referenzen (Sample projects showcase with live demo simulation) */}
        <Portfolio
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 5. Ablauf (4-Schritte Prozess) */}
        <Process
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 6. Preise & Kalkulator (Required Notice + Estimator) */}
        <PricingCalculator
          onOpenQuote={() => handleOpenQuote()}
          onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
        />

        {/* 7. Kontakt Formular & Kontaktdaten */}
        <ContactSection
          initialMessage={contactMessagePrefill}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Quote Request Popup Overlay */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefilledService={quotePrefilledService}
      />

      {/* Legal Modals (Impressum & Datenschutz) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}

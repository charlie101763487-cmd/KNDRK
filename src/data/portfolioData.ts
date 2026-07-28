import { ServiceItem, PortfolioItem, WhyUsItem, ProcessStep } from '../types';

import heroImg from '../assets/images/agency_hero_banner_1785266705094.jpg';
import roofingImg from '../assets/images/roofing_project_preview_1785266717026.jpg';
import electricianImg from '../assets/images/electrician_project_preview_1785266727745.jpg';
import gardeningImg from '../assets/images/gardening_project_preview_1785266738291.jpg';
import localBizImg from '../assets/images/local_biz_project_preview_1785266752680.jpg';

export { heroImg };

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'unternehmenswebsites',
    title: 'Individuelle Unternehmenswebsites',
    shortDesc: 'Maßgeschneiderte Websites für Handwerksbetriebe und Firmen, die Vertrauen schaffen und Neukunden gewinnen.',
    fullDesc: 'Keine vorgefertigten Standard-Baukästen. Wir entwickeln ein maßgeschneidertes Webdesign, das genau zu Ihrem Handwerksbetrieb passt, Ihre Fachkompetenz widerspiegelt und Besucher zu Anfragen konvertiert.',
    iconName: 'Layout',
    highlights: [
      'Einzigartiges Design nach Ihrem Corporate Design',
      'Direkter E-Mail-Button für schnelle Mobil-Kontakte',
      'Projekt-Galerien für Ihre Referenzarbeiten',
      'SEO-optimierte Struktur für regionale Kunden'
    ],
    recommendedFor: 'Handwerker & Mittelständler, die sich professionell am Markt positionieren wollen'
  },
  {
    id: 'landingpages',
    title: 'Landingpages',
    shortDesc: 'Fokussierte Zielseiten für spezielle Angebote, Notdienste oder gezielte Mitarbeitergewinnung.',
    fullDesc: 'Eine hochkonvertierende Landingpage bringt Ihr wichtigstes Angebot oder Ihre Jobangebote auf den Punkt. Perfekt für Werbekampagnen, Notdienste oder Spezialleistungen.',
    iconName: 'Target',
    highlights: [
      'Glasklare Call-to-Actions (CTA)',
      'Optimiert für hohe Conversion-Raten',
      'Mitarbeiter-Recruiting-Formular integriert',
      'A/B-Testing fähiges Konzept'
    ],
    recommendedFor: 'Aktionen, Fachkräftegewinnung & Spezial-Angebote'
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio-Websites',
    shortDesc: 'Präsentieren Sie Ihre Arbeiten, Projekte und Vorher-Nachher-Transformationen beeindruckend visualisiert.',
    fullDesc: 'Bilder sagen mehr als 1000 Worte. Mit unseren interaktiven Portfolio-Modulen präsentieren Sie Ihre besten Dächer, Gartenlandschaften, Baddesign-Projekte oder Elektroinstallationen im besten Licht.',
    iconName: 'Image',
    highlights: [
      'Interaktive Vorher-Nachher-Bildschieber',
      'Hochauflösende Galerie-Filter nach Kategorie',
      'Kundenstimmen & Projekt-Details',
      'Barrierefreie Bilddarstellung'
    ],
    recommendedFor: 'Betriebe mit stolzen Vorzeige-Projekten'
  },
  {
    id: 'website-relaunch',
    title: 'Website-Relaunch',
    shortDesc: 'Modernisierung veralteter Homepages für ein frisches Auftreten und bessere Sichtbarkeit auf Google.',
    fullDesc: 'Ihre alte Website stammt noch aus dem letzten Jahrzehnt oder ist nicht mobilfreundlich? Wir bringen Ihr Online-Aushängeschild auf den neuesten Stand der Technik und Suchmaschinenoptimierung.',
    iconName: 'RefreshCw',
    highlights: [
      'Verlustfreier Umzug bestehender Inhalte & SEO-Rankings',
      'Vollständige Modernisierung des Layouts',
      'Sicherheits- & Ladezeiten-Upgrade',
      'DSGVO-Konformität auf neuestem Stand'
    ],
    recommendedFor: 'Unternehmen mit in die Jahre gekommener Homepage'
  },
  {
    id: 'mobile-optimierung',
    title: 'Mobile Optimierung',
    shortDesc: 'Perfekte Darstellung auf allen Smartphones und Tablets mit ultraschnellen Ladezeiten.',
    fullDesc: 'Über 70% Ihrer Kunden suchen regional auf dem Smartphone nach Handwerkern. Wir garantieren eine pfeilschnelle, flüssige Touch-Bedienung auf Apple iOS & Android Geräten.',
    iconName: 'Smartphone',
    highlights: [
      'Mobile-First Layout & Touch-optimierte Menüs',
      'Click-to-Mail Buttons für Direktkontakt',
      'Optimierte Bildgrößen für minimale Ladezeiten',
      'Perfekte Ansicht auf allen Displaygrößen'
    ],
    recommendedFor: 'Jede moderne Website'
  },
  {
    id: 'seo-grundoptimierung',
    title: 'SEO-Grundoptimierung',
    shortDesc: 'Bessere Auffindbarkeit bei Google für Suchbegriffe in Ihrer Region und Ihrer Branche.',
    fullDesc: 'Eine schöne Website nützt nichts, wenn sie niemand findet. Wir optimieren Metadaten, Google Business Anbindung, Ladezeiten und regionale Keywords wie "Dachdecker in meiner Nähe".',
    iconName: 'Search',
    highlights: [
      'Keyword-Optimierung für Ihre Dienstleistungen & Region',
      'Meta-Titles & Description Setup',
      'Google My Business Integration',
      'Schnelle Indexierung bei Google & Bing'
    ],
    recommendedFor: 'Regionale Sichtbarkeit bei Google'
  },
  {
    id: 'wartung-service',
    title: 'Wartung & Support auf Anfrage',
    shortDesc: 'Verlässliche Betreuung, Sicherheitsupdates, Inhaltspflege und technischer Ansprechpartner.',
    fullDesc: 'Legen Sie die Technik beruhigt in unsere Hände. Wir kümmern uns um regelmäßige Backups, Sicherheitsupdates und schnelle Text- oder Bildänderungen, damit Sie sich auf Ihr Handwerk konzentrieren können.',
    iconName: 'ShieldCheck',
    highlights: [
      'Regelmäßige Sicherheits- & Systemupdates',
      'Tägliche Backups Ihrer Website',
      'Inhaltsänderungen innerhalb von 24h',
      'Persönlicher Ansprechpartner per E-Mail'
    ],
    recommendedFor: 'Rundum sorglos arbeiten'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'roofing-kraft',
    title: 'Design-Konzept: Dachdecker & Zimmerei',
    category: 'Dachdecker',
    clientName: 'Mögliches Layout für Ihren Dachdeckerbetrieb',
    description: 'Moderne, vertrauenserweckende Vorschau-Website für Dachdecker und Zimmereien. Inklusive E-Mail-Kontaktformular, Online-Schaden-Melder und interaktiver Vorher-Nachher-Galerie.',
    image: roofingImg,
    results: [
      'Seien Sie der Erste in Ihrer Region mit diesem Layout',
      'Optimiert für Neukundengewinnung & Express-Anfragen',
      'Messbar schnellere Ladezeiten & Top Google-SEO'
    ],
    techStack: ['Vite', 'Tailwind CSS', 'SEO Pro', 'Mobil-First'],
    liveFeatures: ['24/7 Notdienst Anfragen', 'Schaden-Foto-Upload Formular', 'Vorher-Nachher Dacheindeckung Schieber']
  },
  {
    id: 'electrician-volt',
    title: 'Design-Konzept: Elektro & Gebäudetechnik',
    category: 'Elektriker',
    clientName: 'Mögliches Layout für Elektro-Meisterbetriebe',
    description: 'Dynamische Website-Vorschau mit Fokus auf Smart Home, Photovoltaik-Installationen und Notdienst-Anfragen. Übersichtlich und modern gestaltet.',
    image: electricianImg,
    results: [
      'Werden Sie unser Referenzkunde für die Elektrobranche',
      'Integrierte Photovoltaik-Anfrage & Terminbuchung',
      'Sonderkonditionen & bevorzugte Betreuung'
    ],
    techStack: ['React', 'Tailwind CSS', 'Interaktiver Rechner', 'SEO'],
    liveFeatures: ['PV-Kosten-Rechner', 'Express-Terminbuchung', 'Kundenstimmen Slider']
  },
  {
    id: 'gardening-naturraum',
    title: 'Design-Konzept: Garten- & Landschaftsbau',
    category: 'GaLaBau',
    clientName: 'Mögliches Layout für GaLaBau & Poolbau',
    description: 'Ästhetischer Online-Auftritt für Gartenarchitektur und Pflasterarbeiten. Bildgewaltiges Design, das Ihre zukünftigen Projekte perfekt in Szene setzt.',
    image: gardeningImg,
    results: [
      'Perfekte Bühne für Ihre schönsten Vorher-Nachher-Fotos',
      'Gezielte Anfragen für hochwertige Landschaftsprojekte',
      'Inklusive kostenloser Fotografen-Tipps für Ihre Projekte'
    ],
    techStack: ['Vite', 'Tailwind', 'Galerie-Grid', 'DSGVO Plus'],
    liveFeatures: ['Projekt-Filter-Galerie', 'Garten-Inspirations-Katalog', 'Anfrage-Formular']
  },
  {
    id: 'carpentry-holz-raum',
    title: 'Design-Konzept: Lokales Unternehmen & Handwerk',
    category: 'Lokales Unternehmen',
    clientName: 'Mögliches Layout für Tischler, Maler & KMU',
    description: 'Edler Auftritt für maßgefertigte Arbeiten, Innenausbau und lokale Dienstleister. Edles Design mit klarer Struktur und benutzerfreundlicher Menüführung.',
    image: localBizImg,
    results: [
      'Gewinnung von Premium-Kunden aus Ihrer Umgebung',
      'Zeitersparnis im Büro durch vorgefilterte Kundenanfragen',
      '100% individuelle Anpassung an Ihr Corporate Design'
    ],
    techStack: ['React', 'Tailwind CSS', 'Formular-Engine'],
    liveFeatures: ['Projekt-Konfigurator-Vorschau', 'Vor-Ort-Aufmaß Anforderung', 'Werkstatt-Einblicke']
  }
];

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: 'individual',
    title: 'Individuelle Gestaltung statt Standardvorlagen',
    description: 'Kein Baukasten-Einheitsbrei! Jede Website wird maßgeschneidert auf Ihre Marke, Farbwelt und Zielgruppe entworfen.',
    iconName: 'Palette',
    highlightText: '100% Unikat'
  },
  {
    id: 'pricing',
    title: 'Faire und transparente Preise',
    description: 'Keine versteckten Kosten oder unübersichtlichen Abo-Fallen. Klar kalkulierte Pakete mit vollem Leistungsumfang.',
    iconName: 'Tag',
    highlightText: 'Faire Fixpreise'
  },
  {
    id: 'modern',
    title: 'Modernes und professionelles Design',
    description: 'Ein zeitgemäßes Auftreten, das sofort Vertrauen erweckt und Sie klar von Mitbewerbern in Ihrer Region abhebt.',
    iconName: 'Sparkles',
    highlightText: 'Premium Optik'
  },
  {
    id: 'speed',
    title: 'Schnelle Umsetzung',
    description: 'Vom Erstgespräch bis zur fertigen Website ver vergehen oft nur wenige Wochen. Wir arbeiten effizient und verlässlich.',
    iconName: 'Zap',
    highlightText: 'In 2-3 Wochen live'
  },
  {
    id: 'responsive',
    title: 'Responsive auf allen Geräten',
    description: 'Perfekt optimiert für Smartphone, Tablet und Desktop. Blitzschnelle Ladezeiten auf allen Netzverbindungen.',
    iconName: 'Smartphone',
    highlightText: 'Mobile Optimiert'
  },
  {
    id: 'service',
    title: 'Persönlicher Service',
    description: 'Ein fester Ansprechpartner, der Ihre Sprache spricht und auch nach dem Veröffentlichen für Sie da ist.',
    iconName: 'HeartHandshake',
    highlightText: 'Direkter Ansprechpartner'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Anfrage senden',
    subtitle: 'Der erste Schritt',
    description: 'Füllen Sie unser kurzes Formular aus oder schreiben Sie uns direkt per E-Mail. Schildern Sie uns kurz Ihre Wünsche oder Ihre bestehende Website.',
    iconName: 'Send',
    deliverables: ['Unverbindliches Angebot', 'Kostenfreie Ersteinschätzung']
  },
  {
    stepNumber: 2,
    title: 'Kostenloser Austausch',
    subtitle: 'Bedarfsanalyse',
    description: 'In einem unverbindlichen Austausch per E-Mail klären wir Ihre Ziele, Designwünsche und benötigten Funktionen ab.',
    iconName: 'Send',
    deliverables: ['Klares Festpreis-Angebot', 'Projekt-Fahrplan']
  },
  {
    stepNumber: 3,
    title: 'Individuelle Gestaltung',
    subtitle: 'Umsetzung & Design',
    description: 'Wir entwerfen das Design, erstellen Texte und stellen Ihre Referenzen optimal dar. Sie erhalten eine Voransicht zum Testen.',
    iconName: 'Wrench',
    deliverables: ['Live-Vorschau Link', 'Feedback-Schleifen inklusive']
  },
  {
    stepNumber: 4,
    title: 'Fertige Website online',
    subtitle: 'Go-Live & Erfolg',
    description: 'Nach Ihrer Freigabe schalten wir Ihre neue Website live, verbinden Ihre Wunschdomain und stellen alles für Google bereit.',
    iconName: 'Rocket',
    deliverables: ['Webseite Live geschaltet', 'Google-Verbindung & Einweisung']
  }
];

export const COMPANY_CONTACT = {
  email: 'kndrk.design@justmail.de',
  name: 'KNDRK Design',
  location: 'Deutschland'
};

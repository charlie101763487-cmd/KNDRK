export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  recommendedFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Dachdecker' | 'Elektriker' | 'GaLaBau' | 'Lokales Unternehmen' | 'Sanitär & Heizung';
  clientName: string;
  description: string;
  image: string;
  results: string[];
  techStack: string[];
  liveFeatures: string[];
  demoUrl?: string;
  beforeImage?: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightText: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface CalculatorOption {
  id: string;
  name: string;
  category: 'pages' | 'features' | 'addons';
  estimatedCost: number;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  companyName?: string;
  industry?: string;
  message: string;
  preferredContact?: 'email';
  selectedPackage?: string;
}

export type ModalType = 'quote' | 'legal-impressum' | 'legal-privacy' | 'portfolio-detail' | 'calculator' | null;

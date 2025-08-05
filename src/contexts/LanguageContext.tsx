import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fi: {
    // Navbar
    'nav.home': 'Etusivu',
    'nav.services': 'Palvelut',
    'nav.about': 'Meistä',
    'nav.contact': 'Yhteystiedot',
    'nav.quote': 'Pyydä tarjous',
    
    // Hero
    'hero.title': 'Ammattimaiset telinepalvelut Helsingissä',
    'hero.subtitle': 'Turvallisia, luotettavia ja tehokkaita telinepalveluja rakennustyömaille, saneerauksiin ja huoltotöihin pääkaupunkiseudulla.',
    'hero.quote-btn': 'Pyydä tarjous',
    'hero.services-btn': 'Palvelumme',
    
    // Contact
    'contact.title': 'Pyydä ilmainen tarjous',
    'contact.subtitle': 'Kerro meille projektistasi, niin tarjoamme kattavan telinepalveluratkaisun juuri sinun tarpeisiisi.',
    'contact.info': 'Yhteystiedot',
    'contact.address': 'Osoite',
    'contact.phone': 'Puhelin',
    'contact.email': 'Sähköposti',
    'contact.hours': 'Aukioloajat',
    'contact.hours-value': 'Maanantai-Perjantai: 8:00 - 17:00',
    'contact.name': 'Nimi',
    'contact.project-type': 'Projektin tyyppi',
    'contact.project-details': 'Projektin tiedot',
    'contact.send': 'Lähetä tarjouspyyntö',
    'contact.billing': 'Laskutustiedot',
    
    // Form
    'form.select-type': 'Valitse projektin tyyppi',
    'form.construction': 'Uudisrakennus',
    'form.renovation': 'Saneeraus',
    'form.industrial': 'Teollisuus',
    'form.residential': 'Pientalo',
    'form.maintenance': 'Huoltotyö',
    'form.emergency': 'Hätätapaus',
    
    // Toast
    'toast.sent': 'Tarjouspyyntö lähetetty',
    'toast.description': 'Kiitos! Otamme sinuun yhteyttä 24 tunnin kuluessa.',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',
    
    // Hero
    'hero.title': 'Professional Scaffolding Services in Helsinki',
    'hero.subtitle': 'Safe, reliable and efficient scaffolding services for construction sites, renovations and maintenance work in the Helsinki metropolitan area.',
    'hero.quote-btn': 'Get Quote',
    'hero.services-btn': 'Our Services',
    
    // Contact
    'contact.title': 'Request Free Quote',
    'contact.subtitle': 'Tell us about your project and we will provide a comprehensive scaffolding solution tailored to your needs.',
    'contact.info': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Business Hours',
    'contact.hours-value': 'Monday-Friday: 8:00 - 17:00',
    'contact.name': 'Name',
    'contact.project-type': 'Project Type',
    'contact.project-details': 'Project Details',
    'contact.send': 'Send Quote Request',
    'contact.billing': 'Billing Information',
    
    // Form
    'form.select-type': 'Select project type',
    'form.construction': 'New Construction',
    'form.renovation': 'Renovation',
    'form.industrial': 'Industrial',
    'form.residential': 'Residential',
    'form.maintenance': 'Maintenance',
    'form.emergency': 'Emergency',
    
    // Toast
    'toast.sent': 'Quote request sent',
    'toast.description': 'Thank you! We will contact you within 24 hours.',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
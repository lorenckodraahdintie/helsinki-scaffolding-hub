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
    
    // About page
    'about.subtitle': 'Ammattimaisia telinepalveluja jo vuodesta 2010',
    'about.history.title': 'Yrityksen historia',
    'about.history.desc1': 'Multe Oy on perustettu vuonna 2010 tarjoamaan laadukkaita telinepalveluja Helsingin ja lähialueiden rakennusprojekteihin. Olemme kasvaneet pienestä perheyrityksestä luotettavaksi kumppaniksi niin yksityisille asiakkaille kuin suurille rakennusliikkeille.',
    'about.history.desc2': 'Erikoisosaamistamme ovat rakennustelineet, saneerauskohteet sekä teollisuuden vaativat telineprojektit. Turvallisuus ja laatu ovat toimintamme kulmakivet.',
    'about.values.title': 'Arvomme',
    'about.values.safety.title': 'Turvallisuus',
    'about.values.safety.description': 'Turvallisuus on meille ensisijaista. Noudatamme tiukkoja turvallisuusstandardeja ja koulutamme henkilöstömme jatkuvasti.',
    'about.values.quality.title': 'Laatu',
    'about.values.quality.description': 'Käytämme vain laadukkaita materiaaleja ja moderneja telinejärjestelmiä varmistaaksemme parhaan mahdollisen lopputuloksen.',
    'about.values.reliability.title': 'Luotettavuus',
    'about.values.reliability.description': 'Pidämme aikatauluista kiinni ja toimitamme aina lupaamamme. Asiakkaamme voivat luottaa meihin.',
    'about.values.expertise.title': 'Ammattitaito',
    'about.values.expertise.description': 'Kokenut tiimimme hallitsee kaikki telinetyön osa-alueet pienistä korjauksista suuriin teollisuusprojekteihin.',

    // Team page
    'team.title': 'Tiimimme',
    'team.subtitle': 'Kokenut ja ammattitaitoinen tiimi palveluksessanne',
    'team.ervin.position': 'Toimitusjohtaja',
    'team.ervin.description': '15 vuoden kokemus rakennusalalta. Vastaa yrityksen strategisesta suunnasta ja asiakassuhteista.',
    'team.halit.position': 'Toimitusjohtaja / Työmaapäällikkö',
    'team.halit.description': '8 vuoden kokemus telinetyöstä. Vastaa projektien toteutuksesta ja työmaan turvallisuudesta.',
    'team.alban.position': 'Telineasentaja',
    'team.alban.description': '6 vuoden kokemus telineasennuksesta. Erikoisosaaja vaativissa teollisuuskohteissa.',
    'team.klinton.position': 'Telineasentaja',
    'team.klinton.description': '4 vuoden kokemus. Vastaa pientalojen ja saneerauskohteiden telineistä.',
    'team.besim.position': 'Telineasentaja',
    'team.besim.description': '10 vuoden kokemus telinetyöstä. Kokenut ammattilainen kaikenlaisissa projekteissa.',
    'team.lorenc.position': 'Asiakaspalvelu',
    'team.lorenc.description': 'Hoitaa asiakaspalvelun ja tarjousten laatimisen. Ensimmäinen kontakti asiakkaille.',
    
    // Jobs page
    'jobs.title': 'Työpaikat',
    'jobs.subtitle': 'Tule mukaan kasvavaan tiimiimme - tarjoamme mielenkiintoisia työtehtäviä ja hyvät työehdot',
    'jobs.why.title': 'Miksi Multe Oy?',
    'jobs.competitive.title': 'Kilpailukykyinen palkka',
    'jobs.competitive.description': 'Tarjoamme alan parhaita palkkoja ja bonusjärjestelmän',
    'jobs.training.title': 'Koulutusmahdollisuudet',
    'jobs.training.description': 'Panostamme henkilöstön jatkuvaan kehittämiseen',
    'jobs.benefits.title': 'Työsuhde-edut',
    'jobs.benefits.description': 'Kattavat työsuhde-edut ja työvaatteet',
    'jobs.atmosphere.title': 'Hyvä työilmapiiri',
    'jobs.atmosphere.description': 'Kannustava ja turvallinen työympäristö',
    'jobs.openings.title': 'Avoimet työpaikat',
    'jobs.experienced.title': 'Kokenut telineasentaja',
    'jobs.experienced.description': 'Etsimme kokenutta telineasentajaa vakituiseen työsuhteeseen',
    'jobs.experienced.req1': 'Vähintään 3 vuoden kokemus telinetyöstä',
    'jobs.experienced.req2': 'Työturvallisuuskortti ja tulityökortti',
    'jobs.experienced.req3': 'Hyvä fyysinen kunto',
    'jobs.experienced.req4': 'Joustavuus ja luotettavuus',
    'jobs.beginner.title': 'Telineasentaja / aloittelija',
    'jobs.beginner.description': 'Tarjoamme mahdollisuuden oppia telinetyötä kokeneiden ammattilaisten opastuksella',
    'jobs.beginner.req1': 'Motivaatio oppia uutta',
    'jobs.beginner.req2': 'Hyvä fyysinen kunto',
    'jobs.beginner.req3': 'Työturvallisuuskortti (voidaan hankkia työn ohessa)',
    'jobs.beginner.req4': 'Korkeantöiden sietokyky',
    'jobs.apply.title': 'Hae meille töihin',
    'jobs.apply.description': 'Vaikka emme juuri nyt ilmoittaisi avointa paikkaa, otamme aina mielellään vastaan osaavien ammattilaisten hakemuksia. Lähetä vapaamuotoinen hakemus ja CV sähköpostilla osoitteeseen info@multeoy.fi',
    'jobs.apply.button': 'Hae paikkaa',
    'jobs.apply.open': 'Lähetä avoin hakemus',
    
    // Safety page
    'safety.title': 'Turvallisuusstandardit',
    'safety.subtitle': 'Turvallisuus on meille ensisijaista - noudatamme tiukkoja standardeja ja ohjeistuksia',
    'safety.principles.title': 'Turvallisuusperiaatteet',
    'safety.principles.description': 'Multe Oy sitoutuu ylläpitämään korkeimpia turvallisuusstandardeja kaikissa projekteissaan. Turvallisuus ei ole meille vain sääntöjen noudattamista, vaan se on osa työkulttuuria ja jokapäiväistä toimintaa.',
    'safety.personal.title': 'Henkilöturvallisuus',
    'safety.personal.description': 'Jokainen työntekijä on vastuussa omasta ja työtovereidensa turvallisuudesta. Kaikilla on oikeus ja velvollisuus keskeyttää vaarallinen työ.',
    'safety.training.title': 'Jatkuva koulutus',
    'safety.training.description': 'Henkilöstömme osallistuu säännöllisesti turvallisuuskoulutuksiin ja pätevyydet pidetään ajan tasalla.',
    'safety.standards.title': 'Standardit ja sertifikaatit',
    'safety.iso.title': 'ISO 9001 Laatujärjestelmä',
    'safety.iso.description': 'Sertifioitu laatujärjestelmä varmistaa palveluidemme laadun ja jatkuvan kehittämisen.',
    'safety.vtt.title': 'VTT Sertifikaatti',
    'safety.vtt.description': 'VTT:n myöntämä sertifikaatti telinepalveluille takaa korkeimman ammattitaidon.',
    'safety.workplace.title': 'Työturvallisuus',
    'safety.workplace.description': 'Noudatamme Työturvallisuuslakia ja Ratu-ohjeistuksia. Kaikilla työntekijöillä voimassa olevat turvallisuuskartit.',
    'safety.measures.title': 'Turvallisuustoimenpiteet',
    'safety.before.title': 'Ennen työtä',
    'safety.before.item1': 'Työmaan turvallisuussuunnittelu',
    'safety.before.item2': 'Riskiarviointi',
    'safety.before.item3': 'Turvallisuusperehdytys',
    'safety.before.item4': 'Varusteiden tarkastus',
    'safety.during.title': 'Työn aikana',
    'safety.during.item1': 'Jatkuva turvallisuusvalvonta',
    'safety.during.item2': 'Säännölliset tarkastukset',
    'safety.during.item3': 'Suojainten käyttö',
    'safety.during.item4': 'Turvallisten työmenetelmien noudattaminen',
    'safety.contact.title': 'Yhteystiedot turvallisuusasioissa',
    'safety.contact.manager': 'Turvallisuuspäällikkö',
    'safety.contact.phone': 'Puhelin',
    'safety.contact.email': 'Sähköposti',
    'safety.contact.note': 'Ilmoita heti kaikista turvallisuuteen liittyvistä havainnoista, läheltä piti -tilanteista ja tapaturmista.',
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
    
    // About page
    'about.subtitle': 'Professional scaffolding services since 2010',
    'about.history.title': 'Company History',
    'about.history.desc1': 'Multe Oy was founded in 2010 to provide quality scaffolding services for construction projects in Helsinki and surrounding areas. We have grown from a small family business to a trusted partner for both private customers and large construction companies.',
    'about.history.desc2': 'Our specialties include building scaffolding, renovation projects and demanding industrial scaffolding projects. Safety and quality are the cornerstones of our operations.',
    'about.values.title': 'Our Values',
    'about.values.safety.title': 'Safety',
    'about.values.safety.description': 'Safety is our top priority. We follow strict safety standards and continuously train our staff.',
    'about.values.quality.title': 'Quality',
    'about.values.quality.description': 'We use only quality materials and modern scaffolding systems to ensure the best possible result.',
    'about.values.reliability.title': 'Reliability',
    'about.values.reliability.description': 'We stick to schedules and always deliver what we promise. Our customers can rely on us.',
    'about.values.expertise.title': 'Expertise',
    'about.values.expertise.description': 'Our experienced team masters all aspects of scaffolding work from small repairs to large industrial projects.',

    // Team page
    'team.title': 'Our Team',
    'team.subtitle': 'Experienced and professional team at your service',
    'team.ervin.position': 'CEO',
    'team.ervin.description': '15 years of experience in construction. Responsible for company strategy and customer relations.',
    'team.halit.position': 'CEO / Site Manager',
    'team.halit.description': '8 years of experience in scaffolding work. Responsible for project execution and site safety.',
    'team.alban.position': 'Scaffolder',
    'team.alban.description': '6 years of experience in scaffolding installation. Specialist in demanding industrial sites.',
    'team.klinton.position': 'Scaffolder',
    'team.klinton.description': '4 years of experience. Responsible for scaffolding in residential and renovation projects.',
    'team.besim.position': 'Scaffolder',
    'team.besim.description': '10 years of experience in scaffolding work. Experienced professional in all types of projects.',
    'team.lorenc.position': 'Customer Service',
    'team.lorenc.description': 'Handles customer service and quotation preparation. First contact for customers.',
    
    // Jobs page
    'jobs.title': 'Job Opportunities',
    'jobs.subtitle': 'Join our growing team - we offer interesting work and good working conditions',
    'jobs.why.title': 'Why Multe Oy?',
    'jobs.competitive.title': 'Competitive Salary',
    'jobs.competitive.description': 'We offer the best salaries in the industry and bonus system',
    'jobs.training.title': 'Training Opportunities',
    'jobs.training.description': 'We invest in continuous staff development',
    'jobs.benefits.title': 'Employment Benefits',
    'jobs.benefits.description': 'Comprehensive employment benefits and work clothes',
    'jobs.atmosphere.title': 'Good Working Environment',
    'jobs.atmosphere.description': 'Supportive and safe working environment',
    'jobs.openings.title': 'Open Positions',
    'jobs.experienced.title': 'Experienced Scaffolder',
    'jobs.experienced.description': 'We are looking for an experienced scaffolder for permanent employment',
    'jobs.experienced.req1': 'Minimum 3 years of scaffolding experience',
    'jobs.experienced.req2': 'Safety card and hot work permit',
    'jobs.experienced.req3': 'Good physical condition',
    'jobs.experienced.req4': 'Flexibility and reliability',
    'jobs.beginner.title': 'Scaffolder / Beginner',
    'jobs.beginner.description': 'We offer the opportunity to learn scaffolding work under the guidance of experienced professionals',
    'jobs.beginner.req1': 'Motivation to learn new things',
    'jobs.beginner.req2': 'Good physical condition',
    'jobs.beginner.req3': 'Safety card (can be obtained during work)',
    'jobs.beginner.req4': 'Tolerance for working at heights',
    'jobs.apply.title': 'Apply to Work With Us',
    'jobs.apply.description': 'Even if we are not currently advertising an open position, we always welcome applications from skilled professionals. Send your application and CV by email to info@multeoy.fi',
    'jobs.apply.button': 'Apply',
    'jobs.apply.open': 'Send Open Application',
    
    // Safety page
    'safety.title': 'Safety Standards',
    'safety.subtitle': 'Safety is our priority - we follow strict standards and guidelines',
    'safety.principles.title': 'Safety Principles',
    'safety.principles.description': 'Multe Oy is committed to maintaining the highest safety standards in all its projects. Safety is not just about following rules for us, but it is part of our work culture and daily operations.',
    'safety.personal.title': 'Personal Safety',
    'safety.personal.description': 'Every employee is responsible for their own and their colleagues\' safety. Everyone has the right and obligation to stop dangerous work.',
    'safety.training.title': 'Continuous Training',
    'safety.training.description': 'Our staff regularly participates in safety training and qualifications are kept up to date.',
    'safety.standards.title': 'Standards and Certificates',
    'safety.iso.title': 'ISO 9001 Quality System',
    'safety.iso.description': 'Certified quality system ensures the quality of our services and continuous improvement.',
    'safety.vtt.title': 'VTT Certificate',
    'safety.vtt.description': 'VTT certificate for scaffolding services guarantees the highest level of expertise.',
    'safety.workplace.title': 'Workplace Safety',
    'safety.workplace.description': 'We comply with the Occupational Safety Act and Ratu guidelines. All employees have valid safety cards.',
    'safety.measures.title': 'Safety Measures',
    'safety.before.title': 'Before Work',
    'safety.before.item1': 'Site safety planning',
    'safety.before.item2': 'Risk assessment',
    'safety.before.item3': 'Safety orientation',
    'safety.before.item4': 'Equipment inspection',
    'safety.during.title': 'During Work',
    'safety.during.item1': 'Continuous safety supervision',
    'safety.during.item2': 'Regular inspections',
    'safety.during.item3': 'Use of protective equipment',
    'safety.during.item4': 'Following safe work methods',
    'safety.contact.title': 'Safety Contact Information',
    'safety.contact.manager': 'Safety Manager',
    'safety.contact.phone': 'Phone',
    'safety.contact.email': 'Email',
    'safety.contact.note': 'Report immediately all safety-related observations, near-miss situations and accidents.',
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
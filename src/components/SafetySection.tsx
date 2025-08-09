import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SafetySection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="safety" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('safety.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('safety.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{t('safety.principles.title')}</h3>
            <p className="text-lg mb-6">{t('safety.principles.description')}</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 border-l-4 border-primary bg-white rounded">
                <h4 className="text-xl font-semibold mb-3">{t('safety.personal.title')}</h4>
                <p>{t('safety.personal.description')}</p>
              </div>
              <div className="p-6 border-l-4 border-primary bg-white rounded">
                <h4 className="text-xl font-semibold mb-3">{t('safety.training.title')}</h4>
                <p>{t('safety.training.description')}</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{t('safety.standards.title')}</h3>
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-white">
                <h4 className="text-xl font-semibold mb-3">{t('safety.iso.title')}</h4>
                <p>{t('safety.iso.description')}</p>
              </div>
              
              <div className="border rounded-lg p-6 bg-white">
                <h4 className="text-xl font-semibold mb-3">{t('safety.vtt.title')}</h4>
                <p>{t('safety.vtt.description')}</p>
              </div>
              
              <div className="border rounded-lg p-6 bg-white">
                <h4 className="text-xl font-semibold mb-3">{t('safety.workplace.title')}</h4>
                <p>{t('safety.workplace.description')}</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{t('safety.measures.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg bg-white">
                <h4 className="text-lg font-semibold mb-3">{t('safety.before.title')}</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('safety.before.item1')}</li>
                  <li>{t('safety.before.item2')}</li>
                  <li>{t('safety.before.item3')}</li>
                  <li>{t('safety.before.item4')}</li>
                </ul>
              </div>
              
              <div className="p-6 border rounded-lg bg-white">
                <h4 className="text-lg font-semibold mb-3">{t('safety.during.title')}</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('safety.during.item1')}</li>
                  <li>{t('safety.during.item2')}</li>
                  <li>{t('safety.during.item3')}</li>
                  <li>{t('safety.during.item4')}</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-6">{t('safety.contact.title')}</h3>
            <div className="bg-white p-6 rounded-lg border">
              <p className="mb-2"><strong>{t('safety.contact.manager')}:</strong> Halit Hasa</p>
              <p className="mb-2"><strong>{t('safety.contact.phone')}:</strong> +358 451509570</p>
              <p className="mb-2"><strong>{t('safety.contact.email')}:</strong> info@multe.fi</p>
              <p className="text-sm text-muted-foreground mt-4">
                {t('safety.contact.note')}
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
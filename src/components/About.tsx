import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('nav.about')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{t('about.history.title')}</h3>
            <p className="text-lg mb-4">
              {t('about.history.desc1')}
            </p>
            <p className="text-lg">
              {t('about.history.desc2')}
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-6">{t('about.values.title')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('about.values.safety.title')}</h4>
                <p>{t('about.values.safety.description')}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('about.values.quality.title')}</h4>
                <p>{t('about.values.quality.description')}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('about.values.reliability.title')}</h4>
                <p>{t('about.values.reliability.description')}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('about.values.expertise.title')}</h4>
                <p>{t('about.values.expertise.description')}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
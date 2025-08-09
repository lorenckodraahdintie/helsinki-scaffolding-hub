import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('team.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Ervin Kodra</h3>
              <p className="text-muted-foreground mb-2">{t('team.ervin.position')}</p>
              <p className="text-sm">{t('team.ervin.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Halit Hasa</h3>
              <p className="text-muted-foreground mb-2">{t('team.halit.position')}</p>
              <p className="text-sm">{t('team.halit.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Alban Selaci</h3>
              <p className="text-muted-foreground mb-2">{t('team.alban.position')}</p>
              <p className="text-sm">{t('team.alban.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Klinton Koceku</h3>
              <p className="text-muted-foreground mb-2">{t('team.klinton.position')}</p>
              <p className="text-sm">{t('team.klinton.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Besim Hyseni</h3>
              <p className="text-muted-foreground mb-2">{t('team.besim.position')}</p>
              <p className="text-sm">{t('team.besim.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Lorenc Kodra</h3>
              <p className="text-muted-foreground mb-2">{t('team.lorenc.position')}</p>
              <p className="text-sm">{t('team.lorenc.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
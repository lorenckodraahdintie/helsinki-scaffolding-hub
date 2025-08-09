import React from 'react';
import { Button } from "@/components/ui/button";
import JobApplicationForm from '@/components/JobApplicationForm';
import { useLanguage } from '@/contexts/LanguageContext';

const JobsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('jobs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('jobs.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{t('jobs.why.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('jobs.competitive.title')}</h4>
                <p>{t('jobs.competitive.description')}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('jobs.training.title')}</h4>
                <p>{t('jobs.training.description')}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('jobs.benefits.title')}</h4>
                <p>{t('jobs.benefits.description')}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <h4 className="text-xl font-semibold mb-3">{t('jobs.atmosphere.title')}</h4>
                <p>{t('jobs.atmosphere.description')}</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h3 className="text-3xl font-bold mb-6">{t('jobs.openings.title')}</h3>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">{t('jobs.experienced.title')}</h4>
                <p className="text-muted-foreground mb-4">{t('jobs.experienced.description')}</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>{t('jobs.experienced.req1')}</li>
                  <li>{t('jobs.experienced.req2')}</li>
                  <li>{t('jobs.experienced.req3')}</li>
                  <li>{t('jobs.experienced.req4')}</li>
                </ul>
                <JobApplicationForm jobTitle={t('jobs.experienced.title')}>
                  <Button>{t('jobs.apply.button')}</Button>
                </JobApplicationForm>
              </div>
              
              <div className="border rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">{t('jobs.beginner.title')}</h4>
                <p className="text-muted-foreground mb-4">{t('jobs.beginner.description')}</p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>{t('jobs.beginner.req1')}</li>
                  <li>{t('jobs.beginner.req2')}</li>
                  <li>{t('jobs.beginner.req3')}</li>
                  <li>{t('jobs.beginner.req4')}</li>
                </ul>
                <JobApplicationForm jobTitle={t('jobs.beginner.title')}>
                  <Button>{t('jobs.apply.button')}</Button>
                </JobApplicationForm>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-6">{t('jobs.apply.title')}</h3>
            <p className="mb-4">
              {t('jobs.apply.description')}
            </p>
            <JobApplicationForm jobTitle="Avoin hakemus">
              <Button variant="outline">{t('jobs.apply.open')}</Button>
            </JobApplicationForm>
          </section>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
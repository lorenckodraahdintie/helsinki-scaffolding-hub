import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import JobApplicationForm from '@/components/JobApplicationForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Jobs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {t('jobs.title')}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              {t('jobs.subtitle')}
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{t('jobs.why.title')}</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{t('jobs.competitive.title')}</h3>
                    <p>{t('jobs.competitive.description')}</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{t('jobs.training.title')}</h3>
                    <p>{t('jobs.training.description')}</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{t('jobs.benefits.title')}</h3>
                    <p>{t('jobs.benefits.description')}</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{t('jobs.atmosphere.title')}</h3>
                    <p>{t('jobs.atmosphere.description')}</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{t('jobs.openings.title')}</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{t('jobs.experienced.title')}</h3>
                    <p className="text-gray-600 mb-4">{t('jobs.experienced.description')}</p>
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
                    <h3 className="text-xl font-semibold mb-2">{t('jobs.beginner.title')}</h3>
                    <p className="text-gray-600 mb-4">{t('jobs.beginner.description')}</p>
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
                <h2 className="text-3xl font-bold mb-6">{t('jobs.apply.title')}</h2>
                <p className="mb-4">
                  {t('jobs.apply.description')}
                </p>
                <JobApplicationForm jobTitle="Avoin hakemus">
                  <Button variant="outline">{t('jobs.apply.open')}</Button>
                </JobApplicationForm>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import JobApplicationForm from '@/components/JobApplicationForm';

const Jobs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Työpaikat
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Tule mukaan kasvavaan tiimiimme - tarjoamme mielenkiintoisia työtehtäviä ja hyvät työehdot
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Miksi Multe Oy?</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Kilpailukykyinen palkka</h3>
                    <p>Tarjoamme alan parhaita palkkoja ja bonusjärjestelmän</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Koulutusmahdollisuudet</h3>
                    <p>Panostamme henkilöstön jatkuvaan kehittämiseen</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Työsuhde-edut</h3>
                    <p>Kattavat työsuhde-edut ja työvaatteet</p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Hyvä työilmapiiri</h3>
                    <p>Kannustava ja turvallinen työympäristö</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Avoimet työpaikat</h2>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Kokenut telineasentaja</h3>
                    <p className="text-gray-600 mb-4">Etsimme kokenutta telineasentajaa vakituiseen työsuhteeseen</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Vähintään 3 vuoden kokemus telinetyöstä</li>
                      <li>Työturvallisuuskortti ja tulityökortti</li>
                      <li>Hyvä fyysinen kunto</li>
                      <li>Joustavuus ja luotettavuus</li>
                    </ul>
                    <JobApplicationForm jobTitle="Kokenut telineasentaja">
                      <Button>Hae paikkaa</Button>
                    </JobApplicationForm>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">Telineasentaja / aloittelija</h3>
                    <p className="text-gray-600 mb-4">Tarjoamme mahdollisuuden oppia telinetyötä kokeneiden ammattilaisten opastuksella</p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Motivaatio oppia uutta</li>
                      <li>Hyvä fyysinen kunto</li>
                      <li>Työturvallisuuskortti (voidaan hankkia työn ohessa)</li>
                      <li>Korkeantöiden sietokyky</li>
                    </ul>
                    <JobApplicationForm jobTitle="Telineasentaja / aloittelija">
                      <Button>Hae paikkaa</Button>
                    </JobApplicationForm>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Hae meille töihin</h2>
                <p className="mb-4">
                  Vaikka emme juuri nyt ilmoittaisi avointa paikkaa, otamme aina mielellään vastaan osaavien ammattilaisten hakemuksia.
                  Lähetä vapaamuotoinen hakemus ja CV sähköpostilla osoitteeseen info@multeoy.fi
                </p>
                <JobApplicationForm jobTitle="Avoin hakemus">
                  <Button variant="outline">Lähetä avoin hakemus</Button>
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
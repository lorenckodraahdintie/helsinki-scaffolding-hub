import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              {t('nav.about')}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Multe Oy - Ammattimaisia telinepalveluja jo vuodesta 2010
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Yrityksen historia</h2>
                <p className="text-lg mb-4">
                  Multe Oy on perustettu vuonna 2010 tarjoamaan laadukkaita telinepalveluja Helsingin ja lähialueiden rakennusprojekteihin. 
                  Olemme kasvaneet pienestä perheyrityksestä luotettavaksi kumppaniksi niin yksityisille asiakkaille kuin suurille rakennusliikkeille.
                </p>
                <p className="text-lg">
                  Erikoisosaamistamme ovat rakennustelineet, saneerauskohteet sekä teollisuuden vaativat telineprojektit. 
                  Turvallisuus ja laatu ovat toimintamme kulmakivet.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Arvomme</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Turvallisuus</h3>
                    <p>Turvallisuus on meille ensisijaista. Noudatamme tiukkoja turvallisuusstandardeja ja koulutamme henkilöstömme jatkuvasti.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Laatu</h3>
                    <p>Käytämme vain laadukkaita materiaaleja ja moderneja telinejärjestelmiä varmistaaksemme parhaan mahdollisen lopputuloksen.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Luotettavuus</h3>
                    <p>Pidämme aikatauluista kiinni ja toimitamme aina lupaamamme. Asiakkaamme voivat luottaa meihin.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Ammattitaito</h3>
                    <p>Kokenut tiimimme hallitsee kaikki telinetyön osa-alueet pienistä korjauksista suuriin teollisuusprojekteihin.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
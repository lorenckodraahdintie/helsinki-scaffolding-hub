import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Safety = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Turvallisuusstandardit
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Turvallisuus on meille ensisijaista - noudatamme tiukkoja standardeja ja ohjeistuksia
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Turvallisuusperiaatteet</h2>
                <p className="text-lg mb-6">Multe Oy sitoutuu ylläpitämään korkeimpia turvallisuusstandardeja kaikissa projekteissaan. Turvallisuus ei ole meille vain sääntöjen noudattamista, vaan se on osa työkulttuuria ja jokapäiväistä toimintaa.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 border-l-4 border-primary bg-gray-50">
                    <h3 className="text-xl font-semibold mb-3">Henkilöturvallisuus</h3>
                    <p>Jokainen työntekijä on vastuussa omasta ja työtovereidensa turvallisuudesta. Kaikilla on oikeus ja velvollisuus keskeyttää vaarallinen työ.</p>
                  </div>
                  <div className="p-6 border-l-4 border-primary bg-gray-50">
                    <h3 className="text-xl font-semibold mb-3">Jatkuva koulutus</h3>
                    <p>Henkilöstömme osallistuu säännöllisesti turvallisuuskoulutuksiin ja pätevyydet pidetään ajan tasalla.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Standardit ja sertifikaatit</h2>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">ISO 9001 Laatujärjestelmä</h3>
                    <p>Sertifioitu laatujärjestelmä varmistaa palveluidemme laadun ja jatkuvan kehittämisen.</p>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">VTT Sertifikaatti</h3>
                    <p>VTT:n myöntämä sertifikaatti telinepalveluille takaa korkeimman ammattitaidon.</p>
                  </div>
                  
                  <div className="border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Työturvallisuus</h3>
                    <p>Noudatamme Työturvallisuuslakia ja Ratu-ohjeistuksia. Kaikilla työntekijöillä voimassa olevat turvallisuuskortit.</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Turvallisuustoimenpiteet</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ennen työtä</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Työmaan turvallisuussuunnittelu</li>
                      <li>Riskiarviointi</li>
                      <li>Turvallisuusperehdytys</li>
                      <li>Varusteiden tarkastus</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Työn aikana</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Jatkuva turvallisuusvalvonta</li>
                      <li>Säännölliset tarkastukset</li>
                      <li>Suojainten käyttö</li>
                      <li>Turvallisten työmenetelmien noudattaminen</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Yhteystiedot turvallisuusasioissa</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Turvallisuuspäällikkö:</strong> Jukka Koskinen</p>
                  <p className="mb-2"><strong>Puhelin:</strong> +358 451509570</p>
                  <p className="mb-2"><strong>Sähköposti:</strong> info@multe.fi</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Ilmoita heti kaikista turvallisuuteen liittyvistä havainnoista, läheltä piti -tilanteista ja tapaturmista.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Safety;
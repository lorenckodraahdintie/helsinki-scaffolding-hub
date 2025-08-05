import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Käyttöehdot
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Palveluidemme käyttöehdot ja sopimusehdot
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Yleistä</h2>
                <p>
                  Nämä käyttöehdot koskevat Multe Oy:n tarjoamia telinepalveluja. 
                  Tilaamalla palvelujamme hyväksyt nämä ehdot. Ehdot ovat voimassa toistaiseksi 
                  ja niitä voidaan päivittää tarvittaessa.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Palvelut</h2>
                <p>Tarjoamme seuraavia palveluja:</p>
                <ul>
                  <li>Rakennustelineiden pystytys, vuokraus ja purku</li>
                  <li>Saneerauskohteiden telinepalvelut</li>
                  <li>Teollisuuden telinepalvelut</li>
                  <li>Pientalojen telinepalvelut</li>
                  <li>Sääsuojaukset</li>
                </ul>
                <p>
                  Palvelut toteutetaan sovitun aikataulun mukaisesti ja voimassa olevien 
                  määräysten mukaisesti.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Tilaaminen ja sopimukset</h2>
                <p>
                  Palvelut tilataan kirjallisella sopimuksella tai hyväksytyllä tarjouksella. 
                  Sopimus astuu voimaan, kun asiakas on hyväksynyt tarjouksen kirjallisesti. 
                  Tarjous on voimassa 30 päivää antopäivästä lukien, ellei toisin mainita.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Hinnat ja maksu</h2>
                <p>
                  Hinnat määräytyvät voimassa olevan hinnaston mukaan ja sisältävät arvonlisäveron. 
                  Laskutus tapahtuu jälkikäteen sovitun maksuehdon mukaisesti. 
                  Maksuviivästyksestä perimme viivästyskorkoa korkolain mukaisesti.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Toimitus ja aikataulut</h2>
                <p>
                  Pyrimme noudattamaan sovittuja aikatauluja. Emme vastaa viivästyksistä, 
                  jotka johtuvat asiakkaasta riippumattomista syistä, kuten sääolosuhteista, 
                  viranomaispäätöksistä tai force majeure -tilanteista.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Vastuu ja vakuutukset</h2>
                <p>
                  Meillä on voimassa olevat vastuuvakuutukset. Vastuumme rajoittuu sopimuksen 
                  arvoon. Emme vastaa välillisistä vahingoista tai menetyksistä. 
                  Asiakas vastaa työmaalla tapahtuvista vahingoista telineille kolmannen osapuolen 
                  toimesta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Turvallisuus</h2>
                <p>
                  Noudatamme työturvallisuuslakia ja alan turvallisuusmääräyksiä. 
                  Asiakas sitoutuu noudattamaan turvallisuusohjeita ja informoimaan muita 
                  työmaalla työskenteleviä telineiden oikeasta käytöstä.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Peruuttaminen</h2>
                <p>
                  Tilauksen peruuttaminen on mahdollista 48 tuntia ennen sovittua toimitusaikaa 
                  ilman lisäkustannuksia. Myöhemmästä peruuttamisesta voidaan periä kulukorvaus.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Reklamaatiot</h2>
                <p>
                  Reklamaatiot tulee tehdä kirjallisesti 14 päivän kuluessa palvelun suorittamisesta. 
                  Reklamaatiossa tulee yksilöidä puute tai virhe riittävän tarkasti.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Sovellettava laki ja riitojen ratkaisu</h2>
                <p>
                  Sopimukseen sovelletaan Suomen lakia. Mahdolliset riidat ratkaistaan ensisijaisesti 
                  neuvottelemalla. Jos neuvottelut eivät johda tulokseen, riita ratkaistaan 
                  Helsingin käräjäoikeudessa.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Yhteystiedot</h2>
                <p>
                  Multe Oy<br/>
                  Lumikero 6 D 42<br/>
                  01280 Vantaa<br/>
                  Puhelin: +358 451509570<br/>
                  Sähköposti: info@multeoy.fi
                </p>
                <p className="mt-4"><strong>Päivitetty viimeksi: 5.8.2025</strong></p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
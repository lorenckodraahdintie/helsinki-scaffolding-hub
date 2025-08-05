import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Tietosuojakäytäntö
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Kunnioitamme yksityisyyttäsi ja suojaamme henkilötietojasi
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Rekisterinpitäjä</h2>
                <p>
                  Multe Oy<br/>
                  Y-tunnus: 2492087-2<br/>
                  Osoite: Lumikero 6 D 42, 01280 Vantaa<br/>
                  Puhelin: +358 451509570<br/>
                  Sähköposti: info@multeoy.fi
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Käsiteltävät henkilötiedot</h2>
                <p>Käsittelemme seuraavia henkilötietoja:</p>
                <ul>
                  <li>Nimi</li>
                  <li>Yhteystiedot (sähköposti, puhelinnumero, osoite)</li>
                  <li>Yritystiedot (yrityksen nimi, Y-tunnus)</li>
                  <li>Tarjouspyyntöjen sisältö</li>
                  <li>Asiakassuhteeseen liittyvät tiedot</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Tietojen käyttötarkoitus</h2>
                <p>Henkilötietoja käytetään seuraaviin tarkoituksiin:</p>
                <ul>
                  <li>Tarjousten laatiminen ja toimittaminen</li>
                  <li>Asiakassuhteen hoitaminen</li>
                  <li>Sopimusten täyttäminen</li>
                  <li>Laskutus</li>
                  <li>Yhteydenottoihin vastaaminen</li>
                  <li>Markkinointi (suostumuksen perusteella)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Tietojen luovuttaminen</h2>
                <p>
                  Emme luovuta henkilötietoja kolmansille osapuolille ilman asiakkaan suostumusta, 
                  paitsi lakisääteisten velvoitteiden täyttämiseksi (esim. viranomaiset, tilintarkastajat).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Tietojen säilytysaika</h2>
                <p>
                  Säilytämme henkilötietoja vain niin kauan kuin se on tarpeellista käsittelytarkoituksen 
                  täyttämiseksi tai lakisääteisten velvoitteiden noudattamiseksi. Asiakastiedot säilytetään 
                  kirjanpitolain mukaisesti.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Rekisteröidyn oikeudet</h2>
                <p>Sinulla on oikeus:</p>
                <ul>
                  <li>Saada tietoa henkilötietojesi käsittelystä</li>
                  <li>Tarkastaa sinua koskevat tiedot</li>
                  <li>Oikaista virheelliset tiedot</li>
                  <li>Poistaa tiedot (oikeus tulla unohdetuksi)</li>
                  <li>Rajoittaa käsittelyä</li>
                  <li>Vastustaa käsittelyä</li>
                  <li>Siirtää tiedot järjestelmästä toiseen</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Tietoturva</h2>
                <p>
                  Suojaamme henkilötietoja asianmukaisin teknisin ja organisatorisin toimenpitein. 
                  Tiedot säilytetään suojatuissa järjestelmissä ja niiden käsittely on rajoitettu 
                  vain valtuutetuille henkilöille.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Yhteydenotto</h2>
                <p>
                  Jos sinulla on kysymyksiä tietosuojasta tai haluat käyttää oikeuksiasi, 
                  ota yhteyttä meihin sähköpostitse: info@multeoy.fi tai puhelimitse: +358 451509570.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Muutokset tietosuojakäytäntöön</h2>
                <p>
                  Pidätämme oikeuden päivittää tätä tietosuojakäytäntöä. Merkittävistä muutoksista 
                  ilmoitamme verkkosivuillamme.
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

export default Privacy;
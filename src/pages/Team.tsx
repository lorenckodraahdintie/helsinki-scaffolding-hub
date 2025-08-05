import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const Team = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Tiimimme
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Kokenut ja ammattitaitoinen tiimi palveluksessanne
            </p>
          </div>
        </div>
        
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Ervin Kodra</h3>
                  <p className="text-gray-600 mb-2">Toimitusjohtaja</p>
                  <p className="text-sm">15 vuoden kokemus rakennusalalta. Vastaa yrityksen strategisesta suunnasta ja asiakassuhteista.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Halit Hasa</h3>
                  <p className="text-gray-600 mb-2">Toimitusjohtaja / Työmaapäällikkö</p>
                  <p className="text-sm">8 vuoden kokemus telinetyöstä. Vastaa projektien toteutuksesta ja työmaan turvallisuudesta.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Alban Selaci</h3>
                  <p className="text-gray-600 mb-2">Telineasentaja</p>
                  <p className="text-sm">6 vuoden kokemus telineasennuksesta. Erikoisosaaja vaativissa teollisuuskohteissa.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Mikko Järvinen</h3>
                  <p className="text-gray-600 mb-2">Telineasentaja</p>
                  <p className="text-sm">8 vuoden kokemus. Vastaa pientalojen ja saneerauskohteiden telineistä.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Timo Hakala</h3>
                  <p className="text-gray-600 mb-2">Telineasentaja</p>
                  <p className="text-sm">10 vuoden kokemus telinetyöstä. Kokenut ammattilainen kaikenlaisissa projekteissa.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Lorenc Kodra</h3>
                  <p className="text-gray-600 mb-2">Asiakaspalvelu</p>
                  <p className="text-sm">Hoitaa asiakaspalvelun ja tarjousten laatimisen. Ensimmäinen kontakti asiakkaille.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Team;
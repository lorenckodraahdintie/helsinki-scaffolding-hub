
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Multe<span className="text-secondary">Oy</span></h3>
            <p className="mb-4 text-gray-400">
              Ammattimaisia telinepalveluja rakentamiseen, saneeraukseen ja huoltotöihin koko Helsingin alueella.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Palvelut</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rakennustelineet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Saneerauskohteet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teollisuuskohteet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pientalopalvelut</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Yritys</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meistä</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tiimimme</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Työpaikat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Turvallisuusstandardit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Yhteystiedot</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Teollisuuskatu 23</p>
              <p className="mb-2">00510 Helsinki</p>
              <p className="mb-2">+358 40 123 4567</p>
              <p className="mb-2">info@multeoy.fi</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Multe Oy. Kaikki oikeudet pidätetään.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Tietosuojakäytäntö</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Käyttöehdot</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

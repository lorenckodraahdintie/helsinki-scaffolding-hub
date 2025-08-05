
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fi' ? 'en' : 'fi');
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              Multe<span className="text-secondary">Oy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary font-medium">{t('nav.home')}</a>
            <a href="#services" className="text-gray-700 hover:text-primary font-medium">{t('nav.services')}</a>
            <a href="#about" className="text-gray-700 hover:text-primary font-medium">{t('nav.about')}</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium">{t('nav.contact')}</a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
            <Button className="bg-primary hover:bg-primary/90 text-white btn-hover-effect">
              {t('nav.quote')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-primary font-medium py-2">{t('nav.home')}</a>
            <a href="#services" className="block text-gray-700 hover:text-primary font-medium py-2">{t('nav.services')}</a>
            <a href="#about" className="block text-gray-700 hover:text-primary font-medium py-2">{t('nav.about')}</a>
            <a href="#contact" className="block text-gray-700 hover:text-primary font-medium py-2">{t('nav.contact')}</a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium py-2"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white btn-hover-effect">
              {t('nav.quote')}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fi' ? 'en' : 'fi');
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // We're on home page, scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page first, then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Multe<span className="text-secondary">Oy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">{t('nav.home')}</Link>
            <button 
              onClick={() => handleSectionNavigation('services')}
              className="text-gray-700 hover:text-primary font-medium"
            >
              {t('nav.services')}
            </button>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">{t('nav.about')}</Link>
            <button 
              onClick={() => handleSectionNavigation('contact')}
              className="text-gray-700 hover:text-primary font-medium"
            >
              {t('nav.contact')}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white btn-hover-effect"
              onClick={() => handleSectionNavigation('contact')}
            >
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
            <Link to="/" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
            <button 
              onClick={() => { handleSectionNavigation('services'); setIsMenuOpen(false); }}
              className="block text-gray-700 hover:text-primary font-medium py-2 text-left"
            >
              {t('nav.services')}
            </button>
            <Link to="/about" className="block text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
            <button 
              onClick={() => { handleSectionNavigation('contact'); setIsMenuOpen(false); }}
              className="block text-gray-700 hover:text-primary font-medium py-2 text-left"
            >
              {t('nav.contact')}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium py-2"
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white btn-hover-effect"
              onClick={() => { handleSectionNavigation('contact'); setIsMenuOpen(false); }}
            >
              {t('nav.quote')}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

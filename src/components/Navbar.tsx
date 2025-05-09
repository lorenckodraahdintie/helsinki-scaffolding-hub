
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-primary">
              Helsinki<span className="text-secondary">Scaffold</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary font-medium">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
            <Button className="bg-primary hover:bg-primary/90 text-white btn-hover-effect">
              Get Quote
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
            <a href="#" className="block text-gray-700 hover:text-primary font-medium py-2">Home</a>
            <a href="#services" className="block text-gray-700 hover:text-primary font-medium py-2">Services</a>
            <a href="#about" className="block text-gray-700 hover:text-primary font-medium py-2">About Us</a>
            <a href="#contact" className="block text-gray-700 hover:text-primary font-medium py-2">Contact</a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white btn-hover-effect">
              Get Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;

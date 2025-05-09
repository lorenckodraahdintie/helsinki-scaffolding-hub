
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Helsinki<span className="text-secondary">Scaffold</span></h3>
            <p className="mb-4 text-gray-400">
              Professional scaffolding solutions for construction, renovation, and maintenance projects across Helsinki.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Construction Scaffolding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Renovation Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industrial Scaffolding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Standards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Teollisuuskatu 23</p>
              <p className="mb-2">00510 Helsinki, Finland</p>
              <p className="mb-2">+358 40 123 4567</p>
              <p className="mb-2">info@helsinkiscaffold.fi</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} HelsinkiScaffold Oy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

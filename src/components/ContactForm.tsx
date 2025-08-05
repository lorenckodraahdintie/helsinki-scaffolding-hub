import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from '../contexts/LanguageContext';
const ContactForm = () => {
  const {
    t
  } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    // In a real implementation, this would send the data to a backend
    console.log('Form submitted:', formData);
    toast({
      title: t('toast.sent'),
      description: t('toast.description')
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('contact.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-3">
              <div className="bg-primary p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">{t('contact.info')}</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/80 mb-1">{t('contact.address')}</p>
                    <p className="font-medium">Lumikero 6 D 42, 01280 Helsinki</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-1">{t('contact.phone')}</p>
                    <p className="font-medium">+358 451509570</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-1">{t('contact.email')}</p>
                    <p className="font-medium">info@multeoy.fi</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-1">{t('contact.hours')}</p>
                    <p className="font-medium">{t('contact.hours-value')}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.name')}</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.email')}</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.phone')}</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.project-type')}</label>
                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                      <option value="">{t('form.select-type')}</option>
                      <option value="construction">{t('form.construction')}</option>
                      <option value="renovation">{t('form.renovation')}</option>
                      <option value="industrial">{t('form.industrial')}</option>
                      <option value="residential">{t('form.residential')}</option>
                      <option value="maintenance">{t('form.maintenance')}</option>
                      <option value="emergency">{t('form.emergency')}</option>
                    </select>
                  </div>
                  
                  
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 btn-hover-effect">
                    {t('contact.send')}
                  </Button>
                </form>
              </div>
              
              <div className="bg-gray-50 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('contact.billing')}</h3>
                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Verkkolaskut:</h4>
                    <p className="text-gray-700 font-medium mb-2">Multe Oy</p>
                    <div className="space-y-1 text-gray-600">
                      <p>Operaattori: Maventa (003721291126)</p>
                      <p>Verkkolaskuosoite: 003723028022</p>
                      <p>OVT-tunnus: 003723028022</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Danske Bankin, Handelsbankenin, Paikallisosuuspankkien tai Säästöpankin asiakkaille:</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Verkkolaskuosoite: 003723327487</p>
                      <p>Operaattoritunnus: DABAFIHH</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Paperilaskut:</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Multe Oy</p>
                      <p>(Apix skannauspalvelu)</p>
                      <p>PL 100</p>
                      <p>80020 Kollektor Scan</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-xs text-gray-700 leading-relaxed">Pyydämme huomioimaan, että laskulla on Multe OY yhteyshenkilön nimi tai meidän viitteemme sekä laskuun kuuluvat liitteet. Nämä toimenpiteet helpottavat laskujen käsittelyä meillä merkittävästi. Ilman näitä tietoja olevat laskut palautetaan, emmekä tällöin vastaa mahdollisista viivästys- tai muista kuluista.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, this would send the data to a backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Tarjouspyyntö lähetetty",
      description: "Kiitos! Otamme sinuun yhteyttä 24 tunnin kuluessa.",
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

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Pyydä ilmainen tarjous</h2>
            <p className="text-xl text-gray-600">
              Kerro meille projektistasi, niin tarjoamme kattavan telinepalveluratkaisun juuri sinun tarpeisiisi.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-primary p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Yhteystiedot</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/80 mb-1">Osoite</p>
                    <p className="font-medium">Teollisuuskatu 23, 00510 Helsinki</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-1">Puhelin</p>
                    <p className="font-medium">+358 40 123 4567</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-1">Sähköposti</p>
                    <p className="font-medium">info@multeoy.fi</p>
                  </div>
                  <div>
                    <p className="text-white/80 mb-1">Aukioloajat</p>
                    <p className="font-medium">Maanantai-Perjantai: 8:00 - 17:00</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nimi</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Sähköposti</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Puhelin</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Projektin tyyppi</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="">Valitse projektin tyyppi</option>
                      <option value="construction">Uudisrakennus</option>
                      <option value="renovation">Saneeraus</option>
                      <option value="industrial">Teollisuus</option>
                      <option value="residential">Pientalo</option>
                      <option value="maintenance">Huoltotyö</option>
                      <option value="emergency">Hätätapaus</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Projektin tiedot</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 btn-hover-effect">
                    Lähetä tarjouspyyntö
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

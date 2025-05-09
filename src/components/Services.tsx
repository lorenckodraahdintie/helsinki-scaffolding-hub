
import React from 'react';
import { Building, Construction, Hammer, Wrench, HardHat, Truck } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100">
    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      <Icon size={24} className="text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Rakennustelineet",
      description: "Täydelliset telinepalvelut kaikenkokoisiin uudisrakennusprojekteihin, pientaloista kaupallisiin rakennuksiin."
    },
    {
      icon: Construction,
      title: "Saneerauskohteet",
      description: "Erikoistuneet telinepalvelut saneerauskohteisiin, julkisivutöihin ja historiallisten rakennusten restaurointiin Helsingissä."
    },
    {
      icon: Hammer,
      title: "Teollisuuskohteet",
      description: "Raskaan sarjan telinepalvelut tehtaisiin, voimalaitoksiin ja tuotantolaitoksiin."
    },
    {
      icon: HardHat,
      title: "Pientalopalvelut",
      description: "Turvalliset ja luotettavat telinepalvelut omakotitalojen remontointiin, kattotöihin ja julkisivuhuoltoihin."
    },
    {
      icon: Wrench,
      title: "Huoltotyöt",
      description: "Tilapäiset telinepalvelut huoltotöihin liike- ja toimistorakennuksissa, sairaaloissa ja julkisissa tiloissa."
    },
    {
      icon: Truck,
      title: "Hätäpalvelut",
      description: "Nopean toiminnan telinepalvelut hätäkorjauksiin ja aikaa vaativiin rakennustarpeisiin koko pääkaupunkiseudulla."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Telinepalvelumme</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tarjoamme kattavia telinepalveluja kaikenkokoisiin projekteihin Helsingissä ja lähialueilla.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


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
      title: "Construction Scaffolding",
      description: "Complete scaffolding solutions for new building projects of all sizes, from residential to commercial structures."
    },
    {
      icon: Construction,
      title: "Renovation Support",
      description: "Specialized scaffolding for renovation projects, facade work, and historic building restorations throughout Helsinki."
    },
    {
      icon: Hammer,
      title: "Industrial Scaffolding",
      description: "Heavy-duty industrial scaffolding systems for factories, power plants, and manufacturing facilities."
    },
    {
      icon: HardHat,
      title: "Residential Services",
      description: "Safe and reliable scaffolding for home renovations, roof repairs, and exterior maintenance projects."
    },
    {
      icon: Wrench,
      title: "Maintenance Access",
      description: "Temporary access solutions for maintenance work on commercial buildings, hospitals, and public facilities."
    },
    {
      icon: Truck,
      title: "Emergency Services",
      description: "Rapid response scaffolding for emergency repairs and time-sensitive construction needs across the Helsinki region."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Scaffolding Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive scaffolding solutions for projects of all sizes throughout Helsinki and surrounding areas.
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

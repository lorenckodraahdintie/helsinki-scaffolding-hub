
import React from 'react';

const FeatureItem = ({ number, title, description }) => (
  <div className="mb-8 md:mb-0">
    <div className="flex items-start">
      <div className="mr-4 mt-1">
        <span className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full font-bold">
          {number}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Safety First Approach",
      description: "Our scaffolding systems meet the highest Finnish and European safety standards, with regular inspections and certifications."
    },
    {
      number: "02",
      title: "Experienced Team",
      description: "Our scaffolding professionals have 15+ years of experience working in Helsinki's unique construction environment."
    },
    {
      number: "03",
      title: "Finnish Weather Expertise",
      description: "We design our scaffolding to withstand Finland's harsh winters and varying weather conditions year-round."
    },
    {
      number: "04",
      title: "Custom Solutions",
      description: "We provide tailored scaffolding designs for each project, adapting to unique architectural challenges."
    },
    {
      number: "05",
      title: "Fast Installation",
      description: "Our efficient teams minimize project delays with quick assembly and disassembly of scaffolding systems."
    },
    {
      number: "06",
      title: "24/7 Support",
      description: "We offer around-the-clock customer service and emergency scaffolding solutions when needed."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="mb-6">Why Choose Our Helsinki Scaffolding Services</h2>
            <p className="text-xl text-gray-600 mb-8">
              With over 20 years of experience serving the Greater Helsinki area, we've built our reputation on safety, quality, and reliability.
            </p>
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80" 
                alt="Scaffolding project in Helsinki" 
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index} 
                  number={feature.number} 
                  title={feature.title} 
                  description={feature.description} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

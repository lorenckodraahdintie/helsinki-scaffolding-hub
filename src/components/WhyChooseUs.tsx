
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
      title: "Turvallisuus ensin",
      description: "Telinepalvelumme täyttävät korkeimmat suomalaiset ja eurooppalaiset turvallisuusstandardit, säännöllisine tarkastuksineen ja sertifikaatteineen."
    },
    {
      number: "02",
      title: "Kokenut tiimi",
      description: "Ammattilaisillamme on yli 15 vuoden kokemus Helsingin ainutlaatuisessa rakennusympäristössä."
    },
    {
      number: "03",
      title: "Suomen sääolosuhteiden asiantuntijat",
      description: "Suunnittelemme telineemme kestämään Suomen ankaria talvia ja vaihtelevia sääolosuhteita ympäri vuoden."
    },
    {
      number: "04",
      title: "Räätälöidyt ratkaisut",
      description: "Tarjoamme yksilöllisiä telinesuunnitelmia jokaiseen projektiin, mukautuen ainutlaatuisiin arkkitehtuurisiin haasteisiin."
    },
    {
      number: "05",
      title: "Nopea asennus",
      description: "Tehokkaat tiimimme minimoivat projektiviivästykset telinejärjestelmien nopealla kokoamisella ja purkamisella."
    },
    {
      number: "06",
      title: "24/7 Tuki",
      description: "Tarjoamme ympärivuorokautista asiakaspalvelua ja hätätelinepalveluja tarvittaessa."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="mb-6">Miksi valita Multe Oy:n telinepalvelut?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Yli 20 vuoden kokemuksella pääkaupunkiseudulla, olemme rakentaneet maineemme turvallisuuden, laadun ja luotettavuuden varaan.
            </p>
            <div className="relative h-80 md:h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80" 
                alt="Telineprojekti Helsingissä" 
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

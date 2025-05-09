
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-[85vh] flex items-center" id="home">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 leading-tight">
            Ammattimaiset telinepalvelut Helsingissä
          </h1>
          <p className="text-white/90 text-xl mb-8 max-w-2xl">
            Turvallisia, luotettavia ja tehokkaita telinepalveluja rakennustyömaille, saneerauksiin ja huoltotöihin pääkaupunkiseudulla.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white btn-hover-effect">
              Pyydä tarjous
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white text-white hover:bg-white/20 btn-hover-effect">
              Palvelumme
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

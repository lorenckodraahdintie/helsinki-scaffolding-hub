
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import TeamSection from '@/components/TeamSection';
import JobsSection from '@/components/JobsSection';
import SafetySection from '@/components/SafetySection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16"> {/* Adding padding-top to account for fixed navbar */}
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <TeamSection />
        <JobsSection />
        <SafetySection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

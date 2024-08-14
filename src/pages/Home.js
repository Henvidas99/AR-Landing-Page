import React from 'react';
import Header from '../components/header/Header';
import HeroSection from '../components/main-sections/hero-section/HeroSection';
import ModulesSection from '../components/main-sections/modules-section/ModulesSection';
import BenefitsSection from '../components/main-sections/benefits-section/BenefitsSection';
import DownloadSection from '../components/main-sections/download-section/DownloadSection';
import ExploreSection from '../components/main-sections/explore-section/ExploreSection';
import ContactSection from '../components/main-sections/contact-section/ContactSection';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main >
      <HeroSection></HeroSection>
      <BenefitsSection/>
      <ModulesSection/>
      <DownloadSection />
      <ExploreSection/>
      <ContactSection />
      </main>
      <Footer/>
    </>
  );
}

export default Home;

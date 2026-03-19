import React from 'react';
import HeroOverlap from '../components/HeroOverlap';
import IntroSection from '../components/IntroSection';
import FeaturesSection from '../components/FeaturesSection';
import SessionsSection from '../components/SessionsSection';
import ContactSection from '../components/ContactSection';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Homepage route.
 */
const HomePage: React.FC = () => {
  useScrollReveal('.reveal-ready', 'reveal', 0.18);

  return (
    <main>
      <HeroOverlap />
      <IntroSection />
      <FeaturesSection />
      <SessionsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;

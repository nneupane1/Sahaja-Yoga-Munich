import React from 'react';
import HeroOverlap from '../components/HeroOverlap';
import IntroSection from '../components/IntroSection';
import FeaturesSection from '../components/FeaturesSection';
import SessionsSection from '../components/SessionsSection';
import BlogSection from '../components/BlogSection';
import AboutSection from '../components/AboutSection';
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
      <BlogSection />
      <AboutSection />
    </main>
  );
};

export default HomePage;

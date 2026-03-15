import React from 'react';
import NavBar from './components/NavBar';
// import HeroSection from './components/HeroSection';
import HeroOverlap from './components/HeroOverlap';
import FeaturesSection from './components/FeaturesSection';
import SessionsSection from './components/SessionsSection';
import AboutSection from './components/AboutSection';
import IntroSection from './components/IntroSection';
import Footer from './components/Footer';

/**
 * The root application component. It orchestrates the different page sections.
 */
const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        {/* Use the overlapping hero instead of the single hero to achieve
            a layered scroll effect. */}
        <HeroOverlap />
          {/* Introduction section explaining what Sahaja Yoga is */}
          <IntroSection />
        <FeaturesSection />
        <SessionsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default App;

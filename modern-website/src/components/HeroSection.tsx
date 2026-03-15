import React from 'react';
import heroImage from '../assets/hero.png';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * HeroSection displays a full height introduction with an abstract background image.
 * It utilises useScrollReveal to gently fade and slide the hero content into view.
 */
const HeroSection: React.FC = () => {
  // Observe the hero-content container for entrance animation
  useScrollReveal('.hero-content', 'reveal', 0.3);

  return (
    <section className="hero">
      {/* Background image */}
      <img src={heroImage} alt="Decorative background" className="hero-background" />
      {/* Optional overlay to soften the background */}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to ModernSite</h1>
        <p>Build beautiful experiences with React &amp; TypeScript.</p>
        <a href="#features" className="cta-button">
          Explore Features
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * HeroOverlap shows two full‑screen hero layers that overlap as the user scrolls.
 * Each layer sticks to the top of the viewport until the next one scrolls over
 * it, creating a dynamic transition reminiscent of the overlapping images on
 * sahajayoga.de. The useScrollReveal hook adds a class to animate each layer
 * when it enters the viewport. You can customise the headings and text
 * within each layer as well as swap the images via src/assets/hero1.png and
 * hero2.png.
 */
const HeroOverlap: React.FC = () => {
  // Observe each overlap layer for entrance animation
  useScrollReveal('.overlap-layer', 'reveal', 0.2);

  return (
    <section className="hero-overlap">
      {/* First layer: meditation silhouette */}
      <div className="overlap-layer layer-one">
        <img src={hero1} alt="Meditating person" className="overlap-image" />
        <div className="layer-content">
          <h1>Erlebe Sahaja Yoga</h1>
          <p>Entdecke die Freude der spontanen Meditation.</p>
        </div>
      </div>
      {/* Second layer: lotus flower */}
      <div className="overlap-layer layer-two">
        <img src={hero2} alt="Lotus flower floating on water" className="overlap-image" />
        <div className="layer-content">
          <h1>Finde deine innere Ruhe</h1>
          <p>Begleite uns in München und lerne mehr.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroOverlap;
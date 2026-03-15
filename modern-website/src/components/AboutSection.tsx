import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * AboutSection provides a short description of the project. It fades into view
 * when scrolled into the viewport.
 */
const AboutSection: React.FC = () => {
  // Observe the about section container for reveal effect
  useScrollReveal('.about-section', 'reveal', 0.2);

  // Import the chakra illustration. Using import inside the function ensures the
  // bundler includes the asset and provides an optimized URL at build time.
  // The image depicts a pastel‑coloured chakra symbol which reinforces the
  // themes of balance and energy without depicting any real person.
  const chakraImg = require('../assets/chakra.png');

  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <div className="about-image">
          <img src={chakraImg} alt="Chakra symbol" />
        </div>
        <div className="about-text">
        <h2>Über Sahaja Yoga</h2>
          <p>
            Sahaja Yoga ist eine einfache, altbewährte Meditationstechnik, die dir hilft, Yoga – die
            Vereinigung mit deinem inneren Selbst – mühelos zu erreichen. Gegründet von
            Shri Mataji Nirmala Devi, wird Sahaja Yoga weltweit praktiziert und basiert auf dem
            Erwachen einer heilenden Energie in dir, der Kundalini. Wenn sie erweckt wird, reinigt
            und balanciert diese Energie das subtile System aus Chakren und Kanälen und bringt
            tiefen Frieden und Ausgeglichenheit in den Alltag. Unsere Kurse werden von erfahrenen
            ehrenamtlichen Praktizierenden geleitet und sind immer kostenlos. Du brauchst keine
            Vorkenntnisse, spezielle Kleidung oder Matten – komm einfach vorbei und erlebe es selbst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

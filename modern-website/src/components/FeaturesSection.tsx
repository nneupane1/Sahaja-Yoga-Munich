import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Mühelose Meditation',
    description:
      'Erreiche Yoga spontan durch Sahaja Yoga Meditation – keine Asanas, Matten oder spezielle Kleidung erforderlich.',
    icon: '🧘'
  },
  {
    title: 'Kostenlos',
    description:
      'Alle Sitzungen sind kostenlos und werden von engagierten Ehrenamtlichen des Sahaja Yoga Kultur e.V. geleitet.',
    icon: '🎁'
  },
  {
    title: 'Offen für alle',
    description:
      'Anfänger und Fortgeschrittene sind gleichermaßen willkommen. Komm jederzeit dazu und entdecke gemeinsam inneren Frieden.',
    icon: '🌍'
  }
];

/**
 * FeaturesSection lists the key selling points of the project. Each card
 * animates into view as the user scrolls down the page.
 */
const FeaturesSection: React.FC = () => {
  // Observe feature cards for reveal animation
  useScrollReveal('.feature-card', 'reveal', 0.2);

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Merkmale</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.title} className="feature-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

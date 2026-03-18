import React from 'react';
import { useLocale } from '../context/LocaleContext';

/**
 * Key benefits of the Sahaja Yoga approach.
 */
const FeaturesSection: React.FC = () => {
  const { locale } = useLocale();
  const copy =
    locale === 'de'
      ? {
          title: 'Merkmale',
          features: [
            {
              title: 'Mühelose Meditation',
              description:
                'Innere Ruhe kann ohne komplizierte Vorbereitung, äußere Leistung oder geistigen Druck entstehen.',
              icon: '🧘'
            },
            {
              title: 'Kostenfrei',
              description:
                'Alle Treffen werden ehrenamtlich getragen und bleiben offen zugänglich, ohne Gebühren oder Verpflichtungen.',
              icon: '🎁'
            },
            {
              title: 'Offen für alle',
              description:
                'Anfänger und Fortgeschrittene können gleichermaßen teilnehmen und ohne Hürde in die Praxis einsteigen.',
              icon: '🌍'
            }
          ]
        }
      : {
          title: 'Key Qualities',
          features: [
            {
              title: 'Effortless Meditation',
              description:
                'Inner quiet can emerge without complicated preparation, outer performance or mental strain.',
              icon: '🧘'
            },
            {
              title: 'Free of Charge',
              description:
                'All sessions are offered voluntarily and remain open to everyone without fees or obligation.',
              icon: '🎁'
            },
            {
              title: 'Open to Everyone',
              description:
                'Beginners and experienced meditators alike can join and enter the practice without barriers.',
              icon: '🌍'
            }
          ]
        };

  return (
    <section id="features" className="section-band bg-[#dff4ff]">
      <div className="section-shell">
        <div id="science-spirituality" aria-hidden="true" className="relative -top-24" />
        <div>
          <h2 className="text-center text-4xl sm:text-5xl">{copy.title}</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {copy.features.map(feature => (
            <article key={feature.title} className="card-soft flex h-full flex-col items-center p-8 text-center">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-5 text-balance text-[1.7rem]">{feature.title}</h3>
              <p className="mt-4 max-w-[18rem] flex-1 text-[1.02rem] leading-8 text-[#333333]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

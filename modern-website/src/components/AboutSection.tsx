import React from 'react';
import chakraImg from '../assets/chakra.png';
import { useLocale } from '../context/LocaleContext';

/**
 * About the Munich center and Sahaja Yoga practice.
 */
const AboutSection: React.FC = () => {
  const { locale } = useLocale();
  const copy =
    locale === 'de'
      ? {
          title: 'Über Sahaja Yoga',
          alt: 'Chakra-Symbol',
          bodyOne:
            'Sahaja Yoga ist eine natürliche Meditation, die hilft, die Verbindung mit dem inneren Selbst unmittelbar zu erfahren. Im Mittelpunkt steht das Erwachen der Kundalini und die Verfeinerung des feinstofflichen Systems.',
          bodyTwo:
            'Wenn diese Energie erwacht, klärt und harmonisiert sie Chakren und Kanäle und bringt mehr Frieden, Balance und Klarheit in den Alltag. Unsere Treffen werden ehrenamtlich getragen und bleiben immer kostenlos.'
        }
      : {
          title: 'About Sahaja Yoga',
          alt: 'Chakra symbol',
          bodyOne:
            'Sahaja Yoga is a natural form of meditation that helps people experience a living connection with the inner Self. At its heart lies the awakening of Kundalini and the refinement of the subtle system.',
          bodyTwo:
            'When this energy awakens, it clarifies and harmonises the chakras and channels, bringing more peace, balance and clarity into daily life. Our sessions are offered voluntarily and always remain free of charge.'
        };

  return (
    <section id="about" className="section-band bg-[#e9f7ff]">
      <div className="section-shell">
        <div id="culture-of-spirit" aria-hidden="true" className="relative -top-24" />
        <div className="card-soft reveal-ready flex flex-col items-center gap-10 p-8 md:flex-row md:items-start md:p-10">
          <div className="w-full max-w-[300px] shrink-0 text-center">
            <img src={chakraImg} alt={copy.alt} className="mx-auto w-full max-w-[280px]" />
          </div>
          <div className="flex-1">
            <h2 className="text-center text-4xl sm:text-left sm:text-5xl">{copy.title}</h2>
            <p className="mt-6 text-[1.05rem] leading-8 text-[#333333]">
              {copy.bodyOne}
            </p>
            <p className="mt-5 text-[1.05rem] leading-8 text-[#333333]">
              {copy.bodyTwo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

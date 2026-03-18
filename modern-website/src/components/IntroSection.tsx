import React from 'react';
import { useLocale } from '../context/LocaleContext';

/**
 * Introduction to the core ideas behind Sahaja Yoga.
 */
const IntroSection: React.FC = () => {
  const { locale } = useLocale();
  const copy =
    locale === 'de'
      ? {
          title: 'Was ist Sahaja Yoga?',
          points: [
            {
              title: 'Gedankenfreies Bewusstsein',
              description:
                'Sahaja Yoga öffnet einen Zustand der Meditation, in dem der gegenwärtige Moment ohne Ziehen in Vergangenheit oder Zukunft erfahrbar wird.'
            },
            {
              title: 'Eine einfache Praxis für alle',
              description:
                'Die Methode ist leicht zugänglich, unabhängig von Alter, Herkunft oder Erfahrung. Es braucht keine Vorkenntnisse und keine äußere Inszenierung.'
            },
            {
              title: 'Selbstverwirklichung',
              description:
                'Der Weg beginnt mit einer direkten inneren Erfahrung und zeigt, wie sich daraus Ruhe, Klarheit und Wachstum im Alltag entfalten.'
            }
          ],
          quote:
            'Du kannst den Sinn deines Lebens erst erkennen, wenn du mit der Kraft verbunden bist, die dich erschaffen hat.',
          author: 'Shri Mataji Nirmala Devi'
        }
      : {
          title: 'What is Sahaja Yoga?',
          points: [
            {
              title: 'Thoughtless Awareness',
              description:
                'Sahaja Yoga opens a meditative state in which the present moment can be experienced without being pulled into past or future.'
            },
            {
              title: 'A Simple Practice for Everyone',
              description:
                'The method is accessible regardless of age, background or prior experience. It requires no special preparation and no outer performance.'
            },
            {
              title: 'Self-Realization',
              description:
                'The journey begins with a direct inner experience and shows how calm, clarity and growth can deepen in daily life.'
            }
          ],
          quote:
            'You cannot know the meaning of your life until you are connected to the power that created you.',
          author: 'Shri Mataji Nirmala Devi'
        };

  return (
    <section id="intro" className="section-band bg-[#eaf8ff]">
      <div className="section-shell">
        <div id="energy-system-self-realization" aria-hidden="true" className="relative -top-24" />
        <div id="meditation" aria-hidden="true" className="relative -top-24" />
        <div className="reveal-ready">
          <h2 className="text-center text-4xl sm:text-5xl">{copy.title}</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {copy.points.map(point => (
            <article
              key={point.title}
              className="warm-hover-glow flex min-h-[18.5rem] h-full flex-col rounded-[1.45rem] border border-[#b35d4c]/35 bg-[rgba(255,255,255,0.9)] p-9 text-left shadow-[0_16px_36px_rgba(72,110,140,0.12)] backdrop-blur-sm lg:p-10"
            >
              <h3
                className={`whitespace-nowrap tracking-[-0.01em] text-[#b56757] ${
                  locale === 'de'
                    ? 'text-[1.14rem] sm:text-[1.22rem] lg:text-[1.34rem] xl:text-[1.42rem]'
                    : 'text-[1.04rem] sm:text-[1.12rem] lg:text-[1.2rem] xl:text-[1.3rem]'
                }`}
              >
                {point.title}
              </h3>
              <p className="mt-4 flex-1 text-[1.02rem] leading-8 text-[#333333]">{point.description}</p>
            </article>
          ))}
        </div>

        <blockquote className="warm-hover-glow reveal-ready mx-auto mt-12 max-w-4xl border-l-4 border-[#6eb5c0] bg-[#fff6ee] px-8 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          <p className="text-xl italic text-[#333333] sm:text-2xl">
            "{copy.quote}"
          </p>
          <cite className="mt-4 block text-right font-semibold text-[#4e9aa6]">
            {copy.author}
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default IntroSection;

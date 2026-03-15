import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * IntroSection provides deeper background information on Sahaja Yoga. It pulls
 * the essential explanatory texts from the official Sahaja Yoga Germany
 * website, including descriptions of thoughtless awareness, the simplicity
 * of the technique and the concept of Self‑realization. Each section
 * animates into view as the user scrolls. At the end a quote from
 * Shri Mataji Nirmala Devi underlines the spiritual message【979823145795405†L98-L143】.
 */
const IntroSection: React.FC = () => {
  // Observe each intro item and the whole section for reveal animations
  useScrollReveal('.intro-section', 'reveal', 0.2);
  useScrollReveal('.intro-item', 'reveal', 0.2);
  useScrollReveal('.quote', 'reveal', 0.2);

  return (
    <section id="intro" className="intro-section">
      <div className="container">
        <h2>Was ist Sahaja Yoga?</h2>
        <div className="intro-points">
          <div className="intro-item">
            <h3>Gedankenfreies Bewusstsein</h3>
            <p>
              Durch Sahaja Yoga können Sie einen Zustand der Meditation erreichen,
              der als gedankenloses Gewahrsein bekannt ist. In diesem Zustand
              erleben und genießen Sie den gegenwärtigen Moment ohne Ablenkungen
              aus der Vergangenheit oder Zukunft. Ihr Bewusstsein arbeitet im
              Fluss mit Ihrer inneren Energie (Kundalini). In diesem Zustand zu
              sein macht Sie friedlich und ausgeglichen und verbessert mit der
              Zeit Ihr Wohlbefinden und Ihre Beziehungen【979823145795405†L98-L106】.
            </p>
          </div>
          <div className="intro-item">
            <h3>Eine einfache Technik für Alle</h3>
            <p>
              Sahaja Yoga ist eine einfache Technik, die von jedem leicht
              praktiziert werden kann, unabhängig von Alter, Herkunft oder
              finanzieller Situation. Das Streben nach einem höheren
              spirituellen Zustand – einer Realität voller Zufriedenheit,
              Freude und Frieden – ist ein natürlicher Teil des menschlichen
              Evolutionsprozesses. Sahaja Yoga spielt eine fundamentale Rolle
              dabei, die Früchte dieser Reise zu ernten. Alle Menschen haben
              das Potenzial, ein friedlicheres, nachhaltigeres und leichter
              ausgeglichenes Leben zu erreichen【979823145795405†L115-L121】.
            </p>
          </div>
          <div className="intro-item">
            <h3>Selbstverwirklichung</h3>
            <p>
              Das Ziel einer spirituellen Reise ist es, die Einheit in sich
              selbst zu erfahren und die Verbundenheit mit der Welt als Ganzes.
              Sahaja Yoga verbindet die angeborene spirituelle Energie, die in
              Ihnen schlummert, mit der alles durchdringenden Energie, die
              überall um uns herum existiert. Diese Erfahrung ist seit den
              Anfängen der Zivilisation als Selbstverwirklichung bekannt. In
              der Vergangenheit verbrachten Suchende Jahrzehnte unter der
              Anleitung von Meistern, um diesen Zustand zu erreichen. Sahaja
              Yoga setzt am Ende an, indem es mit der Selbstverwirklichung
              beginnt und erklärt, wie man auf dieser Erfahrung aufbauen kann
              【979823145795405†L134-L143】.
            </p>
          </div>
        </div>
        <blockquote className="quote">
          <p>„Du kannst den Sinn deines Lebens erst erkennen, wenn du mit der Kraft verbunden bist, die dich erschaffen hat.“</p>
          <cite>– Shri Mataji Nirmala Devi【979823145795405†L125-L128】</cite>
        </blockquote>
      </div>
    </section>
  );
};

export default IntroSection;
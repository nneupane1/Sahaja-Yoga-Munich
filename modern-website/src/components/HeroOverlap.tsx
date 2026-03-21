import React, { useEffect, useRef, useState } from 'react';
import ShriMataji from '../assets/ShriMataji.jpg';
import sunriseImg from '../assets/sunrise.jpeg';
import kundaliniOverlay from '../assets/kundalini-overlay-clean.webp';
import kundaliniLogo from '../assets/kundalini-clean.png';
import { useLocale } from '../context/LocaleContext';

/**
 * Two overlapping hero layers with Shri Mataji as the main visual focus.
 */
const HeroOverlap: React.FC = () => {
  const { locale } = useLocale();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showSunriseOverlay, setShowSunriseOverlay] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateOverlayVisibility = () => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = Math.max(window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / viewportHeight, 0), 2);
      const nextVisible = progress >= 0.72 && rect.bottom > 0;

      setShowSunriseOverlay(prev => (prev === nextVisible ? prev : nextVisible));
    };

    const requestVisibilityUpdate = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateOverlayVisibility);
    };

    updateOverlayVisibility();
    window.addEventListener('scroll', requestVisibilityUpdate, { passive: true });
    window.addEventListener('resize', requestVisibilityUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestVisibilityUpdate);
      window.removeEventListener('resize', requestVisibilityUpdate);
    };
  }, []);

  const copy =
    locale === 'de'
      ? {
          heroTag: 'Sahaja Yoga in München',
          heroTitleLines: ['Willkommen zur', 'Sahaja Yoga Meditation', 'in München'],
          heroFreeLabel: 'KOSTENLOSER EINTRITT',
          heroBody:
            'Entdecke die Freude der spontanen Meditation in einer ruhigen, offenen Atmosphäre.',
          heroCta: 'Jetzt erkunden',
          secondaryTag: 'Gedankenfreie Stille',
          secondaryTitle: 'Finde deine innere Ruhe',
          secondaryBody:
            'Begleite uns in München und lerne eine einfache, natürliche Form der Meditation kennen.',
          secondaryCta: 'Mehr erfahren',
          sunriseCornerCard: 'Lasst uns in den Ozean eintauchen ...',
          imageAltPrimary: 'Shri Mataji',
          imageAltSecondary: 'Sonnenaufgang',
          imageAltKundalini: 'Kundalini Symbol'
        }
      : {
          heroTag: 'Sahaja Yoga in Munich',
          heroTitleLines: ['Welcome to', 'Sahaja Yoga Meditation', 'in Munich'],
          heroFreeLabel: 'FREE ENTRY',
          heroBody:
            'Discover the joy of spontaneous meditation in a calm, open atmosphere.',
          heroCta: 'Explore now',
          secondaryTag: 'Thoughtless Stillness',
          secondaryTitle: 'Find your inner quiet',
          secondaryBody:
            'Join us in Munich and discover a simple, natural way to meditate.',
          secondaryCta: 'Learn more',
          sunriseCornerCard: 'Lets dive into the ocean ...',
          imageAltPrimary: 'Shri Mataji',
          imageAltSecondary: 'Sunrise',
          imageAltKundalini: 'Kundalini symbol'
        };

  return (
    <section id="home" ref={sectionRef} className="hero-overlap">
      <div id="shri-mataji" className="overlap-layer">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#cfdfea_0%,#dbe8ef_44%,#eef2f1_74%,#f8f4ef_100%)]" />
        <img
          src={ShriMataji}
          alt={copy.imageAltPrimary}
          className="overlap-image object-cover object-[center_18%] brightness-[1.01] contrast-[1.06] saturate-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(207,223,234,0.04)_0%,rgba(219,232,239,0.08)_38%,rgba(244,241,235,0.4)_66%,rgba(248,244,239,0.82)_100%)]" />
        <div className="absolute inset-y-0 right-4 z-10 flex items-center sm:right-6 md:right-8 lg:right-[clamp(2rem,6vw,10rem)]">
          <div className="w-full max-w-[22.5rem] sm:max-w-[24rem] lg:-translate-y-[10%]">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-[#e3a18b]/45 bg-[linear-gradient(145deg,rgba(255,250,246,0.16),rgba(244,232,220,0.08))] shadow-[0_24px_70px_rgba(132,89,71,0.18)] sm:-inset-5" />
              <div className="pointer-events-none absolute -left-4 -top-4 h-14 w-14 rounded-full border border-[#f0c3ae]/55 bg-[radial-gradient(circle_at_35%_35%,rgba(255,246,240,0.95),rgba(232,177,137,0.38)_58%,rgba(206,119,94,0.1)_100%)] blur-[1px]" />
              <div className="pointer-events-none absolute -bottom-5 -right-3 h-16 w-16 rounded-full border border-[#e9ab97]/45 bg-[radial-gradient(circle_at_40%_40%,rgba(255,249,243,0.92),rgba(225,166,127,0.34)_62%,rgba(199,118,90,0.1)_100%)] blur-[1px]" />
              <div className="pointer-events-none absolute left-4 top-5 h-3 w-3 rounded-full bg-[#f3d0bc]/90 shadow-[14px_3px_0_0_rgba(243,208,188,0.88),7px_13px_0_0_rgba(237,184,156,0.7)]" />
              <div className="pointer-events-none absolute bottom-6 right-5 h-3 w-3 rounded-full bg-[#f2c3aa]/90 shadow-[14px_3px_0_0_rgba(242,195,170,0.84),7px_13px_0_0_rgba(229,160,129,0.62)]" />
              <div className="layer-pane relative flex w-full flex-col items-center border-[#e1a08c]/55 bg-[linear-gradient(145deg,rgba(255,252,249,0.22),rgba(252,243,236,0.1))] px-4 py-5 text-center shadow-[0_18px_45px_rgba(129,87,69,0.14)] backdrop-blur-[1.5px] sm:px-5 sm:py-6">
                <span className="eyebrow border border-[#e1a08c]/35 bg-[rgba(255,250,246,0.55)] px-3 py-1.5 text-[0.62rem] text-[#b56757] shadow-[0_8px_18px_rgba(132,89,71,0.12)]">
                  {copy.heroTag}
                </span>
                <h1 className="mt-4 text-[1.78rem] text-[#5a3a31] sm:text-[2.14rem]">
                  {copy.heroTitleLines.map((line) => (
                    <span key={line} className="block sm:whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </h1>
                <div className="animate-drift-x mt-3 inline-flex items-center gap-2 rounded-full border border-[#e1a08c]/35 bg-[rgba(255,250,246,0.5)] px-3 py-1.5 shadow-[0_8px_18px_rgba(132,89,71,0.12)]">
                  <span className="animate-glow-pulse-fast h-2.5 w-2.5 rounded-full bg-[#2f8b45] shadow-[0_0_0_6px_rgba(47,139,69,0.24),0_0_15px_rgba(47,139,69,0.42)]" />
                  <span className="text-[0.68rem] font-bold tracking-[0.24em] text-[#b56757]">
                    {copy.heroFreeLabel}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#49362f] sm:text-base">
                  {copy.heroBody}
                </p>
                <a
                  href="#sessions"
                  className="explore-btn mt-4 border border-[#e1a08c]/45 bg-[rgba(232,181,116,0.88)] px-4 py-2 text-[0.82rem] shadow-[0_12px_24px_rgba(132,89,71,0.12)] hover:bg-[rgba(221,168,92,0.92)]"
                >
                  {copy.heroCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overlap-layer isolate">
        <img
          src={sunriseImg}
          alt={copy.imageAltSecondary}
          className="overlap-image object-cover object-[center_49%]"
        />
        <div
          className={`pointer-events-none absolute bottom-10 left-3 z-[4] transition-all duration-700 ease-out sm:bottom-16 sm:left-5 lg:bottom-20 lg:left-7 ${
            showSunriseOverlay ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <a
            href="#intro"
            className="pointer-events-auto group inline-flex cursor-pointer items-center gap-2 rounded-[0.95rem] bg-transparent px-3 py-2 shadow-[0_10px_22px_rgba(132,89,71,0.09)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] sm:px-3.5 sm:py-2.5"
            aria-label={locale === 'de' ? 'Zum Abschnitt Was ist Sahaja Yoga?' : 'Go to the What is Sahaja Yoga section'}
            title={locale === 'de' ? 'Zum Abschnitt Was ist Sahaja Yoga?' : 'Go to What is Sahaja Yoga'}
          >
            <span
              className="text-[1.72rem] leading-none tracking-[0.01em] text-white underline decoration-white/0 underline-offset-[0.22em] transition duration-300 group-hover:decoration-white/90 sm:text-[1.9rem]"
              style={{ fontFamily: '"Great Vibes", "Parisienne", cursive' }}
            >
              {copy.sunriseCornerCard}
            </span>
            <span
              aria-hidden="true"
              className="animate-drift-x text-[0.92rem] text-white/95 transition duration-300 group-hover:translate-x-1 group-hover:text-white sm:text-[1rem]"
            >
              ↗
            </span>
          </a>
        </div>
        <div
          className={`pointer-events-none absolute inset-0 z-[3] overflow-hidden isolate transition-opacity duration-150 ${
            showSunriseOverlay ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            contain: 'paint',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          <img
            src={kundaliniLogo}
            alt=""
            aria-hidden="true"
            className={`absolute left-[48.15%] top-[18%] z-[4] w-[9.6rem] -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-[16800ms] ease-[cubic-bezier(0.18,0.9,0.2,1)] sm:w-[11.2rem] lg:w-[12.8rem] ${
              showSunriseOverlay
                ? 'scale-100 opacity-[0.98] blur-0'
                : 'translate-y-6 scale-[0.86] opacity-0 blur-[2px]'
            }`}
            style={{
              filter:
                'saturate(1.08) contrast(1.08) drop-shadow(0 0 6px rgba(255,222,170,0.45)) drop-shadow(0 6px 14px rgba(175,91,45,0.22))',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />
          <img
            src={kundaliniOverlay}
            alt={copy.imageAltKundalini}
            className={`absolute left-[48.15%] top-[61%] z-[2] w-[23.75rem] -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-[4200ms] ease-[cubic-bezier(0.18,0.9,0.2,1)] sm:w-[27.55rem] lg:w-[31.35rem] ${
              showSunriseOverlay
                ? 'scale-100 opacity-[0.78] blur-0'
                : 'translate-y-4 scale-[0.96] opacity-0 blur-[2px]'
            }`}
            style={{
              filter: 'brightness(0.985) contrast(1.05) saturate(1.01)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroOverlap;

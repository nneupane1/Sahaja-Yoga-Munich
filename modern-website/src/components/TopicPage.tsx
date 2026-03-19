import React from 'react';
import { Link } from 'react-router-dom';
import type { TopicPageData } from '../content/topicPages';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';

type TopicPageProps = {
  page: TopicPageData;
};

/**
 * Shared page layout for the routed knowledge sections.
 */
const TopicPage: React.FC<TopicPageProps> = ({ page }) => {
  const { locale } = useLocale();
  useScrollReveal('.reveal-ready, .slide-ready-left, .slide-ready-right', 'reveal', 0.18);
  const isKundaliniPage = page.route === '/kundalini-energiesystem';
  const isSciencePage = page.route === '/wissenschaft-spiritualitaet';
  const ctaCopy =
    locale === 'de'
      ? {
          closing: 'Praxis & Vertiefung',
          contact: 'Kontakt aufnehmen',
          home: 'Zur Startseite',
          exploreGrid: 'Vertiefungen',
          exploreGridIntro:
            'Jeder Themenpfad ist als eigene Seite ausgearbeitet und kann direkt geöffnet werden.',
          openArticle: 'Artikel öffnen',
          readMore: 'Mehr dazu'
        }
      : {
          closing: 'Practice & Deepening',
          contact: 'Get in touch',
          home: 'Back to home',
          exploreGrid: 'Deep dives',
          exploreGridIntro:
            'Each pathway is developed as its own route and can be opened directly.',
          openArticle: 'Open article',
          readMore: 'Read more'
        };

  const heroImageClasses =
    page.heroImageMode === 'contain'
      ? 'h-[31rem] w-full rounded-[1.6rem] object-contain p-5 sm:h-[35rem]'
      : 'h-[31rem] w-full rounded-[1.6rem] object-cover object-center transition duration-700 group-hover:scale-[1.04] sm:h-[35rem]';
  const heroImageLeft = page.route === '/kundalini-energiesystem' ? false : page.route === '/kultur-des-geistes';
  const heroGridClassName = isKundaliniPage
    ? 'grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start'
    : isSciencePage
      ? 'grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start'
      : 'grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-start';
  const heroEyebrowClassName = isKundaliniPage
    ? 'inline-flex items-center rounded-full border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.94)] px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-[#b35d4c] shadow-[0_12px_28px_rgba(146,92,79,0.08)]'
    : 'eyebrow';
  const heroTitleClassName = isKundaliniPage
    ? 'text-balance text-[1.55rem] text-slate-800 transition duration-300 group-hover:translate-x-1 sm:text-[1.9rem] lg:text-[2.15rem]'
    : 'text-balance text-[2.15rem] text-slate-800 transition duration-300 group-hover:translate-x-1 sm:text-[2.7rem] lg:text-[3.15rem]';
  const heroPanelPositionClassName = isKundaliniPage
    ? 'slide-ready-left lg:mt-4 lg:order-1'
    : isSciencePage
      ? heroImageLeft
        ? 'slide-ready-right lg:mt-3'
        : 'slide-ready-left lg:mt-3 lg:order-1'
    : heroImageLeft
      ? 'slide-ready-right lg:mt-8'
      : 'slide-ready-left lg:mt-8 lg:order-1';
  const sectionBandClassName = isSciencePage ? 'py-12 sm:py-14' : 'section-band';

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eff9ff_48%,#dff2ff_100%)]">
      <section
        className={`relative overflow-hidden ${
          isSciencePage ? 'pb-12 pt-14 sm:pb-16 sm:pt-16' : 'pb-16 pt-16 sm:pb-20'
        }`}
      >
        <div
          aria-hidden="true"
          className="animate-glow-pulse absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-sky-200/75 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-soft absolute right-[-10rem] top-24 h-80 w-80 rounded-full bg-cyan-100/80 blur-3xl"
        />

        <div className="section-shell relative">
          {isKundaliniPage ? (
            <article className="interactive-card reveal-ready group relative overflow-hidden rounded-[2.35rem] p-3 sm:p-4">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(236,248,255,0.93)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
              <div className="relative grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
                <div className="rounded-[2rem] border border-[#b35d4c]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,248,243,0.9)_100%)] p-8 shadow-[0_18px_40px_rgba(72,110,140,0.1)] sm:p-10">
                  <div className="max-w-3xl space-y-8">
                    <span className={heroEyebrowClassName}>
                      {page.heroEyebrow}
                    </span>
                    <div className="space-y-5">
                      <h1 className={heroTitleClassName}>
                        {page.title}
                      </h1>
                      <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                        {page.intro}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {page.sections.map(section => (
                        <Link
                          key={section.id}
                          to={section.to}
                          className="hover-chip group inline-flex items-center gap-3"
                        >
                          {section.navLabel}
                          <span className="transition duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                      ))}
                    </div>

                    <div className="rounded-[1.55rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.88)] p-6 shadow-[0_18px_36px_rgba(72,110,140,0.1)] transition duration-500 group-hover:translate-x-1">
                      <div className="mb-4 h-1 w-24 rounded-full bg-[linear-gradient(90deg,#87c3e3,#c8715f)]" />
                      <p className="text-lg leading-8 text-slate-700">{page.heroPanelText}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-[#b35d4c]/20 bg-white/72 p-2 shadow-[0_24px_56px_rgba(72,110,140,0.14)] sm:p-3">
                  <div className="relative overflow-hidden rounded-[1.85rem] border border-white/55 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(220,242,255,0.94))] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
                    <img
                      src={page.heroImage}
                      alt={page.heroImageAlt}
                      className="h-[37rem] w-full scale-[1.03] rounded-[1.85rem] object-contain sm:h-[38rem] sm:scale-[1.05]"
                    />
                  </div>
                  <div className="mx-4 mb-4 mt-4 rounded-[1.3rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.94)] px-5 py-4 text-center shadow-[0_14px_32px_rgba(72,110,140,0.1)] backdrop-blur">
                    <p className="text-sm leading-6 text-slate-700 sm:text-[0.95rem]">
                      {page.heroImageCaption}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <div className={heroGridClassName}>
              <div
                className={`relative ${heroImageLeft ? 'slide-ready-left' : 'slide-ready-right lg:order-2'}`}
              >
                <div
                  aria-hidden="true"
                  className="animate-glow-pulse absolute inset-x-8 top-4 h-[88%] rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(104,168,205,0.24),transparent_70%)] blur-2xl"
                />

                {page.heroImage ? (
                  <div className={`${isSciencePage ? 'mx-auto max-w-[46rem]' : ''}`}>
                    <div className="group relative mx-auto max-w-[46rem] overflow-hidden rounded-[2.3rem] border border-[#b35d4c]/25 bg-white/72 p-4 shadow-[0_28px_70px_rgba(72,110,140,0.18)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(72,110,140,0.24)]">
                      <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.38)_45%,transparent_70%)] opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
                      <div
                        className={`rounded-[1.6rem] ${
                          page.heroImageMode === 'contain'
                            ? 'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(220,242,255,0.92))]'
                            : ''
                        }`}
                      >
                        <img src={page.heroImage} alt={page.heroImageAlt} className={heroImageClasses} />
                      </div>

                      {!isSciencePage && page.heroTags[0] && (
                        <div className="animate-float-soft absolute left-7 top-7 rounded-full border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_16px_36px_rgba(72,110,140,0.12)]">
                          {page.heroTags[0]}
                        </div>
                      )}
                      {!isSciencePage && page.heroTags[1] && (
                        <div className="animate-float-soft absolute right-7 top-16 rounded-full border border-[#b35d4c]/28 bg-[#fff7f3]/92 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_16px_36px_rgba(72,110,140,0.12)] [animation-delay:1.2s]">
                          {page.heroTags[1]}
                        </div>
                      )}
                      {!isSciencePage && page.heroTags[2] && (
                        <div className="animate-float-soft absolute left-9 bottom-28 rounded-full border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_16px_36px_rgba(72,110,140,0.12)] [animation-delay:2s]">
                          {page.heroTags[2]}
                        </div>
                      )}

                      {!isSciencePage && (
                        <div className="absolute inset-x-8 bottom-8 max-w-xl rounded-[1.45rem] border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] p-5 shadow-[0_18px_40px_rgba(72,110,140,0.14)] backdrop-blur">
                          <p className="text-base leading-7 text-slate-700 sm:text-lg">
                            {page.heroImageCaption}
                          </p>
                        </div>
                      )}
                    </div>

                    {isSciencePage && page.heroImageCaption && (
                      <div className="card-soft reveal-ready mx-auto mt-6 max-w-2xl rounded-[1.55rem] px-6 py-5 text-center">
                        <p className="text-base leading-7 text-slate-700 sm:text-lg">
                          {page.heroImageCaption}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="group relative min-h-[32rem] max-w-[42rem] overflow-hidden rounded-[2.3rem] border border-[#b35d4c]/25 bg-white/72 p-6 shadow-[0_28px_70px_rgba(72,110,140,0.16)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(72,110,140,0.22)]">
                    <div className="absolute inset-[12%] overflow-hidden rounded-[2rem] border border-[#b35d4c]/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,244,237,0.92)_100%)] p-8 shadow-[0_20px_48px_rgba(72,110,140,0.12)] transition duration-500 group-hover:scale-[1.01]">
                      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80" />
                      <span className="eyebrow">
                        {page.navLabel}
                      </span>
                      <p className="mt-6 text-lg leading-8 text-slate-700">{page.heroPanelText}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className={`relative z-10 ${heroPanelPositionClassName}`}>
                <div className="interactive-card group relative overflow-hidden rounded-[2.2rem] p-8 sm:p-10">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(236,248,255,0.92)_100%)]" />
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                  <div className="relative max-w-3xl space-y-8">
                    <span className={heroEyebrowClassName}>
                      {page.heroEyebrow}
                    </span>
                    <div className="space-y-5">
                      <h1 className={heroTitleClassName}>
                        {page.title}
                      </h1>
                      <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                        {page.intro}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {page.sections.map(section => (
                        <Link
                          key={section.id}
                          to={section.to}
                          className="hover-chip group inline-flex items-center gap-3"
                        >
                          {section.navLabel}
                          <span className="transition duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                      ))}
                    </div>

                    <div className="rounded-[1.55rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.86)] p-6 shadow-[0_18px_36px_rgba(72,110,140,0.1)] transition duration-500 group-hover:translate-x-2">
                      <div className="mb-4 h-1 w-24 rounded-full bg-[linear-gradient(90deg,#87c3e3,#c8715f)]" />
                      <p className="text-lg leading-8 text-slate-700">{page.heroPanelText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`section-shell ${isSciencePage ? 'mt-10' : 'mt-12'} grid gap-6 md:grid-cols-3`}>
          {page.highlights.map((highlight, index) => (
            <article
              key={highlight.title}
              className="interactive-card reveal-ready group relative flex h-full flex-col overflow-hidden p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-70 transition duration-500 group-hover:h-2" />
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3eb] text-sm font-bold text-[#b35d4c] transition duration-500 group-hover:scale-110 group-hover:bg-[#c8715f] group-hover:text-white">
                0{index + 1}
              </div>
              <h2 className="max-w-[14rem] text-balance text-2xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                {highlight.title}
              </h2>
              <p className="mt-4 flex-1 leading-8 text-slate-700">{highlight.description}</p>
            </article>
          ))}
        </div>

        <div className={`section-shell ${isSciencePage ? 'mt-10' : 'mt-12'}`}>
          <div className="reveal-ready mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              {ctaCopy.exploreGrid}
            </span>
            <p className="mt-5 text-lg leading-8 text-slate-700">{ctaCopy.exploreGridIntro}</p>
          </div>

          <div className={`grid lg:grid-cols-3 ${isSciencePage ? 'mt-8 gap-5' : 'mt-10 gap-6'}`}>
            {page.sections.map(section => (
              <Link
                key={section.to}
                to={section.to}
                className="interactive-card reveal-ready group flex h-full flex-col overflow-hidden p-7 hover:translate-x-2"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b35d4c]">
                  {section.eyebrow}
                </span>
                <h2 className="mt-4 text-balance text-2xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                  {section.navLabel}
                </h2>
                <p className="mt-4 flex-1 leading-8 text-slate-700">{section.description[0]}</p>
                <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#b35d4c] transition duration-300 group-hover:translate-x-1">
                  {ctaCopy.openArticle}
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {page.showcases && (
        <section className={`${sectionBandClassName} bg-[#dff2ff]`}>
          <div className="section-shell">
            <div className="reveal-ready mx-auto max-w-4xl text-center">
              <span className="eyebrow">
                {page.showcases.eyebrow}
              </span>
              <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">
                {page.showcases.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                {page.showcases.description}
              </p>
            </div>

            <div className={`grid lg:grid-cols-3 ${isSciencePage ? 'mt-10 gap-5' : 'mt-12 gap-6'}`}>
              {page.showcases.items.map(item => (
                <article
                  key={item.title}
                  className="interactive-card reveal-ready group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden rounded-t-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(224,243,255,0.94))] p-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${
                        item.imageMode === 'cover'
                          ? 'rounded-[1.1rem] object-cover object-center'
                          : 'object-contain'
                      }`}
                    />
                    {item.imageMode === 'cover' && (
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(18,46,76,0.42)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    )}
                    <span className="absolute left-5 top-5 rounded-full border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_10px_24px_rgba(72,110,140,0.12)]">
                      {item.label}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-balance text-2xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-8 text-slate-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.process && (
        <section className={sectionBandClassName}>
          <div className="section-shell">
            <div
              className={`reveal-ready grid lg:grid-cols-[0.82fr_1.18fr] lg:items-start ${
                isSciencePage ? 'gap-6' : 'gap-8'
              }`}
            >
              <div className="space-y-5">
                <span className="eyebrow">
                  {page.process.eyebrow}
                </span>
                <h2 className="text-4xl text-slate-800 sm:text-5xl">{page.process.title}</h2>
                <p className="text-lg leading-8 text-slate-700">{page.process.description}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {page.process.items.map(item => (
                  <article
                    key={item.step}
                    className="interactive-card reveal-ready group relative flex h-full flex-col overflow-hidden p-6"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b35d4c]">
                      {item.step}
                    </span>
                    <h3 className="mt-4 text-balance text-2xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 leading-8 text-slate-700">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {page.gallery && (
        <section className="section-band bg-[#d7eefc]">
          <div className="section-shell">
            <div className="reveal-ready mx-auto max-w-4xl text-center">
              <span className="eyebrow">
                {page.gallery.eyebrow}
              </span>
              <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">{page.gallery.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{page.gallery.description}</p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {page.gallery.items.map(item => (
                <article
                  key={item.title}
                  className="interactive-card reveal-ready group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden rounded-t-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-balance text-2xl text-slate-800">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#b35d4c]">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 flex-1 leading-8 text-slate-700">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.sections.map((section, index) => {
        const reverse = index % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.id}
            className={`${sectionBandClassName} ${index % 2 === 1 ? 'bg-[#dff2ff]' : ''}`}
          >
            <div
              className={`section-shell grid lg:grid-cols-[0.98fr_1.02fr] lg:items-start ${
                isSciencePage ? 'gap-6' : 'gap-8'
              }`}
            >
              <div className={`${reverse ? 'slide-ready-right lg:order-2' : 'slide-ready-left'} space-y-5`}>
                <span className="eyebrow">
                  {section.eyebrow}
                </span>
                <h2 className="text-balance text-4xl text-slate-800 sm:text-5xl">{section.title}</h2>
                <div className="space-y-5 text-lg leading-8 text-slate-700">
                  {section.description.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className={`${reverse ? 'slide-ready-left lg:order-1' : 'slide-ready-right'}`}>
                <div
                  className={`interactive-card group relative flex h-full flex-col overflow-hidden p-8 ${
                    reverse ? 'hover:-translate-x-2' : 'hover:translate-x-2'
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                  <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.35)_48%,transparent_72%)] opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
                  <h3 className="text-balance text-2xl text-slate-800">{section.sideTitle}</h3>
                  <div className="mt-6 space-y-4">
                    {section.sideItems.map(item => (
                      <div key={item} className="flex items-start gap-4">
                        <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#c8715f] shadow-[0_0_0_8px_rgba(200,113,95,0.12)] transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_0_11px_rgba(200,113,95,0.18)]" />
                        <p
                          className={`leading-7 text-slate-700 transition duration-300 ${
                            reverse ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                          }`}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  {section.note && (
                    <div className="mt-8 rounded-[1.3rem] border border-[#b35d4c]/22 bg-[#fff5ef]/82 p-5 text-sm leading-7 text-slate-700">
                      {section.note}
                    </div>
                  )}
                  <Link
                    to={section.to}
                    className={`mt-auto pt-8 inline-flex items-center gap-2 hover-chip ${
                      reverse ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                    }`}
                  >
                    {ctaCopy.readMore}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className={`${sectionBandClassName} pt-2`}>
        <div className="section-shell">
          <div className="interactive-card reveal-ready relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(231,246,255,0.92)_100%)]" />
            <div className="relative">
              <span className="eyebrow">
                {ctaCopy.closing}
              </span>
              <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">{page.closing.title}</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
                {page.closing.description}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {page.closing.points.map(point => (
                  <div
                    key={point}
                    className="rounded-[1.3rem] border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.9)] p-5 text-base leading-7 text-slate-700 shadow-[0_12px_28px_rgba(72,110,140,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(72,110,140,0.12)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/#contact"
                  className="inline-flex items-center rounded-full bg-[#c8715f] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(168,88,69,0.24)] transition hover:bg-[#b86250]"
                >
                  {ctaCopy.contact}
                </Link>
                <Link to="/" className="hover-chip">
                  {ctaCopy.home}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TopicPage;

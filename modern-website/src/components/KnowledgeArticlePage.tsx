import React from 'react';
import { Link } from 'react-router-dom';
import type { KnowledgeArticle } from '../content/knowledgeArticles';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';

type KnowledgeArticlePageProps = {
  article: KnowledgeArticle;
  relatedArticles: KnowledgeArticle[];
  siblingArticles: KnowledgeArticle[];
};

/**
 * Editorial route layout for the deeper knowledge articles.
 */
const KnowledgeArticlePage: React.FC<KnowledgeArticlePageProps> = ({
  article,
  relatedArticles,
  siblingArticles
}) => {
  const { locale } = useLocale();
  useScrollReveal('.reveal-ready, .slide-ready-left, .slide-ready-right', 'reveal', 0.18);

  const copy =
    locale === 'de'
      ? {
          keyPoints: 'Kernpunkte',
          details: 'Vertiefung',
          exploreArea: 'Weitere Wege in diesem Bereich',
          exploreRelated: 'Weiter vertiefen',
          blockLabel: 'Kapitel',
          backToHub: 'Zur Übersicht',
          contact: 'Kontakt',
          home: 'Startseite',
          relatedIntro:
            'Jede Vertiefung führt denselben Themenkreis aus einer anderen Perspektive weiter.'
        }
      : {
          keyPoints: 'Key Points',
          details: 'In Detail',
          exploreArea: 'More paths in this area',
          exploreRelated: 'Continue exploring',
          blockLabel: 'Chapter',
          backToHub: 'Back to section',
          contact: 'Contact',
          home: 'Home',
          relatedIntro:
            'Each of these pages extends the same field of ideas from a different angle.'
        };

  const heroImageClasses =
    article.heroImageMode === 'contain'
      ? 'h-[24rem] w-full rounded-[1.6rem] object-contain bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(225,243,255,0.92))] p-6 sm:h-[29rem]'
      : 'h-[24rem] w-full rounded-[1.6rem] object-cover object-center transition duration-700 group-hover:scale-[1.04] sm:h-[29rem]';
  const heroImageLeft =
    article.hubRoute === '/kundalini-energiesystem' ||
    article.hubRoute === '/kultur-des-geistes';
  const isCompactCenteredHero =
    article.route === '/kundalini-energiesystem/chakren-und-qualitaeten' ||
    article.route === '/kundalini-energiesystem/kundalini';
  const heroGridClassName = 'grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start';
  const heroPanelPositionClassName = heroImageLeft
    ? 'relative z-10 slide-ready-right lg:mt-8'
    : 'relative z-10 slide-ready-left lg:mt-8 lg:order-1';
  const heroEyebrowClassName = isCompactCenteredHero
    ? 'inline-flex items-center rounded-full border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.94)] px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-[#b35d4c] shadow-[0_12px_28px_rgba(146,92,79,0.08)]'
    : 'eyebrow';
  const heroTitleClassName = isCompactCenteredHero
    ? 'text-balance text-[1.55rem] text-slate-800 transition duration-300 group-hover:translate-x-1 sm:text-[1.9rem] lg:text-[2.15rem]'
    : 'text-balance text-[2.05rem] text-slate-800 transition duration-300 group-hover:translate-x-1 sm:text-[2.55rem] lg:text-[3.05rem]';
  const heroIntroClassName = isCompactCenteredHero
    ? 'mx-auto max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7'
    : 'max-w-2xl text-base leading-7 text-slate-700 sm:text-lg';
  const heroContentClassName = isCompactCenteredHero
    ? 'relative mx-auto max-w-3xl space-y-6 text-center'
    : 'relative max-w-3xl space-y-7';
  const heroTagsClassName = isCompactCenteredHero
    ? 'flex flex-wrap justify-center gap-3'
    : 'flex flex-wrap gap-3';
  const heroActionBoxClassName = isCompactCenteredHero
    ? 'rounded-[1.55rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.86)] p-6 text-center shadow-[0_18px_36px_rgba(72,110,140,0.1)] transition duration-500 group-hover:translate-y-1'
    : 'rounded-[1.55rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.86)] p-6 shadow-[0_18px_36px_rgba(72,110,140,0.1)] transition duration-500 group-hover:translate-x-2';
  const heroActionLinksClassName = isCompactCenteredHero
    ? 'flex flex-wrap justify-center gap-3'
    : 'flex flex-wrap gap-3';

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#edf9ff_48%,#dff2ff_100%)]">
      <section className="relative overflow-hidden pb-14 pt-16 sm:pb-18">
        <div
          aria-hidden="true"
          className="animate-glow-pulse absolute left-[-9rem] top-[-6rem] h-80 w-80 rounded-full bg-sky-200/75 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-soft absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-100/80 blur-3xl"
        />

        <div className="section-shell relative">
          <div className={heroGridClassName}>
            <div
              className={`relative ${heroImageLeft ? 'slide-ready-left' : 'slide-ready-right lg:order-2'}`}
            >
              <div
                aria-hidden="true"
                className="animate-glow-pulse absolute inset-x-6 top-3 h-[88%] rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(104,168,205,0.24),transparent_70%)] blur-2xl"
              />
              <div className="group relative mx-auto max-w-[42rem] overflow-hidden rounded-[2.3rem] border border-[#b35d4c]/26 bg-white/75 p-4 shadow-[0_28px_70px_rgba(72,110,140,0.18)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(72,110,140,0.24)]">
                <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent_22%,rgba(255,255,255,0.4)_45%,transparent_72%)] opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
                <img src={article.heroImage} alt={article.heroImageAlt} className={heroImageClasses} />

                {article.heroTags[0] && (
                  <div className="animate-float-soft absolute left-7 top-7 rounded-full border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_16px_36px_rgba(72,110,140,0.12)]">
                    {article.heroTags[0]}
                  </div>
                )}
                {article.heroTags[1] && (
                  <div className="animate-float-soft absolute right-7 top-16 rounded-full border border-[#b35d4c]/28 bg-[#fff7f3]/92 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_16px_36px_rgba(72,110,140,0.12)] [animation-delay:1.2s]">
                    {article.heroTags[1]}
                  </div>
                )}

                <div
                  className={
                    isCompactCenteredHero
                      ? 'mx-auto mt-5 max-w-2xl rounded-[1.3rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.96)] px-5 py-4 text-center shadow-[0_14px_32px_rgba(72,110,140,0.1)]'
                      : 'absolute inset-x-8 bottom-8 max-w-lg rounded-[1.4rem] border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] p-5 shadow-[0_18px_40px_rgba(72,110,140,0.14)] backdrop-blur'
                  }
                >
                  <p
                    className={
                      isCompactCenteredHero
                        ? 'text-sm leading-6 text-slate-700 sm:text-[0.95rem]'
                        : 'text-base leading-7 text-slate-700 sm:text-lg'
                    }
                  >
                    {article.heroCaption}
                  </p>
                </div>
              </div>
            </div>

            <div className={heroPanelPositionClassName}>
              <div className="interactive-card group relative overflow-hidden rounded-[2.2rem] p-8 sm:p-10">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(236,248,255,0.92)_100%)]" />
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                <div className={heroContentClassName}>
                  <span className={heroEyebrowClassName}>
                    {article.eyebrow}
                  </span>
                  <div className="space-y-5">
                    <h1 className={heroTitleClassName}>
                      {article.title}
                    </h1>
                    <p className={heroIntroClassName}>
                      {article.intro}
                    </p>
                  </div>

                  <div className={heroTagsClassName}>
                    {article.heroTags.map(tag => (
                      <span
                        key={tag}
                        className="hover-chip cursor-default bg-[rgba(255,250,246,0.92)] text-[#b35d4c] hover:translate-y-0 hover:bg-[rgba(255,250,246,0.92)] hover:text-[#b35d4c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={heroActionBoxClassName}>
                    <div className="mb-4 h-1 w-24 rounded-full bg-[linear-gradient(90deg,#87c3e3,#c8715f)]" />
                    <div className={heroActionLinksClassName}>
                      <Link
                        to={article.hubRoute}
                        className="inline-flex items-center rounded-full bg-[#c8715f] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(168,88,69,0.24)] transition hover:bg-[#b86250]"
                      >
                        {copy.backToHub}
                      </Link>
                      <Link to="/#contact" className="hover-chip">
                        {copy.contact}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band pt-0">
        <div className="section-shell grid gap-7 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="reveal-ready space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="interactive-card overflow-hidden p-7">
              <div className="mb-5 h-1 w-24 rounded-full bg-[linear-gradient(90deg,#87c3e3,#c8715f)]" />
              <span className="eyebrow">
                {copy.keyPoints}
              </span>
              <div className="mt-6 space-y-4">
                {article.keyPoints.map(point => (
                  <div key={point} className="flex items-start gap-4">
                    <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#c8715f] shadow-[0_0_0_8px_rgba(200,113,95,0.12)]" />
                    <p className="leading-7 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {siblingArticles.length > 0 && (
              <div className="interactive-card overflow-hidden p-7">
                <span className="eyebrow">
                  {copy.exploreArea}
                </span>
                <div className="mt-6 grid gap-3">
                  {siblingArticles.map(item => (
                    <Link
                      key={item.route}
                      to={item.route}
                      className="flex min-h-[3.4rem] items-center rounded-[1.15rem] border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.88)] px-4 py-4 text-sm font-semibold leading-snug text-slate-700 shadow-[0_12px_28px_rgba(72,110,140,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#b35d4c]/40 hover:text-[#b35d4c]"
                    >
                      {item.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <div className="space-y-6">
            {article.blocks.map((block, index) => (
              <article
                key={block.title}
                className="interactive-card reveal-ready group relative overflow-hidden p-7 sm:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
                  <div className={`space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b35d4c]">
                      {copy.blockLabel} 0{index + 1}
                    </span>
                    <h2 className="text-balance text-3xl text-slate-800 sm:text-[2.15rem]">{block.title}</h2>
                    <div className="space-y-5 text-lg leading-8 text-slate-700">
                      {block.paragraphs.map(paragraph => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className={`flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div
                      className={`w-full rounded-[1.5rem] border border-[#b35d4c]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,244,237,0.94)_100%)] p-6 shadow-[0_16px_36px_rgba(72,110,140,0.08)] transition duration-500 group-hover:-translate-y-1 ${
                        index % 2 === 1 ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'
                      }`}
                    >
                      {block.points?.length ? (
                        <div className="space-y-4">
                          {block.points.map(point => (
                            <div key={point} className="flex items-start gap-3">
                              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8715f] shadow-[0_0_0_8px_rgba(200,113,95,0.15)]" />
                              <p className="leading-7 text-slate-700">{point}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <span className="eyebrow">
                            {article.navLabel}
                          </span>
                          <p className="text-base leading-7 text-slate-700">{article.heroCaption}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {article.details && (
        <section className="section-band bg-[#dff2ff] pt-0">
          <div className="section-shell">
            <div className="reveal-ready mx-auto max-w-4xl text-center">
              <span className="eyebrow">
                {article.details.eyebrow}
              </span>
              <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">{article.details.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{article.details.description}</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {article.details.items.map(item => (
                <article
                  key={`${item.title}-${item.subtitle}`}
                  className="interactive-card reveal-ready group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden rounded-t-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(224,243,255,0.92))] p-4">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full transition duration-700 group-hover:scale-[1.06] ${
                        item.imageMode === 'contain'
                          ? 'object-contain'
                          : 'object-cover object-center'
                      }`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col space-y-3 p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b35d4c]">
                      {item.subtitle}
                    </span>
                    <h3 className="text-balance text-2xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="flex-1 leading-8 text-slate-700">{item.description}</p>
                    {item.note && (
                      <p className="rounded-[1rem] border border-[#b35d4c]/22 bg-[#fff5ef]/82 px-4 py-3 text-sm leading-7 text-slate-700">
                        {item.note}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-band bg-[#dff2ff]">
        <div className="section-shell">
          <div className="reveal-ready mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              {copy.exploreRelated}
            </span>
            <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">{article.navLabel}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{copy.relatedIntro}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedArticles.map(item => (
              <Link
                key={item.route}
                to={item.route}
                className="interactive-card reveal-ready group flex h-full flex-col overflow-hidden p-7 hover:translate-x-2"
              >
                <div className="relative overflow-hidden rounded-[1.35rem] border border-[#b35d4c]/28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,244,237,0.92))] p-4">
                  <img
                    src={item.heroImage}
                    alt={item.heroImageAlt}
                    className={`w-full rounded-[1rem] transition duration-700 group-hover:scale-[1.04] ${
                      item.heroImageMode === 'contain'
                        ? 'h-52 object-contain'
                        : 'h-52 object-cover object-center'
                    }`}
                  />
                </div>
                <div className="mt-6 flex flex-1 flex-col space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b35d4c]">
                    {item.eyebrow}
                  </span>
                  <h3 className="text-balance text-2xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                    {item.navLabel}
                  </h3>
                  <p className="flex-1 leading-8 text-slate-700">{item.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band pt-0">
        <div className="section-shell">
          <div className="interactive-card reveal-ready relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(231,246,255,0.92)_100%)]" />
            <div className="relative">
              <span className="eyebrow">
                {copy.exploreRelated}
              </span>
              <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">{article.title}</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
                {article.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={article.hubRoute}
                  className="inline-flex items-center rounded-full bg-[#c8715f] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(168,88,69,0.24)] transition hover:bg-[#b86250]"
                >
                  {copy.backToHub}
                </Link>
                <Link to="/" className="hover-chip">
                  {copy.home}
                </Link>
                <Link to="/#contact" className="hover-chip">
                  {copy.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KnowledgeArticlePage;

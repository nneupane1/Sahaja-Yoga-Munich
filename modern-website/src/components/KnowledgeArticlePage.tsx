import React from 'react';
import { Link } from 'react-router-dom';
import type { KnowledgeArticle } from '../content/knowledgeArticles';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';
import motherImg from '../assets/mother.jpg';
import mother1Img from '../assets/mother1.jpg';
import mother3Img from '../assets/mother3.png';
import beeImg from '../assets/bee.png';
import lotusImg from '../assets/lotus.png';
import villageImg from '../assets/village.jpg';

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

  const isThoughtlessStillnessPage = article.route === '/selbstverwirklichung-meditation/gedankenfreie-stille';
  const isChannelsBalancePage = article.route === '/kundalini-energiesystem/kanaele-und-balance';
  const isKundaliniArticlePage = article.route === '/kundalini-energiesystem/kundalini';
  const useBalancedKundaliniHero = isChannelsBalancePage || isKundaliniArticlePage;
  const heroImageClasses =
    article.heroImageMode === 'contain'
      ? isThoughtlessStillnessPage
        ? 'h-[18rem] w-full rounded-[1.6rem] object-contain bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(225,243,255,0.92))] p-3 scale-[1.02] sm:h-[22rem] sm:scale-[1.03] lg:h-[29rem] lg:scale-[1.04]'
        : isChannelsBalancePage
          ? 'h-[20rem] w-full rounded-[1.6rem] object-contain p-1 scale-[1.08] sm:h-[24rem] sm:p-1.5 sm:scale-[1.09] lg:h-[29rem] lg:p-2 lg:scale-[1.1]'
        : isKundaliniArticlePage
          ? 'h-[20rem] w-full rounded-[1.6rem] object-contain p-1 scale-[1.06] sm:h-[24rem] sm:p-1.5 sm:scale-[1.07] lg:h-[29rem] lg:p-2 lg:scale-[1.08]'
        : 'h-[18rem] w-full rounded-[1.6rem] object-contain bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(225,243,255,0.92))] p-4 sm:h-[22rem] sm:p-5 lg:h-[29rem] lg:p-6'
      : 'h-[20rem] w-full rounded-[1.6rem] object-cover object-center transition duration-700 group-hover:scale-[1.04] sm:h-[24rem] lg:h-[29rem]';
  const heroImageSurfaceClassName =
    article.heroImageMode === 'contain'
      ? useBalancedKundaliniHero
        ? 'rounded-[1.72rem] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,246,238,0.96))]'
        : 'rounded-[1.6rem]'
      : 'rounded-[1.6rem]';
  const forceImageRight =
    article.route === '/kundalini-energiesystem/kanaele-und-balance' ||
    article.route === '/kundalini-energiesystem/kundalini' ||
    article.route === '/kundalini-energiesystem/chakren-und-qualitaeten';
  const heroImageLeft =
    forceImageRight
      ? false
      : article.hubRoute === '/kundalini-energiesystem' ||
        article.hubRoute === '/kultur-des-geistes';
  const isCompactCenteredHero =
    article.route === '/kundalini-energiesystem/chakren-und-qualitaeten' ||
    article.route === '/kundalini-energiesystem/kundalini';
  const hideFloatingHeroTags =
    useBalancedKundaliniHero ||
    article.route === '/selbstverwirklichung-meditation/selbstverwirklichung' ||
    article.route === '/selbstverwirklichung-meditation/gedankenfreie-stille' ||
    article.route === '/selbstverwirklichung-meditation/meditationspraxis';
  const showCaptionBelowHeroImage =
    useBalancedKundaliniHero ||
    article.route === '/selbstverwirklichung-meditation/selbstverwirklichung' ||
    article.route === '/selbstverwirklichung-meditation/meditationspraxis' ||
    article.route === '/selbstverwirklichung-meditation/gedankenfreie-stille';
  const useTwoUpChannelBlocks =
    article.route === '/kundalini-energiesystem/kanaele-und-balance' ||
    article.route === '/kundalini-energiesystem/chakren-und-qualitaeten' ||
    article.route === '/wissenschaft-spiritualitaet/gesundheit-und-forschung';
  const useThreeUpFeatureBlocks =
    article.route === '/kundalini-energiesystem/kundalini' ||
    article.route === '/selbstverwirklichung-meditation/selbstverwirklichung' ||
    article.route === '/selbstverwirklichung-meditation/gedankenfreie-stille' ||
    article.route === '/selbstverwirklichung-meditation/meditationspraxis';
  const heroGridClassName = 'grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start';
  const heroPanelPositionClassName = useBalancedKundaliniHero
    ? 'relative z-10 slide-ready-left lg:order-1'
    : heroImageLeft
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
  const useSquareMeditationDetails =
    article.route === '/selbstverwirklichung-meditation/gedankenfreie-stille' ||
    article.route === '/selbstverwirklichung-meditation/meditationspraxis';
  const detailsGridClassName =
    article.route === '/kundalini-energiesystem/kundalini' ||
    article.route === '/selbstverwirklichung-meditation/selbstverwirklichung' ||
    article.route === '/kundalini-energiesystem/kanaele-und-balance' ||
    useSquareMeditationDetails
      ? 'mt-10 grid gap-6 lg:grid-cols-3'
      : 'mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4';
  const detailsShellClassName =
    article.route === '/kundalini-energiesystem/kundalini' ||
    article.route === '/selbstverwirklichung-meditation/selbstverwirklichung' ||
    article.route === '/kundalini-energiesystem/kanaele-und-balance' ||
    useSquareMeditationDetails
      ? 'section-shell max-w-[96rem]'
      : 'section-shell';
  const useSplitBlockLayout = useThreeUpFeatureBlocks || useTwoUpChannelBlocks;
  const leadingBlocks = useSplitBlockLayout ? article.blocks.slice(0, 1) : article.blocks;
  const trailingBlocks = useSplitBlockLayout ? article.blocks.slice(1) : [];
  const placeholderRelatedImageMap: Record<string, string[]> = {
    '/kultur-des-geistes/kreativitaet': [lotusImg, beeImg, villageImg],
    '/wissenschaft-spiritualitaet/integration-und-entwicklung': [mother1Img, mother3Img, lotusImg],
    '/wissenschaft-spiritualitaet/gesundheit-und-forschung': [motherImg, mother3Img, lotusImg]
  };
  const placeholderRelatedImages = placeholderRelatedImageMap[article.route];
  const usePlaceholderRelatedImages = Boolean(placeholderRelatedImages);

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
                <div className={heroImageSurfaceClassName}>
                  <img src={article.heroImage} alt={article.heroImageAlt} className={heroImageClasses} />
                </div>

                {!hideFloatingHeroTags && article.heroTags[0] && (
                  <div className="animate-float-soft absolute left-7 top-7 hidden rounded-full border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_16px_36px_rgba(72,110,140,0.12)] md:block">
                    {article.heroTags[0]}
                  </div>
                )}
                {!hideFloatingHeroTags && article.heroTags[1] && (
                  <div className="animate-float-soft absolute right-7 top-16 hidden rounded-full border border-[#b35d4c]/28 bg-[#fff7f3]/92 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b35d4c] shadow-[0_16px_36px_rgba(72,110,140,0.12)] [animation-delay:1.2s] md:block">
                    {article.heroTags[1]}
                  </div>
                )}

                <div
                  className={
                    isCompactCenteredHero || showCaptionBelowHeroImage
                      ? 'mx-auto mt-5 max-w-2xl rounded-[1.3rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.96)] px-5 py-4 text-center shadow-[0_14px_32px_rgba(72,110,140,0.1)]'
                      : 'absolute inset-x-8 bottom-8 max-w-lg rounded-[1.4rem] border border-[#b35d4c]/28 bg-[rgba(255,250,246,0.92)] p-5 shadow-[0_18px_40px_rgba(72,110,140,0.14)] backdrop-blur'
                  }
                >
                  <p
                    className={
                      isCompactCenteredHero || showCaptionBelowHeroImage
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
            {leadingBlocks.map((block, index) => {
              const hasSupportColumn = Boolean(block.points?.length);
              const showInlineSupport = !hasSupportColumn;

              return (
                <article
                  key={block.title}
                  className="interactive-card reveal-ready group relative overflow-hidden p-7 sm:p-8"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                  <div className={hasSupportColumn ? 'grid gap-6 lg:grid-cols-[1.18fr_0.82fr]' : 'grid gap-4'}>
                    <div className={`space-y-5 ${hasSupportColumn && index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b35d4c]">
                        {copy.blockLabel} 0{index + 1}
                      </span>
                      <h2 className="text-balance text-3xl text-slate-800 sm:text-[2.15rem]">{block.title}</h2>
                      <div className="space-y-5 text-lg leading-8 text-slate-700">
                        {block.paragraphs.map(paragraph => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {showInlineSupport && (
                        <div className="rounded-[1.35rem] border border-[#b35d4c]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,244,237,0.92)_100%)] p-5 shadow-[0_14px_30px_rgba(72,110,140,0.07)]">
                          <span className="eyebrow">
                            {article.navLabel}
                          </span>
                          <p className="mt-3 text-base leading-7 text-slate-700">{article.heroCaption}</p>
                        </div>
                      )}
                    </div>

                    {hasSupportColumn && (
                      <div className={`flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div
                          className={`w-full rounded-[1.5rem] border border-[#b35d4c]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,244,237,0.94)_100%)] p-6 shadow-[0_16px_36px_rgba(72,110,140,0.08)] transition duration-500 group-hover:-translate-y-1 ${
                            index % 2 === 1 ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'
                          }`}
                        >
                          <div className="space-y-4">
                            {block.points?.map(point => (
                              <div key={point} className="flex items-start gap-3">
                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8715f] shadow-[0_0_0_8px_rgba(200,113,95,0.15)]" />
                                <p className="leading-7 text-slate-700">{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {useThreeUpFeatureBlocks && trailingBlocks.length > 0 && (
          <div className="section-shell mt-6 max-w-[96rem]">
            <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
              {trailingBlocks.map((block, trailingIndex) => {
                const index = trailingIndex + 1;
                const showInlineSupport = !block.points?.length;

                return (
                  <article
                    key={block.title}
                    className="interactive-card reveal-ready group relative h-full overflow-hidden p-6 sm:p-7"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                    <div className="flex h-full flex-col space-y-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b35d4c]">
                        {copy.blockLabel} 0{index + 1}
                      </span>
                      <h2 className="text-balance text-[1.48rem] leading-snug text-slate-800 sm:text-[1.68rem]">
                        {block.title}
                      </h2>
                      <div className="space-y-4 text-[0.95rem] leading-7 text-slate-700">
                        {block.paragraphs.map(paragraph => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {block.points?.length ? (
                        <div className="mt-auto rounded-[1.3rem] border border-[#b35d4c]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,244,237,0.94)_100%)] p-4 shadow-[0_14px_30px_rgba(72,110,140,0.07)]">
                          <div className="space-y-3">
                            {block.points.map(point => (
                              <div key={point} className="flex items-start gap-3">
                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8715f] shadow-[0_0_0_8px_rgba(200,113,95,0.15)]" />
                                <p className="text-[0.9rem] leading-6 text-slate-700">{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : showInlineSupport ? (
                        <div className="mt-auto rounded-[1.3rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.72)] px-4 py-3 text-[0.9rem] leading-6 text-slate-600">
                          {article.heroCaption}
                        </div>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {useTwoUpChannelBlocks && trailingBlocks.length > 0 && (
          <div className="section-shell mt-6 max-w-[96rem]">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              {trailingBlocks.map((block, trailingIndex) => {
                const index = trailingIndex + 1;
                const hasSupportColumn = Boolean(block.points?.length);
                const showInlineSupport = !hasSupportColumn;

                return (
                  <article
                    key={block.title}
                    className="interactive-card reveal-ready group relative overflow-hidden p-7 sm:p-8"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-80 transition duration-500 group-hover:h-2" />
                    <div className={hasSupportColumn ? 'grid gap-6 lg:grid-cols-[1.18fr_0.82fr]' : 'grid gap-4'}>
                      <div className={`space-y-5 ${hasSupportColumn && index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b35d4c]">
                          {copy.blockLabel} 0{index + 1}
                        </span>
                        <h2 className="text-balance text-3xl text-slate-800 sm:text-[2.15rem]">{block.title}</h2>
                        <div className="space-y-5 text-lg leading-8 text-slate-700">
                          {block.paragraphs.map(paragraph => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        {showInlineSupport && (
                          <div className="rounded-[1.35rem] border border-[#b35d4c]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,244,237,0.92)_100%)] p-5 shadow-[0_14px_30px_rgba(72,110,140,0.07)]">
                            <span className="eyebrow">
                              {article.navLabel}
                            </span>
                            <p className="mt-3 text-base leading-7 text-slate-700">{article.heroCaption}</p>
                          </div>
                        )}
                      </div>

                      {hasSupportColumn && (
                        <div className={`flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                          <div
                            className={`w-full rounded-[1.5rem] border border-[#b35d4c]/22 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(255,244,237,0.94)_100%)] p-6 shadow-[0_16px_36px_rgba(72,110,140,0.08)] transition duration-500 group-hover:-translate-y-1 ${
                              index % 2 === 1 ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'
                            }`}
                          >
                            <div className="space-y-4">
                              {block.points?.map(point => (
                                <div key={point} className="flex items-start gap-3">
                                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#c8715f] shadow-[0_0_0_8px_rgba(200,113,95,0.15)]" />
                                  <p className="leading-7 text-slate-700">{point}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {article.details && (
        <section className="section-band bg-[#dff2ff] pt-0">
          <div className={detailsShellClassName}>
            <div className="reveal-ready mx-auto max-w-4xl text-center">
              <span className="eyebrow">
                {article.details.eyebrow}
              </span>
              <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">{article.details.title}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">{article.details.description}</p>
            </div>

            <div className={detailsGridClassName}>
              {article.details.items.map(item => {
                const usesFlipHover = Boolean(item.hoverBackgroundImage);
                const detailImage = (
                  <div
                    className={`relative overflow-hidden rounded-t-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(224,243,255,0.92))] p-4 ${
                      useSquareMeditationDetails ? 'h-40' : 'h-52'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className={`h-full w-full transition duration-700 group-hover:scale-[1.06] ${
                        item.imageMode === 'contain'
                          ? 'rounded-[1.1rem] object-contain'
                          : 'rounded-[1.1rem] object-cover object-center'
                      }`}
                    />
                  </div>
                );
                const detailCopy = (
                  <div className={`flex flex-1 flex-col space-y-3 ${useSquareMeditationDetails ? 'p-5' : 'p-6'}`}>
                    <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b35d4c]">
                      {item.subtitle}
                    </span>
                    <h3 className="text-balance text-[1.65rem] text-slate-800 transition duration-300 group-hover:translate-x-1">
                      {item.title}
                    </h3>
                    <p className="flex-1 text-[0.97rem] leading-7 text-slate-700">{item.description}</p>
                    {item.note && (
                      <p className="rounded-[1rem] border border-[#b35d4c]/22 bg-[#fff5ef]/82 px-4 py-3 text-[0.9rem] leading-6 text-slate-700">
                        {item.note}
                      </p>
                    )}
                  </div>
                );

                return (
                  <article
                    key={`${item.title}-${item.subtitle}`}
                    className={`interactive-card reveal-ready group ${
                      usesFlipHover
                        ? 'isolate min-h-[31rem] overflow-hidden [perspective:1600px] hover:z-20'
                        : `flex h-full flex-col overflow-hidden ${useSquareMeditationDetails ? 'lg:h-[32rem]' : ''}`
                    }`}
                  >
                    {usesFlipHover ? (
                      <div className="relative h-full min-h-[31rem] transform-gpu">
                        <div className="relative h-full min-h-[31rem] transform-gpu [transform-style:preserve-3d] [transform:rotateY(0deg)] transition duration-700 [will-change:transform] group-hover:[transform:rotateY(180deg)]">
                          <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,248,244,0.88))] transform-gpu [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
                            <div className="relative h-56 overflow-hidden rounded-t-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-4">
                              <img
                                src={item.image}
                                alt={item.alt}
                                className="h-full w-full rounded-[1.1rem] object-contain transition duration-700 group-hover:scale-[1.08]"
                              />
                            </div>
                            <div className="relative flex flex-1 flex-col p-6">
                              <h3 className="text-balance text-2xl text-slate-800">{item.title}</h3>
                              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#b35d4c]">
                                {item.subtitle}
                              </p>
                              <p className="mt-3 flex-1 leading-8 text-slate-700">{item.description}</p>
                            </div>
                          </div>

                          <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,248,244,0.88))] transform-gpu [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <div className={`absolute inset-0 ${item.hoverBackgroundFrameClassName ?? ''}`}>
                              <img
                                src={item.hoverBackgroundImage}
                                alt=""
                                aria-hidden="true"
                                className={`h-full w-full ${
                                  item.hoverBackgroundImageMode === 'contain'
                                    ? 'object-contain'
                                    : 'object-cover object-center'
                                } transition duration-700 ${
                                  item.hoverBackgroundImageClassName ?? 'scale-[0.92] group-hover:scale-[0.96]'
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {detailImage}
                        {detailCopy}
                      </>
                    )}
                  </article>
                );
              })}
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
            {relatedArticles.map((item, index) => (
              (() => {
                const useContainPlaceholder =
                  article.route === '/wissenschaft-spiritualitaet/gesundheit-und-forschung' &&
                  index < 2;

                return (
                  <Link
                    key={item.route}
                    to={item.route}
                    className="interactive-card reveal-ready group flex h-full flex-col overflow-hidden p-7 hover:translate-x-2"
                  >
                    <div className="relative overflow-hidden rounded-[1.35rem] border border-[#b35d4c]/28 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(255,244,237,0.92))] p-4">
                      <img
                        src={usePlaceholderRelatedImages ? placeholderRelatedImages[index] ?? item.heroImage : item.heroImage}
                        alt={item.heroImageAlt}
                        className={`w-full rounded-[1rem] transition duration-700 group-hover:scale-[1.04] ${
                          useContainPlaceholder
                            ? 'h-52 rounded-[1rem] object-contain p-3'
                            : (usePlaceholderRelatedImages ? 'cover' : item.heroImageMode) === 'contain'
                              ? 'h-52 rounded-[1rem] object-contain'
                              : 'h-52 rounded-[1rem] object-cover object-center'
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
                );
              })()
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

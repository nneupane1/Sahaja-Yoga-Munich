import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import motherImg from '../assets/mother1.jpg';
import lotusImg from '../assets/lotus.png';
import NewsletterDivider from '../components/NewsletterDivider';
import { getSanityNewsletters, type Newsletter } from '../content/sanityNewsletters';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';

const formatNewsletterDate = (value: string, locale: 'de' | 'en') => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale === 'de' ? 'de-DE' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

const NewsletterPage: React.FC = () => {
  const { locale } = useLocale();
  useScrollReveal('.reveal-ready', 'reveal', 0.18);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setNewsletters([]);

    getSanityNewsletters(locale)
      .then(result => {
        if (!cancelled) {
          setNewsletters(result ?? []);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setNewsletters([]);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const latestNewsletter = newsletters[0] ?? null;
  const archiveNewsletters = newsletters.slice(1);

  const copy =
    locale === 'de'
      ? {
          eyebrow: 'Newsletter',
          title: 'Neueste Ausgabe und Archiv der Münchner Rundbriefe.',
          intro:
            'Hier gibt es einen echten Einstiegspunkt für die via Sanity gepflegten Newsletter. Die neueste Ausgabe steht sofort im Mittelpunkt, und darunter bleiben frühere Ausgaben dauerhaft sichtbar und direkt klickbar.',
          latestEyebrow: 'Neueste Ausgabe',
          latestBody:
            'Diese Ausgabe enthält die eigentlichen Texte, Bilder, Ankündigungen und Rückblicke, die aus meditationmuenchen.org übernommen und in Sanity weiter gepflegt werden.',
          openLatest: 'Vollständige Ausgabe öffnen',
          archiveEyebrow: 'Historisches Archiv',
          archiveTitle: 'Frühere Ausgaben bleiben hier gesammelt und unmittelbar erreichbar.',
          archiveBody:
            'So kann man zuerst Newsletter öffnen und dann gezielt eine Ausgabe auswählen, ohne eine tiefe URL kennen zu müssen.',
          issueLabel: 'Ausgabe',
          openIssue: 'Ausgabe öffnen',
          backToBlog: 'Zum Blog',
          empty: 'Es wurden noch keine Newsletter veröffentlicht.'
        }
      : {
          eyebrow: 'Newsletter',
          title: 'Latest issue and archive of the Munich circulars.',
          intro:
            'This is now a real entry page for the Sanity-managed newsletters. The latest issue is foregrounded immediately, and earlier issues remain permanently visible and directly clickable below it.',
          latestEyebrow: 'Latest issue',
          latestBody:
            'This issue contains the actual writing, images, event notes and retrospectives imported from meditationmuenchen.org and maintained further in Sanity.',
          openLatest: 'Open full issue',
          archiveEyebrow: 'Historical archive',
          archiveTitle: 'Earlier issues remain collected here and directly reachable.',
          archiveBody:
            'That way users can open Newsletter first and then select an issue without needing to know a deep URL.',
          issueLabel: 'Issue',
          openIssue: 'Open issue',
          backToBlog: 'Back to blog',
          empty: 'No newsletters have been published yet.'
        };

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eef9ff_54%,#dff2ff_100%)]">
      <section className="section-band pb-8">
        <div className="section-shell">
          <div className="reveal-ready">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-x-1"
            >
              ← {copy.backToBlog}
            </Link>
          </div>

          <div className="reveal-ready mt-6 max-w-4xl">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h1 className="mt-5 max-w-5xl text-5xl leading-tight sm:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-[1.02rem] leading-8 text-slate-600 sm:text-[1.08rem]">
              {copy.intro}
            </p>

            {latestNewsletter && (
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to={latestNewsletter.route}
                  className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.98)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                >
                  {copy.openLatest}
                </Link>
                <a
                  href="#newsletter-history"
                  className="inline-flex items-center rounded-full border border-[#b35d4c]/20 bg-white/75 px-5 py-2.5 text-sm font-semibold text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/35 hover:bg-[rgba(255,250,246,0.96)]"
                >
                  {copy.archiveEyebrow}
                </a>
              </div>
            )}
          </div>

          {isLoading ? (
            <article className="newsletter-stage reveal-ready mt-8 p-6 sm:p-8">
              <p className="text-slate-600">{locale === 'de' ? 'Newsletter werden geladen …' : 'Loading newsletters …'}</p>
            </article>
          ) : latestNewsletter ? (
            <article className="newsletter-stage reveal-ready mt-8 overflow-hidden p-6 sm:p-8 lg:p-10">
              <img
                src={lotusImg}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 top-6 hidden w-36 rotate-[18deg] opacity-[0.1] mix-blend-multiply lg:block"
              />
              <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
                <div className="overflow-hidden rounded-[1.9rem] border border-[#b35d4c]/18 bg-white/72 shadow-[0_22px_48px_rgba(146,92,79,0.14)]">
                  <img
                    src={latestNewsletter.heroImageUrl ?? motherImg}
                    alt={latestNewsletter.heroImageAlt}
                    className="h-[22rem] w-full object-cover object-center"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="eyebrow">{copy.latestEyebrow}</span>
                    <span className="eyebrow">
                      {copy.issueLabel} {latestNewsletter.issueLabel}
                    </span>
                    <span className="eyebrow">{latestNewsletter.locale.toUpperCase()}</span>
                  </div>
                  <h2 className="mt-5 text-[2rem] leading-tight text-slate-800 sm:text-[2.45rem]">
                    {latestNewsletter.title}
                  </h2>
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-slate-500">
                    {formatNewsletterDate(latestNewsletter.publishedAt, locale)}
                  </p>
                  {latestNewsletter.introTitle && (
                    <p className="mt-5 text-[1.14rem] font-semibold leading-8 text-[#b56757]">
                      {latestNewsletter.introTitle}
                    </p>
                  )}
                  <p className="mt-4 text-[0.98rem] leading-8 text-slate-600">{copy.latestBody}</p>
                  <p className="mt-4 text-[0.98rem] leading-8 text-slate-600">
                    {latestNewsletter.introBody.split('\n')[0]}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={latestNewsletter.route}
                      className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                    >
                      {copy.openLatest}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ) : (
            <article className="newsletter-stage reveal-ready mt-8 p-6 sm:p-8">
              <p className="text-slate-600">{copy.empty}</p>
            </article>
          )}
        </div>
      </section>

      <section className="pb-2">
        <div className="section-shell">
          <NewsletterDivider />
        </div>
      </section>

      <section id="newsletter-history" className="section-band pt-6">
        <div className="section-shell">
          <div className="reveal-ready max-w-4xl">
            <span className="eyebrow">{copy.archiveEyebrow}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">{copy.archiveTitle}</h2>
            <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-slate-600">{copy.archiveBody}</p>
          </div>

          {!!newsletters.length && (
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {newsletters.map((newsletter, index) => (
                <article
                  key={newsletter.slug}
                  className="newsletter-stage reveal-ready overflow-hidden p-5 sm:p-6"
                >
                  <div className="grid gap-5 sm:grid-cols-[0.38fr_0.62fr] sm:items-center">
                    <div className="overflow-hidden rounded-[1.35rem] border border-[#b35d4c]/18 bg-white/70">
                      <img
                        src={newsletter.heroImageUrl ?? motherImg}
                        alt={newsletter.heroImageAlt}
                        className="h-[12rem] w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {index === 0 && <span className="eyebrow">{copy.latestEyebrow}</span>}
                        <span className="eyebrow">
                          {copy.issueLabel} {newsletter.issueLabel}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[1.55rem] leading-tight text-slate-800">
                        {newsletter.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-500">
                        {formatNewsletterDate(newsletter.publishedAt, locale)}
                      </p>
                      <p className="mt-4 text-[0.96rem] leading-7 text-slate-600">
                        {newsletter.introTitle ? `${newsletter.introTitle}. ` : ''}
                        {newsletter.introBody.split('\n')[0]}
                      </p>
                      <div className="mt-5">
                        <Link
                          to={newsletter.route}
                          className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                        >
                          {copy.openIssue}
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default NewsletterPage;

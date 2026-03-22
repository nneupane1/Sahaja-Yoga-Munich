import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import chakraImg from '../assets/chakra.png';
import lotusImg from '../assets/lotus.png';
import motherImg from '../assets/mother1.jpg';
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

    getSanityNewsletters(locale)
      .then(result => {
        if (cancelled) {
          return;
        }

        setNewsletters(result ?? []);
        setIsLoading(false);
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

  const copy =
    locale === 'de'
      ? {
          heroEyebrow: 'Newsletter Archiv',
          heroTitle: 'Regelmäßige Rundbriefe, Veranstaltungen und Meditation aus München in einer gestalteten redaktionellen Form.',
          heroBody:
            'Hier erscheinen künftig die Newsletter, Veranstaltungsankündigungen, Wochenpläne, Rückblicke und Hinweise aus München in einer Form, die ruhig, hochwertig und gut lesbar bleibt. Die Inhalte kommen aus Sanity Studio, das Erscheinungsbild übernimmt die Website.',
          heroCta: 'Zur neuesten Ausgabe',
          archiveEyebrow: 'Ausgaben',
          archiveTitle: 'Bisher veröffentlichte Newsletter',
          archiveIntro:
            'Jede Ausgabe bleibt als eigenständige Seite erhalten und kann später erweitert, aktualisiert oder archiviert werden.',
          issueLabel: 'Ausgabe',
          openIssue: 'Ausgabe öffnen',
          noItems: 'Es wurden noch keine Newsletter veröffentlicht.'
        }
      : {
          heroEyebrow: 'Newsletter Archive',
          heroTitle: 'Regular newsletters, event highlights and meditation updates from Munich in a more refined editorial form.',
          heroBody:
            'This space will hold newsletters, event announcements, weekly schedules, reports and updates from Munich in a format that stays calm, premium and easy to read. The content comes from Sanity Studio; the website gives it a more beautiful public form.',
          heroCta: 'Open latest issue',
          archiveEyebrow: 'Issues',
          archiveTitle: 'Published newsletters',
          archiveIntro:
            'Each issue remains available as its own page and can later be extended, updated or archived without breaking the public site.',
          issueLabel: 'Issue',
          openIssue: 'Open issue',
          noItems: 'No newsletters have been published yet.'
        };

  const latestNewsletter = newsletters[0];

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eef9ff_54%,#dff2ff_100%)]">
      <section className="section-band pb-8">
        <div className="section-shell">
          <div className="newsletter-stage reveal-ready overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <img
              src={lotusImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-8 top-4 hidden w-28 opacity-[0.14] mix-blend-multiply sm:block"
            />
            <img
              src={lotusImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 right-0 hidden w-40 rotate-[12deg] opacity-[0.12] mix-blend-multiply lg:block"
            />

            <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
              <div className="relative z-10">
                <span className="eyebrow">{copy.heroEyebrow}</span>
                <h1 className="mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl">
                  {copy.heroTitle}
                </h1>
                <p className="mt-6 max-w-3xl text-[1.03rem] leading-8 text-slate-600 sm:text-[1.08rem]">
                  {copy.heroBody}
                </p>

                {latestNewsletter && (
                  <div className="mt-8">
                    <Link
                      to={latestNewsletter.route}
                      className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                    >
                      {copy.heroCta}
                    </Link>
                  </div>
                )}
              </div>

              <aside className="relative z-10 grid gap-4">
                <article className="card-soft warm-hover-glow overflow-hidden p-4 sm:p-5">
                  <div className="overflow-hidden rounded-[1.6rem] border border-[#b35d4c]/20 bg-white/70">
                    <img
                      src={latestNewsletter?.heroImageUrl ?? motherImg}
                      alt={latestNewsletter?.heroImageAlt ?? 'Newsletter'}
                      className="h-[18rem] w-full object-cover object-center"
                    />
                  </div>
                  {latestNewsletter && (
                    <div className="mt-4 rounded-[1.3rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.9)] px-5 py-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                        {copy.issueLabel} {latestNewsletter.issueLabel}
                      </p>
                      <h2 className="mt-3 text-[1.4rem] leading-tight text-[#b56757]">
                        {latestNewsletter.title}
                      </h2>
                      <p className="mt-3 text-[0.97rem] leading-7 text-slate-600">
                        {formatNewsletterDate(latestNewsletter.publishedAt, locale)}
                      </p>
                    </div>
                  )}
                </article>

                <div className="card-soft warm-hover-glow p-5">
                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden rounded-full border border-[#b35d4c]/20 bg-white/75 p-3">
                      <img
                        src={chakraImg}
                        alt=""
                        aria-hidden="true"
                        className="h-10 w-10 object-contain mix-blend-multiply"
                      />
                    </div>
                    <p className="text-[0.98rem] leading-7 text-slate-600">
                      {locale === 'de'
                        ? 'Die Newsletter bleiben nicht mehr in rohem HTML verborgen, sondern werden als gestaltete, wiederverwendbare Inhalte veröffentlicht.'
                        : 'The newsletters no longer remain buried in raw HTML but are published as designed, reusable editorial content.'}
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band pt-4">
        <div className="section-shell">
          <div className="reveal-ready max-w-3xl">
            <span className="eyebrow">{copy.archiveEyebrow}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">{copy.archiveTitle}</h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-slate-600">{copy.archiveIntro}</p>
          </div>

          {isLoading ? (
            <div className="mt-8 card-soft p-7 text-slate-600">
              {locale === 'de' ? 'Newsletter werden geladen …' : 'Loading newsletters …'}
            </div>
          ) : newsletters.length ? (
            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              {newsletters.map((newsletter, index) => (
                <article
                  key={newsletter.slug}
                  className="newsletter-stage reveal-ready overflow-hidden p-5 sm:p-6"
                >
                  <img
                    src={index % 2 === 0 ? lotusImg : chakraImg}
                    alt=""
                    aria-hidden="true"
                    className={`pointer-events-none absolute opacity-[0.1] mix-blend-multiply ${
                      index % 2 === 0
                        ? '-right-6 -top-6 w-24 rotate-[14deg]'
                        : '-left-8 bottom-0 w-24 -rotate-[18deg]'
                    }`}
                  />

                  <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-start">
                    <div className="overflow-hidden rounded-[1.5rem] border border-[#b35d4c]/20 bg-white/70">
                      <img
                        src={newsletter.heroImageUrl ?? motherImg}
                        alt={newsletter.heroImageAlt}
                        className="h-[14rem] w-full object-cover object-center"
                      />
                    </div>

                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex flex-wrap gap-2">
                        <span className="eyebrow">{copy.issueLabel} {newsletter.issueLabel}</span>
                        <span className="eyebrow">{newsletter.locale.toUpperCase()}</span>
                      </div>
                      <h3 className="mt-4 text-[1.55rem] leading-tight text-[#b56757]">
                        {newsletter.title}
                      </h3>
                      <p className="mt-3 text-[0.98rem] leading-7 text-slate-600">
                        {newsletter.introTitle ? `${newsletter.introTitle}. ` : ''}
                        {newsletter.introBody.split('\n')[0]}
                      </p>
                      <div className="mt-5 flex items-center justify-between gap-3">
                        <p className="text-sm text-slate-500">
                          {formatNewsletterDate(newsletter.publishedAt, locale)}
                        </p>
                        <Link
                          to={newsletter.route}
                          className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                        >
                          {copy.openIssue} <span className="ml-2">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 card-soft p-7 text-slate-600">{copy.noItems}</div>
          )}
        </div>
      </section>
    </main>
  );
};

export default NewsletterPage;

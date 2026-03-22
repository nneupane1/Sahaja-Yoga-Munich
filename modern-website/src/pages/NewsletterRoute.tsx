import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import chakraImg from '../assets/chakra.png';
import lotusImg from '../assets/lotus.png';
import motherImg from '../assets/mother.jpg';
import LegacyNewsletterFrame from '../components/LegacyNewsletterFrame';
import NewsletterDivider from '../components/NewsletterDivider';
import {
  getSanityNewsletter,
  getSanityNewsletterLegacyImport,
  type Newsletter,
  type NewsletterCard,
  type NewsletterLink
} from '../content/sanityNewsletters';
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

const NewsletterLinks: React.FC<{ links: NewsletterLink[] }> = ({ links }) => {
  if (!links.length) {
    return null;
  }

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {links.map(link =>
        link.url ? (
          <a
            key={`${link.label}-${link.url}`}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="hover-chip"
          >
            {link.label}
          </a>
        ) : (
          <span key={link.label} className="hover-chip">
            {link.label}
          </span>
        )
      )}
    </div>
  );
};

const NewsletterContentCard: React.FC<{ card: NewsletterCard }> = ({ card }) => (
  <article className="card-soft warm-hover-glow reveal-ready flex h-full flex-col overflow-hidden">
    {card.imageUrl && (
      <div className="overflow-hidden border-b border-[#b35d4c]/18 bg-white/65">
        <img
          src={card.imageUrl}
          alt={card.imageAlt}
          className="h-[15rem] w-full object-cover object-center"
        />
      </div>
    )}
    <div className="flex flex-1 flex-col p-6 sm:p-7">
      {card.eyebrow && (
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
          {card.eyebrow}
        </p>
      )}
      <h3 className="mt-3 text-[1.45rem] leading-tight text-[#b56757]">{card.title}</h3>
      {card.subtitle && (
        <p className="mt-2 text-[0.9rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
          {card.subtitle}
        </p>
      )}
      <p className="mt-4 whitespace-pre-line text-[0.98rem] leading-8 text-slate-600">
        {card.body}
      </p>
      {!!card.points.length && (
        <ul className="mt-5 space-y-3 text-[0.96rem] leading-7 text-slate-600">
          {card.points.map(point => (
            <li key={point} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#c8715f]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      <NewsletterLinks links={card.links} />
    </div>
  </article>
);

const NewsletterRoute: React.FC = () => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const { locale } = useLocale();
  useScrollReveal('.reveal-ready', 'reveal', 0.18);

  const slug = routeSlug?.trim() ?? '';
  const [newsletter, setNewsletter] = useState<Newsletter | null>(null);
  const [isResolving, setIsResolving] = useState(true);
  const [showLegacyImport, setShowLegacyImport] = useState(false);
  const [legacyImportHtml, setLegacyImportHtml] = useState<string | null>(null);
  const [legacyImportSourceUrl, setLegacyImportSourceUrl] = useState<string | null>(null);
  const [isLegacyResolving, setIsLegacyResolving] = useState(false);

  useEffect(() => {
    let cancelled = false;

    setIsResolving(true);
    setNewsletter(null);
    setShowLegacyImport(false);
    setLegacyImportHtml(null);
    setLegacyImportSourceUrl(null);
    setIsLegacyResolving(false);

    getSanityNewsletter(locale, slug)
      .then(result => {
        if (cancelled) {
          return;
        }

        setNewsletter(result);
        setIsResolving(false);
      })
      .catch(() => {
        if (!cancelled) {
          setNewsletter(null);
          setIsResolving(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale, slug]);

  const copy =
    locale === 'de'
      ? {
          back: 'Zum Newsletter-Archiv',
          featuredEyebrow: 'Im Mittelpunkt',
          scheduleEyebrow: 'München & Region',
          scheduleTitle: 'Regelmäßige Meditationszeiten und regionale Hinweise',
          retrospectiveEyebrow: 'Rückblicke',
          newsEyebrow: 'Aktuelles',
          recommendedEyebrow: 'Empfehlungen',
          donationEyebrow: 'Unterstützung',
          source: 'Originalquelle öffnen',
          legacyEyebrow: 'Vollständige Ausgabe',
          legacyTitle: 'Inhalt aus der früheren Newsletter-Seite',
          legacyIntro:
            'Hier erscheint die vollständig importierte Ausgabe aus meditationmuenchen.org in einer ruhigeren, besser lesbaren Form innerhalb der neuen Website.',
          legacyLoading: 'Importierte Ausgabe wird geladen …',
          loading: 'Newsletter wird geladen …',
          readOriginal:
            'Diese Ausgabe wurde aus dem alten Bestand übernommen und zugleich als strukturierter Inhalt für die neue Website aufbereitet.',
          legacyToggleShow: 'Vollständige importierte Ausgabe anzeigen',
          legacyToggleHide: 'Importierte Ausgabe wieder schließen'
        }
      : {
          back: 'Back to newsletter archive',
          featuredEyebrow: 'Highlights',
          scheduleEyebrow: 'Munich & region',
          scheduleTitle: 'Regular meditation timings and regional connections',
          retrospectiveEyebrow: 'Retrospectives',
          newsEyebrow: 'News',
          recommendedEyebrow: 'Recommended links',
          donationEyebrow: 'Support',
          source: 'Open original source',
          legacyEyebrow: 'Full imported issue',
          legacyTitle: 'Content from the earlier newsletter page',
          legacyIntro:
            'Below, the complete imported issue from meditationmuenchen.org is rendered inside the new site in a calmer, more readable form.',
          legacyLoading: 'Loading imported issue …',
          loading: 'Loading newsletter …',
          readOriginal:
            'This issue was imported from the older site and reshaped into structured content for the new website.',
          legacyToggleShow: 'Show full imported issue',
          legacyToggleHide: 'Hide imported issue'
        };

  const hasFeatured = newsletter?.featuredCards.length ? true : false;
  const hasSchedule =
    (newsletter?.munichSchedule.length ?? 0) > 0 ||
    (newsletter?.regionalLinks.length ?? 0) > 0 ||
    Boolean(newsletter?.donationHeading || newsletter?.donationBody || newsletter?.donationDetails.length);
  const hasRetrospective = (newsletter?.retrospectiveCards.length ?? 0) > 0;
  const hasNews = (newsletter?.newsCards.length ?? 0) > 0;
  const hasRecommended = (newsletter?.recommendedLinks.length ?? 0) > 0;
  const hasLegacyImport = Boolean(newsletter?.hasLegacyImport || newsletter?.legacyImportSourceUrl);

  const handleLegacyToggle = async () => {
    if (showLegacyImport) {
      setShowLegacyImport(false);
      return;
    }

    setShowLegacyImport(true);

    if (legacyImportHtml || !hasLegacyImport) {
      return;
    }

    setIsLegacyResolving(true);

    try {
      const legacyImport = await getSanityNewsletterLegacyImport(locale, slug);
      setLegacyImportHtml(legacyImport?.legacyImportHtml ?? null);
      setLegacyImportSourceUrl(legacyImport?.legacyImportSourceUrl ?? null);
    } finally {
      setIsLegacyResolving(false);
    }
  };

  if (!slug) {
    return <Navigate to="/newsletter" replace />;
  }

  if (isResolving) {
    return (
      <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eef9ff_54%,#dff2ff_100%)]">
        <section className="section-band pb-10">
          <div className="section-shell">
            <div className="card-soft p-8 text-slate-600">{copy.loading}</div>
          </div>
        </section>
      </main>
    );
  }

  if (!newsletter) {
    return <Navigate to="/newsletter" replace />;
  }

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eef9ff_52%,#dff2ff_100%)]">
      <section className="section-band pb-8">
        <div className="section-shell">
          <div className="reveal-ready">
            <Link
              to="/newsletter"
              className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-x-1"
            >
              ← {copy.back}
            </Link>
          </div>

          <article className="newsletter-stage reveal-ready mt-6 overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <img
              src={lotusImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 top-10 hidden w-32 opacity-[0.14] mix-blend-multiply sm:block"
            />
            <img
              src={lotusImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 bottom-4 hidden w-40 rotate-[16deg] opacity-[0.11] mix-blend-multiply lg:block"
            />
            <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div className="relative z-10">
                <div className="flex flex-wrap gap-3">
                  <span className="eyebrow">{newsletter.heroEyebrow ?? newsletter.issueLabel}</span>
                  <span className="eyebrow">{newsletter.locale.toUpperCase()}</span>
                </div>
                <h1 className="mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl">
                  {newsletter.title}
                </h1>
                <p className="mt-5 text-sm uppercase tracking-[0.18em] text-slate-500">
                  {formatNewsletterDate(newsletter.publishedAt, locale)}
                </p>
                {newsletter.introTitle && (
                  <h2 className="mt-6 text-[1.9rem] leading-tight text-[#b56757] sm:text-[2.2rem]">
                    {newsletter.introTitle}
                  </h2>
                )}
                <p className="mt-5 whitespace-pre-line text-[1.02rem] leading-8 text-slate-600">
                  {newsletter.introBody}
                </p>
                {newsletter.closing && (
                  <p className="mt-6 text-[1rem] italic leading-8 text-[#b56757]">{newsletter.closing}</p>
                )}
                {newsletter.sourceUrl && (
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href={newsletter.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                    >
                      {copy.source}
                    </a>
                    <p className="max-w-xl text-[0.93rem] leading-7 text-slate-500">{copy.readOriginal}</p>
                  </div>
                )}
              </div>

              <aside className="relative z-10 grid gap-4">
                <div className="overflow-hidden rounded-[1.8rem] border border-[#b35d4c]/20 bg-white/72 shadow-[0_22px_48px_rgba(146,92,79,0.15)]">
                  <img
                    src={newsletter.heroImageUrl ?? motherImg}
                    alt={newsletter.heroImageAlt}
                    className="h-[20rem] w-full object-cover object-center"
                  />
                </div>
                <div className="card-soft warm-hover-glow p-5">
                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden rounded-full border border-[#b35d4c]/18 bg-white/75 p-3">
                      <img
                        src={chakraImg}
                        alt=""
                        aria-hidden="true"
                        className="h-10 w-10 object-contain mix-blend-multiply"
                      />
                    </div>
                    <p className="text-[0.98rem] leading-7 text-slate-600">
                      {locale === 'de'
                        ? 'Aus einer ehemals schwer lesbaren HTML-Ausgabe wird hier eine ruhige, strukturierte und langfristig editierbare Seite.'
                        : 'A formerly hard-to-read HTML issue is reshaped here into a calmer, structured and long-term editable page.'}
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-2">
        <div className="section-shell">
          <NewsletterDivider />
        </div>
      </section>

      {hasLegacyImport && (
        <section className="section-band pt-4">
          <div className="section-shell">
            <article className="newsletter-stage reveal-ready p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                <div>
                  <span className="eyebrow">{copy.legacyEyebrow}</span>
                  <h2 className="mt-4 text-4xl sm:text-5xl">{copy.legacyTitle}</h2>
                  <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-slate-600">
                    {copy.legacyIntro}
                  </p>
                </div>
                <div className="flex flex-col gap-4 lg:items-end">
                  <button
                    type="button"
                    onClick={handleLegacyToggle}
                    className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                  >
                    {showLegacyImport ? copy.legacyToggleHide : copy.legacyToggleShow}
                  </button>
                  {(legacyImportSourceUrl ?? newsletter.legacyImportSourceUrl) && (
                    <a
                      href={legacyImportSourceUrl ?? newsletter.legacyImportSourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-[#b56757] underline decoration-[#b35d4c]/35 underline-offset-4 transition hover:text-[#c8715f]"
                    >
                      {copy.source}
                    </a>
                  )}
                </div>
              </div>

              {showLegacyImport && isLegacyResolving && (
                <div className="mt-8 rounded-[1.6rem] border border-[#b35d4c]/16 bg-[rgba(255,252,249,0.82)] px-5 py-4 text-slate-600">
                  {copy.legacyLoading}
                </div>
              )}

              {showLegacyImport && legacyImportHtml && (
                <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#b35d4c]/16 bg-[rgba(255,252,249,0.82)] p-2 shadow-[0_18px_40px_rgba(146,92,79,0.1)] sm:p-4">
                  <LegacyNewsletterFrame
                    title={newsletter.title}
                    rawHtml={legacyImportHtml}
                  />
                </div>
              )}
            </article>
          </div>
        </section>
      )}

      {hasFeatured && (
        <section className="section-band pt-4">
          <div className="section-shell">
            <div className="reveal-ready max-w-3xl">
              <span className="eyebrow">{copy.featuredEyebrow}</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                {newsletter.featuredHeading ?? newsletter.title}
              </h2>
            </div>
            <div className="mt-9 grid gap-6 xl:grid-cols-3">
              {newsletter.featuredCards.map(card => (
                <NewsletterContentCard key={`${card.title}-${card.body.slice(0, 32)}`} card={card} />
              ))}
            </div>
          </div>
        </section>
      )}

      {hasSchedule && (
        <section className="section-band pt-6">
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              {!!newsletter.munichSchedule.length && (
                <article className="newsletter-stage reveal-ready p-6 sm:p-8">
                  <span className="eyebrow">{copy.scheduleEyebrow}</span>
                  <h2 className="mt-4 text-4xl sm:text-[2.6rem]">
                    {newsletter.scheduleHeading ?? copy.scheduleTitle}
                  </h2>
                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    {newsletter.munichSchedule.map(item => (
                      <div
                        key={`${item.day}-${item.time ?? item.description}`}
                        className="rounded-[1.35rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.86)] px-5 py-5 shadow-[0_14px_28px_rgba(146,92,79,0.08)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-[1.2rem] leading-tight text-[#b56757]">{item.day}</h3>
                          {item.time && (
                            <span className="rounded-full border border-[#b35d4c]/18 bg-white/70 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b56757]">
                              {item.time}
                            </span>
                          )}
                        </div>
                        <p className="mt-4 text-[0.96rem] leading-7 text-slate-600">{item.description}</p>
                        {item.contact && (
                          <p className="mt-4 text-sm leading-6 text-slate-500">{item.contact}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              )}

              <div className="grid gap-6">
                {!!newsletter.regionalLinks.length && (
                  <article className="newsletter-stage reveal-ready p-6 sm:p-7">
                    <span className="eyebrow">{newsletter.regionalHeading ?? copy.scheduleEyebrow}</span>
                    <h3 className="mt-4 text-[2rem] leading-tight text-[#b56757]">
                      {newsletter.regionalHeading ??
                        (locale === 'de' ? 'Verbindungen in Süd-Deutschland' : 'Regional connections')}
                    </h3>
                    <NewsletterLinks links={newsletter.regionalLinks} />
                  </article>
                )}

                {(newsletter.donationHeading || newsletter.donationBody || newsletter.donationDetails.length > 0) && (
                  <article className="newsletter-stage reveal-ready p-6 sm:p-7">
                    <span className="eyebrow">{copy.donationEyebrow}</span>
                    <h3 className="mt-4 text-[1.9rem] leading-tight text-[#b56757]">
                      {newsletter.donationHeading}
                    </h3>
                    {newsletter.donationBody && (
                      <p className="mt-4 text-[0.98rem] leading-8 text-slate-600">
                        {newsletter.donationBody}
                      </p>
                    )}
                    {!!newsletter.donationDetails.length && (
                      <ul className="mt-5 space-y-3 text-[0.96rem] leading-7 text-slate-600">
                        {newsletter.donationDetails.map(item => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-[#c8715f]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {(hasRetrospective || hasNews || hasRecommended) && (
        <section className="pb-2">
          <div className="section-shell">
            <NewsletterDivider />
          </div>
        </section>
      )}

      {hasRetrospective && (
        <section className="section-band pt-6">
          <div className="section-shell">
            <div className="reveal-ready max-w-3xl">
              <span className="eyebrow">{copy.retrospectiveEyebrow}</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                {newsletter.retrospectiveHeading ??
                  (locale === 'de' ? 'Veranstaltungsrückblicke' : 'Retrospectives')}
              </h2>
            </div>
            <div className="mt-9 grid gap-6 xl:grid-cols-3">
              {newsletter.retrospectiveCards.map(card => (
                <NewsletterContentCard key={`${card.title}-${card.body.slice(0, 24)}`} card={card} />
              ))}
            </div>
          </div>
        </section>
      )}

      {hasNews && (
        <section className="section-band pt-6">
          <div className="section-shell">
            <div className="reveal-ready max-w-3xl">
              <span className="eyebrow">{copy.newsEyebrow}</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">
                {newsletter.newsHeading ?? (locale === 'de' ? 'Aktuelles & News' : 'News & updates')}
              </h2>
            </div>
            <div className="mt-9 grid gap-6 xl:grid-cols-3">
              {newsletter.newsCards.map(card => (
                <NewsletterContentCard key={`${card.title}-${card.body.slice(0, 18)}`} card={card} />
              ))}
            </div>
          </div>
        </section>
      )}

      {hasRecommended && (
        <section className="section-band pt-6">
          <div className="section-shell">
            <article className="newsletter-stage reveal-ready p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <span className="eyebrow">{copy.recommendedEyebrow}</span>
                  <h2 className="mt-4 text-4xl sm:text-[2.6rem]">
                    {newsletter.recommendedHeading ??
                      (locale === 'de' ? 'Empfohlene Internetseiten' : 'Recommended links')}
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {newsletter.recommendedLinks.map(link =>
                    link.url ? (
                      <a
                        key={`${link.label}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover-chip"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span key={link.label} className="hover-chip">
                        {link.label}
                      </span>
                    )
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {!!newsletter.contactDetails.length && (
        <section className="section-band pt-6">
          <div className="section-shell">
            <article className="newsletter-stage reveal-ready p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <span className="eyebrow">
                    {locale === 'de' ? 'Kontakt & Hinweise' : 'Contact & practical notes'}
                  </span>
                  <h2 className="mt-4 text-4xl sm:text-[2.6rem]">
                    {newsletter.contactHeading ??
                      (locale === 'de' ? 'Sahaja Yoga Zentrum München' : 'Sahaja Yoga Centre Munich')}
                  </h2>
                  {newsletter.footerNote && (
                    <p className="mt-4 text-[0.98rem] leading-8 text-[#b56757]">{newsletter.footerNote}</p>
                  )}
                </div>
                <div>
                  <ul className="space-y-3 text-[0.98rem] leading-7 text-slate-600">
                    {newsletter.contactDetails.map(item => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#c8715f]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {!!newsletter.footerLinks.length && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {newsletter.footerLinks.map(link =>
                        link.url ? (
                          <a
                            key={`${link.label}-${link.url}`}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover-chip"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <span key={link.label} className="hover-chip">
                            {link.label}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

    </main>
  );
};

export default NewsletterRoute;

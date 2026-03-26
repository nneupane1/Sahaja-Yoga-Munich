import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import chakraImg from '../assets/chakra.png';
import lotusImg from '../assets/lotus.png';
import motherImg from '../assets/mother1.jpg';
import NewsletterDivider from '../components/NewsletterDivider';
import { getBlogArticles, getBlogArticle } from '../content/blogArticles';
import { getSanityBlogArticles } from '../content/sanityBlog';
import {
  getSanityNewsletter,
  getSanityNewsletters,
  type Newsletter
} from '../content/sanityNewsletters';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Dedicated editorial page for blog-style articles and future content.
 */
const BlogPage: React.FC = () => {
  const { locale } = useLocale();
  useScrollReveal('.reveal-ready', 'reveal', 0.18);
  const staticArticles = useMemo(() => getBlogArticles(locale), [locale]);
  const staticFeaturedArticle = useMemo(
    () => getBlogArticle(locale, '/blog/stille-und-aufmerksamkeit') ?? staticArticles[0],
    [locale, staticArticles]
  );
  const [articles, setArticles] = useState(staticArticles);
  const [featuredArticle, setFeaturedArticle] = useState(staticFeaturedArticle);
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [isNewslettersLoading, setIsNewslettersLoading] = useState(true);
  const [latestNewsletterIssue, setLatestNewsletterIssue] = useState<Newsletter | null>(null);

  const trimNewsletterPreview = (text: string) => {
    if (text.length <= 220) {
      return text;
    }

    return `${text.slice(0, 217).trimEnd()}...`;
  };

  const trimCardPreview = (text: string, maxLength = 200) => {
    if (text.length <= maxLength) {
      return text;
    }

    return `${text.slice(0, maxLength - 3).trimEnd()}...`;
  };

  const formatNewsletterDate = (value: string) => {
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

  useEffect(() => {
    setArticles(staticArticles);
    setFeaturedArticle(staticFeaturedArticle);
    setNewsletters([]);
    setIsNewslettersLoading(true);
    setLatestNewsletterIssue(null);

    let cancelled = false;

    getSanityBlogArticles(locale)
      .then(posts => {
        if (cancelled || !posts?.length) {
          return;
        }

        setArticles(posts);
        setFeaturedArticle(posts[0]);
      })
      .catch(() => {
        // Keep the static fallback when Sanity is not configured or has no content yet.
      });

    getSanityNewsletters(locale)
      .then(newsletters => {
        if (!cancelled) {
          const resolvedNewsletters = newsletters ?? [];
          setNewsletters(resolvedNewsletters);
          setIsNewslettersLoading(false);

          const newestIssue = resolvedNewsletters[0];

          if (!newestIssue) {
            return;
          }

          getSanityNewsletter(locale, newestIssue.slug)
            .then(issue => {
              if (!cancelled) {
                setLatestNewsletterIssue(issue ?? newestIssue);
              }
            })
            .catch(() => {
              if (!cancelled) {
                setLatestNewsletterIssue(newestIssue);
              }
            });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setNewsletters([]);
          setIsNewslettersLoading(false);
          setLatestNewsletterIssue(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale, staticArticles, staticFeaturedArticle]);

  const latestNewsletter = newsletters[0] ?? null;
  const latestVisibleNewsletter = latestNewsletterIssue ?? latestNewsletter;
  const latestNewsletterHighlights = latestNewsletterIssue?.featuredCards.slice(0, 2) ?? [];
  const latestNewsletterStory =
    latestNewsletterIssue?.retrospectiveCards[0] ?? latestNewsletterIssue?.newsCards[0] ?? null;
  const latestNewsletterSchedule = latestNewsletterIssue?.munichSchedule.slice(0, 2) ?? [];
  const latestNewsletterRegionalLinks = latestNewsletterIssue?.regionalLinks.slice(0, 4) ?? [];
  const latestNewsletterRecommendedLinks =
    latestNewsletterIssue?.recommendedLinks.slice(0, 4) ?? [];
  const latestNewsletterTopArchive = newsletters.slice(0, 3);
  const latestNewsletterIntroLine = latestVisibleNewsletter
    ? `${latestVisibleNewsletter.introTitle ? `${latestVisibleNewsletter.introTitle}. ` : ''}${latestVisibleNewsletter.introBody.split('\n')[0]}`
    : '';

  const copy =
    locale === 'de'
        ? {
          heroEyebrow: 'Blog',
          heroTitle: 'Neuester Newsletter, Archiv und Artikel an einem Ort.',
          heroIntro:
            'Die aktuelle Newsletter-Ausgabe aus München steht hier sofort im Mittelpunkt. Darunter bleiben Archiv, Artikel und weitere redaktionelle Richtungen direkt erreichbar, ohne dass die eigentlichen Inhalte hinter bloßen Teasern verschwinden.',
          spotlightEyebrow: 'Direkter Newsletter-Zugang',
          spotlightTitle: 'Die aus meditationmuenchen.org übernommene Ausgabe ist hier direkt vollständig erreichbar.',
          spotlightBody:
            'Wenn du sofort den eigentlichen Newsletter mit Texten, Bildern, Ankündigungen und Rückblicken öffnen willst, klicke direkt hier. Das Archiv bleibt daneben dauerhaft sichtbar.',
          spotlightLatestCta: 'Vollständige Ausgabe öffnen',
          spotlightArchiveCta: 'Zum Newsletter-Archiv',
          sectionLinks: [
            { href: '#newsletter-latest', label: 'Neueste Ausgabe' },
            { href: '/blog/newsletter', label: 'Newsletter-Archiv' },
            { href: '#empfohlen', label: 'Empfohlener Einstieg' },
            { href: '#beitraege', label: 'Artikel' },
            { href: '#themen', label: 'Themenfelder' }
          ],
          topLatestEyebrow: 'Neueste Ausgabe',
          topLatestTitle: 'Die aktuelle Sanity-Ausgabe bleibt hier direkt sichtbar und sofort lesbar.',
          topLatestBody:
            'Die neue Münchner Rundbrief-Seite wird nicht versteckt, sondern beginnt mit einem echten Ausschnitt aus der Ausgabe selbst.',
          topLatestSource: 'Ursprünglich aus meditationmuenchen.org übernommen',
          topArchiveTitle: 'Newsletter-Archiv',
          topArchiveBody:
            'Alle veröffentlichten Ausgaben bleiben hier gesammelt und direkt wieder aufrufbar.',
          topArticlesTitle: 'Artikel',
          topArticlesBody:
            'Vertiefende Beiträge zu Meditation, Aufmerksamkeit, Kundalini und gelebter Praxis.',
          topThemesTitle: 'Themen & Journal',
          topThemesBody:
            'Ein Bereich für weitere redaktionelle Richtungen, Erfahrungsräume und kommende Formate.',
          topOpenLatest: 'Neueste Ausgabe öffnen',
          topOpenArchive: 'Archiv öffnen',
          topOpenArticles: 'Zu den Artikeln',
          topOpenThemes: 'Zu den Themen',
          newsletterCta: 'Neueste Ausgabe öffnen',
          newsletterArchiveCta: 'Zum Archiv springen',
          latestIssue: 'Neueste Ausgabe',
          latestIssueEyebrow: 'Inhalte aus der neuesten Ausgabe',
          latestIssueTitle: 'Die eigentlichen Inhalte der aktuellen Ausgabe beginnen direkt hier auf der Seite.',
          latestIssueBody:
            'So werden zentrale Themen der Ausgabe sofort sichtbar: Programme, Meditationszeiten, regionale Hinweise und ausgewählte Rückblicke. Der vollständige Rundbrief bleibt mit einem Klick erreichbar.',
          highlightsEyebrow: 'Aus der neuesten Ausgabe',
          schedulePreviewEyebrow: 'Zeiten & Region',
          schedulePreviewTitle: 'Ein direkter Blick auf Zeiten, Orte und regionale Hinweise.',
          storyPreviewEyebrow: 'Ausgabe im Detail',
          storyPreviewTitle: 'Eine konkrete Geschichte oder ein Rückblick bleibt sofort sichtbar.',
          linksPreviewTitle: 'Wichtige Links aus der Ausgabe',
          archiveEyebrow: 'Newsletter-Archiv',
          archiveTitle: 'Rundbriefe, Veranstaltungen und Archiv-Ausgaben gehören jetzt sichtbar zum Blog.',
          archiveIntro:
            'Jede Ausgabe bleibt als gestaltete Seite erhalten, kann später erweitert werden und bleibt dennoch Teil derselben redaktionellen Umgebung wie die übrigen Blog-Beiträge.',
          archiveNoteTitle: 'Warum diese Form besser ist',
          archiveNoteBody:
            'Statt Newsletter in einem abgetrennten Bereich oder in schwer lesbarem Alt-HTML zu verstecken, erscheinen sie hier als ruhige, kuratierte Ausgaben mit Archivcharakter und klarem Bezug zur restlichen Website.',
          issueLabel: 'Ausgabe',
          openIssue: 'Ausgabe öffnen',
          noNewsletterItems: 'Es wurden noch keine Newsletter veröffentlicht.',
          featuredEyebrow: 'Empfohlener Einstieg',
          featuredTitle: 'Gedankenfreie Stille als praktische Erfahrung des gegenwärtigen Moments',
          featuredBody:
            'Viele Menschen suchen Meditation zunächst als Entlastung. Wirklich interessant wird sie jedoch dort, wo Aufmerksamkeit nicht nur entspannter, sondern stiller, klarer und innerlich freier wird. Genau deshalb ist dieser Einstieg ein guter erster Blog-Beitrag.',
          featuredTags: ['Meditation', 'Stille', 'Alltag', 'Aufmerksamkeit'],
          featuredCta: 'Zum Artikel',
          entriesEyebrow: 'Ausgewählte Beiträge',
          entriesTitle: 'Artikel, die bereits jetzt in die Tiefe führen',
          entriesIntro:
            'Die folgenden Beiträge gehören jetzt wirklich zum Blog selbst und öffnen jeweils eine eigene Blog-Seite.',
          cardCta: 'Weiterlesen',
          themesEyebrow: 'Weitere Themen',
          themesTitle: 'Richtungen, in die dieser Blog wachsen kann',
          themesIntro:
            'Neben Grundlagenartikeln eignet sich dieser Bereich auch für lokale Hinweise, Erfahrungsberichte und redaktionell aufgearbeitete Vertiefungen.',
          themes: [
            {
              title: 'Meditation im Alltag',
              description:
                'Kurze, präzise Texte darüber, wie sich innere Ruhe, Aufmerksamkeit und Gelassenheit im Tagesrhythmus verankern lassen.'
            },
            {
              title: 'Programme in München',
              description:
                'Ankündigungen, besondere Termine, Workshops und Hinweise für neue Interessierte an einem Ort gebündelt.'
            },
            {
              title: 'Subtiles Wissen verständlich erklärt',
              description:
                'Beiträge, die Chakren, Nadis, Kundalini und Selbstverwirklichung sprachlich klarer und zugänglicher entfalten.'
            },
            {
              title: 'Erfahrungen und Stimmen',
              description:
                'Behutsam formulierte Eindrücke aus der Praxis, die Vertrauen schaffen und den Weg konkreter werden lassen.'
            }
          ]
        }
      : {
          heroEyebrow: 'Blog',
          heroTitle: 'Latest newsletter, archive and articles in one place.',
          heroIntro:
            'The current Munich newsletter issue now sits immediately at the top. Below it, the archive, articles and broader editorial directions remain easy to reach without hiding the real content behind abstract access cards.',
          spotlightEyebrow: 'Direct newsletter access',
          spotlightTitle: 'The issue imported from meditationmuenchen.org is fully reachable here right away.',
          spotlightBody:
            'If you want to open the actual newsletter with its writing, images, event notes and retrospectives immediately, click here first. The archive remains visible right beside it.',
          spotlightLatestCta: 'Open full issue',
          spotlightArchiveCta: 'Open newsletter archive',
          sectionLinks: [
            { href: '#newsletter-latest', label: 'Latest issue' },
            { href: '/blog/newsletter', label: 'Newsletter archive' },
            { href: '#featured', label: 'Featured entry' },
            { href: '#articles', label: 'Articles' },
            { href: '#themes', label: 'Themes' }
          ],
          topLatestEyebrow: 'Latest issue',
          topLatestTitle: 'The current Sanity-powered issue stays directly visible and immediately readable here.',
          topLatestBody:
            'The Munich circular is not hidden away. The page now begins with an actual slice of the issue itself.',
          topLatestSource: 'Originally imported from meditationmuenchen.org',
          topArchiveTitle: 'Newsletter archive',
          topArchiveBody:
            'All published issues remain collected here and easy to reopen.',
          topArticlesTitle: 'Articles',
          topArticlesBody:
            'Long-form writing on meditation, attention, Kundalini and lived practice.',
          topThemesTitle: 'Themes & journal',
          topThemesBody:
            'A space for broader editorial directions, experiential writing and future formats.',
          topOpenLatest: 'Open latest issue',
          topOpenArchive: 'Open archive',
          topOpenArticles: 'Go to articles',
          topOpenThemes: 'Go to themes',
          newsletterCta: 'Open latest issue',
          newsletterArchiveCta: 'Jump to archive',
          latestIssue: 'Latest issue',
          latestIssueEyebrow: 'Content from the latest issue',
          latestIssueTitle: 'The actual contents of the current issue begin directly here on the page.',
          latestIssueBody:
            'That keeps the most current issue immediately visible: programmes, meditation timings, regional links and selected reports can all be sensed at a glance. The full circular remains one click away.',
          highlightsEyebrow: 'From the latest issue',
          schedulePreviewEyebrow: 'Times & region',
          schedulePreviewTitle: 'A direct view of timings, places and regional links.',
          storyPreviewEyebrow: 'From the issue itself',
          storyPreviewTitle: 'One concrete story or retrospective remains visible straight away.',
          linksPreviewTitle: 'Key links from the issue',
          archiveEyebrow: 'Newsletter archive',
          archiveTitle: 'Circulars, event notes and archive issues now live openly inside the blog.',
          archiveIntro:
            'Each issue remains available as a designed page, can be extended later and still belongs to the same editorial environment as the rest of the blog.',
          archiveNoteTitle: 'Why this structure works better',
          archiveNoteBody:
            'Instead of hiding newsletters in a separate area or leaving them trapped in legacy HTML, they now appear here as curated editorial issues with a proper archive and a clear relationship to the rest of the site.',
          issueLabel: 'Issue',
          openIssue: 'Open issue',
          noNewsletterItems: 'No newsletters have been published yet.',
          featuredEyebrow: 'Featured entry',
          featuredTitle: 'Thoughtless awareness as a practical experience of the present moment',
          featuredBody:
            'Many people first approach meditation as a form of relief. It becomes more interesting when attention grows not only calmer but quieter, clearer and inwardly freer. That is why this is a strong first article to open the blog with.',
          featuredTags: ['Meditation', 'Stillness', 'Daily life', 'Attention'],
          featuredCta: 'Open article',
          entriesEyebrow: 'Selected articles',
          entriesTitle: 'Articles that already offer real depth',
          entriesIntro:
            'The cards below now belong to the blog itself and each one opens a dedicated blog article page.',
          cardCta: 'Read more',
          themesEyebrow: 'Further themes',
          themesTitle: 'Directions this blog can grow into',
          themesIntro:
            'Alongside foundational articles, this space also suits local updates, reflective writing and carefully edited pieces that deepen the site.',
          themes: [
            {
              title: 'Meditation in daily life',
              description:
                'Short, precise writing on how inner quiet, attention and balance can settle into the rhythm of ordinary days.'
            },
            {
              title: 'Programmes in Munich',
              description:
                'Announcements, special events, workshops and guidance for newcomers gathered in one clear place.'
            },
            {
              title: 'The subtle system, clearly explained',
              description:
                'Articles that unfold chakras, nadis, Kundalini and Self-Realization in more accessible language.'
            },
            {
              title: 'Experiences and voices',
              description:
                'Carefully phrased impressions from practice that build trust and make the path feel more tangible.'
            }
          ]
        };

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eef9ff_54%,#dff2ff_100%)]">
      <section className="section-band pb-10">
        <div className="section-shell">
          <div className="reveal-ready max-w-4xl">
            <span className="eyebrow">{copy.heroEyebrow}</span>
            <h1 className="mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl">{copy.heroTitle}</h1>
            <p className="mt-6 max-w-3xl text-[1.04rem] leading-8 text-slate-600 sm:text-[1.08rem]">
              {copy.heroIntro}
            </p>

            {latestVisibleNewsletter && (
              <article className="newsletter-stage reveal-ready mt-8 overflow-hidden p-6 sm:p-7">
                <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="eyebrow">{copy.spotlightEyebrow}</span>
                      <span className="eyebrow">
                        {copy.issueLabel} {latestVisibleNewsletter.issueLabel}
                      </span>
                    </div>
                    <h2 className="mt-4 text-[1.8rem] leading-tight text-slate-800 sm:text-[2.15rem]">
                      {copy.spotlightTitle}
                    </h2>
                    <p className="mt-4 max-w-3xl text-[0.98rem] leading-7 text-slate-600">
                      {copy.spotlightBody}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        to={latestVisibleNewsletter.route}
                        className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.98)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                      >
                        {copy.spotlightLatestCta}
                      </Link>
                      <Link
                        to="/blog/newsletter"
                        className="inline-flex items-center rounded-full border border-[#b35d4c]/20 bg-white/75 px-5 py-2.5 text-sm font-semibold text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/35 hover:bg-[rgba(255,250,246,0.96)]"
                      >
                        {copy.spotlightArchiveCta}
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-[1.35rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.84)] px-5 py-5 text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b56757]">
                      {latestVisibleNewsletter.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {formatNewsletterDate(latestVisibleNewsletter.publishedAt)}
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-7 text-slate-600">
                      {trimCardPreview(latestNewsletterIntroLine, 210)}
                    </p>
                  </div>
                </div>
              </article>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              {copy.sectionLinks.map(link => (
                <a key={link.href} href={link.href} className="hover-chip">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            {latestVisibleNewsletter ? (
              <article className="newsletter-stage reveal-ready overflow-hidden p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                  <div className="overflow-hidden rounded-[1.7rem] border border-[#b35d4c]/20 bg-white/72">
                    <img
                      src={latestVisibleNewsletter.heroImageUrl ?? motherImg}
                      alt={latestVisibleNewsletter.heroImageAlt}
                      className="h-[19rem] w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex h-full flex-col">
                    <div className="flex flex-wrap gap-2">
                      <span className="eyebrow">{copy.topLatestEyebrow}</span>
                      <span className="eyebrow">
                        {copy.issueLabel} {latestVisibleNewsletter.issueLabel}
                      </span>
                      <span className="eyebrow">{latestVisibleNewsletter.locale.toUpperCase()}</span>
                    </div>
                    <h2 className="mt-4 text-[2rem] leading-tight text-slate-800 sm:text-[2.35rem]">
                      {latestVisibleNewsletter.title}
                    </h2>
                    <p className="mt-4 text-[0.98rem] leading-7 text-slate-600">{copy.topLatestBody}</p>
                    <p className="mt-4 text-[0.98rem] leading-7 text-slate-600">
                      {trimCardPreview(latestNewsletterIntroLine, 280)}
                    </p>
                    <div className="mt-5 rounded-[1.25rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.86)] px-4 py-4">
                      <p className="text-sm text-slate-500">
                        {formatNewsletterDate(latestVisibleNewsletter.publishedAt)}
                      </p>
                      {latestNewsletterIssue?.sourceUrl && (
                        <a
                          href={latestNewsletterIssue.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                        >
                          {copy.topLatestSource} <span className="ml-2">→</span>
                        </a>
                      )}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to={latestVisibleNewsletter.route}
                        className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                      >
                        {copy.topOpenLatest}
                      </Link>
                      <Link
                        to="/blog/newsletter"
                        className="inline-flex items-center rounded-full border border-[#b35d4c]/20 bg-white/70 px-5 py-2.5 text-sm font-semibold text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/35 hover:bg-[rgba(255,250,246,0.96)]"
                      >
                        {copy.topOpenArchive}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ) : (
              <article className="newsletter-stage reveal-ready p-6 sm:p-8">
                <span className="eyebrow">{copy.topLatestEyebrow}</span>
                <h2 className="mt-4 text-[2rem] leading-tight text-slate-800 sm:text-[2.35rem]">
                  {copy.topLatestTitle}
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-slate-600">{copy.noNewsletterItems}</p>
              </article>
            )}

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
              <article className="card-soft warm-hover-glow reveal-ready p-5 sm:p-6">
                <span className="eyebrow">{copy.archiveEyebrow}</span>
                <h3 className="mt-4 text-[1.5rem] leading-tight text-[#b56757]">
                  {copy.topArchiveTitle}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-slate-600">{copy.topArchiveBody}</p>
                {!!latestNewsletterTopArchive.length && (
                  <div className="mt-4 space-y-3">
                    {latestNewsletterTopArchive.map(item => (
                      <Link
                        key={item.slug}
                        to={item.route}
                        className="flex items-center justify-between rounded-[1.1rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.82)] px-4 py-3 text-sm text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/32 hover:text-[#b56757]"
                      >
                        <span>
                          {item.issueLabel} · {item.title}
                        </span>
                        <span className="ml-4 text-[#b56757]">→</span>
                      </Link>
                    ))}
                  </div>
                )}
                <div className="mt-5">
                  <Link
                    to="/blog/newsletter"
                    className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                  >
                    {copy.topOpenArchive} <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>

              <article className="card-soft warm-hover-glow reveal-ready p-5 sm:p-6">
                <span className="eyebrow">{copy.entriesEyebrow}</span>
                <h3 className="mt-4 text-[1.5rem] leading-tight text-[#b56757]">
                  {copy.topArticlesTitle}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-slate-600">{copy.topArticlesBody}</p>
                <div className="mt-5">
                  <a
                    href={`#${locale === 'de' ? 'beitraege' : 'articles'}`}
                    className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                  >
                    {copy.topOpenArticles} <span className="ml-2">→</span>
                  </a>
                </div>
              </article>

              <article className="card-soft warm-hover-glow reveal-ready p-5 sm:p-6 sm:col-span-2 xl:col-span-1">
                <span className="eyebrow">{copy.themesEyebrow}</span>
                <h3 className="mt-4 text-[1.5rem] leading-tight text-[#b56757]">
                  {copy.topThemesTitle}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-slate-600">{copy.topThemesBody}</p>
                <div className="mt-5">
                  <a
                    href="#themes"
                    className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                  >
                    {copy.topOpenThemes} <span className="ml-2">→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {latestNewsletterIssue && (
        <section id="newsletter-latest" className="section-band pt-2">
          <div className="section-shell">
            <div className="reveal-ready max-w-4xl">
              <div className="flex flex-wrap gap-3">
                <span className="eyebrow">{copy.highlightsEyebrow}</span>
                <span className="eyebrow">
                  {copy.issueLabel} {latestNewsletterIssue.issueLabel}
                </span>
                <span className="eyebrow">{latestNewsletterIssue.locale.toUpperCase()}</span>
              </div>
              <h2 className="mt-5 max-w-4xl text-[2.25rem] leading-tight sm:text-[2.8rem]">
                {copy.latestIssueTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-[1rem] leading-8 text-slate-600">
                {copy.latestIssueBody}
              </p>
            </div>

            {!!latestNewsletterHighlights.length && (
              <div className="mt-8">
                <div className="reveal-ready max-w-4xl">
                  <h3 className="text-3xl sm:text-[2.25rem]">
                    {latestNewsletterIssue.featuredHeading ?? copy.latestIssueTitle}
                  </h3>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  {latestNewsletterHighlights.map(card => (
                    <article
                      key={`${card.title}-${card.body.slice(0, 18)}`}
                      className="newsletter-stage reveal-ready overflow-hidden p-5 sm:p-6"
                    >
                      {card.imageUrl && (
                        <div className="overflow-hidden rounded-[1.4rem] border border-[#b35d4c]/18 bg-white/70">
                          <img
                            src={card.imageUrl}
                            alt={card.imageAlt}
                            className="h-[14rem] w-full object-cover object-center"
                          />
                        </div>
                      )}
                      <div className="mt-4">
                        {card.eyebrow && <span className="eyebrow">{card.eyebrow}</span>}
                        <h3 className="mt-3 text-[1.45rem] leading-tight text-[#b56757]">
                          {card.title}
                        </h3>
                        {card.subtitle && (
                          <p className="mt-2 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            {card.subtitle}
                          </p>
                        )}
                        <p className="mt-4 text-[0.96rem] leading-7 text-slate-600">
                          {trimCardPreview(card.body, 220)}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
              <article className="newsletter-stage reveal-ready p-6 sm:p-7">
                <span className="eyebrow">{copy.schedulePreviewEyebrow}</span>
                <h3 className="mt-4 text-[1.95rem] leading-tight text-[#b56757]">
                  {copy.schedulePreviewTitle}
                </h3>
                {latestNewsletterIssue.scheduleNote && (
                  <p className="mt-4 text-[0.96rem] leading-7 text-slate-600">
                    {latestNewsletterIssue.scheduleNote}
                  </p>
                )}
                {!!latestNewsletterSchedule.length && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {latestNewsletterSchedule.map(item => (
                      <div
                        key={`${item.day}-${item.time ?? item.description}`}
                        className="rounded-[1.25rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.86)] px-4 py-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-[1.08rem] leading-tight text-[#b56757]">{item.day}</h4>
                          {item.time && <span className="eyebrow">{item.time}</span>}
                        </div>
                        <p className="mt-3 text-[0.94rem] leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {!!latestNewsletterRegionalLinks.length && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {latestNewsletterRegionalLinks.map(link => (
                      <a
                        key={`${link.label}-${link.url ?? 'nolink'}`}
                        href={link.url}
                        target={link.url ? '_blank' : undefined}
                        rel={link.url ? 'noreferrer' : undefined}
                        className="hover-chip"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>

              <article className="card-soft warm-hover-glow reveal-ready p-6 sm:p-7">
                <span className="eyebrow">{copy.storyPreviewEyebrow}</span>
                <h3 className="mt-4 text-[1.95rem] leading-tight text-[#b56757]">
                  {copy.storyPreviewTitle}
                </h3>
                {latestNewsletterStory && (
                  <>
                    <p className="mt-4 text-[1.18rem] leading-tight text-slate-700">
                      {latestNewsletterStory.title}
                    </p>
                    <p className="mt-4 text-[0.96rem] leading-7 text-slate-600">
                      {trimCardPreview(latestNewsletterStory.body, 340)}
                    </p>
                  </>
                )}
                {!!latestNewsletterRecommendedLinks.length && (
                  <div className="mt-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                      {copy.linksPreviewTitle}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {latestNewsletterRecommendedLinks.map(link => (
                        <a
                          key={`${link.label}-${link.url ?? 'nolink'}`}
                          href={link.url}
                          target={link.url ? '_blank' : undefined}
                          rel={link.url ? 'noreferrer' : undefined}
                          className="hover-chip"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>
      )}

      <section className="pb-2">
        <div className="section-shell">
          <NewsletterDivider />
        </div>
      </section>

      <section id="newsletter-archive" className="section-band pt-4">
        <div className="section-shell">
          <div className="card-soft warm-hover-glow reveal-ready p-7 sm:p-8">
            <span className="eyebrow">{copy.archiveEyebrow}</span>
            <h2 className="mt-4 text-4xl sm:text-[2.7rem]">{copy.archiveTitle}</h2>
            <p className="mt-5 max-w-4xl text-[1rem] leading-8 text-slate-600">{copy.archiveIntro}</p>
            <div className="mt-6 rounded-[1.3rem] border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.9)] px-5 py-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                {copy.archiveNoteTitle}
              </p>
              <p className="mt-3 text-[0.98rem] leading-7 text-slate-600">{copy.archiveNoteBody}</p>
            </div>
          </div>

          {isNewslettersLoading ? (
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
                        <span className="eyebrow">
                          {copy.issueLabel} {newsletter.issueLabel}
                        </span>
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
                          {formatNewsletterDate(newsletter.publishedAt)}
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
            <div className="mt-8 card-soft p-7 text-slate-600">{copy.noNewsletterItems}</div>
          )}
        </div>
      </section>

      <section className="pb-2">
        <div className="section-shell">
          <NewsletterDivider />
        </div>
      </section>

      <section id={locale === 'de' ? 'empfohlen' : 'featured'} className="section-band pt-4">
        <div className="section-shell">
          <article className="card-soft warm-hover-glow reveal-ready overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-7 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
              <div className="overflow-hidden rounded-[1.8rem] border border-[#b35d4c]/22 bg-white/70">
                <img
                  src={featuredArticle?.heroImage ?? chakraImg}
                  alt={featuredArticle?.heroImageAlt ?? (locale === 'de' ? 'Blogbild' : 'Blog image')}
                  className="h-[24rem] w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-col">
                <span className="eyebrow w-fit">{copy.featuredEyebrow}</span>
                <h2 className="mt-5 max-w-2xl text-[2rem] leading-tight sm:text-[2.4rem]">
                  {featuredArticle?.title ?? copy.featuredTitle}
                </h2>
                <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-slate-600">
                  {featuredArticle?.intro ?? copy.featuredBody}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {copy.featuredTags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex rounded-full border border-[#b35d4c]/24 bg-[rgba(255,250,246,0.92)] px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#b56757]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <Link
                    to={featuredArticle?.route ?? '/blog'}
                    className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                  >
                    {copy.featuredCta}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id={locale === 'de' ? 'beitraege' : 'articles'} className="section-band pt-6">
        <div className="section-shell">
          <div className="reveal-ready max-w-3xl">
            <span className="eyebrow">{copy.entriesEyebrow}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">{copy.entriesTitle}</h2>
            <p className="mt-5 text-[1.02rem] leading-8 text-slate-600">{copy.entriesIntro}</p>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-3">
            {articles.map(entry => (
              <article
                key={entry.route}
                className="card-soft warm-hover-glow reveal-ready flex h-full flex-col overflow-hidden"
              >
                <div className="overflow-hidden border-b border-[#b35d4c]/18 bg-white/60">
                  <img
                    src={entry.heroImage}
                    alt={entry.heroImageAlt}
                    className="h-[15rem] w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#b56757]">
                    {entry.category}
                  </p>
                  <h3 className="mt-3 text-[1.34rem] leading-tight text-[#b56757]">
                    {entry.cardTitle}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-slate-600">
                    {entry.cardDescription}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={entry.route}
                      className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                    >
                      {copy.cardCta} <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="themes" className="section-band pt-6">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <div className="card-soft warm-hover-glow reveal-ready p-7 sm:p-8">
              <span className="eyebrow">{copy.themesEyebrow}</span>
              <h2 className="mt-4 text-4xl sm:text-[2.7rem]">{copy.themesTitle}</h2>
              <p className="mt-5 text-[1rem] leading-8 text-slate-600">{copy.themesIntro}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {copy.themes.map(theme => (
                <article key={theme.title} className="interactive-card warm-hover-glow reveal-ready p-6">
                  <h3 className="text-[1.3rem] leading-tight">{theme.title}</h3>
                  <p className="mt-4 text-[0.97rem] leading-7 text-slate-600">
                    {theme.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;

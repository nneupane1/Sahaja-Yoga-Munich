import React from 'react';
import { Link } from 'react-router-dom';
import chakraImg from '../assets/chakra.png';
import { getBlogArticles, getBlogArticle } from '../content/blogArticles';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Dedicated editorial page for blog-style articles and future content.
 */
const BlogPage: React.FC = () => {
  const { locale } = useLocale();
  useScrollReveal('.reveal-ready', 'reveal', 0.18);
  const articles = getBlogArticles(locale);
  const featuredArticle = getBlogArticle(locale, '/blog/stille-und-aufmerksamkeit');

  const copy =
    locale === 'de'
      ? {
          heroEyebrow: 'Blog',
          heroTitle: 'Ein eigener redaktioneller Raum für Meditation, Wissen und Praxis.',
          heroIntro:
            'Hier werden längere Texte, praktische Vertiefungen, Impulse aus der Meditation und Hinweise auf neue Entwicklungen in München gebündelt. So bekommt der Blog einen klaren Platz im Gesamtauftritt statt nur ein leerer Menüpunkt zu bleiben.',
          sectionLinks: [
            { href: '#empfohlen', label: 'Empfohlener Einstieg' },
            { href: '#beitraege', label: 'Beiträge' },
            { href: '#themen', label: 'Weitere Themen' }
          ],
          noteTitle: 'Was diese Seite zusammenführt',
          noteBody:
            'Der Blog verbindet ruhige Einführung, vertiefende Lesestrecken und kommende Inhalte. Er eignet sich für Texte über Kundalini, Selbstverwirklichung, wissenschaftliche Perspektiven, kollektive Meditation und Hinweise auf besondere Programme.',
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
          heroTitle: 'A dedicated editorial space for meditation, knowledge and practice.',
          heroIntro:
            'This page gathers longer-form writing, practical reflections, meditative insights and updates from Munich in one clear place. The blog now has a proper destination in the site instead of remaining an empty navigation item.',
          sectionLinks: [
            { href: '#featured', label: 'Featured entry' },
            { href: '#articles', label: 'Articles' },
            { href: '#themes', label: 'Further themes' }
          ],
          noteTitle: 'What this page brings together',
          noteBody:
            'The blog combines calm introductions, deeper reading paths and future content. It is a natural home for writing on Kundalini, Self-Realization, scientific perspectives, collective meditation and programme updates.',
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
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="reveal-ready">
              <span className="eyebrow">{copy.heroEyebrow}</span>
              <h1 className="mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl">
                {copy.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-[1.04rem] leading-8 text-slate-600 sm:text-[1.08rem]">
                {copy.heroIntro}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {copy.sectionLinks.map(link => (
                  <a key={link.href} href={link.href} className="hover-chip">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <aside className="card-soft warm-hover-glow reveal-ready overflow-hidden p-4 sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#b35d4c]/22 bg-white/70">
                <img
                  src={chakraImg}
                  alt={locale === 'de' ? 'Chakra-Symbol' : 'Chakra symbol'}
                  className="h-[18rem] w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 rounded-[1.35rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.9)] px-5 py-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                  {copy.noteTitle}
                </p>
                <p className="mt-3 text-[0.98rem] leading-7 text-slate-600">{copy.noteBody}</p>
              </div>
            </aside>
          </div>
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

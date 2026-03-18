import React from 'react';
import { Link } from 'react-router-dom';
import { getBlogArticle, getBlogArticles } from '../content/blogArticles';
import { useLocale } from '../context/LocaleContext';

type BlogEntry = {
  category: string;
  title: string;
  description: string;
  to: string;
};

/**
 * Homepage preview section for blog-style reflections and deeper reading.
 */
const BlogSection: React.FC = () => {
  const { locale } = useLocale();
  const articles = getBlogArticles(locale);
  const featuredArticle = getBlogArticle(locale, '/blog/stille-und-aufmerksamkeit');
  const copy =
    locale === 'de'
      ? {
          eyebrow: 'Blog & Impulse',
          title: 'Texte, Vertiefungen und neue Perspektiven',
          intro:
            'Hier entsteht ein redaktioneller Bereich für Meditation im Alltag, das subtile System, wissenschaftliche Perspektiven und Hinweise auf kommende Programme in München.',
          pageCta: 'Zum Blog',
          noteTitle: 'Ein guter Ort für zukünftige Beiträge',
          noteBody:
            'Im Moment ist dieser Bereich als kuratierter Einstieg aufgebaut. Sobald ein CMS angeschlossen ist, können hier regelmäßig neue Beiträge, Hinweise und längere Artikel gepflegt werden.',
          featuredLabel: 'Zum Einstieg',
          featuredCta: 'Mehr zur Stille',
          cardCta: 'Zum Beitrag'
        }
      : {
          eyebrow: 'Blog & Reflections',
          title: 'Articles, depth and fresh perspectives',
          intro:
            'This section is being shaped as an editorial space for meditation in daily life, the subtle system, scientific perspectives and upcoming programmes in Munich.',
          pageCta: 'Open blog',
          noteTitle: 'A strong place for future posts',
          noteBody:
            'For now, this section works as a curated starting point. Once a CMS is connected, it can be updated continuously with articles, announcements and longer reflections.',
          featuredLabel: 'Start here',
          featuredCta: 'Read about stillness',
          cardCta: 'Open article'
        };

  return (
    <section id="blog" className="section-band scroll-mt-28 bg-[#e6f6ff]">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">{copy.title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-[1.05rem]">
              {copy.intro}
            </p>
            <div className="mt-6">
              <Link
                to="/blog"
                className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
              >
                {copy.pageCta}
              </Link>
            </div>
          </div>

          <aside className="card-soft warm-hover-glow max-w-xl p-5 sm:p-6">
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#b56757]">
              {copy.noteTitle}
            </p>
            <p className="mt-3 text-[0.98rem] leading-7 text-slate-600">{copy.noteBody}</p>
          </aside>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <article className="card-soft warm-hover-glow flex h-full flex-col p-7 sm:p-8">
            <span className="inline-flex w-fit rounded-full border border-[#b35d4c]/25 bg-[rgba(255,250,246,0.94)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
              {copy.featuredLabel}
            </span>
            <h3 className="mt-5 max-w-2xl text-[1.95rem] leading-tight text-[#b56757] sm:text-[2.2rem]">
              {featuredArticle?.title}
            </h3>
            <p className="mt-5 max-w-2xl flex-1 text-[1.02rem] leading-8 text-slate-600">
              {featuredArticle?.intro}
            </p>
            <div className="mt-7">
              <Link
                to={featuredArticle?.route ?? '/blog'}
                className="inline-flex items-center rounded-full border border-[#b35d4c]/30 bg-[rgba(255,250,246,0.96)] px-5 py-2.5 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
              >
                {copy.featuredCta}
              </Link>
            </div>
          </article>

          <div className="grid gap-6">
            {articles.map(entry => (
              <article key={entry.route} className="card-soft warm-hover-glow flex h-full flex-col p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#b56757]">
                  {entry.category}
                </p>
                <h3 className="mt-3 text-[1.34rem] leading-tight text-[#b56757]">{entry.cardTitle}</h3>
                <p className="mt-3 flex-1 text-[0.98rem] leading-7 text-slate-600">
                  {entry.cardDescription}
                </p>
                <div className="mt-5">
                  <Link
                    to={entry.route}
                    className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                  >
                    {copy.cardCta} <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

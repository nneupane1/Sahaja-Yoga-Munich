import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { getBlogArticle } from '../content/blogArticles';
import { getSanityBlogArticleBundle } from '../content/sanityBlog';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Dedicated page for a single blog article.
 */
const BlogArticleRoute: React.FC = () => {
  const location = useLocation();
  const { locale } = useLocale();
  useScrollReveal('.reveal-ready', 'reveal', 0.18);

  const staticArticle = useMemo(() => getBlogArticle(locale, location.pathname), [locale, location.pathname]);
  const staticRelatedArticles = useMemo(
    () => staticArticle?.related.map(route => getBlogArticle(locale, route)).filter(Boolean) ?? [],
    [locale, staticArticle]
  );
  const [article, setArticle] = useState(staticArticle);
  const [relatedArticles, setRelatedArticles] = useState(staticRelatedArticles);
  const [isResolving, setIsResolving] = useState(!staticArticle);

  useEffect(() => {
    setArticle(staticArticle);
    setRelatedArticles(staticRelatedArticles);
    setIsResolving(!staticArticle);

    let cancelled = false;

    getSanityBlogArticleBundle(locale, location.pathname)
      .then(bundle => {
        if (cancelled) {
          return;
        }

        if (bundle) {
          setArticle(bundle.article);
          setRelatedArticles(bundle.relatedArticles);
          setIsResolving(false);
          return;
        }

        setIsResolving(false);
      })
      .catch(() => {
        if (!cancelled) {
          setIsResolving(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [locale, location.pathname, staticArticle, staticRelatedArticles]);

  if (!article && isResolving) {
    return (
      <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eef9ff_54%,#dff2ff_100%)]">
        <section className="section-band pb-10">
          <div className="section-shell">
            <div className="card-soft p-8 text-slate-600">
              {locale === 'de' ? 'Blogbeitrag wird geladen …' : 'Loading article …'}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const copy =
    locale === 'de'
      ? {
          back: 'Zurück zum Blog',
          relatedEyebrow: 'Weiterlesen',
          relatedTitle: 'Weitere Beiträge aus dem Blog'
        }
      : {
          back: 'Back to blog',
          relatedEyebrow: 'Continue reading',
          relatedTitle: 'More posts from the blog'
        };

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eef9ff_54%,#dff2ff_100%)]">
      <section className="section-band pb-10">
        <div className="section-shell">
          <div className="reveal-ready">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-x-1"
            >
              ← {copy.back}
            </Link>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className="reveal-ready">
              <span className="eyebrow">{article.eyebrow}</span>
              <h1 className="mt-5 max-w-4xl text-5xl leading-tight sm:text-6xl">{article.title}</h1>
              <p className="mt-6 max-w-3xl text-[1.04rem] leading-8 text-slate-600 sm:text-[1.08rem]">
                {article.intro}
              </p>
            </div>

            <aside className="card-soft warm-hover-glow reveal-ready overflow-hidden p-4 sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#b35d4c]/22 bg-white/70">
                <img
                  src={article.heroImage}
                  alt={article.heroImageAlt}
                  className="h-[18.5rem] w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 rounded-[1.35rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.9)] px-5 py-4">
                <p className="text-[0.98rem] leading-7 text-slate-600">{article.heroNote}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-band pt-4">
        <div className="section-shell">
          <div className="grid gap-6">
            {article.sections.map(section => (
              <article key={section.title} className="card-soft warm-hover-glow reveal-ready p-7 sm:p-8">
                <h2 className="text-[1.9rem] leading-tight sm:text-[2.15rem]">{section.title}</h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map(paragraph => (
                    <p key={paragraph} className="text-[1rem] leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.points && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {section.points.map(point => (
                      <span
                        key={point}
                        className="inline-flex rounded-full border border-[#b35d4c]/24 bg-[rgba(255,250,246,0.92)] px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-[#b56757]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band pt-6">
        <div className="section-shell">
          <div className="reveal-ready max-w-3xl">
            <span className="eyebrow">{copy.relatedEyebrow}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">{copy.relatedTitle}</h2>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {relatedArticles.map(related => (
              <article
                key={related.route}
                className="card-soft warm-hover-glow reveal-ready flex h-full flex-col overflow-hidden"
              >
                <div className="overflow-hidden border-b border-[#b35d4c]/18 bg-white/60">
                  <img
                    src={related.heroImage}
                    alt={related.heroImageAlt}
                    className="h-[15rem] w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#b56757]">
                    {related.category}
                  </p>
                  <h3 className="mt-3 text-[1.34rem] leading-tight text-[#b56757]">
                    {related.cardTitle}
                  </h3>
                  <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-slate-600">
                    {related.cardDescription}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={related.route}
                      className="inline-flex items-center text-sm font-semibold text-[#b56757] transition duration-300 hover:translate-x-1"
                    >
                      {locale === 'de' ? 'Weiterlesen' : 'Read more'} <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogArticleRoute;

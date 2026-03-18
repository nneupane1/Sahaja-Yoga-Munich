import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import KnowledgeArticlePage from '../components/KnowledgeArticlePage';
import {
  getHubKnowledgeArticles,
  getKnowledgeArticle,
  getKnowledgeArticles,
  type KnowledgeArticle
} from '../content/knowledgeArticles';
import { useLocale } from '../context/LocaleContext';

/**
 * Resolves the current nested knowledge route into its localized article page.
 */
const KnowledgeArticleRoute: React.FC = () => {
  const location = useLocation();
  const { locale } = useLocale();
  const article = getKnowledgeArticle(locale, location.pathname);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  const articles = getKnowledgeArticles(locale);
  const relatedArticles = article.related
    .map(route => articles[route])
    .filter((item): item is KnowledgeArticle => Boolean(item));
  const siblingArticles = getHubKnowledgeArticles(locale, article.hubRoute).filter(
    item => item.route !== article.route
  );

  return (
    <KnowledgeArticlePage
      article={article}
      relatedArticles={relatedArticles}
      siblingArticles={siblingArticles}
    />
  );
};

export default KnowledgeArticleRoute;

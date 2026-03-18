import React from 'react';
import { useLocale } from '../context/LocaleContext';
import TopicPage from '../components/TopicPage';
import { topicPages } from '../content/topicPages';
import { topicPagesEn } from '../content/topicPagesEn';

/**
 * Dedicated route for culture of the spirit content.
 */
const KulturPage: React.FC = () => {
  const { locale } = useLocale();
  const pages = locale === 'de' ? topicPages : topicPagesEn;

  return <TopicPage page={pages.culture} />;
};

export default KulturPage;

import React from 'react';
import { useLocale } from '../context/LocaleContext';
import TopicPage from '../components/TopicPage';
import { topicPages } from '../content/topicPages';
import { topicPagesEn } from '../content/topicPagesEn';

/**
 * Dedicated route for science and spirituality content.
 */
const WissenschaftPage: React.FC = () => {
  const { locale } = useLocale();
  const pages = locale === 'de' ? topicPages : topicPagesEn;

  return <TopicPage page={pages.science} />;
};

export default WissenschaftPage;

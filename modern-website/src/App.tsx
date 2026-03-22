import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogArticleRoute from './pages/BlogArticleRoute';
import NewsletterPage from './pages/NewsletterPage';
import NewsletterRoute from './pages/NewsletterRoute';
import ShriMatajiPage from './pages/ShriMatajiPage';
import KundaliniPage from './pages/KundaliniPage';
import SelbstverwirklichungPage from './pages/SelbstverwirklichungPage';
import WissenschaftPage from './pages/WissenschaftPage';
import KulturPage from './pages/KulturPage';
import KnowledgeArticleRoute from './pages/KnowledgeArticleRoute';

/**
 * Root application shell and route setup.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#dff4ff_0%,#edf9ff_46%,#e3f4ff_100%)]">
      <ScrollToHash />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticleRoute />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/newsletter/:slug" element={<NewsletterRoute />} />
        <Route path="/shri-mataji" element={<ShriMatajiPage />} />
        <Route path="/shri-mataji/biografie" element={<ShriMatajiPage />} />
        <Route path="/shri-mataji/geistige-arbeit" element={<ShriMatajiPage />} />
        <Route path="/shri-mataji/oeffentliche-programme" element={<ShriMatajiPage />} />
        <Route path="/shri-mataji/zeitleiste" element={<ShriMatajiPage />} />
        <Route path="/shri-mataji/vermaechtnis" element={<ShriMatajiPage />} />
        <Route path="/kundalini-energiesystem" element={<KundaliniPage />} />
        <Route
          path="/selbstverwirklichung-meditation"
          element={<SelbstverwirklichungPage />}
        />
        <Route path="/wissenschaft-spiritualitaet" element={<WissenschaftPage />} />
        <Route path="/kultur-des-geistes" element={<KulturPage />} />
        <Route path="/:hub/:article" element={<KnowledgeArticleRoute />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

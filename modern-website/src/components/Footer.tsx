import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';

/**
 * Footer shows site meta information at the bottom of the page.
 */
const Footer: React.FC = () => {
  const { locale } = useLocale();
  const copy =
    locale === 'de'
      ? {
          address: 'Sahaja Yoga Zentrum München, Am Lilienberg 2a, 81669 München',
          note: 'Alle Treffen sind kostenfrei und für alle offen - Einstieg jederzeit möglich.',
          newsletter: 'Newsletter-Archiv',
          blog: 'Blog'
        }
      : {
          address: 'Sahaja Yoga Centre Munich, Am Lilienberg 2a, 81669 Munich',
          note: 'All sessions are free of charge and open to everyone - you can join at any time.',
          newsletter: 'Newsletter archive',
          blog: 'Blog'
        };

  return (
    <footer className="border-t border-[#b35d4c]/18 bg-[#d8efff] py-8 text-center text-[0.95rem] text-slate-700">
      <div className="section-shell space-y-2">
        <p>{copy.address}</p>
        <p>
          Whatsapp/Mobil: <a href="tel:+4917694169665">+49 176 941 696 65</a> · E-Mail:{' '}
          <a href="mailto:anmeldung@meditationmuenchen.org">anmeldung@meditationmuenchen.org</a>
        </p>
        <p>{copy.note}</p>
        <p className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#b35d4c]">
          <Link to="/newsletter" className="font-semibold transition hover:text-[#9c4b3d]">
            {copy.newsletter}
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/blog" className="font-semibold transition hover:text-[#9c4b3d]">
            {copy.blog}
          </Link>
        </p>
        <p>© 2026 Sahaja Yoga Kultur e. V.</p>
      </div>
    </footer>
  );
};

export default Footer;

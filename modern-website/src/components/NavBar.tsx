import React from 'react';
import { Link } from 'react-router-dom';
import shaktiYantram from '../assets/shaktiyantram-clean.png';
import kundaliniIcon from '../assets/kundalini-clean.png';
import { useLocale } from '../context/LocaleContext';
import { topicPages } from '../content/topicPages';
import { topicPagesEn } from '../content/topicPagesEn';
import { getKnowledgeArticle } from '../content/knowledgeArticles';

type NavItem = {
  label: string;
  to: string;
  dropdown?: Array<{ label: string; to: string }>;
  kind?: 'default' | 'button';
};

/**
 * Sticky navigation bar with route and hash links.
 */
const NavBar: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const pages = locale === 'de' ? topicPages : topicPagesEn;
  const copy =
    locale === 'de'
      ? {
          home: 'Startseite',
          brand: 'Sahaja Yoga München',
          shriMataji: 'Shri Mataji',
          shriDropdown: ['Biografie', 'Geistige Arbeit', 'Öffentliche Programme', 'Zeitleiste', 'Vermächtnis'],
          blog: 'Blog',
          contact: 'Kontakt'
        }
      : {
          home: 'Home',
          brand: 'Sahaja Yoga München',
          shriMataji: 'Shri Mataji',
          shriDropdown: ['Biography', 'Spiritual Work', 'Public Programs', 'Timeline', 'Legacy'],
          blog: 'Blog',
          contact: 'Contact'
        };

  const withArticleLabels = (
    sections: Array<{ navLabel: string; to: string }>
  ) =>
    sections.map(section => ({
      label: getKnowledgeArticle(locale, section.to)?.navLabel ?? section.navLabel,
      to: section.to
    }));

  const kundaliniDropdown = [
    {
      label: locale === 'de' ? 'Der subtile Körper' : 'The Subtle Body',
      to: pages.kundalini.route
    },
    ...withArticleLabels(pages.kundalini.sections)
  ];

  const links: NavItem[] = [
    { label: copy.home, to: '/' },
    {
      label: copy.shriMataji,
      to: '/shri-mataji',
      dropdown: [
        { label: copy.shriDropdown[0], to: '/shri-mataji/biografie' },
        { label: copy.shriDropdown[1], to: '/shri-mataji/geistige-arbeit' },
        { label: copy.shriDropdown[2], to: '/shri-mataji/oeffentliche-programme' },
        { label: copy.shriDropdown[3], to: '/shri-mataji/zeitleiste' },
        { label: copy.shriDropdown[4], to: '/shri-mataji/vermaechtnis' }
      ]
    },
    {
      label: pages.kundalini.navLabel,
      to: pages.kundalini.route,
      dropdown: kundaliniDropdown
    },
    {
      label: pages.selfRealization.navLabel,
      to: pages.selfRealization.route,
      dropdown: withArticleLabels(pages.selfRealization.sections)
    },
    {
      label: pages.science.navLabel,
      to: pages.science.route,
      dropdown: withArticleLabels(pages.science.sections)
    },
    {
      label: pages.culture.navLabel,
      to: pages.culture.route,
      dropdown: withArticleLabels(pages.culture.sections)
    },
    { label: copy.blog, to: '/blog' },
    { label: copy.contact, to: '/#contact', kind: 'button' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#bfe4f8]/95 shadow-[0_1px_6px_rgba(74,113,143,0.12)] backdrop-blur">
      <div className="flex w-full items-center gap-9 px-4 py-[0.875rem] sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3.5 whitespace-nowrap text-[1.16rem] font-bold text-slate-800"
          >
            <span className="-my-[0.875rem] -translate-y-px flex shrink-0 items-center">
              <img
                src={shaktiYantram}
                alt="Shakti Yantram"
                className="animate-yantram-spin h-[5.05rem] w-[5.05rem] object-contain mix-blend-multiply drop-shadow-[0_8px_14px_rgba(179,93,76,0.14)]"
              />
            </span>
            <span className="animate-drift-x ml-1.5 translate-y-[2px] flex items-center gap-1 uppercase">
              <span>Sahaja Yoga</span>
              <span className="-ml-6 relative inline-block h-0 w-[4.84rem] shrink-0 overflow-visible align-middle">
                <img
                  src={kundaliniIcon}
                  alt="Kundalini"
                  className="absolute left-[-0.08rem] top-1/2 h-[4.37rem] w-[4.37rem] -translate-y-[60%] object-contain opacity-100 contrast-125 saturate-125 drop-shadow-[0_10px_18px_rgba(179,93,76,0.24)]"
                />
              </span>
              <span className="-ml-[1.95rem]">München</span>
            </span>
          </Link>
        </div>

        <div className="ml-[5.175rem] overflow-visible">
          <div className="flex shrink-0 items-center gap-[1.45rem] whitespace-nowrap text-[0.97rem] font-normal text-slate-800">
            {links.map(link => {
              const hasDropdown = Boolean(link.dropdown?.length);
              const isButton = link.kind === 'button';
              const isHome = link.to === '/';
              const isCompressedGapItem = [
                '/shri-mataji',
                pages.kundalini.route,
                pages.selfRealization.route,
                pages.science.route,
                pages.culture.route
              ].includes(link.to);
              const isReducedSizeItem = [
                '/shri-mataji',
                pages.kundalini.route,
                pages.selfRealization.route,
                pages.science.route,
                pages.culture.route,
                '/blog'
              ].includes(link.to);
              const isSlightlyRaisedItem = [
                '/shri-mataji',
                pages.kundalini.route,
                pages.selfRealization.route,
                pages.science.route,
                pages.culture.route,
                '/blog',
                '/#contact'
              ].includes(link.to);
              const showCaret = !isButton && hasDropdown && link.to !== '/';

              return (
                <div
                  key={link.label}
                  className={`relative shrink-0 ${hasDropdown ? 'group' : ''} hover:z-[70]`}
                >
                  <Link
                    to={link.to}
                    className={
                      isButton
                        ? 'inline-flex shrink-0 translate-y-px transform-gpu items-center rounded-full bg-[#c8715f] px-[0.8rem] py-[0.3rem] text-[0.72rem] font-bold leading-none text-white shadow-[0_12px_24px_rgba(168,88,69,0.24)] transition duration-200 hover:z-[70] hover:scale-[1.04] hover:bg-[#d7795d]'
                        : `flex shrink-0 ${
                            showCaret ? 'translate-y-[7px] ' : isSlightlyRaisedItem ? 'translate-y-px ' : ''
                          }transform-gpu flex-col items-center justify-center rounded-[1rem] ${
                            isCompressedGapItem ? 'px-[0.3125rem] ' : 'px-[0.5625rem] '
                          }py-1 text-center leading-[1.15] transition duration-200 hover:z-[70] hover:scale-[1.05] hover:bg-[rgba(215,121,93,0.11)] hover:font-bold hover:text-[#d7795d] ${
                            isReducedSizeItem ? 'text-[0.91rem] ' : ''
                          }${
                            isHome ? 'text-[#b35d4c] font-medium' : ''
                          }`
                    }
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {showCaret && (
                      <span
                        aria-hidden="true"
                        className="-translate-y-px inline-flex h-3 w-3 items-center justify-center text-[#d7795d] transition duration-200 group-hover:text-[#d7795d]"
                      >
                        <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                          <path
                            d="M2.5 4.25 6 7.75 9.5 4.25"
                            stroke="currentColor"
                            strokeWidth="1.35"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </Link>

                  {hasDropdown && (
                    <div className="pointer-events-none absolute left-1/2 top-full z-50 hidden min-w-[16rem] -translate-x-1/2 pt-4 group-hover:block group-hover:pointer-events-auto group-focus-within:block group-focus-within:pointer-events-auto">
                      <div className="rounded-[1.4rem] border border-[#b35d4c]/24 bg-[rgba(255,241,233,0.82)] p-3 shadow-[0_20px_50px_rgba(74,113,143,0.16)] backdrop-blur">
                        {link.dropdown?.map(item => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="relative flex min-h-[3.15rem] items-center rounded-xl px-4 py-3 text-sm leading-snug text-slate-700 transition duration-200 hover:z-[70] hover:scale-[1.04] hover:bg-[rgba(215,121,93,0.11)] hover:font-bold hover:text-[#d7795d]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="-ml-3 flex translate-x-[4px] translate-y-[9px] items-center gap-1">
              <div className="group relative flex flex-col items-center gap-px">
                <button
                  type="button"
                  onClick={() => setLocale('de')}
                  aria-label="Deutsch"
                  className={`inline-flex h-[1.15rem] w-[1.15rem] items-center justify-center rounded-full border text-[0.48rem] leading-none shadow-[0_6px_14px_rgba(72,110,140,0.08)] transition ${
                    locale === 'de'
                      ? 'border-[#b35d4c]/30 bg-[rgba(255,250,246,0.95)] text-[#b35d4c]'
                      : 'border-[#b35d4c]/18 bg-white/75 text-slate-500 hover:border-[#b35d4c]/30 hover:text-[#b35d4c]'
                  }`}
                >
                  <span className="text-[0.58rem] leading-none">🇩🇪</span>
                </button>
                <span
                  aria-hidden="true"
                  className="inline-flex h-[0.68rem] w-[0.68rem] items-center justify-center text-[#b35d4c]"
                >
                  <svg viewBox="0 0 12 12" fill="none" className="h-[0.68rem] w-[0.68rem]">
                    <path
                      d="M2.5 4.25 6 7.75 9.5 4.25"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <div className="pointer-events-none absolute left-1/2 top-full z-50 hidden -translate-x-1/2 pt-1 group-hover:block group-hover:pointer-events-auto group-focus-within:block group-focus-within:pointer-events-auto">
                  <div className="rounded-[1rem] border border-[#b35d4c]/24 bg-[rgba(255,241,233,0.82)] p-2 shadow-[0_20px_50px_rgba(74,113,143,0.16)] backdrop-blur">
                    <button
                      type="button"
                      onClick={() => setLocale('en')}
                      aria-label="English"
                      className={`inline-flex h-[1.25rem] w-[1.25rem] items-center justify-center rounded-full border text-[0.48rem] leading-none shadow-[0_6px_14px_rgba(72,110,140,0.08)] transition ${
                        locale === 'en'
                          ? 'border-[#b35d4c]/30 bg-[rgba(255,250,246,0.95)] text-[#b35d4c]'
                          : 'border-[#b35d4c]/18 bg-white/75 text-slate-500 hover:border-[#b35d4c]/30 hover:text-[#b35d4c]'
                      }`}
                    >
                      <span className="text-[0.58rem] leading-none">🇬🇧</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

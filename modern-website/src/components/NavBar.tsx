import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const { locale, setLocale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
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

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpandedItem(null);
  }, [location.pathname, location.hash, locale]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  const toggleMobileItem = (label: string) => {
    setMobileExpandedItem(current => (current === label ? null : label));
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#bfe4f8]/95 shadow-[0_1px_6px_rgba(74,113,143,0.12)] backdrop-blur">
      <div className="xl:hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <img
              src={shaktiYantram}
              alt="Shakti Yantram"
              className="h-[3.15rem] w-[3.15rem] shrink-0 object-contain mix-blend-multiply drop-shadow-[0_8px_14px_rgba(179,93,76,0.14)]"
            />
            <span className="min-w-0 uppercase leading-none text-slate-800">
              <span className="block truncate text-[0.92rem] font-bold tracking-[0.04em]">
                Sahaja Yoga
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-[0.92rem] font-bold tracking-[0.04em]">
                <img
                  src={kundaliniIcon}
                  alt="Kundalini"
                  className="h-[1.45rem] w-[1.45rem] shrink-0 object-contain opacity-100 contrast-125 saturate-125 drop-shadow-[0_8px_12px_rgba(179,93,76,0.18)]"
                />
                <span className="truncate">München</span>
              </span>
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center rounded-full border border-[#b35d4c]/20 bg-[rgba(255,250,246,0.92)] p-1 shadow-[0_8px_16px_rgba(72,110,140,0.08)]">
              <button
                type="button"
                onClick={() => setLocale('de')}
                aria-label="Deutsch"
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[0.72rem] font-semibold transition ${
                  locale === 'de'
                    ? 'bg-[#c8715f] text-white shadow-[0_8px_14px_rgba(168,88,69,0.22)]'
                    : 'text-[#b35d4c]'
                }`}
              >
                <span aria-hidden="true">🇩🇪</span>
                <span>DE</span>
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                aria-label="English"
                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[0.72rem] font-semibold transition ${
                  locale === 'en'
                    ? 'bg-[#c8715f] text-white shadow-[0_8px_14px_rgba(168,88,69,0.22)]'
                    : 'text-[#b35d4c]'
                }`}
              >
                <span aria-hidden="true">🇬🇧</span>
                <span>EN</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(current => !current)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b35d4c]/20 bg-[rgba(255,250,246,0.92)] text-[#b35d4c] shadow-[0_8px_16px_rgba(72,110,140,0.08)] transition hover:border-[#b35d4c]/35 hover:bg-[rgba(255,244,238,0.98)]"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                {mobileMenuOpen ? (
                  <path
                    d="M6 6 18 18M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />
                ) : (
                  <>
                    <path
                      d="M4.5 7.25h15"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.5 12h15"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4.5 16.75h15"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                    />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#b35d4c]/14 bg-[rgba(255,250,246,0.95)] px-4 pb-4 pt-3 shadow-[0_18px_40px_rgba(72,110,140,0.08)] backdrop-blur sm:px-5">
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto pb-1">
              <div className="grid gap-3">
                {links.map(link => {
                  const hasDropdown = Boolean(link.dropdown?.length);
                  const isButton = link.kind === 'button';
                  const isExpanded = mobileExpandedItem === link.label;

                  if (!hasDropdown) {
                    return (
                      <Link
                        key={link.label}
                        to={link.to}
                        className={`flex min-h-[3.55rem] items-center rounded-[1.25rem] border px-4 py-4 text-base font-semibold shadow-[0_10px_22px_rgba(72,110,140,0.06)] transition ${
                          isButton
                            ? 'border-[#c8715f]/40 bg-[#c8715f] text-white'
                            : 'border-[#b35d4c]/18 bg-white/80 text-slate-800 hover:border-[#b35d4c]/32 hover:bg-[rgba(255,244,238,0.98)] hover:text-[#b35d4c]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={link.label}
                      className="overflow-hidden rounded-[1.25rem] border border-[#b35d4c]/18 bg-white/80 shadow-[0_10px_22px_rgba(72,110,140,0.06)]"
                    >
                      <div className="flex items-center gap-3 px-4 py-3.5">
                        <Link
                          to={link.to}
                          className="min-w-0 flex-1 text-base font-semibold text-slate-800 transition hover:text-[#b35d4c]"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileItem(link.label)}
                          aria-label={`Toggle ${link.label}`}
                          aria-expanded={isExpanded}
                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b35d4c]/18 bg-[rgba(255,250,246,0.94)] text-[#b35d4c] transition hover:border-[#b35d4c]/34 hover:bg-[rgba(255,244,238,0.98)]"
                        >
                          <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            className={`h-4 w-4 transition duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          >
                            <path
                              d="M2.5 4.25 6 7.75 9.5 4.25"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden border-t border-[#b35d4c]/12 px-3 pb-3 pt-2">
                          <div className="grid gap-2">
                            {link.dropdown?.map(item => (
                              <Link
                                key={item.to}
                                to={item.to}
                                className="rounded-[1rem] border border-[#b35d4c]/12 bg-[rgba(255,250,246,0.72)] px-3.5 py-3 text-sm leading-6 text-slate-700 transition hover:border-[#b35d4c]/28 hover:bg-[rgba(255,244,238,0.98)] hover:text-[#b35d4c]"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="hidden w-full items-center gap-9 px-4 py-[0.875rem] sm:px-6 lg:px-8 xl:flex">
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

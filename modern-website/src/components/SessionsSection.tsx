import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';

/**
 * Weekly session schedule.
 */
const SessionsSection: React.FC = () => {
  const { locale } = useLocale();
  const copy =
    locale === 'de'
      ? {
          eyebrow: 'Zeiten, Ort und Kontakt',
          title: 'Meditationszeiten in München',
          intro:
            'Hier findest du die regelmäßigen Sahaja-Yoga-Treffen in München, den Veranstaltungsort und die schnellsten Kontaktwege auf einen Blick.',
          cityLinksLead:
            'Weitere Sahaja-Yoga-Meditationszentren in anderen Städten im ganzen Land findest du hier.',
          cityLinksCta: 'Hier klicken',
          newsletterLead:
            'Öffne das Newsletter-Archiv mit Rundbriefen, Veranstaltungen, Rückblicken und redaktionellen Hinweisen aus München.',
          newsletterTitle: 'Zum Newsletter-Archiv',
          newsletterCta: 'Newsletter',
          contactTitle: 'Vor Ort in München',
          contactHeadline: 'Ein offener Raum für ruhige, geführte Meditation',
          contactIntro:
            'Neueinsteiger und erfahrene Meditierende sind gleichermaßen willkommen. Die Treffen finden in entspannter Atmosphäre statt und können ohne Vorkenntnisse besucht werden.',
          contactItems: [
            {
              label: 'Adresse',
              value: 'Am Lilienberg 2a, 81669 München',
              wide: true,
              mapsHref:
                'https://www.google.com/maps/search/?api=1&query=Am+Lilienberg+2a,+81669+M%C3%BCnchen'
            },
            { label: 'Whatsapp / Mobil', value: '+49 176 941 696 65', href: 'tel:+4917694169665' },
            {
              label: 'E-Mail',
              value: 'anmeldung@meditationmuenchen.org',
              href: 'mailto:anmeldung@meditationmuenchen.org',
              wide: true
            }
          ],
          freeNote:
            'Alle Treffen sind kostenlos und offen. Für den Samstag bitten wir nur um eine kurze Anmeldung.',
          scheduleEyebrow: 'Wöchentliche Zeiten',
          scheduleTitle: 'Unsere regelmäßigen Treffen',
          scheduleIntro:
            'Wähle einfach den Abend, der für dich am besten passt, und komme in München dazu. Wie immer ist die Teilnahme kostenlos.',
          sessions: [
            {
              day: 'Montag',
              time: '18:30',
              description:
                'Meditation in italienischer Sprache, englischsprachige Gäste willkommen'
            },
            {
              day: 'Dienstag',
              time: '18:30',
              description: 'Meditation in englischer Sprache',
              note: 'Nicht während der Schulferien'
            },
            {
              day: 'Donnerstag',
              time: '19:30',
              description:
                'Offene Meditationsgruppe mit Einführung, feinstofflichem Wissen und geleiteter Meditation'
            },
            {
              day: 'Freitag',
              time: '19:30',
              description: 'Internationale Meditation und Young Generation'
            },
            {
              day: 'Samstag',
              time: '18:30',
              description: 'Geleitete Meditation für Fortgeschrittene',
              note: 'Anmeldung erforderlich'
            },
            {
              day: 'Sonntag',
              time: '18:30',
              description: 'Auf Anfrage für interessierte Gruppen'
            }
          ]
        }
      : {
          eyebrow: 'Times, venue and contact',
          title: 'Meditation Times in Munich',
          intro:
            'Here you can find our regular Sahaja Yoga meetings in Munich, the venue and the quickest ways to contact us.',
          cityLinksLead:
            'More Sahaja Yoga meditation centres in other cities across the country can be found here.',
          cityLinksCta: 'Click here',
          newsletterLead:
            'Open the newsletter archive with circulars, events, retrospectives and editorial updates from Munich.',
          newsletterTitle: 'Open the newsletter archive',
          newsletterCta: 'Newsletter',
          contactTitle: 'In Munich',
          contactHeadline: 'A welcoming space for calm, guided meditation',
          contactIntro:
            'Beginners and experienced meditators are equally welcome. The sessions are held in a relaxed atmosphere and can be joined without prior experience.',
          contactItems: [
            {
              label: 'Address',
              value: 'Am Lilienberg 2a, 81669 Munich',
              wide: true,
              mapsHref:
                'https://www.google.com/maps/search/?api=1&query=Am+Lilienberg+2a,+81669+M%C3%BCnchen'
            },
            { label: 'WhatsApp / Mobile', value: '+49 176 941 696 65', href: 'tel:+4917694169665' },
            {
              label: 'Email',
              value: 'anmeldung@meditationmuenchen.org',
              href: 'mailto:anmeldung@meditationmuenchen.org',
              wide: true
            }
          ],
          freeNote:
            'All sessions are free and open. We only ask for a short registration for Saturday.',
          scheduleEyebrow: 'Weekly schedule',
          scheduleTitle: 'Our regular sessions',
          scheduleIntro:
            'Choose the evening that suits you best and join us for meditation in Munich. As always, participation is free.',
          sessions: [
            {
              day: 'Monday',
              time: '18:30',
              description: 'Meditation in Italian, English speakers welcome'
            },
            {
              day: 'Tuesday',
              time: '18:30',
              description: 'Meditation in English',
              note: 'Not during school holidays'
            },
            {
              day: 'Thursday',
              time: '19:30',
              description:
                'Open meditation group with introduction, subtle-system knowledge and guided meditation'
            },
            {
              day: 'Friday',
              time: '19:30',
              description: 'International meditation and Young Generation'
            },
            {
              day: 'Saturday',
              time: '18:30',
              description: 'Guided meditation for experienced practitioners',
              note: 'Registration required'
            },
            {
              day: 'Sunday',
              time: '18:30',
              description: 'On request for interested groups'
            }
          ]
        };

  return (
    <section
      id="sessions"
      className="section-band bg-[linear-gradient(180deg,#dff4ff_0%,#e9f7ff_48%,#dff2ff_100%)]"
    >
      <div className="section-shell">
        <div id="community" aria-hidden="true" className="relative -top-24" />
        <div className="max-w-4xl">
          <div>
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">{copy.title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#334155] sm:text-lg">
              {copy.intro}
            </p>
          </div>
        </div>

        <div className="card-soft warm-hover-glow mt-12 overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="flex min-w-0 flex-col gap-4">
              <aside className="warm-hover-glow relative min-w-0 overflow-hidden rounded-[1.7rem] border border-[#d8a08d]/32 bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(255,245,239,0.48))] p-6 shadow-[0_20px_42px_rgba(179,93,76,0.08)] sm:p-7">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(214,125,92,0.14)_0%,rgba(214,125,92,0)_72%)]" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(110,181,192,0.16)_0%,rgba(110,181,192,0)_72%)]" />
                <p className="relative text-sm font-semibold uppercase tracking-[0.28em] text-[#b56757]">
                  {copy.contactTitle}
                </p>
                <h3 className="relative mt-3 text-2xl leading-tight text-[#6c473d] sm:text-[2rem]">
                  {copy.contactHeadline}
                </h3>
                <p className="relative mt-4 max-w-xl text-[0.98rem] leading-7 text-slate-600">
                  {copy.contactIntro}
                </p>

                <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
                  {copy.contactItems.map(item => (
                    <div
                      key={item.label}
                      className={`warm-hover-glow min-w-0 rounded-[1.25rem] border border-[#d8a08d]/28 bg-[rgba(255,255,255,0.7)] px-4 py-4 shadow-[0_12px_24px_rgba(179,93,76,0.07)] ${
                        item.wide ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-2 block break-words text-base leading-7 text-slate-700 transition hover:text-[#b56757] sm:text-[1.05rem]"
                        >
                          {item.value}
                        </a>
                      ) : item.mapsHref ? (
                        <div className="mt-2 flex items-start justify-between gap-3">
                          <p className="min-w-0 break-words text-base leading-7 text-slate-700 sm:text-[1.05rem]">
                            {item.value}
                          </p>
                          <a
                            href={item.mapsHref}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={locale === 'de' ? 'Adresse in Google Maps öffnen' : 'Open address in Google Maps'}
                            title={locale === 'de' ? 'In Google Maps öffnen' : 'Open in Google Maps'}
                            className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8a08d]/32 bg-[rgba(255,250,246,0.94)] text-[#b56757] shadow-[0_10px_20px_rgba(179,93,76,0.08)] transition duration-300 hover:scale-110 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)] hover:text-[#a75444]"
                          >
                            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                              <path
                                d="M12 20.25c3.75-4.15 5.62-7.19 5.62-9.12A5.62 5.62 0 1 0 6.38 11.13c0 1.93 1.87 4.97 5.62 9.12Z"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <circle
                                cx="12"
                                cy="11.1"
                                r="1.9"
                                stroke="currentColor"
                                strokeWidth="1.6"
                              />
                            </svg>
                          </a>
                        </div>
                      ) : (
                        <p className="mt-2 break-words text-base leading-7 text-slate-700 sm:text-[1.05rem]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="warm-hover-glow relative mt-6 rounded-[1.35rem] border border-[#d9a089]/26 bg-[rgba(255,251,248,0.78)] px-4 py-4 shadow-[0_12px_24px_rgba(179,93,76,0.06)]">
                  <p className="text-sm leading-6 text-slate-600">{copy.freeNote}</p>
                </div>
              </aside>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="warm-hover-glow flex min-h-[13rem] min-w-0 flex-col rounded-[1.25rem] border border-[#d8a08d]/26 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,245,239,0.62))] px-4 py-4 shadow-[0_12px_24px_rgba(179,93,76,0.06)]">
                  <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                    {copy.cityLinksCta}
                  </p>
                  <p className="mt-2 flex-1 break-words text-[0.96rem] leading-6 text-slate-600">
                    {copy.cityLinksLead}
                  </p>
                  <a
                    href="https://www.sahajayoga.de/kurse/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#d8a08d]/32 bg-[rgba(255,250,246,0.94)] px-4 py-2 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                  >
                    <span aria-hidden="true">👉</span>
                    <span>{copy.cityLinksCta}</span>
                  </a>
                </div>

                <Link
                  to="/newsletter"
                  className="warm-hover-glow group flex min-h-[13rem] min-w-0 flex-col rounded-[1.25rem] border border-[#d8a08d]/26 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,245,239,0.62))] px-4 py-4 shadow-[0_12px_24px_rgba(179,93,76,0.06)] transition duration-300 hover:-translate-y-0.5"
                >
                  <p className="text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                    {copy.newsletterCta}
                  </p>
                  <h4 className="mt-2 text-[1.02rem] leading-6 text-[#6c473d]">
                    {copy.newsletterTitle}
                  </h4>
                  <p className="mt-2 flex-1 break-words text-[0.96rem] leading-6 text-slate-600">
                    {copy.newsletterLead}
                  </p>
                  <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#d8a08d]/32 bg-[rgba(255,250,246,0.94)] px-4 py-2 text-sm font-semibold text-[#b56757] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[#b35d4c]/45 group-hover:bg-[rgba(255,244,238,0.98)]">
                    <span aria-hidden="true">✦</span>
                    <span>{copy.newsletterCta}</span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="warm-hover-glow min-w-0 rounded-[1.7rem] border border-[#d8a08d]/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.56),rgba(227,242,248,0.4))] p-6 shadow-[0_18px_36px_rgba(74,113,143,0.08)] sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b56757]">
                {copy.scheduleEyebrow}
              </p>
              <div className="mt-3 flex min-w-0 flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                <h3 className="min-w-0 text-xl leading-tight text-[#6c473d] sm:text-[2rem]">
                  {copy.scheduleTitle}
                </h3>
                <span className="inline-flex w-fit -translate-y-1 items-center rounded-full border border-[#d8a08d]/28 bg-[rgba(255,251,248,0.78)] px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                  {copy.sessions.length} {locale === 'de' ? 'Termine pro Woche' : 'sessions per week'}
                </span>
              </div>
              <p className="mt-4 max-w-2xl break-words text-[0.98rem] leading-7 text-slate-600">
                {copy.scheduleIntro}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {copy.sessions.map(session => (
                  <article
                    key={`${session.day}-${session.time}`}
                    className="warm-hover-glow flex min-w-0 h-full flex-col rounded-[1.3rem] border border-[#d8a08d]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,244,238,0.66))] p-4 shadow-[0_14px_28px_rgba(179,93,76,0.08)]"
                  >
                    <div className="flex flex-nowrap items-center gap-2 whitespace-nowrap">
                      <h4 className="text-[0.93rem] leading-tight text-[#b56757] sm:text-[0.98rem]">
                        {session.day}
                      </h4>
                      <span className="shrink-0 rounded-full bg-[rgba(110,181,192,0.16)] px-2 py-[0.35rem] text-[0.78rem] font-semibold leading-none text-[#5f97a2]">
                        {session.time}
                      </span>
                    </div>
                    <p className="mt-3 break-words text-[0.94rem] leading-6 text-slate-700">
                      {session.description}
                    </p>
                    {session.note && (
                      <p className="mt-auto pt-3 inline-flex rounded-full border border-[#d8a08d]/28 bg-[rgba(255,251,248,0.8)] px-2.5 py-1 text-[0.72rem] font-medium text-slate-500">
                        {session.note}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;

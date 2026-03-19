import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';

/**
 * Introduction to the core ideas behind Sahaja Yoga.
 */
const IntroSection: React.FC = () => {
  const { locale } = useLocale();
  const introVideoUrl = 'https://www.youtube.com/watch?v=JSFkSHNRfDU&t=82s';
  const introVideoThumbnail = 'https://img.youtube.com/vi/JSFkSHNRfDU/hqdefault.jpg';
  const copy =
    locale === 'de'
      ? {
          title: 'Was ist Sahaja Yoga?',
          meaningCard: {
            founder: 'Begründet von Shri Mataji Nirmala Devi',
            title: 'Saha + Ja + Yoga',
            lines: [
              {
                term: 'Saha',
                rest: 'bedeutet mit, zusammen oder kollektiv.'
              },
              {
                term: 'Ja',
                rest: 'bedeutet geboren.'
              },
              {
                lead: 'So',
                term: 'Sahaja',
                rest: 'bedeutet daher: mitgeboren oder von Natur aus vorhanden.'
              },
              {
                term: 'Yoga',
                rest: 'bedeutet in seinem eigentlichen Sinn Integration.'
              }
            ],
            intro:
              'Im Sanskrit weisen diese Worte bereits auf die lebendige Philosophie dieses Weges hin: Was in uns mitgeboren ist, soll erwachen, sich integrieren und sich als bewusste Einheit mit dem universellen Selbst entfalten. Darum bedeutet Yoga in seiner tiefsten Essenz die Integration und Manifestation unseres noch unentfalteten Potenzials in das universelle Selbst und nicht bloß die heutige kommerzialisierte Verengung eines heiligen Wortes auf körperliche Dehnübungen, die höchstens einen Teil der Wahrheit berühren.',
            paragraphs: [
              'Im Zentrum steht das Erwachen der Kundalini, die im dreieckigen Kreuzbein ruht, still und schlafend wie eine mitgeborene innere Kraft. Wenn sie durch den zentralen Sushumna-Kanal aufsteigt, bringt sie die linke Ida- und die rechte Pingala-Seite ins Gleichgewicht und beginnt, die Chakren von innen her zu klären.',
              'Wenn diese Energie die Zentren durchdringt und schließlich das Sahasrara öffnet, beginnt das, was im eigentlichen Sinn Yoga genannt werden kann: die Integration unserer inneren Qualitäten. Das Licht des Geistes berührt das zentrale Nervensystem, und die Aufmerksamkeit findet in einen Zustand gedankenfreien Gewahrseins.',
              'In dieser Stille wird Meditation nicht gemacht, sondern geschieht. Sie wird müheloser, spontaner und zugleich wacher. Frieden entsteht nicht als Flucht, sondern als innere Ordnung.'
            ],
            reflectionTitle: 'Selbstverwirklichung',
            reflectionBody:
              'Selbstverwirklichung ist wie das Pflanzen eines ersten Samens. Sobald der Keim erscheint, entsteht tief im Inneren die Verantwortung, ihn wachsen zu lassen, bis aus ihm ein schöner Baum wird, der Blüten und Früchte trägt.',
            reflectionNote:
              'Wie Shri Mataji sinngemäß sagte: Niemand bezahlt eine Pflanze dafür, dass sie eine Blüte hervorbringt. Ebenso kann Selbstverwirklichung nicht gekauft werden, weil sie ein spontaner lebendiger Prozess ist.',
            closing:
              'Unsere Treffen werden ehrenamtlich getragen und bleiben immer kostenfrei. Sahaja Yoga verfeinert das subtile System, harmonisiert Chakren und Kanäle und bringt dadurch mehr Frieden, Gleichgewicht und Klarheit in den Alltag.',
            openHereTitle: 'HIER KLICKEN',
            openHereBody: 'Um mehr über Kundalini, Chakren und Nadis zu erfahren.',
            openHereLink: {
              label: 'Kundalini & Energiesystem',
              to: '/kundalini-energiesystem'
            }
          },
          points: [
            {
              title: 'Gedankenfreies Bewusstsein',
              description:
                'Sahaja Yoga öffnet einen Zustand der Meditation, in dem der gegenwärtige Moment ohne Ziehen in Vergangenheit oder Zukunft erfahrbar wird.'
            },
            {
              title: 'Eine einfache Praxis für alle',
              description:
                'Die Methode ist leicht zugänglich, unabhängig von Alter, Herkunft oder Erfahrung. Es braucht keine Vorkenntnisse und keine äußere Inszenierung.'
            },
            {
              title: 'Selbstverwirklichung',
              description:
                'Der Weg beginnt mit einer direkten inneren Erfahrung und zeigt, wie sich daraus Ruhe, Klarheit und Wachstum im Alltag entfalten.'
            }
          ],
          videoCard: {
            eyebrow: 'Einführungsvideo',
            title: 'Sahaja Yoga in einer kurzen Einführung sehen',
            body:
              'Wenn du lieber zuerst einen direkten Eindruck bekommst, kannst du dieses Video öffnen. Es bietet einen einfachen Einstieg in die Meditation und in die innere Erfahrung, um die es hier geht.',
            cta: 'Video auf YouTube öffnen'
          },
          quote:
            'Du kannst den Sinn deines Lebens erst erkennen, wenn du mit der Kraft verbunden bist, die dich erschaffen hat.',
          author: 'Shri Mataji Nirmala Devi'
        }
      : {
          title: 'What is Sahaja Yoga?',
          meaningCard: {
            founder: 'Founded by Shri Mataji Nirmala Devi',
            title: 'Saha + Ja + Yoga',
            lines: [
              {
                term: 'Saha',
                rest: 'means with, together or collectively.'
              },
              {
                term: 'Ja',
                rest: 'means born.'
              },
              {
                lead: 'So',
                term: 'Sahaja',
                rest: 'means: born with, or innate.'
              },
              {
                term: 'Yoga',
                rest: 'in its deeper sense means integration.'
              }
            ],
            intro:
              'In Sanskrit, these words already point to the living philosophy of the path: what is born within us is meant to awaken, integrate and flower into conscious union with the universal Self. Therefore Yoga, in its deepest essence, means the integration and manifestation of our still-untapped potential into the universal Self, not merely the modern commercial reduction of a sacred word to body-stretching exercise, which is only a partial truth.',
            paragraphs: [
              'At its heart lies the awakening of Kundalini, long dormant and sleeping within the triangular sacrum bone as an inborn inner energy. As it rises through the central Sushumna channel, it balances the left Ida and right Pingala channels and begins to clear the chakras from within.',
              'When this energy pierces the centres and finally opens the Sahasrara, real Yoga begins: the integration of our inner qualities. The light of the Spirit touches the central nervous system, and attention settles into the state of thoughtless awareness.',
              'In that stillness meditation is no longer forced. It becomes effortless, spontaneous and at the same time more awake. Peace is not an escape from life, but a deeper inner order within it.'
            ],
            reflectionTitle: 'Self-Realization',
            reflectionBody:
              'Self-Realization is like planting the first seed and seeing its sprout emerge. With that first sign of life comes a deep inner inspiration to let it grow into a beautiful tree, until flowers and fruits begin to manifest.',
            reflectionNote:
              'As Shri Mataji explained, no one pays a plant to make a flower bloom. In the same way, Self-Realization cannot be bought, because it is a spontaneous living process.',
            closing:
              'Our sessions are offered voluntarily and always remain free of charge. As Kundalini awakens, the subtle system becomes clearer and more harmonious, bringing greater peace, balance and clarity into daily life.',
            openHereTitle: 'CLICK HERE',
            openHereBody: 'To learn more about Kundalini, Chakras, Nadis.',
            openHereLink: {
              label: 'Kundalini & Energiesystem',
              to: '/kundalini-energiesystem'
            }
          },
          points: [
            {
              title: 'Thoughtless Awareness',
              description:
                'Sahaja Yoga opens a meditative state in which the present moment can be experienced without being pulled into past or future.'
            },
            {
              title: 'A Simple Practice for Everyone',
              description:
                'The method is accessible regardless of age, background or prior experience. It requires no special preparation and no outer performance.'
            },
            {
              title: 'Self-Realization',
              description:
                'The journey begins with a direct inner experience and shows how calm, clarity and growth can deepen in daily life.'
            }
          ],
          videoCard: {
            eyebrow: 'Introduction Video',
            title: 'See Sahaja Yoga through a short introductory video',
            body:
              'If you prefer a direct first impression, you can open this video. It offers a simple introduction to the meditation and the inner experience at the heart of this path.',
            cta: 'Open video on YouTube'
          },
          quote:
            'You cannot know the meaning of your life until you are connected to the power that created you.',
          author: 'Shri Mataji Nirmala Devi'
        };

  return (
    <section id="intro" className="section-band bg-[#eaf8ff]">
      <div className="section-shell">
        <div id="energy-system-self-realization" aria-hidden="true" className="relative -top-24" />
        <div id="meditation" aria-hidden="true" className="relative -top-24" />
        <div className="reveal-ready">
          <h2 className="text-center text-4xl sm:text-5xl">{copy.title}</h2>
        </div>

        <div className="mt-8 grid gap-8 xl:relative xl:left-[-1.5rem] xl:w-[calc(100%+3rem)] xl:grid-cols-[minmax(0,1.68fr)_minmax(22rem,0.72fr)] xl:items-start xl:gap-6 2xl:left-[-2rem] 2xl:w-[calc(100%+4rem)] 2xl:grid-cols-[minmax(0,1.78fr)_minmax(23rem,0.68fr)]">
          <div className="reveal-ready xl:min-w-0">
            <article className="warm-hover-glow rounded-[1.6rem] border border-[#b35d4c]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,246,240,0.84))] px-6 py-6 text-left shadow-[0_16px_36px_rgba(72,110,140,0.12)] backdrop-blur-sm sm:px-8 sm:py-7">
              <div className="text-center">
                <div className="inline-flex rounded-full border border-[#b35d4c]/24 bg-[rgba(255,248,243,0.9)] px-4 py-2 shadow-[0_10px_20px_rgba(72,110,140,0.06)]">
                  <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#b56757] sm:text-[0.82rem]">
                    {copy.meaningCard.founder}
                  </p>
                </div>
                <h3 className="mt-4 text-[1.75rem] leading-tight text-[#b56757] sm:text-[2rem]">
                  {copy.meaningCard.title}
                </h3>
              </div>

              <div className="mt-6">
                <div className="mx-auto max-w-4xl space-y-3 border-y border-[#b35d4c]/18 py-4">
                  <div className="grid overflow-hidden rounded-[1.05rem] border border-[#b35d4c]/20 bg-[rgba(255,250,246,0.72)] sm:grid-cols-2">
                    <p className="px-4 py-3 text-left text-[1.08rem] leading-8 text-slate-700 sm:px-5 sm:text-[1.14rem]">
                      <span className="font-bold text-[#b56757]">{copy.meaningCard.lines[0].term}</span>
                      <span className="ml-1">{copy.meaningCard.lines[0].rest}</span>
                    </p>
                    <p className="border-t-2 border-[#d9a38f]/65 px-4 py-3 text-left text-[1.08rem] leading-8 text-slate-700 sm:border-l-2 sm:border-t-0 sm:px-5 sm:text-[1.14rem]">
                      <span className="font-bold text-[#b56757]">{copy.meaningCard.lines[1].term}</span>
                      <span className="ml-1">{copy.meaningCard.lines[1].rest}</span>
                    </p>
                  </div>
                  <div className="grid overflow-hidden rounded-[1.05rem] border border-[#b35d4c]/20 bg-[rgba(255,250,246,0.72)] sm:grid-cols-2">
                    <p className="px-4 py-3 text-left text-[1.08rem] leading-8 text-slate-700 sm:px-5 sm:text-[1.14rem]">
                      {copy.meaningCard.lines[2].lead ? (
                        <span className="mr-1">{copy.meaningCard.lines[2].lead}</span>
                      ) : null}
                      <span className="font-bold text-[#b56757]">{copy.meaningCard.lines[2].term}</span>
                      <span className="ml-1">{copy.meaningCard.lines[2].rest}</span>
                    </p>
                    <p className="border-t-2 border-[#d9a38f]/65 px-4 py-3 text-left text-[1.08rem] leading-8 text-slate-700 sm:border-l-2 sm:border-t-0 sm:px-5 sm:text-[1.14rem]">
                      <span className="font-bold text-[#b56757]">{copy.meaningCard.lines[3].term}</span>
                      <span className="ml-1">{copy.meaningCard.lines[3].rest}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-4xl text-left text-[1.02rem] leading-8 text-[#8f5e4f] sm:text-[1.06rem]">
                  {copy.meaningCard.intro}
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
                  <div className="space-y-5">
                    {copy.meaningCard.paragraphs.map(paragraph => (
                      <p key={paragraph} className="text-[1rem] leading-8 text-[#333333]">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <aside className="rounded-[1.4rem] border border-[#b35d4c]/24 bg-[linear-gradient(180deg,rgba(255,250,246,0.94),rgba(255,243,235,0.88))] p-6 shadow-[0_16px_34px_rgba(72,110,140,0.08)]">
                    <p className="text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-[#b56757]">
                      {copy.meaningCard.reflectionTitle}
                    </p>
                    <p className="mt-4 text-[1rem] leading-8 text-[#333333]">
                      {copy.meaningCard.reflectionBody}
                    </p>
                    <p className="mt-4 text-[0.96rem] leading-7 text-[#8f5e4f]">
                      {copy.meaningCard.reflectionNote}
                    </p>
                  </aside>
                </div>

                <div className="mx-auto mt-7 max-w-4xl rounded-[1.25rem] border border-[#b35d4c]/20 bg-[rgba(255,250,246,0.78)] px-5 py-4">
                  <p className="text-[0.98rem] leading-8 text-[#333333]">
                    {copy.meaningCard.closing}
                  </p>
                </div>

                <div className="mx-auto mt-6 max-w-4xl rounded-[1.4rem] border border-[#b35d4c]/24 bg-[linear-gradient(135deg,rgba(255,248,243,0.94),rgba(255,255,255,0.82))] px-5 py-5 shadow-[0_14px_30px_rgba(72,110,140,0.08)]">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <Link
                        to={copy.meaningCard.openHereLink.to}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[0.85rem] border border-[#b35d4c]/26 bg-[rgba(255,255,255,0.94)] px-4 py-2.5 text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-[#b56757] shadow-[0_10px_20px_rgba(72,110,140,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/42 hover:bg-[rgba(255,244,238,0.98)]"
                      >
                        <span aria-hidden="true" className="text-[1.12rem] leading-none">
                          👉
                        </span>
                        <span>{copy.meaningCard.openHereTitle}</span>
                      </Link>
                      <p className="max-w-xl text-[0.91rem] font-bold leading-6 text-[#8f5e4f] sm:text-[0.95rem]">
                        {copy.meaningCard.openHereBody}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="reveal-ready xl:justify-self-end xl:pt-1 xl:w-full xl:max-w-[26rem] 2xl:max-w-[27rem]">
            <article className="warm-hover-glow overflow-hidden rounded-[1.7rem] border border-[#b35d4c]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,246,240,0.84))] shadow-[0_18px_38px_rgba(72,110,140,0.12)] backdrop-blur-sm xl:sticky xl:top-28">
              <a
                href={introVideoUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative block min-h-[18rem] overflow-hidden border-b border-[#b35d4c]/18"
              >
                <img
                  src={introVideoThumbnail}
                  alt={locale === 'de' ? 'Vorschaubild des Einführungsvideos' : 'Preview image of the introduction video'}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,48,73,0.08)_0%,rgba(17,48,73,0.32)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(17,48,73,0.04)_0%,rgba(17,48,73,0.24)_100%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/22 text-3xl text-white shadow-[0_18px_38px_rgba(17,48,73,0.18)] backdrop-blur-sm transition duration-300 group-hover:scale-110">
                    ▶
                  </span>
                </div>
              </a>

              <div className="flex flex-col px-6 py-7 sm:px-8 sm:py-8">
                <span className="eyebrow w-fit">{copy.videoCard.eyebrow}</span>
                <h3 className="mt-4 text-balance text-[1.55rem] leading-tight text-[#b56757] sm:text-[1.8rem]">
                  {copy.videoCard.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-8 text-[#333333]">
                  {copy.videoCard.body}
                </p>
                <div className="mt-6">
                  <a
                    href={introVideoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-[#b35d4c]/32 bg-[rgba(255,250,246,0.94)] px-5 py-3 text-sm font-semibold text-[#b56757] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/45 hover:bg-[rgba(255,244,238,0.98)]"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c8715f] text-white shadow-[0_10px_18px_rgba(179,93,76,0.2)]">
                      ▶
                    </span>
                    <span>{copy.videoCard.cta}</span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {copy.points.map(point => (
            <article
              key={point.title}
              className="warm-hover-glow flex min-h-[18.5rem] h-full flex-col rounded-[1.45rem] border border-[#b35d4c]/35 bg-[rgba(255,255,255,0.9)] p-9 text-left shadow-[0_16px_36px_rgba(72,110,140,0.12)] backdrop-blur-sm lg:p-10"
            >
              <h3
                className={`whitespace-nowrap tracking-[-0.01em] text-[#b56757] ${
                  locale === 'de'
                    ? 'text-[1.14rem] sm:text-[1.22rem] lg:text-[1.34rem] xl:text-[1.42rem]'
                    : 'text-[1.04rem] sm:text-[1.12rem] lg:text-[1.2rem] xl:text-[1.3rem]'
                }`}
              >
                {point.title}
              </h3>
              <p className="mt-4 flex-1 text-[1.02rem] leading-8 text-[#333333]">{point.description}</p>
            </article>
          ))}
        </div>

        <blockquote className="warm-hover-glow reveal-ready mx-auto mt-12 max-w-4xl border-l-4 border-[#6eb5c0] bg-[#fff6ee] px-8 py-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          <p className="text-xl italic text-[#333333] sm:text-2xl">
            "{copy.quote}"
          </p>
          <cite className="mt-4 block text-right font-semibold text-[#4e9aa6]">
            {copy.author}
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default IntroSection;

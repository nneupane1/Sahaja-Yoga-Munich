import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import charlieImg from '../assets/charlie.png';
import kundImg from '../assets/kund.png';

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
            firstParagraphLabel: 'Kundalini und das innere Universum',
            secondParagraphLabel: 'Die zweite Geburt des Bewusstseins',
            thirdParagraphLabel: 'Wärme, Kühle und die innere Sprache',
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
                rest: 'bedeutet daher: mitgeboren, von Natur aus vorhanden, schlicht, leicht oder\u00a0spontan.'
              },
              {
                term: 'Yoga',
                rest: 'bedeutet in seinem tieferen Sinn Integration oder Vereinigung.'
              }
            ],
            intro:
              'Im Sanskrit weisen diese Worte bereits auf die lebendige Philosophie dieses Weges hin: Was in uns mitgeboren ist, soll erwachen, sich integrieren und sich als bewusste Einheit mit dem universellen Selbst entfalten. Sahaja Yoga bedeutet daher die spontane Vereinigung unserer inneren mütterlichen Energie mit der allgegenwärtigen göttlichen Kraft, durch die der Mensch wieder in lebendige Verbindung mit seinem wahren Selbst tritt. Darum bedeutet Yoga in seiner tiefsten Essenz die Integration und Manifestation unseres noch unentfalteten Potenzials in das universelle Selbst und nicht bloß die heutige kommerzialisierte Verengung eines heiligen Wortes auf körperliche Dehnübungen, die höchstens einen Teil der Wahrheit berühren.',
            paragraphs: [
              'Im Herzen von Sahaja Yoga steht das Erwachen der Kundalini, die im dreieckigen Kreuzbein in dreieinhalb Windungen ruht, still und schlafend wie eine mitgeborene mütterliche Kraft, die lange darauf gewartet hat, uns durch ihr Erwachen eine zweite Geburt des Geistes zu schenken. Sie wird dabei als jene wunderbare göttliche Kraft verstanden, die im Mutterleib das Kind wachsen lässt und später als dreieinhalbfach gewundene Kundalini im Kreuzbein niedergelegt ist, als kosmische Energie, die in jedem Menschen ein inneres Universum formt. Wenn sie durch den zentralen Sushumna-Kanal aufsteigt, bringt sie die linke Ida- und die rechte Pingala-Seite ins Gleichgewicht und beginnt, die Chakren von innen her zu klären.',
              'Dieser aufsteigende Weg der Kundalini wird als derselbe geistige Vorgang verstanden, durch den verborgenes Leben zur Geburt reift: So wie ein Kind im Mutterleib wächst und schließlich das Licht der Welt erblickt, so steigt die Kundalini vom Mooladhara bis zum Sahasrara und schenkt dem Bewusstsein eine zweite Geburt. Auf spiritueller Ebene sind dies ein und dieselbe Bewegung, und Suchende sind eingeladen, diese Wahrheit nicht bloß zu glauben, sondern in der eigenen Erfahrung zu bezeugen.',
              'Wenn die Kundalini durch die Chakren aufsteigt, die oft als subtile Räder in fortwährender Bewegung beschrieben werden, kann sie an Negativitäten oder Blockaden in den jeweiligen Chakren reiben. Gerade diese Reibung zwischen der aufsteigenden Kundalini und jenen Unreinheiten in den jeweiligen Chakren kann Wärme erzeugen, die sich manchmal am Scheitel oder über die Fingerkuppen bemerkbar macht; eine solche Wärme wird nicht als Problem verstanden, sondern als ein schönes Zeichen dafür, dass Reinigung geschieht. Weil sich Chakren und Kanäle in den Händen widerspiegeln, kann diese subtile Arbeit in der Meditation auch als Kribbeln, Kühle oder, für viele Suchende, als sanfte kühle Brise vom Scheitel erfahrbar werden. Auf diese Weise beginnt das subtile System durch Empfindung zu sprechen, sodass sein innerer Zustand in der Meditation nach und nach lesbar und, in einem tieferen Sinn, entschlüsselbar wird.',
              'In dieser Stille wird Meditation nicht gemacht, sondern geschieht. Sie wird müheloser, spontaner und zugleich wacher. Mit vertiefter Praxis wird diese innere Lesbarkeit immer klarer, ähnlich jener alten Weisheit, die großen Gurus und Heiligen zugeschrieben wurde, die das subtile Geschehen im Menschen meistern konnten.'
            ],
            reflectionTitle: 'Selbstverwirklichung',
            reflectionBody:
              'Selbstverwirklichung ist wie das Pflanzen eines ersten Samens. Sobald der Keim erscheint, entsteht tief im Inneren die Verantwortung, ihn wachsen zu lassen, bis aus ihm ein schöner Baum wird, der Blüten und Früchte trägt.',
            reflectionNote:
              'Wie Shri Mataji sinngemäß sagte: Niemand bezahlt eine Pflanze dafür, dass sie eine Blüte hervorbringt. Ebenso kann Selbstverwirklichung nicht gekauft werden, weil sie ein spontaner lebendiger Prozess ist.',
            freeSessionsNote:
              'Unsere Treffen werden ehrenamtlich getragen und bleiben immer kostenfrei.',
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
            firstParagraphLabel: 'Kundalini and the Inner Universe',
            secondParagraphLabel: 'The Second Birth of Consciousness',
            thirdParagraphLabel: 'Heat, Coolness and the Inner Language',
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
                rest: 'means: born with, innate, simple, easy or spontaneous.'
              },
              {
                term: 'Yoga',
                rest: 'in its deeper sense means integration or union.'
              }
            ],
            intro:
              'In Sanskrit, these words already point to the living philosophy of the path: what is born within us is meant to awaken, integrate and flower into conscious union with the universal Self. Sahaja Yoga therefore means the spontaneous union of our inner motherly energy with the all-pervading divine power, through which human attention returns to a living connection with the true Self. Therefore Yoga, in its deepest essence, means the integration and manifestation of our still-untapped potential into the universal Self, not merely the modern commercial reduction of a sacred word to body-stretching exercise, which is only a partial truth.',
            paragraphs: [
              'At the heart of Sahaja Yoga lies the awakening of Kundalini, resting within the triangular sacrum bone in three and a half coils as an inborn motherly energy that has long been waiting to grant us our second birth through its awakening. It is understood as the same miraculous Divine force that allows the baby to grow within the mother’s womb and is later encoded in the sacrum as the three-and-a-half-coiled Kundalini, the cosmic energy through which an inner universe is formed within each human being. As it rises through the central Sushumna channel, it balances the left Ida and right Pingala channels and begins to clear the chakras from within.',
              'This upward ascent of Kundalini energy is understood as the same spiritual dynamic by which hidden life ripens into birth: just as a baby grows within the mother’s womb and finally comes into the world, so Kundalini rises from Mooladhara to the Sahasrara chakra at the crown of the head and grants consciousness its second birth, the enlightenment of the brain. At the spiritual level these are one and the same movement, and seekers are invited to verify that truth through direct experience rather than belief alone.',
              'As Kundalini rises through the chakras, often described as subtle wheels in continuous motion, it may encounter negativities or obstructions lodged within the respective chakras. It is this friction between the ascending Kundalini and those impurities in the respective chakras that can generate heat, sometimes felt at the crown of the head or through the fingertips; such warmth is understood not as a problem, but as a beautiful sign that purification is taking place. Because the chakras and channels are reflected in the hands, this subtle work may also be experienced in meditation as tingling, coolness or, for many seekers, as a gentle Cool Breeze flowing from the crown of the head. In this way the subtle system begins to speak through sensation, allowing its inner state to become gradually readable and, in a deeper sense, decodable in meditation.',
              'In that stillness meditation is no longer forced. It becomes effortless, spontaneous and at the same time more awake. With dedicated practice this subtle readability grows clearer, echoing an older wisdom in which saints and realized beings were said to master the inner language of the subtle system.'
            ],
            reflectionTitle: 'Self-Realization',
            reflectionBody:
              'Self-Realization is like planting the first seed and seeing its sprout emerge. With that first sign of life comes a deep inner inspiration to let it grow into a beautiful tree, until flowers and fruits begin to manifest.',
            reflectionNote:
              'As Shri Mataji explained, no one pays a plant to make a flower bloom. In the same way, Self-Realization cannot be bought, because it is a spontaneous living process.',
            freeSessionsNote:
              'Our sessions are offered voluntarily and always remain free of charge.',
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

        <div className="mt-8">
          <div className="lg:relative lg:left-1/2 lg:w-[min(80vw,90rem)] lg:max-w-none lg:-translate-x-1/2">
            <div className="w-full rounded-[1.9rem] border border-[#b35d4c]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,246,240,0.88))] p-4 shadow-[0_20px_42px_rgba(72,110,140,0.14)] backdrop-blur-sm sm:p-5 lg:px-6 xl:px-7">
            <div className="grid gap-5 lg:grid-cols-[minmax(0,2.02fr)_minmax(21rem,0.58fr)] xl:gap-6 2xl:grid-cols-[minmax(0,2.12fr)_minmax(21.75rem,0.54fr)]">
              <div className="reveal-ready lg:min-w-0">
                <article className="warm-hover-glow rounded-[1.6rem] border border-[#b35d4c]/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,246,240,0.84))] px-6 py-6 text-left shadow-[0_14px_30px_rgba(72,110,140,0.1)] sm:px-8 sm:py-7">
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
                <div className="w-full space-y-3 border-y border-[#b35d4c]/18 py-4">
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

                <p className="mt-6 w-full text-left text-[1.02rem] leading-8 text-[#8f5e4f] sm:text-[1.06rem]">
                  {copy.meaningCard.intro}
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.26fr_0.74fr] xl:grid-cols-[1.3fr_0.7fr]">
                  <div className="space-y-4">
                    {copy.meaningCard.paragraphs.slice(0, 2).map((paragraph, index) => {
                      const paragraphLabel =
                        index === 0
                          ? copy.meaningCard.firstParagraphLabel
                          : copy.meaningCard.secondParagraphLabel;

                      return (
                        <article
                          key={paragraph}
                          className="warm-hover-glow rounded-[1.3rem] border border-[#d8a08d]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,244,238,0.66))] p-4 shadow-[0_14px_28px_rgba(179,93,76,0.08)] sm:p-5"
                        >
                          <div className="mb-2 flex justify-center">
                            <span className="inline-flex items-center rounded-full border border-[#b35d4c]/22 bg-[rgba(255,249,245,0.92)] px-3.5 py-[0.34rem] text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#b56757] shadow-[0_10px_18px_rgba(72,110,140,0.05)]">
                              {paragraphLabel}
                            </span>
                          </div>
                        <p className="text-[1rem] leading-8 text-[#333333]">{paragraph}</p>
                        </article>
                      );
                    })}
                  </div>

                  <div className="self-start justify-self-end w-full max-w-[21.5rem] space-y-4">
                    <aside className="warm-hover-glow rounded-[1.3rem] border border-[#d8a08d]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,244,238,0.66))] p-4 shadow-[0_14px_28px_rgba(179,93,76,0.08)] sm:p-5">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#b56757]">
                        {copy.meaningCard.reflectionTitle}
                      </p>
                      <p className="mt-3 text-[0.94rem] leading-7 text-[#333333]">
                        {copy.meaningCard.reflectionBody}
                      </p>
                      <p className="mt-3 text-[0.9rem] leading-6 text-[#8f5e4f]">
                        {copy.meaningCard.reflectionNote}
                      </p>
                    </aside>

                    <article className="warm-hover-glow group relative isolate min-h-[22rem] overflow-hidden rounded-[1.3rem] border border-[#d8a08d]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,244,238,0.66))] p-[2px] shadow-[0_14px_28px_rgba(179,93,76,0.08)] [perspective:1600px]">
                      <div className="relative h-full min-h-[20.5rem] transform-gpu">
                        <div className="relative h-full min-h-[20.5rem] transform-gpu [transform-style:preserve-3d] [transform:rotateY(0deg)] transition duration-0 [will-change:transform] group-hover:[transform:rotateY(180deg)]">
                          <div className="absolute inset-0 overflow-hidden rounded-[1.16rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,248,244,0.88))] transform-gpu [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
                            <div className="absolute inset-0 rounded-[1.16rem] border border-[#d8a08d]/24 bg-[rgba(255,250,246,0.78)] p-[1px]">
                              <img
                                src={charlieImg}
                                alt={
                                  locale === 'de'
                                    ? 'Darstellung des subtilen Systems'
                                    : 'Illustration of the subtle system'
                                }
                                className="h-full w-full rounded-[1.08rem] object-contain object-top scale-[1.045]"
                              />
                            </div>
                          </div>

                          <div className="absolute inset-0 overflow-hidden rounded-[1.16rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,248,244,0.88))] transform-gpu [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]">
                            <div className="absolute inset-0 rounded-[1.16rem] border border-[#d8a08d]/24 bg-[rgba(255,250,246,0.78)] p-[1px]">
                              <img
                                src={kundImg}
                                alt=""
                                aria-hidden="true"
                                className="h-full w-full rounded-[1.08rem] object-contain object-top scale-[1.03] transition duration-0 group-hover:scale-[1.04]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="lg:col-span-2 grid gap-4 lg:grid-cols-[1.26fr_0.74fr] xl:grid-cols-[1.3fr_0.7fr]">
                    {copy.meaningCard.paragraphs.slice(2).map((paragraph, index) => (
                      <article
                        key={paragraph}
                        className="warm-hover-glow rounded-[1.3rem] border border-[#d8a08d]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,244,238,0.66))] p-4 shadow-[0_14px_28px_rgba(179,93,76,0.08)] sm:p-5"
                      >
                        {index === 0 ? (
                          <div className="mb-2 flex justify-center">
                            <span className="inline-flex items-center rounded-full border border-[#b35d4c]/22 bg-[rgba(255,249,245,0.92)] px-3.5 py-[0.34rem] text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#b56757] shadow-[0_10px_18px_rgba(72,110,140,0.05)]">
                              {copy.meaningCard.thirdParagraphLabel}
                            </span>
                          </div>
                        ) : null}
                        <p className="text-[1rem] leading-8 text-[#333333]">{paragraph}</p>
                        {index === 1 ? (
                          <div className="mt-5 rounded-[1.15rem] border border-[#b35d4c]/22 bg-[linear-gradient(135deg,rgba(255,249,245,0.98),rgba(255,255,255,0.9))] p-4 shadow-[0_12px_24px_rgba(72,110,140,0.08)]">
                            <p className="text-[0.88rem] font-bold leading-6 text-[#8f5e4f]">
                              {copy.meaningCard.openHereBody}
                            </p>
                            <div className="mt-3">
                              <Link
                                to={copy.meaningCard.openHereLink.to}
                                className="inline-flex items-center justify-center gap-2 rounded-[0.9rem] border border-[#b35d4c]/28 bg-[rgba(255,255,255,0.96)] px-4 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[#b56757] shadow-[0_10px_18px_rgba(72,110,140,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-[#b35d4c]/42 hover:bg-[rgba(255,244,238,0.98)]"
                              >
                                <span aria-hidden="true" className="text-[1.05rem] leading-none">
                                  👉
                                </span>
                                <span>{copy.meaningCard.openHereTitle}</span>
                              </Link>
                            </div>
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>

              </div>
                </article>
              </div>

              <div className="reveal-ready lg:justify-self-center lg:pt-1 lg:w-full lg:max-w-[22.75rem] 2xl:max-w-[23.75rem]">
                <article className="warm-hover-glow overflow-hidden rounded-[1.7rem] border border-[#b35d4c]/28 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,246,240,0.84))] shadow-[0_14px_30px_rgba(72,110,140,0.1)] lg:sticky lg:top-28">
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
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {copy.points.map(point => (
            <article
              key={point.title}
              className="warm-hover-glow flex min-h-[18.5rem] h-full flex-col rounded-[1.45rem] border border-[#b35d4c]/35 bg-[rgba(255,255,255,0.9)] p-9 text-left shadow-[0_16px_36px_rgba(72,110,140,0.12)] backdrop-blur-sm lg:p-10"
            >
              <h3
                className={`tracking-[-0.01em] text-[#b56757] sm:whitespace-nowrap ${
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

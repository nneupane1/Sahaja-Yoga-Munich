import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import motherImg from '../assets/mother1.jpg';
import villageImg from '../assets/village.jpg';
import { useLocale } from '../context/LocaleContext';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Dedicated Shri Mataji content page.
 */
const ShriMatajiPage: React.FC = () => {
  const { locale } = useLocale();
  const location = useLocation();
  useScrollReveal('.reveal-ready', 'reveal', 0.18);

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      '/shri-mataji/biografie': 'lebensweg',
      '/shri-mataji/geistige-arbeit': 'geistige-arbeit',
      '/shri-mataji/oeffentliche-programme': 'oeffentliche-programme',
      '/shri-mataji/zeitleiste': 'zeitleiste',
      '/shri-mataji/vermaechtnis': 'vermaechtnis'
    };

    const targetId = sectionMap[location.pathname];

    if (!targetId) {
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      window.requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location.pathname]);

  const copy =
    locale === 'de'
      ? {
          sectionLinks: [
            { to: '/shri-mataji/biografie', label: 'Biografie' },
            { to: '/shri-mataji/geistige-arbeit', label: 'Geistige Arbeit' },
            { to: '/shri-mataji/oeffentliche-programme', label: 'Öffentliche Programme' },
            { to: '/shri-mataji/zeitleiste', label: 'Zeitleiste' },
            { to: '/shri-mataji/vermaechtnis', label: 'Vermächtnis' }
          ],
          heroEyebrow: 'Shri Mataji Nirmala Devi',
          heroTitle: 'Ein Leben, ganz dem Wohl und der Erhebung der Menschheit gewidmet.',
          heroBody:
            'Von Nirmala Srivastava zu Shri Mataji Nirmala Devi vereinte ihr Weg Mut, öffentliche Verantwortung, Familienleben und eine spirituelle Erkenntnis, die sie frei mit der Welt teilte.',
          imageAlt: 'Shri Mataji Nirmala Devi',
          imageNote:
            'Ihre Ausstrahlung verband innere Autorität, mütterliche Wärme und eine lebenslange Hingabe an das Wohl der Menschheit.',
          bioEyebrow: 'Von Nirmala Srivastava zu Shri Mataji',
          bioTitle: 'Eine Biografie, geprägt von Bildung, Mut und Dienst am Menschen.',
          bioParagraphs: [
            'Nirmala Srivastava, später unter dem Ehrentitel Shri Mataji Nirmala Devi bekannt, wurde am 21. März 1923 in Chhindwara in Indien geboren. Ihre Eltern, Prasad und Cornelia Salve, waren hochgebildet, prinzipientreu und aktiv am indischen Freiheitskampf beteiligt.',
            'Schon als Kind verbrachte sie Zeit im Ashram Mahatma Gandhis. Als junge Frau beteiligte sie sich selbst an der Unabhängigkeitsbewegung und wurde während der Quit-India-Bewegung im Jahr 1942 inhaftiert. Sie studierte Medizin in Ludhiana und Lahore und gewann dadurch eine disziplinierte Sicht auf den Menschen und auf den Dienst am Nächsten.',
            'Zwischen 1947 und 1970 führte sie ein Leben ungewöhnlicher Weite: Sie unterstützte die öffentliche Arbeit ihres Mannes C. P. Srivastava, zog ihre Familie auf, schützte Hilfsbedürftige, engagierte sich karitativ, förderte Kultur und trug die Verantwortung des Alltags mit seltener Ruhe und Würde.'
          ],
          workEyebrow: 'Geistige Arbeit',
          workTitle: 'Von innerer Verwirklichung zu einem Weg, der der Welt offensteht.',
          workCards: [
            {
              title: 'Ein tieferes Verständnis menschlicher Natur',
              description:
                'Inmitten von Familie, Verantwortung und Dienst richtete sie ihre Aufmerksamkeit darauf, wie der Mensch sein höchstes Potenzial verwirklichen kann.'
            },
            {
              title: 'Der Durchbruch vom 5. Mai 1970',
              description:
                'An diesem Tag öffnete sich ein Weg, durch den Selbstverwirklichung vielen Menschen zugleich vermittelt werden konnte.'
            },
            {
              title: 'Frei von Gebühren, dem Menschen von Natur aus zugehörig',
              description:
                'Sie bestand darauf, dass das Erwachen der inneren spirituellen Energie ein Geburtsrecht ist und niemals verkauft werden darf.'
            }
          ],
          workParagraph:
            'Beginnend in London, während ihr Mann als Generalsekretär der Internationalen Seeschifffahrts-Organisation wirkte, begann sie öffentliche Vorträge zu halten und Menschen die direkte Erfahrung der Selbstverwirklichung zu vermitteln. In den 1980er- und 1990er-Jahren reiste sie unermüdlich durch Europa, Australien, Amerika, Afrika, Asien und den Pazifikraum. Überall blieb die Vermittlung kostenfrei.',
          workImageAlt: 'Shri Mataji in einem Dorf in Indien',
          workImageNote:
            'Diese Szene aus einem indischen Dorf spiegelt die Schlichtheit, Nähe und Würde wider, mit der Shri Mataji Menschen aus ganz unterschiedlichen Lebenswelten begegnete.',
          programsEyebrow: 'Öffentliche Programme',
          programsTitle: 'Eine weltweite Reiseroute, getragen von unermüdlicher Hingabe.',
          programsParagraphs: [
            'Seit der Einführung von Sahaja Yoga im Jahr 1970 war Shri Mataji beinahe fortwährend unterwegs: mit öffentlichen Programmen, Mediengesprächen, internationalen Konferenzen, Seminaren, gemeinnützigen Initiativen und Begegnungen mit jener weltweiten Gemeinschaft, die sie als ihre globale Familie verstand.',
            'Kein Ort war ihr zu abgelegen und kein Publikum zu klein. Von den Ausläufern des Himalaya bis ins australische Outback, von London über Istanbul bis Los Angeles widmete sie ihre Zeit der Aufgabe, Menschen die unmittelbare Erfahrung der Selbstverwirklichung zugänglich zu machen.',
            'Die Reiserouten der 1970er- und 1980er-Jahre konzentrierten sich auf Europa, Australien und Nordamerika; in den 1990er-Jahren erweiterte sich diese Bewegung auf Südamerika, Afrika, Russland, Osteuropa, Asien und den Pazifikraum. Allein das Jahr 1990 umfasste mehr als zweihundert Veranstaltungen in sechsundzwanzig Ländern und über 135.000 Kilometer Reiseweg, also ungefähr drei Erdumrundungen. Über etwas mehr als vier Jahrzehnte hinweg trug sie diese Arbeit in mehr als hundert Länder.'
          ],
          programsStats: [
            {
              value: '40+',
              label: 'Jahre weltweiter Reisetätigkeit',
              detail: 'Von 1970 bis in die frühen 2010er-Jahre blieb ihre öffentliche Arbeit international präsent.'
            },
            {
              value: '200+',
              label: 'Veranstaltungen im Jahr 1990',
              detail: 'Dieses einzelne Jahr zeigt die Dichte und Kontinuität ihres typischen Reiseplans.'
            },
            {
              value: '26',
              label: 'Länder in einem Jahr',
              detail: 'Brasilien, Indien, Australien, Neuseeland, Russland, Europa, die USA und weitere Stationen gehörten dazu.'
            },
            {
              value: '135.000',
              label: 'Kilometer in 1990',
              detail: 'Das entspricht in etwa drei Umrundungen der Erde.'
            },
            {
              value: '100+',
              label: 'Länder mit etablierter Praxis',
              detail: 'In etwas mehr als vier Jahrzehnten wurde Sahaja Yoga auf allen Kontinenten verankert.'
            }
          ],
          timelineEyebrow: 'Ausgewählte Stationen',
          timelineTitle: 'Eine knappe Chronologie einer weltweiten geistigen Mission.',
          timelineCardLabel: 'Jahr',
          timeline: [
            { year: '1923', detail: 'Geburt am 21. März in Chhindwara, Indien.' },
            { year: '1930', detail: 'Rede im Sabarmati-Ashram von Mahatma Gandhi im Alter von sieben Jahren.' },
            { year: '1942', detail: 'Inhaftierung während der Quit-India-Bewegung.' },
            { year: '1947', detail: 'Indische Unabhängigkeit; Heirat mit Chandrika Prasad Srivastava.' },
            { year: '1970', detail: 'Öffnung des Sahasrara am 5. Mai in Nargol; Selbstverwirklichung wird vielen Menschen zugleich zugänglich.' },
            { year: '1971', detail: 'Entstehung von Sahaja Yoga.' },
            { year: '1977', detail: 'Erstes öffentliches Programm außerhalb Indiens in der Caxton Hall, London.' },
            { year: '1980er', detail: 'Fortlaufende Reisen durch Europa, Australien und Nordamerika, stets frei zugänglich.' },
            { year: '1990', detail: 'Erstes Programm für Mitarbeitende der Vereinten Nationen in New York.' },
            { year: '1995', detail: 'Ansprache auf der Weltfrauenkonferenz in Peking.' },
            { year: '1997', detail: 'Gründung der NGO Loving Hands in Delhi; öffentliche Erwähnung ihrer Nobelpreisnominierung in London.' },
            { year: '2003', detail: 'Gründung der Music & Arts Academy in Vaitarna, Indien.' },
            { year: '2011', detail: 'Heimgang am 23. Februar in Genua, Italien.' }
          ],
          legacyEyebrow: 'Vermächtnis',
          legacyTitle: 'Ihr Vermächtnis lebt in Institutionen, Menschen und einer lebendigen Praxis weiter.',
          legacyBodyOne:
            'Shri Mataji inspirierte und gründete Einrichtungen für Bildung, Gesundheit, Frauen, Kinder, Musik und bildende Kunst. Ihr Wirken verband spirituelle Einsicht mit sehr konkreten Formen menschlicher Fürsorge.',
          legacyBodyTwo:
            'Ehrungen, Doktorwürden und internationale Anerkennung folgten. Doch der eigentliche Kern ihres Vermächtnisses bleibt unverändert: Diese Meditation wird in mehr als 100 Ländern frei weitergegeben.',
          legacyHighlights: [
            'Öffentliche Programme in Europa, Amerika, Afrika, Asien und im Pazifikraum.',
            'Institutionen für Bildung, Gesundheit, Frauen, Kinder, Musik und Kunst.',
            'Eine lebendige Meditationspraxis, die frei in mehr als 100 Ländern geteilt wird.'
          ]
        }
      : {
          sectionLinks: [
            { to: '/shri-mataji/biografie', label: 'Biography' },
            { to: '/shri-mataji/geistige-arbeit', label: 'Spiritual Work' },
            { to: '/shri-mataji/oeffentliche-programme', label: 'Public Programs' },
            { to: '/shri-mataji/zeitleiste', label: 'Timeline' },
            { to: '/shri-mataji/vermaechtnis', label: 'Legacy' }
          ],
          heroEyebrow: 'Shri Mataji Nirmala Devi',
          heroTitle: 'A life wholly dedicated to the well-being and upliftment of humanity.',
          heroBody:
            'From Nirmala Srivastava to Shri Mataji Nirmala Devi, her journey united courage, public responsibility, family life and a spiritual insight she shared freely with the world.',
          imageAlt: 'Shri Mataji Nirmala Devi',
          imageNote:
            'Her presence brought together inner authority, maternal warmth and a lifelong dedication to human welfare.',
          bioEyebrow: 'From Nirmala Srivastava to Shri Mataji',
          bioTitle: 'A biography shaped by learning, courage and service.',
          bioParagraphs: [
            'Nirmala Srivastava, later known by the honorific title Shri Mataji Nirmala Devi, was born on 21 March 1923 in Chhindwara, India. Her parents, Prasad and Cornelia Salve, were deeply educated, principled and actively involved in the Indian struggle for independence.',
            'As a child she spent time in Mahatma Gandhi’s ashram. As a young woman she herself joined the freedom movement and was imprisoned during the Quit India Movement in 1942. Her medical studies in Ludhiana and Lahore deepened both her discipline and her practical understanding of human life.',
            'Between 1947 and 1970 she led a life of unusual breadth: supporting the public work of her husband C. P. Srivastava, raising a family, protecting those in need, engaging in charitable work, encouraging culture and carrying the responsibilities of ordinary life with uncommon steadiness and grace.'
          ],
          workEyebrow: 'Spiritual Work',
          workTitle: 'From inner realization to a path shared openly with the world.',
          workCards: [
            {
              title: 'A deeper understanding of human nature',
              description:
                'Amid family life, responsibility and service, she kept her attention on how human beings could rise to their highest possibility.'
            },
            {
              title: 'The breakthrough of 5 May 1970',
              description:
                'On that day a way opened through which Self-Realization could be given to many people collectively.'
            },
            {
              title: 'Free of charge, belonging to every human being',
              description:
                'She maintained that the awakening of the inner spiritual energy is a birthright and can never be sold.'
            }
          ],
          workParagraph:
            'Beginning in London, while her husband served as Secretary General of the International Maritime Organization, she started offering public talks and the direct experience of Self-Realization. Through the 1980s and 1990s she travelled tirelessly across Europe, Australia, the Americas, Africa, Asia and the Pacific. Everywhere, the experience remained free.',
          workImageAlt: 'Shri Mataji in a village in India',
          workImageNote:
            'This scene from a village in India reflects the simplicity, closeness and dignity with which Shri Mataji met people across very different walks of life.',
          programsEyebrow: 'Public Programs',
          programsTitle: 'A global itinerary carried by tireless dedication.',
          programsParagraphs: [
            'From the introduction of Sahaja Yoga in 1970 onward, Shri Mataji was almost constantly in motion: giving public programmes, speaking with the media, addressing international conferences, holding seminars, establishing charitable initiatives and spending time with what she regarded as her global family.',
            'No destination was too remote and no audience too small. From the foothills of the Himalayas to the Australian outback, and from London to Istanbul to Los Angeles, she devoted her time to making the direct experience of Self-Realization available to all who sought it.',
            'The 1970s and 1980s saw continuous travel through Europe, Australia and North America; in the 1990s that movement expanded across South America, Africa, Russia, Eastern Europe, Asia and the Pacific. The year 1990 alone included more than two hundred events in twenty-six countries and over 135,000 kilometres of travel, roughly the equivalent of circling the globe three times. Across just over four decades, she established this work in more than one hundred countries.'
          ],
          programsStats: [
            {
              value: '40+',
              label: 'years of global travel',
              detail: 'From 1970 into the early 2010s, her public work maintained an international rhythm.'
            },
            {
              value: '200+',
              label: 'events in 1990',
              detail: 'A single year already reveals the density and regularity of her schedule.'
            },
            {
              value: '26',
              label: 'countries in one year',
              detail: 'Brazil, India, Australia, New Zealand, Russia, Europe, the United States and more formed part of that itinerary.'
            },
            {
              value: '135,000',
              label: 'kilometres in 1990',
              detail: 'That distance is roughly equal to travelling around the globe three times.'
            },
            {
              value: '100+',
              label: 'countries reached',
              detail: 'Over a little more than four decades, Sahaja Yoga was established across the world.'
            }
          ],
          timelineEyebrow: 'Selected Milestones',
          timelineTitle: 'A concise chronology of a global spiritual mission.',
          timelineCardLabel: 'Year',
          timeline: [
            { year: '1923', detail: 'Birth on 21 March in Chhindwara, India.' },
            { year: '1930', detail: "Speaks at Mahatma Gandhi's Sabarmati Ashram at the age of seven." },
            { year: '1942', detail: 'Imprisoned during the Quit India Movement.' },
            { year: '1947', detail: 'India gains independence; marriage to Chandrika Prasad Srivastava.' },
            { year: '1970', detail: 'Opening of the Sahasrara on 5 May in Nargol; Self-Realization becomes accessible en masse.' },
            { year: '1971', detail: 'Establishment of Sahaja Yoga.' },
            { year: '1977', detail: 'First public programme outside India at Caxton Hall, London.' },
            { year: '1980s', detail: 'Continuous tours across Europe, Australia and North America, always free of charge.' },
            { year: '1990', detail: 'First programme for United Nations staff in New York.' },
            { year: '1995', detail: 'Speaks at the Fourth World Conference on Women in Beijing.' },
            { year: '1997', detail: 'Loving Hands NGO established in Delhi; public reference to her Nobel Prize nomination in London.' },
            { year: '2003', detail: 'Establishes the Music & Arts Academy in Vaitarna, India.' },
            { year: '2011', detail: 'Passes away on 23 February in Genoa, Italy.' }
          ],
          legacyEyebrow: 'Legacy',
          legacyTitle: 'Her legacy lives on through institutions, people and a living practice.',
          legacyBodyOne:
            'Shri Mataji inspired and established institutions for education, health, women, children, music and the fine arts. Her work joined spiritual insight with concrete forms of human care.',
          legacyBodyTwo:
            'Honours, doctorates and international recognition followed. Yet the central fact of her legacy remains unchanged: this meditation continues to be shared freely in more than 100 countries.',
          legacyHighlights: [
            'Public programmes across Europe, the Americas, Africa, Asia and the Pacific.',
            'Institutions for education, health, women, children, music and the arts.',
            'A living meditation tradition shared freely in more than 100 countries.'
          ]
        };

  return (
    <main className="overflow-hidden bg-[linear-gradient(180deg,#dff4ff_0%,#eff9ff_52%,#dff2ff_100%)]">
      <section className="relative -mt-1 px-1 pt-0 sm:px-2 lg:px-3">
        <figure className="reveal-ready group relative overflow-hidden rounded-b-[2.8rem] border-x border-b border-[#b35d4c]/25 bg-white/55 shadow-[0_34px_90px_rgba(72,110,140,0.2)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-24 top-6 h-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(104,168,205,0.2),transparent_72%)] blur-3xl"
          />
          <img
            src={villageImg}
            alt={copy.workImageAlt}
            className="h-[24rem] w-full object-cover object-[center_34%] transition duration-700 group-hover:scale-[1.03] sm:h-[32rem] lg:h-[42rem]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(220,238,249,0.04)_0%,rgba(220,238,249,0.08)_34%,rgba(17,48,73,0.3)_100%)]" />
          <figcaption className="absolute bottom-2 left-2 right-auto sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6">
            <div className="max-w-[18rem] rounded-[1.35rem] border border-[#c98974]/22 bg-[rgba(255,252,249,0.88)] px-4 py-3 shadow-[0_18px_44px_rgba(72,110,140,0.1)] backdrop-blur-[1px] sm:max-w-[22rem] lg:max-w-[26rem]">
              <p className="text-[0.82rem] leading-6 text-[#b97969] sm:text-[0.92rem]">{copy.workImageNote}</p>
            </div>
          </figcaption>
        </figure>
      </section>

      <section className="relative -mt-14 overflow-hidden pb-20 pt-[4.5rem] sm:-mt-20 sm:pb-24 sm:pt-24">
        <div
          aria-hidden="true"
          className="animate-glow-pulse absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-sky-200/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-soft absolute right-[-10rem] top-24 h-80 w-80 rounded-full bg-cyan-100/80 blur-3xl"
        />

        <div className="section-shell relative grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="reveal-ready max-w-3xl space-y-8">
            <span className="eyebrow">
              {copy.heroEyebrow}
            </span>
            <div className="space-y-5">
              <h1 className="text-balance text-5xl text-slate-800 sm:text-6xl lg:text-[4.5rem]">
                {copy.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                {copy.heroBody}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {copy.sectionLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover-chip group inline-flex items-center gap-3"
                >
                  {link.label}
                  <span className="transition duration-300 group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="reveal-ready relative">
            <div
              aria-hidden="true"
              className="animate-glow-pulse absolute inset-x-10 top-6 h-[88%] rounded-[2.2rem] bg-[radial-gradient(circle_at_center,rgba(104,168,205,0.28),transparent_68%)] blur-2xl"
            />
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#b35d4c]/25 bg-white/65 p-4 shadow-[0_28px_70px_rgba(72,110,140,0.18)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(72,110,140,0.24)]">
              <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.42)_45%,transparent_70%)] opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
              <img
                src={motherImg}
                alt={copy.imageAlt}
                className="h-[40rem] w-full rounded-[1.5rem] object-cover object-center transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="animate-float-soft relative mt-4 ml-4 max-w-[24rem] rounded-[1.5rem] border border-[#b35d4c]/22 bg-[rgba(255,250,246,0.92)] p-5 shadow-[0_20px_50px_rgba(72,110,140,0.14)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(72,110,140,0.18)] sm:max-w-[26rem]">
              <p className="text-base leading-7 text-slate-700">
                {copy.imageNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="lebensweg" className="section-band">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="reveal-ready space-y-4">
            <span className="eyebrow">
              {copy.bioEyebrow}
            </span>
            <h2 className="text-4xl text-slate-800 sm:text-5xl">{copy.bioTitle}</h2>
          </div>
          <div className="interactive-card reveal-ready group relative overflow-hidden space-y-5 p-8 text-slate-700">
            <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#7bb9dc,#c8715f)] transition duration-500 group-hover:w-3" />
            {copy.bioParagraphs.map(paragraph => (
              <p key={paragraph} className="text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="geistige-arbeit" className="section-band bg-[#dff2ff]">
        <div className="section-shell">
          <div className="reveal-ready mx-auto max-w-4xl text-center">
            <span className="eyebrow">
              {copy.workEyebrow}
            </span>
            <h2 className="mt-5 text-4xl text-slate-800 sm:text-5xl">{copy.workTitle}</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {copy.workCards.map((card, index) => (
              <article
                key={card.title}
                className="interactive-card reveal-ready group relative overflow-hidden p-7"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#87c3e3,#c8715f)] opacity-70 transition duration-500 group-hover:h-2" />
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3eb] text-sm font-bold text-[#b35d4c] transition duration-500 group-hover:scale-110 group-hover:bg-[#c8715f] group-hover:text-white">
                  0{index + 1}
                </div>
                <h3 className="max-w-[14rem] text-2xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                  {card.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-700">{card.description}</p>
              </article>
            ))}
          </div>

          <div className="interactive-card reveal-ready group mt-10 rounded-[1.8rem] p-8">
            <p className="text-lg leading-8 text-slate-700 transition duration-300 group-hover:translate-x-1">
              {copy.workParagraph}
            </p>
          </div>
        </div>
      </section>

      <section id="oeffentliche-programme" className="section-band">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal-ready space-y-5">
            <span className="eyebrow">
              {copy.programsEyebrow}
            </span>
            <h2 className="text-4xl text-slate-800 sm:text-5xl">{copy.programsTitle}</h2>
          </div>

          <div className="interactive-card reveal-ready group relative overflow-hidden p-8">
            <div className="absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,#7bb9dc,#c8715f)] transition duration-500 group-hover:w-3" />
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              {copy.programsParagraphs.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="section-shell mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {copy.programsStats.map(item => (
            <article
              key={`${item.value}-${item.label}`}
              className="interactive-card reveal-ready group overflow-hidden p-6"
            >
              <span className="text-4xl text-slate-800 transition duration-300 group-hover:translate-x-1">
                {item.value}
              </span>
              <h3 className="mt-4 text-lg font-semibold leading-7 text-[#b35d4c]">{item.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="zeitleiste" className="section-band">
        <div className="section-shell">
          <div className="reveal-ready space-y-4 text-center">
            <span className="eyebrow">
              {copy.timelineEyebrow}
            </span>
            <h2 className="text-4xl text-slate-800 sm:text-5xl">{copy.timelineTitle}</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {copy.timeline.map((item, index) => (
              <div
                key={`${item.year}-${item.detail}`}
                className="interactive-card reveal-ready group grid gap-4 p-5 sm:grid-cols-[auto_1fr]"
              >
                <div className="flex items-start gap-4 sm:flex-col sm:gap-3">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#c8715f] shadow-[0_0_0_8px_rgba(200,113,95,0.12)] transition duration-500 group-hover:scale-125 group-hover:shadow-[0_0_0_12px_rgba(200,113,95,0.18)] sm:mt-0" />
                  <div className="rounded-[1rem] border border-[#b35d4c]/24 bg-[rgba(255,246,240,0.92)] px-4 py-3 text-center shadow-[0_10px_24px_rgba(146,92,79,0.1)]">
                    <div className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#b97969]">
                      {copy.timelineCardLabel}
                    </div>
                    <div className="mt-1 text-xl font-semibold text-[#b35d4c] sm:text-2xl">
                      {item.year}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b97969]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="leading-7 text-slate-700">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vermaechtnis" className="section-band bg-[#d7eefc]">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="reveal-ready space-y-5">
            <span className="eyebrow">
              {copy.legacyEyebrow}
            </span>
            <h2 className="text-4xl text-slate-800 sm:text-5xl">{copy.legacyTitle}</h2>
            <p className="text-lg leading-8 text-slate-700">{copy.legacyBodyOne}</p>
            <p className="text-lg leading-8 text-slate-700">{copy.legacyBodyTwo}</p>
          </div>

          <div className="reveal-ready grid gap-4">
            {copy.legacyHighlights.map(item => (
              <div key={item} className="interactive-card reveal-ready group px-6 py-5 text-lg leading-8 text-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#b35d4c] transition duration-300 group-hover:bg-[#c8715f]" />
                  <span className="transition duration-300 group-hover:translate-x-1">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShriMatajiPage;

import type { Locale } from '../context/LocaleContext';
import sunsetImg from '../assets/redsunset.jpeg';
import hero1Img from '../assets/hero1.png';
import hero2Img from '../assets/hero2.png';

export type BlogArticleSection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogArticle = {
  route: string;
  category: string;
  cardTitle: string;
  cardDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  heroNote: string;
  sections: BlogArticleSection[];
  related: string[];
};

const articlesDe: Record<string, BlogArticle> = {
  '/blog/meditation-im-alltag': {
    route: '/blog/meditation-im-alltag',
    category: 'Praxis',
    cardTitle: 'Meditation im Alltag: kleine Wege zu mehr innerer Ruhe',
    cardDescription:
      'Wie kurze, wiederkehrende Momente von Stille den Tagesrhythmus verändern und mehr Ausgeglichenheit entstehen lassen können.',
    eyebrow: 'Praxis & Alltag',
    title: 'Meditation im Alltag: kleine Wege zu mehr innerer Ruhe',
    intro:
      'Meditation gewinnt an Kraft, wenn sie nicht vom Leben abgetrennt wird. Gerade kleine, ehrliche Momente von Stille helfen dabei, den Tag klarer, weicher und weniger getrieben zu erleben.',
    heroImage: sunsetImg,
    heroImageAlt: 'Sonnenuntergang',
    heroNote:
      'Ein ruhiger Tagesbeginn erinnert daran, dass Meditation nicht nur ein besonderer Moment sein muss, sondern ein neuer Ton für den ganzen Tag werden kann.',
    sections: [
      {
        title: 'Nicht mehr hinzufügen, sondern zurückkehren',
        paragraphs: [
          'Viele Menschen begegnen Meditation zunächst so, als müssten sie noch eine weitere Aufgabe bewältigen. Nachhaltiger wird sie jedoch dann, wenn sie als Rückkehr erlebt wird: zurück zur eigenen Mitte, zurück zu einer ruhigeren Aufmerksamkeit.',
          'Gerade diese Haltung passt gut zu Sahaja Yoga. Man muss keine künstliche Stimmung erzeugen. Es genügt, dem System Raum zu geben, sich zu ordnen.'
        ]
      },
      {
        title: 'Wenige Minuten können den Ton des Tages verändern',
        paragraphs: [
          'Nicht immer ist eine lange Sitzung nötig. Ein stiller Morgenbeginn, eine kurze Sammlung nach der Arbeit oder ein paar bewusste Minuten vor dem Schlafen können bereits spürbar etwas verändern.',
          'Mit der Zeit wird dadurch nicht nur der einzelne Moment ruhiger. Auch Reaktionen, Gespräche und Entscheidungen verlieren an Härte und Hast.'
        ],
        points: [
          'morgens für einen klareren Start',
          'abends zum Lösen von Tagesdruck',
          'zwischendurch zur Rückkehr in die Mitte'
        ]
      },
      {
        title: 'Regelmäßigkeit ist oft wichtiger als Dauer',
        paragraphs: [
          'Für viele ist nicht die Länge einer Meditation der entscheidende Punkt, sondern ihre Verlässlichkeit. Ein kurzer, ehrlicher Rhythmus trägt oft weiter als ein seltenes, großes Vorhaben.',
          'Dadurch entsteht allmählich Vertrauen: Meditation wird nicht zu einem fremden Ideal, sondern zu etwas, das den Alltag still und real begleitet.'
        ]
      }
    ],
    related: ['/blog/stille-und-aufmerksamkeit', '/blog/kollektive-meditation']
  },
  '/blog/stille-und-aufmerksamkeit': {
    route: '/blog/stille-und-aufmerksamkeit',
    category: 'Stille',
    cardTitle: 'Gedankenfreie Stille: warum eine ruhigere Aufmerksamkeit so wesentlich ist',
    cardDescription:
      'Ein Blogbeitrag über den Unterschied zwischen bloßer Entspannung und jener stilleren Form von Aufmerksamkeit, die Meditation wirklich vertieft.',
    eyebrow: 'Stille & Aufmerksamkeit',
    title: 'Gedankenfreie Stille: warum eine ruhigere Aufmerksamkeit so wesentlich ist',
    intro:
      'Meditation wird oft mit Entspannung verwechselt. Doch die tiefere Veränderung beginnt dort, wo Aufmerksamkeit nicht nur gelockert, sondern innerlich stiller wird und im gegenwärtigen Moment verweilt.',
    heroImage: hero1Img,
    heroImageAlt: 'Meditative Darstellung',
    heroNote:
      'Gedankenfreie Stille meint kein leeres Wegdriften, sondern eine hellere und zugleich ruhigere Form der Gegenwärtigkeit.',
    sections: [
      {
        title: 'Stille ist nicht Leere',
        paragraphs: [
          'Wenn der Gedankenstrom sich beruhigt, entsteht nicht automatisch ein Mangel. Im Gegenteil: Wahrnehmung wird oft präziser, feiner und weniger von innerem Lärm überdeckt.',
          'Gerade darin liegt die Würde dieser Erfahrung. Sie ist nicht dumpf oder passiv, sondern lebendig und wach.'
        ]
      },
      {
        title: 'Warum Aufmerksamkeit so schnell zerstreut wird',
        paragraphs: [
          'Im Alltag wird Aufmerksamkeit fortwährend von Erinnerungen, Erwartungen, Bewertungen und Reizüberflutung beansprucht. Dadurch wirkt der gegenwärtige Moment oft schmaler, als er eigentlich ist.',
          'Meditation schafft keinen künstlichen Gegenentwurf, sondern öffnet einen Raum, in dem diese Zerstreuung nicht mehr alles bestimmt.'
        ],
        points: [
          'weniger Zug in Vergangenheit und Zukunft',
          'weniger innere Reibung',
          'mehr Gegenwärtigkeit in Wahrnehmung und Reaktion'
        ]
      },
      {
        title: 'Was sich im Alltag verändert',
        paragraphs: [
          'Eine stillere Aufmerksamkeit wirkt sich nicht nur auf die Meditationssitzung aus. Sie verändert auch Gespräche, Entscheidungen und den Umgang mit Druck.',
          'Menschen beschreiben häufig, dass sie weniger mechanisch reagieren, besser zuhören und schwierige Situationen innerlich freier tragen können. Gerade deshalb ist diese Qualität so zentral.'
        ]
      }
    ],
    related: ['/blog/meditation-im-alltag', '/blog/kollektive-meditation']
  },
  '/blog/kollektive-meditation': {
    route: '/blog/kollektive-meditation',
    category: 'Gemeinschaft',
    cardTitle: 'Kollektive Meditation: warum gemeinsame Stille den Weg tragen kann',
    cardDescription:
      'Gemeinsame Meditation schafft Zugehörigkeit ohne Druck und gibt der persönlichen Praxis oft mehr Beständigkeit und Wärme.',
    eyebrow: 'Gemeinschaft & Praxis',
    title: 'Kollektive Meditation: warum gemeinsame Stille den Weg tragen kann',
    intro:
      'Meditation ist persönlich, aber nicht isoliert. Gerade in einer gemeinsamen Atmosphäre kann Stille tragender, leichter und natürlicher werden, ohne dass Individualität verloren geht.',
    heroImage: hero2Img,
    heroImageAlt: 'Meditative Szene',
    heroNote:
      'Wenn Menschen gemeinsam still werden, entsteht eine Form von Zugehörigkeit, die nicht auf Leistung, Vergleich oder Lautstärke beruht.',
    sections: [
      {
        title: 'Gemeinsamkeit ohne äußeren Druck',
        paragraphs: [
          'Viele Gruppenformate im Alltag erzeugen Erwartung oder Selbstdarstellung. Kollektive Meditation wirkt anders. Sie schafft Nähe, ohne ständige Erklärung zu verlangen.',
          'Gerade dadurch fühlen sich gemeinsame Meditationsabende oft freundlich, ruhig und entlastend an.'
        ]
      },
      {
        title: 'Warum gemeinsame Praxis oft stabilisiert',
        paragraphs: [
          'Wer regelmäßig mit anderen meditiert, erlebt häufig einen klareren Rhythmus. Die Praxis wird verlässlicher, weniger zufällig und leichter in den eigenen Alltag integriert.',
          'Das bedeutet nicht, dass die Gruppe die innere Arbeit ersetzt. Sie hilft vielmehr dabei, sie zu tragen und zu vertiefen.'
        ],
        points: [
          'mehr Beständigkeit im Rhythmus',
          'sanfte Unterstützung statt Druck',
          'natürlicher Übergang vom Einzelnen zum Gemeinsamen'
        ]
      },
      {
        title: 'Ein besonderer Wert für München',
        paragraphs: [
          'Für ein lokales Zentrum ist gemeinsame Meditation auch kulturell bedeutsam. Sie schafft einen Ort, an dem neue und erfahrene Meditierende einander ohne Hürde begegnen können.',
          'Gerade darin kann ein Blog hilfreich werden: Er erklärt nicht nur Termine, sondern vermittelt den inneren Sinn dessen, was Menschen dort gemeinsam suchen und erleben.'
        ]
      }
    ],
    related: ['/blog/meditation-im-alltag', '/blog/stille-und-aufmerksamkeit']
  }
};

const articlesEn: Record<string, BlogArticle> = {
  '/blog/meditation-im-alltag': {
    route: '/blog/meditation-im-alltag',
    category: 'Practice',
    cardTitle: 'Meditation in daily life: small ways toward deeper inner quiet',
    cardDescription:
      'How short, repeated moments of stillness can reshape the rhythm of the day and create more balance.',
    eyebrow: 'Practice & Daily Life',
    title: 'Meditation in daily life: small ways toward deeper inner quiet',
    intro:
      'Meditation becomes more powerful when it is not separated from life. Small, honest moments of stillness can change the tone of an ordinary day and make it feel less driven.',
    heroImage: sunsetImg,
    heroImageAlt: 'Sunset',
    heroNote:
      'A quiet beginning to the day can show that meditation is not only a special event but a different quality of presence carried through the hours ahead.',
    sections: [
      {
        title: 'Not adding more, but returning',
        paragraphs: [
          'Many people first approach meditation as one more task to manage. It becomes more sustainable when it is experienced instead as a return: a return to the centre, a return to a quieter attention.',
          'That fits Sahaja Yoga particularly well. Nothing artificial has to be forced. The system simply needs room to regain order.'
        ]
      },
      {
        title: 'A few minutes can change the tone of the day',
        paragraphs: [
          'A long session is not always necessary. A quiet start in the morning, a short recollection after work, or a few attentive minutes before sleep can already change something tangible.',
          'Over time, this affects more than isolated moments. Conversations, decisions and reactions begin to lose some of their haste and hardness.'
        ],
        points: [
          'in the morning for a clearer beginning',
          'in the evening to release pressure',
          'during the day to return to the centre'
        ]
      },
      {
        title: 'Regularity often matters more than duration',
        paragraphs: [
          'For many people, the decisive factor is not the length of a meditation but its continuity. A short, honest rhythm often carries farther than an occasional large intention.',
          'This slowly builds trust. Meditation stops feeling like an abstract ideal and becomes a quiet, real companion to daily life.'
        ]
      }
    ],
    related: ['/blog/stille-und-aufmerksamkeit', '/blog/kollektive-meditation']
  },
  '/blog/stille-und-aufmerksamkeit': {
    route: '/blog/stille-und-aufmerksamkeit',
    category: 'Stillness',
    cardTitle: 'Thoughtless awareness: why a quieter attention matters so much',
    cardDescription:
      'A blog essay on the difference between mere relaxation and the quieter form of attention that gives meditation depth.',
    eyebrow: 'Stillness & Attention',
    title: 'Thoughtless awareness: why a quieter attention matters so much',
    intro:
      'Meditation is often reduced to relaxation. The deeper shift begins where attention becomes not only softer, but quieter, more present and less dominated by inner noise.',
    heroImage: hero1Img,
    heroImageAlt: 'Meditative visual',
    heroNote:
      'Thoughtless awareness does not mean drifting into emptiness. It points toward a more luminous and more settled form of presence.',
    sections: [
      {
        title: 'Stillness is not emptiness',
        paragraphs: [
          'When the stream of thought settles, what appears is not a lack. Very often perception becomes more precise, more delicate and less overcast by mental noise.',
          'That is part of the dignity of this experience. It is not dull or passive. It is wakeful, alive and inwardly clear.'
        ]
      },
      {
        title: 'Why attention becomes so scattered',
        paragraphs: [
          'Ordinary life constantly pulls attention through memory, expectation, judgement and overstimulation. As a result, the present moment often feels thinner than it really is.',
          'Meditation does not create an artificial counter-world. It opens a space in which that scattering no longer governs everything.'
        ],
        points: [
          'less pull into past and future',
          'less inner friction',
          'more presence in perception and response'
        ]
      },
      {
        title: 'What begins to change in daily life',
        paragraphs: [
          'A quieter attention affects more than the meditation session itself. It also alters conversations, decisions and the way pressure is held.',
          'People often describe listening more fully, reacting less mechanically and carrying difficult situations with a little more freedom. That is why this quality matters so much.'
        ]
      }
    ],
    related: ['/blog/meditation-im-alltag', '/blog/kollektive-meditation']
  },
  '/blog/kollektive-meditation': {
    route: '/blog/kollektive-meditation',
    category: 'Collectivity',
    cardTitle: 'Collective meditation: why shared stillness can sustain the path',
    cardDescription:
      'Meditating together creates belonging without pressure and often gives personal practice more steadiness and warmth.',
    eyebrow: 'Collectivity & Practice',
    title: 'Collective meditation: why shared stillness can sustain the path',
    intro:
      'Meditation is personal, but it does not have to be isolated. In a collective atmosphere, stillness can become more supportive, lighter and more natural without reducing individuality.',
    heroImage: hero2Img,
    heroImageAlt: 'Meditative scene',
    heroNote:
      'When people become quiet together, a form of belonging can arise that does not depend on performance, comparison or noise.',
    sections: [
      {
        title: 'Togetherness without outer pressure',
        paragraphs: [
          'Many group situations in ordinary life generate expectation or self-display. Collective meditation works differently. It creates closeness without constantly demanding explanation.',
          'That is one reason shared meditation evenings often feel gentle, calm and relieving.'
        ]
      },
      {
        title: 'Why shared practice often stabilises growth',
        paragraphs: [
          'Those who meditate regularly with others often discover a clearer rhythm. The practice becomes less accidental and easier to anchor in daily life.',
          'This does not mean the group replaces inner work. Rather, it supports and steadies it.'
        ],
        points: [
          'more continuity in practice',
          'gentle support instead of pressure',
          'a natural bridge from individual to collective life'
        ]
      },
      {
        title: 'A special value for Munich',
        paragraphs: [
          'For a local centre, collective meditation also has cultural value. It creates a place where new and experienced meditators can meet without barriers.',
          'A blog can help here as well. It does not only announce times. It can also explain the inner meaning of what people come together to seek and experience.'
        ]
      }
    ],
    related: ['/blog/meditation-im-alltag', '/blog/stille-und-aufmerksamkeit']
  }
};

export const getBlogArticles = (locale: Locale) =>
  Object.values(locale === 'de' ? articlesDe : articlesEn);

export const getBlogArticle = (locale: Locale, route: string) =>
  (locale === 'de' ? articlesDe : articlesEn)[route];

import type { Locale } from '../context/LocaleContext';
import tendenciesImg from '../assets/sahajaonline/tendencies.jpg';
import selfRealizationImg from '../assets/sahajaonline/Sahaja-and-self-realization.jpg';
import thoughtlessImg from '../assets/sahajaonline/thoughtless-awareness-and-selfcare.jpg';
import improvedPerceptionImg from '../assets/sahajaonline/Improved-perception.jpg';
import collectiveMeditationImg from '../assets/sahajaonline/What-is-Collective-Meditation.jpg';
import tenetsImg from '../assets/sahajaonline/The-10-Defining-Tenets-of-Spirituality-scaled.jpg';
import subtleSystemDeImg from '../assets/sahajayogade/das-subtile-system-grafik.jpg';
import channelsDeImg from '../assets/sahajayogade/Channels-for-SY-website-de-2048x977-2-1024x489.png';
import leftChannelDeImg from '../assets/sahajayogade/nadis-inside-img-002.jpg';
import rightChannelDeImg from '../assets/sahajayogade/nadis-inside-img-00003.jpg';
import centralChannelDeImg from '../assets/sahajayogade/Central-Channel-SY-929x1024.png';
import mooladharaDeImg from '../assets/sahajayogade/chakras-inside-img-01-600x338-1.jpg';
import swadisthanaDeImg from '../assets/sahajayogade/chakras-inside-img-02-600x338-1.jpg';
import nabhiDeImg from '../assets/sahajayogade/chakras-inside-img-03-600x338-1.jpg';
import voidDeImg from '../assets/sahajayogade/Void.png';
import heartDeImg from '../assets/sahajayogade/Bildschirmfoto-2022-03-25-um-08.59.55.png';
import vishuddiDeImg from '../assets/sahajayogade/Bildschirmfoto-2022-03-25-um-09.00.53.png';
import agnyaDeImg from '../assets/sahajayogade/chakras-inside-img-07-600x338-1.jpg';
import sahasraraDeImg from '../assets/sahajayogade/chakras-inside-img-08-600x338-1.jpg';

export type KnowledgeArticleBlock = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

export type KnowledgeArticleDetailCard = {
  title: string;
  subtitle: string;
  description: string;
  note?: string;
  image: string;
  alt: string;
  imageMode?: 'cover' | 'contain';
};

export type KnowledgeArticle = {
  route: string;
  hubRoute: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageMode?: 'cover' | 'contain';
  heroCaption: string;
  heroTags: string[];
  keyPoints: string[];
  details?: {
    eyebrow: string;
    title: string;
    description: string;
    items: KnowledgeArticleDetailCard[];
  };
  blocks: KnowledgeArticleBlock[];
  related: string[];
};

const articlesDe: Record<string, KnowledgeArticle> = {
  '/kundalini-energiesystem/kundalini': {
    route: '/kundalini-energiesystem/kundalini',
    hubRoute: '/kundalini-energiesystem',
    navLabel: 'Kundalini',
    eyebrow: 'Lebendige innere Kraft',
    title: 'Kundalini: die ruhende Energie hinter Selbstverwirklichung',
    intro:
      'Die Kundalini wird als angeborene, unzerstörbare Energie verstanden, die im Menschen bereits vorhanden ist und im Kreuzbein ruht. Wenn sie erwacht, belebt sie das gesamte subtile System und macht Meditation von einer Idee zu einer spürbaren inneren Erfahrung.',
    heroImage: subtleSystemDeImg,
    heroImageAlt: 'Darstellung des subtilen Systems',
    heroImageMode: 'contain',
    heroCaption:
      'Die deutsche Systemgrafik zeigt, dass Kundalini nie isoliert gedacht wird: Sie wirkt immer im Zusammenhang mit Kanälen, Chakren und der Aufmerksamkeit.',
    heroTags: ['Geburtsrecht', 'Kreuzbein', 'Aufstieg durch die Mitte'],
    keyPoints: [
      'Kundalini gilt als ursprüngliche und unzerstörbare Energie.',
      'Sie ruht im Kreuzbein und muss nicht von außen hinzugefügt werden.',
      'Ihr Aufstieg nährt die Chakren und hebt die Aufmerksamkeit in die Mitte.'
    ],
    details: {
      eyebrow: 'Im Überblick',
      title: 'Wie die Kundalini im System verstanden wird',
      description:
        'Die deutsche Darstellung verbindet Kundalini nicht mit Spektakel, sondern mit innerer Ordnung. Entscheidend sind ihr ruhender Ursprung, ihr sanfter Aufstieg und die Art, wie sie das System von innen her nährt.',
      items: [
        {
          title: 'Im Menschen bereits angelegt',
          subtitle: 'Angeborenes Potenzial',
          description:
            'Kundalini wird als etwas beschrieben, das schon vorhanden ist. Spirituelles Wachstum bedeutet deshalb, ein eigenes inneres Potenzial zu wecken statt etwas Fremdes zu übernehmen.',
          note: 'Die Energie bleibt verborgen, bis sie durch Selbstverwirklichung erfahrbar wird.',
          image: subtleSystemDeImg,
          alt: 'Gesamtgrafik des subtilen Systems',
          imageMode: 'contain'
        },
        {
          title: 'Ruhend im Kreuzbein',
          subtitle: 'Der stille Ausgangspunkt',
          description:
            'Ihr Ruhepunkt liegt am unteren Ende des zentralen Kanals. Von dort steigt sie nicht gewaltsam auf, sondern in einer Weise, die dem System erlaubt, sich geordnet und natürlich zu öffnen.',
          note: 'Die Sushumna gilt als der Weg, auf dem der eigentliche innere Aufstieg geschieht.',
          image: centralChannelDeImg,
          alt: 'Zentraler Kanal des subtilen Systems',
          imageMode: 'contain'
        },
        {
          title: 'Nährung statt Druck',
          subtitle: 'Sanfte Transformation',
          description:
            'Wenn die Kundalini die Zentren erreicht, werden sie nicht forciert, sondern genährt. Dadurch entstehen mehr Stille, Klarheit und eine feinere Wahrnehmung des eigenen Zustands.',
          note: 'Die Wirkung zeigt sich in Meditation, Verhalten, Ausgleich und spürbarer innerer Ruhe.',
          image: channelsDeImg,
          alt: 'Kanäle des subtilen Systems',
          imageMode: 'contain'
        }
      ]
    },
    blocks: [
      {
        title: 'Nicht hinzugefügt, sondern entdeckt',
        paragraphs: [
          'In der deutschen Darstellung des subtilen Systems ist Kundalini keine von außen kommende Kraft. Sie gehört von Anfang an zum Menschen und bleibt auch dann vorhanden, wenn wir ihre Gegenwart noch nicht bewusst wahrnehmen.',
          'Gerade dadurch gewinnt die Idee von Selbstverwirklichung ihre Würde: Man muss nichts künstlich erzeugen, sondern lernt, einen verborgenen Ursprung in sich selbst freizulegen.'
        ],
        points: [
          'angeboren statt erworben',
          'unzerstörbar statt flüchtig',
          'innerer Ursprung statt äußere Technik'
        ]
      },
      {
        title: 'Der Aufstieg durch die Mitte',
        paragraphs: [
          'Wenn Kundalini erwacht, steigt sie durch die Sushumna auf, also durch den zentralen Kanal des subtilen Systems. Dieser Aufstieg wird nicht als dramatischer Ausbruch beschrieben, sondern als intelligenter, geordneter und respektvoller Vorgang.',
          'Das ist ein wichtiger Akzent: Die Energie „arbeitet“ nicht gegen den Menschen, sondern so, dass Zentren und Aufmerksamkeit von innen her geklärt werden können. Meditation erscheint dadurch als Nährung und nicht als Kampf.'
        ],
        points: [
          'Sushumna als Hauptweg des Aufstiegs',
          'sanfte statt gewaltsame Bewegung',
          'Klärung durch Nährung der Zentren'
        ]
      },
      {
        title: 'Von der Peripherie zur Mitte',
        paragraphs: [
          'Ein zentrales Bild dieser Tradition ist das Rad: An der Peripherie herrscht Unruhe, im Zentrum Frieden. Kundalini ist genau jene Kraft, die Aufmerksamkeit aus dem hektischen Randgeschehen in die innere Mitte zurückführen soll.',
          'Darum ist sie im Sahaja-Yoga-Verständnis so entscheidend. Erst wenn diese Bewegung geschieht, wird das subtile System wirklich erfahrbar und Stille bekommt eine organische, tragende Grundlage.'
        ]
      },
      {
        title: 'Woran ihre Wirkung erkannt wird',
        paragraphs: [
          'Die Wirkung der Kundalini wird nicht nur in Ideen beschrieben, sondern an konkreten Folgen: mehr Ruhe, ausgeglichenere Reaktionen, klarere Wahrnehmung und die Fähigkeit, im gegenwärtigen Moment zu bleiben.',
          'Je stärker die Zentren genährt werden, desto weniger muss Meditation erzwungen werden. Die Aufmerksamkeit wird von selbst stiller, und die innere Ordnung beginnt, sich auch im Alltag auszudrücken.'
        ]
      }
    ],
    related: [
      '/kundalini-energiesystem/kanaele-und-balance',
      '/kundalini-energiesystem/chakren-und-qualitaeten',
      '/selbstverwirklichung-meditation/selbstverwirklichung'
    ]
  },
  '/kundalini-energiesystem/kanaele-und-balance': {
    route: '/kundalini-energiesystem/kanaele-und-balance',
    hubRoute: '/kundalini-energiesystem',
    navLabel: 'Kanäle & Balance',
    eyebrow: 'Ida, Pingala und Sushumna',
    title: 'Kanäle & Balance: wie die Nadis Gefühl, Handlung und Gegenwart ordnen',
    intro:
      'Die Nadis sind die Wege, durch die sich Aufmerksamkeit und subtile Energie im Menschen bewegen. An ihnen lässt sich ablesen, ob wir in Freude, Aktivität oder zentrierter Gegenwärtigkeit leben oder ob unser inneres System aus dem Gleichgewicht geraten ist.',
    heroImage: channelsDeImg,
    heroImageAlt: 'Darstellung der drei Nadis',
    heroImageMode: 'contain',
    heroCaption:
      'Die deutsche Grafik macht die Grundidee sichtbar: Links und rechts beschreiben Polaritäten, die Mitte ist der Weg, auf dem Kundalini aufsteigt.',
    heroTags: ['Ida', 'Pingala', 'Sushumna'],
    keyPoints: [
      'Der linke Kanal trägt Gefühl, Wunsch und Vergangenheitsbindung.',
      'Der rechte Kanal trägt Aktivität, Planung und mentale Dynamik.',
      'Der zentrale Kanal ist die Spur von Gleichgewicht und Evolution.'
    ],
    details: {
      eyebrow: 'Die drei Bewegungen',
      title: 'Jeder Kanal hat eine eigene Qualität und ein eigenes Risiko',
      description:
        'Die Nadi-Lehre erklärt nicht nur spirituelle Entwicklung, sondern auch alltägliche Stimmungen, Übersteuerungen und Rückzüge. Gerade dadurch wirkt sie so praktisch: Man versteht, warum bestimmte Zustände entstehen und wie Meditation sie ausgleicht.',
      items: [
        {
          title: 'Linker Kanal',
          subtitle: 'Ida Nadi oder Mondkanal',
          description:
            'Hier sammeln sich Wünsche, Erinnerungen, Gewohnheiten und emotionale Muster. In seinem reinen Zustand trägt dieser Kanal Freude, Mitgefühl und eine weiche innere Tiefe.',
          note: 'Ein Übergewicht zeigt sich häufig als Lethargie, Schuld, Niedergeschlagenheit oder emotionale Überlagerung.',
          image: leftChannelDeImg,
          alt: 'Linker Kanal',
          imageMode: 'contain'
        },
        {
          title: 'Rechter Kanal',
          subtitle: 'Pingala Nadi oder Sonnenkanal',
          description:
            'Dieser Kanal liefert Energie für Handeln, Planen, Fokussierung und geistige Leistung. In Balance entsteht daraus wirksame Dynamik mit einem ruhigen Kopf.',
          note: 'Bei Überbeanspruchung kippt dieselbe Kraft leicht in Reizbarkeit, Druck, Aggression oder übersteigertes Ego.',
          image: rightChannelDeImg,
          alt: 'Rechter Kanal',
          imageMode: 'contain'
        },
        {
          title: 'Zentraler Kanal',
          subtitle: 'Sushumna Nadi',
          description:
            'Die Mitte ist der Weg der spiritischen Entwicklung. Hier steigt die Kundalini auf, und hier kann Aufmerksamkeit aufhören, zwischen Vergangenheit und Zukunft zu pendeln.',
          note: 'Gedankenloses Gewahrsein stärkt genau diesen Kanal und vertieft Frieden, Ausrichtung und Integration.',
          image: centralChannelDeImg,
          alt: 'Zentraler Kanal',
          imageMode: 'contain'
        }
      ]
    },
    blocks: [
      {
        title: 'Der linke Kanal und die Rückbewegung in die Vergangenheit',
        paragraphs: [
          'Der linke Kanal beginnt am Mooladhara und steigt auf der linken Körperseite auf, bis er im rechten Gehirnbereich endet. Ihm werden Wünsche, Gefühle, Erinnerungen und all jene Konditionierungen zugeordnet, die unsere Reaktionen aus der Vergangenheit heraus formen.',
          'Seine eigentliche Qualität ist Freude. Nicht die laute Freude des äußeren Erfolgs, sondern eine stille, ursprüngliche Freude, wie man sie aus unbeschwerten Kindheitserfahrungen kennt. Genau deshalb wirkt ein gestörter linker Kanal so schwer: Was eigentlich Freude tragen sollte, kippt dann in Schuld, Rückzug oder depressive Schwere.'
        ]
      },
      {
        title: 'Der rechte Kanal und die Dynamik der Zukunft',
        paragraphs: [
          'Der rechte Kanal beginnt am Swadisthana und steigt auf der rechten Körperseite auf, bis er im linken Gehirnbereich endet. Er versorgt Analyse, Planung, Handlung und jene Form von Energie, mit der wir Zukunft gestalten wollen.',
          'In seiner reinen Form macht er wach, fokussiert und effektiv. Wenn diese Seite jedoch zu stark beansprucht wird, verliert das System seine Weichheit: Produktive Kraft kippt in Druck, Gereiztheit oder ein Verhalten, das andere leicht überfährt.'
        ]
      },
      {
        title: 'Die Mitte als Weg der inneren Evolution',
        paragraphs: [
          'Der zentrale Kanal verläuft geradlinig von der Basis der Wirbelsäule bis zum Sahasrara. In der deutschen Darstellung ist er der eigentliche Weg der Evolution, weil nur durch diese Mitte die Kundalini aufsteigen und das System in einer höheren Ordnung zusammenführen kann.',
          'Das erklärt auch, warum Balance hier mehr bedeutet als bloßes Wohlbefinden. Sie ist die Bedingung dafür, dass Aufmerksamkeit im gegenwärtigen Moment ruht und Meditation zu echtem inneren Frieden wird.'
        ],
        points: [
          'links: Freude oder emotionale Schwere',
          'rechts: Dynamik oder Übersteuerung',
          'Mitte: Gegenwart, Frieden und evolutionäre Bewegung'
        ]
      }
    ],
    related: [
      '/kundalini-energiesystem/kundalini',
      '/kundalini-energiesystem/chakren-und-qualitaeten',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung'
    ]
  },
  '/kundalini-energiesystem/chakren-und-qualitaeten': {
    route: '/kundalini-energiesystem/chakren-und-qualitaeten',
    hubRoute: '/kundalini-energiesystem',
    navLabel: 'Chakren & Qualitäten',
    eyebrow: 'Innere Zentren',
    title: 'Chakren & Qualitäten: die Zentren, die Körper, Charakter und Bewusstsein verbinden',
    intro:
      'Die Chakren bilden eine feine Landkarte des Menschen. Jedes Zentrum hat eine subtile Qualität, eine körperliche Manifestation und einen klaren Einfluss darauf, wie wir handeln, fühlen, kommunizieren und meditieren.',
    heroImage: subtleSystemDeImg,
    heroImageAlt: 'Subtiles System mit Chakren',
    heroImageMode: 'contain',
    heroCaption:
      'Die Chakra-Darstellung zeigt die Zentren nicht als fernöstliche Dekoration, sondern als innere Drehpunkte von Physiologie und Bewusstsein.',
    heroTags: ['Sieben Zentren', 'Void', 'Physische Manifestation'],
    keyPoints: [
      'Jedes Chakra trägt eine prägende menschliche Qualität.',
      'Jedes Zentrum wirkt zugleich auf konkrete Körperbereiche.',
      'Der Void ergänzt die sieben Hauptchakren als Raum von Würde und Selbstführung.'
    ],
    details: {
      eyebrow: 'Die Zentren im Überblick',
      title: 'Von Mooladhara bis Sahasrara',
      description:
        'Die deutsche Chakra-Seite arbeitet die Zentren nicht nur symbolisch aus, sondern in ihrer psychologischen und körperlichen Bedeutung. Genau daraus entsteht eine präzise und moderne Lesart des subtilen Systems.',
      items: [
        {
          title: 'Mooladhara',
          subtitle: 'Unschuld und Weisheit',
          description:
            'Das erste Chakra bildet das Fundament des Systems. Es bewahrt Würde, kindliche Reinheit, Richtungssinn und die Fähigkeit, in Harmonie mit der Natur zu leben.',
          note: 'Physische Entsprechung: Fortpflanzungs- und Ausscheidungssystem, Sexualorgane.',
          image: mooladharaDeImg,
          alt: 'Mooladhara',
          imageMode: 'contain'
        },
        {
          title: 'Swadisthana',
          subtitle: 'Kreativität und Spontanität',
          description:
            'Dieses Zentrum versorgt Denken und Handeln mit Energie. Es trägt Ideenreichtum, Schönheitssinn, reines Wissen und jene Aufmerksamkeit, die für Meditation ungestört bleiben muss.',
          note: 'Physische Entsprechung: Magen, Darm, untere Leber, Gallenblase und Milz.',
          image: swadisthanaDeImg,
          alt: 'Swadisthana',
          imageMode: 'contain'
        },
        {
          title: 'Nabhi',
          subtitle: 'Ruhe und Zufriedenheit',
          description:
            'Nabhi steht für Verdauung, Stoffwechsel und die Art, wie materielle Bedürfnisse in Frieden integriert werden. Es trägt Fürsorge, Rechtschaffenheit, Freude und ein Gefühl von Genüge.',
          note: 'Physische Entsprechung: Magen, Eingeweide, obere Leber, Gallenblase und Milz.',
          image: nabhiDeImg,
          alt: 'Nabhi',
          imageMode: 'contain'
        },
        {
          title: 'Void',
          subtitle: 'Selbstdisziplin',
          description:
            'Der Void steht für den Raum, in dem Wissen reift und innere Autorität entsteht. Hier entwickeln sich Würde, Entschlossenheit, Geduld und die Fähigkeit, sich selbst geistig zu führen.',
          note: 'Der Void bildet mit Nabhi und Swadisthana eine integrierte Gruppe des inneren Wachstums.',
          image: voidDeImg,
          alt: 'Void',
          imageMode: 'contain'
        },
        {
          title: 'Herz',
          subtitle: 'Liebe, Mitgefühl und Sicherheit',
          description:
            'Das Herzchakra öffnet bedingungslose Liebe, Vertrauen und das Gefühl innerer Geborgenheit. Es hilft, Angst zu lösen und sich selbst und andere auf wärmere Weise wahrzunehmen.',
          note: 'Physische Entsprechung: Herz, Lunge, Brustraum, Atmung und Thymusdrüse.',
          image: heartDeImg,
          alt: 'Herz-Chakra',
          imageMode: 'contain'
        },
        {
          title: 'Vishuddi',
          subtitle: 'Kommunikation und Diplomatie',
          description:
            'Dieses Zentrum verfeinert Sprache, Humor, Höflichkeit und Gemeinschaftssinn. Es ist wesentlich für gesunde Beziehungen und die Fähigkeit, Spannung mit Respekt zu entschärfen.',
          note: 'Physische Entsprechung: Hals, Arme, Mund, Zunge, Zähne, Nase und Gesicht.',
          image: vishuddiDeImg,
          alt: 'Vishuddi-Chakra',
          imageMode: 'contain'
        },
        {
          title: 'Agnya',
          subtitle: 'Vergebung und Stille',
          description:
            'Agnya bringt Ego und Konditionierungen ins Gleichgewicht. Seine Essenz ist Vergebung, und genau dadurch öffnet sich der Zugang zu gedankenfreiem Gewahrsein.',
          note: 'Physische Entsprechung: Sehen, Hören, Denken, Hypophyse und Zirbeldrüse.',
          image: agnyaDeImg,
          alt: 'Agnya-Chakra',
          imageMode: 'contain'
        },
        {
          title: 'Sahasrara',
          subtitle: 'Integration',
          description:
            'Im Sahasrara werden die verschiedenen Aspekte des Systems zu Einheit. Hier wird die Verbindung zur allgegenwärtigen Kraft als Integration, Sinn und Ganzheit erfahren.',
          note: 'Physische Entsprechung: Gehirn.',
          image: sahasraraDeImg,
          alt: 'Sahasrara-Chakra',
          imageMode: 'contain'
        }
      ]
    },
    blocks: [
      {
        title: 'Warum die Chakren so praktisch lesbar sind',
        paragraphs: [
          'Die Chakra-Lehre wirkt auf dieser deutschen Grundlage so konkret, weil sie nie nur mit Farben oder Symbolen arbeitet. Jedes Zentrum verbindet eine innere Qualität mit klaren physiologischen Zuständigkeiten.',
          'Dadurch werden Unschuld, Kreativität, Zufriedenheit, Sicherheit, Kommunikation, Vergebung und Integration nicht zu abstrakten Tugenden, sondern zu Kräften, die sich im Leben stärken oder abschwächen lassen.'
        ]
      },
      {
        title: 'Die integrierte Gruppe von Swadisthana, Nabhi und Void',
        paragraphs: [
          'Ein besonderer Akzent der Seite liegt auf der Verbindung von Swadisthana, Nabhi und Void. Diese drei Bereiche arbeiten zusammen, wenn Handeln, materielle Ordnung, Wissen und Selbstführung eine reife Form annehmen sollen.',
          'Damit wird sichtbar, dass spiritische Entwicklung nicht von alltäglichem Leben getrennt wird. Verdauung, Arbeit, Verantwortung, Disziplin und Wahrheitssuche gehören in dieser Sicht in denselben inneren Zusammenhang.'
        ]
      },
      {
        title: 'Vom Herz bis zum Sahasrara',
        paragraphs: [
          'Die oberen Zentren zeigen, wie Reifung des Menschen gedacht wird: Liebe und Sicherheit im Herz, Diplomatie und Beziehung im Vishuddi, Vergebung und Stille im Agnya und schließlich Integration im Sahasrara.',
          'Das ergibt eine bemerkenswert moderne Bewegung: Entwicklung wird nicht an spektakulären Erfahrungen gemessen, sondern an größerer Liebe, besserer Kommunikation, weniger Urteil und tieferer innerer Einheit.'
        ],
        points: [
          'Mooladhara bis Void: Fundament, Kreativität, Zufriedenheit und Selbstführung',
          'Herz bis Agnya: Liebe, Beziehung, Vergebung und Stille',
          'Sahasrara: Integration als Ziel des ganzen Systems'
        ]
      }
    ],
    related: [
      '/kundalini-energiesystem/kundalini',
      '/kundalini-energiesystem/kanaele-und-balance',
      '/selbstverwirklichung-meditation/selbstverwirklichung'
    ]
  },
  '/selbstverwirklichung-meditation/selbstverwirklichung': {
    route: '/selbstverwirklichung-meditation/selbstverwirklichung',
    hubRoute: '/selbstverwirklichung-meditation',
    navLabel: 'Selbstverwirklichung',
    eyebrow: 'Der innere Durchbruch',
    title: 'Selbstverwirklichung: wenn das subtile Selbst erfahrbar wird',
    intro:
      'Selbstverwirklichung wird als jener Wendepunkt beschrieben, an dem das physische und das subtile Selbst einander bewusst begegnen. Der Mensch spürt nicht nur etwas Beruhigendes, sondern tritt in einen neuen Zustand von Verbundenheit, innerem Wissen und Bewusstheit ein.',
    heroImage: selfRealizationImg,
    heroImageAlt: 'Selbstverwirklichung',
    heroCaption:
      'Selbstverwirklichung markiert den Beginn einer bewusst erfahrbaren Verbindung zwischen der inneren Energie und dem tieferen Selbst.',
    heroTags: ['Innere Verbindung', 'Neues Bewusstsein', 'Oneness'],
    keyPoints: [
      'Selbstverwirklichung verbindet das subtile Selbst mit der allgegenwärtigen Kraft.',
      'Sie wird als Beginn eines Prozesses verstanden, nicht als Endpunkt.',
      'Mit ihr wird das subtile System tatsächlich erfahrbar.'
    ],
    blocks: [
      {
        title: 'Mehr als spirituelle Suche',
        paragraphs: [
          'Spirituelle Suche wird hier nicht als vage Sehnsucht verstanden, sondern als Rückkehr zum eigenen Ursprung. Der Mensch ist aus dem Subtilen hervorgegangen und kann sich deshalb wieder mit dieser tieferen Wirklichkeit verbinden.',
          'Selbstverwirklichung bedeutet in diesem Sinn nicht bloß eine schöne Idee, sondern ein tatsächliches Herstellen der Verbindung zwischen äußerem und innerem Sein.'
        ]
      },
      {
        title: 'Der Eintritt in eine neue Bewusstseinsebene',
        paragraphs: [
          'Mit dieser Verbindung öffnet sich eine neue Ebene der Wahrnehmung. Die subtile Energie wird spürbar, die Aufmerksamkeit verfeinert sich, und zugleich entsteht das Gefühl, Teil eines größeren Ganzen zu sein.',
          'Das Ich verschwindet dabei nicht. Vielmehr bleibt der Mensch als Person bestehen, gewinnt aber eine tiefere Identität, die nicht mehr nur auf Körper, Denken und Rolle beschränkt ist.'
        ]
      },
      {
        title: 'Warum dieser Schritt so zentral ist',
        paragraphs: [
          'Selbstverwirklichung bildet die Schwelle, ab der Meditation zu einer gelebten Realität wird. Erst hier werden das subtile System, die innere Energie und die Erfahrung von Verbundenheit zu etwas Nachvollziehbarem.',
          'Darum ist sie nicht Abschluss, sondern Auftakt: Der Weg der Verfeinerung beginnt genau dort, wo diese innere Verbindung spürbar wird.'
        ]
      }
    ],
    related: [
      '/selbstverwirklichung-meditation/gedankenfreie-stille',
      '/selbstverwirklichung-meditation/meditationspraxis',
      '/kundalini-energiesystem/kundalini'
    ]
  },
  '/selbstverwirklichung-meditation/gedankenfreie-stille': {
    route: '/selbstverwirklichung-meditation/gedankenfreie-stille',
    hubRoute: '/selbstverwirklichung-meditation',
    navLabel: 'Gedankenfreie Stille',
    eyebrow: 'Vierter Bewusstseinszustand',
    title: 'Gedankenfreie Stille: ein waches Bewusstsein jenseits des Gedankenstroms',
    intro:
      'Gedankenfreie Stille wird als vierter Bewusstseinszustand beschrieben. Sie ist weder Schlaf, Traum noch gewöhnliches Wachsein, sondern ein stiller und doch hochwacher Raum, in dem das Denken seine Dominanz verliert und das innere Selbst deutlicher hervortritt.',
    heroImage: thoughtlessImg,
    heroImageAlt: 'Gedankenfreie Stille',
    heroCaption:
      'Gedankenfreiheit bedeutet hier nicht Leere, sondern eine ruhige, inspirierte und integrierte Form von Wachheit.',
    heroTags: ['Turiya', 'Wachheit', 'Inneres Selbst'],
    keyPoints: [
      'Gedankenfreiheit wird als eigener Bewusstseinszustand verstanden.',
      'Der Aufstieg der Energie erleichtert diesen Zustand wesentlich.',
      'Je stärker der Fluss der Energie, desto tiefer und länger wird die Stille.'
    ],
    blocks: [
      {
        title: 'Jenseits von Wachen, Träumen und Schlafen',
        paragraphs: [
          'Gedankenfreie Stille wird als Zustand beschrieben, in dem das Gehirn nicht ausgeschaltet ist, aber nicht mehr im üblichen Modus von Denken und Reagieren arbeitet.',
          'Gerade deshalb wirkt dieser Zustand so ungewöhnlich: Er verbindet Ruhe mit Wachheit und Stille mit Präsenz.'
        ]
      },
      {
        title: 'Warum die Energie dabei entscheidend ist',
        paragraphs: [
          'Dieser Zustand soll nicht allein auf der gewöhnlichen mentalen Ebene erkämpft werden. Die aufsteigende Energie übernimmt einen Großteil der Arbeit und trägt die Aufmerksamkeit über den gewohnten Gedankenstrom hinaus.',
          'So wird Meditation weniger zu einem Kampf gegen Gedanken und mehr zu einem Prozess des inneren Getragenwerdens.'
        ]
      },
      {
        title: 'Die Qualität dieser Stille',
        paragraphs: [
          'In diesem Zustand können Gedanken und Gefühle beobachtet werden, ohne dass man sofort in sie hineingezogen wird. Das führt zu mehr innerer Distanz, Klarheit und weniger Reaktivität.',
          'Je tiefer diese Stille wird, desto freier fließt auch die Energie. Stille und Energiefluss verstärken sich damit gegenseitig.'
        ]
      }
    ],
    related: [
      '/selbstverwirklichung-meditation/selbstverwirklichung',
      '/selbstverwirklichung-meditation/meditationspraxis',
      '/wissenschaft-spiritualitaet/innere-wissenschaft'
    ]
  },
  '/selbstverwirklichung-meditation/meditationspraxis': {
    route: '/selbstverwirklichung-meditation/meditationspraxis',
    hubRoute: '/selbstverwirklichung-meditation',
    navLabel: 'Meditationspraxis',
    eyebrow: 'Meditation im Alltag',
    title: 'Meditationspraxis: wie sich die Erfahrung im Alltag vertieft',
    intro:
      'Meditation wird nicht als starre Routine, sondern als lebendige Praxis beschrieben. Sie lässt sich zuhause, morgens oder abends, in Stille oder mit leiser Unterstützung vertiefen und gewinnt vor allem durch Regelmäßigkeit an Kraft.',
    heroImage: selfRealizationImg,
    heroImageAlt: 'Meditationspraxis zuhause',
    heroCaption:
      'Die tägliche Praxis ist der Ort, an dem aus einer ersten Erfahrung eine stabile innere Gewohnheit wird.',
    heroTags: ['Zuhause', 'Regelmäßigkeit', 'Kollektivität'],
    keyPoints: [
      'Meditation kann flexibel und doch ernsthaft in den Alltag integriert werden.',
      'Der Schwerpunkt liegt auf Erfahrung statt auf starrer Disziplin.',
      'Individuelle und kollektive Meditation vertiefen sich gegenseitig.'
    ],
    blocks: [
      {
        title: 'Einfache Bedingungen, tiefe Wirkung',
        paragraphs: [
          'Für die Praxis wird ein ruhiger Ort empfohlen, gern mit etwas Natur im Raum oder sogar im Freien. Die Bedingungen sollen unterstützend sein, aber nicht künstlich überhöht.',
          'Wichtiger als Perfektion ist die Freude an der Erfahrung. Die Praxis bleibt flexibel, und der Mensch soll selbst herausfinden, welche Zeiten und Rhythmen für ihn wirklich tragfähig sind.'
        ]
      },
      {
        title: 'Wie eine Sitzung beschrieben wird',
        paragraphs: [
          'Die Praxis beginnt mit dem Entspannen, dem Heben der inneren Energie und dem stillen Verweilen. Gedanken sollen nicht bekämpft, sondern beobachtet und wieder losgelassen werden.',
          'Mit der Zeit können subtile Empfindungen auf den Handflächen oder am Scheitel deutlicher werden. Die Meditation wird dadurch konkreter und persönlicher.'
        ]
      },
      {
        title: 'Die Rolle kollektiver Meditation',
        paragraphs: [
          'Neben der individuellen Praxis wird gemeinsames Meditieren als kraftvolle Vertiefung beschrieben. Mehrere Menschen in Stille verstärken das Erleben von Energiefluss und Aufmerksamkeit deutlich.',
          'Individuelle und kollektive Praxis werden nicht gegeneinander ausgespielt. Sie ergänzen sich und tragen gemeinsam dazu bei, dass die Entwicklung ausgeglichener und nachhaltiger wird.'
        ]
      }
    ],
    related: [
      '/selbstverwirklichung-meditation/selbstverwirklichung',
      '/selbstverwirklichung-meditation/gedankenfreie-stille',
      '/kultur-des-geistes/kollektive-meditation'
    ]
  },
  '/wissenschaft-spiritualitaet/innere-wissenschaft': {
    route: '/wissenschaft-spiritualitaet/innere-wissenschaft',
    hubRoute: '/wissenschaft-spiritualitaet',
    navLabel: 'Innere Wissenschaft',
    eyebrow: 'Höheres Bewusstsein',
    title: 'Innere Wissenschaft: wenn Spiritualität zu einer Frage bewusster Erfahrung wird',
    intro:
      'Spiritualität wird hier nicht als Gegensatz zur Vernunft dargestellt. Vielmehr erscheint sie als eine Form innerer Forschung, bei der Aufmerksamkeit, Bewusstsein und unmittelbare Erfahrung ernst genommen und mit prüfender Offenheit betrachtet werden.',
    heroImage: thoughtlessImg,
    heroImageAlt: 'Höheres Bewusstsein',
    heroCaption:
      'Das Entscheidende ist nicht bloße Behauptung, sondern die Möglichkeit, Bewusstsein als erfahrbares Feld genauer zu untersuchen.',
    heroTags: ['Bewusstsein', 'Aufmerksamkeit', 'Prüfbarkeit'],
    keyPoints: [
      'Meditation wird nicht nur als Entspannung, sondern als Bewusstseinsveränderung gelesen.',
      'Gedankenfreie Aufmerksamkeit gilt als überprüfbare Erfahrung.',
      'Innere Entwicklung wird mit geistiger Offenheit statt Dogma verbunden.'
    ],
    blocks: [
      {
        title: 'Jenseits des alten Meditationsbegriffs',
        paragraphs: [
          'Ein zentrales Motiv ist die Verschiebung vom reinen Relaxationsmodell zu einem Verständnis von Meditation, das Aufmerksamkeit und Suspension des Gedankenstroms in den Mittelpunkt stellt.',
          'Dadurch wird meditative Praxis nicht verflacht. Sie erscheint als echter Zugang zu einer anderen Qualität von Bewusstsein.'
        ]
      },
      {
        title: 'Höheres Bewusstsein als reale Möglichkeit',
        paragraphs: [
          'Der vierte Bewusstseinszustand wird nicht als poetische Metapher, sondern als reale menschliche Möglichkeit gelesen. Gerade die Komplexität des Gehirns wird dabei als Hinweis auf noch nicht ausgeschöpfte Bewusstseinsräume verstanden.',
          'Spirituelle Tiefe wird so nicht gegen Forschung ausgespielt, sondern gewinnt eine Sprache, die ernsthaft und modern wirkt.'
        ]
      },
      {
        title: 'Die Haltung des Forschenden',
        paragraphs: [
          'Wer diesen Weg geht, soll weder blind glauben noch vorschnell ablehnen. Die Haltung ist die eines Experimentierenden: offen, genau und bereit, die eigene Erfahrung zu prüfen.',
          'Damit entsteht eine innere Wissenschaft, die Erfahrung nicht romantisiert, sondern verfeinert.'
        ]
      }
    ],
    related: [
      '/wissenschaft-spiritualitaet/gesundheit-und-forschung',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung',
      '/selbstverwirklichung-meditation/gedankenfreie-stille'
    ]
  },
  '/wissenschaft-spiritualitaet/gesundheit-und-forschung': {
    route: '/wissenschaft-spiritualitaet/gesundheit-und-forschung',
    hubRoute: '/wissenschaft-spiritualitaet',
    navLabel: 'Gesundheit & Forschung',
    eyebrow: 'Ganzheitliche Perspektive',
    title: 'Gesundheit & Forschung: Meditation als mehrschichtige Form von Regulierung',
    intro:
      'Meditation wird hier nicht auf ein subjektives Wohlgefühl reduziert. Vielmehr erscheint sie als Praxis, die mentale, körperliche und energetische Prozesse zugleich berührt und dadurch in Forschung wie im Alltag ernst genommen werden kann.',
    heroImage: tendenciesImg,
    heroImageAlt: 'Gesundheit und Regulation',
    heroCaption:
      'Balance, Regulation und Wohlbefinden werden als vernetzte Prozesse verstanden, nicht als voneinander isolierte Themen.',
    heroTags: ['EEG', 'Wohlbefinden', 'Regulation'],
    keyPoints: [
      'Gedankenfreie Meditation wird als reale Erfahrung mit objektiven Begleitmustern verstanden.',
      'Gesundheit erscheint als Ausdruck innerer Ordnung und Balance.',
      'Forschung bezieht Gehirnaktivität, Stress, Wohlbefinden und Resilienz mit ein.'
    ],
    blocks: [
      {
        title: 'Von Erfahrung zu Messbarkeit',
        paragraphs: [
          'Meditative Zustände werden nicht nur beschrieben, sondern auch mit Blick auf Gehirnaktivität und neurophysiologische Muster betrachtet. Das verleiht der Praxis eine zusätzliche Ebene von Ernsthaftigkeit.',
          'Damit wird nicht behauptet, alles Geistige ließe sich auf Daten reduzieren. Es wird vielmehr gezeigt, dass tiefe Erfahrung und objektive Beobachtung nebeneinander bestehen können.'
        ]
      },
      {
        title: 'Ganzheitliche Wirkung',
        paragraphs: [
          'Mentales Wohlbefinden, Stressregulation, Aufmerksamkeit, Schlaf, körperliche Belastbarkeit und Resilienz werden als miteinander verbundene Felder betrachtet. Die Praxis wird als Einflussfaktor auf das Ganze verstanden.',
          'Gesundheit erscheint so nicht nur als Symptomfreiheit, sondern als bessere Abstimmung innerer Prozesse.'
        ]
      },
      {
        title: 'Warum Forschung hier sinnvoll ist',
        paragraphs: [
          'Wo Meditation tiefer in Bewusstsein, Nervensystem und Verhalten eingreift, entsteht natürlicherweise auch die Frage nach ihren nachvollziehbaren Wirkungen. Forschung wird so zur Ergänzung, nicht zum Widerspruch der Erfahrung.',
          'Gerade diese Verbindung macht das Thema stark: spirituelle Praxis bleibt menschlich tief und zugleich intellektuell verantwortbar.'
        ]
      }
    ],
    related: [
      '/wissenschaft-spiritualitaet/innere-wissenschaft',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung',
      '/selbstverwirklichung-meditation/meditationspraxis'
    ]
  },
  '/wissenschaft-spiritualitaet/integration-und-entwicklung': {
    route: '/wissenschaft-spiritualitaet/integration-und-entwicklung',
    hubRoute: '/wissenschaft-spiritualitaet',
    navLabel: 'Integration & Entwicklung',
    eyebrow: 'Charakter, Aufmerksamkeit, Reifung',
    title: 'Integration & Entwicklung: wie Meditation Persönlichkeit vertiefen kann',
    intro:
      'Spirituelle Entwicklung wird hier eng mit Persönlichkeits- und Charakterreifung verknüpft. Aufmerksamkeit, Tendenzen, Reaktionen und Bewusstseinsräume bilden gemeinsam ein Feld, in dem der Mensch klarer, reifer und integrierter werden kann.',
    heroImage: tenetsImg,
    heroImageAlt: 'Geistige Entwicklung und Charakter',
    heroCaption:
      'Innere Entwicklung zeigt sich nicht nur in Zuständen, sondern in gereifterem Charakter, größerer Klarheit und verlässlicherem Verhalten.',
    heroTags: ['Charakter', 'Bewusstseinsräume', 'Reifung'],
    keyPoints: [
      'Spiritualität wird mit Charakter- und Persönlichkeitsentwicklung verknüpft.',
      'Bewusstseinsräume hängen davon ab, wohin Aufmerksamkeit fortlaufend gezogen wird.',
      'Demut, Offenheit und Ausdauer gelten als reale Voraussetzungen innerer Entwicklung.'
    ],
    blocks: [
      {
        title: 'Die Aufmerksamkeit formt das innere Leben',
        paragraphs: [
          'Bewusstseinsräume entstehen nicht zufällig. Sie werden dadurch geprägt, wohin Aufmerksamkeit wieder und wieder gezogen wird: in die Vergangenheit, in Zukunftsprojektionen oder in zentrierte Gegenwärtigkeit.',
          'Damit wird innere Entwicklung konkret. Sie hängt eng mit Verhalten, Reaktion und mentaler Gewohnheit zusammen.'
        ]
      },
      {
        title: 'Spiritualität als Reifung',
        paragraphs: [
          'Das Ziel geistiger Entwicklung erscheint nicht in spektakulären Ausnahmezuständen allein, sondern in gereifter Persönlichkeit. Weisheit, Ausgeglichenheit, Demut und Ausdauer werden als sichtbare Früchte innerer Arbeit beschrieben.',
          'So wird Spiritualität aus dem Ungefähren herausgeholt. Sie zeigt sich im Menschen selbst.'
        ]
      },
      {
        title: 'Der Weg verlangt Haltung',
        paragraphs: [
          'Innere Entwicklung wird nicht als magischer Kurzweg verstanden. Sie verlangt die suchende innere Regung, Offenheit gegenüber Erfahrung, Geduld mit Rückschlägen und die Bereitschaft, das eigene Ego nüchtern zu betrachten.',
          'Gerade dadurch bleibt dieser Weg glaubwürdig. Er verspricht nicht Abkürzung, sondern echte Verwandlung.'
        ]
      }
    ],
    related: [
      '/wissenschaft-spiritualitaet/innere-wissenschaft',
      '/kultur-des-geistes/kulturelle-integration',
      '/kultur-des-geistes/kollektive-meditation'
    ]
  },
  '/kultur-des-geistes/kulturelle-integration': {
    route: '/kultur-des-geistes/kulturelle-integration',
    hubRoute: '/kultur-des-geistes',
    navLabel: 'Kulturelle Integration',
    eyebrow: 'Spiritualität und gemeinsames Leben',
    title: 'Kulturelle Integration: innere Freiheit als Grundlage echter Offenheit',
    intro:
      'Kulturelle Integration wird hier nicht als bloße Toleranzformel verstanden. Sie wächst aus einem Verständnis von Spiritualität, das Freiheit, Gewissen, Respekt und die Eigenständigkeit innerer Erfahrung ernst nimmt.',
    heroImage: tenetsImg,
    heroImageAlt: 'Kulturelle Integration und geistige Freiheit',
    heroCaption:
      'Wo Spiritualität nicht mit äußerem Zwang verwechselt wird, kann Vielfalt ihren würdigen Platz behalten.',
    heroTags: ['Freiheit', 'Respekt', 'Offenheit'],
    keyPoints: [
      'Spiritualität und Religion werden klar unterschieden.',
      'Innerer Weg darf nie gegen den freien Willen arbeiten.',
      'Respekt für Vielfalt wächst aus geistiger Reife, nicht aus bloßer Anpassung.'
    ],
    blocks: [
      {
        title: 'Warum Spiritualität und Religion unterschieden werden',
        paragraphs: [
          'Spiritualität wird hier als innere Verbindung und Erfahrung verstanden, Religion stärker als Lehre, Form oder Ritus. Beides kann sich überschneiden, ist aber nicht identisch.',
          'Diese Unterscheidung schafft Raum für echte Freiheit. Menschen müssen ihren inneren Weg nicht über äußere Identität beweisen.'
        ]
      },
      {
        title: 'Freier Wille als geistige Grundlage',
        paragraphs: [
          'Ein zentrales Prinzip lautet, dass spirituelle Praxis den freien Willen nie verletzen darf. Sie kann nur dann echt wirken, wenn der Mensch selbst Träger seines Weges bleibt.',
          'Gerade daraus entsteht Würde: Der Mensch wird nicht geformt oder manipuliert, sondern zur eigenen Meisterschaft eingeladen.'
        ]
      },
      {
        title: 'Was Integration in diesem Sinn bedeutet',
        paragraphs: [
          'Integration bedeutet dann nicht Gleichmacherei, sondern eine tiefere Kultur des Respekts. Verschiedene religiöse, kulturelle und persönliche Wege können nebeneinander stehen, wenn die innere Freiheit des Menschen geachtet wird.',
          'So entsteht eine Form von geistiger Kultur, die Vielfalt nicht fürchtet, weil sie von einer tieferen Einheit her denkt.'
        ]
      }
    ],
    related: [
      '/kultur-des-geistes/kreativitaet',
      '/kultur-des-geistes/kollektive-meditation',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung'
    ]
  },
  '/kultur-des-geistes/kreativitaet': {
    route: '/kultur-des-geistes/kreativitaet',
    hubRoute: '/kultur-des-geistes',
    navLabel: 'Kreativität',
    eyebrow: 'Verfeinerte Aufmerksamkeit',
    title: 'Kreativität: wenn Meditation Wahrnehmung und Ausdruck vertieft',
    intro:
      'Kreativität wird nicht nur als Talent oder Leistung verstanden, sondern als Ausdruck verfeinerter Aufmerksamkeit. Meditation soll die Fähigkeit stärken, subtile Details wahrzunehmen, präsent zu bleiben und Ausdruck mit Tiefe zu füllen.',
    heroImage: improvedPerceptionImg,
    heroImageAlt: 'Kreative Wahrnehmung',
    heroCaption:
      'Kreative Arbeit gewinnt an Intensität, wenn Aufmerksamkeit gereinigt wird und die Gegenwart nicht mehr vom Gedankenlärm überdeckt ist.',
    heroTags: ['Präsenz', 'Ausdruck', 'Perzeption'],
    keyPoints: [
      'Kreativer Ausdruck wird mit Sinn, Verbindung und emotionaler Intelligenz verbunden.',
      'Meditation verfeinert Aufmerksamkeit und macht subtile Unterschiede deutlicher.',
      'Kreativität erscheint als Frucht größerer Präsenz, nicht nur als Technik.'
    ],
    blocks: [
      {
        title: 'Kreativität als gelebte Verbindung',
        paragraphs: [
          'Kreative Arbeit kann dem Leben Sinn, Magie und Beziehung verleihen. Sie verbindet Menschen über Sprache, Ort und Zeit hinweg.',
          'Darum wird Kreativität nicht nur auf Beruf oder Talent reduziert. Sie ist auch Ausdruck eines tieferen inneren Bedürfnisses, etwas Wahres sichtbar zu machen.'
        ]
      },
      {
        title: 'Wie Meditation den Ausdruck verändert',
        paragraphs: [
          'Meditation lehrt, Aufmerksamkeit zu regulieren. Wer präsenter wird, kann tiefer beobachten, feiner hören und differenzierter gestalten.',
          'Dadurch verändert sich nicht nur die Menge des kreativen Outputs, sondern die Qualität des Ausdrucks selbst. Atmosphäre, Nuance und innere Stimmigkeit werden deutlicher.'
        ]
      },
      {
        title: 'Von Technik zu Wahrnehmung',
        paragraphs: [
          'Das Entscheidende ist nicht allein Beherrschung von Technik. Wirklich kreative Arbeit entspringt häufig einer verfeinerten Form von Wahrnehmung.',
          'Meditation öffnet genau diesen Raum: Sie verschiebt das Bewusstsein, steigert die Sensibilität und lässt schöpferische Arbeit tiefer und organischer werden.'
        ]
      }
    ],
    related: [
      '/kultur-des-geistes/kollektive-meditation',
      '/kultur-des-geistes/kulturelle-integration',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung'
    ]
  },
  '/kultur-des-geistes/kollektive-meditation': {
    route: '/kultur-des-geistes/kollektive-meditation',
    hubRoute: '/kultur-des-geistes',
    navLabel: 'Kollektive Meditation',
    eyebrow: 'Stille als Gemeinschaft',
    title: 'Kollektive Meditation: gemeinsame Stille als Antwort auf moderne Vereinzelung',
    intro:
      'Kollektive Meditation wird als bemerkenswerte Antwort auf eine Zeit beschrieben, in der Menschen zwar ständig vernetzt, innerlich aber oft getrennt sind. Gerade das gemeinsame Sitzen in Stille erzeugt eine besondere Form von Zugehörigkeit und Resonanz.',
    heroImage: collectiveMeditationImg,
    heroImageAlt: 'Kollektive Meditation',
    heroCaption:
      'Wo Menschen ohne Vergleich und ohne Darstellungsdruck gemeinsam still werden, entsteht eine neue soziale Qualität.',
    heroTags: ['Zugehörigkeit', 'Stille', 'Resonanz'],
    keyPoints: [
      'Gemeinsame Meditation vertieft das Erleben von Energiefluss und Präsenz.',
      'Sie bietet einen Gegenpol zu moderner Einsamkeit und Überstimulation.',
      'Individuelle und kollektive Praxis ergänzen einander wesentlich.'
    ],
    blocks: [
      {
        title: 'Warum gemeinsames Meditieren heute so stark wirkt',
        paragraphs: [
          'In einer Zeit permanenter Benachrichtigung und sozialer Fragmentierung wirkt geteilte Stille fast widersprüchlich modern. Gerade dadurch aber gewinnt sie Kraft.',
          'Kollektive Meditation schafft Verbundenheit, ohne dass jemand sich behaupten, erklären oder inszenieren muss.'
        ]
      },
      {
        title: 'Mehr als nur nebeneinander sitzen',
        paragraphs: [
          'Gemeinsame Meditation wird nicht bloß als soziale Aktivität gesehen. Sie soll den Fluss subtiler Energie intensivieren und Wahrnehmung, Vibrationen und Aufmerksamkeit spürbar vertiefen.',
          'Das Bild einzelner Drähte, die zu einem stärkeren Kabel gebündelt werden, bringt diese Erfahrung prägnant auf den Punkt.'
        ]
      },
      {
        title: 'Die Beziehung zur individuellen Praxis',
        paragraphs: [
          'Kollektivität ersetzt die persönliche Praxis nicht. Sie erweitert und verstärkt sie. Wer nur kollektiv meditiert, ohne innerlich selbständig zu werden, bleibt oberflächlich.',
          'Erst das Zusammenspiel von individueller Vertiefung und kollektiver Resonanz schafft nachhaltiges Wachstum.'
        ]
      }
    ],
    related: [
      '/kultur-des-geistes/kreativitaet',
      '/kultur-des-geistes/kulturelle-integration',
      '/selbstverwirklichung-meditation/meditationspraxis'
    ]
  }
};

const articlesEn: Record<string, KnowledgeArticle> = {
  '/kundalini-energiesystem/kundalini': {
    route: '/kundalini-energiesystem/kundalini',
    hubRoute: '/kundalini-energiesystem',
    navLabel: 'Kundalini',
    eyebrow: 'Living Inner Power',
    title: 'Kundalini: the resting energy behind Self-Realization',
    intro:
      'Kundalini is understood as an inborn, indestructible energy already present within the human being and resting in the sacrum. Once awakened, it animates the whole subtle system and turns meditation from an idea into a lived inner experience.',
    heroImage: subtleSystemDeImg,
    heroImageAlt: 'Subtle system diagram',
    heroImageMode: 'contain',
    heroCaption:
      'The German system diagram shows that Kundalini is never treated in isolation: it works together with the channels, chakras and the movement of attention.',
    heroTags: ['Birthright', 'Sacrum', 'Ascent through the centre'],
    keyPoints: [
      'Kundalini is presented as primordial and indestructible.',
      'It rests in the sacrum and does not need to be brought from outside.',
      'Its ascent nourishes the chakras and lifts attention into the centre.'
    ],
    details: {
      eyebrow: 'At a glance',
      title: 'How Kundalini is understood within the system',
      description:
        'The German presentation frames Kundalini not as spectacle but as inner order. The emphasis falls on its resting place, its gentle ascent and the way it nourishes the system from within.',
      items: [
        {
          title: 'Already present within the person',
          subtitle: 'Inborn potential',
          description:
            'Kundalini is described as something already there. Spiritual growth therefore means awakening an inner potential rather than importing something foreign.',
          note: 'The energy remains hidden until it becomes experiential through Self-Realization.',
          image: subtleSystemDeImg,
          alt: 'Whole subtle system diagram',
          imageMode: 'contain'
        },
        {
          title: 'Resting in the sacrum',
          subtitle: 'The quiet starting point',
          description:
            'Its resting place is at the base of the central channel. From there it does not erupt violently, but rises in a way that lets the system open in an ordered and natural manner.',
          note: 'The Sushumna is treated as the path of actual inner ascent.',
          image: centralChannelDeImg,
          alt: 'Central channel',
          imageMode: 'contain'
        },
        {
          title: 'Nourishment instead of pressure',
          subtitle: 'Gentle transformation',
          description:
            'As Kundalini reaches the centres, they are not forced but nourished. The result is greater stillness, clarity and a more refined perception of one’s actual state.',
          note: 'Its effect becomes visible in meditation, behaviour, balance and a steadier inner quiet.',
          image: channelsDeImg,
          alt: 'Subtle channels',
          imageMode: 'contain'
        }
      ]
    },
    blocks: [
      {
        title: 'Not added from outside, but discovered within',
        paragraphs: [
          'In the German description of the subtle system, Kundalini is not a force imported from outside. It belongs to the human being from the beginning and remains present even before we consciously perceive it.',
          'That is what gives Self-Realization its dignity here: nothing artificial needs to be manufactured. One learns instead to uncover a hidden origin already rooted within one’s own being.'
        ],
        points: [
          'inborn rather than acquired',
          'indestructible rather than fleeting',
          'an inner origin rather than an external method'
        ]
      },
      {
        title: 'Its ascent through the middle channel',
        paragraphs: [
          'When Kundalini awakens, it rises through the Sushumna, the central channel of the subtle system. This ascent is not described as a dramatic outburst, but as an intelligent and ordered movement.',
          'That emphasis matters. The energy is not working against the person, but in a way that allows the centres and attention to clear from within. Meditation therefore appears as nourishment rather than struggle.'
        ],
        points: [
          'the Sushumna as the main path of ascent',
          'gentle rather than violent movement',
          'clarification through nourishment of the centres'
        ]
      },
      {
        title: 'From the periphery to the centre',
        paragraphs: [
          'A central image in this tradition is the wheel: at the periphery there is agitation, at the centre there is peace. Kundalini is understood as the force that draws attention away from the restless outer edge and back toward the inner centre.',
          'That is why it matters so much in Sahaja Yoga. Only when this movement happens does the subtle system become genuinely experiential and stillness gain an organic foundation.'
        ]
      },
      {
        title: 'How its effect becomes visible',
        paragraphs: [
          'The effect of Kundalini is not described only in concepts but in recognisable consequences: greater quiet, more balanced reactions, clearer perception and a stronger ability to remain in the present.',
          'As the centres are nourished, meditation requires less forcing. Attention naturally becomes quieter, and inner order begins to express itself in daily life.'
        ]
      }
    ],
    related: [
      '/kundalini-energiesystem/kanaele-und-balance',
      '/kundalini-energiesystem/chakren-und-qualitaeten',
      '/selbstverwirklichung-meditation/selbstverwirklichung'
    ]
  },
  '/kundalini-energiesystem/kanaele-und-balance': {
    route: '/kundalini-energiesystem/kanaele-und-balance',
    hubRoute: '/kundalini-energiesystem',
    navLabel: 'Channels & Balance',
    eyebrow: 'Ida, Pingala and Sushumna',
    title: 'Channels & balance: how the nadis organise feeling, action and presence',
    intro:
      'The nadis are the pathways through which attention and subtle energy move within the person. They make it possible to read whether we are living in joy, over-activity or centred presence, and why the inner system can become balanced or strained.',
    heroImage: channelsDeImg,
    heroImageAlt: 'Three nadis diagram',
    heroImageMode: 'contain',
    heroCaption:
      'The German diagram makes the core idea visible: left and right describe polarities, while the middle is the path along which Kundalini rises.',
    heroTags: ['Ida', 'Pingala', 'Sushumna'],
    keyPoints: [
      'The left channel carries feeling, desire and relation to the past.',
      'The right channel carries action, planning and mental dynamism.',
      'The central channel is the path of equilibrium and inner evolution.'
    ],
    details: {
      eyebrow: 'The three movements',
      title: 'Each channel has its own quality and its own risk',
      description:
        'The nadi teaching explains not only spiritual growth but everyday mood, overstrain and withdrawal. That is why it feels so practical: it shows why certain states arise and how meditation restores balance.',
      items: [
        {
          title: 'Left Channel',
          subtitle: 'Ida Nadi or moon channel',
          description:
            'Here we find desire, memory, habits and emotional patterns. In its pure state this channel carries joy, compassion and a gentle inner depth.',
          note: 'When overloaded it often appears as lethargy, guilt, sadness or emotional heaviness.',
          image: leftChannelDeImg,
          alt: 'Left channel',
          imageMode: 'contain'
        },
        {
          title: 'Right Channel',
          subtitle: 'Pingala Nadi or sun channel',
          description:
            'This channel provides energy for doing, planning, concentration and mental force. In balance it creates effective action with a calm mind.',
          note: 'When overused the same force can harden into pressure, irritability, aggression or inflated ego.',
          image: rightChannelDeImg,
          alt: 'Right channel',
          imageMode: 'contain'
        },
        {
          title: 'Central Channel',
          subtitle: 'Sushumna Nadi',
          description:
            'The middle is the path of spiritual development. This is where Kundalini rises and where attention can stop oscillating between past and future.',
          note: 'Thought-free awareness strengthens this channel and deepens peace, direction and integration.',
          image: centralChannelDeImg,
          alt: 'Central channel',
          imageMode: 'contain'
        }
      ]
    },
    blocks: [
      {
        title: 'The left channel and the pull of the past',
        paragraphs: [
          'The left channel begins at the Mooladhara and rises along the left side of the body until it ends in the right side of the brain. It is associated with feeling, desire, memory and the conditioning we carry from the past.',
          'Its essential quality is joy. Not loud excitement, but a subtle kind of joy that feels close to innocence. That is why imbalance on the left side feels so heavy: what should carry joy begins instead to express itself as guilt, withdrawal or emotional weight.'
        ]
      },
      {
        title: 'The right channel and the push toward the future',
        paragraphs: [
          'The right channel begins at the Swadisthana and rises along the right side of the body until it reaches the left side of the brain. It energises analysis, planning, action and the way we project ourselves into the future.',
          'In its pure state it makes a person dynamic and effective. When overdriven, however, the same force turns into pressure: irritability, mental strain or a way of acting that loses sensitivity to others.'
        ]
      },
      {
        title: 'The middle as the path of inner evolution',
        paragraphs: [
          'The central channel runs from the base of the spine straight toward the Sahasrara. In the German explanation it is the actual path of evolution, because only through this middle line can Kundalini rise and unify the system in a higher order.',
          'This also explains why balance means more than comfort. It is the condition that allows attention to settle in the present and meditation to become real inner peace.'
        ],
        points: [
          'left: joy or emotional heaviness',
          'right: dynamism or overstrain',
          'middle: presence, peace and evolutionary movement'
        ]
      }
    ],
    related: [
      '/kundalini-energiesystem/kundalini',
      '/kundalini-energiesystem/chakren-und-qualitaeten',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung'
    ]
  },
  '/kundalini-energiesystem/chakren-und-qualitaeten': {
    route: '/kundalini-energiesystem/chakren-und-qualitaeten',
    hubRoute: '/kundalini-energiesystem',
    navLabel: 'Chakras & Qualities',
    eyebrow: 'Inner Centres',
    title: 'Chakras & qualities: the centres that connect body, character and consciousness',
    intro:
      'The chakras form a subtle map of the human being. Each centre carries a distinct quality, a bodily manifestation and a clear influence on how we act, feel, relate and meditate.',
    heroImage: subtleSystemDeImg,
    heroImageAlt: 'Subtle system with chakras',
    heroImageMode: 'contain',
    heroCaption:
      'The chakra diagram presents the centres not as decorative mysticism but as actual turning points of physiology and awareness.',
    heroTags: ['Seven Centres', 'Void', 'Physical Manifestation'],
    keyPoints: [
      'Each chakra carries a characteristic human quality.',
      'Each centre also corresponds to specific bodily functions.',
      'The Void complements the seven chakras as a field of dignity and self-mastery.'
    ],
    details: {
      eyebrow: 'The centres at a glance',
      title: 'From Mooladhara to Sahasrara',
      description:
        'The German chakra page develops the centres not merely symbolically, but through their psychological and physical meaning. That is what gives this system a modern and surprisingly precise feel.',
      items: [
        {
          title: 'Mooladhara',
          subtitle: 'Innocence and wisdom',
          description:
            'The first chakra forms the foundation of the system. It protects dignity, childlike purity, direction and the ability to remain in harmony with nature.',
          note: 'Physical correspondence: reproductive and excretory systems, sexual organs.',
          image: mooladharaDeImg,
          alt: 'Mooladhara',
          imageMode: 'contain'
        },
        {
          title: 'Swadisthana',
          subtitle: 'Creativity and spontaneity',
          description:
            'This centre supplies energy for thought and action. It carries creativity, appreciation of beauty, pure knowledge and the kind of attention meditation depends on.',
          note: 'Physical correspondence: stomach, intestines, lower liver, gall bladder and spleen.',
          image: swadisthanaDeImg,
          alt: 'Swadisthana',
          imageMode: 'contain'
        },
        {
          title: 'Nabhi',
          subtitle: 'Peace and contentment',
          description:
            'Nabhi governs digestion, metabolism and the way material needs are integrated in peace. It supports satisfaction, righteousness, care and joy.',
          note: 'Physical correspondence: stomach, intestines, upper liver, gall bladder and spleen.',
          image: nabhiDeImg,
          alt: 'Nabhi',
          imageMode: 'contain'
        },
        {
          title: 'Void',
          subtitle: 'Self-discipline',
          description:
            'The Void is the field in which knowledge ripens and inner authority appears. Here self-guidance, patience, dignity and the search for truth are strengthened.',
          note: 'The Void works together with Nabhi and Swadisthana as an integrated group of growth.',
          image: voidDeImg,
          alt: 'Void',
          imageMode: 'contain'
        },
        {
          title: 'Heart',
          subtitle: 'Love, compassion and security',
          description:
            'The heart chakra opens unconditional love, trust and inner security. It helps fear dissolve and makes the self and others easier to meet with warmth.',
          note: 'Physical correspondence: heart, lungs, chest, breathing and thymus gland.',
          image: heartDeImg,
          alt: 'Heart chakra',
          imageMode: 'contain'
        },
        {
          title: 'Vishuddi',
          subtitle: 'Communication and diplomacy',
          description:
            'This centre refines speech, humour, politeness and collectivity. It is essential for healthy relationships and for dissolving tension without losing respect.',
          note: 'Physical correspondence: throat, arms, mouth, tongue, teeth, nose and face.',
          image: vishuddiDeImg,
          alt: 'Vishuddi chakra',
          imageMode: 'contain'
        },
        {
          title: 'Agnya',
          subtitle: 'Forgiveness and stillness',
          description:
            'Agnya brings ego and conditioning into balance. Its essence is forgiveness, and through that forgiveness the gateway to thought-free awareness opens.',
          note: 'Physical correspondence: seeing, hearing, thinking, pituitary and pineal glands.',
          image: agnyaDeImg,
          alt: 'Agnya chakra',
          imageMode: 'contain'
        },
        {
          title: 'Sahasrara',
          subtitle: 'Integration',
          description:
            'At Sahasrara the different aspects of the system become one. Connection with the all-pervading power is experienced here as unity, meaning and wholeness.',
          note: 'Physical correspondence: brain.',
          image: sahasraraDeImg,
          alt: 'Sahasrara chakra',
          imageMode: 'contain'
        }
      ]
    },
    blocks: [
      {
        title: 'Why the chakras are so practically readable',
        paragraphs: [
          'This chakra teaching feels concrete because it never works with colour symbolism alone. Each centre links an inner quality with very specific physiological functions and recognisable patterns of behaviour.',
          'That turns innocence, creativity, satisfaction, security, communication, forgiveness and integration into more than ideals. They become actual forces that can either strengthen or weaken in lived experience.'
        ]
      },
      {
        title: 'The integrated group of Swadisthana, Nabhi and Void',
        paragraphs: [
          'A distinctive emphasis of the German page is the relationship between Swadisthana, Nabhi and the Void. These three work together whenever action, material order, knowledge and self-discipline need to mature in a balanced way.',
          'This makes the larger point clear: spiritual development is not detached from ordinary life. Digestion, work, responsibility, discipline and truth-seeking belong to the same field of growth.'
        ]
      },
      {
        title: 'From the heart to the Sahasrara',
        paragraphs: [
          'The upper centres show how maturity is understood in this system: love and security in the heart, diplomacy and relationship in Vishuddi, forgiveness and stillness in Agnya, and finally integration in Sahasrara.',
          'The movement is strikingly modern. Development is not measured by exotic experience alone, but by greater love, better communication, less judgement and a deeper inner unity.'
        ],
        points: [
          'Mooladhara to Void: foundation, creativity, contentment and self-mastery',
          'Heart to Agnya: love, relationship, forgiveness and stillness',
          'Sahasrara: integration as the aim of the whole system'
        ]
      }
    ],
    related: [
      '/kundalini-energiesystem/kundalini',
      '/kundalini-energiesystem/kanaele-und-balance',
      '/selbstverwirklichung-meditation/selbstverwirklichung'
    ]
  },
  '/selbstverwirklichung-meditation/selbstverwirklichung': {
    route: '/selbstverwirklichung-meditation/selbstverwirklichung',
    hubRoute: '/selbstverwirklichung-meditation',
    navLabel: 'Self-Realization',
    eyebrow: 'The Inner Breakthrough',
    title: 'Self-Realization: when the subtle self becomes experiential',
    intro:
      'Self-Realization is described as the turning point at which the physical and subtle self consciously meet. A person does not merely feel calmer, but enters a new condition of connectedness, inner knowledge and awakened awareness.',
    heroImage: selfRealizationImg,
    heroImageAlt: 'Self-Realization',
    heroCaption:
      'Self-Realization marks the beginning of a conscious link between inner energy and the deeper self.',
    heroTags: ['Inner Link', 'New Consciousness', 'Oneness'],
    keyPoints: [
      'Self-Realization links the subtle self with the all-pervading power.',
      'It is understood as the beginning of a process, not its endpoint.',
      'From that moment the subtle system becomes truly experiential.'
    ],
    blocks: [
      {
        title: 'More than spiritual seeking',
        paragraphs: [
          'Spiritual search is understood here as a return to one’s own roots. Human beings have emerged from the subtle plane and can rediscover that deeper reality within themselves.',
          'Self-Realization is therefore not a symbolic gesture. It is the actual establishment of a link between outer life and inner essence.'
        ]
      },
      {
        title: 'Entering a new plane of awareness',
        paragraphs: [
          'With this connection, a new plane of awareness opens. Subtle energy becomes perceptible, attention refines itself and a sense of belonging to something greater begins to emerge.',
          'The personal self does not vanish. It remains, but is no longer confined to body, thought and social identity alone.'
        ]
      },
      {
        title: 'Why this step is decisive',
        paragraphs: [
          'Self-Realization is the threshold where meditation becomes lived fact rather than concept. The subtle system, inner energy and connectedness all become more tangible from this point onward.',
          'That is why it is not the end but the beginning: the real path of inner refinement starts where this connection becomes felt.'
        ]
      }
    ],
    related: [
      '/selbstverwirklichung-meditation/gedankenfreie-stille',
      '/selbstverwirklichung-meditation/meditationspraxis',
      '/kundalini-energiesystem/kundalini'
    ]
  },
  '/selbstverwirklichung-meditation/gedankenfreie-stille': {
    route: '/selbstverwirklichung-meditation/gedankenfreie-stille',
    hubRoute: '/selbstverwirklichung-meditation',
    navLabel: 'Thought-Free Stillness',
    eyebrow: 'Fourth State of Consciousness',
    title: 'Thought-free stillness: a wakeful state beyond the thought stream',
    intro:
      'Thought-free stillness is described as a fourth state of consciousness. It is neither sleep, dream nor ordinary waking, but a silent and highly alert realm in which thought loses its dominance and the inner self becomes more evident.',
    heroImage: thoughtlessImg,
    heroImageAlt: 'Thought-free stillness',
    heroCaption:
      'Thoughtlessness is presented here not as emptiness, but as a calm, inspired and deeply integrated kind of wakefulness.',
    heroTags: ['Turiya', 'Wakefulness', 'Inner Self'],
    keyPoints: [
      'Thoughtlessness is treated as a distinct state of consciousness.',
      'The ascent of inner energy greatly facilitates this condition.',
      'The stronger the energy flow, the deeper and longer the stillness becomes.'
    ],
    blocks: [
      {
        title: 'Beyond waking, dreaming and sleep',
        paragraphs: [
          'Thought-free awareness is described as a state in which the brain is not switched off, yet is no longer operating in its usual pattern of restless thought and reaction.',
          'That is what gives this condition its unusual force: it joins stillness with lucidity and silence with presence.'
        ]
      },
      {
        title: 'Why the energy matters',
        paragraphs: [
          'This state is not expected to be forced through mental effort alone. The rising of inner energy is said to carry attention beyond its usual stream of thought.',
          'Meditation thus becomes less of a struggle against mind and more of a process of being lifted beyond it.'
        ]
      },
      {
        title: 'The quality of this silence',
        paragraphs: [
          'In thought-free stillness, thoughts and feelings can be observed without instant identification or reaction. That brings greater clarity and less inner compulsion.',
          'As stillness deepens, energy flow is also said to grow stronger. Silence and subtle energy thus reinforce one another.'
        ]
      }
    ],
    related: [
      '/selbstverwirklichung-meditation/selbstverwirklichung',
      '/selbstverwirklichung-meditation/meditationspraxis',
      '/wissenschaft-spiritualitaet/innere-wissenschaft'
    ]
  },
  '/selbstverwirklichung-meditation/meditationspraxis': {
    route: '/selbstverwirklichung-meditation/meditationspraxis',
    hubRoute: '/selbstverwirklichung-meditation',
    navLabel: 'Meditation Practice',
    eyebrow: 'Meditation in Daily Life',
    title: 'Meditation practice: how the experience deepens in daily life',
    intro:
      'Meditation is described not as a rigid routine but as a living practice. It can deepen at home, in the morning or evening, in silence or with gentle support, and it gains much of its strength through regularity.',
    heroImage: selfRealizationImg,
    heroImageAlt: 'Meditation practice at home',
    heroCaption:
      'Daily practice is the place where a first experience grows into a stable inner habit.',
    heroTags: ['At Home', 'Regularity', 'Collectivity'],
    keyPoints: [
      'Meditation can be integrated into daily life with flexibility and seriousness.',
      'The emphasis is on experience rather than rigid discipline.',
      'Individual and collective meditation strengthen one another.'
    ],
    blocks: [
      {
        title: 'Simple conditions, deep effects',
        paragraphs: [
          'A quiet place is recommended, perhaps with some contact with nature or a sense of freshness in the environment. The setting should support the experience without turning into theatre.',
          'What matters most is enjoyment of the meditative depth itself. Practice remains flexible, and each person is encouraged to find a rhythm that is genuinely sustainable.'
        ]
      },
      {
        title: 'How a session is approached',
        paragraphs: [
          'A sitting begins with relaxation, raising the inner energy and then simply resting in stillness. Thoughts are not meant to be fought, only observed and allowed to pass.',
          'Over time, subtle sensations on the palms or at the crown may become clearer. In that way the practice becomes increasingly personal and concrete.'
        ]
      },
      {
        title: 'The role of collective meditation',
        paragraphs: [
          'Alongside private practice, meditating with others is described as a powerful intensification. Shared stillness often heightens the sense of subtle flow and presence.',
          'Collective meditation does not replace personal effort. Instead, both forms of practice support one another and help make growth steadier and more balanced.'
        ]
      }
    ],
    related: [
      '/selbstverwirklichung-meditation/selbstverwirklichung',
      '/selbstverwirklichung-meditation/gedankenfreie-stille',
      '/kultur-des-geistes/kollektive-meditation'
    ]
  },
  '/wissenschaft-spiritualitaet/innere-wissenschaft': {
    route: '/wissenschaft-spiritualitaet/innere-wissenschaft',
    hubRoute: '/wissenschaft-spiritualitaet',
    navLabel: 'Inner Science',
    eyebrow: 'Higher Consciousness',
    title: 'Inner science: when spirituality becomes a matter of conscious inquiry',
    intro:
      'Spirituality is not presented here as the enemy of reason. It is approached as a form of inner investigation in which attention, consciousness and direct experience are taken seriously and examined with openness.',
    heroImage: thoughtlessImg,
    heroImageAlt: 'Higher consciousness',
    heroCaption:
      'What matters is not mere claim, but the possibility of exploring consciousness as a lived and observable field.',
    heroTags: ['Consciousness', 'Attention', 'Inquiry'],
    keyPoints: [
      'Meditation is framed not only as relaxation but as a shift in consciousness.',
      'Thought-free awareness is treated as a testable experience.',
      'Inner development is paired with openness rather than dogma.'
    ],
    blocks: [
      {
        title: 'Beyond the old idea of meditation',
        paragraphs: [
          'A key move is the shift away from defining meditation only as a relaxation response and toward understanding it through attention and suspension of the thought stream.',
          'That protects meditation from being trivialised. It becomes a doorway to a genuinely altered quality of awareness.'
        ]
      },
      {
        title: 'Higher consciousness as a real possibility',
        paragraphs: [
          'The fourth state of consciousness is treated as a real human possibility rather than a poetic abstraction. Even the complexity of the brain is seen as pointing toward larger potentials than ordinary cognition reveals.',
          'Depth of experience and seriousness of thought are therefore not separated from one another.'
        ]
      },
      {
        title: 'The attitude of the experimenter',
        paragraphs: [
          'The seeker is invited neither to believe blindly nor to dismiss prematurely. The appropriate posture is experimental: open, precise and willing to test experience honestly.',
          'That is what gives the phrase “inner science” its force. Experience is refined rather than romanticised.'
        ]
      }
    ],
    related: [
      '/wissenschaft-spiritualitaet/gesundheit-und-forschung',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung',
      '/selbstverwirklichung-meditation/gedankenfreie-stille'
    ]
  },
  '/wissenschaft-spiritualitaet/gesundheit-und-forschung': {
    route: '/wissenschaft-spiritualitaet/gesundheit-und-forschung',
    hubRoute: '/wissenschaft-spiritualitaet',
    navLabel: 'Health & Research',
    eyebrow: 'Holistic Perspective',
    title: 'Health & research: meditation as a multi-layered form of regulation',
    intro:
      'Meditation is not reduced here to a subjective feeling of calm. It is approached as a practice touching mental, physical and energetic processes at once, which is why it can be taken seriously both in research and in daily life.',
    heroImage: tendenciesImg,
    heroImageAlt: 'Health and regulation',
    heroCaption:
      'Balance, regulation and well-being are treated as connected processes rather than isolated themes.',
    heroTags: ['EEG', 'Well-being', 'Regulation'],
    keyPoints: [
      'Thought-free meditation is treated as a real experience with objective correlates.',
      'Health appears as an expression of inner order and balance.',
      'Research spans brain activity, stress, resilience and well-being.'
    ],
    blocks: [
      {
        title: 'From experience to measurement',
        paragraphs: [
          'Meditative states are not only described inwardly, but also viewed in relation to brain activity and neurophysiological patterns. That gives the practice an added level of seriousness.',
          'This does not reduce spiritual life to data. It simply shows that depth of experience and objective observation can coexist.'
        ]
      },
      {
        title: 'A whole-person effect',
        paragraphs: [
          'Mental well-being, stress regulation, attention, sleep, resilience and physical balance are all treated as interrelated domains. Meditation is therefore seen as influencing a whole ecology of functioning.',
          'Health becomes not merely the absence of symptom, but the presence of better inner coordination.'
        ]
      },
      {
        title: 'Why research matters here',
        paragraphs: [
          'Where meditation reaches deeply into consciousness, behaviour and nervous-system regulation, the question of observable effects arises naturally. Research becomes a complement, not an enemy, of experience.',
          'That is precisely what makes this field compelling: contemplative practice remains humanly deep while also intellectually accountable.'
        ]
      }
    ],
    related: [
      '/wissenschaft-spiritualitaet/innere-wissenschaft',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung',
      '/selbstverwirklichung-meditation/meditationspraxis'
    ]
  },
  '/wissenschaft-spiritualitaet/integration-und-entwicklung': {
    route: '/wissenschaft-spiritualitaet/integration-und-entwicklung',
    hubRoute: '/wissenschaft-spiritualitaet',
    navLabel: 'Integration & Development',
    eyebrow: 'Character, Attention, Maturity',
    title: 'Integration & development: how meditation can deepen personality',
    intro:
      'Spiritual development is closely tied here to the maturation of personality and character. Attention, tendencies, reactions and realms of consciousness together form a field within which a person may become clearer, steadier and more integrated.',
    heroImage: tenetsImg,
    heroImageAlt: 'Inner development and character',
    heroCaption:
      'Inner growth reveals itself not only in states of meditation, but in character, clarity and trustworthy conduct.',
    heroTags: ['Character', 'Consciousness', 'Maturity'],
    keyPoints: [
      'Spirituality is linked to development of character and personality.',
      'Realms of consciousness depend on where attention is repeatedly drawn.',
      'Humility, perseverance and openness are treated as real prerequisites for growth.'
    ],
    blocks: [
      {
        title: 'Attention shapes inner life',
        paragraphs: [
          'Realms of consciousness do not arise at random. They are shaped by where attention is repeatedly dragged: into the past, into future projection or into centred presence.',
          'That makes development concrete. It is bound to habit, reaction and the ongoing education of awareness.'
        ]
      },
      {
        title: 'Spirituality as maturity',
        paragraphs: [
          'The goal of spiritual growth is not spectacular states alone, but a more refined human being. Wisdom, steadiness, humility and resilience are treated as visible fruits of real practice.',
          'Spirituality is therefore pulled out of vagueness and made answerable in the person’s own life.'
        ]
      },
      {
        title: 'The path demands a real stance',
        paragraphs: [
          'This path is not framed as a magical shortcut. It requires the seeking urge, openness to experience, patience with setbacks and the willingness to look at the ego soberly.',
          'That is part of what makes it credible: it promises not an escape from effort, but a real transformation of the human being.'
        ]
      }
    ],
    related: [
      '/wissenschaft-spiritualitaet/innere-wissenschaft',
      '/kultur-des-geistes/kulturelle-integration',
      '/kultur-des-geistes/kollektive-meditation'
    ]
  },
  '/kultur-des-geistes/kulturelle-integration': {
    route: '/kultur-des-geistes/kulturelle-integration',
    hubRoute: '/kultur-des-geistes',
    navLabel: 'Cultural Integration',
    eyebrow: 'Spirituality and shared life',
    title: 'Cultural integration: inner freedom as the ground of genuine openness',
    intro:
      'Cultural integration is not treated here as a slogan of tolerance alone. It grows out of a view of spirituality that takes freedom, conscience, respect and the autonomy of inner experience seriously.',
    heroImage: tenetsImg,
    heroImageAlt: 'Cultural integration and inner freedom',
    heroCaption:
      'Where spirituality is not confused with outer coercion, diversity can retain its dignity.',
    heroTags: ['Freedom', 'Respect', 'Openness'],
    keyPoints: [
      'Spirituality and religion are clearly distinguished.',
      'A spiritual path must never work against free will.',
      'Respect for difference grows out of maturity rather than conformity.'
    ],
    blocks: [
      {
        title: 'Why spirituality and religion are distinguished',
        paragraphs: [
          'Spirituality is understood as inner connection and experience, while religion is more closely tied to doctrine, form or ritual. The two may overlap, but they are not identical.',
          'That distinction creates space for freedom. People do not need to prove the reality of their inner life through external identity alone.'
        ]
      },
      {
        title: 'Free will as a spiritual principle',
        paragraphs: [
          'A central idea is that real spiritual practice can never violate free will. It can only work authentically when the individual remains the master of his or her own journey.',
          'This is what gives the approach its dignity: the person is not shaped by coercion but invited into self-mastery.'
        ]
      },
      {
        title: 'What integration means in this sense',
        paragraphs: [
          'Integration therefore does not mean flattening difference. It means building a culture in which different paths can coexist because the deeper freedom of the person is honoured.',
          'A culture of the spirit begins precisely there: not in uniformity, but in a deeper respect that can sustain plurality.'
        ]
      }
    ],
    related: [
      '/kultur-des-geistes/kreativitaet',
      '/kultur-des-geistes/kollektive-meditation',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung'
    ]
  },
  '/kultur-des-geistes/kreativitaet': {
    route: '/kultur-des-geistes/kreativitaet',
    hubRoute: '/kultur-des-geistes',
    navLabel: 'Creativity',
    eyebrow: 'Refined Attention',
    title: 'Creativity: when meditation deepens perception and expression',
    intro:
      'Creativity is understood here not only as talent or achievement, but as the visible expression of refined attention. Meditation is said to sharpen subtle perception, deepen presence and enrich the quality of artistic or imaginative expression.',
    heroImage: improvedPerceptionImg,
    heroImageAlt: 'Creative perception',
    heroCaption:
      'Creative work gains intensity when awareness is purified and the present is no longer drowned in mental noise.',
    heroTags: ['Presence', 'Expression', 'Perception'],
    keyPoints: [
      'Creative expression is linked with meaning, connection and emotional intelligence.',
      'Meditation refines attention and makes subtle differences easier to perceive.',
      'Creativity appears as the fruit of presence, not only technique.'
    ],
    blocks: [
      {
        title: 'Creativity as meaningful connection',
        paragraphs: [
          'Creative work can bring meaning, beauty and connection into life. It allows one person’s inner world to resonate with others across time, place and culture.',
          'For that reason creativity is not reduced to profession or talent. It also belongs to the deeper human need to express what is alive and true.'
        ]
      },
      {
        title: 'How meditation changes expression',
        paragraphs: [
          'Meditation trains attention. A more present mind sees more, hears more and enters more completely into the act of making.',
          'This changes not only output but quality. Atmosphere, nuance and emotional depth become stronger because perception itself has been refined.'
        ]
      },
      {
        title: 'From technique to perception',
        paragraphs: [
          'Technical skill matters, but living creativity depends on more than technique. It often emerges from a more subtle way of perceiving.',
          'Meditation opens precisely that space: awareness becomes quieter, more sensitive and more capable of receiving the finer tones out of which real expression grows.'
        ]
      }
    ],
    related: [
      '/kultur-des-geistes/kollektive-meditation',
      '/kultur-des-geistes/kulturelle-integration',
      '/wissenschaft-spiritualitaet/integration-und-entwicklung'
    ]
  },
  '/kultur-des-geistes/kollektive-meditation': {
    route: '/kultur-des-geistes/kollektive-meditation',
    hubRoute: '/kultur-des-geistes',
    navLabel: 'Collective Meditation',
    eyebrow: 'Stillness as Community',
    title: 'Collective meditation: shared silence as an answer to modern isolation',
    intro:
      'Collective meditation is described as a striking answer to a time in which people are hyper-connected and inwardly disconnected. Simply sitting together in silence creates a special form of belonging and resonance.',
    heroImage: collectiveMeditationImg,
    heroImageAlt: 'Collective meditation',
    heroCaption:
      'When people become still together without comparison or performance, a different social quality appears.',
    heroTags: ['Belonging', 'Silence', 'Resonance'],
    keyPoints: [
      'Meditating together intensifies presence and subtle perception.',
      'It offers a counterweight to loneliness and overstimulation.',
      'Individual and collective practice mutually strengthen each other.'
    ],
    blocks: [
      {
        title: 'Why shared meditation feels so timely',
        paragraphs: [
          'In an age of endless notification and fragmentation, shared silence feels almost radically current. That is precisely why it carries such power.',
          'Collective meditation creates belonging without demanding explanation, display or competition.'
        ]
      },
      {
        title: 'More than simply sitting near others',
        paragraphs: [
          'Meditating together is not treated as a social pastime alone. It is said to intensify subtle flow and deepen the perception of energy, vibration and attention.',
          'The image of many wires gathered into a stronger cable captures this enhancement with great clarity.'
        ]
      },
      {
        title: 'Its relation to personal practice',
        paragraphs: [
          'Collective meditation does not replace individual effort. It extends and strengthens it. Without personal practice, collectivity becomes shallow.',
          'Only the union of private deepening and shared resonance creates durable growth.'
        ]
      }
    ],
    related: [
      '/kultur-des-geistes/kreativitaet',
      '/kultur-des-geistes/kulturelle-integration',
      '/selbstverwirklichung-meditation/meditationspraxis'
    ]
  }
};

export const getKnowledgeArticles = (locale: Locale) =>
  locale === 'de' ? articlesDe : articlesEn;

export const getKnowledgeArticle = (locale: Locale, route: string) =>
  getKnowledgeArticles(locale)[route];

export const getHubKnowledgeArticles = (locale: Locale, hubRoute: string) =>
  Object.values(getKnowledgeArticles(locale)).filter(article => article.hubRoute === hubRoute);

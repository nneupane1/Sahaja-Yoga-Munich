import chakraChartImg from '../assets/sahajayogade/das-subtile-system-grafik.jpg';
import kundaliniEnergyImg from '../assets/sahajayogade/Central-Channel-SY-929x1024.png';
import tendenciesImg from '../assets/sahajaonline/tendencies.jpg';
import selfRealizationImg from '../assets/sahajaonline/Sahaja-and-self-realization.jpg';
import thoughtlessImg from '../assets/sahajaonline/thoughtless-awareness-and-selfcare.jpg';
import improvedPerceptionImg from '../assets/sahajaonline/Improved-perception.jpg';
import collectiveMeditationImg from '../assets/sahajaonline/What-is-Collective-Meditation.jpg';
import tenetsImg from '../assets/sahajaonline/The-10-Defining-Tenets-of-Spirituality-scaled.jpg';
import redSunsetImg from '../assets/redsunset.jpeg';
import leftChannelImg from '../assets/sahajayogade/nadis-inside-img-002.jpg';
import rightChannelImg from '../assets/sahajayogade/nadis-inside-img-00003.jpg';
import mooladharaImg from '../assets/sahajayogade/chakras-inside-img-01-600x338-1.jpg';
import swadisthanImg from '../assets/sahajayogade/chakras-inside-img-02-600x338-1.jpg';
import nabhiImg from '../assets/sahajayogade/chakras-inside-img-03-600x338-1.jpg';
import voidImg from '../assets/sahajayogade/Void.png';
import anahatImg from '../assets/sahajayogade/Bildschirmfoto-2022-03-25-um-08.59.55.png';
import vishuddhiImg from '../assets/sahajayogade/Bildschirmfoto-2022-03-25-um-09.00.53.png';
import agnyaImg from '../assets/sahajayogade/chakras-inside-img-07-600x338-1.jpg';
import sahasraraImg from '../assets/sahajayogade/chakras-inside-img-08-600x338-1.jpg';

export type TopicSection = {
  id: string;
  to: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string[];
  sideTitle: string;
  sideItems: string[];
  note?: string;
};

export type TopicShowcase = {
  title: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  imageMode?: 'cover' | 'contain';
};

export type TopicProcessItem = {
  step: string;
  title: string;
  description: string;
};

export type TopicGalleryItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
};

export type TopicPageData = {
  route: string;
  navLabel: string;
  heroEyebrow: string;
  title: string;
  intro: string;
  heroPanelText: string;
  heroTags: string[];
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  heroImageMode?: 'cover' | 'contain';
  highlights: Array<{
    title: string;
    description: string;
  }>;
  showcases?: {
    eyebrow: string;
    title: string;
    description: string;
    items: TopicShowcase[];
  };
  process?: {
    eyebrow: string;
    title: string;
    description: string;
    items: TopicProcessItem[];
  };
  gallery?: {
    eyebrow: string;
    title: string;
    description: string;
    items: TopicGalleryItem[];
  };
  sections: TopicSection[];
  closing: {
    title: string;
    description: string;
    points: string[];
  };
};

export const topicPages = {
  kundalini: {
    route: '/kundalini-energiesystem',
    navLabel: 'Kundalini & Energiesystem',
    heroEyebrow: 'Das subtile System',
    title: 'Kundalini, Nadis & Chakras',
    intro:
      'Das subtile System ist das feine Netzwerk aus Kundalini, Energiekanälen und Zentren entlang des Nervensystems. In Sahaja Yoga bleibt es keine abstrakte Lehre: Die Wahrnehmung verfeinert sich so, dass Gleichgewicht, Blockaden und innere Qualitäten Schritt für Schritt wirklich gespürt werden können.',
    heroPanelText:
      'Das System lässt sich wie ein Rad verstehen: Wer an der Peripherie lebt, wird leicht unruhig; wer in die Mitte kommt, findet Frieden. Genau dorthin führt Sahaja Yoga die Aufmerksamkeit, wenn die Kundalini den zentralen Kanal nährt und die Chakren wieder in ihr natürliches Gleichgewicht bringt.',
    heroTags: ['Kundalini', 'Nadis', 'Chakras'],
    heroImage: chakraChartImg,
    heroImageAlt: 'Darstellung des subtilen Systems',
    heroImageCaption:
      'Die Darstellung des subtilen Systems verbindet Zentren, Kanäle und Kundalini zu einer einzigen inneren Landkarte, die in der Meditation erfahrbar werden soll.',
    heroImageMode: 'contain',
    highlights: [
      {
        title: 'Subtiles Netzwerk',
        description:
          'Kundalini, Nadis und Chakren bilden kein loses Symbolsystem, sondern eine zusammenhängende Architektur von Wahrnehmung, Balance und innerer Entwicklung.'
      },
      {
        title: 'Zentrierte Aufmerksamkeit',
        description:
          'Linker, rechter und zentraler Kanal zeigen, ob Aufmerksamkeit in Vergangenheit, Aktivität oder gegenwärtiger Ausgeglichenheit lebt.'
      },
      {
        title: 'Genährte Qualitäten',
        description:
          'Wenn die Kundalini aufsteigt, werden die Zentren nicht nur beruhigt, sondern mit genau jenen Qualitäten versorgt, die Charakter, Gesundheit und Meditation tragen.'
      }
    ],
    showcases: {
      eyebrow: 'Die drei Nadis',
      title: 'Wie sich Aufmerksamkeit durch das System bewegt',
      description:
        'Die deutsche Bildsprache macht deutlich, dass die Nadis keine dekorativen Linien sind. Sie beschreiben drei sehr konkrete Bewegungsrichtungen der Aufmerksamkeit: Gefühl und Vergangenheit, Aktivität und Zukunft sowie die zentrierte Spur der inneren Entwicklung.',
      items: [
        {
          title: 'Linker Kanal',
          label: 'Ida Nadi',
          description:
            'Der Mondkanal trägt Wünsche, Erinnerungen und emotionale Tiefe. In seinem reinen Zustand schenkt er Freude, Mitgefühl und Sanftheit.',
          image: leftChannelImg,
          alt: 'Darstellung des linken Kanals'
        },
        {
          title: 'Rechter Kanal',
          label: 'Pingala Nadi',
          description:
            'Der Sonnenkanal versorgt Handlung, Planung und mentale Leistung. Im Gleichgewicht wirkt er dynamisch, klar und konstruktiv statt getrieben.',
          image: rightChannelImg,
          alt: 'Darstellung des rechten Kanals'
        },
        {
          title: 'Zentraler Kanal',
          label: 'Sushumna Nadi',
          description:
            'Durch die Mitte steigt die Kundalini auf. Hier hört die Aufmerksamkeit auf, zwischen Vergangenheit und Zukunft zu pendeln, und findet gegenwärtigen Frieden.',
          image: kundaliniEnergyImg,
          alt: 'Darstellung des zentralen Kanals'
        }
      ]
    },
    gallery: {
      eyebrow: 'Die Zentren des Systems',
      title: 'Sieben Hauptchakren und der Raum des Void im Überblick',
      description:
        'Jedes Zentrum hat eine subtile Qualität und zugleich eine körperliche Entsprechung. Wenn ein Chakra gestört ist, spürt man das oft im Verhalten, in Beziehungen oder in der Physiologie; wenn es genährt wird, zeigt sich dieselbe Qualität als Stärke.',
      items: [
        {
          title: 'Mooladhara',
          subtitle: 'Unschuld, Weisheit, Richtung',
          description:
            'Das Fundament des Systems. Es schützt angeborene Würde, kindliche Lauterkeit und die Harmonie mit der Natur; körperlich ist es mit Fortpflanzungs- und Ausscheidungssystem verbunden.',
          image: mooladharaImg,
          alt: 'Mooladhara-Chakra'
        },
        {
          title: 'Swadisthana',
          subtitle: 'Kreativität, Spontanität, Aufmerksamkeit',
          description:
            'Dieses Zentrum versorgt Denken und Handeln mit Energie. In Balance werden Kreativität, Schönheitssinn, klares Begreifen und ungestörte Aufmerksamkeit lebendig.',
          image: swadisthanImg,
          alt: 'Swadisthana-Chakra'
        },
        {
          title: 'Nabhi',
          subtitle: 'Zufriedenheit, Fürsorge, Frieden',
          description:
            'Nabhi ordnet Verdauung, Stoffwechsel und das Verhältnis zu materiellen Bedürfnissen. Es unterstützt Zufriedenheit, Rechtschaffenheit, familiäre Stabilität und Freude.',
          image: nabhiImg,
          alt: 'Nabhi-Chakra'
        },
        {
          title: 'Void',
          subtitle: 'Selbstdisziplin, Würde, Wahrheitssuche',
          description:
            'Die Leere steht für den Raum zwischen den Zentren, in dem unerleuchtetes Wissen in echtes Verständnis verwandelt wird. Hier reifen Selbstführung, Geduld und spiritische Ernsthaftigkeit.',
          image: voidImg,
          alt: 'Void-Bereich des subtilen Systems'
        },
        {
          title: 'Herz',
          subtitle: 'Liebe, Mitgefühl, Sicherheit',
          description:
            'Das Herz öffnet bedingungslose Liebe, Vertrauen und innere Sicherheit. Körperlich stützt es Herz, Lunge, Brustraum und jene Kräfte, die den Organismus schützen.',
          image: anahatImg,
          alt: 'Herz-Chakra'
        },
        {
          title: 'Vishuddi',
          subtitle: 'Kommunikation, Diplomatie, Gemeinschaft',
          description:
            'Dieses Zentrum verfeinert Sprache, Humor, Respekt und Beziehungskompetenz. Es hilft, Spannungen zu entschärfen, ohne Würde oder Verbundenheit zu verlieren.',
          image: vishuddhiImg,
          alt: 'Vishuddi-Chakra'
        },
        {
          title: 'Agnya',
          subtitle: 'Vergebung, Stille, innere Weite',
          description:
            'Agnya ist das Tor zur gedankenfreien Stille. Es bringt Ego und Konditionierungen ins Gleichgewicht und wird frei, wenn echte Vergebung möglich wird.',
          image: agnyaImg,
          alt: 'Agnya-Chakra'
        },
        {
          title: 'Sahasrara',
          subtitle: 'Integration, Einheit, Verbundenheit',
          description:
            'Im höchsten Zentrum verbinden sich alle Aspekte des Systems. Hier wird die Beziehung zur allgegenwärtigen Kraft als Einheit, Sinn und umfassende Integration erfahren.',
          image: sahasraraImg,
          alt: 'Sahasrara-Chakra'
        }
      ]
    },
    sections: [
      {
        id: 'kundalini',
        to: '/kundalini-energiesystem/kundalini',
        navLabel: 'Kundalini',
        eyebrow: 'Innere Quelle',
        title: 'Die Kundalini ist die ruhende Kraft, die das gesamte System belebt',
        description: [
          'Die Kundalini wird als angeborene, unzerstörbare Energie beschrieben, die im Kreuzbein ruht. Sie ist nicht etwas, das von außen hinzugefügt werden müsste, sondern der verborgene Ursprung unserer spirituellen Entfaltung.',
          'Wenn sie erwacht, steigt sie durch den zentralen Kanal auf und nährt die Chakren. Dadurch werden nicht nur Ruhe und Stille möglich, sondern auch eine präzisere Wahrnehmung des eigenen inneren Zustands.',
          'Gerade diese Verbindung von Sanftheit und Intelligenz ist entscheidend: Die Kundalini handelt nicht gewaltsam, sondern so, dass sich das System organisch neu ordnen kann.'
        ],
        sideTitle: 'Wesentliche Merkmale',
        sideItems: [
          'Sie ist in jedem Menschen bereits vorhanden',
          'Sie steigt durch die Sushumna und nährt die Zentren',
          'Ihr Wirken zeigt sich als Balance, Stille und feinere Wahrnehmung'
        ],
        note:
          'Die Kundalini ist in dieser Sichtweise weder Metapher noch Suggestion, sondern die lebendige Kraft hinter Selbstverwirklichung.'
      },
      {
        id: 'nadis',
        to: '/kundalini-energiesystem/kanaele-und-balance',
        navLabel: 'Kanäle & Gleichgewicht',
        eyebrow: 'Ida, Pingala, Sushumna',
        title: 'Die drei Nadis zeigen, wohin sich unsere Aufmerksamkeit bewegt',
        description: [
          'Der linke Kanal steht für Emotion, Wunschkraft und Vergangenheitsbindung. Sein reiner Ausdruck ist Freude; aus dem Gleichgewicht geraten kann er sich als Schwere, Schuldgefühl oder Rückzug zeigen.',
          'Der rechte Kanal versorgt Handlung, Planung und mentale Dynamik. In Balance wirkt er klar und effizient, bei Überlastung wird er leicht reizbar, angespannt oder aggressiv.',
          'Der zentrale Kanal ist der Weg des Gleichgewichts. Hier steigt die Kundalini auf, und hier lernt die Aufmerksamkeit, nicht länger zwischen Vergangenheit und Zukunft hin- und herzuschwanken.'
        ],
        sideTitle: 'Kanalqualitäten',
        sideItems: [
          'Ida: Freude, Gefühl, Erinnerung, Mondqualität',
          'Pingala: Aktion, Analyse, Zukunft, Sonnenqualität',
          'Sushumna: Mitte, Evolution, Gegenwart, Frieden'
        ],
        note:
          'Die Nadis machen sichtbar, dass spiritische Balance immer auch eine Balance der Aufmerksamkeit ist.'
      },
      {
        id: 'chakren',
        to: '/kundalini-energiesystem/chakren-und-qualitaeten',
        navLabel: 'Chakren',
        eyebrow: 'Die Zentren des Menschen',
        title: 'Die Chakren verbinden Physiologie, Charakter und spiritische Reifung',
        description: [
          'Die sieben Hauptchakren liegen entlang der Wirbelsäule und sind mit wichtigen Nervengeflechten verbunden. Jedes von ihnen beeinflusst sowohl körperliche Funktionen als auch eine bestimmte innere Qualität.',
          'Störungen im Leben lassen sich in dieser Sicht oft als Ungleichgewicht eines oder mehrerer Zentren lesen. Wenn die Kundalini aufsteigt, werden diese Zentren nicht gezwungen, sondern genährt und in ihr natürliches Potenzial zurückgeführt.',
          'Darum ist die Chakra-Lehre hier keine abstrakte Symbolik. Sie ist eine präzise Sprache dafür, wie Persönlichkeit, Gesundheit und Meditation ineinandergreifen.'
        ],
        sideTitle: 'Die Aufstiegslogik',
        sideItems: [
          'Jedes Chakra hat eine subtile Qualität und eine körperliche Manifestation',
          'Void, Nabhi und Swadisthana wirken als zusammenhängende Gruppe',
          'Von Mooladhara bis Sahasrara wird Entwicklung als Nährung statt als Zwang verstanden'
        ],
        note:
          'Die Zentren lesen sich wie eine innere Landkarte: von Unschuld und Kreativität über Sicherheit, Kommunikation und Vergebung bis zur Integration.'
      }
    ],
    closing: {
      title: 'Das subtile System wird dann lebendig, wenn es nicht nur erklärt, sondern gespürt wird',
      description:
        'Kundalini, Nadis und Chakren liefern gemeinsam einen präzisen Rahmen für Meditation, Charakterbildung und innere Gesundheit. Ihre Stärke liegt darin, dass sie Struktur und Erfahrung zusammenführen: Man lernt nicht nur Begriffe, sondern eine fühlbare Sprache des eigenen inneren Systems.',
      points: [
        'Die Kundalini erklärt Erwachen als natürliches inneres Geschehen.',
        'Die Nadis zeigen, warum Freude, Aktivität und Gegenwart aus dem Gleichgewicht geraten können.',
        'Die Chakren machen innere Qualitäten konkret, physiologisch und meditativ lesbar.'
      ]
    }
  },
  selfRealization: {
    route: '/selbstverwirklichung-meditation',
    navLabel: 'Selbstverwirklichung & Meditation',
    heroEyebrow: 'Höheres Bewusstsein',
    title: 'Selbstverwirklichung & Meditation',
    intro:
      'Selbstverwirklichung erscheint als eigentlicher Ermöglicher der Meditation. Die Aufmerksamkeit löst sich aus der permanenten Belastung durch Gedanken, Ego und Konditionierungen und steigt in einen höheren, stilleren Zustand des Bewusstseins auf.',
    heroPanelText:
      'Die Seite formuliert diesen Prozess ungewöhnlich anschaulich: Wenn die Kundalini durch die Chakren steigt, spannt sie das Gewebe der Aufmerksamkeit wie ein Zelt nach oben. So wird aus einem Moment der Gedankenfreiheit eine vertiefbare, wiederholbare meditative Erfahrung.',
    heroTags: ['Selbstverwirklichung', 'Gedankenfreiheit', 'Tägliche Praxis'],
    heroImage: redSunsetImg,
    heroImageAlt: 'Selbstverwirklichung',
    heroImageCaption:
      'Selbstverwirklichung beschreibt den Punkt, an dem sich die Aufmerksamkeit spürbar in einen höheren Zustand des Bewusstseins erhebt.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'Aufmerksamkeit hebt sich',
        description:
          'Nicht äußere Disziplin, sondern das tatsächliche Aufsteigen der inneren Energie hebt die Aufmerksamkeit über gewohnte Denkmuster hinaus.'
      },
      {
        title: 'Gedankenfreie Präsenz',
        description:
          'Meditation wird als wacher Zustand ohne mentale Überlastung beschrieben, in dem Beobachtung und Frieden zugleich möglich sind.'
      },
      {
        title: 'Regelmäßig vertiefbar',
        description:
          'Mit wiederholter Praxis wird Gedankenfreiheit nicht nur kurz erlebt, sondern stabiler und länger anhaltend.'
      }
    ],
    showcases: {
      eyebrow: 'Innere Erfahrung sichtbar gemacht',
      title: 'Selbstverwirklichung wird mit konkreter meditativer Praxis verbunden',
      description:
        'Die offiziellen Seiten arbeiten mit Bildern von Aufstieg, stiller Aufmerksamkeit und Selbstfürsorge, um die Praxis vom ersten Erlebnis bis zur täglichen Vertiefung nachvollziehbar zu machen.',
      items: [
        {
          title: 'Der ermöglichende Moment',
          label: 'Self-Realization',
          description:
            'Selbstverwirklichung wird als Schlüsselmoment dargestellt, der die innere Architektur erstmals bewusst erfahrbar macht.',
          image: selfRealizationImg,
          alt: 'Selbstverwirklichung'
        },
        {
          title: 'Thoughtless Awareness',
          label: 'Vierter Bewusstseinszustand',
          description:
            'Gedankenfreiheit ist kein Wegdämmern, sondern eine ruhige, klare und wache Form von Präsenz.',
          image: thoughtlessImg,
          alt: 'Gedankenfreie Aufmerksamkeit'
        },
        {
          title: 'Die Energie steigt',
          label: 'Kundalini als Dynamik',
          description:
            'Die innere Bewegung der Kundalini wird als realer Vorgang beschrieben, der Aufmerksamkeit und Wahrnehmung anhebt.',
          image: kundaliniEnergyImg,
          alt: 'Kundalini als innere Dynamik'
        }
      ]
    },
    process: {
      eyebrow: 'Meditativer Ablauf',
      title: 'Von der ersten Erweckung zur stabilen Gedankenfreiheit',
      description:
        'Meditation erscheint als klarer innerer Ablauf, der bei der Selbstverwirklichung beginnt und sich durch regelmäßige Praxis vertieft.',
      items: [
        {
          step: '01',
          title: 'Die Gedankenlast löst sich',
          description:
            'Die Aufmerksamkeit wird vom ständigen Bombardement durch Ego, Superego und reaktives Denken entlastet.'
        },
        {
          step: '02',
          title: 'Die Kundalini steigt durch die Mitte',
          description:
            'Sie durchstößt die Chakren und hebt die Aufmerksamkeit in eine subtilere Bewusstseinsebene.'
        },
        {
          step: '03',
          title: 'Gedankenfreiheit wird erfahrbar',
          description:
            'Man nimmt den gegenwärtigen Moment wacher wahr, ohne von innerem Kommentar übersteuert zu sein.'
        },
        {
          step: '04',
          title: 'Regelmäßige Praxis verlängert den Zustand',
          description:
            'Mit täglicher Meditation wird aus einem Moment der Stille eine tragfähigere, wiederkehrende Erfahrung.'
        }
      ]
    },
    sections: [
      {
        id: 'selbstverwirklichung',
        to: '/selbstverwirklichung-meditation/selbstverwirklichung',
        navLabel: 'Selbstverwirklichung',
        eyebrow: 'Der Auslöser',
        title: 'Selbstverwirklichung macht einen höheren Bewusstseinszustand zugänglich',
        description: [
          'Die Aufmerksamkeit kann sich nur dann wirklich in einen höheren Zustand erheben, wenn sie nicht länger ununterbrochen von Gedanken überlagert wird. Genau hier setzt Selbstverwirklichung an.',
          'Wenn die Kundalini durch den zentralen Kanal steigt und die Chakren durchdringt, wird die Aufmerksamkeit gleichsam nach oben gezogen. Dadurch löst sie sich von der engen Verflechtung aus Denken und unmittelbarer emotionaler Reaktion.',
          'Selbstverwirklichung erscheint so nicht als symbolischer Akt, sondern als innere Öffnung, die den Menschen erstmals in eine ruhigere, klarere Form des Wahrnehmens versetzt.'
        ],
        sideTitle: 'Kerngedanken',
        sideItems: [
          'Die Aufmerksamkeit ist der Träger des Bewusstseins',
          'Die Kundalini hebt diese Aufmerksamkeit in eine höhere Ebene',
          'Meditation beginnt mit Erfahrung, nicht nur mit Technik'
        ],
        note:
          'Die offizielle Seite nutzt das Bild eines von innen aufgespannten Zeltes, um die Ausweitung der Aufmerksamkeit zu erklären.'
      },
      {
        id: 'gedankenfreiheit',
        to: '/selbstverwirklichung-meditation/gedankenfreie-stille',
        navLabel: 'Gedankenfreie Stille',
        eyebrow: 'Thoughtless Awareness',
        title: 'Gedankenfreiheit ist stille Wachheit, nicht Leere',
        description: [
          'Die Thoughtless-Awareness-Seite macht deutlich, dass dieser Zustand kein Einschlafen und keine diffuse Trance ist. Vielmehr handelt es sich um eine ruhige, inspirierte und zugleich aufmerksame Form des Bewusstseins.',
          'Weil die Aufmerksamkeit von ihrem gewohnten Gedankenstrom entlastet ist, entsteht eine neue Qualität der Beobachtung. Wahrnehmung wird direkter, Reaktionen werden weniger zwanghaft und emotionale Überfrachtung nimmt ab.',
          'Gedankenfreiheit erscheint damit als eigenständiger Bewusstseinszustand, der über Entspannung hinausgeht. Er wird als spirituell, psychologisch und praktisch relevant zugleich beschrieben.'
        ],
        sideTitle: 'Qualitäten dieses Zustands',
        sideItems: [
          'Wach und präsent statt träge',
          'Innere Ruhe ohne Flucht aus der Wirklichkeit',
          'Klarere Beobachtung ohne reaktiven Gedankenlärm'
        ],
        note:
          'Die offizielle Thoughtless-Awareness-Seite spricht ausdrücklich von einem vierten Zustand des Bewusstseins.'
      },
      {
        id: 'praxis',
        to: '/selbstverwirklichung-meditation/meditationspraxis',
        navLabel: 'Meditation im Alltag',
        eyebrow: 'Vertiefung',
        title: 'Meditation wird durch Regelmäßigkeit tragfähig und konkret',
        description: [
          'Ein zentrales Argument lautet, dass mit jeder Meditationssitzung die Kundalini gleichsam stärker und klarer aufsteigt. Dadurch hält Gedankenfreiheit nicht nur einen Augenblick an, sondern verlängert sich schrittweise.',
          'Meditation wird deshalb nicht als punktuelles Erlebnis beschrieben, sondern als Praxis, die die Sensibilität für das eigene System steigert. Je häufiger man meditiert, desto leichter werden innere Zustände und Ungleichgewichte erkannt.',
          'So erhält Sahaja-Meditation einen sehr praktischen Charakter: Sie bleibt einfach zugänglich, entwickelt aber mit der Zeit Tiefe, Stabilität und eine dauerhaftere innere Qualität.'
        ],
        sideTitle: 'Was regelmäßige Praxis bewirkt',
        sideItems: [
          'Die Erfahrung wird reproduzierbarer',
          'Die Aufmerksamkeitsdauer in Stille nimmt zu',
          'Das feinstoffliche System wird deutlicher wahrnehmbar'
        ],
        note:
          'Regelmäßige Meditation erscheint ausdrücklich als der Weg von momentaner zu konsistenter Gedankenfreiheit.'
      }
    ],
    closing: {
      title: 'Hier wird Meditation als Bewusstseinsentwicklung präzise beschrieben',
      description:
        'Selbstverwirklichung, Gedankenfreiheit und tägliche Praxis bilden eine klare Linie. Meditation beginnt mit dem Erwachen der inneren Energie, wird in der stillen Aufmerksamkeit erfahrbar und vertieft sich durch regelmäßige Anwendung zu einer neuen Lebensqualität.',
      points: [
        'Selbstverwirklichung hebt die Aufmerksamkeit in eine höhere Ebene.',
        'Gedankenfreiheit wird als eigenständiger, wacher Bewusstseinszustand beschrieben.',
        'Die tägliche Praxis macht diese Erfahrung stabil, konkret und alltagstauglich.'
      ]
    }
  },
  science: {
    route: '/wissenschaft-spiritualitaet',
    navLabel: 'Wissenschaft & Spiritualität',
    heroEyebrow: 'Verifizierbare Erfahrung',
    title: 'Wissenschaft & Spiritualität',
    intro:
      'Meditation sollte nicht auf eine bloße Entspannungsreaktion reduziert werden. Im Mittelpunkt steht vielmehr ein erfahrbarer Bewusstseinszustand, dessen subjektive Tiefe und objektive Begleitphänomene gemeinsam betrachtet werden können.',
    heroPanelText:
      'Die wissenschaftlichen Seiten schlagen damit eine präzise Brücke: Gedankenfreiheit wird als reale Erfahrung beschrieben, und moderne Neuroimaging- und EEG-Forschung werden als Mittel genannt, diese Erfahrung in ihren Begleitmustern zu untersuchen.',
    heroTags: ['EEG', 'Bewusstsein', 'Ganzheitliche Gesundheit'],
    heroImage: thoughtlessImg,
    heroImageAlt: 'Gedankenfreie Aufmerksamkeit und innere Fürsorge',
    heroImageCaption:
      'Meditation erscheint hier neu: nicht nur als Relaxation, sondern als bewusst erlebte Unterbrechung des gewohnten Gedankenstroms.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'Mehr als Entspannung',
        description:
          'Die wissenschaftliche Argumentation verschiebt Meditation von der reinen Physiologie zu einer erfahrbaren Veränderung des Bewusstseins.'
      },
      {
        title: 'Objektive Begleitmuster',
        description:
          'Elektrische Aktivität des Gehirns und neurophysiologische Daten werden als Analyseebene für meditative Zustände herangezogen.'
      },
      {
        title: 'Ganzheitliche Integration',
        description:
          'Gesundheit, Bewusstsein und das subtile System werden nicht getrennt, sondern in Beziehung zueinander betrachtet.'
      }
    ],
    showcases: {
      eyebrow: 'Wissenschaftliche Perspektive',
      title: 'Innere Erfahrung wird mit beobachtbaren Veränderungen verbunden',
      description:
        'Nicht Spekulation, sondern eine überprüfbare Praxis steht im Vordergrund: Aufmerksamkeit, Gehirnaktivität, Gesundheit und Integration werden gemeinsam gedacht.',
      items: [
        {
          title: 'Thoughtless Awareness',
          label: 'Bewusstseinszustand',
          description:
            'Gedankenfreiheit wird als realer, ruhiger und intuitiver Zustand beschrieben, nicht als bloßes Konzept.',
          image: thoughtlessImg,
          alt: 'Thoughtless Awareness'
        },
        {
          title: 'Subtile Landkarte',
          label: 'Systemische Sicht',
          description:
            'Das Chakra-Diagramm zeigt, wie Spiritualität als strukturiertes System statt als diffuse Metapher erscheint.',
          image: chakraChartImg,
          alt: 'Chakra-Diagramm'
        },
        {
          title: 'Balance und Tendenzen',
          label: 'Regulation',
          description:
            'Die Dynamik zwischen links, rechts und Mitte bietet ein Modell für psychische und energetische Balance.',
          image: tendenciesImg,
          alt: 'Diagramm innerer Tendenzen'
        }
      ]
    },
    process: {
      eyebrow: 'Vom Relaxationsmodell zur Bewusstseinsforschung',
      title: 'Die wissenschaftliche Argumentation verläuft in klaren Schritten',
      description:
        'Die Scientific-Evidence-Seite führt systematisch von einer älteren Meditationsdefinition hin zu einem differenzierteren Verständnis von Aufmerksamkeit und Bewusstsein.',
      items: [
        {
          step: '01',
          title: 'Meditation wird neu definiert',
          description:
            'Nicht nur Entspannung, sondern die Unterbrechung des Gedankenstroms rückt ins Zentrum der Beschreibung.'
        },
        {
          step: '02',
          title: 'Gedankenfreiheit wird als real erfahrbar gesetzt',
          description:
            'Die Seite behandelt thoughtless awareness als verifizierbare menschliche Erfahrung und nicht als esoterische Behauptung.'
        },
        {
          step: '03',
          title: 'Neurophysiologische Begleitmuster werden untersucht',
          description:
            'EEG und Bildgebung bieten eine objektive Sprache, um unterschiedliche meditative Zustände zu analysieren.'
        },
        {
          step: '04',
          title: 'Gesundheit und Bewusstsein werden verbunden',
          description:
            'Meditation erscheint als Praxis, die sowohl subjektive Klarheit als auch messbare Verbesserungen im Wohlbefinden beeinflussen kann.'
        }
      ]
    },
    sections: [
      {
        id: 'innere-wissenschaft',
        to: '/wissenschaft-spiritualitaet/innere-wissenschaft',
        navLabel: 'Innere Wissenschaft',
        eyebrow: 'Prüfbare Spiritualität',
        title: 'Spiritualität wird als erfahrbare und prüfbare Disziplin formuliert',
        description: [
          'Die wissenschaftliche Perspektive stellt bewusst die Frage, wie Meditation heute verstanden werden sollte. Dabei wird der Wandel in der Definition von Meditation betont: weg von bloßer Entspannungsreaktion, hin zur Fokussierung der Aufmerksamkeit und zur Unterbrechung des Gedankenstroms.',
          'Diese Verschiebung ist wichtig, weil sie meditative Erfahrung nicht banalisiert. Spiritualität wird hier nicht gegen Wissenschaft ausgespielt, sondern als Bereich dargestellt, in dem präzise innere Erfahrung und analytische Beobachtung zusammenwirken können.',
          'Dadurch entsteht eine Sprache, in der Spiritualität weder irrational noch dogmatisch wirkt. Sie wird als verlässliche Praxis beschrieben, die erlebt, beschrieben und in ihren Auswirkungen untersucht werden kann.'
        ],
        sideTitle: 'Wissenschaftliche Grundhaltung',
        sideItems: [
          'Meditation wird über Aufmerksamkeit und Bewusstseinsänderung gefasst',
          'Erfahrung bleibt zentral, wird aber nicht vor Prüfung geschützt',
          'Objektive Messung ergänzt subjektive Tiefe'
        ],
        note:
          'Gedankenfreie Aufmerksamkeit wird hier als ein Zustand verstanden, der in der Welt moderner Neurodiagnostik nicht einfach vorgetäuscht werden kann.'
      },
      {
        id: 'gesundheit-forschung',
        to: '/wissenschaft-spiritualitaet/gesundheit-und-forschung',
        navLabel: 'Gesundheit & Forschung',
        eyebrow: 'Ganzheitliche Wirkung',
        title: 'Forschung und Wohlbefinden werden ganzheitlich zusammengeführt',
        description: [
          'Die wissenschaftliche und gesundheitliche Perspektive macht deutlich, dass meditative Praxis nicht nur einzelne Symptome adressiert, sondern mit einem umfassenderen inneren Gleichgewicht zusammenhängt. Körperliche, mentale und spirituelle Prozesse werden daher nicht isoliert betrachtet.',
          'Wenn die Kundalini das subtile System nährt und integriert, dann erscheint Gesundheit nicht allein als Abwesenheit von Störung, sondern als Ausdruck innerer Ordnung. Meditation wird so nicht nur beruhigend, sondern strukturierend verstanden.',
          'Der Forschungsrahmen bleibt dabei offen und modern: Lebensqualität, Stressregulation, Blutdruck, Angstniveau und Unterschiede in der Gehirnaktivität werden als sinnvolle Beobachtungsfelder genannt, ohne die spirituelle Erfahrung zu entwerten.'
        ],
        sideTitle: 'Forschungsfelder',
        sideItems: [
          'Veränderungen in der elektrischen Aktivität des Gehirns',
          'Subjektives Erleben von Ruhe, Klarheit und Selbstregulation',
          'Ganzheitliche Wirkung auf Wohlbefinden und Balance'
        ],
        note:
          'Die offizielle Darstellung hält fest, dass Meditationserfahrung und neurophysiologische Messung einander nicht ausschließen, sondern gegenseitig erhellen können.'
      },
      {
        id: 'integration',
        to: '/wissenschaft-spiritualitaet/integration-und-entwicklung',
        navLabel: 'Integration',
        eyebrow: 'Oneness & coherence',
        title: 'Integration meint die Zusammenführung von System, Aufmerksamkeit und Bewusstsein',
        description: [
          'Integration wird hier nicht nur philosophisch verstanden. Sie bezeichnet einen Zustand, in dem Aufmerksamkeit, subtile Zentren und innere Reaktionen kohärenter zusammenarbeiten.',
          'Dadurch entstehen nicht nur Momente der Ruhe, sondern eine neue Form von innerer Ordnung. Gedankenfreiheit, Balance der Kanäle und die Funktion des Sahasrara werden zu Teilen eines kohärenten Gesamtbildes.',
          'Wissenschaft und Spiritualität treffen sich genau hier: in der Frage, wie ein Mensch bewusster, integrierter und weniger zerrissen leben kann. Die Seite beantwortet diese Frage nicht bloß theoretisch, sondern über meditierbare Erfahrung.'
        ],
        sideTitle: 'Integration in diesem Sinn',
        sideItems: [
          'Aufmerksamkeit bleibt zentrierter und weniger pendelnd',
          'Chakren und Kanäle werden als zusammenhängendes System gelesen',
          'Erkenntnis wird als Kombination aus Erfahrung und Beobachtung verstanden'
        ],
        note:
          'Die wissenschaftliche Perspektive bleibt nah an der unmittelbaren Erfahrung und verliert dabei dennoch nicht die Sprache der Forschung.'
      }
    ],
    closing: {
      title: 'Diese Seiten machen Spiritualität intellektuell ernst und praktisch überprüfbar',
      description:
        'Diese Sicht schlägt keine Trennung zwischen nüchterner Untersuchung und innerer Erfahrung vor. Stattdessen werden Gedankenfreiheit, subtile Balance und Wohlbefinden als Phänomene behandelt, die sowohl gelebt als auch untersucht werden können. Genau darin liegt die Stärke dieser Kombination aus Wissenschaft und Spiritualität.',
      points: [
        'Meditation wird über Bewusstseinsveränderung statt nur über Entspannung verstanden.',
        'Thoughtless awareness wird als reale, nachvollziehbare Erfahrung beschrieben.',
        'Gesundheit, Forschung und spirituelle Integration erscheinen als zusammenhängender Raum.'
      ]
    }
  },
  culture: {
    route: '/kultur-des-geistes',
    navLabel: 'Kultur des Geistes',
    heroEyebrow: 'Kreativität, Kollektivität, Charakter',
    title: 'Kultur des Geistes',
    intro:
      'Spiritualität erscheint nicht als Rückzug aus dem Leben, sondern als Verfeinerung von Persönlichkeit, Wahrnehmung und gemeinschaftlichem Miteinander. Kreativität, kollektive Meditation und charakterliche Reifung werden so zu sichtbaren Ausdrucksformen einer Kultur des Geistes.',
    heroPanelText:
      'Gerade darin liegt die kulturelle Kraft dieser Sichtweise: Wer seine Aufmerksamkeit klärt, erlebt Kunst tiefer, wird verbindungsfähiger und entwickelt jene Qualitäten, die Gemeinschaft, Schönheit und echte Menschlichkeit tragen.',
    heroTags: ['Kreativität', 'Collective Meditation', 'Charakter'],
    heroImage: collectiveMeditationImg,
    heroImageAlt: 'Kollektive Meditation',
    heroImageCaption:
      'Kollektive Meditation erscheint als stiller Gegenentwurf zu moderner Vereinzelung: Menschen sitzen gemeinsam, ohne Vergleich und ohne Hierarchie.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'Kreative Verfeinerung',
        description:
          'Meditation wird als Weg beschrieben, Aufmerksamkeit zu veredeln und Wahrnehmung für Kunst, Musik, Sprache und Form zu vertiefen.'
      },
      {
        title: 'Kollektive Verbundenheit',
        description:
          'Gemeinsame Meditation schafft eine Form von Zugehörigkeit, die nicht über Lärm, sondern über geteilte Stille entsteht.'
      },
      {
        title: 'Charakter als Spiritualität',
        description:
          'Spiritualität bleibt leer, wenn sie nicht zu positiver Persönlichkeitsentwicklung und reiferen Qualitäten führt.'
      }
    ],
    showcases: {
      eyebrow: 'Kultur in Bildern',
      title: 'Die offizielle Bildsprache verbindet Kunst, Stille und geistige Reifung',
      description:
        'Kultur des Geistes bedeutet hier nicht Dekor, sondern eine neue Qualität von Wahrnehmung, Zusammenarbeit und innerem Ausdruck.',
      items: [
        {
          title: 'Verbesserte Wahrnehmung',
          label: 'Creative attention',
          description:
            'Meditation verfeinert die Aufmerksamkeit und lässt subtile Details in Kunst und Alltag deutlicher hervortreten.',
          image: improvedPerceptionImg,
          alt: 'Verfeinerte Wahrnehmung'
        },
        {
          title: 'Gemeinsam in Stille',
          label: 'Collective Meditation',
          description:
            'Kollektive Meditation wird als Antwort auf Einsamkeit, Überstimulation und innere Vereinzelung der Gegenwart gelesen.',
          image: collectiveMeditationImg,
          alt: 'Kollektive Meditation'
        },
        {
          title: 'Zehn Grundsätze',
          label: 'Spiritual integrity',
          description:
            'Die spirituellen Grundsätze betonen, dass echte Reifung immer auch Verhaltens- und Charakterqualität einschließt.',
          image: tenetsImg,
          alt: 'Grundsätze geistiger Reifung'
        }
      ]
    },
    process: {
      eyebrow: 'Wie Kultur des Geistes entsteht',
      title: 'Ein klarer Entwicklungsweg wird sichtbar',
      description:
        'Kreativität, gemeinschaftliche Praxis und Charakterreifung werden als drei Seiten derselben spirituellen Entwicklung beschrieben.',
      items: [
        {
          step: '01',
          title: 'Aufmerksamkeit wird verfeinert',
          description:
            'Meditation macht die Wahrnehmung subtiler und lässt Musik, Sprache, Gestik und Atmosphäre bewusster erfahren.'
        },
        {
          step: '02',
          title: 'Ausdruck gewinnt an Tiefe',
          description:
            'Kreative Arbeit wird nicht nur produktiver, sondern bedeutungsvoller, weil mehr Präsenz und emotionale Intelligenz einfließen.'
        },
        {
          step: '03',
          title: 'Stille wird kollektiv',
          description:
            'Gemeinsame Meditation verwandelt individuelle Praxis in Zugehörigkeit, Resonanz und sozialen Halt.'
        },
        {
          step: '04',
          title: 'Spiritualität zeigt sich im Charakter',
          description:
            'Wirkliche Kultur entsteht dort, wo Menschen reifere Qualitäten wie Mitgefühl, Diplomatie, Weisheit und Selbstbeherrschung entwickeln.'
        }
      ]
    },
    sections: [
      {
        id: 'kulturelle-integration',
        to: '/kultur-des-geistes/kulturelle-integration',
        navLabel: 'Kulturelle Integration',
        eyebrow: 'Gemeinsame Würde',
        title: 'Kulturelle Integration wächst aus innerer Verbundenheit',
        description: [
          'Auch wenn Kultur hier anders gefasst wird als in klassischen Kulturtheorien, wird klar: Menschen sollen sich nicht über Oberflächenmerkmale definieren, sondern über das, was sie innerlich verbindet. Aufmerksamkeit, Würde und Respekt bilden die tiefere Basis von Gemeinschaft.',
          'Die Seite zur kollektiven Meditation beschreibt die moderne Welt zugleich als hochvernetzt und chronisch getrennt. Gerade deshalb bekommt gemeinsame Stille einen kulturellen Wert: Sie erzeugt Zugehörigkeit, ohne Uniformität zu verlangen.',
          'Kultur des Geistes bedeutet damit, Räume zu schaffen, in denen Menschen sich ohne Lärm, Hierarchie oder bloßen Identitätskampf verbunden erleben. Diese Form von Integration wirkt still, aber tief.'
        ],
        sideTitle: 'Integrative Qualitäten',
        sideItems: [
          'Zugehörigkeit ohne Vergleich oder Rangordnung',
          'Verbundenheit durch Präsenz statt durch Ideologie',
          'Würde wird aus der inneren Möglichkeit jedes Menschen gelesen'
        ],
        note:
          'Geteilte Stille erscheint ausdrücklich als Gegenbewegung zur heutigen sozialen Vereinzelung.'
      },
      {
        id: 'kreativitaet',
        to: '/kultur-des-geistes/kreativitaet',
        navLabel: 'Kreativität',
        eyebrow: 'The Creative',
        title: 'Kreativität wird als verfeinerte Aufmerksamkeit und Ausdruckskraft verstanden',
        description: [
          'Diese Sicht richtet sich direkt an Menschen, die schreiben, musizieren, gestalten, performen oder in anderer Weise schöpferisch arbeiten. Kreativer Ausdruck erscheint als etwas, das dem Leben Sinn, Magie und Verbindung schenken kann.',
          'Besonders stark ist die Beobachtung, dass Meditation die Aufmerksamkeit reguliert und verfeinert. Wer gegenwärtiger wird, erkennt subtile Details besser, hört feiner, beobachtet tiefer und entscheidet bewusster, wohin die eigene Aufmerksamkeit gehen soll.',
          'So erscheint Kreativität nicht bloß als Talent, sondern als Zustand veredelter Wahrnehmung. Kunst wird mehrdimensionaler, weil Präsenz, emotionale Intelligenz und innere Ruhe stärker in den Ausdruck hineinwirken.'
        ],
        sideTitle: 'Was Kreative gewinnen sollen',
        sideItems: [
          'Mehr Präsenz im schöpferischen Prozess',
          'Größere Sensibilität für subtile Details',
          'Tieferer emotionaler und atmosphärischer Ausdruck'
        ],
        note:
          'Kreativität wird direkt mit attentionaler Verfeinerung und einem erweiterten Bewusstseinsfenster verbunden.'
      },
      {
        id: 'kollektive-meditation',
        to: '/kultur-des-geistes/kollektive-meditation',
        navLabel: 'Kollektive Meditation',
        eyebrow: 'Shared stillness',
        title: 'Kollektive Meditation wird zum sozialen Ausdruck spiritueller Reife',
        description: [
          'Die Seite What is Collective Meditation beschreibt sehr zeitgenössisch, warum gemeinsame Praxis an Bedeutung gewinnt: Menschen sind digital verbunden, fühlen sich aber innerlich oft isoliert. Kollektive Meditation antwortet darauf nicht mit noch mehr Austausch, sondern mit gemeinsamer Stille.',
          'Gerade diese Form des Zusammenseins wird als heilsam beschrieben. Man muss nichts darstellen, nichts argumentieren und nichts beweisen. Man sitzt einfach gemeinsam in einer Präsenz, die individualistische Härte löst, ohne Persönlichkeit auszulöschen.',
          'Damit wird kollektive Meditation zu einer Kulturform. Sie schafft Rhythmus, Verbundenheit und Zugehörigkeit und verleiht Spiritualität eine soziale Realität, die über den einzelnen Meditierenden hinausgeht.'
        ],
        sideTitle: 'Die soziale Wirkung',
        sideItems: [
          'Gemeinsame Praxis lindert moderne Disconnection',
          'Stille wird zu einer Form geteilter Resonanz',
          'Spiritualität wird individuell erlebt und kollektiv vertieft'
        ],
        note:
          'Kollektive Meditation erscheint als neue spirituelle Grundbewegung unserer Zeit.'
      }
    ],
    closing: {
      title: 'Kultur des Geistes heißt hier: Wahrnehmung verfeinern, Gemeinschaft vertiefen, Charakter reifen lassen',
      description:
        'Daraus entsteht ein Kulturbegriff, der zugleich modern und tief ist. Kunst gewinnt an Präsenz, Gemeinschaft an Stille und Spiritualität an Glaubwürdigkeit, wenn sie sich in reiferen menschlichen Qualitäten zeigt. Genau darin wird diese Kultur des Geistes lebendig.',
      points: [
        'Kreativität wächst aus verfeinerter Aufmerksamkeit.',
        'Kollektive Meditation übersetzt Spiritualität in Gemeinschaft.',
        'Charakterentwicklung ist nicht Zusatz, sondern Kern echter Kultur.'
      ]
    }
  }
} satisfies Record<string, TopicPageData>;

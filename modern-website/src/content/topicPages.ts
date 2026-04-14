import chakraChartImg from '../assets/sahajayogade/das-subtile-system-grafik.jpg';
import channelsDiagramImg from '../assets/sahajayogade/Channels-for-SY-website-de-2048x977-2-1024x489.png';
import kundaliniEnergyImg from '../assets/sahajayogade/Central-Channel-SY-929x1024.png';
import tendenciesImg from '../assets/bee.png';
import selfRealizationImg from '../assets/ShriMataji.jpg';
import thoughtlessImg from '../assets/lotus.png';
import improvedPerceptionImg from '../assets/universe.avif';
import collectiveMeditationImg from '../assets/village.jpg';
import tenetsImg from '../assets/mother3.png';
import redSunsetImg from '../assets/redsunset.jpeg';
import universeImg from '../assets/universe.avif';
import beeImg from '../assets/bee.png';
import lotusImg from '../assets/lotus.png';
import shriMatajiImg from '../assets/ShriMataji.jpg';
import motherImg from '../assets/mother.jpg';
import mother1Img from '../assets/mother1.jpg';
import mother3Img from '../assets/mother3.png';
import leftChannelImg from '../assets/sahajayogade/nadis-inside-img-002.jpg';
import rightChannelImg from '../assets/sahajayogade/nadis-inside-img-00003.jpg';

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
  hoverBackgroundImage?: string;
  hoverBackgroundImageMode?: 'cover' | 'contain';
  hoverBackgroundFrameClassName?: string;
  hoverBackgroundImageClassName?: string;
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
  hoverBackgroundImage?: string;
  hoverBackgroundImageMode?: 'cover' | 'contain';
  hoverBackgroundFrameClassName?: string;
  hoverBackgroundImageClassName?: string;
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
      'Das subtile System ist das feine Netzwerk aus Kundalini, Energiekanälen und Zentren entlang des Nervensystems. Im Herzen dieses Weges ruht die Kundalini als Kraft des reinen Wunsches, als mütterliche geistige Energie, still und schlafend in dreieinhalb Windungen im dreieckigen Kreuzbein. Dieselbe wunderbare göttliche Kraft, die im Mutterleib das Kind wachsen lässt, erscheint hier später als die im Kreuzbein niedergelegte Kundalini, als kosmische Energie, die im Menschen ein inneres Universum formt. Wenn sie erwacht, wird das, was wie Lehre erscheint, zu etwas Erfahrbarem: Gleichgewicht, Blockaden und innere Qualitäten können Schritt für Schritt wirklich gespürt werden.',
    heroPanelText:
      'Das System lässt sich wie ein Rad verstehen: Wer an der Peripherie lebt, wird leicht unruhig; wer in die Mitte kommt, findet Frieden. Genau dorthin führt Sahaja Yoga die Aufmerksamkeit, wenn die Kundalini den zentralen Kanal nährt und die Chakren wieder in ihr natürliches Gleichgewicht bringt. Ihr Erwachen erscheint hier als jener innere Durchbruch, auf den religiöse und spirituelle Traditionen in unterschiedlicher Sprache immer wieder hingewiesen haben.',
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
        'Die Bildsprache macht deutlich, dass die Nadis keine dekorativen Linien sind. Sie beschreiben drei sehr konkrete Bewegungsrichtungen der Aufmerksamkeit: Gefühl und Vergangenheit, Aktivität und Zukunft sowie die zentrierte Spur der inneren Entwicklung.',
      items: [
        {
          title: 'Linker Kanal',
          label: 'Ida Nadi',
          description:
            'Der Mondkanal trägt Wünsche, Erinnerungen und emotionale Tiefe. In seinem reinen Zustand schenkt er Freude, Mitgefühl und Sanftheit.',
          image: leftChannelImg,
          alt: 'Darstellung des linken Kanals',
          hoverBackgroundImage: leftChannelImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Rechter Kanal',
          label: 'Pingala Nadi',
          description:
            'Der Sonnenkanal versorgt Handlung, Planung und mentale Leistung. Im Gleichgewicht wirkt er dynamisch, klar und konstruktiv statt getrieben.',
          image: rightChannelImg,
          alt: 'Darstellung des rechten Kanals',
          hoverBackgroundImage: rightChannelImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Zentraler Kanal',
          label: 'Sushumna Nadi',
          description:
            'Durch die Mitte steigt die Kundalini auf. Hier hört die Aufmerksamkeit auf, zwischen Vergangenheit und Zukunft zu pendeln, und findet gegenwärtigen Frieden.',
          image: kundaliniEnergyImg,
          alt: 'Darstellung des zentralen Kanals',
          hoverBackgroundImage: kundaliniEnergyImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        }
      ]
    },
    gallery: {
      eyebrow: 'Lesart des subtilen Systems',
      title: 'Wie diese innere Landkarte auf der Seite gelesen wird',
      description:
        'Anstelle einer zweiten Chakra-Liste ordnet dieser Abschnitt die Seite selbst: Ursprung, Bewegungsrichtung, Balance und Vertiefung bleiben als ein zusammenhängendes System lesbar.',
      items: [
        {
          title: 'Architektur statt Begriffliste',
          subtitle: 'Ein Systemzusammenhang',
          description:
            'Der Überblick führt die Begriffe nicht noch einmal einzeln aus. Er zeigt, warum Quelle, Kanäle, Zentren und Rückmeldung nur zusammen Sinn ergeben und wie die Detailseiten daran anschließen.',
          image: chakraChartImg,
          alt: 'Darstellung des subtilen Systems'
        },
        {
          title: 'Bewegungsrichtung der Aufmerksamkeit',
          subtitle: 'Von außen nach innen',
          description:
            'Die Landkarte ordnet Erfahrung danach, ob Aufmerksamkeit zerstreut, einseitig oder gesammelt wirkt. Dadurch wird Meditation als Neuordnung der Wahrnehmung verständlich, nicht als bloße Entspannung.',
          image: kundaliniEnergyImg,
          alt: 'Zentraler Kanal als Richtung der Aufmerksamkeit'
        },
        {
          title: 'Balance als Diagnoseebene',
          subtitle: 'Links, rechts und Mitte',
          description:
            'Statt einzelne Symptome zu sammeln, liest die Seite Gegensätze als Kräfteverhältnis: Rückzug und Überaktivität, Schwere und Druck, Zerstreuung und Mitte. So bleibt der Überblick praktisch, ohne die Kanal-Seite zu wiederholen.',
          image: channelsDiagramImg,
          alt: 'Kanäle des subtilen Systems'
        },
        {
          title: 'Vom Überblick zur Vertiefung',
          subtitle: 'Eine Navigationskarte',
          description:
            'Jeder Einstieg auf dieser Seite hat eine eigene Aufgabe: Kundalini erklärt den inneren Ursprung, Kanäle & Gleichgewicht die Bewegungsrichtung, Chakren & Qualitäten die Zentren im Detail.',
          image: leftChannelImg,
          alt: 'Seitlicher Kanal des subtilen Systems'
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
          'Die Kundalini wird als angeborene, unzerstörbare Energie beschrieben, die still und schlafend in dreieinhalb Windungen im dreieckigen Kreuzbein ruht. Zugleich erscheint sie als Kraft des reinen Wunsches und als mütterliche geistige Energie, die nicht von außen hinzugefügt werden muss, sondern denselben göttlichen Strom fortsetzt, der im Mutterleib das Kind wachsen lässt und später als kosmische Energie im Menschen ein inneres Universum anlegt.',
          'Wenn sie erwacht, steigt sie durch den zentralen Kanal auf und nährt die Chakren. Dieser Aufstieg wird wie eine zweite Geburt verstanden: Was lange verborgen im Menschen heranreift, tritt vom Mooladhara bis zum Sahasrara in ein neues geistiges Leben.',
          'Gerade diese Verbindung von Sanftheit und Intelligenz ist entscheidend: Die Kundalini handelt nicht gewaltsam, sondern so, dass sich das System organisch neu ordnen kann. Wo sie an Belastungen in den Zentren reibt, kann Wärme entstehen; an Händen und Fingerkuppen zeigen sich dabei oft Kühle, Wärme oder Kribbeln als subtile Rückmeldung. In dieser Sicht heilt, verbessert und segnet sie das Leben, weil sie die Aufmerksamkeit nach und nach aus der groben Verstrickung mit materiellen Sorgen befreit.'
        ],
        sideTitle: 'Wesentliche Merkmale',
        sideItems: [
          'Sie ist in jedem Menschen bereits vorhanden',
          'Sie steigt durch die Sushumna und nährt die Zentren',
          'Ihr Erwachen galt in vielen Traditionen als eigentliches Ziel spiritischer Suche',
          'Ihre Klärung wird in den Händen und Fingerkuppen oft unmittelbar spürbar'
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
          'Der zentrale Kanal ist der Weg des Gleichgewichts. Hier steigt die Kundalini auf, und hier lernt die Aufmerksamkeit, nicht länger zwischen Vergangenheit und Zukunft hin- und herzuschwanken. In der Meditation soll sich diese Balance sogar in Händen und Fingerkuppen ablesen lassen.'
        ],
        sideTitle: 'Kanalqualitäten',
        sideItems: [
          'Ida: Freude, Gefühl, Erinnerung, Mondqualität',
          'Pingala: Aktion, Analyse, Zukunft, Sonnenqualität',
          'Sushumna: Mitte, Evolution, Gegenwart, Frieden',
          'Hände und Fingerkuppen spiegeln linke, rechte und zentrale Tendenzen'
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
          'Darum ist die Chakra-Lehre hier keine abstrakte Symbolik. Sie ist eine präzise Sprache dafür, wie Persönlichkeit, Gesundheit und Meditation ineinandergreifen. Weil sich die Zentren in Händen und Fingerkuppen widerspiegeln, können Wärme, Kühle oder Kribbeln während der Meditation als feine Zeichen der inneren Reinigung gelesen werden.'
        ],
        sideTitle: 'Die Aufstiegslogik',
        sideItems: [
          'Jedes Chakra hat eine subtile Qualität und eine körperliche Manifestation',
          'Void, Nabhi und Swadisthana wirken als zusammenhängende Gruppe',
          'Von Mooladhara bis Sahasrara wird Entwicklung als Nährung statt als Zwang verstanden',
          'Fingerkuppen und Hände werden als lesbare Karte des subtilen Zustands verstanden'
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
      'Selbstverwirklichung erscheint hier als der eigentliche Ermöglicher der Meditation. Ausgangspunkt ist die Kundalini, die als mütterliche geistige Energie und Kraft des reinen Wunsches still und schlafend in dreieinhalb Windungen im dreieckigen Kreuzbein ruht. Sie wird dabei als dieselbe göttliche Kraft verstanden, die im Mutterleib das Kind wachsen lässt und später als kosmische Energie im Menschen eingeprägt bleibt. Wenn sie erwacht, wird die Aufmerksamkeit von der ständigen Überlagerung durch Gedanken, Ego, Konditionierungen und emotionale Reaktionen entlastet und in einen stilleren, höheren Zustand des Bewusstseins erhoben.',
    heroPanelText:
      'Der Vorgang wird sehr konkret beschrieben: Wenn die Kundalini durch den zentralen Kanal aufsteigt und die Chakren durchdringt, spannt sie das Feld der Aufmerksamkeit wie das Tuch eines Zeltes nach oben. Diese Bewegung wird zugleich wie ein innerer Geburtsvorgang verstanden: Wie ein Kind im Mutterleib reift und geboren wird, so reift das Bewusstsein durch den Aufstieg vom Mooladhara bis zum Sahasrara zu einer zweiten Geburt. Wo die Energie an Negativitäten reibt, kann Wärme entstehen, und an Händen und Fingerkuppen werden Kühle, Wärme oder Kribbeln als subtile Zeichen dieser Klärung gedeutet.',
    heroTags: ['Selbstverwirklichung', 'Gedankenfreiheit', 'Tägliche Praxis'],
    heroImage: redSunsetImg,
    heroImageAlt: 'Selbstverwirklichung',
    heroImageCaption:
      'Selbstverwirklichung bezeichnet den Punkt, an dem die Aufmerksamkeit von innen angehoben und in eine höhere, stillere Bewusstseinsebene geführt wird.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'Aufmerksamkeit wird entlastet',
        description:
          'Die Aufmerksamkeit wird von der ständigen Überlagerung durch Gedanken, Ego und Superego gelöst und kann sich dadurch überhaupt erst in eine höhere Ebene erheben.'
      },
      {
        title: 'Die Energie trägt den Vorgang',
        description:
          'Gedankenfreiheit soll nicht auf der mentalen Ebene erkämpft werden. Die aufsteigende Kundalini übernimmt einen Großteil der inneren Arbeit und hebt die Aufmerksamkeit über den gewohnten Gedankenstrom hinaus.'
      },
      {
        title: 'Praxis macht den Zustand stabil',
        description:
          'Mit regelmäßiger Meditation wird aus einem kurzen Moment der Stille ein tragfähiger Zustand, der sich im Alltag vertieft und verlängert.'
      }
    ],
    showcases: {
      eyebrow: 'Innere Erfahrung sichtbar gemacht',
      title: 'Vom ersten Erwachen bis zur reifen Meditationspraxis',
      description:
        'Die Bildsprache verbindet den ersten inneren Durchbruch mit Gedankenfreiheit, subtiler Wahrnehmung und häuslicher Praxis. So wird deutlich, dass die Erfahrung nicht isoliert bleibt, sondern in einen Lebensrhythmus hineinwachsen soll.',
      items: [
        {
          title: 'Der ermöglichende Moment',
          label: 'Self-Realization',
          description:
            'Selbstverwirklichung erscheint als jener Augenblick, in dem die innere Energie die Aufmerksamkeit anhebt und die subtile Wirklichkeit erstmals konkret erfahrbar macht.',
          image: lotusImg,
          alt: 'Selbstverwirklichung'
        },
        {
          title: 'Thoughtless Awareness',
          label: 'Vierter Bewusstseinszustand',
          description:
            'Gedankenfreiheit wird als vierter Bewusstseinszustand verstanden: nicht dumpf, nicht schläfrig, sondern ruhig, klar und hochwach.',
          image: shriMatajiImg,
          alt: 'Gedankenfreie Aufmerksamkeit'
        },
        {
          title: 'Die Energie steigt',
          label: 'Kundalini als Dynamik',
          description:
            'Die Kundalini wird als lebendige Kraft beschrieben, die durch die Mitte aufsteigt, die Zentren durchdringt und Wahrnehmung sowie Bewusstheit neu ordnet.',
          image: kundaliniEnergyImg,
          alt: 'Kundalini als innere Dynamik'
        }
      ]
    },
    process: {
      eyebrow: 'Meditativer Ablauf',
      title: 'Von der Selbstverwirklichung zur stabilen inneren Stille',
      description:
        'Meditation wird als ein nachvollziehbarer innerer Prozess beschrieben, der mit dem Erwachen der Kundalini beginnt und durch regelmäßige Praxis in eine stabilere Bewusstseinsform hineinwächst.',
      items: [
        {
          step: '01',
          title: 'Die Aufmerksamkeit wird von Denkbelastung befreit',
          description:
            'Ego, Superego, Erinnerungsdruck und reaktives Denken verlieren ihre dauernde Dominanz über die Aufmerksamkeit.'
        },
        {
          step: '02',
          title: 'Die Kundalini steigt durch Sushumna und Chakren',
          description:
            'Die innere Energie steigt durch den zentralen Kanal, durchdringt die Zentren und spannt das Feld der Aufmerksamkeit wie ein Zelt nach oben.'
        },
        {
          step: '03',
          title: 'Am Sahasrara wird Gedankenfreiheit erfahrbar',
          description:
            'Wenn die Energie über das Agnya hinaus in Richtung Sahasrara steigt, wird die Aufmerksamkeit stiller, gegenwärtiger und freier von innerem Kommentar.'
        },
        {
          step: '04',
          title: 'Tägliche Praxis und Kollektivität vertiefen ihn',
          description:
            'Mit morgendlicher und abendlicher Praxis sowie gemeinsamer Meditation wird aus dem ersten Augenblick der Stille eine stabilere, wiederkehrende Erfahrung.'
        }
      ]
    },
    sections: [
      {
        id: 'selbstverwirklichung',
        to: '/selbstverwirklichung-meditation/selbstverwirklichung',
        navLabel: 'Selbstverwirklichung',
        eyebrow: 'Der Auslöser',
        title: 'Selbstverwirklichung hebt die Aufmerksamkeit in eine höhere Bewusstseinsebene',
        description: [
          'Die Aufmerksamkeit kann sich nur dann in einen höheren Zustand erheben, wenn die permanente Überlagerung durch Gedanken, Ego und Superego nachlässt. Genau darin liegt die Funktion der Selbstverwirklichung.',
          'Wenn die Kundalini durch den zentralen Kanal steigt und die Chakren durchdringt, wird das Gewebe der Aufmerksamkeit wie von innen nach oben gespannt. Dadurch löst es sich aus der Verstrickung mit Gedanken, Erinnerungen und unmittelbaren Reaktionsmustern. Dieser Aufstieg wird als geistige Entsprechung eines Werdens und Geborenwerdens gelesen.',
          'Selbstverwirklichung erscheint deshalb nicht als bloßer symbolischer Akt, sondern als tatsächliche innere Öffnung, durch die Meditation erstmals real und erfahrbar wird. In dieser Darstellung erfüllt sich damit etwas, was viele religiöse und spirituelle Wege als inneres Ziel vorausgesetzt haben.'
        ],
        sideTitle: 'Kerngedanken',
        sideItems: [
          'Aufmerksamkeit ist der Träger des Bewusstseins',
          'Kundalini hebt diese Aufmerksamkeit durch die Mitte an',
          'Der erste Durchbruch ist Beginn eines lebendigen Prozesses'
        ],
        note:
          'Ein zentrales Bild dafür ist das von innen aufgespannte Zelt: Nicht der Mensch zieht die Aufmerksamkeit gewaltsam hoch, sondern die innere Energie richtet sie auf.'
      },
      {
        id: 'gedankenfreiheit',
        to: '/selbstverwirklichung-meditation/gedankenfreie-stille',
        navLabel: 'Gedankenfreie Stille',
        eyebrow: 'Thoughtless Awareness',
        title: 'Gedankenfreiheit ist stille Wachheit, nicht Leere',
        description: [
          'Gedankenfreiheit ist weder Schlaf noch Trance noch gewöhnliches Wachsein. Sie wird als vierter Bewusstseinszustand beschrieben, in dem das Gehirn nicht abgeschaltet ist, aber der innere Dialog seine Herrschaft verliert.',
          'Weil Aufmerksamkeit nicht mehr von Gedankeninhalten überdeckt wird, entsteht eine beobachtende Klarheit. Gedanken und Gefühle erscheinen dann eher als Inhalte im Bewusstsein als als etwas, das uns sofort mitreißt.',
          'Gerade dadurch geht dieser Zustand weit über bloße Entspannung hinaus. Er verbindet Stille, Gegenwärtigkeit und eine ungewöhnlich klare Form innerer Wachheit.'
        ],
        sideTitle: 'Qualitäten dieses Zustands',
        sideItems: [
          'Wach und präsent statt dumpf oder schläfrig',
          'Still, ohne den Kontakt zur Realität zu verlieren',
          'Beobachtung ohne sofortige Identifikation oder Reaktion'
        ],
        note:
          'Der Zustand wird ausdrücklich als eigenständige höhere Bewusstseinsform behandelt, nicht als bloßer Nebeneffekt von Ruhe.'
      },
      {
        id: 'praxis',
        to: '/selbstverwirklichung-meditation/meditationspraxis',
        navLabel: 'Meditation im Alltag',
        eyebrow: 'Vertiefung',
        title: 'Regelmäßige Meditation macht die Erfahrung stabil und lebensnah',
        description: [
          'Nach der ersten Erfahrung wird eine einfache tägliche Praxis empfohlen: ein ruhiger Ort, nach Möglichkeit morgens und abends, meist in überschaubaren Zeiträumen von etwa zehn bis zwanzig Minuten.',
          'Die Meditation beginnt mit Entspannung und dem Heben der inneren Energie. Statt Gedanken zu bekämpfen, lässt man sie vorbeiziehen und erlaubt der Energie, die eigentliche Arbeit zu tun.',
          'Mit der Zeit werden die Empfindungen auf den Handflächen oder an den Fingerkuppen klarer: Wärme, Kühle oder Kribbeln werden als subtile Rückmeldungen des inneren Zustands verstanden, und gemeinsames Meditieren hilft, diesen Prozess spürbar zu beschleunigen.'
        ],
        sideTitle: 'Was regelmäßige Praxis bewirkt',
        sideItems: [
          'Morgens und abends, aber ohne starre Härte',
          'Die Energie darf arbeiten; Gedanken werden nur beobachtet',
          'Kollektive Meditation beschleunigt und stabilisiert'
        ],
        note:
          'Die Praxis soll nicht mechanisch werden: Erfahrung geht vor Theorie, und Beständigkeit wächst am besten aus Freude an der Tiefe heraus.'
      }
    ],
    closing: {
      title: 'Hier wird Meditation als allmähige Evolution des Bewusstseins beschrieben',
      description:
        'Selbstverwirklichung, Gedankenfreiheit und tägliche Praxis bilden einen zusammenhängenden Weg. Die erste Erweckung der Kundalini, die Entlastung der Aufmerksamkeit und die regelmäßige Meditation zuhause oder im Kollektiv werden als aufeinander aufbauende Stufen eines lebendigen inneren Wachstums verstanden.',
      points: [
        'Selbstverwirklichung hebt die Aufmerksamkeit über den gewöhnlichen Gedankenstrom hinaus.',
        'Gedankenfreiheit wird als vierter, stiller und zugleich hochwacher Zustand beschrieben.',
        'Regelmäßige Praxis macht die Erfahrung konkret, verkörpert und dauerhaft tragfähiger.'
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
    heroTags: [],
    heroImage: universeImg,
    heroImageAlt: 'Kosmische Darstellung von Wissenschaft und Bewusstsein',
    heroImageCaption:
      'Die Begegnung von Wissenschaft und Spiritualität wird hier als weiter Raum gedacht: innere Erfahrung, Bewusstsein und Ordnung erscheinen als Teile eines größeren Zusammenhangs.',
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
          image: beeImg,
          alt: 'Thoughtless Awareness'
        },
        {
          title: 'Subtile Landkarte',
          label: 'Systemische Sicht',
          description:
            'Das Chakra-Diagramm zeigt, wie Spiritualität als strukturiertes System statt als diffuse Metapher erscheint.',
          image: universeImg,
          alt: 'Chakra-Diagramm'
        },
        {
          title: 'Balance und Tendenzen',
          label: 'Regulation',
          description:
            'Die Dynamik zwischen links, rechts und Mitte bietet ein Modell für psychische und energetische Balance.',
          image: mother3Img,
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
    heroImage: lotusImg,
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
          image: mother1Img,
          alt: 'Verfeinerte Wahrnehmung'
        },
        {
          title: 'Gemeinsam in Stille',
          label: 'Collective Meditation',
          description:
            'Kollektive Meditation wird als Antwort auf Einsamkeit, Überstimulation und innere Vereinzelung der Gegenwart gelesen.',
          image: motherImg,
          alt: 'Kollektive Meditation'
        },
        {
          title: 'Zehn Grundsätze',
          label: 'Spiritual integrity',
          description:
            'Die spirituellen Grundsätze betonen, dass echte Reifung immer auch Verhaltens- und Charakterqualität einschließt.',
          image: mother1Img,
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

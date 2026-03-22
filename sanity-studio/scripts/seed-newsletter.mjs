import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const studioRoot = path.resolve(__dirname, '..');
const envPath = path.resolve(studioRoot, '.env.local');
const sanityConfigPath = path.resolve(process.env.HOME || '', '.config/sanity/config.json');

const env = fs.existsSync(envPath)
  ? Object.fromEntries(
      fs
        .readFileSync(envPath, 'utf8')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#') && line.includes('='))
        .map(line => {
          const [key, ...rest] = line.split('=');
          return [key, rest.join('=')];
        })
    )
  : {};

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || env.SANITY_STUDIO_DATASET || 'production';
const token = JSON.parse(fs.readFileSync(sanityConfigPath, 'utf8')).authToken;

if (!projectId || !token) {
  throw new Error('Missing Sanity project configuration');
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-03-22',
  useCdn: false,
  token
});

const sourceUrl =
  'https://www.meditationmuenchen.org/wp-content/uploads/2026/03/Sahaja-Yoga-Newsletter-01-2026-copy-01.html';

const imageUrls = {
  hero: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/images/7f444944-8ab0-edf8-6e1d-92ad9fe1571e.jpg',
  augusta: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/images/d0cfa5b2-2612-ba27-1134-a80d2f1693da.jpg',
  yogaWorld: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/images/86c0f936-9663-f523-7f82-f33cae4b039f.jpg',
  langeNacht: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/images/39ee49c5-c620-43d9-ea7b-1b820bb893de.jpg',
  musicMeditation: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/_compresseds/846d0e67-2f8d-b4b3-ceed-28f2c5d0a94f.jpg',
  intersana: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/_compresseds/d7dde201-0a49-0e51-65b6-5e40fb4630ff.jpg',
  energetika: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/_compresseds/2798aadb-4073-4e1a-735c-3ae0db55da84.jpg',
  diversity: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/images/6881242c-8c01-b074-a4c3-a8b9c0bd035b.jpg',
  cbc: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/video_thumbnails_new/368ccf12fdd4dc530516bbdd66443712.png',
  app: 'https://mcusercontent.com/fc12c592c7906c401ea96e6b5/images/0f3f246e-8e11-33cd-7b8a-8b38c3814196.jpg'
};

const doc = {
  _id: 'newsletter-sahaja-yoga-newsletter-01-2026',
  _type: 'newsletter',
  title: 'Sahaja Yoga Newsletter 01-2026',
  slug: {
    _type: 'slug',
    current: 'sahaja-yoga-newsletter-01-2026'
  },
  locale: 'de',
  issueLabel: '01-2026',
  publishedAt: '2026-03-22T15:00:00.000Z',
  heroEyebrow: 'Newsletter 01-2026',
  introTitle: 'Liebe Interessenten',
  introBody:
    'Wir freuen uns die nächsten Messeteilnahmen und Veranstaltungen anzukündigen und laden hiermit Alle dazu ein!\n\nDie Wochentage der regelmäßigen Meditationsabende im SY Zentrum München und Süd-Deutschland sind ebenfalls unten aufgelistet, sowie die Berichte über vergangene Veranstaltungen.',
  closing: 'Mit freundliche Grüßen & bis bald, Sahaja Yoga Kultur e.V.',
  heroImageUrl: imageUrls.hero,
  featuredHeading: 'Wir sind dabei! Messen mit Sahaja Yoga Stand + Vorträgen',
  featuredCards: [
    {
      _type: 'newsletterCard',
      _key: 'augusta-spirit',
      eyebrow: 'Frühjahr 2026',
      title: 'Augusta Spirit – Die alternative Gesundheitsmesse in Augsburg-Neusäß',
      subtitle: 'mit Sahaja-Yoga Info & Meditations-Stand Nr. 39+40',
      body:
        'Sahaja Yoga ist bei der Augusta Spirit mit Stand und Vorträgen vertreten. Besucherinnen und Besucher erhalten Einblick in die authentische Kundalini-Energie, Meditation und den gedankenfreien Bewusstseinszustand.',
      points: [
        'Samstag, 15:30 Uhr, Raum II: Durch die authentische Kundalini-Energie zum gedankenfreien Bewußtsein und Yoga-Samadhi / Peter Jakob',
        'Sonntag, 15:00 Uhr, Raum II: Die heilsame Denkpause – Authentische Meditation / Dipl. Ing. Norbert Wanger'
      ],
      imageUrl: imageUrls.augusta,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'augusta-home',
          label: 'Offizielle Homepage',
          url: 'https://augusta-spirit.de/'
        },
        {
          _type: 'newsletterLink',
          _key: 'augusta-talks',
          label: 'Vorträge',
          url: 'https://augusta-spirit.de/vortraege-2023'
        }
      ]
    },
    {
      _type: 'newsletterCard',
      _key: 'world-of-yoga',
      eyebrow: '10.-12. April 2026',
      title: 'World of Yoga Stuttgart',
      subtitle: 'Messe Stuttgart · Sahaja-Yoga Info & Meditations-Stand 2A22',
      body:
        'Sahaja Yoga ist auf der World of Yoga Stuttgart präsent. Neben dem Infostand findet ein Vortrag mit Meditation auf der Inspire Stage statt.',
      points: [
        'Samstag, 11. April 2026, 14:30 - 15:15 Uhr, Inspire Stage (Halle C2)',
        'Sahaja Yoga - Durch die authentische Kundalini-Energie zum gedankenfreien Bewusstsein und Yoga-Samadhi (Peter Jakob)'
      ],
      imageUrl: imageUrls.yogaWorld,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'woy-home',
          label: 'Offizielle Homepage',
          url: 'https://yogaworld.de/messe/'
        }
      ]
    },
    {
      _type: 'newsletterCard',
      _key: 'lange-nacht-der-musik',
      eyebrow: 'Vorschau auf Mai 2026',
      title: 'Die Lange Nacht der Musik, München',
      subtitle: 'Im Sahaja-Yoga Zentrum München',
      body:
        'Wir sind wieder dabei! "Where Sound sparks Magic" – selten zu hören, entfaltet die 96-saitige Santur indische Klassik in betörender Form. Zeitlose Musik ohne Allüren, die das Herz berührt.',
      points: [
        '20:00 - 22:30h The Spirit of the Santur',
        'Maestro Pt. Abhay Sopori (Santur), Daniel Brunner (Santur), Chanchal Singh (Tabla)',
        '22:45 – 01:00h Music of Joy - Indische devotionale Musik & Meditation',
        'Im Sahaja-Yoga Zentrum München'
      ],
      imageUrl: imageUrls.langeNacht,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'lange-nacht-home',
          label: 'Offizielle Homepage',
          url: 'https://www.muenchner.de/musiknacht'
        },
        {
          _type: 'newsletterLink',
          _key: 'abhay-bio',
          label: 'Biographie - Abhay Sopori',
          url: 'https://europetour2026.my.canva.site/profile'
        },
        {
          _type: 'newsletterLink',
          _key: 'tour-page',
          label: 'Tour Page 2026',
          url: 'https://europetour2026.my.canva.site/'
        }
      ]
    }
  ],
  scheduleHeading: 'Wöchentliche Meditationsabende im SY Zentrum München',
  munichSchedule: [
    {
      _type: 'newsletterScheduleItem',
      _key: 'monday',
      day: 'Montag',
      time: '19:30 Uhr',
      description: 'MEDITIAMO MONACO! Meditationskurs in Italienisch.',
      contact: 'Anmeldung Whatsapp 0160 97055063'
    },
    {
      _type: 'newsletterScheduleItem',
      _key: 'tuesday',
      day: 'Dienstag',
      time: '18:30 - 20:00 Uhr',
      description:
        'Meditation in English, no registration required, not in school holidays!',
      contact: 'Info 0157 54745594'
    },
    {
      _type: 'newsletterScheduleItem',
      _key: 'thursday',
      day: 'Donnerstag',
      time: 'ab 19:30 Uhr',
      description:
        'Offene Meditationsgruppe (Sahaja-Yoga Wissen und geleitete Meditationen).',
      contact: 'Info 089 33 36 29, 0170 3044451'
    },
    {
      _type: 'newsletterScheduleItem',
      _key: 'friday',
      day: 'Freitag',
      time: 'ab 19:30 Uhr',
      description:
        'Meditationskurs "International" (Vorträge und geleitete Meditationen).',
      contact: 'Anmeldung & Info: 0176 94169665 (Whatsapp)'
    },
    {
      _type: 'newsletterScheduleItem',
      _key: 'saturday',
      day: 'Samstag',
      time: '18:30 Uhr',
      description: 'Geleitete Meditation für leicht Fortgeschrittene.',
      contact:
        'Nur mit Anmeldung 0152 26788461 oder anmeldung@meditationmuenchen.org'
    }
  ],
  regionalHeading: 'Wöchentliche Meditationsabende in Süd-Deutschland',
  regionalLinks: [
    { _type: 'newsletterLink', _key: 'regensburg', label: 'Regensburg' },
    { _type: 'newsletterLink', _key: 'nuernberg', label: 'Nürnberg' },
    { _type: 'newsletterLink', _key: 'augsburg', label: 'Augsburg' },
    { _type: 'newsletterLink', _key: 'stuttgart', label: 'Stuttgart' },
    { _type: 'newsletterLink', _key: 'aalen-ulm', label: 'Aalen Ulm' }
  ],
  retrospectiveHeading: 'Veranstaltungsrückblicke',
  retrospectiveCards: [
    {
      _type: 'newsletterCard',
      _key: 'music-meditation',
      eyebrow: '19.12.2025',
      title: 'Musik & Meditation, SY Zentrum München',
      body:
        'Am 19.12.2025 fand im SY Zentrum München wieder eine sehr gelungene Fusion aus indischer klassischer Musik mit der authentischen, leicht zu erlernenden Sahaja-Yoga-Meditation statt. Bei der angeleiteten Meditation zur Selbstverwirklichung wurde die Evolutionskraft Kundalini spontan erweckt und die virtuos gespielten Ragas unterstützten zusätzlich die Wirkung der Gedankenstille.\n\nDie Teilnehmer/innen wurden durch die Kombination aus Musik & Meditation tief in ihren Herzen berührt und einige kündigten an, sich in der Erfahrung vertiefen zu wollen. Unsere Wertschätzung gebührt den jungen Künstlern und natürlich Shri Mataji als der Mutter der Kundalini-Energie.',
      imageUrl: imageUrls.musicMeditation,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'album-music',
          label: 'Gesamtes Fotoalbum',
          url: 'https://photos.app.goo.gl/Y49qA2kDJZmQ4YmK9'
        }
      ]
    },
    {
      _type: 'newsletterCard',
      _key: 'intersana',
      eyebrow: '30.01.-01.02.2026',
      title: 'Gesundheitsmesse INTERSANA Messe Augsburg',
      body:
        'Drei Tage lang war die Messe Augsburg das Zentrum für Inspiration, Information und Austausch. Der gemeinsame Messeverbund aus A\FAIR – Deine Augsburger Erlebnismesse, Immobilientage Augsburg, VOLT Future Mobility, CREATIVMESSE und der Gesundheitsmesse Intersana hat sich als modernes, starkes Veranstaltungsformat für die gesamte Region präsentiert.\n\nMitten drin war der Sahaja Yoga Stand, der stets gut frequentiert war und uns die Gelegenheit bot, auf die positiven Gesundheitsaspekte von Meditation hinzuweisen. Viele Besucher kamen dabei zum ersten Mal mit ihrer eigenen Evolutionskraft Kundalini in Berührung, und zahlreiche Leute spürten sogar die heilsame Gedankenfreiheit und die stresslösende innere Stille.',
      imageUrl: imageUrls.intersana,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'album-intersana',
          label: 'Gesamtes Fotoalbum',
          url: 'https://photos.app.goo.gl/HQdqKPXPuzzmUqZP7'
        }
      ]
    },
    {
      _type: 'newsletterCard',
      _key: 'energetika',
      eyebrow: '20.-22.02.2026',
      title: 'Alternative Gesundheitsmesse ENERGETIKA, Bobingen bei Augsburg',
      body:
        'Sahaja Yoga war von 20. bis 22. Februar 2026 zum ersten Mal bei der Gesundheitsmesse Energetika in Bobingen bei Augsburg vertreten, präsentierte sich mit einem Info- & Meditationsstand und zwei Vorträgen mit geleiteten Meditationen.\n\nViele Besucher informierten sich und lernten ihre eigene Kundalini-Energie kennen, durch die viele sogar die Verbindung mit ihrem höheren Selbst wahrnehmen konnten. Einige kündigten an, sich bei den Folgeprogrammen mehr in dieser Meditationserfahrung vertiefen zu wollen.',
      imageUrl: imageUrls.energetika,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'album-energetika',
          label: 'Gesamtes Fotoalbum',
          url: 'https://photos.app.goo.gl/LJRQAY7T2288cEX17'
        }
      ]
    }
  ],
  newsHeading: 'Aktuelles & News',
  newsCards: [
    {
      _type: 'newsletterCard',
      _key: 'diversity-tag',
      title:
        'Sahaja Yoga beteiligte sich am Diversity-Tag im Alten Rathaus München und erhält Anerkennungs-Brief der Landeshauptstadt',
      body:
        'Sahaja Yoga beteiligte sich am Diversity-Tag im Alten Rathaus München und erhielt einen Anerkennungs-Brief der Landeshauptstadt. Begleitend dazu wurde auf die religiös-weltanschauliche Vielfältigkeit Münchens hingewiesen.',
      imageUrl: imageUrls.diversity,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'broschuere',
          label: 'Broschüre: Die religiös-weltanschauliche Vielfältigkeit Münchens',
          url: 'https://www.meditationmuenchen.org/wp-content/uploads/2026/01/Broschuere_Die-religioes-weltanschauliche-Vielfaeltigkeit-Muenchens.pdf'
        }
      ]
    },
    {
      _type: 'newsletterCard',
      _key: 'shri-mataji-day',
      title: '„Shri Mataji Nirmala Devi Day“ in New Milford, New Jersey',
      body:
        'Am bevorstehenden 103. Geburtstag von Shri Mataji am 21. März 2026 hat die Stadt New Milford, New Jersey, USA offiziell den „Shri Mataji Nirmala Devi Day“ ausgerufen. Im alten Newsletter wurde dazu auch das Video der Ratssitzung verlinkt, in der dieser Tag ausgerufen wurde.',
      imageUrl: imageUrls.cbc,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'shri-day-video',
          label: 'Video der Ratssitzung',
          url: 'https://youtu.be/3n-k6ONuLAo?is=cy1zDWfP46o-4kVf'
        }
      ]
    },
    {
      _type: 'newsletterCard',
      _key: 'cbc-news',
      title: 'Report @CBC News channel about Sahaja Yoga "DEVI SCHOOL" in Nova Scotia, Canada',
      body:
        'Someone reported an airplane crash in area near the Sahaja Yoga DEVI SCHOOL in Nova Scotia, Canada, so the National TV sent a news team there to report about it. That info turned out to be fake - there was no airplane crash. While the news team was there, they saw all these interesting young students from all over the world and started interviewing them and the staff.',
      imageUrl: imageUrls.cbc,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'cbc-watch',
          label: 'CBC News Clip',
          url: 'https://www.youtube.com/live/GY5y59BGSx0?t=1022s'
        },
        {
          _type: 'newsletterLink',
          _key: 'cbc-written',
          label: 'CBC News - written report',
          url: 'https://www.cbc.ca/news/canada/nova-scotia/devi-international-boarding-school-rural-nova-scotia-mill-village-9.7054467'
        }
      ]
    },
    {
      _type: 'newsletterCard',
      _key: 'new-app',
      title: 'NEW Meditation App',
      body:
        'Die neue e-meditate website + App erweitert den digitalen Zugang zu Meditation und geführter Praxis.',
      imageUrl: imageUrls.app,
      links: [
        {
          _type: 'newsletterLink',
          _key: 'emeditate',
          label: 'NEW e-meditate website + App download',
          url: 'https://chat.emeditate.ai'
        }
      ]
    }
  ],
  recommendedHeading: 'Empfohlene Internetseiten',
  recommendedLinks: [
    {
      _type: 'newsletterLink',
      _key: 'nirananda',
      label: 'Nirananda-Media - Bücherportal',
      url: 'https://www.nirananda-media.de'
    },
    {
      _type: 'newsletterLink',
      _key: 'learn-sahaja',
      label: 'Learn Sahaja Yoga',
      url: 'https://www.learnsahajayoga.org'
    },
    {
      _type: 'newsletterLink',
      _key: 'online-meditation',
      label: 'Online Meditationskurs und geleitete Meditationen',
      url: 'https://www.onlinemeditation.org'
    },
    {
      _type: 'newsletterLink',
      _key: 'sahaja-online',
      label: 'Sahaja Online',
      url: 'https://sahajaonline.com'
    },
    {
      _type: 'newsletterLink',
      _key: 'wemeditate',
      label: 'WeMeditate - Guided Meditations',
      url: 'https://wemeditate.com'
    },
    {
      _type: 'newsletterLink',
      _key: 'shrimatiji',
      label: 'Internetseite über Shri Mataji und Ihr Wirken',
      url: 'https://www.shrimataji.org'
    },
    {
      _type: 'newsletterLink',
      _key: 'videos-de',
      label: 'VIDEOS von Shri Matajis Reden mit deutscher Übersetzung',
      url: 'https://www.youtube.com/playlist?list=PL4837850DE9322E4C'
    }
  ],
  donationHeading: 'Sahaja Yoga Kultur e.V. ist ein GEMEINNÜTZIGER VEREIN',
  donationBody:
    'Sahaja Yoga hat den offiziellen Gemeinnützigkeits-Status, finanziert sich ausschließlich durch freiwillige Spenden und alle Aktivist/innen in Deutschland sind ehrenamtlich tätig.',
  donationDetails: [
    'Spenden für Raummieten bitte per Dauerauftrag oder Einzelüberweisung an:',
    'Sahaja Yoga Kultur e.V. (gemeinnützig, mit Spendenquittung)',
    'Verwendungszweck: „Spende München“',
    'IBAN: DE16 5005 0201 0200 8413 60',
    'BIC: HELADEF1822'
  ],
  contactHeading: 'Sahaja Yoga Zentrum München',
  contactDetails: [
    'Am Lilienberg 2a, 81669 München',
    'Mobil & Whatsapp: 0176 94169665',
    'anmeldung@meditationmuenchen.org',
    'Einstieg jederzeit möglich, alle Meditationskurse auf Spendenbasis.'
  ],
  footerNote: 'Official Partner of UNESCO Body & Mind Wellness Club',
  footerLinks: [
    {
      _type: 'newsletterLink',
      _key: 'homepage-muenchen',
      label: 'Homepage München',
      url: 'https://www.meditationmuenchen.org/'
    },
    {
      _type: 'newsletterLink',
      _key: 'homepage-deutschland',
      label: 'Homepage Deutschland',
      url: 'https://www.sahajayoga.de/'
    },
    {
      _type: 'newsletterLink',
      _key: 'datenschutz',
      label: 'Datenschutzerklärung',
      url: 'https://www.meditationmuenchen.org/datenschutzerklaerung/'
    }
  ],
  sourceUrl,
  legacyImport: {
    _type: 'reference',
    _ref: 'legacy-html-sahaja-yoga-newsletter-01-2026'
  }
};

await client.createOrReplace(doc);

console.log(`Seeded newsletter into ${projectId}/${dataset}: ${doc._id}`);

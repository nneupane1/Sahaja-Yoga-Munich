import chakraChartImg from '../assets/sahajayogade/das-subtile-system-grafik.jpg';
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
import mooladharaImg from '../assets/sahajayogade/chakras-inside-img-01-600x338-1.jpg';
import swadisthanImg from '../assets/sahajayogade/chakras-inside-img-02-600x338-1.jpg';
import nabhiImg from '../assets/sahajayogade/chakras-inside-img-03-600x338-1.jpg';
import voidImg from '../assets/sahajayogade/Void.png';
import anahatImg from '../assets/sahajayogade/Bildschirmfoto-2022-03-25-um-08.59.55.png';
import vishuddhiImg from '../assets/sahajayogade/Bildschirmfoto-2022-03-25-um-09.00.53.png';
import agnyaImg from '../assets/sahajayogade/chakras-inside-img-07-600x338-1.jpg';
import sahasraraImg from '../assets/sahajayogade/chakras-inside-img-08-600x338-1.jpg';
import mooladharaHoverImg from '../assets/m.png';
import swadisthanaHoverImg from '../assets/swad.png';
import nabhiHoverImg from '../assets/nabh.png';
import voidHoverImg from '../assets/voi.png';
import heartHoverImg from '../assets/anahat.png';
import vishuddiHoverImg from '../assets/vis.png';
import agnyaHoverImg from '../assets/ajna.png';
import sahasraraHoverImg from '../assets/sahasr.png';
import type { TopicPageData } from './topicPages';

export const topicPagesEn = {
  kundalini: {
    route: '/kundalini-energiesystem',
    navLabel: 'Kundalini & Energy System',
    heroEyebrow: 'The Subtle System',
    title: 'Kundalini, Nadis & Chakras',
    intro:
      'The subtle system is the fine network of Kundalini, channels and centres aligned with the nervous system. At the heart of it lies Kundalini as the power of pure desire, a maternal spiritual energy long dormant and sleeping in three and a half coils within the triangular sacrum bone. It is described as the same miraculous Divine force that allows the baby to grow in the mother’s womb and later remains encoded in the sacrum as Kundalini, the cosmic energy that forms an inner universe within the human being. Once awakened, what seemed abstract becomes perceptible in meditation, so that balance, blockage and subtle quality can be felt directly.',
    heroPanelText:
      'The system can be understood like a wheel: at the outer edge there is disturbance, at the centre there is peace. Sahaja Yoga draws attention toward that centre as Kundalini nourishes the middle channel and restores the chakras to a more natural state of harmony. Its awakening is presented here as the inner event toward which many religious and spiritual traditions have pointed in different language.',
    heroTags: ['Kundalini', 'Nadis', 'Chakras'],
    heroImage: chakraChartImg,
    heroImageAlt: 'Subtle system diagram',
    heroImageCaption:
      'This diagram presents the subtle system as one living map in which centres, channels and Kundalini belong to a single inner process.',
    heroImageMode: 'contain',
    highlights: [
      {
        title: 'A Subtle Network',
        description:
          'Kundalini, nadis and chakras form a coherent inner network rather than a set of isolated symbols.'
      },
      {
        title: 'Centred Attention',
        description:
          'The channels show whether attention is being pulled into emotion, over-activity or the stillness of the present.'
      },
      {
        title: 'Qualities That Can Mature',
        description:
          'Each chakra expresses a human quality, and when Kundalini nourishes the centres those qualities become more stable, embodied and visible.'
      }
    ],
    showcases: {
      eyebrow: 'The Three Nadis',
      title: 'How attention moves through the inner system',
      description:
        'The visual language makes it clear that the nadis are not decorative lines. They describe three actual movements of attention: feeling and the past, action and the future, and the centred current of inner evolution.',
      items: [
        {
          title: 'Left Channel',
          label: 'Ida Nadi',
          description:
            'The lunar channel carries desire, memory and emotional depth. In balance it expresses joy, softness and compassion.',
          image: leftChannelImg,
          alt: 'Left channel diagram',
          hoverBackgroundImage: leftChannelImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Right Channel',
          label: 'Pingala Nadi',
          description:
            'The solar channel supplies planning, dynamism and mental force. In a healthy state it acts efficiently without becoming harsh or strained.',
          image: rightChannelImg,
          alt: 'Right channel diagram',
          hoverBackgroundImage: rightChannelImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Central Channel',
          label: 'Sushumna Nadi',
          description:
            'Through the middle channel Kundalini rises. Here attention stops swinging between past and future and settles into presence.',
          image: kundaliniEnergyImg,
          alt: 'Central channel diagram',
          hoverBackgroundImage: kundaliniEnergyImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        }
      ]
    },
    gallery: {
      eyebrow: 'The Centres of the System',
      title: 'Seven main chakras and the field of the Void',
      description:
        'Each centre has a subtle quality and a bodily correspondence. When a chakra is strained the effect often appears in behaviour, relationship or physiology; when it is nourished, the same quality becomes a strength.',
      items: [
        {
          title: 'Mooladhara',
          subtitle: 'Innocence, wisdom, direction',
          description:
            'The foundation of the system. It protects inborn dignity, childlike purity and harmony with nature, and is linked physically with reproductive and excretory functions.',
          image: mooladharaImg,
          alt: 'Mooladhara chakra',
          hoverBackgroundImage: mooladharaHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Swadisthana',
          subtitle: 'Creativity, spontaneity, attention',
          description:
            'This centre energises thinking and doing. In balance it expresses creativity, appreciation of beauty, clear perception and undisturbed attention.',
          image: swadisthanImg,
          alt: 'Swadisthana chakra',
          hoverBackgroundImage: swadisthanaHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Nabhi',
          subtitle: 'Contentment, care, peace',
          description:
            'Nabhi governs digestion, metabolism and the way we relate to worldly needs. It supports satisfaction, righteousness, family stability and joy.',
          image: nabhiImg,
          alt: 'Nabhi chakra',
          hoverBackgroundImage: nabhiHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Void',
          subtitle: 'Self-discipline, dignity, search for truth',
          description:
            'The Void is the field in which unilluminated knowledge is transformed into real understanding. Here self-mastery, patience and spiritual seriousness develop.',
          image: voidImg,
          alt: 'Void region',
          hoverBackgroundImage: voidHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Heart',
          subtitle: 'Love, compassion, security',
          description:
            'The heart opens unconditional love, trust and inner security. On the physical level it supports the heart, lungs, chest and the body’s protective strength.',
          image: anahatImg,
          alt: 'Heart chakra',
          hoverBackgroundImage: heartHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Vishuddi',
          subtitle: 'Communication, diplomacy, collectivity',
          description:
            'This centre refines speech, humour, respect and relational intelligence. It helps tension dissolve without losing dignity or connection.',
          image: vishuddhiImg,
          alt: 'Vishuddi chakra',
          hoverBackgroundImage: vishuddiHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Agnya',
          subtitle: 'Forgiveness, silence, inner space',
          description:
            'Agnya is the gateway to thought-free stillness. It balances ego and conditioning and becomes clear when genuine forgiveness is possible.',
          image: agnyaImg,
          alt: 'Agnya chakra',
          hoverBackgroundImage: agnyaHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        },
        {
          title: 'Sahasrara',
          subtitle: 'Integration, unity, connectedness',
          description:
            'At the highest centre all aspects of the system come together. Here connection with the all-pervading power is experienced as unity, meaning and integration.',
          image: sahasraraImg,
          alt: 'Sahasrara chakra',
          hoverBackgroundImage: sahasraraHoverImg,
          hoverBackgroundImageMode: 'contain',
          hoverBackgroundFrameClassName:
            'bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(226,243,255,0.92))] p-1',
          hoverBackgroundImageClassName: 'scale-[0.99] group-hover:scale-[1.02]'
        }
      ]
    },
    sections: [
      {
        id: 'kundalini',
        to: '/kundalini-energiesystem/kundalini',
        navLabel: 'Kundalini',
        eyebrow: 'Inner Source',
        title: 'Kundalini is the resting power that brings the whole system to life',
        description: [
          'Kundalini is described as an inborn, indestructible energy resting, dormant and sleeping in three and a half coils within the triangular sacrum bone. At the same time it is presented as the power of pure desire and as a maternal spiritual energy, not something imported from outside but as the continuation of that same Divine force which allows the baby to grow in the mother’s womb and later remains encoded in the sacrum as the cosmic source of inner unfolding.',
          'When it awakens, it rises through the central channel and nourishes the chakras. This ascent is described like a second birth: what has long been ripening unseen within the person comes into a new life of the spirit from Mooladhara to Sahasrara.',
          'Its tone matters: Kundalini is presented as intelligent and gentle. It does not act violently, but in a way that allows the system to reorder itself naturally. Where it meets burdens in the centres, warmth may be felt; on the hands and fingertips coolness, warmth or tingling may appear as subtle feedback. In this view it heals, improves and blesses life by gradually freeing attention from crude entanglement with material pressures.'
        ],
        sideTitle: 'Key Characteristics',
        sideItems: [
          'Already present within every person',
          'Rises through the Sushumna and nourishes the centres',
          'Its awakening has long been treated as a true goal of spiritual life',
          'Its clearing is often felt directly in the hands and fingertips'
        ],
        note:
          'In this view Kundalini is neither metaphor nor suggestion, but the living force behind Self-Realization.'
      },
      {
        id: 'nadis',
        to: '/kundalini-energiesystem/kanaele-und-balance',
        navLabel: 'Channels & Balance',
        eyebrow: 'Ida, Pingala, Sushumna',
        title: 'The three nadis reveal where our attention is moving',
        description: [
          'The left channel stands for emotion, desire and relation to the past. Its pure quality is joy; when disturbed it can appear as heaviness, guilt or emotional withdrawal.',
          'The right channel supplies action, planning and mental dynamism. In balance it is clear and effective, while overuse tends to produce tension, irritability or aggression.',
          'The central channel is the way of equilibrium. It is where Kundalini rises and where attention stops oscillating between past and future. In meditation this balance is also said to become readable in the hands and fingertips.'
        ],
        sideTitle: 'Channel Qualities',
        sideItems: [
          'Ida: joy, feeling, memory, lunar quality',
          'Pingala: action, analysis, future, solar quality',
          'Sushumna: centre, evolution, present awareness, peace',
          'Hands and fingertips mirror left, right and central tendencies'
        ],
        note:
          'The nadis make visible that spiritual balance is always also a balance of attention.'
      },
      {
        id: 'chakren',
        to: '/kundalini-energiesystem/chakren-und-qualitaeten',
        navLabel: 'Chakras',
        eyebrow: 'The centres of the human being',
        title: 'The chakras connect physiology, character and spiritual maturation',
        description: [
          'The seven main chakras lie along the spine and correspond with major nerve plexuses. Each one influences physical functions as well as a distinct inner quality.',
          'In this view, many disturbances in life can be read as imbalance in one or more centres. As Kundalini rises, the chakras are not forced but nourished back toward their natural potential.',
          'That is why chakra knowledge here is not abstract symbolism. It is a precise language for understanding how personality, health and meditation interrelate. Because the centres are reflected in the hands and fingertips, warmth, coolness or tingling during meditation are treated as fine signs of inner purification.'
        ],
        sideTitle: 'Logic of Ascent',
        sideItems: [
          'Each chakra carries both a subtle quality and a bodily manifestation',
          'Void, Nabhi and Swadisthana work as an integrated group',
          'From Mooladhara to Sahasrara, development is treated as nourishment rather than force',
          'The fingertips and hands are treated as a readable map of subtle condition'
        ],
        note:
          'The centres read like an inner map: from innocence and creativity through security, communication and forgiveness into integration.'
      }
    ],
    closing: {
      title: 'The subtle system becomes alive when it is not only explained, but felt',
      description:
        'Kundalini, nadis and chakras together provide a precise framework for meditation, character formation and inner health. Their strength lies in joining structure with experience: one learns not only concepts, but a felt language of the inner system.',
      points: [
        'Kundalini frames awakening as a natural inner event.',
        'The nadis explain how joy, action and presence move in and out of balance.',
        'The chakras make human qualities concrete, physiological and meditatively readable.'
      ]
    }
  },
  selfRealization: {
    route: '/selbstverwirklichung-meditation',
    navLabel: 'Self-Realization & Meditation',
    heroEyebrow: 'Higher Consciousness',
    title: 'Self-Realization & Meditation',
    intro:
      'Self-Realization is presented here as the true enabler of meditation. It begins with Kundalini, dormant and sleeping in three and a half coils within the triangular sacrum bone as a maternal spiritual energy and the power of pure desire. This is understood as the same Divine force that once nourished the child in the mother’s womb and later remains encoded in the sacrum as the cosmic energy of inner awakening. When it awakens from within, it relieves attention from the constant pressure of thought, ego, conditioning and emotional overreaction, lifting it into a quieter and higher state of consciousness.',
    heroPanelText:
      'The process is described in unusually concrete terms: as Kundalini rises through the central channel and pierces the chakras, it stretches the field of attention upward like a tent lifted by its pole. This same movement is also compared to an inner birth: just as a baby ripens in the mother’s womb and is born, consciousness ripens through the ascent from Mooladhara to Sahasrara into a second birth. Where the energy meets negativity, warmth may arise, and in the hands and fingertips coolness, warmth or tingling are treated as subtle signs of this clearing.',
    heroTags: ['Self-Realization', 'Thoughtless Awareness', 'Daily Practice'],
    heroImage: redSunsetImg,
    heroImageAlt: 'Self realization visual',
    heroImageCaption:
      'Self-Realization marks the moment when attention is lifted from within into a higher and quieter mode of consciousness.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'Attention Is Relieved',
        description:
          'Attention is freed from the constant bombardment of thoughts, ego and superego, making a higher state of awareness genuinely possible.'
      },
      {
        title: 'The Energy Carries the Process',
        description:
          'Thoughtlessness is not meant to be forced at the mental level. The rising inner energy does much of the work, carrying attention beyond the ordinary stream of thought.'
      },
      {
        title: 'Practice Stabilises the State',
        description:
          'With regular meditation, a passing glimpse of silence gradually becomes steadier, deeper and more available in daily life.'
      }
    ],
    showcases: {
      eyebrow: 'Inner Experience Made Visible',
      title: 'From first awakening to mature meditation practice',
      description:
        'The imagery joins the first inner breakthrough with thoughtless awareness, subtle perception and home practice. The path is shown not as a single event but as an experience meant to grow into a way of living.',
      items: [
        {
          title: 'The Enabling Moment',
          label: 'Self-Realization',
          description:
            'Self-Realization appears as the decisive moment in which inner energy begins to lift attention and the subtle architecture becomes experientially real.',
          image: lotusImg,
          alt: 'Self realization'
        },
        {
          title: 'Thoughtless Awareness',
          label: 'Fourth State of Consciousness',
          description:
            'Thoughtlessness is described not as dullness but as a lucid, quiet and fully wakeful mode of presence.',
          image: shriMatajiImg,
          alt: 'Thoughtless awareness'
        },
        {
          title: 'Kundalini Rising',
          label: 'Inner Dynamics',
          description:
            'Kundalini is presented as the living inner movement that rises through the middle, pierces the centres and reorganises awareness from within.',
          image: kundaliniEnergyImg,
          alt: 'Kundalini rising'
        }
      ]
    },
    process: {
      eyebrow: 'Meditative Sequence',
      title: 'From Self-Realization to stable inner stillness',
      description:
        'Meditation is described as a recognisable inner process: the awakening begins it, the ascent of Kundalini opens it, and daily practice makes it increasingly stable.',
      items: [
        {
          step: '01',
          title: 'Attention is released from mental pressure',
          description:
            'The pressure of ego, superego, memory and reactive thinking loosens its hold on attention.'
        },
        {
          step: '02',
          title: 'Kundalini rises through Sushumna and the chakras',
          description:
            'The inner energy rises through the central channel, pierces the centres and stretches the field of attention upward like a tent.'
        },
        {
          step: '03',
          title: 'At Sahasrara thoughtlessness becomes real',
          description:
            'As the energy moves beyond Agnya toward Sahasrara, attention becomes quieter, more present and less crowded by internal commentary.'
        },
        {
          step: '04',
          title: 'Daily and collective practice deepen it',
          description:
            'Morning and evening meditation, together with collective practice, turn a brief glimpse of silence into something stronger and more enduring.'
        }
      ]
    },
    sections: [
      {
        id: 'selbstverwirklichung',
        to: '/selbstverwirklichung-meditation/selbstverwirklichung',
        navLabel: 'Self-Realization',
        eyebrow: 'The Catalyst',
        title: 'Self-Realization lifts attention into a higher plane of consciousness',
        description: [
          'Attention can only rise when it is no longer continuously overrun by thought, ego and superego. Self-Realization is the opening that makes such a shift possible.',
          'As Kundalini rises through the central channel and pierces the chakras, the field of attention is stretched upward from within. It begins to separate from its habitual knot of thought, memory and immediate emotional reaction. This ascent is treated as the spiritual equivalent of something growing inwardly and coming to birth.',
          'Self-Realization therefore appears not as a symbolic blessing, but as a living inner event through which meditation becomes experientially real. In this view, something long sought in the world’s spiritual traditions becomes a present possibility.'
        ],
        sideTitle: 'Core Ideas',
        sideItems: [
          'Attention is the carrier of consciousness',
          'Kundalini raises that attention through the middle channel',
          'The first awakening is the beginning of a longer process'
        ],
        note:
          'The image of a tent being raised from within captures the widening of attention with unusual clarity: the person does not pull attention upward by force; the energy lifts it.'
      },
      {
        id: 'gedankenfreiheit',
        to: '/selbstverwirklichung-meditation/gedankenfreie-stille',
        navLabel: 'Thought-Free Stillness',
        eyebrow: 'Thoughtless Awareness',
        title: 'Thoughtlessness is silent wakefulness, not emptiness',
        description: [
          'Thoughtless awareness is neither sleep, trance nor ordinary waking. It is described as a fourth state of consciousness in which the brain continues to function but the inner dialogue loses its dominance.',
          'Because attention is no longer crowded by the usual stream of thoughts, observation becomes cleaner. Thoughts and feelings begin to appear more as contents in awareness than as forces we must instantly obey.',
          'For that reason the state is treated as much more than relaxation. It is spiritually significant, psychologically clarifying and practically transformative.'
        ],
        sideTitle: 'Qualities of This State',
        sideItems: [
          'Wakeful and present rather than dull or sleepy',
          'Quiet inwardly without leaving reality behind',
          'Observation without immediate identification or reaction'
        ],
        note:
          'Thoughtless awareness is explicitly presented as a distinct higher state of consciousness, not simply a side effect of resting.'
      },
      {
        id: 'praxis',
        to: '/selbstverwirklichung-meditation/meditationspraxis',
        navLabel: 'Meditation in Daily Life',
        eyebrow: 'Deepening',
        title: 'Regular meditation makes the experience stable and practical',
        description: [
          'After the first awakening, a simple daily rhythm is recommended: a quiet place, ideally morning and evening, often in short periods of around ten to twenty minutes.',
          'The sitting begins with relaxation and raising the inner energy. Instead of fighting thoughts, one lets them pass and allows the energy to do the deeper work.',
          'Over time sensations in the palms or fingertips become clearer: warmth, coolness or tingling are treated as subtle feedback about the inner state, and collective meditation is said to accelerate and stabilise this process.'
        ],
        sideTitle: 'Effects of Regular Practice',
        sideItems: [
          'Morning and evening, but without rigid harshness',
          'The energy works; thoughts are observed rather than fought',
          'Collective meditation accelerates and stabilises growth'
        ],
        note:
          'The practice is not meant to become mechanical: experience comes before theory, and steadiness grows best through enjoyment of the state itself.'
      }
    ],
    closing: {
      title: 'Meditation is described here as a gradual evolution of consciousness',
      description:
        'Self-Realization, thoughtless awareness and daily practice form a coherent path. The first awakening of Kundalini, the relief of attention and the regular rhythm of meditation at home or in collectivity are presented as successive stages of a living inner development.',
      points: [
        'Self-Realization raises attention beyond the ordinary stream of thought.',
        'Thoughtless awareness is treated as a fourth, silent and highly wakeful state.',
        'Regular practice makes the experience concrete, embodied and more enduring.'
      ]
    }
  },
  science: {
    route: '/wissenschaft-spiritualitaet',
    navLabel: 'Science & Spirituality',
    heroEyebrow: 'Verifiable Experience',
    title: 'Science & Spirituality',
    intro:
      'Meditation need not be reduced to a mere relaxation response. At the centre lies a real state of consciousness whose subjective richness and objective correlates can be considered together.',
    heroPanelText:
      'This approach builds a precise bridge: thoughtless awareness is treated as a genuine experience, while modern neuroimaging, EEG and broader research are seen as ways to investigate its accompanying patterns.',
    heroTags: [],
    heroImage: universeImg,
    heroImageAlt: 'Cosmic image for science and consciousness',
    heroImageCaption:
      'Science and spirituality are framed here within a wider field: inner experience, consciousness and order are approached as parts of a larger whole.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'More Than Relaxation',
        description:
          'The scientific view shifts meditation beyond physiology alone toward an experiential transformation of consciousness.'
      },
      {
        title: 'Objective Correlates',
        description:
          'Electrical brain activity and neurophysiological measures are treated as meaningful ways of studying meditative states.'
      },
      {
        title: 'Holistic Integration',
        description:
          'Health, consciousness and the subtle system are approached as interrelated rather than isolated domains.'
      }
    ],
    showcases: {
      eyebrow: 'Scientific Framing',
      title: 'Inner experience is placed alongside observable change',
      description:
        'What matters here is not speculation, but a practice that can be lived, described and investigated from more than one angle.',
      items: [
        {
          title: 'Thoughtless Awareness',
          label: 'State of Consciousness',
          description:
            'Thoughtlessness is presented as a real condition of calm, alert and intuitive awareness, not a vague abstraction.',
          image: beeImg,
          alt: 'Thoughtless awareness state'
        },
        {
          title: 'Subtle Map',
          label: 'Systemic View',
          description:
            'The chakra chart presents spirituality as an organised inner system rather than a diffuse metaphor.',
          image: universeImg,
          alt: 'Chakra chart'
        },
        {
          title: 'Balance and Tendencies',
          label: 'Regulation',
          description:
            'The interplay of left, right and centre offers a model for energetic and psychological regulation.',
          image: mother3Img,
          alt: 'Balance of tendencies'
        }
      ]
    },
    process: {
      eyebrow: 'From Relaxation to Consciousness Research',
      title: 'The argument develops in a clear sequence',
      description:
        'The scientific presentation moves from an older definition of meditation toward a more nuanced understanding of attention and consciousness.',
      items: [
        {
          step: '01',
          title: 'Meditation is redefined',
          description:
            'The suspension of the thought stream is brought to the centre of meditation, not just bodily relaxation.'
        },
        {
          step: '02',
          title: 'Thoughtlessness is treated as real',
          description:
            'Thoughtless awareness is described as a verifiable human experience rather than an esoteric claim.'
        },
        {
          step: '03',
          title: 'Neurophysiology is invited in',
          description:
            'EEG and imaging become a language for examining distinct meditative conditions.'
        },
        {
          step: '04',
          title: 'Health and consciousness are linked',
          description:
            'Meditation is viewed as influencing clarity, regulation and well-being at multiple levels.'
        }
      ]
    },
    sections: [
      {
        id: 'innere-wissenschaft',
        to: '/wissenschaft-spiritualitaet/innere-wissenschaft',
        navLabel: 'Inner Science',
        eyebrow: 'Testable Spirituality',
        title: 'Spirituality is formulated as a discipline that can be experienced and examined',
        description: [
          'The scientific framing asks how meditation should be understood today. It highlights the shift from defining meditation as mere relaxation toward defining it through attention and the suspension of habitual thought.',
          'This matters because it protects meditative experience from being trivialised. Spirituality is not placed against science, but described as a field in which precise inner experience and careful observation can work together.',
          'That gives spirituality a language that feels neither irrational nor dogmatic. It becomes something that can be lived, described and approached with seriousness.'
        ],
        sideTitle: 'Scientific Orientation',
        sideItems: [
          'Meditation is framed through attention and altered consciousness',
          'Experience remains central but is not shielded from examination',
          'Objective observation complements subjective depth'
        ],
        note:
          'Thoughtless awareness is presented as something that belongs within serious modern inquiry, not outside it.'
      },
      {
        id: 'gesundheit-forschung',
        to: '/wissenschaft-spiritualitaet/gesundheit-und-forschung',
        navLabel: 'Health & Research',
        eyebrow: 'Holistic Effect',
        title: 'Research and well-being are brought together through a whole-person view',
        description: [
          'Meditation is not approached as a narrow tool for isolated symptoms. Instead, physical, mental and spiritual processes are seen as interconnected expressions of a larger inner order.',
          'When the subtle system is nourished and integrated, health appears not only as the absence of disturbance but as the presence of coherence. Meditation is therefore understood as structurally harmonising, not simply soothing.',
          'Research remains open and contemporary: quality of life, stress, blood pressure, anxiety and patterns of brain activity all become meaningful areas of inquiry.'
        ],
        sideTitle: 'Research Themes',
        sideItems: [
          'Changes in electrical brain activity',
          'Subjective reports of clarity, calm and self-regulation',
          'Holistic shifts in well-being and inner balance'
        ],
        note:
          'The framework allows contemplative depth and scientific inquiry to illuminate one another.'
      },
      {
        id: 'integration',
        to: '/wissenschaft-spiritualitaet/integration-und-entwicklung',
        navLabel: 'Integration',
        eyebrow: 'Oneness & Coherence',
        title: 'Integration means bringing system, attention and consciousness into coherence',
        description: [
          'Integration is not treated as an abstract idea alone. It refers to a state in which attention, subtle centres and inner responses begin to work together more harmoniously.',
          'That produces more than moments of peace. It establishes a different order within the person: less fragmentation, more steadiness, and a clearer relation between silence and action.',
          'Science and spirituality meet precisely in this question of how a person becomes less divided and more whole. The answer is not only theoretical; it is meant to be lived through meditation.'
        ],
        sideTitle: 'What Integration Means',
        sideItems: [
          'Attention becomes less pendular and more centred',
          'Chakras and channels are understood as one living system',
          'Knowledge becomes a union of experience and observation'
        ],
        note:
          'The strength of this perspective lies in its refusal to separate insight from lived transformation.'
      }
    ],
    closing: {
      title: 'Spirituality is treated here as intellectually serious and experientially grounded',
      description:
        'No hard line is drawn between careful inquiry and inner depth. Thoughtless awareness, subtle balance and well-being are approached as realities that can be lived, described and explored. That is what gives this meeting of science and spirituality its credibility.',
      points: [
        'Meditation is framed through transformation of consciousness, not relaxation alone.',
        'Thoughtless awareness is treated as a real human state.',
        'Health, research and integration appear as one coherent field.'
      ]
    }
  },
  culture: {
    route: '/kultur-des-geistes',
    navLabel: 'Culture of the Spirit',
    heroEyebrow: 'Creativity, Collectivity, Character',
    title: 'Culture of the Spirit',
    intro:
      'Spiritual life need not mean withdrawal from the world. It can also mean the refinement of character, perception and collective life. Creativity, collective meditation and maturity of behaviour become visible expressions of a culture shaped by inner growth.',
    heroPanelText:
      'That is where this cultural vision finds its strength: clearer attention deepens art, shared stillness deepens community, and spiritual life becomes credible when it matures the human being from within.',
    heroTags: ['Creativity', 'Collective Meditation', 'Character'],
    heroImage: lotusImg,
    heroImageAlt: 'Collective meditation',
    heroImageCaption:
      'Collective meditation is presented as a quiet answer to modern isolation: people come together without comparison, noise or hierarchy, and discover belonging through stillness.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'Refined Creativity',
        description:
          'Meditation is linked to a subtler attention that deepens artistic perception, expression and sensitivity.'
      },
      {
        title: 'Collective Belonging',
        description:
          'Shared meditation creates a form of connectedness grounded in silence rather than performance.'
      },
      {
        title: 'Character as Spirituality',
        description:
          'Spiritual life is treated as empty if it does not mature behaviour, quality of relationship and inward truthfulness.'
      }
    ],
    showcases: {
      eyebrow: 'Culture in Images',
      title: 'Perception, stillness and integrity become cultural forms',
      description:
        'Culture of the spirit is not about decoration. It is about the way perception, community and character are transformed by inner refinement.',
      items: [
        {
          title: 'Sharpened Perception',
          label: 'Creative Attention',
          description:
            'Meditation refines awareness and allows subtler detail in art, atmosphere and daily life to become more visible.',
          image: mother1Img,
          alt: 'Improved perception'
        },
        {
          title: 'Stillness in Common',
          label: 'Collective Meditation',
          description:
            'Collective meditation is described as a response to overstimulation, loneliness and contemporary fragmentation.',
          image: motherImg,
          alt: 'Collective meditation'
        },
        {
          title: 'Foundations of Integrity',
          label: 'Spiritual Tenets',
          description:
            'The defining principles of spiritual life place inner truth, maturity and conduct at the centre.',
          image: mother1Img,
          alt: 'Spiritual tenets'
        }
      ]
    },
    process: {
      eyebrow: 'How a Culture of Spirit Emerges',
      title: 'The development follows a clear inner logic',
      description:
        'Creativity, shared practice and character refinement appear as different faces of the same spiritual maturation.',
      items: [
        {
          step: '01',
          title: 'Attention becomes more subtle',
          description:
            'Meditation deepens the ability to notice tone, detail, rhythm and atmosphere in art and life.'
        },
        {
          step: '02',
          title: 'Expression gains depth',
          description:
            'Creative work becomes more resonant because presence and emotional intelligence enter the act of expression.'
        },
        {
          step: '03',
          title: 'Stillness becomes collective',
          description:
            'Shared meditation turns personal practice into belonging, resonance and mutual support.'
        },
        {
          step: '04',
          title: 'Spirituality becomes character',
          description:
            'Compassion, diplomacy, wisdom and self-mastery become the true cultural signs of inner growth.'
        }
      ]
    },
    sections: [
      {
        id: 'kulturelle-integration',
        to: '/kultur-des-geistes/kulturelle-integration',
        navLabel: 'Cultural Integration',
        eyebrow: 'Shared Dignity',
        title: 'Cultural integration grows from inner connectedness',
        description: [
          'People need not be defined by surface identities alone. A deeper bond appears when attention, dignity and mutual respect become more central than difference or comparison.',
          'Collective meditation is presented as a response to a world that is hyper-connected and inwardly fragmented. Its cultural value lies in creating belonging without demanding uniformity.',
          'A culture of the spirit therefore builds spaces in which people can feel linked without noise, hierarchy or ideological pressure. Its integration is quiet, but profound.'
        ],
        sideTitle: 'Integrative Qualities',
        sideItems: [
          'Belonging without comparison or rank',
          'Connectedness through presence rather than ideology',
          'Dignity seen as an inner possibility in every person'
        ],
        note:
          'Shared stillness is treated as a real social response to modern disconnection.'
      },
      {
        id: 'kreativitaet',
        to: '/kultur-des-geistes/kreativitaet',
        navLabel: 'Creativity',
        eyebrow: 'The Creative',
        title: 'Creativity is understood as refined attention made visible',
        description: [
          'Creative expression is presented as something that can give meaning, beauty and connection to life. It is not limited to career or talent, but belongs to the deeper need to express what is true and alive within.',
          'Meditation is linked directly to the refinement of attention. A more present mind sees more, hears more and enters more fully into the act of making. That produces not only better output, but deeper artistic presence.',
          'Creativity therefore becomes more than talent. It becomes the flowering of perception, emotional intelligence and inward stillness through form.'
        ],
        sideTitle: 'What Creativity Gains',
        sideItems: [
          'Greater presence within the creative act',
          'A finer sensitivity to subtle detail',
          'Deeper emotional and atmospheric expression'
        ],
        note:
          'Creative life is linked with a more refined field of awareness rather than mere productivity.'
      },
      {
        id: 'kollektive-meditation',
        to: '/kultur-des-geistes/kollektive-meditation',
        navLabel: 'Collective Meditation',
        eyebrow: 'Shared Stillness',
        title: 'Collective meditation becomes a social expression of spiritual maturity',
        description: [
          'Collective meditation speaks directly to the loneliness and overstimulation of contemporary life. Instead of demanding more performance, it creates a space where people sit together in silence and discover resonance without effort.',
          'What gives this practice its strength is precisely its simplicity. Nothing has to be argued, displayed or defended. People share presence rather than self-presentation.',
          'In that sense, collective meditation becomes a cultural form. It shapes rhythm, belonging and social atmosphere, giving spiritual life a visible communal reality.'
        ],
        sideTitle: 'Its Social Effect',
        sideItems: [
          'Shared practice softens modern disconnection',
          'Stillness becomes a form of mutual resonance',
          'Spiritual life remains personal yet deepens collectively'
        ],
        note:
          'Collective meditation is described as an emerging spiritual rhythm for contemporary life.'
      }
    ],
    closing: {
      title: 'A culture of the spirit means refining perception, deepening community and maturing character',
      description:
        'This cultural vision is both modern and deep. Art becomes more present, community becomes quieter and more real, and spirituality becomes believable when it shows itself in nobler human qualities. That is where a true culture of the spirit comes alive.',
      points: [
        'Creativity grows from refined attention.',
        'Collective meditation gives spiritual life a communal form.',
        'Character development is not an accessory but the substance of culture.'
      ]
    }
  }
} satisfies Record<string, TopicPageData>;

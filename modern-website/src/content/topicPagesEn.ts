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
import type { TopicPageData } from './topicPages';

export const topicPagesEn = {
  kundalini: {
    route: '/kundalini-energiesystem',
    navLabel: 'Kundalini & Energy System',
    heroEyebrow: 'The Subtle System',
    title: 'Kundalini, Nadis & Chakras',
    intro:
      'The subtle system is the fine network of Kundalini, channels and centres aligned with the nervous system. In Sahaja Yoga this does not remain abstract theory: meditation gradually makes this inner architecture perceptible, so that balance, blockage and subtle quality can be felt directly.',
    heroPanelText:
      'The system can be understood like a wheel: at the outer edge there is disturbance, at the centre there is peace. Sahaja Yoga draws attention toward that centre as Kundalini nourishes the middle channel and restores the chakras to a more natural state of harmony.',
    heroTags: ['Kundalini', 'Nadis', 'Chakras'],
    heroImage: chakraChartImg,
    heroImageAlt: 'Subtle system diagram',
    heroImageCaption:
      'This German-source diagram presents the subtle system as one living map in which centres, channels and Kundalini belong to a single inner process.',
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
        'The German visual language makes it clear that the nadis are not decorative lines. They describe three actual movements of attention: feeling and the past, action and the future, and the centred current of inner evolution.',
      items: [
        {
          title: 'Left Channel',
          label: 'Ida Nadi',
          description:
            'The lunar channel carries desire, memory and emotional depth. In balance it expresses joy, softness and compassion.',
          image: leftChannelImg,
          alt: 'Left channel diagram'
        },
        {
          title: 'Right Channel',
          label: 'Pingala Nadi',
          description:
            'The solar channel supplies planning, dynamism and mental force. In a healthy state it acts efficiently without becoming harsh or strained.',
          image: rightChannelImg,
          alt: 'Right channel diagram'
        },
        {
          title: 'Central Channel',
          label: 'Sushumna Nadi',
          description:
            'Through the middle channel Kundalini rises. Here attention stops swinging between past and future and settles into presence.',
          image: kundaliniEnergyImg,
          alt: 'Central channel diagram'
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
          alt: 'Mooladhara chakra'
        },
        {
          title: 'Swadisthana',
          subtitle: 'Creativity, spontaneity, attention',
          description:
            'This centre energises thinking and doing. In balance it expresses creativity, appreciation of beauty, clear perception and undisturbed attention.',
          image: swadisthanImg,
          alt: 'Swadisthana chakra'
        },
        {
          title: 'Nabhi',
          subtitle: 'Contentment, care, peace',
          description:
            'Nabhi governs digestion, metabolism and the way we relate to worldly needs. It supports satisfaction, righteousness, family stability and joy.',
          image: nabhiImg,
          alt: 'Nabhi chakra'
        },
        {
          title: 'Void',
          subtitle: 'Self-discipline, dignity, search for truth',
          description:
            'The Void is the field in which unilluminated knowledge is transformed into real understanding. Here self-mastery, patience and spiritual seriousness develop.',
          image: voidImg,
          alt: 'Void region'
        },
        {
          title: 'Heart',
          subtitle: 'Love, compassion, security',
          description:
            'The heart opens unconditional love, trust and inner security. On the physical level it supports the heart, lungs, chest and the body’s protective strength.',
          image: anahatImg,
          alt: 'Heart chakra'
        },
        {
          title: 'Vishuddi',
          subtitle: 'Communication, diplomacy, collectivity',
          description:
            'This centre refines speech, humour, respect and relational intelligence. It helps tension dissolve without losing dignity or connection.',
          image: vishuddhiImg,
          alt: 'Vishuddi chakra'
        },
        {
          title: 'Agnya',
          subtitle: 'Forgiveness, silence, inner space',
          description:
            'Agnya is the gateway to thought-free stillness. It balances ego and conditioning and becomes clear when genuine forgiveness is possible.',
          image: agnyaImg,
          alt: 'Agnya chakra'
        },
        {
          title: 'Sahasrara',
          subtitle: 'Integration, unity, connectedness',
          description:
            'At the highest centre all aspects of the system come together. Here connection with the all-pervading power is experienced as unity, meaning and integration.',
          image: sahasraraImg,
          alt: 'Sahasrara chakra'
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
          'Kundalini is described as an inborn, indestructible energy resting in the sacrum. It is not something imported from outside, but the hidden source of spiritual unfolding already present within the person.',
          'When it awakens, it rises through the central channel and nourishes the chakras. This makes not only stillness possible, but also a more refined awareness of one’s actual inner condition.',
          'Its tone matters: Kundalini is presented as intelligent and gentle. It does not act violently, but in a way that allows the system to reorder itself naturally.'
        ],
        sideTitle: 'Key Characteristics',
        sideItems: [
          'Already present within every person',
          'Rises through the Sushumna and nourishes the centres',
          'Expresses itself through balance, silence and finer perception'
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
          'The central channel is the way of equilibrium. It is where Kundalini rises and where attention stops oscillating between past and future.'
        ],
        sideTitle: 'Channel Qualities',
        sideItems: [
          'Ida: joy, feeling, memory, lunar quality',
          'Pingala: action, analysis, future, solar quality',
          'Sushumna: centre, evolution, present awareness, peace'
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
          'That is why chakra knowledge here is not abstract symbolism. It is a precise language for understanding how personality, health and meditation interrelate.'
        ],
        sideTitle: 'Logic of Ascent',
        sideItems: [
          'Each chakra carries both a subtle quality and a bodily manifestation',
          'Void, Nabhi and Swadisthana work as an integrated group',
          'From Mooladhara to Sahasrara, development is treated as nourishment rather than force'
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
      'Self-Realization can be understood as the true enabler of meditation. Attention is gradually released from the burden of relentless thought, ego and conditioning, and is raised into a quieter, higher state of consciousness.',
    heroPanelText:
      'The process is described through a striking image: as Kundalini rises through the chakras, it stretches the canvas of attention upward like the pole of a tent. In that movement, a brief glimpse of thoughtless awareness becomes a state that can be deepened through practice.',
    heroTags: ['Self-Realization', 'Thoughtless Awareness', 'Daily Practice'],
    heroImage: redSunsetImg,
    heroImageAlt: 'Self realization visual',
    heroImageCaption:
      'Self-Realization marks the moment when attention begins to rise into a higher and more silent mode of consciousness.',
    heroImageMode: 'cover',
    highlights: [
      {
        title: 'Attention Is Lifted',
        description:
          'It is not outer discipline alone, but the actual ascent of inner energy, that raises attention beyond habitual mental patterns.'
      },
      {
        title: 'Thought-Free Presence',
        description:
          'Meditation is described as a wakeful state without mental overload, where calm and observation coexist naturally.'
      },
      {
        title: 'Deepens with Practice',
        description:
          'With regular meditation, thoughtless awareness is no longer momentary but becomes steadier and more enduring.'
      }
    ],
    showcases: {
      eyebrow: 'Inner Experience Made Visible',
      title: 'Meditation is presented as a process that unfolds in depth',
      description:
        'The imagery of ascent, stillness and subtle awareness helps make the path from first awakening to daily meditation feel concrete and accessible.',
      items: [
        {
          title: 'The Enabling Moment',
          label: 'Self-Realization',
          description:
            'Self-Realization is presented as the decisive turning point at which the inner architecture first becomes alive to awareness.',
          image: selfRealizationImg,
          alt: 'Self realization'
        },
        {
          title: 'Thoughtless Awareness',
          label: 'Fourth State of Consciousness',
          description:
            'Thoughtlessness is not dullness but a quiet, lucid and fully aware mode of presence.',
          image: thoughtlessImg,
          alt: 'Thoughtless awareness'
        },
        {
          title: 'Kundalini Rising',
          label: 'Inner Dynamics',
          description:
            'The ascent of Kundalini is presented as the real inner movement that raises attention and deepens perception.',
          image: kundaliniEnergyImg,
          alt: 'Kundalini rising'
        }
      ]
    },
    process: {
      eyebrow: 'Meditative Sequence',
      title: 'From the first awakening to stable thoughtless awareness',
      description:
        'Meditation is described as a clear inner process that begins with Self-Realization and becomes more stable through practice.',
      items: [
        {
          step: '01',
          title: 'The burden of thought loosens',
          description:
            'Attention is relieved from the constant pressure of ego, superego and reactive thinking.'
        },
        {
          step: '02',
          title: 'Kundalini rises through the middle',
          description:
            'It pierces the chakras and draws attention toward a more subtle plane of consciousness.'
        },
        {
          step: '03',
          title: 'Thoughtlessness becomes real',
          description:
            'The present moment is felt more directly, without being crowded by inner commentary.'
        },
        {
          step: '04',
          title: 'Daily practice lengthens the state',
          description:
            'Regular meditation turns a brief glimpse of silence into something more stable and repeatable.'
        }
      ]
    },
    sections: [
      {
        id: 'selbstverwirklichung',
        to: '/selbstverwirklichung-meditation/selbstverwirklichung',
        navLabel: 'Self-Realization',
        eyebrow: 'The Catalyst',
        title: 'Self-Realization opens access to a higher state of consciousness',
        description: [
          'Attention only rises meaningfully when it is no longer continuously overrun by thought. Self-Realization is the opening that makes such a shift possible.',
          'As Kundalini rises through the central channel and pierces the chakras, attention is lifted upward. It begins to separate from the usual knot of thought and immediate emotional reactivity.',
          'Self-Realization therefore appears not as a symbolic act, but as a living inner opening that introduces a calmer and clearer mode of perception.'
        ],
        sideTitle: 'Core Ideas',
        sideItems: [
          'Attention is the carrier of consciousness',
          'Kundalini lifts that attention into a subtler plane',
          'Meditation begins with experience rather than technique alone'
        ],
        note:
          'The image of a tent being raised from within captures the widening of attention with unusual clarity.'
      },
      {
        id: 'gedankenfreiheit',
        to: '/selbstverwirklichung-meditation/gedankenfreie-stille',
        navLabel: 'Thought-Free Stillness',
        eyebrow: 'Thoughtless Awareness',
        title: 'Thoughtlessness is silent wakefulness, not emptiness',
        description: [
          'Thoughtless awareness is neither sleep nor vague trance. It is a calm, inspired and highly alert state of consciousness.',
          'Because attention is no longer crowded by its usual stream of thought, observation becomes cleaner. Perception is more direct, reactions are less compulsive, and emotional overload begins to ease.',
          'Thoughtlessness is therefore treated as a distinct state that goes beyond relaxation. It is spiritually significant, psychologically relevant and practically transformative.'
        ],
        sideTitle: 'Qualities of This State',
        sideItems: [
          'Wakeful and present rather than dull',
          'Inwardly quiet without escaping reality',
          'Clearer observation without reactive mental noise'
        ],
        note:
          'Thoughtless awareness is explicitly treated as a distinct and higher state of consciousness.'
      },
      {
        id: 'praxis',
        to: '/selbstverwirklichung-meditation/meditationspraxis',
        navLabel: 'Meditation in Daily Life',
        eyebrow: 'Deepening',
        title: 'Regular meditation makes the experience stable and practical',
        description: [
          'One of the clearest ideas in this teaching is that each session of meditation helps Kundalini rise more steadily and strongly. Thoughtless awareness therefore does not remain a passing moment but gradually lasts longer.',
          'Meditation is not described as an isolated experience, but as a practice that sharpens sensitivity to the subtle system. The more regularly one meditates, the easier it becomes to recognise one’s inner states and imbalances.',
          'This gives Sahaja meditation a strongly practical character: simple in entry, but capable of producing remarkable depth, steadiness and inner refinement over time.'
        ],
        sideTitle: 'Effects of Regular Practice',
        sideItems: [
          'The experience becomes more reproducible',
          'Periods of inner stillness lengthen',
          'The subtle system becomes easier to perceive'
        ],
        note:
          'Daily meditation is presented as the bridge from a fleeting glimpse of silence to a more stable conscious state.'
      }
    ],
    closing: {
      title: 'Meditation is described here as an evolution of consciousness',
      description:
        'Self-Realization, thoughtless awareness and daily practice form a coherent path. Meditation begins with the awakening of inner energy, becomes tangible in silence, and deepens through repetition into a richer quality of life.',
      points: [
        'Self-Realization lifts attention into a higher inner plane.',
        'Thoughtless awareness is treated as a distinct, wakeful state of being.',
        'Daily practice makes the experience stable, practical and embodied.'
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
    heroTags: ['EEG', 'Consciousness', 'Holistic Health'],
    heroImage: thoughtlessImg,
    heroImageAlt: 'Meditative awareness visual',
    heroImageCaption:
      'Meditation is reframed here not only as relaxation, but as the conscious suspension of the ordinary flow of thought.',
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
          image: thoughtlessImg,
          alt: 'Thoughtless awareness state'
        },
        {
          title: 'Subtle Map',
          label: 'Systemic View',
          description:
            'The chakra chart presents spirituality as an organised inner system rather than a diffuse metaphor.',
          image: chakraChartImg,
          alt: 'Chakra chart'
        },
        {
          title: 'Balance and Tendencies',
          label: 'Regulation',
          description:
            'The interplay of left, right and centre offers a model for energetic and psychological regulation.',
          image: tendenciesImg,
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
    heroImage: collectiveMeditationImg,
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
          image: improvedPerceptionImg,
          alt: 'Improved perception'
        },
        {
          title: 'Stillness in Common',
          label: 'Collective Meditation',
          description:
            'Collective meditation is described as a response to overstimulation, loneliness and contemporary fragmentation.',
          image: collectiveMeditationImg,
          alt: 'Collective meditation'
        },
        {
          title: 'Foundations of Integrity',
          label: 'Spiritual Tenets',
          description:
            'The defining principles of spiritual life place inner truth, maturity and conduct at the centre.',
          image: tenetsImg,
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

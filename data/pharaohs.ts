import { Pharaoh } from '../lib/types'

export const pharaohs: Pharaoh[] = [
  {
    id: 'narmer',
    slug: 'narmer',
    name: 'Narmer',
    arabicName: 'نعرمر',
    prenomen: 'Menes',
    nomen: 'Narmer',
    dynastyId: 'dynasty-01',
    reignStart: -3150,
    reignEnd: -3100,
    reignDurationYears: 50,
    titles: ['Horus', 'Unifier of the Two Lands', 'Lord of the Double Crown'],
    epithet: 'The Unifier of Egypt',
    biography: `He stood upon the blood-drenched banks of the Nile, looking out over a land divided since the dawn of memory. In his hand, he raised a heavy siltstone palette, a victory stone destined to record the birth of the world's first great state. He had marched his armies from the southern valleys of Upper Egypt, sweeping through the marshes of the north. Under his striking club, the chieftains of the Delta fell.

To seal his triumph, he did not merely conquer; he bound. He placed the white bulbous crown of the south and the red flared crown of the north upon a single head. With this ultimate gesture, he founded Memphis at the balancing point of the river, declaring that the two warring realms were now one indivisible cosmos.

His administration laid the foundations of pharaonic kingship. Scribes began writing down the tax accounts using codified symbols, marking the true dawn of hieroglyphs. High priests established the ritual cults that would govern Egyptian life for three thousand years.

His name—spelled with the signs for a catfish and a chisel—reverberated down the generations as the primordial father. He conquered the chaos of division, proving that a unified Nile was the only path to survival.`,
    keyAchievements: [
      'Successfully unified Upper and Lower Egypt into a single kingdom',
      'Established Memphis as the central capital of the unified nation',
      'Initiated the First Dynasty and consolidated early pharaonic iconography'
    ],
    majorProjects: [
      {
        name: 'The Royal Necropolis at Abydos',
        location: 'Abydos',
        description: 'The monumental brick-lined tombs that established Abydos as the sacred resting place of early unified kings.'
      }
    ],
    artifacts: [
      {
        id: 'narmer-palette',
        name: 'The Narmer Palette',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'Early Dynastic Period',
        material: 'Siltstone / Green Schist',
        imageUrl: 'https://images.unsplash.com/photo-1608988220015-d9fe7f2c694a?q=80&w=600&auto=format&fit=crop',
        description: 'A decorative palette depicting King Narmer wearing the crowns of both Upper and Lower Egypt, striking down his enemies.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        alt: 'Narmer Palette relief',
        caption: 'The historical relief of Narmer striking his northern enemies.',
        type: 'relief'
      }
    ],
    burialSite: 'Tomb B17/B18, Abydos',
    familyRelations: [
      { name: 'Neithhotep', relationship: 'Consort' },
      { name: 'Hor-Aha', relationship: 'Son' }
    ],
    legacyQuote: 'He brought order where there was chaos, binding the Valley and the Delta under a single divine crown.'
  },
  {
    id: 'djoser',
    slug: 'djoser',
    name: 'Djoser',
    arabicName: 'جسر',
    prenomen: 'Netjerikhet',
    nomen: 'Djoser',
    dynastyId: 'dynasty-03',
    reignStart: -2667,
    reignEnd: -2648,
    reignDurationYears: 19,
    titles: ['Horus Netjerikhet', 'Golden Horus', 'King of Upper and Lower Egypt'],
    epithet: 'The Step Pyramid Builder',
    biography: `Before his reign, kings rested in flat, crumbling mastabas of sun-dried mud. He looked upon the desert plateau of Saqqara and resolved that his physical house for the afterlife must reflect the immortal nature of his soul. He turned to his brilliant vizier and high priest, Imhotep. Together, they made a historic decision: they would build in hewn stone, challenging the elements for eternity.

Imhotep did not build a flat tomb. He stacked six grand mastabas of fine white limestone, one atop the other, scaling toward the heavens like a massive staircase. This was the Step Pyramid, a towering stone ladder designed to let the king's spirit climb directly into the circumpolar stars.

Around this central mountain of stone, Djoser erected a vast ceremonial complex. Scribes carved limestone pillars to look like bundles of reeds and papyrus, capturing the organic beauty of the Nile Valley in cold, permanent stone.

His reign proved that a centralized state could mobilize thousands of quarrymen, masons, and sculptors. By conquering stone, he initiated the Old Kingdom, demonstrating that architectural ambition could bridge the human world with the realm of the gods.`,
    keyAchievements: [
      'Commissioned the Step Pyramid of Saqqara, the worlds first monumental stone structure',
      'Pioneered the transition from mudbrick to permanent limestone architecture',
      'Successfully consolidated royal authority across regional nomes'
    ],
    majorProjects: [
      {
        name: 'The Step Pyramid Complex',
        location: 'Saqqara',
        description: 'A 60-meter-tall stepped monument surrounded by courtyards, temples, and dummy chapels enclosed by a massive stone wall.'
      }
    ],
    artifacts: [
      {
        id: 'djoser-statue',
        name: 'Seated Ka Statue of Djoser',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'Old Kingdom',
        material: 'Limestone',
        imageUrl: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop',
        description: 'A life-sized painted limestone statue of the king, designed to house his Ka spirit, found in the serdab chamber at Saqqara.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
        alt: 'The Step Pyramid of Saqqara',
        caption: 'The majestic terraced silhouette of the Step Pyramid rising over the sands.',
        type: 'monument'
      }
    ],
    burialSite: 'Step Pyramid, Saqqara',
    familyRelations: [
      { name: 'Hetephernebti', relationship: 'Consort' },
      { name: 'Imhotep', relationship: 'Consort' } // Handled as Vizier / Advisor
    ],
    legacyQuote: 'He climbed the stone staircase of Saqqara, leaving behind the mudbrick of the past to touch the eternal stars.'
  },
  {
    id: 'khufu',
    slug: 'khufu',
    name: 'Khufu',
    arabicName: 'خوفو',
    prenomen: 'Medjedu',
    nomen: 'Khufu (Cheops)',
    dynastyId: 'dynasty-04',
    reignStart: -2589,
    reignEnd: -2566,
    reignDurationYears: 23,
    titles: ['Horus Medjedu', 'King of Upper and Lower Egypt', 'Lord of the Giza Plateau'],
    epithet: 'Builder of the Great Pyramid',
    biography: `He was a monarch of unyielding will who looked upon the bedrock of the Giza plateau and saw the perfect foundation for a mountain. More than two thousand years before the rise of Greece or Rome, he organized a workforce of twenty thousand highly skilled builders, quarrymen, and surveyors. They would labor for two decades, quarrying and placing two million blocks of stone.

Under his direction, the builders aligned the monument's four sides to the cardinal compass points with an error of less than a fraction of a degree. Clad in polished white Tura limestone, the monument caught the sun's rays like a solid, gleaming cap of gold, visible for miles across the Nile Valley.

His court managed a massive logistical network, importing cedar wood from Lebanon and extracting copper from the Sinai. He commanded absolute control over the nation's agricultural surplus, feeding the massive workforce through a state-run network of bakeries and granaries.

The Great Pyramid survived as the tallest man-made structure on earth for nearly four thousand years. He left behind a monument that silenced doubt, proving that human organization, when driven by absolute divine purpose, could construct an eternal geometric mountain.`,
    keyAchievements: [
      'Constructed the Great Pyramid of Giza, the largest stone pyramid in human history',
      'Established highly complex administrative and state logistics networks',
      'Advanced celestial and engineering alignments to unprecedented standards'
    ],
    majorProjects: [
      {
        name: 'The Great Pyramid of Giza',
        location: 'Giza Plateau',
        description: 'A monumental geometric tomb rising 146 meters, constructed from 2.3 million stone blocks.'
      }
    ],
    artifacts: [
      {
        id: 'khufu-statuette',
        name: 'Ivory Statuette of Khufu',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'Old Kingdom',
        material: 'Ivory',
        imageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=600&auto=format&fit=crop',
        description: 'A tiny, 7.5-centimeter ivory statuette discovered at Abydos, representing the only complete three-dimensional image of the king.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=600&auto=format&fit=crop',
        alt: 'The Great Pyramid of Giza',
        caption: 'The massive blocks of the Great Pyramid standing as a testament to Khufus will.',
        type: 'monument'
      }
    ],
    burialSite: 'The Great Pyramid, Giza',
    familyRelations: [
      { name: 'Sneferu', relationship: 'Father' },
      { name: 'Hetepheres I', relationship: 'Mother' },
      { name: 'Meritites I', relationship: 'Consort' },
      { name: 'Khafre', relationship: 'Son' }
    ],
    legacyQuote: 'He did not merely build a tomb; he anchored a mountain in the desert sands to mirror the eternal order of the cosmos.'
  },
  {
    id: 'khafre',
    slug: 'khafre',
    name: 'Khafre',
    arabicName: 'خفرع',
    prenomen: 'Userib',
    nomen: 'Khafre (Chephren)',
    dynastyId: 'dynasty-04',
    reignStart: -2558,
    reignEnd: -2532,
    reignDurationYears: 26,
    titles: ['Horus Userib', 'Son of Ra', 'King of the Valley'],
    epithet: 'The Sphinx Builder',
    biography: `He looked upon the limestone bedrock of the Giza plateau and saw a natural outcrop left behind by his father's quarrymen. He did not level it. Instead, he ordered his sculptors to carve it directly into the body of a crouching lion, topped with his own royal portrait. This was the Great Sphinx, a colossal guardian god designed to protect the royal necropolis.

Adjacent to the Sphinx, he built a mortuary temple of staggering architectural simplicity. He imported massive blocks of red granite from Aswan, polishing them smooth and fitting them together without mortar to frame his seated statues of black diorite.

His pyramid, though slightly smaller than the Great Pyramid of his father Khufu, sat on a higher elevation, making it appear taller. It retained a beautifully preserved cap of polished casing stones at its peak, showing the sheer craftsmanship of his builders.

Through his grand monuments, he merged the physical image of the king with the divine power of the sun god Ra. He left behind a guardian face that has stared into the eastern horizon for forty-five centuries, watching empires rise and fall.`,
    keyAchievements: [
      'Commissioned the Great Sphinx of Giza, the largest monolithic statue in the world',
      'Constructed the second largest pyramid of the Giza complex',
      'Pioneered massive megalithic granite temples using post-and-lintel design'
    ],
    majorProjects: [
      {
        name: 'The Pyramid of Khafre',
        location: 'Giza Plateau',
        description: 'The second Giza pyramid, notable for preserving its limestone casing stones at the peak.'
      },
      {
        name: 'The Great Sphinx',
        location: 'Giza Plateau',
        description: 'A 73-meter colossal monolithic statue blending a lion’s body with the pharaoh’s crowned head.'
      }
    ],
    artifacts: [
      {
        id: 'khafre-diorite-statue',
        name: 'Diorite Statue of Khafre',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'Old Kingdom',
        material: 'Diorite / Gneiss',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        description: 'A masterpiece of Old Kingdom art, showing the king seated on a throne, protected by the wings of the falcon god Horus.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=600&auto=format&fit=crop',
        alt: 'The Great Sphinx of Giza',
        caption: 'The weathered, majestic face of the Great Sphinx guarding Khafres pyramid.',
        type: 'monument'
      }
    ],
    burialSite: 'Pyramid of Khafre, Giza',
    familyRelations: [
      { name: 'Khufu', relationship: 'Father' },
      { name: 'Khamerernebty I', relationship: 'Consort' },
      { name: 'Menkaure', relationship: 'Son' }
    ],
    legacyQuote: 'His gaze remains fixed on the rising sun, a permanent guardian carved from the living stone of the Giza plateau.'
  },
  {
    id: 'menkaure',
    slug: 'menkaure',
    name: 'Menkaure',
    arabicName: 'منكاورع',
    prenomen: 'Kakhet',
    nomen: 'Menkaure (Mycerinus)',
    dynastyId: 'dynasty-04',
    reignStart: -2532,
    reignEnd: -2503,
    reignDurationYears: 29,
    titles: ['Horus Kakhet', 'King of Upper and Lower Egypt', 'The Just Pharaoh'],
    epithet: 'The Builder of the Third Pyramid',
    biography: `He was a king who sought balance and beauty rather than overwhelming scale. He completed the spectacular Giza trinity by building the third and smallest pyramid. Instead of casing it entirely in limestone, he covered the bottom sixteen courses in rough, unpolished red granite from Aswan, creating a striking contrast against the pale desert sand.

His builders died before he could polish the lower granite blocks, leaving them rough and unfinished—a silent, physical testimony to the sudden death of the king. His court focused on creating highly detailed, intimate sculptures rather than colossal monuments.

His sculptors carved exquisite graywacke triads, showing the pharaoh standing hand-in-hand with the goddess Hathor and various provincial deities. These figures possessed a soft, human grace, showcasing a remarkable mastery of hard stone.

He left behind a legacy of justice and moderation, remembered by later generations as a fair ruler who reopened the temples closed by his predecessors. His small pyramid, nestled alongside the giants, completed the sacred landscape of Giza.`,
    keyAchievements: [
      'Constructed the Third Pyramid of Giza, featuring massive red granite casing stones',
      'Commissioned some of the finest high-relief graywacke sculptures of the Old Kingdom',
      'Re-established provincial temple operations and balanced administrative rules'
    ],
    majorProjects: [
      {
        name: 'The Pyramid of Menkaure',
        location: 'Giza Plateau',
        description: 'The third and smallest Giza pyramid, originally featuring lower courses of red granite.'
      }
    ],
    artifacts: [
      {
        id: 'menkaure-triad',
        name: 'Menkaure and Hathor Triad',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'Old Kingdom',
        material: 'Graywacke',
        imageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
        description: 'A highly polished slate sculpture showing King Menkaure standing between the goddess Hathor and the personified deity of the Cynopolis nome.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
        alt: 'Pyramid of Menkaure',
        caption: 'The third pyramid, highlighting the red granite casing stones at the base.',
        type: 'monument'
      }
    ],
    burialSite: 'Pyramid of Menkaure, Giza',
    familyRelations: [
      { name: 'Khafre', relationship: 'Father' },
      { name: 'Khamerernebty II', relationship: 'Consort' }
    ],
    legacyQuote: 'He chose beauty over sheer size, completing the Giza landscape with red granite and polished slate.'
  },
  {
    id: 'pepi-ii',
    slug: 'pepi-ii',
    name: 'Pepi II',
    arabicName: 'ببي الثاني',
    prenomen: 'Neferkare',
    nomen: 'Pepi II',
    dynastyId: 'dynasty-06',
    reignStart: -2278,
    reignEnd: -2184,
    reignDurationYears: 94,
    titles: ['Horus Netjerkhau', 'King of Upper and Lower Egypt', 'The Long-Reigning Monarch'],
    epithet: 'The Longest Reign',
    biography: `He was a child of six when he wore the heavy double crown. His long life spanned almost an entire century, outliving his children, his grandchildren, and the strength of the kingdom itself. In the early decades of his rule, his court launched profitable expeditions deep into the red hills of the eastern desert and down the coast of Nubia, bringing back exotic trees and ivory.

As the years lengthened, however, the old king sat in his palace in Memphis while the provincial governors (nomarchs) grew increasingly wealthy and independent. They stopped sending their tribute to the central treasury, burying themselves in spectacular, rock-cut tombs in their own territories.

Severe low floods began to wither the wheat fields, and the granaries emptied. The central administration, slowed by a massive and aging bureaucracy, could not distribute food to the starving provinces.

When his breathing finally stopped after ninety-four years on the throne, the centralized power of Memphis shattered. He had held the crown for so long that when he was gone, there was no one left to hold the country together, plunging Egypt into the First Intermediate Period.`,
    keyAchievements: [
      'Maintained global trade relations with Byblos, Punt, and Nubia during his early reign',
      'Supported the proliferation of the Pyramid Texts within royal and elite burials',
      'Holds the record for the longest-spanning reign in Egyptian history (94 years)'
    ],
    majorProjects: [
      {
        name: 'The Pyramid Complex of Pepi II',
        location: 'South Saqqara',
        description: 'A modest-sized pyramid surrounded by a large temple complex and three queen pyramids.'
      }
    ],
    artifacts: [
      {
        id: 'pepi-ii-statuette',
        name: 'Alabaster Statuette of Pepi II',
        currentLocation: 'Brooklyn Museum, New York',
        period: 'Old Kingdom',
        material: 'Alabaster',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        description: 'A beautiful small alabaster statue showing the young boy king Pepi II sitting on the lap of his mother, Queen Ankhnesmeryre II.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        alt: 'Saqqara tomb reliefs',
        caption: 'The historic hieroglyphic reliefs dating from the late Sixth Dynasty.',
        type: 'relief'
      }
    ],
    burialSite: 'Pyramid of Pepi II, Saqqara',
    familyRelations: [
      { name: 'Pepi I', relationship: 'Father' },
      { name: 'Ankhnesmeryre II', relationship: 'Mother' },
      { name: 'Neith', relationship: 'Consort' },
      { name: 'Iput II', relationship: 'Consort' }
    ],
    legacyQuote: 'He ruled for nearly a century, but as his physical body withered, so too did the strength of Memphis, paving the way for the great collapse.'
  },
  {
    id: 'mentuhotep-ii',
    slug: 'mentuhotep-ii',
    name: 'Mentuhotep II',
    arabicName: 'منتوحتب الثاني',
    prenomen: 'Nebhepetre',
    nomen: 'Mentuhotep II',
    dynastyId: 'dynasty-11',
    reignStart: -2061,
    reignEnd: -2010,
    reignDurationYears: 51,
    titles: ['Horus Netjeryhedjet', 'Unifier of the Two Lands', 'Lord of the Great Theban House'],
    epithet: 'The Second Narmer',
    biography: `For decades, the princes of Thebes had fought a bitter war against northern rulers based in Herakleopolis. He was a young warrior when he inherited the southern crown. Leading a disciplined force of archers and infantry, he marched north, capturing town after town until the northern court surrendered. Egypt was reunified once more, terminating a century of division.

He did not govern from the ancient northern capital of Memphis. He chose his native city of Thebes, turning this provincial southern town into the religious and administrative center of the Middle Kingdom.

At the foot of the towering cliffs of Deir el-Bahari, he built a mortuary temple that revolutionized Egyptian architecture. He departed from the traditional pyramid shape, constructing a massive terraced monument with covered porticoes, planted with rows of sycamore trees.

His reign initiated the Middle Kingdom, a period of cultural stability and administrative reform. Later generations regarded him as a second Narmer, the king who had saved the nation from the chaos of division and restored cosmic balance.`,
    keyAchievements: [
      'Ended the First Intermediate Period by conquering Herakleopolis',
      'Reunified Upper and Lower Egypt under Theban rule',
      'Pioneered the spectacular terraced mortuary architecture at Deir el-Bahari'
    ],
    majorProjects: [
      {
        name: 'Mortuary Temple of Mentuhotep II',
        location: 'Deir el-Bahari, Thebes',
        description: 'A revolutionary terraced temple featuring columned halls, gardens, and a subterranean burial chamber.'
      }
    ],
    artifacts: [
      {
        id: 'mentuhotep-statue',
        name: 'Seated painted sandstone statue of Mentuhotep II',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'Middle Kingdom',
        material: 'Painted Sandstone',
        imageUrl: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=600&auto=format&fit=crop',
        description: 'A seated statue showing the king with pitch-black skin, symbol of regeneration and the fertile soil of Kemet, wearing the red crown and royal robe.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=600&auto=format&fit=crop',
        alt: 'Deir el-Bahari cliffs',
        caption: 'The dramatic sandstone cliffs of Deir el-Bahari where Mentuhotep II built his terraced temple.',
        type: 'monument'
      }
    ],
    burialSite: 'Deir el-Bahari, Thebes',
    familyRelations: [
      { name: 'Intef III', relationship: 'Father' },
      { name: 'Iah', relationship: 'Mother' },
      { name: 'Tem', relationship: 'Consort' },
      { name: 'Neferu II', relationship: 'Consort' }
    ],
    legacyQuote: 'He matched Narmers ancient triumph, binding the sundered kingdom with a fierce southern will.'
  },
  {
    id: 'senusret-iii',
    slug: 'senusret-iii',
    name: 'Senusret III',
    arabicName: 'سنوسرت الثالث',
    prenomen: 'Khakaure',
    nomen: 'Senusret III',
    dynastyId: 'dynasty-12',
    reignStart: -1878,
    reignEnd: -1839,
    reignDurationYears: 39,
    titles: ['Horus Netjerykheperu', 'Son of Ra', 'The Nubian Conqueror'],
    epithet: 'The Warrior King',
    biography: `He did not govern with calm complacency. He was a military commander who personally led four major campaigns deep into the rough terrain of Nubia, pushing Egypt's borders further south than ever before. Along the narrow banks of the Nile, he constructed a massive chain of mudbrick fortresses, including Semna and Kumma, establishing absolute military control over the region.

To facilitate his fleet's movement, he ordered his engineers to cut an eighty-meter channel through the solid granite rocks of the first cataract at Aswan. This allowed his war galleys to sail directly into Nubia during high floods.

At home, he was a ruthless reformer. He abolished the powerful hereditary office of regional nomarch, stripping local governors of their privileges and centralizing all administrative power within the royal cabinet.

His statues broke with the idealized traditions of the past. His sculptors portrayed him with heavy, hooded eyes, a furrowed brow, and downward-sloping lips—the realistic face of a weary military commander who carried the immense weight of the state.`,
    keyAchievements: [
      'Secured and extended southern borders with a strategic chain of fortresses',
      'Excavated the Aswan bypass canal to bypass the unnavigable Nile cataracts',
      'Reorganized the state administration, ending regional governors autonomy'
    ],
    majorProjects: [
      {
        name: 'The Semna Fortress System',
        location: 'Second Cataract, Nubia',
        description: 'A sophisticated defensive outpost network controlling trade and troop movements.'
      },
      {
        name: 'Pyramid of Senusret III',
        location: 'Dahshur',
        description: 'A large mudbrick pyramid cased in limestone, featuring a complex labyrinth of subterranean chambers.'
      }
    ],
    artifacts: [
      {
        id: 'senusret-head',
        name: 'Obsidian Portrait Head of Senusret III',
        currentLocation: 'The British Museum, London',
        period: 'Middle Kingdom',
        material: 'Obsidian / Dark Stone',
        imageUrl: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=600&auto=format&fit=crop',
        description: 'An exquisite obsidian portrait head showcasing the realistic, careworn facial features of the king.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=600&auto=format&fit=crop',
        alt: 'Middle Kingdom statue head',
        caption: 'The realistic careworn features of Senusret III carved in dark obsidian.',
        type: 'statue'
      }
    ],
    burialSite: 'Dahshur (Cenotaph at Abydos)',
    familyRelations: [
      { name: 'Senusret II', relationship: 'Father' },
      { name: 'Khenemetneferhedjet II', relationship: 'Consort' },
      { name: 'Amenemhat III', relationship: 'Son' }
    ],
    legacyQuote: 'His face was carved with the weary lines of a guardian, watching the southern borders with sleepless obsidian eyes.'
  },
  {
    id: 'ahmose-i',
    slug: 'ahmose-i',
    name: 'Ahmose I',
    arabicName: 'أحمس الأول',
    prenomen: 'Nebpehtyre',
    nomen: 'Ahmose I',
    dynastyId: 'dynasty-18',
    reignStart: -1550,
    reignEnd: -1525,
    reignDurationYears: 25,
    titles: ['Horus Ankhkheperu', 'Unifier of the South', 'Expeller of the Hyksos'],
    epithet: 'The Founder of the Empire',
    biography: `He was a boy of ten when his father was killed in battle, and his brother died shortly after on the front line. The proud princes of Thebes were cornered, while foreign Hyksos kings ruled the northern Delta. Supported by his formidable mother, Queen Ahhotep, he waited, trained, and rebuilt his forces.

When he reached manhood, he launched a brilliant, multi-pronged campaign. He adopted the enemy's own weapon—the horse-drawn chariot—turning it against them. He besieged the Hyksos capital at Avaris, chasing their retreating armies deep into the southern Levant.

Having cleared the Delta, he marched south into Nubia, reclaiming lost territory and securing the gold mines. He used this massive influx of gold to rebuild the ruined temples and restart international trade.

His military victories founded the Eighteenth Dynasty and initiated the New Kingdom. He transformed Egypt from an isolated river valley into an aggressive imperial superpower, ensuring that foreign rulers would never tread on the soil of Kemet again.`,
    keyAchievements: [
      'Successfully expelled the foreign Hyksos dynasties from Egyptian borders',
      'Reunited Upper and Lower Egypt, inaugurating the glorious Eighteenth Dynasty',
      'Pioneered the military adoption of chariot warfare and bronze armaments'
    ],
    majorProjects: [
      {
        name: 'The Pyramid of Ahmose',
        location: 'Abydos',
        description: 'The last royal pyramid built in Egypt, constructed as a symbolic cenotaph rather than a tomb.'
      }
    ],
    artifacts: [
      {
        id: 'ahmose-axe',
        name: 'Ceremonial Axe of Ahmose I',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'New Kingdom',
        material: 'Bronze, Gold, Cedar',
        imageUrl: 'https://images.unsplash.com/photo-1568289463676-ee4c82b77f0b?q=80&w=600&auto=format&fit=crop',
        description: 'A beautifully decorated ceremonial battle axe depicting King Ahmose striking a Hyksos soldier, found in the tomb of his mother, Queen Ahhotep.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1568289463676-ee4c82b77f0b?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1568289463676-ee4c82b77f0b?q=80&w=600&auto=format&fit=crop',
        alt: 'Chariot depiction',
        caption: 'A depiction of royal chariot forces adapted during the early New Kingdom.',
        type: 'relief'
      }
    ],
    burialSite: 'Dra Abu el-Naga (Cenotaph at Abydos)',
    familyRelations: [
      { name: 'Seqenenre Tao', relationship: 'Father' },
      { name: 'Ahhotep I', relationship: 'Mother' },
      { name: 'Ahmose-Nefertari', relationship: 'Consort' },
      { name: 'Amenhotep I', relationship: 'Son' }
    ],
    legacyQuote: 'He drove the foreign kings into the eastern sands, forging an empire from the ashes of occupation.'
  },
  {
    id: 'hatshepsut',
    slug: 'hatshepsut',
    name: 'Hatshepsut',
    arabicName: 'حتشبسوت',
    prenomen: 'Maatkare',
    nomen: 'Hatshepsut',
    dynastyId: 'dynasty-18',
    reignStart: -1478,
    reignEnd: -1458,
    reignDurationYears: 20,
    titles: ['Horus Weseretkau', 'King of Upper and Lower Egypt', 'Wife of the God Amun'],
    epithet: 'The Female King',
    biography: `She was a queen mother who refused to sit quietly in the shadows of a young stepson. Believing that her bloodline was divine, she took a historic and unprecedented step: she assumed the full titles of a male pharaoh. She ordered her sculptors to portray her wearing the royal kilt, the false beard, and the double crown, declaring that she was the biological daughter of the god Amun himself.

Rather than pursuing aggressive conquests, she focused on trade and prosperity. She sent a spectacular naval expedition down the Red Sea to the distant land of Punt. Her ships returned laden with heaps of gold, ebony, ivory, and living myrrh trees, which she planted in the courtyards of Thebes.

Her chief architect, Senenmut, constructed her mortuary temple at Deir el-Bahari. It stood as a masterpiece of classical balance, with long, elegant terraces of colonnades that mirrored the natural vertical clefts of the cliffs rising behind them.

She erected two massive pink granite obelisks at Karnak, celebrating her relationship with the sun god. Her long, prosperous reign proved that a female king could govern the empire with unmatched political skill, leaving behind monuments that redefined architectural elegance.`,
    keyAchievements: [
      'Governed successfully as a female king, adopting full pharaonic regalia',
      'Dispatched the legendary trading expedition to the land of Punt',
      'Commissioned the majestic terraced temple of Deir el-Bahari'
    ],
    majorProjects: [
      {
        name: 'Djeser-Djeseru Mortuary Temple',
        location: 'Deir el-Bahari, Thebes',
        description: 'A stunning terraced temple featuring colonnaded halls, reliefs of the Punt expedition, and shrines to Hathor and Anubis.'
      },
      {
        name: 'The Karnak Obelisks',
        location: 'Karnak Temple Complex',
        description: 'Two massive 30-meter obelisks carved from single blocks of pink Aswan granite.'
      }
    ],
    artifacts: [
      {
        id: 'hatshepsut-statue',
        name: 'Colossal Statue of Hatshepsut',
        currentLocation: 'The Metropolitan Museum of Art, New York',
        period: 'New Kingdom',
        material: 'Granite',
        imageUrl: 'https://images.unsplash.com/photo-1608967909983-a28ff78b9415?q=80&w=600&auto=format&fit=crop',
        description: 'A colossal granite statue of Hatshepsut depicted as a male pharaoh, originally from her mortuary temple at Deir el-Bahari.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1608967909983-a28ff78b9415?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1608967909983-a28ff78b9415?q=80&w=600&auto=format&fit=crop',
        alt: 'Colossal Statue of Hatshepsut',
        caption: 'Hatshepsuts colossal portrait in the Metropolitan Museum.',
        type: 'statue'
      },
      {
        url: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=600&auto=format&fit=crop',
        alt: 'Terraced temple',
        caption: 'Djeser-Djeseru rising dynamically below the sandstone cliffs.',
        type: 'monument'
      }
    ],
    burialSite: 'Tomb KV20, Valley of the Kings',
    familyRelations: [
      { name: 'Thutmose I', relationship: 'Father' },
      { name: 'Ahmes', relationship: 'Mother' },
      { name: 'Thutmose II', relationship: 'Consort' },
      { name: 'Thutmose III', relationship: 'Son' } // Stepson / Co-regent
    ],
    legacyQuote: 'She wore the male crown and false beard, proving that divine lineage and absolute political skill were not bound by gender.'
  },
  {
    id: 'thutmose-iii',
    slug: 'thutmose-iii',
    name: 'Thutmose III',
    arabicName: 'تحتمس الثالث',
    prenomen: 'Menkheperre',
    nomen: 'Thutmose III',
    dynastyId: 'dynasty-18',
    reignStart: -1479,
    reignEnd: -1425,
    reignDurationYears: 54,
    titles: ['Horus Kanakht Khaemwaset', 'Son of Ra', 'The Napoleon of Ancient Egypt'],
    epithet: 'The Imperial Conqueror',
    biography: `He was a young boy, overshadowed by his stepmother Hatshepsut, when the throne came to him. Forced to wait in her shadow for twenty years, he spent his youth in the army, transforming himself into a master military strategist. When she passed away, he emerged from the court ready to march.

Over the next three decades, he led seventeen brilliant military campaigns, marching his armies across the Levant and deep into Nubia. At the Battle of Megiddo, he surprised the rebellious Syrian princes by leading a force of twenty thousand soldiers through a narrow, dangerous mountain pass, capturing their coalition forces.

He established Egypt's absolute imperial dominance, receiving tribute from the kings of Babylon, Assyria, and the Hittites. Scribes carved the records of his victories on the walls of Karnak, creating the detailed "Annals."

His military genius stretched the empire from the Euphrates River in the north to the fourth cataract of the Nile in the south. He left behind an aggressive military state that dominated the ancient Near East, remembered down the centuries as the greatest warrior king of Kemet.`,
    keyAchievements: [
      'Conducted 17 military campaigns, creating Egypts largest imperial footprint',
      'Won the historic Battle of Megiddo through high-risk tactical flanking',
      'Commissioned the detailed Annals of Karnak, recording campaigns and tribute'
    ],
    majorProjects: [
      {
        name: 'The Akh-menu Festival Hall',
        location: 'Karnak Temple Complex',
        description: 'A unique ceremonial hall featuring columns carved to resemble ancient tent poles, celebrating his Sed festival.'
      }
    ],
    artifacts: [
      {
        id: 'thutmose-statue',
        name: 'Basalt Statue of Thutmose III',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'New Kingdom',
        material: 'Basalt',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        description: 'An exceptionally carved dark basalt statue showing the athletic king standing in a classic pose, wearing the Nemes headdress.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        alt: 'Annals relief',
        caption: 'Detailed inscriptions recording Thutmoses military conquests at Karnak.',
        type: 'relief'
      }
    ],
    burialSite: 'Tomb KV34, Valley of the Kings',
    familyRelations: [
      { name: 'Thutmose II', relationship: 'Father' },
      { name: 'Hatshepsut', relationship: 'Mother' }, // Stepmother
      { name: 'Merytre-Hatshepsut', relationship: 'Consort' },
      { name: 'Amenhotep II', relationship: 'Son' }
    ],
    legacyQuote: 'He pushed the borders of Kemet to the banks of the Euphrates, ruling the ancient world with absolute military genius.'
  },
  {
    id: 'amenhotep-iii',
    slug: 'amenhotep-iii',
    name: 'Amenhotep III',
    arabicName: 'أمنحتب الثالث',
    prenomen: 'Nebmaatre',
    nomen: 'Amenhotep III',
    dynastyId: 'dynasty-18',
    reignStart: -1391,
    reignEnd: -1353,
    reignDurationYears: 38,
    titles: ['Horus Kanakht Khaemwaset', 'Son of Ra', 'The Magnificent'],
    epithet: 'The Golden Pharaoh',
    biography: `He inherited an empire at its absolute peak of wealth and stability. Rather than marching into battle, he dedicated his thirty-eight years to a spectacular display of architectural vanity and diplomatic skill. He filled the state treasuries with gold from Nubian mines, exchanging it for foreign alliances through a vast network of diplomatic marriages.

He turned Thebes into a city of unmatched splendor. He constructed the massive Luxor Temple, linking it to Karnak with a grand avenue lined with hundreds of stone sphinxes.

On the west bank of the Nile, he built his mortuary complex—the largest ever constructed. Although the temple itself was destroyed by later floods, two seventy-foot colossal stone statues of the seated king, known as the Colossi of Memnon, survived, standing as solitary guardians over the crops.

His court was characterized by a refined, luxury-loving style of art. He left behind an empire bathed in gold, having proved that absolute wealth and peaceful diplomacy could build a cultural heritage that outshined the victories of war.`,
    keyAchievements: [
      'Maintained absolute imperial peace through strategic international marriages and diplomacy',
      'Constructed the magnificent Luxor Temple and the grand avenue of sphinxes',
      'Erected the Colossi of Memnon, the largest free-standing stone statues in Egypt'
    ],
    majorProjects: [
      {
        name: 'Luxor Temple Complex',
        location: 'Thebes',
        description: 'A grand temple dedicated to the regeneration of kingship, featuring massive columned courts.'
      },
      {
        name: 'The Colossi of Memnon',
        location: 'West Thebes',
        description: 'Two massive 18-meter stone statues representing the seated pharaoh, guarding his lost mortuary temple.'
      }
    ],
    artifacts: [
      {
        id: 'amenhotep-colossus',
        name: 'Colossal Head of Amenhotep III',
        currentLocation: 'The British Museum, London',
        period: 'New Kingdom',
        material: 'Red Granite',
        imageUrl: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop',
        description: 'A colossal red granite head of the king, showcasing the round, youthful, and stylized facial features characteristic of his reign.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop',
        alt: 'Colossi of Memnon',
        caption: 'The Colossi of Memnon sitting as silent guardians on the West Theban plain.',
        type: 'monument'
      }
    ],
    burialSite: 'Tomb WV22, Valley of the Kings',
    familyRelations: [
      { name: 'Thutmose IV', relationship: 'Father' },
      { name: 'Mutemwiya', relationship: 'Mother' },
      { name: 'Tiye', relationship: 'Consort' },
      { name: 'Akhenaten', relationship: 'Son' }
    ],
    legacyQuote: 'He ruled an empire at the absolute peak of its gold and splendor, building temples that redefined monumental luxury.'
  },
  {
    id: 'akhenaten',
    slug: 'akhenaten',
    name: 'Akhenaten',
    arabicName: 'أخناتون',
    prenomen: 'Neferkheperure-waenre',
    nomen: 'Amenhotep IV (Akhenaten)',
    dynastyId: 'dynasty-18',
    reignStart: -1353,
    reignEnd: -1336,
    reignDurationYears: 17,
    titles: ['Horus Kanakht Meryaten', 'Anointed of the Aten', 'The Heretic King'],
    epithet: 'The Heretic Pharaoh',
    biography: `He was born Amenhotep IV, but in the fifth year of his reign, he launched a religious revolution that shook the nation's foundations. He declared that the ancient pantheon of gods—led by Amun-Ra—was dead. He replaced them with a single deity: the Aten, the physical disc of the sun, represented as a circle with rays ending in human hands.

To mark his break with the past, he changed his name to Akhenaten, meaning "Effective for the Aten." He abandoned the ancient capital of Thebes, marching his court to a virgin site in Middle Egypt where he founded a new city: Akhetaten, "The Horizon of the Aten."

He ordered his sculptors to abandon the idealized styles of the past. They portrayed him with a highly distorted, realistic body—long neck, heavy jaw, drooping belly, and narrow eyes—creating a startling, organic expression of divine truth.

His focus on his religious revolution caused him to ignore the empire's borders, allowing northern alliances to fracture. When his seventeen-year reign ended, his successor abandoned his city, and later dynasties hacked his name from the monuments, remembering him only as "the heretic of Akhetaten."`,
    keyAchievements: [
      'Initiated the worlds first recorded transition toward state-sponsored monotheism',
      'Founded the short-lived desert capital of Akhetaten (modern Amarna)',
      'Revolutionized Egyptian art, introducing high-fidelity organic expression and realism'
    ],
    majorProjects: [
      {
        name: 'The Great Temple of Aten',
        location: 'Akhetaten (Amarna)',
        description: 'An open-air temple designed to allow the suns rays to directly illuminate hundreds of limestone offering altars.'
      }
    ],
    artifacts: [
      {
        id: 'akhenaten-colossus',
        name: 'Colossal Statue of Akhenaten',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'New Kingdom',
        material: 'Sandstone',
        imageUrl: 'https://images.unsplash.com/photo-1608967909983-a28ff78b9415?q=80&w=600&auto=format&fit=crop',
        description: 'A colossal sandstone statue from Karnak showcasing the exaggerated, realistic physical proportions of the king.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1608967909983-a28ff78b9415?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1608967909983-a28ff78b9415?q=80&w=600&auto=format&fit=crop',
        alt: 'Amarna relief',
        caption: 'A relief depicting the royal family offering under the rays of the Aten.',
        type: 'relief'
      }
    ],
    burialSite: 'Royal Tomb, Amarna',
    familyRelations: [
      { name: 'Amenhotep III', relationship: 'Father' },
      { name: 'Tiye', relationship: 'Mother' },
      { name: 'Nefertiti', relationship: 'Consort' },
      { name: 'Tutankhamun', relationship: 'Son' }
    ],
    legacyQuote: 'He shattered three thousand years of religious tradition, declaring that the sun disc was the only true god.'
  },
  {
    id: 'nefertiti',
    slug: 'nefertiti',
    name: 'Nefertiti',
    arabicName: 'نفرتيتي',
    prenomen: 'Neferneferuaten',
    nomen: 'Nefertiti',
    dynastyId: 'dynasty-18',
    reignStart: -1353,
    reignEnd: -1336,
    reignDurationYears: 17,
    titles: ['Great Royal Wife', 'Lady of Grace', 'Mistress of Upper and Lower Egypt'],
    epithet: 'The Beautiful One Has Come',
    biography: `Her name meant "The Beautiful One Has Come," but she was far more than an aesthetic adornment to the court. As the chief consort of Akhenaten, she ruled alongside him as an equal partner in the great religious revolution. She stood beside him on the palace balcony, presenting gold collars to the elite and offering directly to the Aten sun disc.

Her artists portrayed her in positions of power usually reserved for kings. Reliefs on the temple blocks show her riding her own chariot and striking down foreign captives, carrying the full authority of the crown.

Following her husband's death, some scholars believe she assumed the male title of pharaoh, ruling under the name Smenkhkare or Neferneferuaten. She fought a desperate, final battle to preserve the revolution before the old court asserted itself.

Her painted stucco-limestone bust, discovered in the workshop of the sculptor Thutmose, survived as a timeless image of human symmetry. She stood at the center of the Amarna storm, a powerful woman who shaped the spiritual destiny of the Nile Valley.`,
    keyAchievements: [
      'Ruled as an equal co-regent during the tumultuous Amarna Period',
      'Assumed male pharaonic iconography, including striking down enemies and driving chariots',
      'Represented as the divine female principle alongside the male pharaoh'
    ],
    majorProjects: [
      {
        name: 'The Royal Palace of Amarna',
        location: 'Akhetaten',
        description: 'A massive palace complex featuring painted plaster floors, large courtyards, and royal residential quarters.'
      }
    ],
    artifacts: [
      {
        id: 'nefertiti-bust',
        name: 'The Nefertiti Bust',
        currentLocation: 'Neues Museum, Berlin',
        period: 'New Kingdom',
        material: 'Limestone, Stucco, Paint',
        imageUrl: 'https://images.unsplash.com/photo-1608988220015-d9fe7f2c694a?q=80&w=600&auto=format&fit=crop',
        description: 'A painted limestone bust representing the queen, famous for its elegant profile and perfect facial symmetry.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1608988220015-d9fe7f2c694a?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1608988220015-d9fe7f2c694a?q=80&w=600&auto=format&fit=crop',
        alt: 'Bust of Nefertiti',
        caption: 'The famous painted bust of Nefertiti held at Berlin.',
        type: 'portrait'
      }
    ],
    burialSite: 'Unidentified (possibly Amarna or Valley of the Kings)',
    familyRelations: [
      { name: 'Ay', relationship: 'Father' }, // Highly debated
      { name: 'Akhenaten', relationship: 'Consort' },
      { name: 'Tutankhamun', relationship: 'Son' } // Stepson
    ],
    legacyQuote: 'She stood at the epicenter of the religious storm, an equal partner who ruled with pharaonic authority.'
  },
  {
    id: 'tutankhamun',
    slug: 'tutankhamun',
    name: 'Tutankhamun',
    arabicName: 'توت عنخ آمون',
    prenomen: 'Nebkheperure',
    nomen: 'Tutankhamun',
    dynastyId: 'dynasty-18',
    reignStart: -1332,
    reignEnd: -1323,
    reignDurationYears: 9,
    titles: ['Horus Kanakht Tutmesut', 'King of Upper and Lower Egypt', 'The Boy King'],
    epithet: 'The Boy King',
    biography: `He was nine years old when the throne came to him, inheriting a country fractured by the religious revolution of his father Akhenaten. The empire's traditional temples were closed, and the powerful priests of Amun were stripped of their wealth. Guided by the aging vizier Ay and the military commander Horemheb, the boy king made a historic decision: he would return to the old gods.

He changed his name from Tutankhaten to Tutankhamun, representing the restoration of the king of the gods, Amun. He abandoned the desert city of Amarna, returning the court to Thebes and reopening the ancient temples.

His reign was short, lasting only nine years before his sudden, unexplained death at nineteen. The court buried him quickly in a small, unfinished tomb in the Valley of the Kings, covering him with a spectacular golden mask.

Because his tomb was buried by the builders of a later pharaoh, it remained undisturbed for over three thousand years. When archaeologist Howard Carter broke the seal in 1922, the boy king emerged from the shadows of history as the most famous face of Ancient Egypt, showcasing the incredible wealth of the Eighteenth Dynasty.`,
    keyAchievements: [
      'Restored the traditional polytheistic religion, ending the Amarna transition',
      'Returned the capital to Thebes and reopened the closed temple complexes',
      'His tomb survived intact, preserving the most spectacular array of artifacts'
    ],
    majorProjects: [
      {
        name: 'The Restored Colonnade of Luxor',
        location: 'Luxor Temple',
        description: 'Completed the monumental columns begun by his grandfather, celebrating the return to traditional worship.'
      }
    ],
    artifacts: [
      {
        id: 'tut-mask',
        name: 'The Golden Death Mask of Tutankhamun',
        currentLocation: 'The Egyptian Museum, Cairo',
        period: 'New Kingdom',
        material: 'Gold, Lapis Lazuli, Semi-precious stones',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        description: 'A 10-kilogram mask of beaten gold representing the stylized features of the king, designed to protect his head in the afterlife.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        alt: 'Golden Mask of Tutankhamun',
        caption: 'The spectacular solid gold mask of the boy king.',
        type: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1568289463676-ee4c82b77f0b?q=80&w=600&auto=format&fit=crop',
        alt: 'Tomb treasures',
        caption: 'Gilded shrines and protective statues from the burial chamber of KV62.',
        type: 'artifact'
      }
    ],
    burialSite: 'Tomb KV62, Valley of the Kings',
    familyRelations: [
      { name: 'Akhenaten', relationship: 'Father' },
      { name: 'The Younger Lady', relationship: 'Mother' }, // Genetic match
      { name: 'Ankhesenamun', relationship: 'Consort' }
    ],
    legacyQuote: 'He was a boy when he inherited a broken realm, but his sealed tomb preserved the ultimate golden glory of Kemet.'
  },
  {
    id: 'ramesses-ii',
    slug: 'ramesses-ii',
    name: 'Ramesses II',
    arabicName: 'رمسيس الثاني',
    prenomen: 'Usermaatre-setepenre',
    nomen: 'Ramesses II (Ramesses the Great)',
    dynastyId: 'dynasty-19',
    reignStart: -1279,
    reignEnd: -1213,
    reignDurationYears: 66,
    titles: ['Horus Kanakht Merymaat', 'Son of Ra', 'The Great builder'],
    epithet: 'Ramesses the Great',
    biography: `He was a young commander when the crown came to him, and he resolved that his name would be carved larger and deeper than any king who had gone before. In the fifth year of his reign, he led a force of twenty thousand soldiers across four divisions to fight the Hittite Empire at the Battle of Kadesh. Surrounded by enemies, he personally charged into the battle, turning a near-disaster into a major tactical standoff.

To celebrate the peace treaty that followed—the first written treaty in human history—he embarked on a monumental building campaign that transformed the landscape of the Nile Valley.

At Abu Simbel, he carved four seventy-foot colossal statues of himself directly into the solid sandstone cliffs, designed to strike fear into anyone sailing north from Nubia. He constructed the massive Hypostyle Hall at Karnak, supporting the roof with 134 towering stone columns.

His sixty-six year reign was a display of absolute imperial vanity. He fathered over one hundred children and outlived his successors, ensuring that his physical image—carved on every temple wall—remained the permanent face of Egyptian imperial power for generations.`,
    keyAchievements: [
      'Fought the Battle of Kadesh and negotiated the worlds first peace treaty',
      'Commissioned the colossal rock-cut temples of Abu Simbel',
      'Erected the monumental Great Hypostyle Hall at Karnak'
    ],
    majorProjects: [
      {
        name: 'The Great Temple of Abu Simbel',
        location: 'Nubian Border',
        description: 'A spectacular rock-cut temple featuring four 20-meter colossal statues of the pharaoh carved into the cliff face.'
      },
      {
        name: 'The Ramesseum Mortuary Temple',
        location: 'West Thebes',
        description: 'A grand memorial temple featuring a colossal fallen statue of the king that inspired the poem Ozymandias.'
      }
    ],
    artifacts: [
      {
        id: 'ramesses-colossus',
        name: 'Colossal Seated Statue of Ramesses II',
        currentLocation: 'The British Museum, London',
        period: 'New Kingdom',
        material: 'Granite',
        imageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
        description: 'A massive 7-ton red granite bust of the king showing him with a serene smile, originally from the Ramesseum.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
        alt: 'Abu Simbel Colossi',
        caption: 'The four towering colossi of Ramesses II at Abu Simbel.',
        type: 'monument'
      },
      {
        url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop',
        alt: 'Karnak columns',
        caption: 'The soaring columns of the Hypostyle Hall at Karnak.',
        type: 'monument'
      }
    ],
    burialSite: 'Tomb KV7, Valley of the Kings',
    familyRelations: [
      { name: 'Seti I', relationship: 'Father' },
      { name: 'Tuya', relationship: 'Mother' },
      { name: 'Nefertari', relationship: 'Consort' },
      { name: 'Merneptah', relationship: 'Son' }
    ],
    legacyQuote: 'He carved his cartouche deeper than any pharaoh, leaving behind stone giants that still dominate the southern desert.'
  },
  {
    id: 'cleopatra-vii',
    slug: 'cleopatra-vii',
    name: 'Cleopatra VII',
    arabicName: 'كليوباترا السابعة',
    prenomen: 'Cleopatra Philopator',
    nomen: 'Cleopatra VII',
    dynastyId: 'dynasty-32',
    reignStart: -51,
    reignEnd: -30,
    reignDurationYears: 21,
    titles: ['Queen of the Nile', 'The New Isis', 'Lady of Alexandria'],
    epithet: 'The Last Pharaoh',
    biography: `She was eighteen when she inherited a kingdom sliding into the shadows of Rome's rising empire. Surrounded by court plotters and a hostile younger brother, she refused to play the victim. Relying on her brilliant intellect and deep command of diplomacy, she learned the ancient Egyptian tongue—the first Ptolemaic ruler to do so—and cast herself as the living incarnation of the goddess Isis.

She used her high-fidelity command of statecraft and language to win over the most powerful men in Rome. She smuggled herself into Julius Caesar's quarters, forming an alliance that secured her place on the throne.

Following Caesar's death, she aligned with Mark Antony, forming a political partnership that challenged the authority of Octavian. Together, they ruled the eastern Mediterranean from Alexandria, building a court of unmatched wealth and intellect.

When Octavian's forces breached Alexandria's walls after the Battle of Actium, she chose death rather than being led through Rome in chains. Her suicide ended the Ptolemaic Dynasty and three thousand years of native rule, closing the final book of pharaonic history.`,
    keyAchievements: [
      'Maintained Egyptian independence against Rome through masterful diplomacy',
      'The first Ptolemaic monarch to speak fluent Egyptian and embrace traditional culture',
      'Fused Hellenistic intellect with Pharaonic theology, ruling as the New Isis'
    ],
    majorProjects: [
      {
        name: 'The Caesareum of Alexandria',
        location: 'Alexandria',
        description: 'A grand harbor temple featuring obelisks and colonnaded halls, dedicated to the cult of Julius Caesar.'
      }
    ],
    artifacts: [
      {
        id: 'cleopatra-coin',
        name: 'Silver Tetradrachm of Cleopatra VII',
        currentLocation: 'The British Museum, London',
        period: 'Ptolemaic Period',
        material: 'Silver',
        imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        description: 'A silver coin minted in Alexandria showing the distinct, strong-willed profile of the queen.'
      }
    ],
    portraitImageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
        alt: 'Cleopatra relief at Dendera',
        caption: 'A traditional relief showing Cleopatra VII offering to Isis, carved on the temple walls of Dendera.',
        type: 'relief'
      }
    ],
    burialSite: 'Alexandria (Unidentified Tomb)',
    familyRelations: [
      { name: 'Ptolemy XII Auletes', relationship: 'Father' },
      { name: 'Julius Caesar', relationship: 'Consort' },
      { name: 'Mark Antony', relationship: 'Consort' },
      { name: 'Caesarion', relationship: 'Son' }
    ],
    legacyQuote: 'She was the brilliant, Greek-speaking queen who died as the final pharaoh, closing three thousand years of royal Nile history.'
  }
]

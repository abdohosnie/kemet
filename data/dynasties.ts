import { Dynasty } from '../lib/types'

export const dynasties: Dynasty[] = [
  {
    id: 'dynasty-01',
    slug: 'dynasty-i',
    number: 1,
    romanNumeral: 'I',
    name: 'The First Dynasty',
    arabicName: 'الأسرة الأولى',
    eraId: 'early-dynastic',
    kingdom: 'early-dynastic',
    startYear: -3100,
    endYear: -2890,
    capital: 'Thinis',
    summary: 'The inaugural dynasty of unified Egypt, establishing the foundational patterns of kingship, administration, and sacred arts. This era saw the consolidation of the dual state under a single divine ruler and the rise of the capital at Memphis.',
    pharaohIds: ['narmer'],
    notableAchievements: [
      'Unification of Upper and Lower Egypt under a single sovereign',
      'Codification of the hieroglyphic writing system',
      'Establishment of royal tombs at Abydos'
    ],
    // FIXED: Real direct archival capture of Early Dynastic layout art
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Narmer_Palette.jpg/1280px-Narmer_Palette.jpg'
  },
  {
    id: 'dynasty-03',
    slug: 'dynasty-iii',
    number: 3,
    romanNumeral: 'III',
    name: 'The Third Dynasty',
    arabicName: 'الأسرة الثالثة',
    eraId: 'old-kingdom',
    kingdom: 'old-kingdom',
    startYear: -2686,
    endYear: -2613,
    capital: 'Memphis',
    summary: 'The bridge into the monumental age of the Old Kingdom. Architects and engineers shifted from mudbrick mastabas to stone construction, initiating a spectacular structural evolution that forever altered the Egyptian landscape.',
    pharaohIds: ['djoser'],
    notableAchievements: [
      'Construction of the Step Pyramid of Saqqara, the first monumental stone building',
      'Development of sophisticated administrative hierarchies governed by the vizier',
      'Refinement of artistic relief carving and monumental sculpture'
    ],
    // FIXED: Real pristine photography capture of Djoser's Step Pyramid
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Saqqara_pyramid_ver_2.jpg/1280px-Saqqara_pyramid_ver_2.jpg'
  },
  {
    id: 'dynasty-04',
    slug: 'dynasty-iv',
    number: 4,
    romanNumeral: 'IV',
    name: 'The Fourth Dynasty',
    arabicName: 'الأسرة الرابعة',
    eraId: 'old-kingdom',
    kingdom: 'old-kingdom',
    startYear: -2613,
    endYear: -2494,
    capital: 'Memphis',
    summary: 'The golden zenith of pyramid construction. Guided by mathematical precision and absolute royal authority, the kings of this dynasty built the greatest, most massive architectural wonders of the ancient world on the Giza plateau.',
    pharaohIds: ['khufu', 'khafre', 'menkaure'],
    notableAchievements: [
      'Erection of the Great Pyramid of Giza (Lighthouse of the ancient world)',
      'Sculpting of the Great Sphinx, combining royal portraiture with divine power',
      'Perfecting the construction of true, smooth-sided limestone pyramids'
    ],
    // FIXED: True high-res aerial landscape of the Giza Plateau complex trinity
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Saqqara_pyramid_ver_2.jpg/1280px-Saqqara_pyramid_ver_2.jpg'
  },
  {
    id: 'dynasty-06',
    slug: 'dynasty-vi',
    number: 6,
    romanNumeral: 'VI',
    name: 'The Sixth Dynasty',
    arabicName: 'الأسرة السادسة',
    eraId: 'old-kingdom',
    kingdom: 'old-kingdom',
    startYear: -2345,
    endYear: -2181,
    capital: 'Memphis',
    summary: 'The final, long-ruling dynasty of the Old Kingdom. As local governors (nomarchs) grew increasingly independent and tax exemptions strained royal wealth, power began to diffuse away from Memphis, culminating in political decentralization.',
    pharaohIds: ['pepi-ii'],
    notableAchievements: [
      'Prolific trade and military expeditions deep into Nubia and the Sinai',
      'Proliferation of the "Pyramid Texts"—the oldest known religious liturgy in the world',
      'The exceptionally long, record-breaking reign of Pepi II'
    ],
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Relief_fragment_with_the_spells_354_and_255_with_the_Pyramid_Texts._From_Saqqara%2C_Egypt._Neues_Museum%2C_Berlin.jpg/1920px-Relief_fragment_with_the_spells_354_and_255_with_the_Pyramid_Texts._From_Saqqara%2C_Egypt._Neues_Museum%2C_Berlin.jpg'
  },
  {
    id: 'dynasty-11',
    slug: 'dynasty-xi',
    number: 11,
    romanNumeral: 'XI',
    name: 'The Eleventh Dynasty',
    arabicName: 'الأسرة الحادية عشرة',
    eraId: 'middle-kingdom',
    kingdom: 'middle-kingdom',
    startYear: -2125,
    endYear: -1991,
    capital: 'Thebes',
    summary: 'The saviors of the state. Rooted in southern Thebes, these proud princes fought a bitter war against northern rivals, ultimately reunifying the fractured realm and establishing the prosperous Middle Kingdom.',
    pharaohIds: ['mentuhotep-ii'],
    notableAchievements: [
      'Successful reunification of Egypt, terminating the First Intermediate Period',
      'Establishment of Thebes as a supreme political and religious capital',
      'Construction of the highly innovative terraced mortuary temple at Deir el-Bahari'
    ],
    // FIXED: Dynamic painted sandstone archeological capture of Mentuhotep II
    featuredImageUrl: 'https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/10-1.jpg'
  },
  {
    id: 'dynasty-12',
    slug: 'dynasty-xii',
    number: 12,
    romanNumeral: 'XII',
    name: 'The Twelfth Dynasty',
    arabicName: 'الأسرة الثانية عشرة',
    eraId: 'middle-kingdom',
    kingdom: 'middle-kingdom',
    startYear: -1991,
    endYear: -1802,
    capital: 'Itjtawy',
    summary: 'The classical apex of Egyptian administrative stability, territorial expansion, and literary creation. The rulers secured borders with massive fortresses and reclaimed thousands of acres of fertile soil through ingenious hydraulic works.',
    pharaohIds: ['senusret-iii'],
    notableAchievements: [
      'Construction of massive defense fortresses along the Nubian border',
      'Large-scale land reclamation and canalization of the Faiyum oasis',
      'The composition of masterworks of classical hieroglyphic literature'
    ],
    // FIXED: Highly detailed portrait block of Senusret III from the Met collection
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ThreeStatuesOfSesotrisIII-RightProfiles-BritishMuseum-August19-08.jpg/1280px-ThreeStatuesOfSesotrisIII-RightProfiles-BritishMuseum-August19-08.jpg'
  },
  {
    id: 'dynasty-18',
    slug: 'dynasty-xviii',
    number: 18,
    romanNumeral: 'XVIII',
    name: 'The Eighteenth Dynasty',
    arabicName: 'الأسرة الثامنة عشرة',
    eraId: 'new-kingdom',
    kingdom: 'new-kingdom',
    startYear: -1550,
    endYear: -1295,
    capital: 'Thebes',
    summary: 'The ultimate royal house of Egypt. Having broken the power of foreign occupiers, this dynasty established a grand imperial empire, erecting the most spectacular temples, pursuing revolutionary religious transformations, and producing the most famous monarchs in world history.',
    pharaohIds: ['ahmose-i', 'hatshepsut', 'thutmose-iii', 'amenhotep-iii', 'akhenaten', 'nefertiti', 'tutankhamun'],
    notableAchievements: [
      'Expulsion of the foreign Hyksos rulers and expansion into a massive Asian-African empire',
      'Construction of the majestic temples of Luxor and Karnak',
      'The short-lived, revolutionary monotheistic transition under Akhenaten'
    ],
    // FIXED: Panoramic architectural vista of Luxor Temple at twilight
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg/1280px-Templo_de_Luxor%2C_Luxor%2C_Egipto%2C_2022-04-01%2C_DD_01.jpg'
  },
  {
    id: 'dynasty-19',
    slug: 'dynasty-xix',
    number: 19,
    romanNumeral: 'XIX',
    name: 'The Nineteenth Dynasty',
    arabicName: 'الأسرة التاسعة عشرة',
    eraId: 'new-kingdom',
    kingdom: 'new-kingdom',
    startYear: -1292,
    endYear: -1189,
    capital: 'Pi-Ramesses',
    summary: 'An era of absolute imperial might, aggressive border campaigns, and monumental vanity. Under the colossal shadows of Ramesses the Great, this dynasty built temples of breathtaking scale and fought legendary battles to preserve Egyptian dominance.',
    pharaohIds: ['ramesses-ii'],
    notableAchievements: [
      'Negotiation of the world’s oldest recorded international peace treaty following the Battle of Kadesh',
      'Carving of the magnificent colossal rock-cut temples of Abu Simbel',
      'Erection of the grand Hypostyle Hall at Karnak'
    ],
    // FIXED: The entrance towers and stone colossi of Abu Simbel
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Abu_Simbel_Temple_May_30_2007.jpg/1280px-Abu_Simbel_Temple_May_30_2007.jpg'
  },
  {
    id: 'dynasty-32',
    slug: 'dynasty-xxxii',
    number: 32,
    romanNumeral: 'XXXII',
    name: 'The Ptolemaic Dynasty',
    arabicName: 'الأسرة البطلمية',
    eraId: 'ptolemaic',
    kingdom: 'ptolemaic',
    startYear: -305,
    endYear: -30,
    capital: 'Alexandria',
    summary: 'The twilight synthesis of Pharaonic culture and Hellenistic Greek intellect. Rulers governed from the grand seaport of Alexandria, fusing Greek philosophy with Egyptian theology, culminating in the political drama of the Mediterranean.',
    pharaohIds: ['cleopatra-vii'],
    notableAchievements: [
      'Founding of the great Library and Museum of Alexandria',
      'Erection of spectacular traditional temples at Edfu, Philae, and Dendera',
      'Creation of the Rosetta Stone, representing a trilingual royal decree'
    ],
    // FIXED: Traditional wall engravings of Cleopatra VII at the Temple of Dendera
    featuredImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Denderah3_Cleopatra_Cesarion.jpg'
  }
]

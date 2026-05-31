import { Artifact } from '../lib/types'

export interface GalleryArtifact extends Artifact {
  category: 'statue' | 'relief' | 'tomb' | 'artifact' | 'monument'
  dynastyId?: string
}

export const artifacts: GalleryArtifact[] = [
  {
    id: 'tut-mask',
    name: 'Solid Gold Mask of Tutankhamun',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'New Kingdom (c. 1323 BCE)',
    material: 'Solid Gold, Lapis Lazuli, Glass',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Golden_mask_of_Tutankhamun.jpg/960px-Golden_mask_of_Tutankhamun.jpg',
    description: 'The ultimate treasure of KV62, a solid gold death mask of the boy pharaoh inlaid with obsidian, carnelian, and rich blue lapis lazuli stripes.',
    category: 'artifact',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'ramesses-colossus',
    name: 'Colossal Monolithic Statue of Ramesses II',
    currentLocation: 'The Grand Egyptian Museum, Giza',
    period: 'New Kingdom (reign of Ramesses II)',
    material: 'Red Granite',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/%D8%B1%D9%85%D8%B3%D9%8A%D8%B3_%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A_01.jpg',
    description: 'An 83-tonne colossal red granite masterpiece originating from the Great Temple of Ptah near Memphis. Standing 11 meters tall, it features the pharaoh wearing the white crown of Upper Egypt and now serves as the focal centerpiece monument welcoming visitors in the atrium of the Grand Egyptian Museum.',
    category: 'statue',
    dynastyId: 'dynasty-19'
  },
  {
    id: 'narmer-palette',
    name: 'The Narmer Palette',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'Early Dynastic Period (c. 3100 BCE)',
    material: 'Siltstone',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Narmer_Palette.jpg/1280px-Narmer_Palette.jpg',
    description: 'A masterpiece of early dynastic art, depicting King Narmer wearing the crowns of both Upper and Lower Egypt, striking down his enemies and sealing the unification of the land.',
    category: 'relief',
    dynastyId: 'dynasty-01'
  },
  {
    id: 'djoser-statue',
    name: 'Seated Ka Statue of Djoser',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'Old Kingdom (c. 2650 BCE)',
    material: 'Painted Limestone',
    imageUrl: 'https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/91.jpg',
    description: 'Found in a sealed serdab chamber next to his Step Pyramid, this life-sized statue was carved with narrow peepholes so Djoser’s Ka could watch the rituals performed in his honor.',
    category: 'statue',
    dynastyId: 'dynasty-03'
  },
  {
    id: 'khafre-diorite-statue',
    name: 'Diorite Statue of Khafre',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'Old Kingdom (c. 2540 BCE)',
    material: 'Anorthosite Gneiss',
    imageUrl: 'https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/90.jpg',
    description: 'A glowing, dark diorite statue showing the king seated on his throne, protected by the spreading wings of the falcon god Horus behind his head.',
    category: 'statue',
    dynastyId: 'dynasty-04'
  },
  {
    id: 'menkaure-triad',
    name: 'Menkaure and Hathor Triad',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'Old Kingdom (c. 2510 BCE)',
    material: 'Graywacke',
    imageUrl: 'https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/101.jpg',
    description: 'An exquisitely smooth graywacke sculpture portraying King Menkaure standing alongside the bovine goddess Hathor and a provincial deity.',
    category: 'statue',
    dynastyId: 'dynasty-04'
  },
  {
    id: 'pepi-ii-statuette',
    name: 'Young Pepi II and Queen Mother',
    currentLocation: 'Brooklyn Museum, New York',
    period: 'Old Kingdom (c. 2270 BCE)',
    material: 'Alabaster',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Statuette_of_Queen_Ankhnes-meryre_II_and_her_Son%2C_Pepy_II%2C_front_view.jpg/960px-Statuette_of_Queen_Ankhnes-meryre_II_and_her_Son%2C_Pepy_II%2C_front_view.jpg',
    description: 'A rare alabaster statuette depicting the young boy king Pepi II seated on the lap of his powerful mother, Queen Ankhnesmeryre II.',
    category: 'statue',
    dynastyId: 'dynasty-06'
  },
  {
    id: 'mentuhotep-statue',
    name: 'Regenerative Statue of Mentuhotep II',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'Middle Kingdom (c. 2010 BCE)',
    material: 'Painted Sandstone',
    imageUrl: 'https://egyptianmuseumcairo.eg/wp-content/uploads/2021/03/10-1.jpg',
    description: 'Discovered in a subterranean shaft at Deir el-Bahari, this statue shows the reunifier with pitch-black skin—symbolizing Osiris and Nile fertility—wearing the red crown.',
    category: 'statue',
    dynastyId: 'dynasty-11'
  },
  {
    id: 'senusret-head',
    name: 'Obsidian Portrait Head of Senusret III',
    currentLocation: 'The British Museum, London',
    period: 'Middle Kingdom (c. 1850 BCE)',
    material: 'Obsidian',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Portrait_head_of_pharaoh_Sesostris-Senusret_III_from_a_sphinx_statue_02_%28cropped%29.jpg/960px-Portrait_head_of_pharaoh_Sesostris-Senusret_III_from_a_sphinx_statue_02_%28cropped%29.jpg',
    description: 'A hyper-realistic sculpture of Senusret III, capturing his expressive, careworn eyes and heavy mouth, reflecting the burden of imperial rule.',
    category: 'statue',
    dynastyId: 'dynasty-12'
  },
  {
    id: 'ahmose-axe',
    name: 'Ceremonial Axe of Ahmose I',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'New Kingdom (c. 1540 BCE)',
    material: 'Bronze, Gold, Wood',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Ceremonial_axe_of_Ahmose_I._Luxor_Museum_%28background_retouched%29.jpg/1280px-Ceremonial_axe_of_Ahmose_I._Luxor_Museum_%28background_retouched%29.jpg',
    description: 'An ornate weapon celebrating the liberation of the north, depicting Ahmose standing in a ceremonial striking posture, heavily overlaid with gold.',
    category: 'artifact',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'hatshepsut-colossus',
    name: 'Colossal Statue of Hatshepsut',
    currentLocation: 'The Metropolitan Museum of Art, New York',
    period: 'New Kingdom (c. 1470 BCE)',
    material: 'Granite',
    imageUrl: 'https://images.metmuseum.org/CRDImages/eg/original/21V_CAT091R2.jpg',
    description: 'A colossal red granite portrait from her mortuary temple, depicting Hatshepsut wearing the male double crown and royal kilt of the pharaohs.',
    category: 'statue',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'thutmose-statue',
    name: 'Diorite Statue of Thutmose III, Kneeling with Nu-Jars in his Hands',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'New Kingdom, reign of Thutmose III',
    material: 'Diorite',
    imageUrl: 'https://egyptianmuseumcairo.eg/wp-content/uploads/2021/11/41-1.jpg',
    description: 'An exceptional dark diorite sculpture originating from the Karnak Cachette, depicting Pharaoh Thutmose III kneeling on the Nine Bows in a deeply pious posture of ritual devotion, offering twin Nu jars of libation to Amun-Re.',
    category: 'statue',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'nefertiti-bust',
    name: 'Painted Bust of Nefertiti',
    currentLocation: 'Neues Museum, Berlin',
    period: 'New Kingdom (c. 1345 BCE)',
    material: 'Limestone, Stucco, Painted plaster',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nofretete_Neues_Museum.jpg/960px-Nofretete_Neues_Museum.jpg',
    description: 'Discovered in the workshop of sculptor Thutmose in Amarna, this bust is world-famous for its perfect facial symmetry and iconic blue flat-topped crown.',
    category: 'statue',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'cleopatra-signature-papyrus',
    name: 'Tax Exemption Papyrus with the Autograph of Cleopatra VII',
    currentLocation: 'The Egyptian Museum and Papyrus Collection, Berlin',
    period: 'Ptolemaic Period (February 33 BCE)',
    material: 'Papyrus and Ink',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Papyrus_Berlin_25239.jpg/960px-Papyrus_Berlin_25239.jpg',
    description: 'An official papyrus document detailing a royal decree that grants sweeping tax exemptions and financial privileges to Publius Canidius Crassus, a senior Roman general allied with Mark Antony. At the bottom, the document features Cleopatra\'s handwritten autograph: "ginesthoi" (Greek for "Let it be done"), showing her absolute administrative control over the realm.',
    category: 'artifact',
    dynastyId: 'dynasty-32'
  },
]

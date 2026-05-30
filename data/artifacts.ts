import { Artifact } from '../lib/types'

export interface GalleryArtifact extends Artifact {
  category: 'statue' | 'relief' | 'tomb' | 'artifact' | 'monument'
  dynastyId?: string
}

export const artifacts: GalleryArtifact[] = [
  {
    id: 'narmer-palette',
    name: 'The Narmer Palette',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'Early Dynastic Period (c. 3100 BCE)',
    material: 'Siltstone',
    imageUrl: 'https://images.unsplash.com/photo-1608988220015-d9fe7f2c694a?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1568289463676-ee4c82b77f0b?q=80&w=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1608967909983-a28ff78b9415?q=80&w=600&auto=format&fit=crop',
    description: 'A colossal red granite portrait from her mortuary temple, depicting Hatshepsut wearing the male double crown and royal kilt of the pharaohs.',
    category: 'statue',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'thutmose-statue',
    name: 'Slick Basalt Statue of Thutmose III',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'New Kingdom (c. 1450 BCE)',
    material: 'Basalt',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    description: 'A dark basalt sculpture celebrating the athletic conqueror, standing with left foot forward in the ancient Egyptian posture of strides.',
    category: 'statue',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'nefertiti-bust',
    name: 'Painted Bust of Nefertiti',
    currentLocation: 'Neues Museum, Berlin',
    period: 'New Kingdom (c. 1345 BCE)',
    material: 'Limestone, Stucco, Painted plaster',
    imageUrl: 'https://images.unsplash.com/photo-1608988220015-d9fe7f2c694a?q=80&w=600&auto=format&fit=crop',
    description: 'Discovered in the workshop of sculptor Thutmose in Amarna, this bust is world-famous for its perfect facial symmetry and iconic blue flat-topped crown.',
    category: 'statue',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'tut-mask',
    name: 'Solid Gold Mask of Tutankhamun',
    currentLocation: 'The Egyptian Museum, Cairo',
    period: 'New Kingdom (c. 1323 BCE)',
    material: 'Solid Gold, Lapis Lazuli, Glass',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    description: 'The ultimate treasure of KV62, a solid gold death mask of the boy pharaoh inlaid with obsidian, carnelian, and rich blue lapis lazuli stripes.',
    category: 'artifact',
    dynastyId: 'dynasty-18'
  },
  {
    id: 'ramesses-colossus',
    name: 'Colossal Granite Bust of Ramesses II',
    currentLocation: 'The British Museum, London',
    period: 'New Kingdom (c. 1250 BCE)',
    material: 'Red and Black Granite',
    imageUrl: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?q=80&w=600&auto=format&fit=crop',
    description: 'A colossal dual-tone granite bust from his mortuary temple, showcasing the serene smile and colossal sizing characteristic of Ramesses the Great.',
    category: 'statue',
    dynastyId: 'dynasty-19'
  },
  {
    id: 'cleopatra-coin',
    name: 'Bronze Coin of Cleopatra VII',
    currentLocation: 'The British Museum, London',
    period: 'Ptolemaic Period (c. 40 BCE)',
    material: 'Bronze',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    description: 'A genuine bronze tetradrachm showing Cleopatra’s royal diademed head, representing her political control over Alexandria.',
    category: 'artifact',
    dynastyId: 'dynasty-32'
  }
]

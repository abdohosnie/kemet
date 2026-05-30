import { Era } from '../lib/types'

export const eras: Era[] = [
  {
    id: 'predynastic',
    slug: 'predynastic-period',
    name: 'Predynastic Period',
    arabicName: 'عصر ما قبل الأسرات',
    startYear: -6000,
    endYear: -3150,
    kingdom: 'predynastic',
    description: 'A time of slow gathering, when nomadic tribes settled along the swollen banks of the Nile. In the damp soil, agricultural communities sowed the seeds of a culture that would endure for millennia. Out of small chieftains and rival clans emerged two distinct lands—the Red Land of the Delta and the White Land of the valley—awaiting a spark to forge them into a unified cosmos.',
    dynastyIds: [],
    atmosphereColor: '#8B5E34'
  },
  {
    id: 'early-dynastic',
    slug: 'early-dynastic-period',
    name: 'Early Dynastic Period',
    arabicName: 'عصر الأسرات المبكرة',
    startYear: -3150,
    endYear: -2686,
    kingdom: 'early-dynastic',
    description: 'The forge of unification. A single ruler bound the two warring realms, placing the double crown upon a single head. With the founding of Memphis, the state was born. In this formative crucible, scribes codified the sacred hieroglyphs, priests shaped the divine pantheon, and architects began experimenting with mudbrick structures that would soon rise as monuments of stone.',
    dynastyIds: ['dynasty-01', 'dynasty-02'],
    atmosphereColor: '#B87C4A'
  },
  {
    id: 'old-kingdom',
    slug: 'old-kingdom',
    name: 'Old Kingdom',
    arabicName: 'الدولة القديمة',
    startYear: -2686,
    endYear: -2181,
    kingdom: 'old-kingdom',
    description: 'The Golden Age of Pyramids. Absolute monarchs, ruling as gods on earth, mobilized an entire nation to construct monuments of staggering scale. From the stepped monument at Saqqara to the grand geometric giants of Giza, stone was conquered to guarantee eternal life for the king and cosmic order for the Nile Valley. A supreme era of centralized power, artistic harmony, and monumental vision.',
    dynastyIds: ['dynasty-03', 'dynasty-04', 'dynasty-05', 'dynasty-06'],
    atmosphereColor: '#C9943A'
  },
  {
    id: 'first-intermediate',
    slug: 'first-intermediate-period',
    name: 'First Intermediate Period',
    arabicName: 'عصر الانتقال الأول',
    startYear: -2181,
    endYear: -2055,
    kingdom: 'first-intermediate',
    description: 'The shattering of the crown. As low floods withered the harvests, the centralized authority in Memphis collapsed under its own weight. Local nomarchs seized power, transforming their provinces into independent fiefdoms. It was a time of social upheaval, severe famine, and civil warfare, but also an era of profound literary introspection and individual spiritual democratization.',
    dynastyIds: ['dynasty-07', 'dynasty-08', 'dynasty-09', 'dynasty-10'],
    atmosphereColor: '#5C3D1E'
  },
  {
    id: 'middle-kingdom',
    slug: 'middle-kingdom',
    name: 'Middle Kingdom',
    arabicName: 'الدولة الوسطى',
    startYear: -2055,
    endYear: -1650,
    kingdom: 'middle-kingdom',
    description: 'The Classical Renaissance of art and literature. Reunified by the kings of Thebes, Egypt entered an era of balanced and pragmatic governance. Pharaohs redirected their energy toward massive public works, cultivating the fertile Faiyum oasis and establishing strong military outposts in Nubia. Art reflected a new, somber realism, portraying kings not just as triumphant gods, but as weary guardians of their people.',
    dynastyIds: ['dynasty-11', 'dynasty-12'],
    atmosphereColor: '#A0722A'
  },
  {
    id: 'second-intermediate',
    slug: 'second-intermediate-period',
    name: 'Second Intermediate Period',
    arabicName: 'عصر الانتقال الثاني',
    startYear: -1650,
    endYear: -1550,
    kingdom: 'second-intermediate',
    description: 'The invasion of the foreign kings. Seizing on a fractured court, Asiatic rulers known as the Hyksos swept into the northern Delta, introducing the horse, the chariot, and advanced bronze-working. While they ruled the north from Avaris, native princes held out in southern Thebes. A tense, century-long geopolitical standoff that eventually ignited into a furious war of national liberation.',
    dynastyIds: ['dynasty-13', 'dynasty-14', 'dynasty-15', 'dynasty-16', 'dynasty-17'],
    atmosphereColor: '#8B5E34'
  },
  {
    id: 'new-kingdom',
    slug: 'new-kingdom',
    name: 'New Kingdom',
    arabicName: 'الدولة الحديثة',
    startYear: -1550,
    endYear: -1069,
    kingdom: 'new-kingdom',
    description: 'The Golden Empire. Tempered by foreign occupation, Egypt emerged as an aggressive military superpower, marching its armies across the Levant and deep into Nubia. Gold flowed into Thebes, funding massive temple complexes like Karnak and subterranean tombs in the Valley of the Kings. An epoch defined by grand personas—Hatshepsut, Akhenaten, Tutankhamun, and Ramesses the Great—who dominated the ancient world.',
    dynastyIds: ['dynasty-18', 'dynasty-19', 'dynasty-20'],
    atmosphereColor: '#C9943A'
  },
  {
    id: 'third-intermediate',
    slug: 'third-intermediate-period',
    name: 'Third Intermediate Period',
    arabicName: 'عصر الانتقال الثالث',
    startYear: -1069,
    endYear: -664,
    kingdom: 'third-intermediate',
    description: 'The division of power. Local Libyan generals and high priests of Amun split the administration, governing respectively from Tanis in the north and Thebes in the south. Later, Nubian kings marched north from Kush, conquering Egypt to save its ancient religious traditions from decay. A complex mosaic of competing dynasties, foreign alliances, and shifting loyalties.',
    dynastyIds: ['dynasty-21', 'dynasty-22', 'dynasty-23', 'dynasty-24', 'dynasty-25'],
    atmosphereColor: '#5C3D1E'
  },
  {
    id: 'late-period',
    slug: 'late-period',
    name: 'Late Period',
    arabicName: 'العصر المتأخر',
    startYear: -664,
    endYear: -332,
    kingdom: 'late-period',
    description: 'The twilight of native rule. Amid growing foreign pressures from Assyria, Babylon, and Persia, Egypt experienced a final, glorious renaissance of traditional culture. Saite kings revitalized archaic styles of art, mimicking the triumphs of the Old Kingdom. Despite brief periods of hard-won independence, the land eventually succumbed to Persian imperial dominance, awaiting a new foreign liberator.',
    dynastyIds: ['dynasty-26', 'dynasty-27', 'dynasty-28', 'dynasty-29', 'dynasty-30', 'dynasty-31'],
    atmosphereColor: '#8B5E34'
  },
  {
    id: 'ptolemaic',
    slug: 'ptolemaic-period',
    name: 'Ptolemaic Period',
    arabicName: 'العصر البطلمي',
    startYear: -332,
    endYear: -30,
    kingdom: 'ptolemaic',
    description: 'The fusion of Nile and Aegean. Conquered by Alexander the Great, Egypt was inherited by his general Ptolemy, who established a brilliant Greek-speaking dynasty. In Alexandria, the ancient world built its greatest library and lighthouse. Ptolemaic rulers adopted Egyptian crown rituals, building massive temples in Edfu and Dendera, culminating in the dramatic reign and tragic end of Cleopatra VII.',
    dynastyIds: ['dynasty-32'],
    atmosphereColor: '#B87C4A'
  }
]

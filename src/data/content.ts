export const site = {
  name: 'MFM Teenage Church',
  region: 'North Central Region 7',
  motto: 'Raising Champions for Christ',
  tagline: 'Faith. Fire. Future Generation.',
  location: {
    area: 'Gwagwalada, Abuja',
    addressLines: [
      'Along University of Abuja Teaching Hospital',
      'Gwagwalada Road',
      'Abuja, Nigeria',
    ],
  },
} as const

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Activities', to: '/activities' },
  { label: 'Ministries', to: '/ministries' },
  { label: 'Messages', to: '/messages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const

export type Day = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Monthly'

export type ActivityCategory = 'Service' | 'Bible Study' | 'Prayer' | 'Practice' | 'Meeting' | 'Fellowship'

export interface Activity {
  id: string
  name: string
  description: string
  day: Day
  time?: string
  location: string
  category: ActivityCategory
}

export const weeklyActivities: Activity[] = [
  {
    id: 'sunday-service',
    name: 'Teenage Church Service',
    description:
      'Our main weekly gathering — vibrant praise, powerful word and teenage fellowship with God.',
    day: 'Sunday',
    location: 'Teenage Church Auditorium',
    category: 'Service',
  },
  {
    id: 'wednesday-bible-study',
    name: 'Bible Study',
    description:
      'Deep-dive sessions into the Word of God, building a solid biblical foundation.',
    day: 'Wednesday',
    location: 'Teenage Church Auditorium',
    category: 'Bible Study',
  },
  {
    id: 'friday-prayer',
    name: 'Prayer Meeting',
    description:
      'Corporate prayer, intercession and spiritual warfare for the teenage generation.',
    day: 'Friday',
    location: 'Teenage Church Auditorium',
    category: 'Prayer',
  },
  {
    id: 'choir-practice',
    name: 'Choir Practice',
    description: 'Voice training and rehearsal of praise ministration songs for services.',
    day: 'Saturday',
    location: 'Teenage Church Auditorium',
    category: 'Practice',
  },
  {
    id: 'drama-rehearsal',
    name: 'Drama Rehearsal',
    description: 'Script reading, acting drills and stage practice for the drama unit.',
    day: 'Saturday',
    location: 'Teenage Church Hall',
    category: 'Practice',
  },
  {
    id: 'media-meeting',
    name: 'Media Team Meeting',
    description: 'Planning of media coverage, social media updates and content creation.',
    day: 'Saturday',
    location: 'Media Room',
    category: 'Meeting',
  },
  {
    id: 'leadership-meeting',
    name: 'Leadership Meeting',
    description: 'Meeting of teenage leaders for planning, coordination and mentoring.',
    day: 'Saturday',
    location: 'Teenage Church Auditorium',
    category: 'Meeting',
  },
  {
    id: 'fellowship-activities',
    name: 'Fellowship Activities',
    description: 'Games, outings, outreaches and social events that build community.',
    day: 'Monthly',
    location: 'Church Premises & Outreach Sites',
    category: 'Fellowship',
  },
]

export type ProgrammeCategory =
  | 'Weekly'
  | 'Prayer'
  | 'Bible Study'
  | 'Fellowship'
  | 'Special Programmes'
  | 'Retreats'
  | 'Outreach'

export const programmeCategories: ProgrammeCategory[] = [
  'Weekly',
  'Prayer',
  'Bible Study',
  'Fellowship',
  'Special Programmes',
  'Retreats',
  'Outreach',
]

export interface EventItem {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  flyer?: string
  cta: { label: string; to: string }
  featured?: boolean
  category: ProgrammeCategory
}

export const featuredEvent: EventItem = {
  id: 'august-programme',
  title: 'Stretch Without Snapping',
  date: 'Saturday, August 29, 2026',
  time: '7:00 AM',
  location: 'Mountain of Fire and Miracles Ministries, North Central Region 7, Gwagwalada, Abuja',
  description:
    'A special teenage programme of prayers, the Word, dance, drama, spoken words and games — with Pastor Paul Ushie, Dr. D.K. Olukoya and other anointed men of God. "Enlarge the place of thy tent... lengthen thy cords, and strengthen thy stakes." — Isaiah 54:2-3',
  flyer: '/flyers/stretch-without-snapping-full.png',
  cta: { label: 'Register Now', to: '/contact' },
  featured: true,
  category: 'Special Programmes',
}

export const upcomingEvents: EventItem[] = [
  featuredEvent,
]

export interface Ministry {
  id: string
  name: string
  description: string
  icon: string
}

export const ministries: Ministry[] = [
  {
    id: 'choir',
    name: 'Choir',
    description:
      'The voice of the teenage church — leading heartfelt praise and worship in every service.',
    icon: 'music',
  },
  {
    id: 'drama',
    name: 'Drama',
    description:
      'Communicating the gospel through creative expression, skits and stage presentations.',
    icon: 'theater',
  },
  {
    id: 'media',
    name: 'Media Team',
    description:
      'Capturing moments, telling stories and spreading the gospel across digital platforms.',
    icon: 'camera',
  },
  {
    id: 'technical',
    name: 'Technical Team',
    description:
      'Sound, lighting and stage operations that power seamless worship experiences.',
    icon: 'settings',
  },
  {
    id: 'prayer',
    name: 'Prayer Unit',
    description:
      'The spiritual engine room — praying for the teenage church, the region and the nation.',
    icon: 'flame',
  },
  {
    id: 'welfare',
    name: 'Welfare Unit',
    description:
      'Caring for every teenager — visits, support, encouragement and practical love.',
    icon: 'heart',
  },
  {
    id: 'leadership',
    name: 'Leadership Team',
    description:
      'Raising the next generation of servant leaders through training and mentoring.',
    icon: 'crown',
  },
]

export type MessageCategory = 'Sermon' | 'Bible Study' | 'Devotional' | 'Prayer' | 'Encouragement'

export const messageCategories: MessageCategory[] = [
  'Sermon',
  'Bible Study',
  'Devotional',
  'Prayer',
  'Encouragement',
]

export interface Message {
  id: string
  title: string
  speaker: string
  type: MessageCategory
  description: string
  duration: string
  date: string
}

export const messages: Message[] = [
  {
    id: 'messages-coming-soon',
    title: 'Messages Coming Soon',
    speaker: 'MFM Teenage Church',
    type: 'Sermon',
    description:
      'Official sermons, Bible studies and devotionals will be published here once approved by church leadership.',
    duration: '—',
    date: '',
  },
]

export interface GalleryImage {
  id: string
  title: string
  src?: string
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', title: 'Teenage Sunday Service' },
  { id: 'g2', title: 'Choir Ministration' },
  { id: 'g3', title: 'Bible Study Session' },
  { id: 'g4', title: 'Prayer Night' },
  { id: 'g5', title: 'Drama Presentation' },
  { id: 'g6', title: 'Fellowship Outing' },
]

export interface GrowthPillar {
  id: string
  title: string
  text: string
  icon: string
}

export const growCards: GrowthPillar[] = [
  { id: 'learn', title: 'Learn', icon: 'book', text: 'Grow through God\'s Word.' },
  { id: 'pray', title: 'Pray', icon: 'flame', text: 'Develop a consistent prayer life.' },
  { id: 'connect', title: 'Connect', icon: 'users', text: 'Build healthy Christian fellowship.' },
  { id: 'serve', title: 'Serve', icon: 'wrench', text: 'Discover gifts and serve others.' },
  { id: 'lead', title: 'Lead', icon: 'crown', text: 'Develop responsible Christian leadership.' },
]

export const foundationPillars: GrowthPillar[] = [
  { id: 'learn', title: 'Learn', icon: 'book', text: 'Grow through God\'s Word.' },
  { id: 'pray', title: 'Pray', icon: 'flame', text: 'Develop a consistent prayer life.' },
  { id: 'connect', title: 'Connect', icon: 'users', text: 'Build healthy Christian fellowship.' },
  { id: 'discover', title: 'Discover', icon: 'compass', text: 'Understand purpose and develop character.' },
  { id: 'serve', title: 'Serve', icon: 'wrench', text: 'Discover gifts and serve others.' },
  { id: 'lead', title: 'Lead', icon: 'crown', text: 'Develop responsible Christian leadership.' },
]

export interface FamilyLevel {
  name: string
  note: string
  current?: boolean
}

export interface FamilyDepartment {
  name: string
  note: string
  current?: boolean
}

export const mfmFamily: { levels: FamilyLevel[]; departments: FamilyDepartment[] } = {
  levels: [
    {
      name: 'MFM Worldwide',
      note: 'The global Mountain of Fire and Miracles Ministries family.',
    },
    {
      name: 'North Central Region 7',
      note: 'Our regional church family here in Abuja.',
    },
    {
      name: 'Teenage Church',
      note: 'This website — the teenage department you are visiting now.',
      current: true,
    },
  ],
  departments: [
    { name: 'Adult Church', note: 'The main congregational service of the regional church.' },
    { name: 'Teenage Church', note: 'The teenage department — represented by this website.', current: true },
    { name: 'Youth Church', note: 'The youth department of the regional church.' },
    { name: 'Children Church', note: 'The children\'s department of the regional church.' },
  ],
}

export const contact = {
  phone: 'Contact details coming soon',
  whatsapp: 'Contact details coming soon',
  email: 'Contact details coming soon',
  address: 'Along University of Abuja Teaching Hospital, Gwagwalada Road, Abuja',
  serviceTimes: [
    { label: 'Teenage Church Service', time: 'Schedule to be confirmed' },
    { label: 'Bible Study', time: 'Schedule to be confirmed' },
    { label: 'Prayer Meeting', time: 'Schedule to be confirmed' },
  ],
  socials: [] as { label: string; handle: string }[],
} as const
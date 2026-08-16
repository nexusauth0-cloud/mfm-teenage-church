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
    time: '8:00 AM – 11:00 AM',
    location: 'Teenage Church Auditorium',
    category: 'Service',
  },
  {
    id: 'wednesday-bible-study',
    name: 'Bible Study',
    description:
      'Deep-dive sessions into the Word of God, building a solid biblical foundation.',
    day: 'Wednesday',
    time: '4:30 PM – 6:00 PM',
    location: 'Teenage Church Auditorium',
    category: 'Bible Study',
  },
  {
    id: 'friday-prayer',
    name: 'Prayer Meeting',
    description:
      'Corporate prayer, intercession and spiritual warfare for the teenage generation.',
    day: 'Friday',
    time: '5:00 PM – 7:00 PM',
    location: 'Teenage Church Auditorium',
    category: 'Prayer',
  },
  {
    id: 'choir-practice',
    name: 'Choir Practice',
    description: 'Voice training and rehearsal of praise ministration songs for services.',
    day: 'Saturday',
    time: '2:00 PM – 4:00 PM',
    location: 'Teenage Church Auditorium',
    category: 'Practice',
  },
  {
    id: 'drama-rehearsal',
    name: 'Drama Rehearsal',
    description: 'Script reading, acting drills and stage practice for the drama unit.',
    day: 'Saturday',
    time: '3:00 PM – 5:00 PM',
    location: 'Teenage Church Hall',
    category: 'Practice',
  },
  {
    id: 'media-meeting',
    name: 'Media Team Meeting',
    description: 'Planning of media coverage, social media updates and content creation.',
    day: 'Saturday',
    time: '4:00 PM – 5:00 PM',
    location: 'Media Room',
    category: 'Meeting',
  },
  {
    id: 'leadership-meeting',
    name: 'Leadership Meeting',
    description: 'Meeting of teenage leaders for planning, coordination and mentoring.',
    day: 'Saturday',
    time: '5:00 PM – 6:30 PM',
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
  title: '29th August Programme',
  date: 'August 29',
  time: '9:00 AM – 2:00 PM',
  location: 'MFM Teenage Church, North Central Region 7, Gwagwalada Abuja',
  description:
    'A special teenage programme of praise, the Word and purpose discovery. Invite a friend and come expectant!',
  cta: { label: 'Register Now', to: '/contact' },
  featured: true,
  category: 'Special Programmes',
}

export const upcomingEvents: EventItem[] = [
  featuredEvent,
  {
    id: 'teen-rally',
    title: 'Teenagers\' Fire Rally',
    date: 'October 10',
    time: '9:00 AM – 3:00 PM',
    location: 'MFM Teenage Church, Gwagwalada Abuja',
    description:
      'A high-energy gathering of teenagers across the region for prayer, worship and revival.',
    cta: { label: 'Register', to: '/contact' },
    category: 'Prayer',
  },
  {
    id: 'excellence-summit',
    title: 'Excellence Summit',
    date: 'November 14',
    time: '10:00 AM – 2:00 PM',
    location: 'MFM Teenage Church, Gwagwalada Abuja',
    description:
      'Academic and life-skills empowerment programme for teenagers — exams, careers and destiny.',
    cta: { label: 'Register', to: '/contact' },
    category: 'Special Programmes',
  },
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
    id: 'purpose-driven-teen',
    title: 'A Purpose-Driven Teenager',
    speaker: 'Pastor (Mrs.) M. Adebayo',
    type: 'Sermon',
    description:
      'Discovering God\'s assignment for your life as a teenager in this generation.',
    duration: '45 min',
    date: 'August 2026',
  },
  {
    id: 'word-power',
    title: 'The Power of the Word',
    speaker: 'Bro. S. Okafor',
    type: 'Bible Study',
    description:
      'Practical keys to studying, memorising and living by the Word of God daily.',
    duration: '60 min',
    date: 'July 2026',
  },
  {
    id: 'devotional-fire',
    title: 'Daily Devotional: Fresh Fire',
    speaker: 'Teenage Church Team',
    type: 'Devotional',
    description:
      'Short, spirit-filled devotional readings to start each day with God.',
    duration: '5 min',
    date: 'Ongoing',
  },
  {
    id: 'stand-strong',
    title: 'Stand Strong in a World of Pressure',
    speaker: 'Deaconess T. Bello',
    type: 'Encouragement',
    description:
      'An encouraging word for teenagers navigating peer pressure, school and faith.',
    duration: '25 min',
    date: 'June 2026',
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
  phone: '+234 800 000 0000',
  whatsapp: '+234 800 000 0000',
  email: 'teenagechurch@mfmregion7.org',
  address: 'Along University of Abuja Teaching Hospital, Gwagwalada Road, Abuja',
  serviceTimes: [
    { label: 'Teenage Church Service', time: 'Sundays · 8:00 AM' },
    { label: 'Bible Study', time: 'Wednesdays · 4:30 PM' },
    { label: 'Prayer Meeting', time: 'Fridays · 5:00 PM' },
  ],
  socials: [
    { label: 'Instagram', handle: '@mfmteenagechurch' },
    { label: 'Facebook', handle: 'MFM Teenage Church' },
    { label: 'YouTube', handle: 'MFM Teenage Church' },
    { label: 'TikTok', handle: '@mfmteenagechurch' },
  ],
} as const
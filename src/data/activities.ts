export interface Activity {
  id: number;
  name: string;
  category: 'sports' | 'arts' | 'clubs' | 'academic';
  description: string;
  icon: string;
  schedule: string;
  achievements?: string[];
}

export const activities: Activity[] = [
  {
    id: 1,
    name: 'Soccer',
    category: 'sports',
    description: 'Our school soccer team competes in local and district leagues, fostering teamwork and physical fitness.',
    icon: 'FaFutbol',
    schedule: 'After School',
    achievements: ['District Champions 2024', '3 Provincial Finals'],
  },
  {
    id: 2,
    name: 'Volleyball',
    category: 'sports',
    description: 'Volleyball promotes agility, coordination, and team spirit through competitive matches and training.',
    icon: 'FaBasketballBall',
    schedule: 'After School',
    achievements: ['District Volleyball Champions'],
  },
  {
    id: 3,
    name: 'Handball',
    category: 'sports',
    description: 'Fast-paced handball games develop speed, strength, and strategic thinking.',
    icon: 'FaFutbol',
    schedule: 'After School',
    achievements: ['Provincial Handball Winners'],
  },
  {
    id: 4,
    name: 'Netball',
    category: 'sports',
    description: 'Netball is popular among our female students, promoting agility and strategic thinking.',
    icon: 'FaBasketballBall',
    schedule: 'After School',
    achievements: ['Provincial Silver Medal 2024'],
  },
  {
    id: 5,
    name: 'Traditional Dance',
    category: 'arts',
    description: 'Learn traditional Shona and Ndebele dances, preserving our cultural heritage.',
    icon: 'FaPeopleCarry',
    schedule: 'After School',
    achievements: ['Cultural Festival Performers'],
  },
  {
    id: 6,
    name: 'Choir',
    category: 'arts',
    description: 'Our award-winning choir performs at school events, church services, and competitions.',
    icon: 'FaMusic',
    schedule: 'After School',
    achievements: ['Provincial Choir Competition - 1st Place'],
  },
  {
    id: 7,
    name: 'Marimba Club',
    category: 'clubs',
    description: 'Learn to play the marimba, exploring Zimbabwean traditional music and rhythms.',
    icon: 'FaMusic',
    schedule: 'After School',
    achievements: ['National Marimba Competition - 2nd Place'],
  },
  {
    id: 8,
    name: 'Quiz',
    category: 'academic',
    description: 'Test knowledge across various subjects in inter-school quiz competitions.',
    icon: 'FaBook',
    schedule: 'After School',
    achievements: ['Regional Quiz Champions 2024'],
  },
  {
    id: 9,
    name: 'Drama Club',
    category: 'arts',
    description: 'Explore acting, stagecraft, and performance through plays and presentations.',
    icon: 'FaTheaterMasks',
    schedule: 'After School',
    achievements: ['District Drama Festival Winners'],
  },
  {
    id: 10,
    name: 'Environmental Club',
    category: 'clubs',
    description: 'Promote environmental awareness through tree planting and conservation projects.',
    icon: 'FaLeaf',
    schedule: 'After School',
    achievements: ['Planted 500 trees in local communities', 'Clean-up campaigns in 3 districts', 'Environmental awareness workshops'],
  },
];
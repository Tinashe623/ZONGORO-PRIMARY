export interface BoardingFacility {
  name: string;
  description: string;
  icon: string;
}

export interface DailyScheduleItem {
  time: string;
  activity: string;
}

export interface BoardingRule {
  category: string;
  rules: string[];
}

export const boardingFacilities: BoardingFacility[] = [
  {
    name: 'Dormitories',
    description: 'Separate boys and girls dormitories with comfortable beds, proper ventilation, and adequate storage.',
    icon: 'FaBed',
  },
  {
    name: 'Dining Hall',
    description: 'Nutritious balanced meals served 3 times daily, prepared by trained catering staff.',
    icon: 'FaUtensils',
  },
  {
    name: 'Study Hall',
    description: 'Supervised evening study sessions with quiet environment for homework and revision.',
    icon: 'FaBook',
  },
  {
    name: 'Sick Bay',
    description: 'On-site first aid facility with trained staff for health monitoring and emergency care.',
    icon: 'FaHospital',
  },
  {
    name: 'Recreation',
    description: 'Sports fields, common room with indoor games, and outdoor recreational areas.',
    icon: 'FaRunning',
  },
  {
    name: 'Security',
    description: '24-hour supervision with controlled access, ensuring a safe environment for all boarders.',
    icon: 'FaShieldAlt',
  },
];

export const dailySchedule: DailyScheduleItem[] = [
  { time: '5:30 AM', activity: 'Wake up & Personal hygiene' },
  { time: '6:00 AM', activity: 'Morning devotion & Prayer' },
  { time: '6:30 AM', activity: 'Breakfast' },
  { time: '7:30 AM', activity: 'Classes begin' },
  { time: '12:30 PM', activity: 'Lunch break' },
  { time: '1:30 PM', activity: 'Afternoon classes' },
  { time: '3:30 PM', activity: 'Sports & Activities' },
  { time: '5:00 PM', activity: 'Evening study (prep time)' },
  { time: '6:30 PM', activity: 'Dinner' },
  { time: '7:30 PM', activity: 'Free time / Social activities' },
  { time: '9:00 PM', activity: 'Lights out' },
];

export const boardingRules: BoardingRule[] = [
  {
    category: 'General Conduct',
    rules: [
      'Respect fellow boarders and staff at all times',
      'Follow the school code of conduct',
      'Attend all meals and study sessions',
      'Keep dormitory clean and tidy',
      'No leaving campus without permission',
    ],
  },
  {
    category: 'Personal Items',
    rules: [
      'Bring: bedding, toiletries, school supplies, casual clothes',
      'Do not bring: expensive electronics, jewelry, large amounts of cash',
      'All items must be labeled with student name',
      'Mobile phones allowed only during designated times',
    ],
  },
  {
    category: 'Leave & Visitation',
    rules: [
      'Weekends: Students may go home with prior arrangement',
      'Visitation: Parents/guardians may visit on designated days',
      'Emergency leave requires written permission from parents',
      'No leaving campus during term time without approval',
    ],
  },
  {
    category: 'Health & Safety',
    rules: [
      'Report any illness or injury immediately to matron',
      'Take prescribed medication at designated times',
      'Follow all fire safety procedures',
      'No cooking in dormitories',
      'Report any maintenance issues promptly',
    ],
  },
];

export const boardingFees = [
  { item: 'Boarding Fee (per term)', amount: '$250' },
  { item: 'Registration Fee', amount: '$50 (once-off)' },
  { item: 'Security Deposit', amount: '$50 (refundable)' },
];
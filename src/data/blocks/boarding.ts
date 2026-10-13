import {
  boardingFacilities,
  dailySchedule,
  boardingRules,
  boardingFees,
  type BoardingFacility,
  type DailyScheduleItem,
  type BoardingRule,
} from '../boarding';

/**
 * Default content for the Boarding page (`pages.boarding`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 */
export interface BoardingBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
    benefits: { icon: string; text: string }[];
    fees: {
      heading: string;
      items: { item: string; amount: string }[];
    };
  };
  facilities: {
    heading: string;
    subtitle: string;
    items: BoardingFacility[];
  };
  schedule: {
    heading: string;
    subtitle: string;
    items: DailyScheduleItem[];
  };
  rules: {
    heading: string;
    subtitle: string;
    items: BoardingRule[];
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const boardingBlock: BoardingBlock = {
  hero: {
    title: 'Boarding',
    subtitle: 'Our modern boarding institute provides a safe, supportive home away from home',
    image: '/images/new/02.webp',
    imageAlt: 'Boarding life at St James Zongoro',
  },
  intro: {
    heading: 'Welcome to Our Boarding Institute',
    paragraphs: [
      'St James Zongoro Primary School is proud to offer a modern boarding facility that provides a safe, nurturing environment for students. Our boarding community fosters independence, discipline, and lifelong friendships.',
      'With comfortable dormitories, nutritious meals, supervised study sessions, and engaging recreational activities, our boarders thrive academically and personally.',
    ],
    benefits: [
      { icon: 'FaShieldAlt', text: 'Safe & Secure' },
      { icon: 'FaGraduationCap', text: 'Study Support' },
      { icon: 'FaUsers', text: 'Community' },
      { icon: 'FaHeart', text: 'Pastoral Care' },
    ],
    fees: {
      heading: 'Boarding Fees',
      items: boardingFees,
    },
  },
  facilities: {
    heading: 'Boarding Facilities',
    subtitle: 'Our boarding facility is equipped with modern amenities to ensure comfort and safety.',
    items: boardingFacilities,
  },
  schedule: {
    heading: 'Daily Schedule',
    subtitle: 'Our structured daily routine ensures a balanced mix of studies, meals, and recreation.',
    items: dailySchedule,
  },
  rules: {
    heading: 'Boarding Rules & Expectations',
    subtitle: 'Our boarding community operates on principles of respect, discipline, and personal growth.',
    items: boardingRules,
  },
  cta: {
    eyebrow: 'Boarding Enquiries',
    title: 'Give Your Child a Home Away From Home',
    subtitle:
      'Speak to us about boarding placements, fees, and what a typical day looks like for our boarders.',
    buttonText: 'Enquire About Boarding',
    buttonLink: '/contact',
  },
};

/**
 * Default content for the About page (`pages.about`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 */
export interface AboutBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  legacy: {
    heading: string;
    paragraph: string;
    image: string;
    imageAlt: string;
    imageTitle: string;
    imageSubtitle: string;
  };
  history: {
    year: string;
    icon: string;
    title: string;
    description: string;
  }[];
  visionMission: {
    heading: string;
    vision: { icon: string; title: string; text: string };
    mission: { icon: string; title: string; text: string };
  };
  coreValues: {
    heading: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  alumni: {
    heading: string;
    subtitle: string;
    items: { name: string; title: string; description: string; icon: string }[];
  };
  cta: {
    heading: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
}

export const aboutBlock: AboutBlock = {
  hero: {
    title: 'About Our School',
    subtitle: 'A century of educational excellence rooted in Anglican heritage',
    image: '/images/about.webp',
    imageAlt: 'St James Zongoro Primary School campus',
  },
  legacy: {
    heading: 'Our Legacy Since 1925',
    paragraph:
      'St James Zongoro Primary School stands as a testament to nearly a century of educational excellence in the heart of Ndorikanda Village, Mutasa District, Mutare, Zimbabwe. Founded by the Anglican Diocese and evolving through challenges, we continue to shape the future of generations to come.',
    image: '/images/about-image.webp',
    imageAlt: 'St James Zongoro Primary School Campus',
    imageTitle: 'St James Zongoro Primary School',
    imageSubtitle: 'Established 1925',
  },
  history: [
    {
      year: '1925',
      icon: 'FaCalendarAlt',
      title: 'Founded',
      description:
        'Opened by the Anglican Diocese of Mashonaland (now Diocese of Manicaland) under Father Baker, establishing a legacy of educational excellence.',
    },
    {
      year: '1949',
      icon: 'FaFire',
      title: 'Trial by Fire',
      description:
        'Dormitories destroyed in a suspected arson incident. Yet, from the ashes, our community grew stronger.',
    },
    {
      year: 'Present',
      icon: 'FaAward',
      title: 'Excellence',
      description:
        "Produced notable national leaders including Zimbabwe's Minister of Defence and distinguished Senators.",
    },
  ],
  visionMission: {
    heading: 'Vision & Mission',
    vision: {
      icon: 'FaEye',
      title: 'Vision',
      text: 'To be a prosperous, united, empowered, and life-giving school by 2030.',
    },
    mission: {
      icon: 'FaBullseye',
      title: 'Mission',
      text: 'To roll out an inclusive, skills-oriented and heritage-based curriculum grounded on traditional culture, moral principles, value systems, sport, arts, science, innovation, design and technology.',
    },
  },
  coreValues: {
    heading: 'Our Core Values',
    subtitle: 'The guiding principles that shape every aspect of our school community',
    items: [
      { icon: 'FaShieldAlt', title: 'Patriotism', description: 'Love and dedication to our nation' },
      { icon: 'FaUsers', title: 'Inclusivity', description: 'Embracing diversity in all forms' },
      { icon: 'FaHeart', title: 'Teamwork', description: 'Collaborating for greater impact' },
      { icon: 'FaLightbulb', title: 'Innovation', description: 'Creative solutions for progress' },
      { icon: 'FaStar', title: 'Commitment', description: 'Dedication to our mission' },
      { icon: 'FaMedal', title: 'Efficiency', description: 'Maximizing resources effectively' },
      { icon: 'FaEye', title: 'Transparency', description: 'Open and honest operations' },
      { icon: 'FaShieldAlt', title: 'Accountability', description: 'Taking responsibility seriously' },
      { icon: 'FaHeart', title: 'Integrity', description: 'Unwavering moral principles' },
    ],
  },
  alumni: {
    heading: 'Notable Alumni',
    subtitle: 'Distinguished leaders who began their journey at St James Zongoro',
    items: [
      {
        name: 'Cde Oppah Chamu Zvipange Muchinguri Kashiri',
        title: 'Minister of Defence',
        description: 'Zimbabwe',
        icon: 'FaGlobeAfrica',
      },
      {
        name: 'Hon. Irene Zindi',
        title: 'Senator',
        description: 'Zimbabwe',
        icon: 'FaUserTie',
      },
      {
        name: "Hon. Senator Chief James Kurauone Ndorikanda Man'ai Mutasa ",
        title: 'Senator',
        description: 'Zimbabwe',
        icon: 'FaFlag',
      },
    ],
  },
  cta: {
    heading: 'Join Our School Community',
    description:
      'Enroll your child today and give them the opportunity to thrive in an environment that values academic excellence, heritage, and holistic development.',
    primaryButtonText: 'Apply Now',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
};

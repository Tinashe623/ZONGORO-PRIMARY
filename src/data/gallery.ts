export interface GalleryImage {
  src: string;
  alt: string;
  category: 'School Activities' | 'Church Events' | 'Sports' | 'Projects' | 'Activities' | 'Achievements';
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  // Church Events
  {
    src: '/images/gallery/church-events/church-event1.jpg',
    alt: 'Church Service',
    category: 'Church Events',
  },
  {
    src: '/images/gallery/church-events/church-event2.jpg',
    alt: 'Students in Church',
    category: 'Church Events',
  },
  {
    src: '/images/gallery/church-events/church-event3.jpg',
    alt: 'Youth Fellowship',
    category: 'Church Events',
  },
  {
    src: '/images/gallery/church-events/church-event4.jpg',
    alt: 'Choir Performance',
    category: 'Church Events',
  },

  // Sports
  {
    src: '/images/gallery/sports/team-photo.jpg',
    alt: 'School Sports Team',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/chimanimanni-champions.jpg',
    alt: 'Sibongile Mutasa - From Talent to COSSASA Games',
    category: 'Sports',
    description: 'This photo was taken in 2023 when our school identified Sibongile Mutasa\'s talent in athletics as a sprinter. She was in Grade 5, representing the School, Cluster and District in the Under-12 category at Provincial level—a remarkable achievement. Our school takes pride in not just spotting talent but nurturing it with dedication. Today, Sibongile represents Team Zimbabwe in the COSSASA Games in the Kingdom of Eswatini. A testament to our commitment to developing athletes of tomorrow.',
  },
  {
    src: '/images/gallery/sports/sibo-200m.jpg',
    alt: 'Sibongile Mutasa - Manicaland Province 200m Under-16 Champion',
    category: 'Sports',
    description: 'Congratulations to our very own learner, Sibongile Mutasa for being crowned the 200m U16 Girls Champion in Manicaland Province. Your speed, determination and hard work have made the school proud. Keep flying high!',
  },
  {
    src: '/images/gallery/sports/vollyball.jpg',
    alt: 'Volleyball Match',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/vollyball2.jpg',
    alt: 'Volleyball Action',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/vollyball3.jpg',
    alt: 'Volleyball Tournament',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/quiz-group.jpg',
    alt: '2025 Mutasa District Champions - Guidance and Counselling Quiz',
    category: 'Sports',
    description: 'We continue to shine on the grand stage. It\'s registered on the permanent record that in the Guidance and Counselling Quiz Competitions sponsored by the National Aids Council held on 02/07/2025 in Honde Valley, St James The Great Primary School Zongoro are proudly the 2025 Mutasa District Champions.',
  },
  {
    src: '/images/gallery/sports/sibongile.jpg',
    alt: 'Sibongile Mutasa - COSSASA Games 2025 Under 14 Silver Medalist',
    category: 'Sports',
    description: 'Sibongile Mutasa of St James the Great Primary School Zongoro - The COSSASA Games 2025 Under 14 Girls 100m Silver Medalist, Kingdom of Eswatini',
  },
  {
    src: '/images/gallery/sports/beverly.jpg',
    alt: 'SPEED BIKES Zimbabwe - Platinum Sponsor',
    category: 'Sports',
    description: 'Thank you very much SPEED BIKES Zimbabwe for being our platinum sponsor. We couldn\'t have reached this far without you. With your continued support, the future is very bright.',
  },

  // Projects
  {
    src: '/images/gallery/projects/vegetable-project1.jpg',
    alt: 'Vegetable Project - Planting',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/vegetable-project2.jpg',
    alt: 'Vegetable Project - Growing',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/vegetable-project3.jpg',
    alt: 'Vegetable Project - Harvest',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/students-kile-vegetable1.jpg',
    alt: 'Kile Vegetable Garden',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/kile-vegetable2.jpg',
    alt: 'Kile Garden Students',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/kile-vegetable3.jpg',
    alt: 'Kile Vegetable Progress',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/kile-vegetable4.jpg',
    alt: 'Kile Harvest',
    category: 'Projects',
  },

  // Activities - Music & Culture
  {
    src: '/images/gallery/marimba-club.jpg',
    alt: 'Marimba Club Performance',
    category: 'Activities',
  },
  {
    src: '/images/gallery/marimba2.jpg',
    alt: 'Marimba Ensemble',
    category: 'Activities',
  },
  {
    src: '/images/gallery/mmarimba3.jpg',
    alt: 'Marimba Music',
    category: 'Activities',
  },

  // Activities - ECD
  {
    src: '/images/gallery/ecd-playing-centre1.jpg',
    alt: 'ECD Playing Centre',
    category: 'Activities',
  },
  {
    src: '/images/gallery/ecd-playing-centre2.jpg',
    alt: 'ECD Activities',
    category: 'Activities',
  },

  // Transport
  {
    src: '/images/gallery/bus-welcoming.jpg',
    alt: 'School Bus Welcome',
    category: 'Activities',
  },

  // Achievements
  {
    src: '/images/gallery/head-award.jpg',
    alt: 'Headmaster Award',
    category: 'Achievements',
  },
  {
    src: '/images/gallery/head--master-inoffice.jpg',
    alt: 'Headmaster in Office',
    category: 'Achievements',
  },

  // Additional School Activities
  {
    src: '/images/gallery/vegetable.jpg',
    alt: 'School Garden',
    category: 'School Activities',
  },
  {
    src: '/images/gallery/pupils-capital.jpg',
    alt: 'First Capital Bank Zimbabwe - Global Money Week 2026',
    category: 'School Activities',
    description: 'We are proud to have hosted First Capital Bank Zimbabwe for the commemoration of the Global Money Week for the year 2026. The event left us richer and more empowered. Thank you First Capital Mutare for the philanthropic and strategic visit. Long live our strategic business partnership!',
  },
];
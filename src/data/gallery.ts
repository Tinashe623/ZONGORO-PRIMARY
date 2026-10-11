export interface GalleryImage {
  src: string;
  alt: string;
  category: 'School Activities' | 'Church Events' | 'Sports' | 'Projects' | 'Activities' | 'Achievements' | 'Classrooms' | 'Chapel & Assembly' | 'Campus';
  description?: string;
}

export const galleryImages: GalleryImage[] = [
  // Church Events
  {
    src: '/images/gallery/church-events/church-event1.webp',
    alt: 'Church Service',
    category: 'Church Events',
  },
  {
    src: '/images/gallery/church-events/church-event2.webp',
    alt: 'Students in Church',
    category: 'Church Events',
  },
  {
    src: '/images/gallery/church-events/church-event3.webp',
    alt: 'Youth Fellowship',
    category: 'Church Events',
  },
  {
    src: '/images/gallery/church-events/church-event4.webp',
    alt: 'Choir Performance',
    category: 'Church Events',
  },

  // Sports
  {
    src: '/images/gallery/sports/team-photo.webp',
    alt: 'School Sports Team',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/chimanimanni-champions.webp',
    alt: 'Sibongile Mutasa - From Talent to COSSASA Games',
    category: 'Sports',
    description: 'This photo was taken in 2023 when our school identified Sibongile Mutasa\'s talent in athletics as a sprinter. She was in Grade 5, representing the School, Cluster and District in the Under-12 category at Provincial level—a remarkable achievement. Our school takes pride in not just spotting talent but nurturing it with dedication. Today, Sibongile represents Team Zimbabwe in the COSSASA Games in the Kingdom of Eswatini. A testament to our commitment to developing athletes of tomorrow.',
  },
  {
    src: '/images/gallery/sports/sibo-200m.webp',
    alt: 'Sibongile Mutasa - Manicaland Province 200m Under-16 Champion',
    category: 'Sports',
    description: 'Congratulations to our very own learner, Sibongile Mutasa for being crowned the 200m U16 Girls Champion in Manicaland Province. Your speed, determination and hard work have made the school proud. Keep flying high!',
  },
  {
    src: '/images/gallery/sports/vollyball.webp',
    alt: 'Volleyball Match',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/vollyball2.webp',
    alt: 'Volleyball Action',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/vollyball3.webp',
    alt: 'Volleyball Tournament',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/quiz-group.webp',
    alt: '2025 Mutasa District Champions - Guidance and Counselling Quiz',
    category: 'Sports',
    description: 'We continue to shine on the grand stage. It\'s registered on the permanent record that in the Guidance and Counselling Quiz Competitions sponsored by the National Aids Council held on 02/07/2025 in Honde Valley, St James The Great Primary School Zongoro are proudly the 2025 Mutasa District Champions.',
  },
  {
    src: '/images/gallery/sports/sibongile.webp',
    alt: 'Sibongile Mutasa - COSSASA Games 2025 Under 14 Silver Medalist',
    category: 'Sports',
    description: 'Sibongile Mutasa of St James the Great Primary School Zongoro - The COSSASA Games 2025 Under 14 Girls 100m Silver Medalist, Kingdom of Eswatini',
  },
  {
    src: '/images/gallery/sports/beverly.webp',
    alt: 'SPEED BIKES Zimbabwe - Platinum Sponsor',
    category: 'Sports',
    description: 'Thank you very much SPEED BIKES Zimbabwe for being our platinum sponsor. We couldn\'t have reached this far without you. With your continued support, the future is very bright.',
  },

  // Projects
  {
    src: '/images/gallery/projects/vegetable-project1.webp',
    alt: 'Vegetable Project - Planting',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/vegetable-project2.webp',
    alt: 'Vegetable Project - Growing',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/vegetable-project3.jpg',
    alt: 'Vegetable Project - Harvest',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/students-kile-vegetable1.webp',
    alt: 'Kile Vegetable Garden',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/kile-vegetable2.webp',
    alt: 'Kile Garden Students',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/kile-vegetable3.jpg',
    alt: 'Kile Vegetable Progress',
    category: 'Projects',
  },
  {
    src: '/images/gallery/projects/kile-vegetable4.webp',
    alt: 'Kile Harvest',
    category: 'Projects',
  },

  // Activities - Music & Culture
  {
    src: '/images/gallery/marimba-club.webp',
    alt: 'Marimba Club Performance',
    category: 'Activities',
  },
  {
    src: '/images/gallery/marimba2.webp',
    alt: 'Marimba Ensemble',
    category: 'Activities',
  },
  {
    src: '/images/gallery/mmarimba3.webp',
    alt: 'Marimba Music',
    category: 'Activities',
  },

  // Activities - ECD
  {
    src: '/images/gallery/ecd-playing-centre1.webp',
    alt: 'ECD Playing Centre',
    category: 'Activities',
  },
  {
    src: '/images/gallery/ecd-playing-centre2.webp',
    alt: 'ECD Activities',
    category: 'Activities',
  },

  // Achievements
  {
    src: '/images/gallery/head-award.webp',
    alt: 'Headmaster Award',
    category: 'Achievements',
  },
  {
    src: '/images/gallery/head-master-inoffice.webp',
    alt: 'Headmaster in Office',
    category: 'Achievements',
  },

  // Additional School Activities
  {
    src: '/images/gallery/vegetable.webp',
    alt: 'School Garden',
    category: 'School Activities',
  },
  {
    src: '/images/gallery/pupils-capital.webp',
    alt: 'First Capital Bank Zimbabwe - Global Money Week 2026',
    category: 'School Activities',
    description: 'We are proud to have hosted First Capital Bank Zimbabwe for the commemoration of the Global Money Week for the year 2026. The event left us richer and more empowered. Thank you First Capital Mutare for the philanthropic and strategic visit. Long live our strategic business partnership!',
  },

  // Classrooms - September 2026
  {
    src: '/images/moments/classroom-01.webp',
    alt: 'In the classroom at St James Zongoro',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-02.webp',
    alt: 'Learning in action at St James Zongoro',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-03.webp',
    alt: 'A lesson in progress at St James Zongoro',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-04.webp',
    alt: 'Pupils at work in class',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-05.webp',
    alt: 'Classroom moments at St James Zongoro',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-06.webp',
    alt: 'Learning together in class',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-07.webp',
    alt: 'Teaching and learning at St James Zongoro',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-08.webp',
    alt: 'Focused learners in the classroom',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-09.webp',
    alt: 'Study time at St James Zongoro',
    category: 'Classrooms',
  },
  {
    src: '/images/moments/classroom-10.webp',
    alt: 'A classroom scene at St James Zongoro',
    category: 'Classrooms',
  },

  // Chapel & Assembly - September 2026
  {
    src: '/images/moments/chapel-01.webp',
    alt: 'Chapel & assembly at St James Zongoro',
    category: 'Chapel & Assembly',
  },
  {
    src: '/images/moments/chapel-02.webp',
    alt: 'Worship and fellowship at St James Zongoro',
    category: 'Chapel & Assembly',
  },
  {
    src: '/images/moments/chapel-03.webp',
    alt: 'The school gathered at chapel',
    category: 'Chapel & Assembly',
  },
  {
    src: '/images/moments/chapel-04.webp',
    alt: 'Assembly time at St James Zongoro',
    category: 'Chapel & Assembly',
  },

  // Campus - September 2026
  {
    src: '/images/moments/campus-01.webp',
    alt: 'The campus of St James Zongoro Primary School',
    category: 'Campus',
  },
  {
    src: '/images/moments/campus-02.webp',
    alt: 'School grounds at St James Zongoro',
    category: 'Campus',
  },
  {
    src: '/images/moments/campus-03.webp',
    alt: 'A bright day at St James Zongoro',
    category: 'Campus',
  },
];
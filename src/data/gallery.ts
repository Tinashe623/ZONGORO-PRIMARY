export interface GalleryImage {
  src: string;
  alt: string;
  category: 'School Activities' | 'Church Events' | 'Sports' | 'Projects' | 'Activities' | 'Achievements';
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
    alt: 'Chimanimanni Champions',
    category: 'Sports',
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
    alt: 'Quiz Competition Team',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/sibongile.jpg',
    alt: 'Sibongile Player',
    category: 'Sports',
  },
  {
    src: '/images/gallery/sports/beverly.jpg',
    alt: 'Beverly Athlete',
    category: 'Sports',
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
];
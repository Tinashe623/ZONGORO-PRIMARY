import { announcements } from './announcements';
import { schoolContact } from './contact';
import { galleryImages } from './gallery';
import { gradeSevenResults } from './results';
import { staffMembers } from './staff';
import { testimonials } from './testimonials';
import { defaultBlocks } from './blocks';
import {
  enrollmentComment,
  enrollmentData,
  passRateComment,
  passRateData,
} from './assessment';
import type { WebsiteContent, WebsiteMomentItem } from '../types/website';

/**
 * Bundled static content used when the CMS is unreachable or has no content for
 * a section. This mirrors the original hard-coded website exactly, so the public
 * site is never empty.
 */

const moments: WebsiteMomentItem[] = [
  { src: '/images/moments/campus-01.webp', caption: 'Our Campus', tag: 'Campus' },
  { src: '/images/moments/classroom-02.webp', caption: 'Learning in Action', tag: 'Classrooms' },
  { src: '/images/moments/chapel-01.webp', caption: 'Faith & Fellowship', tag: 'Chapel & Assembly' },
  { src: '/images/moments/classroom-05.webp', caption: 'Classroom Moments', tag: 'Classrooms' },
  { src: '/images/moments/campus-02.webp', caption: 'School Grounds', tag: 'Campus' },
  { src: '/images/moments/chapel-03.webp', caption: 'Assembly Time', tag: 'Chapel & Assembly' },
  { src: '/images/moments/classroom-08.webp', caption: 'Focused Learners', tag: 'Classrooms' },
  { src: '/images/moments/campus-03.webp', caption: 'A Bright Future', tag: 'Campus' },
];

const aboutHistory = [
  'St James Zongoro Primary School was established in 1925 by the Anglican Diocese serving Ndorikanda Village in Mutasa District, Mutare Province. What began as a modest initiative has grown into a respected institution that has produced generations of successful students.',
  'Founded in partnership with the Anglican Church and the local chief, our school has maintained its commitment to providing quality education while preserving our cultural heritage and Christian values.',
].join('\n\n');

export const defaultWebsiteContent: WebsiteContent = {
  hero: {
    heading: 'St James Zongoro Primary School',
    subheading:
      'Where academic excellence meets Anglican values, shaping future leaders through quality education and community spirit.',
    badge: 'Now accepting {year} enrolments',
    secondaryBadge: 'ECD to Grade 7',
    image: '/images/hero-2026.webp',
    imageAlt: 'St James Zongoro Primary School',
    primaryCta: { label: 'Apply Now', url: '' },
    secondaryCta: { label: 'Contact Us', url: '/contact' },
  },
  stats: {
    foundedYear: 1925,
    levels: 9,
    facilities: 6,
    moments: moments.length,
  },
  news: announcements.map((item) => ({
    date: item.date,
    title: item.title,
    excerpt: item.excerpt,
    content: item.content,
    sourceUrl: item.sourceUrl,
  })),
  gallery: galleryImages.map((image) => ({
    src: image.src,
    alt: image.alt,
    category: image.category,
    description: image.description,
  })),
  moments,
  events: [],
  team: staffMembers.map((member) => ({
    id: String(member.id),
    name: member.name,
    title: member.title,
    specialisation: member.specialisation,
    image: member.image,
    qualifications: member.qualifications,
    yearsAtSchool: member.yearsAtSchool,
    bio: member.bio,
    category: member.category,
  })),
  testimonials: testimonials.map((item) => ({
    quote: item.quote,
    author: item.author,
    role: item.role,
  })),
  results: {
    passRates: passRateData,
    enrollment: enrollmentData,
    grade7: gradeSevenResults.map((row) => ({
      year: row.year,
      passRate: row.passRate,
      students: row.students,
    })),
    enrollmentComment,
    passRateComment,
  },
  achievements: [
    { label: 'District Titles', count: 12, icon: 'FaTrophy' },
    { label: 'Provincial Medals', count: 28, icon: 'FaMedal' },
    { label: 'National Competitions', count: 8, icon: 'FaStar' },
  ],
  facilities: [
    {
      title: 'Library',
      description: 'Well-stocked resource center',
      image: '/images/moments/classroom-09.webp',
      imageAlt: 'Pupils during study time at St James Zongoro',
      icon: 'FaBook',
    },
    {
      title: 'Computer Lab',
      description: 'Modern tech hub',
      image: '/images/new/07.webp',
      imageAlt: 'Learning with technology at St James Zongoro',
      icon: 'FaLaptop',
    },
    {
      title: 'Green Campus',
      description: 'Lush learning environment',
      image: '/images/moments/campus-02.webp',
      imageAlt: 'The school grounds at St James Zongoro',
      icon: 'FaTree',
    },
    {
      title: 'Sports Field',
      description: 'Athletic development',
      image: '/images/gallery/sports/vollyball.webp',
      imageAlt: 'Volleyball match on the school sports field',
      icon: 'FaFutbol',
    },
    {
      title: 'Music Room',
      description: 'Arts & creativity',
      image: '/images/gallery/marimba-club.webp',
      imageAlt: 'Marimba club performance at St James Zongoro',
      icon: 'FaMusic',
    },
    {
      title: 'Transport',
      description: 'Reliable bus service',
      image: '/images/school-bus.webp',
      imageAlt: 'The St James Zongoro school bus',
      icon: 'FaBus',
    },
  ],
  features: [
    {
      title: 'Academic Excellence',
      description:
        'Consistent Grade 7 pass rates above 90%, preparing students for success in secondary education and beyond.',
      icon: 'FaGraduationCap',
    },
    {
      title: 'Christian Foundation',
      description:
        'Rooted in Anglican values and morals, fostering character development alongside academic achievement.',
      icon: 'FaChurch',
    },
    {
      title: 'Community Partnership',
      description:
        'Strong ties with local leadership and village community, creating a supportive learning environment.',
      icon: 'FaUsers',
    },
    {
      title: 'Reliable Transport',
      description:
        'Safe daily school bus service ensuring all students can attend school reliably and safely.',
      icon: 'FaBus',
    },
    {
      title: 'Boarding Facilities',
      description:
        'Modern boarding institute with comfortable dormitories, supervised study, and nutritious meals.',
      icon: 'FaHome',
    },
    {
      title: 'Holistic Development',
      description:
        'Sports, arts, and extracurricular activities that develop well-rounded individuals.',
      icon: 'FaBullseye',
    },
  ],
  about: {
    history: aboutHistory,
    vision:
      'To be a center of academic excellence and Christian leadership that empowers students to become responsible citizens who contribute positively to their communities.',
    mission:
      'To provide quality, affordable education grounded in Anglican principles, fostering holistic development of every child through innovative teaching and community partnership.',
    coreValues: [
      'Academic Excellence',
      'Christian Values',
      'Community Service',
      'Respect & Integrity',
      'Inclusive Education',
    ],
  },
  contact: {
    name: schoolContact.name,
    shortName: schoolContact.shortName,
    tagline: schoolContact.tagline,
    description: schoolContact.description,
    address: schoolContact.address,
    addressShort: schoolContact.addressShort,
    phoneDisplay: schoolContact.phoneDisplay,
    phoneInternational: schoolContact.phoneInternational,
    email: schoolContact.email,
    officeHours: schoolContact.officeHours,
    facebook: schoolContact.facebook,
    whatsapp: undefined,
  },
  seo: {
    title: 'St James Zongoro Primary School',
    description: schoolContact.description,
  },
  blocks: defaultBlocks,
  source: 'default',
};

import { activities, type Activity } from '../activities';

/**
 * Default content for the Activities page (`pages.activities`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 *
 * `categories` holds the labels shown on the category filter tabs, in the same
 * order as the internal filter keys kept in `ActivitiesGrid`.
 */
export interface ActivitiesBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    heading: string;
    subtitle: string;
  };
  categories: string[];
  card: {
    achievementsLabel: string;
    tapHint: string;
    hoverHint: string;
  };
  activities: Activity[];
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    secondaryText: string;
    secondaryLink: string;
  };
}

export const activitiesBlock: ActivitiesBlock = {
  hero: {
    title: 'Co-Curricular Activities',
    subtitle: 'Discover your talents through our diverse range of sports, arts, and clubs',
    image: '/images/gallery/sports/vollyball.webp',
    imageAlt: 'Pupils in a volleyball match',
  },
  intro: {
    heading: 'Explore Our Activities',
    subtitle:
      'Choose from our diverse range of co-curricular activities designed to nurture talents and build character',
  },
  categories: ['All', 'Sports', 'Arts & Culture', 'Clubs', 'Academic'],
  card: {
    achievementsLabel: 'Achievements:',
    tapHint: '👆 Tap to expand',
    hoverHint: '🖱️ Hover to view',
  },
  activities,
  cta: {
    eyebrow: 'Get Involved',
    title: 'Join Our Activities',
    subtitle: 'Enroll your child in any of our exciting activities and watch them grow.',
    buttonText: 'Enroll Now',
    secondaryText: 'Learn More',
    secondaryLink: '/contact',
  },
};

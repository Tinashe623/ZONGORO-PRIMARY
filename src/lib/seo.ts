export const SITE_NAME = 'St James Zongoro Primary School';
export const SITE_TAGLINE = 'Quality education rooted in Anglican values and community partnership';

interface PageMeta {
  title: string;
  description: string;
}

const baseDescription = `${SITE_TAGLINE}. Located in Mutare, Zimbabwe — ECD to Grade 7.`;

export const pageMeta: Record<string, PageMeta> = {
  default: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: baseDescription,
  },
  '/': {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: baseDescription,
  },
  '/about': {
    title: 'About Us | St James Zongoro Primary School',
    description: 'Learn about the history, mission and Anglican values of St James Zongoro Primary School in Mutare, Zimbabwe.',
  },
  '/church': {
    title: 'Church & Faith | St James Zongoro Primary School',
    description: 'Our Anglican foundation shapes worship, prayer and character formation across school life at St James Zongoro.',
  },
  '/community': {
    title: 'Our Community | St James Zongoro Primary School',
    description: 'St James Zongoro is rooted in the Ndorikanda community — partnering with local leaders, parents and villagers.',
  },
  '/academics': {
    title: 'Academics | St James Zongoro Primary School',
    description: 'Explore the academic programme and curriculum at St James Zongoro Primary School, from ECD to Grade 7.',
  },
  '/assessment': {
    title: 'Assessment | St James Zongoro Primary School',
    description: 'How teaching and learning are assessed at St James Zongoro — continuous assessment and national examinations.',
  },
  '/staff': {
    title: 'Our Staff | St James Zongoro Primary School',
    description: 'Meet the dedicated educators and leadership team of St James Zongoro Primary School.',
  },
  '/admissions': {
    title: 'Admissions | St James Zongoro Primary School',
    description: 'Apply to St James Zongoro Primary School — admissions requirements, fees and application steps for ECD to Grade 7.',
  },
  '/boarding': {
    title: 'Boarding | St James Zongoro Primary School',
    description: 'Boarding facilities and daily life at St James Zongoro Primary School in Mutare, Zimbabwe.',
  },
  '/activities': {
    title: 'Activities | St James Zongoro Primary School',
    description: 'Sports, music, culture and clubs — co-curricular life at St James Zongoro Primary School.',
  },
  '/transport': {
    title: 'Transport | St James Zongoro Primary School',
    description: 'Reliable school transport services and routes offered by St James Zongoro Primary School.',
  },
  '/gallery': {
    title: 'Gallery | St James Zongoro Primary School',
    description: 'Moments of learning, faith and community at St James Zongoro Primary School.',
  },
  '/contact': {
    title: 'Contact Us | St James Zongoro Primary School',
    description: 'Get in touch with St James Zongoro Primary School — call, email or visit us in Mutare, Zimbabwe.',
  },
  '/privacy': {
    title: 'Privacy Policy | St James Zongoro Primary School',
    description: 'Privacy policy for the St James Zongoro Primary School website.',
  },
  '/terms': {
    title: 'Terms of Use | St James Zongoro Primary School',
    description: 'Terms of use for the St James Zongoro Primary School website.',
  },
  other: {
    title: 'Page Not Found | St James Zongoro Primary School',
    description: 'The page you are looking for could not be found.',
  },
};

export const getPageMeta = (pathname: string): PageMeta =>
  pageMeta[pathname] ?? pageMeta.other ?? pageMeta.default;
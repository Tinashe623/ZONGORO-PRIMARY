/**
 * Default content for the Church page (`pages.church`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 */
export interface ChurchBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  foundation: {
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    churchName: string;
    churchLocation: string;
    logo: string;
    authorityTitle: string;
    authorityText: string;
  };
  values: {
    heading: string;
    subtitle: string;
    quote: string;
    image: string;
    imageAlt: string;
    imageCaption: string;
    items: { icon: string; text: string }[];
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const churchBlock: ChurchBlock = {
  hero: {
    title: 'Our Anglican Heritage',
    subtitle: 'Building character through Christian values and worship',
    image: '/images/students-inchurch.webp',
    imageAlt: 'Students in the school church',
  },
  foundation: {
    heading: 'Our Christian Foundation',
    paragraphs: [
      'Our Anglican foundation shapes every aspect of school life, from daily prayers to character education. We believe that integrating faith with learning creates well-rounded individuals who serve their communities with integrity.',
      'Students participate in daily devotionals, weekly chapel services, and learn Christian values that guide them throughout their lives. Our partnership with St James Anglican Church ensures spiritual growth alongside academic achievement.',
    ],
    image: '/images/students-inchurch.webp',
    imageAlt: 'Students in Anglican Church',
    churchName: 'St James Anglican Church',
    churchLocation: 'Zongoro',
    logo: '/images/anglican-logo.webp',
    authorityTitle: 'Responsible Authority',
    authorityText:
      'St James Zongoro Primary School is governed by the Anglican Diocese of Manicaland, under the guidance of the Church. Our Christian values are embedded in everything we do, fostering holistic development grounded in faith.',
  },
  values: {
    heading: 'Our Church Values',
    subtitle: 'The principles that guide our spiritual journey',
    quote:
      '"Train up a child in the way he should go: and when he is old, he will not depart from it." — Proverbs 22:6',
    image: '/images/moments/campus-03.webp',
    imageAlt: 'The church building at St James Zongoro',
    imageCaption: 'Church Building',
    items: [
      { icon: 'FaCross', text: 'Faith & Trust in God' },
      { icon: 'FaHeart', text: 'Love & Compassion' },
      { icon: 'FaBook', text: 'Scripture-Based Learning' },
      { icon: 'FaPrayingHands', text: 'Prayer & Worship' },
      { icon: 'FaChurch', text: 'Community Fellowship' },
    ],
  },
  cta: {
    eyebrow: 'Anglican Heritage',
    title: 'Worship and Learn With Our Community',
    subtitle:
      'Our doors are open to all families. Join us for Sunday school and experience our faith-centred approach to education.',
    buttonText: 'Plan a Visit',
    buttonLink: '/contact',
  },
};

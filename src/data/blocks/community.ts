/**
 * Default content for the Community page (`pages.community`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 */
export interface CommunityBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    heading: string;
    paragraph: string;
  };
  chief: {
    image: string;
    imageAlt: string;
    name: string;
    role: string;
    contributionsHeading: string;
    contributionsParagraph: string;
    quote: string;
    quoteAttribution: string;
  };
  highlights: { icon: string; title: string; description: string }[];
  activitiesSection: {
    heading: string;
    subtitle: string;
    watchLabel: string;
    watchHint: string;
    placeholderHint: string;
  };
  activities: {
    title: string;
    description: string;
    type: 'video' | 'placeholder';
    videoId?: string;
    placeholder?: string;
  }[];
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const communityBlock: CommunityBlock = {
  hero: {
    title: 'Community Partnership',
    subtitle: "Working together for our children's future",
    image: '/images/moments/campus-03.webp',
    imageAlt: 'A bright day on the school grounds',
  },
  intro: {
    heading: 'Our Community Connection',
    paragraph:
      'St James Zongoro Primary School is deeply rooted in the Ndorikanda community. Our partnership with Chief James Mutasa, local leaders, parents, and villagers creates a supportive environment where every child can succeed.',
  },
  chief: {
    image: '/images/chief-image.webp',
    imageAlt: 'Chief James Mutasa',
    name: 'Chief James Mutasa',
    role: 'Community Leader & School Patron',
    contributionsHeading: "Chief's Contributions",
    contributionsParagraph:
      'Chief James Mutasa has been instrumental in transforming our school. His dedication to education has mobilised the entire community, leading initiatives that ensure every child has access to quality learning.',
    quote:
      '"Our partnership with St James Zongoro Primary School has transformed our community. Education is the key to our village\'s future, and together we are building something special for the next generation."',
    quoteAttribution: '— Chief James Mutasa',
  },
  highlights: [
    {
      icon: 'FaBus',
      title: 'School Transport',
      description:
        'Chief James Mutasa Mobilized community funds to purchase a school bus for safe student transportation.',
    },
    {
      icon: 'FaGift',
      title: 'Donations & Support',
      description:
        'Regularly supports students with learning materials, uniforms, and daily necessities.',
    },
    {
      icon: 'FaUsers',
      title: 'Community Events',
      description:
        'Organizes school events and encourages parent participation in educational activities.',
    },
  ],
  activitiesSection: {
    heading: 'Community Activities',
    subtitle: "Highlights of Chief's involvement in school life",
    watchLabel: 'Watch on YouTube',
    watchHint: 'Click to view the drama performance',
    placeholderHint:
      "We're partnering with the school to capture authentic content. School videos will be featured here once available.",
  },
  activities: [
    {
      title: 'Drama & Performance',
      description:
        'Students showcase their talents through plays and performances celebrating our community heritage.',
      type: 'video',
      videoId: 'RO3Te5m1ZBQ',
    },
    {
      title: 'Fundraising Events',
      description:
        'Community comes together to raise funds for school developments and student needs.',
      type: 'placeholder',
      placeholder: 'Video Content Coming Soon',
    },
    {
      title: 'Mentorship Programs',
      description: 'Chief Mutasa mentors students, instilling values of leadership and service.',
      type: 'placeholder',
      placeholder: 'Video Content Coming Soon',
    },
  ],
  cta: {
    eyebrow: 'Stronger Together',
    title: 'Partner With Our Community',
    subtitle:
      'From sponsorships to mentorship, there are many ways to support our pupils. Reach out and help shape the next generation.',
    buttonText: 'Get Involved',
    buttonLink: '/contact',
  },
};

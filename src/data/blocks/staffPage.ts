/**
 * Default content for the Staff page (`pages.staff`).
 *
 * Only the surrounding page copy lives here — the team list itself is served
 * from the CMS (`content.team`) by `StaffLeadership`.
 */
export interface StaffPageBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const staffPageBlock: StaffPageBlock = {
  hero: {
    title: 'Our Team',
    subtitle:
      'Meet the dedicated educators and staff who make St James Zongoro a place of excellence',
    image: '/images/headmaster.webp',
    imageAlt: 'The headmaster in his office',
  },
  cta: {
    eyebrow: 'Join Our Team',
    title: 'Be Part of Something Meaningful',
    subtitle:
      "We're always looking for passionate educators. Reach out to learn about opportunities at St James Zongoro.",
    buttonText: 'Get in Touch',
    buttonLink: '/contact',
  },
};

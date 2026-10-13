/**
 * Default content for the Home page community partnership panel (`home.community`).
 */
export interface HomeCommunityBlock {
  image: string;
  imageAlt: string;
  leaderName: string;
  leaderRole: string;
  heading: string;
  paragraphs: string[];
  buttonText: string;
  buttonLink: string;
}

export const homeCommunityBlock: HomeCommunityBlock = {
  image: '/images/chief-image.webp',
  imageAlt: 'Chief Mutasa',
  leaderName: 'Chief Mutasa',
  leaderRole: 'Community Leader',
  heading: 'Our Community Partnership',
  paragraphs: [
    'St James Zongoro Primary School is deeply rooted in the Ndorikanda community. Our partnership with local leaders, parents, and villagers creates a supportive environment where every child can succeed.',
    "Together with Chief James Mutasa, we're building a brighter future for our children through quality education and community engagement.",
  ],
  buttonText: 'Read More',
  buttonLink: '/community',
};

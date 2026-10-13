/**
 * Default content for the Terms page (`pages.terms`).
 *
 * The body is modelled as a flat list of sections so staff can edit each
 * heading and its paragraphs independently in the management system. A section
 * may also carry `details`, rendered as additional line-separated text (used
 * for the contact block).
 */
export interface TermsSection {
  heading: string;
  paragraphs: string[];
  /** Optional extra lines, each shown on its own line below the paragraphs. */
  details?: string[];
}

export interface TermsBlock {
  hero: {
    title: string;
    subtitle: string;
  };
  sections: TermsSection[];
  footer: {
    backButtonText: string;
    lastUpdatedLabel: string;
    lastUpdatedValue: string;
  };
}

export const termsBlock: TermsBlock = {
  hero: {
    title: 'Terms of Service',
    subtitle: 'Please read these terms carefully',
  },
  sections: [
    {
      heading: 'Acceptance of Terms',
      paragraphs: [
        'By accessing and using the St James Zongoro Primary School website, you accept and agree to be bound by the terms and provisions of this agreement.',
      ],
    },
    {
      heading: 'Website Purpose',
      paragraphs: [
        'This website is an informational platform operated by St James Zongoro Primary School. It provides general information about our educational programs, admission procedures, school policies, and contact information.',
      ],
    },
    {
      heading: 'Information Accuracy',
      paragraphs: [
        'While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information contained on this website.',
      ],
    },
    {
      heading: 'Use of Website',
      paragraphs: [
        'You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website.',
      ],
    },
    {
      heading: 'Intellectual Property',
      paragraphs: [
        'All content on this website, including logos, images, text, and design elements, are the intellectual property of St James Zongoro Primary School. Unauthorized reproduction or distribution is prohibited.',
      ],
    },
    {
      heading: 'Contact Information',
      paragraphs: ['For questions about these Terms of Service, please contact us at:'],
      details: [
        'Email: zongoro.primary@gmail.com',
        'Phone: +263 77 321 1929 / +263 71 854 6070',
        'Address: St James Zongoro Primary School, P.O.Box 313, Mutare, Zimbabwe',
      ],
    },
  ],
  footer: {
    backButtonText: 'Back to Home',
    lastUpdatedLabel: 'Last updated:',
    lastUpdatedValue: 'April 2026',
  },
};

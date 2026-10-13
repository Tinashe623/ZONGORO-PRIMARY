/**
 * Default content for the Privacy page (`pages.privacy`).
 *
 * The body is modelled as a flat list of sections so staff can edit each
 * heading and its paragraphs independently in the management system.
 */
export interface PrivacySection {
  heading: string;
  paragraphs: string[];
}

export interface PrivacyBlock {
  hero: {
    title: string;
    subtitle: string;
  };
  sections: PrivacySection[];
  footer: {
    backButtonText: string;
    lastUpdatedLabel: string;
    lastUpdatedValue: string;
  };
}

export const privacyBlock: PrivacyBlock = {
  hero: {
    title: 'Privacy Policy',
    subtitle: 'Your privacy is important to us',
  },
  sections: [
    {
      heading: 'Data Collection Notice',
      paragraphs: [
        'St James Zongoro Primary School website is an informative platform designed to provide information about our school to parents, students, and the community. We do not collect, store, or process any personal data from visitors to this website.',
      ],
    },
    {
      heading: 'No Personal Information Collected',
      paragraphs: [
        'This website does not use cookies, tracking mechanisms, or any form of data collection tools. You can browse our website anonymously without providing any personal information.',
      ],
    },
    {
      heading: 'Information We Provide',
      paragraphs: [
        "The information on this website includes general details about our school's history, academic programs, admission procedures, and contact information. This content is provided for informational purposes only.",
      ],
    },
    {
      heading: 'Third-Party Links',
      paragraphs: [
        'Our website may contain links to external websites. Please note that we are not responsible for the privacy practices or content of these third-party sites.',
      ],
    },
    {
      heading: 'Contact Us',
      paragraphs: [
        'If you have any questions about this Privacy Policy, please contact us at zongoro.primary@gmail.com or call +263 77 321 1929 / +263 71 854 6070.',
      ],
    },
  ],
  footer: {
    backButtonText: 'Back to Home',
    lastUpdatedLabel: 'Last updated:',
    lastUpdatedValue: 'April 2026',
  },
};

/**
 * Default content for the Contact page (`pages.contact`).
 *
 * The actual contact details (address, phone, email, office hours) are served
 * from the CMS (`content.contact`); this block only carries the labels and
 * surrounding page copy.
 */
export interface ContactPageBlock {
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
  infoLabels: {
    address: string;
    phone: string;
    email: string;
    officeHours: string;
  };
  form: {
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitText: string;
  };
  toast: {
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
    networkErrorDescription: string;
  };
}

export const contactPageBlock: ContactPageBlock = {
  hero: {
    title: 'Contact Us',
    subtitle: "We'd love to hear from you",
    image: '/images/new/08.webp',
    imageAlt: 'St James Zongoro Primary School',
  },
  intro: {
    heading: 'Get in Touch',
    paragraph:
      'Have questions about admissions, academics, or our school? Feel free to reach out to us using the form or contact information below. Our team is here to help!',
  },
  infoLabels: {
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    officeHours: 'Office Hours',
  },
  form: {
    heading: 'Send us a Message',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your name',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Enter subject',
    messageLabel: 'Message',
    messagePlaceholder: 'Enter your message...',
    submitText: 'Send Message',
  },
  toast: {
    successTitle: 'Message sent!',
    successDescription: 'We will get back to you soon.',
    errorTitle: 'Message failed to send',
    errorDescription: 'Something went wrong. Please try again later.',
    networkErrorDescription: 'Network error. Please try again later.',
  },
};

/**
 * Default content for the Admissions page (`pages.admissions`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 */
import {
  admissionRequirements,
  applicationSteps,
  feeStructure,
  requiredDocuments,
} from '../admissions';

/** Icon name per application step, mirroring the page's original `iconMap`. */
const STEP_ICONS: Record<number, string> = {
  1: 'FaClipboardList',
  2: 'FaFileAlt',
  3: 'FaPencilAlt',
  4: 'FaClipboardCheck',
  5: 'FaCheckCircle',
};

/** Icon name per document, mirroring the page's original `iconMap`. */
const DOCUMENT_ICONS: Record<string, string> = {
  'Birth Certificate': 'FaBirthdayCake',
  'Application Form': 'FaFileAlt',
  'Immunization Records': 'FaUserMd',
  'Proof of Residence': 'FaHome',
  'Previous Records': 'FaFilePdf',
  'Parent ID': 'FaIdCard',
};

export interface AdmissionsHighlight {
  title: string;
  desc: string;
}

export interface AdmissionsRequirementItem {
  grade: string;
  ageRange: string;
  requirements: string[];
}

export interface AdmissionsStepItem {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface AdmissionsDocumentItem {
  name: string;
  description: string;
  icon: string;
}

export interface AdmissionsFeeItem {
  category: string;
  amount: string;
  period: string;
}

export interface AdmissionsStatItem {
  icon: string;
  label: string;
  value: string;
  color: string;
}

export interface AdmissionsBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  highlights: AdmissionsHighlight[];
  requirements: {
    heading: string;
    subtitle: string;
    ageLabel: string;
    items: AdmissionsRequirementItem[];
  };
  applicationSteps: {
    heading: string;
    subtitle: string;
    stepLabel: string;
    items: AdmissionsStepItem[];
  };
  documents: {
    heading: string;
    subtitle: string;
    note: string;
    items: AdmissionsDocumentItem[];
  };
  fees: {
    heading: string;
    subtitle: string;
    tableHeading: string;
    note: string;
    labels: {
      category: string;
      amount: string;
      period: string;
    };
    stats: AdmissionsStatItem[];
    items: AdmissionsFeeItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    buttonText: string;
    secondaryText: string;
    secondaryLink: string;
  };
}

export const admissionsBlock: AdmissionsBlock = {
  hero: {
    title: 'Admissions',
    subtitle:
      'Join the St James Zongoro family and give your child the gift of quality education',
    image: '/images/moments/campus-01.webp',
    imageAlt: 'The campus of St James Zongoro Primary School',
  },
  highlights: [
    { title: 'Quality Education', desc: 'ZIMSEC-aligned curriculum with experienced teachers' },
    { title: 'Holistic Development', desc: 'Sports, music, and spiritual growth programs' },
    { title: 'Safe Environment', desc: 'Secure campus with caring staff' },
  ],
  requirements: {
    heading: 'Admission Requirements',
    subtitle:
      'We welcome students from ECD to Grade 7. Each grade level has specific requirements to ensure appropriate placement.',
    ageLabel: 'Age:',
    items: admissionRequirements,
  },
  applicationSteps: {
    heading: 'Application Process',
    subtitle:
      'Our simple 5-step application process makes enrolling your child easy and straightforward.',
    stepLabel: 'Step',
    items: applicationSteps.map((step) => ({
      ...step,
      icon: STEP_ICONS[step.step] ?? 'FaFileAlt',
    })),
  },
  documents: {
    heading: 'Required Documents',
    subtitle: 'Please gather all required documents before submitting your application.',
    note: '* Application forms can be collected from the school office or contact us to request a digital copy.',
    items: requiredDocuments.map((doc) => ({
      ...doc,
      icon: DOCUMENT_ICONS[doc.name] ?? 'FaFileAlt',
    })),
  },
  fees: {
    heading: 'Fee Structure',
    subtitle:
      'Transparent and affordable fees with flexible payment options for all families.',
    tableHeading: 'Fee Categories',
    note: '* Fees are subject to change. Please contact the school office for the most current fee structure and payment plan options.',
    labels: {
      category: 'Category',
      amount: 'Amount',
      period: 'Period',
    },
    stats: [
      { icon: 'FaMoneyBillWave', label: 'Affordable Fees', value: 'Z$', color: 'brand' },
      { icon: 'FaClock', label: 'Payment Plans', value: 'Available', color: 'brandGreen' },
      { icon: 'FaCalendarAlt', label: 'Per Term', value: '3/Year', color: 'brand' },
    ],
    items: feeStructure,
  },
  cta: {
    eyebrow: 'Ready to Join',
    title: "Start Your Child's Journey With Us",
    subtitle:
      'Applications are open for ECD to Grade 7. Our admissions team is ready to help you every step of the way.',
    buttonText: 'Apply Now',
    secondaryText: 'Contact Admissions',
    secondaryLink: '/contact',
  },
};

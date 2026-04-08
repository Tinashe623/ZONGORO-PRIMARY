export interface AdmissionRequirement {
  grade: string;
  ageRange: string;
  requirements: string[];
}

export interface ApplicationStep {
  step: number;
  title: string;
  description: string;
}

export interface FeeStructure {
  category: string;
  amount: string;
  period: string;
}

export interface RequiredDocument {
  name: string;
  description: string;
}

export const admissionRequirements: AdmissionRequirement[] = [
  {
    grade: 'ECD A',
    ageRange: '3-4 years',
    requirements: [
      'Child must be toilet trained',
      'Immunisation records up to date',
      'Birth certificate copy',
      'Parent/guardian ID copy',
    ],
  },
  {
    grade: 'ECD B',
    ageRange: '4-5 years',
    requirements: [
      'Completion of ECD A or equivalent',
      'Birth certificate copy',
      'Immunisation records',
      'Previous school report (if applicable)',
    ],
  },
  {
    grade: 'Grade 1',
    ageRange: '5-6 years',
    requirements: [
      'ECD B completion certificate',
      'Birth certificate (original + copy)',
      'Immunisation records',
      'Previous school report',
      'Placement assessment',
    ],
  },
  {
    grade: 'Grade 2-7',
    ageRange: '6-12 years',
    requirements: [
      'Transfer letter from previous school',
      'Last 2 school reports',
      'Birth certificate copy',
      'Immunisation records',
      'Placement assessment (Grade 2-3)',
    ],
  },
];

export const applicationSteps: ApplicationStep[] = [
  {
    step: 1,
    title: 'Collect Application Form',
    description: 'Visit our school office or download the form from our website to get the application package.',
  },
  {
    step: 2,
    title: 'Prepare Required Documents',
    description: 'Gather all necessary documents as listed in the requirements section. Ensure all copies are clear.',
  },
  {
    step: 3,
    title: 'Submit Application',
    description: 'Complete the application form and submit it with all required documents at our school office.',
  },
  {
    step: 4,
    title: 'Entrance Assessment',
    description: 'Your child will undergo a brief assessment to determine their learning level and placement.',
  },
  {
    step: 5,
    title: 'Receive Admission Letter',
    description: 'Once accepted, you will receive an admission letter with payment instructions and next steps.',
  },
];

export const feeStructure: FeeStructure[] = [
  { category: 'Registration Fee', amount: '$50', period: 'Once-off' },
  { category: 'Tuition (ECD)', amount: '$120', period: 'per term' },
  { category: 'Tuition (Grades 1-3)', amount: '$150', period: 'per term' },
  { category: 'Tuition (Grades 4-7)', amount: '$180', period: 'per term' },
  { category: 'School Levies', amount: '$80', period: 'per term' },
  { category: 'Boarding Fee', amount: '$250', period: 'per term' },
  { category: 'Transport (optional)', amount: '$60', period: 'per term' },
];

export const requiredDocuments: RequiredDocument[] = [
  { name: 'Birth Certificate', description: 'Original and photocopy' },
  { name: 'Transfer Letter', description: 'For students transferring from another school' },
  { name: 'School Reports', description: 'Last 2 school reports (if applicable)' },
  { name: 'Passport Photos', description: '2 recent passport-sized photos' },
  { name: 'Immunisation Record', description: 'Updated immunisation card' },
  { name: 'Parent/Guardian ID', description: 'Copy of national ID or passport' },
];
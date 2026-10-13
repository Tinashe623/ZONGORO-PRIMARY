/**
 * Default content for the Assessment page (`pages.assessment`).
 *
 * The enrolment and pass-rate figures are served from the CMS
 * (`content.results`); this block only carries the surrounding page copy.
 */
export interface AssessmentPageBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  enrollment: {
    heading: string;
    subtitle: string;
    stats: {
      totalLabel: string;
      growthLabel: string;
      projectedLabel: string;
      projectedValue: string;
    };
    table: {
      heading: string;
      columns: {
        year: string;
        male: string;
        female: string;
        total: string;
      };
    };
  };
  analysis: {
    heading: string;
    cardHeading: string;
    intro: string;
  };
  passRate: {
    heading: string;
    subtitle: string;
    tableHeading: string;
    columns: {
      year: string;
      rate: string;
    };
    cardHeading: string;
  };
  cta: {
    heading: string;
    subtitle: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
}

export const assessmentPageBlock: AssessmentPageBlock = {
  hero: {
    title: 'Assessment & Analysis',
    subtitle: 'Comprehensive evaluation of school performance and growth',
    image: '/images/moments/classroom-07.webp',
    imageAlt: 'Teaching and learning at St James Zongoro',
  },
  enrollment: {
    heading: 'School Enrolment',
    subtitle: 'A comprehensive overview of student enrollment trends across all grades',
    stats: {
      totalLabel: 'Total Enrollment',
      growthLabel: 'Growth since',
      projectedLabel: 'Projected by 2028',
      projectedValue: '1000',
    },
    table: {
      heading: 'Enrollment by Year',
      columns: {
        year: 'YEAR',
        male: 'MALE',
        female: 'FEMALE',
        total: 'TOTAL',
      },
    },
  },
  analysis: {
    heading: 'Assessment and Analysis',
    cardHeading: '3.1 School Enrolment',
    intro:
      'This document contains an assessment and analysis of St James Zongoro Primary School, specifically focusing on enrollment trends and academic performance.',
  },
  passRate: {
    heading: 'ZIMSEC National Grade 7 Pass-rate',
    subtitle: 'Consistent academic performance and improvement over the years',
    tableHeading: 'Pass Rate Trends',
    columns: {
      year: 'YEAR',
      rate: 'PASS-RATE (%)',
    },
    cardHeading: '3.2 ZIMSEC National Grade 7 Pass-rate',
  },
  cta: {
    heading: 'Join Our Learning Community',
    subtitle:
      'Enroll your child at St James Zongoro Primary School and give them the opportunity to excel academically and grow in faith.',
    primaryButtonText: 'Apply Now',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
};

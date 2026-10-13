import { academicCards } from '../academics';

/**
 * Default content for the Academics page (`pages.academics`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 */
export interface AcademicsBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  programs: {
    heading: string;
    description: string;
    cards: { icon: string; title: string; description: string; items: string[] }[];
  };
  why: {
    heading: string;
    description: string;
    highlights: string[];
    goalsHeading: string;
    goals: string[];
  };
  techVoc: {
    heading: string;
    subtitle: string;
    stats: { icon: string; label: string; value: string }[];
    policy: {
      heading: string;
      subtitle: string;
      body: string;
    };
    achievements: {
      label: string;
      items: {
        icon: string;
        title: string;
        description: string;
        items: string[];
      }[];
    };
    conclusion: {
      heading: string;
      subtitle: string;
      body: string;
    };
  };
  cta: {
    heading: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
  };
}

export const academicsBlock: AcademicsBlock = {
  hero: {
    title: 'Academic Excellence',
    subtitle: 'Quality education preparing students for success',
    image: '/images/moments/classroom-01.webp',
    imageAlt: 'Classroom at St James Zongoro Primary School',
  },
  programs: {
    heading: 'Our Academic Programs',
    description:
      'We offer a comprehensive curriculum from ECD to Grade 7, designed to nurture intellectual growth and critical thinking skills.',
    cards: academicCards,
  },
  why: {
    heading: 'Why Academic Excellence Matters',
    description:
      'Our curriculum is designed to develop not just knowledge, but critical thinking skills, creativity, and a lifelong love for learning. We prepare students for success in secondary school and beyond.',
    highlights: [
      'ZIMSEC Aligned',
      'Experienced Teachers',
      'Small Class Sizes',
      'Holistic Development',
    ],
    goalsHeading: 'Our Learning Goals',
    goals: [
      'Develop strong literacy and numeracy skills',
      'Foster critical thinking and problem-solving',
      'Build confidence and self-esteem',
      'Encourage creativity and innovation',
      'Promote teamwork and collaboration',
      'Instill moral values and ethics',
    ],
  },
  techVoc: {
    heading: 'Tech-Voc Compliance & Achievements',
    subtitle: 'Excellence in Technical and Vocational Education Implementation',
    stats: [
      { icon: 'FaGraduationCap', label: 'Program Started', value: '2007' },
      { icon: 'FaStar', label: 'Latest Achievements', value: '2024' },
      { icon: 'FaLightbulb', label: 'Tech-Voc Subjects', value: '4' },
      { icon: 'FaCheckCircle', label: 'SDGs Aligned', value: '✓' },
    ],
    policy: {
      heading: '4.1 Policy and Legal Frameworks',
      subtitle: 'Tech-Voc Education Implementation',
      body: `The introduction of Tech-Voc education at St James Zongoro Primary School in 2007 was in compliance with the Zimbabwe's reviewed Technical and Vocational Education and Training (TVET) of 2005 towards the fulfilment of the recommendations of the Commission of Enquiry for Education and Training (CIET) of 1999 dubbed the Nziramasanga Commission. The advent of the Agenda 2063 and the SDGs on the international front and the Competency Based Curriculum buttressed the need to embrace Tech-Voc. Education and St James Zongoro Primary took it a notch higher by integrating it with Non-Formal Education (NFE). The Director's Circular Number 9 of 2016 the schools to vocationalize the curriculum through operationalising the implementation of Technical and Vocational Education. Even when the circular was cancelled and replaced by the Secretary's Circular of 2016 on Teacher Establishments, Tech-Voc Education became even more dominant and resonant.

In the spirit of "Leaving No-one Behind", Tech-Voc Education at St James Zongoro Primary School has been integrated with Non-Formal Education such that those who did not benefit fully from the skills orientation program during their days at school are reintegrated into the Functional Literacy Program in compliance with the Secretary's Circular Number 13 of 2016. This has seen the school doing very well in the area and scooped the overall first position at the District NFE exhibitions in the year 2024. The ICT, Design and Technology of the same department has also emerged the 2025 Provincial Champions at the Provincial Literacy Commemorations at Mutare Boys High.`,
    },
    achievements: {
      label: 'Key Achievements:',
      items: [
        {
          icon: 'FaUtensils',
          title: 'Home-Grown Feeding Program',
          description:
            "Producing high-value crops and implementing 'rainbow plate' concept with micro-nutrients for balanced meals.",
          items: ['Kale, Kolrabhi, Parsley', 'Swizz Chard, Brinjals, Basil', 'Improved attendance rates'],
        },
        {
          icon: 'FaBookOpen',
          title: 'Music Excellence',
          description:
            'Professional music performances at state functions and national competitions.',
          items: [
            'Manicaland Province representative',
            'Nhanga-Gota National Event',
            'Veld Fire Awareness campaigns',
          ],
        },
        {
          icon: 'FaLaptop',
          title: 'ICT & Design Technology',
          description: 'Leading digital literacy and technology education initiatives.',
          items: [
            '2025 Provincial Champions',
            'Provincial Literacy Commemorations',
            'Modern tech integration',
          ],
        },
        {
          icon: 'FaGraduationCap',
          title: 'Agriculture Innovation',
          description: 'Sustainable farming practices supporting school feeding programs.',
          items: [
            'High-value crop production',
            'Home-Grown Feeding Program',
            'Food security initiatives',
          ],
        },
      ],
    },
    conclusion: {
      heading: 'Conclusion',
      subtitle: 'Sustained Excellence in Tech-Voc Education',
      body: `St James Zongoro has four (4) specialised Tech-Voc Subject areas (Agriculture, Music, ICT and Home Economics) adopted through the then policy and legal frameworks of the year 2007 and upgraded through the subsequent policy developments which saw the school outperforming its own records and also outperforming its peers. Through the embracing and operationalization of the Tech-Voc Education program, the school was able to consolidate its ground through synergizing with structural systems, and in the process, creating life-support subsystems in the community which cannot be easily undone without hurting the greater part of the community. The implementation of the Heritage Based Curriculum and sustainability of the Home-Grown School Feeding Program at St James Zongoro Primary School is anchored on the school's Tech-Voc Subject specialisation.`,
    },
  },
  cta: {
    heading: 'Ready to Enroll?',
    description:
      'Give your child the best start in education. Join our community of learners and watch them thrive academically and personally.',
    primaryButtonText: 'Apply Now',
    secondaryButtonText: 'Contact Us',
    secondaryButtonLink: '/contact',
  },
};

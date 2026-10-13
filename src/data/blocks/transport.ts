/**
 * Default content for the Transport page (`pages.transport`).
 * Icons are stored as names resolved through `getWebsiteIcon`.
 */
export interface TransportBlock {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  intro: {
    badge: string;
    heading: string;
    paragraph: string;
    services: string[];
    image: string;
    imageAlt: string;
    caption: string;
    availableBadge: string;
  };
  features: {
    heading: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  hire: {
    heading: string;
    subtitle: string;
    fleetHeading: string;
    fleetItems: { label: string; value: string; icon: string }[];
    conditionsBadge: string;
    conditionsIntro: string;
    conditions: string[];
    note: string;
  };
  cta: {
    badge: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const transportBlock: TransportBlock = {
  hero: {
    title: 'School Transport',
    subtitle: 'Safe and reliable bus services for our students',
    image: '/images/school-bus.webp',
    imageAlt: 'The St James Zongoro school bus',
  },
  intro: {
    badge: 'Est. 2025 Fleet',
    heading: 'Transport Services for All Occasions',
    paragraph:
      'St James Zongoro Primary School operates a 72-seater bus acquired in 2025, providing professional transportation services for school sports events, educational trips, church outings, and community activities. The bus is also available for hire by schools, churches, and organizations throughout Zimbabwe.',
    services: [
      'School sports team transportation to competitions',
      'Educational trips and excursions',
      'Church and community group travel',
      'Private hire for events and functions',
      'Inter-city and regional travel available',
      'Professional driver and fuel included',
    ],
    image: '/images/school-bus.webp',
    imageAlt: 'St James Zongoro School Bus – Available for Hire',
    caption: '2025 School Bus',
    availableBadge: 'Available for Hire',
  },
  features: {
    heading: 'Why Choose Our Transport Services',
    subtitle:
      'Professional transportation for school events, sports, and private hire across Zimbabwe.',
    items: [
      {
        icon: 'FaBus',
        title: '72-Seater Capacity',
        description:
          'Spacious 2025 bus seating up to 72 passengers with comfortable seating.',
      },
      {
        icon: 'FaMapMarkedAlt',
        title: 'Event Transportation',
        description:
          'Specialized transport for sports, trips, church events, and school activities.',
      },
      {
        icon: 'FaShieldAlt',
        title: 'Safety First',
        description: 'Professional drivers, safety equipment, and full insurance coverage.',
      },
      {
        icon: 'FaCalendarAlt',
        title: 'Flexible Hiring',
        description:
          'Available for hire by schools, churches, and organizations across Zimbabwe.',
      },
    ],
  },
  hire: {
    heading: 'Bus Hire Services',
    subtitle:
      'Our modern bus is available for hire by schools, churches, organizations, and private groups throughout Zimbabwe.',
    fleetHeading: 'Fleet Details',
    fleetItems: [
      { label: 'Year Acquired', value: '2025', icon: 'FaCalendarAlt' },
      { label: 'Availability', value: 'Open for Hire', icon: 'FaClock' },
      { label: 'Service Area', value: 'Nationwide', icon: 'FaMapMarkedAlt' },
      { label: 'Capacity', value: '72 Passengers', icon: 'FaUsers' },
    ],
    conditionsBadge: 'Hire Conditions',
    conditionsIntro: 'Our bus hire services are available for:',
    conditions: [
      'School sporting events and competitions',
      'Educational excursions and field trips',
      'Church conferences, retreats, and outings',
      'Corporate events and team building',
      'Private group tours and travel',
    ],
    note: '✦ Professional driver and fuel charges included in hire rates. Contact us for a customized quote.',
  },
  cta: {
    badge: 'Open for Bookings',
    heading: 'Book Our Bus for Your Next Event',
    description:
      'Available for hire across Zimbabwe for school sports, trips, church events, and organizational functions. Contact us for rates and availability.',
    buttonText: 'Enquire Now',
    buttonLink: '/contact',
  },
};

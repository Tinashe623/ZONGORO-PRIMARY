// Normalised website content consumed by the public site.
//
// The public site renders these shapes directly. They are produced by
// `mergeWebsiteContent`, which merges live CMS content (from the management
// system) over the bundled static defaults in `src/data`. When the CMS is
// unreachable or has no content for a section, the bundled defaults are used.
//
// Everything is plain text (or URLs); the CMS never stores raw HTML.

export interface WebsiteHero {
  heading: string;
  subheading: string;
  badge: string;
  secondaryBadge: string;
  image: string;
  imageAlt: string;
  primaryCta: { label: string; url: string };
  secondaryCta: { label: string; url: string };
}

export interface WebsiteStats {
  foundedYear: number;
  levels: number;
  facilities: number;
  moments: number;
}

export interface WebsiteNewsItem {
  id?: string;
  date: string;
  title: string;
  excerpt: string;
  content?: string;
  sourceUrl?: string;
  coverImage?: string;
  category?: string;
}

export interface WebsiteGalleryItem {
  id?: string;
  src: string;
  alt: string;
  category: string;
  description?: string;
}

export interface WebsiteMomentItem {
  id?: string;
  src: string;
  caption: string;
  tag: string;
}

export interface WebsiteEventItem {
  id?: string;
  title: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
  coverImage?: string;
  category?: string;
  allDay?: boolean;
}

export interface WebsiteTeamMember {
  id: string;
  name: string;
  title: string;
  specialisation?: string;
  image?: string;
  qualifications?: string;
  yearsAtSchool?: number;
  bio?: string;
  category: 'leadership' | 'teaching' | 'support';
}

export interface WebsiteTestimonial {
  id?: string;
  quote: string;
  author: string;
  role: string;
  photo?: string;
  category?: string;
}

export interface WebsiteAchievement {
  id?: string;
  label: string;
  count: number;
  icon: string;
}

export interface WebsiteFacility {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  icon: string;
}

export interface WebsiteFeature {
  id?: string;
  title: string;
  description?: string;
  icon: string;
}

export interface WebsiteResults {
  passRates: { year: number; rate: number }[];
  enrollment: { year: number; male: number; female: number; total: number }[];
  grade7: { year: number; passRate: number; students: number }[];
  enrollmentComment: string;
  passRateComment: string;
}

export interface WebsiteAbout {
  history: string;
  vision: string;
  mission: string;
  coreValues: string[];
}

export interface WebsiteContact {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  address: string;
  addressShort: string;
  phoneDisplay: string;
  phoneInternational: string;
  email: string;
  officeHours: string;
  facebook?: string;
  whatsapp?: string;
}

export interface WebsiteSeo {
  title: string;
  description: string;
  image?: string;
}

export interface WebsiteContent {
  hero: WebsiteHero;
  stats: WebsiteStats;
  news: WebsiteNewsItem[];
  gallery: WebsiteGalleryItem[];
  moments: WebsiteMomentItem[];
  events: WebsiteEventItem[];
  team: WebsiteTeamMember[];
  testimonials: WebsiteTestimonial[];
  results: WebsiteResults;
  achievements: WebsiteAchievement[];
  facilities: WebsiteFacility[];
  features: WebsiteFeature[];
  about: WebsiteAbout;
  contact: WebsiteContact;
  seo: WebsiteSeo;
  /** Free-form editable content for pages/sections, keyed by block id. */
  blocks: Record<string, unknown>;
  /** Where the currently-rendered content came from. */
  source: 'default' | 'cms';
}

// ── Raw payload shapes returned by the management system's public API ────────

export interface WebsiteApiSettings {
  id: string | null;
  heroHeading: string | null;
  heroSubheading: string | null;
  heroBadge: string | null;
  heroSecondaryBadge: string | null;
  heroImage: string | null;
  heroImageAlt: string | null;
  heroPrimaryCtaLabel: string | null;
  heroPrimaryCtaUrl: string | null;
  heroSecondaryCtaLabel: string | null;
  heroSecondaryCtaUrl: string | null;
  statFoundedYear: number | null;
  statLevelsCount: number | null;
  statFacilitiesCount: number | null;
  statMomentsCount: number | null;
  aboutHistory: string | null;
  aboutVision: string | null;
  aboutMission: string | null;
  coreValues: string[];
  contactAddress: string | null;
  contactPhone: string | null;
  contactPhoneAlt: string | null;
  contactEmail: string | null;
  contactOfficeHours: string | null;
  facebookUrl: string | null;
  whatsappUrl: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  ogImage: string | null;
  isPublished: boolean;
  updatedAt: string | null;
}

interface ApiItemBase {
  id: string;
  displayOrder: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WebsiteApiNews extends ApiItemBase {
  title: string;
  excerpt: string | null;
  content: string | null;
  coverImage: string | null;
  category: string | null;
  sourceUrl: string | null;
  isFeatured: boolean;
  publishedAt: string | null;
}

export interface WebsiteApiGallery extends ApiItemBase {
  url: string;
  alt: string | null;
  caption: string | null;
  category: string | null;
}

export interface WebsiteApiEvent extends ApiItemBase {
  title: string;
  description: string | null;
  location: string | null;
  startDate: string;
  endDate: string | null;
  allDay: boolean;
  coverImage: string | null;
  category: string | null;
}

export interface WebsiteApiTeam extends ApiItemBase {
  name: string;
  title: string;
  specialisation: string | null;
  bio: string | null;
  photo: string | null;
  qualifications: string | null;
  yearsAtSchool: number | null;
  category: string;
}

export interface WebsiteApiTestimonial extends ApiItemBase {
  quote: string;
  authorName: string;
  authorRole: string | null;
  photo: string | null;
  category: string;
}

export interface WebsiteApiResultStat extends ApiItemBase {
  kind: string;
  year: number;
  rate: number | null;
  male: number | null;
  female: number | null;
  total: number | null;
  students: number | null;
  label: string | null;
  comment: string | null;
}

export interface WebsiteApiAchievement extends ApiItemBase {
  label: string;
  count: number;
  icon: string | null;
}

export interface WebsiteApiFacility extends ApiItemBase {
  title: string;
  description: string | null;
  image: string | null;
  imageAlt: string | null;
  icon: string | null;
}

export interface WebsiteApiFeature extends ApiItemBase {
  title: string;
  description: string | null;
  icon: string | null;
}

export interface WebsiteApiSchool {
  name: string;
  slug: string;
  logo: string | null;
  motto: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  primaryColor: string | null;
  secondaryColor: string | null;
  accentColor: string | null;
  description: string | null;
}

export interface WebsiteApiPayload {
  school: WebsiteApiSchool;
  content: {
    settings: WebsiteApiSettings | null;
    news: WebsiteApiNews[];
    gallery: WebsiteApiGallery[];
    events: WebsiteApiEvent[];
    team: WebsiteApiTeam[];
    testimonials: WebsiteApiTestimonial[];
    results: WebsiteApiResultStat[];
    achievements: WebsiteApiAchievement[];
    facilities: WebsiteApiFacility[];
    features: WebsiteApiFeature[];
    blocks?: Record<string, unknown>;
  };
  generatedAt?: string;
}

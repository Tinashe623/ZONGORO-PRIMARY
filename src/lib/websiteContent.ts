import { WEBSITE_CONTENT_URL, resolveImageUrl } from '../config';
import { defaultWebsiteContent } from '../data/websiteDefaults';
import type {
  WebsiteAchievement,
  WebsiteApiPayload,
  WebsiteContent,
  WebsiteFacility,
  WebsiteFeature,
  WebsiteGalleryItem,
  WebsiteMomentItem,
  WebsiteNewsItem,
  WebsiteTeamMember,
  WebsiteTestimonial,
} from '../types/website';

/**
 * Content loader for the public site.
 *
 * `fetchWebsiteContent` pulls published content from the management system.
 * `mergeWebsiteContent` overlays that content on top of the bundled static
 * defaults, section by section. This keeps the site fully functional offline
 * and lets staff edit one section at a time without blanking the rest.
 */

const FETCH_TIMEOUT_MS = 8000;

const str = (value: string | null | undefined, fallback: string): string =>
  value && value.trim() ? value : fallback;

const num = (value: number | null | undefined, fallback: number): number =>
  typeof value === 'number' && !Number.isNaN(value) ? value : fallback;

const list = <T,>(value: T[] | undefined | null, fallback: T[]): T[] =>
  value && value.length ? value : fallback;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Recursively overlay CMS block data on top of the bundled default for a block.
 * Objects merge key-by-key (so a partially-customised block keeps the rest of
 * its defaults); arrays and primitives are replaced wholesale.
 */
function deepMerge<T>(base: T, override: unknown): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override === undefined ? base : (override as T));
  }
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    out[key] = key in out ? deepMerge((base as Record<string, unknown>)[key], value) : value;
  }
  return out as T;
}

export { deepMerge };

export function mergeWebsiteBlocks(
  defaults: Record<string, unknown>,
  remote: Record<string, unknown> | undefined
): Record<string, unknown> {
  if (!remote) return defaults;
  const out: Record<string, unknown> = { ...defaults };
  for (const [key, value] of Object.entries(remote)) {
    out[key] = key in out ? deepMerge(out[key], value) : value;
  }
  return out;
}

const TESTIMONIAL_ROLE_LABELS: Record<string, string> = {
  PARENT: 'Parent',
  COMMUNITY: 'Community Leader',
  ALUMNI: 'Alumni',
  STUDENT: 'Student',
  LEADER: 'School Leader',
};

const TEAM_CATEGORIES: Record<string, WebsiteTeamMember['category']> = {
  LEADERSHIP: 'leadership',
  TEACHING: 'teaching',
  SUPPORT: 'support',
};

export async function fetchWebsiteContent(signal?: AbortSignal): Promise<WebsiteApiPayload | null> {
  const controller = new AbortController();
  const onAbort = () => controller.abort();
  if (signal) {
    if (signal.aborted) return null;
    signal.addEventListener('abort', onAbort, { once: true });
  }
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(WEBSITE_CONTENT_URL, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });
    if (!response.ok) return null;
    const payload = (await response.json()) as WebsiteApiPayload;
    if (!payload || typeof payload !== 'object' || !payload.content) return null;
    return payload;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
    if (signal) signal.removeEventListener('abort', onAbort);
  }
}

function mapNews(items: WebsiteApiPayload['content']['news']): WebsiteNewsItem[] {
  return items.map((item) => ({
    id: item.id,
    date: (item.publishedAt ?? item.createdAt).slice(0, 10),
    title: item.title,
    excerpt: item.excerpt ?? '',
    content: item.content ?? undefined,
    sourceUrl: item.sourceUrl ?? undefined,
    coverImage: resolveImageUrl(item.coverImage),
    category: item.category ?? undefined,
  }));
}

function mapGallery(items: WebsiteApiPayload['content']['gallery']): WebsiteGalleryItem[] {
  return items.map((item) => ({
    id: item.id,
    src: resolveImageUrl(item.url) ?? item.url,
    alt: item.alt ?? item.caption ?? 'St James Zongoro',
    category: item.category ?? 'School Activities',
    description: item.caption ?? undefined,
  }));
}

function mapMoments(items: WebsiteApiPayload['content']['gallery']): WebsiteMomentItem[] {
  return items.slice(0, 12).map((item) => ({
    id: item.id,
    src: resolveImageUrl(item.url) ?? item.url,
    caption: item.caption ?? item.alt ?? 'St James Zongoro',
    tag: item.category ?? 'Moments',
  }));
}

function mapTeam(items: WebsiteApiPayload['content']['team']): WebsiteTeamMember[] {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    title: item.title,
    specialisation: item.specialisation ?? undefined,
    image: resolveImageUrl(item.photo),
    qualifications: item.qualifications ?? undefined,
    yearsAtSchool: item.yearsAtSchool ?? undefined,
    bio: item.bio ?? undefined,
    category: TEAM_CATEGORIES[item.category] ?? 'support',
  }));
}

function mapTestimonials(items: WebsiteApiPayload['content']['testimonials']): WebsiteTestimonial[] {
  return items.map((item) => ({
    id: item.id,
    quote: item.quote,
    author: item.authorName,
    role: item.authorRole ?? TESTIMONIAL_ROLE_LABELS[item.category] ?? 'Community',
    photo: resolveImageUrl(item.photo),
    category: item.category,
  }));
}

function mapAchievements(items: WebsiteApiPayload['content']['achievements']): WebsiteAchievement[] {
  return items.map((item) => ({
    id: item.id,
    label: item.label,
    count: item.count,
    icon: item.icon ?? 'FaTrophy',
  }));
}

function mapFacilities(items: WebsiteApiPayload['content']['facilities']): WebsiteFacility[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description ?? undefined,
    image: resolveImageUrl(item.image),
    imageAlt: item.imageAlt ?? item.title,
    icon: item.icon ?? 'FaBuilding',
  }));
}

function mapFeatures(items: WebsiteApiPayload['content']['features']): WebsiteFeature[] {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description ?? undefined,
    icon: item.icon ?? 'FaStar',
  }));
}

function mergeResults(
  remote: WebsiteApiPayload['content']['results'],
  defaults: WebsiteContent['results']
): WebsiteContent['results'] {
  if (!remote.length) return defaults;

  const passRates = remote
    .filter((row) => row.kind === 'PASS_RATE')
    .map((row) => ({ year: row.year, rate: row.rate ?? 0 }));
  const enrollment = remote
    .filter((row) => row.kind === 'ENROLMENT')
    .map((row) => {
      const male = row.male ?? 0;
      const female = row.female ?? 0;
      return { year: row.year, male, female, total: row.total ?? male + female };
    });
  const grade7 = remote
    .filter((row) => row.kind === 'GRADE7')
    .map((row) => ({ year: row.year, passRate: row.rate ?? 0, students: row.students ?? 0 }));

  return {
    passRates: passRates.length ? passRates : defaults.passRates,
    enrollment: enrollment.length ? enrollment : defaults.enrollment,
    grade7: grade7.length ? grade7 : defaults.grade7,
    enrollmentComment: defaults.enrollmentComment,
    passRateComment: defaults.passRateComment,
  };
}

export function mergeWebsiteContent(
  payload: WebsiteApiPayload | null,
  defaults: WebsiteContent = defaultWebsiteContent
): WebsiteContent {
  if (!payload?.content) return { ...defaults };

  const { content, school } = payload;
  const settings = content.settings;

  const gallery = content.gallery.length ? mapGallery(content.gallery) : defaults.gallery;
  const news = content.news.length ? mapNews(content.news) : defaults.news;

  const hasContent =
    Boolean(settings) ||
    content.news.length > 0 ||
    content.gallery.length > 0 ||
    content.events.length > 0 ||
    content.team.length > 0 ||
    content.testimonials.length > 0 ||
    content.results.length > 0 ||
    content.achievements.length > 0 ||
    content.facilities.length > 0 ||
    content.features.length > 0 ||
    Object.keys(content.blocks ?? {}).length > 0;

  const phonePrimary = settings?.contactPhone?.trim() || undefined;
  const phoneAlt = settings?.contactPhoneAlt?.trim() || undefined;
  const phoneDisplay = phonePrimary
    ? `${phonePrimary}${phoneAlt ? ` / ${phoneAlt}` : ''}`
    : defaults.contact.phoneDisplay;

  return {
    hero: {
      heading: str(settings?.heroHeading, defaults.hero.heading),
      subheading: str(settings?.heroSubheading, defaults.hero.subheading),
      badge: str(settings?.heroBadge, defaults.hero.badge),
      secondaryBadge: str(settings?.heroSecondaryBadge, defaults.hero.secondaryBadge),
      image: resolveImageUrl(settings?.heroImage) ?? defaults.hero.image,
      imageAlt: str(settings?.heroImageAlt, defaults.hero.imageAlt),
      primaryCta: {
        label: str(settings?.heroPrimaryCtaLabel, defaults.hero.primaryCta.label),
        url: settings?.heroPrimaryCtaUrl?.trim() || defaults.hero.primaryCta.url,
      },
      secondaryCta: {
        label: str(settings?.heroSecondaryCtaLabel, defaults.hero.secondaryCta.label),
        url: settings?.heroSecondaryCtaUrl?.trim() || defaults.hero.secondaryCta.url,
      },
    },
    stats: {
      foundedYear: num(settings?.statFoundedYear, defaults.stats.foundedYear),
      levels: num(settings?.statLevelsCount, defaults.stats.levels),
      facilities: num(settings?.statFacilitiesCount, defaults.stats.facilities),
      moments: num(settings?.statMomentsCount, defaults.stats.moments),
    },
    news,
    gallery,
    moments: content.gallery.length ? mapMoments(content.gallery) : defaults.moments,
    events: content.events.map((item) => ({
      id: item.id,
      title: item.title,
      startDate: item.startDate,
      endDate: item.endDate ?? undefined,
      location: item.location ?? undefined,
      description: item.description ?? undefined,
      coverImage: resolveImageUrl(item.coverImage),
      category: item.category ?? undefined,
      allDay: item.allDay,
    })),
    team: content.team.length ? mapTeam(content.team) : defaults.team,
    testimonials: content.testimonials.length
      ? mapTestimonials(content.testimonials)
      : defaults.testimonials,
    results: mergeResults(content.results, defaults.results),
    achievements: content.achievements.length
      ? mapAchievements(content.achievements)
      : defaults.achievements,
    facilities: content.facilities.length ? mapFacilities(content.facilities) : defaults.facilities,
    features: content.features.length ? mapFeatures(content.features) : defaults.features,
    about: {
      history: str(settings?.aboutHistory, defaults.about.history),
      vision: str(settings?.aboutVision, defaults.about.vision),
      mission: str(settings?.aboutMission, defaults.about.mission),
      coreValues: list(settings?.coreValues, defaults.about.coreValues),
    },
    contact: {
      name: str(school?.name, defaults.contact.name),
      shortName: defaults.contact.shortName,
      tagline: defaults.contact.tagline,
      description: str(school?.description, defaults.contact.description),
      address: str(settings?.contactAddress ?? school?.address, defaults.contact.address),
      addressShort: str(
        settings?.contactAddress ?? school?.address,
        defaults.contact.addressShort
      ),
      phoneDisplay,
      phoneInternational: phonePrimary
        ? `${phonePrimary}${phoneAlt ? ` / ${phoneAlt}` : ''}`
        : defaults.contact.phoneInternational,
      email: str(settings?.contactEmail ?? school?.email, defaults.contact.email),
      officeHours: str(settings?.contactOfficeHours, defaults.contact.officeHours),
      facebook: settings?.facebookUrl?.trim() || defaults.contact.facebook,
      whatsapp: settings?.whatsappUrl?.trim() || undefined,
    },
    seo: {
      title: str(settings?.metaTitle, defaults.seo.title),
      description: str(settings?.metaDescription, defaults.seo.description),
      image: resolveImageUrl(settings?.ogImage),
    },
    blocks: mergeWebsiteBlocks(defaults.blocks, content.blocks),
    source: hasContent ? 'cms' : 'default',
  };
}

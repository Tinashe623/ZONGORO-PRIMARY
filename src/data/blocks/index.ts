/**
 * Bundled default content for free-form website blocks, keyed by block id.
 *
 * These are the fallbacks the public site renders when the CMS has no content
 * for a block. Each page/section reads `content.blocks[<key>]`, which
 * `mergeWebsiteContent` fills from the CMS over these defaults.
 *
 * Each block's shape is defined and exported by the page that consumes it
 * (see `src/data/blocks/*.ts`), so there is no central shape registry.
 */
import { aboutBlock } from './about';
import { academicsBlock } from './academics';
import { activitiesBlock } from './activities';
import { admissionsBlock } from './admissions';
import { assessmentPageBlock } from './assessmentPage';
import { boardingBlock } from './boarding';
import { churchBlock } from './church';
import { communityBlock } from './community';
import { contactPageBlock } from './contactPage';
import { galleryPageBlock } from './galleryPage';
import { homeCommunityBlock } from './homeCommunity';
import { privacyBlock } from './privacy';
import { staffPageBlock } from './staffPage';
import { termsBlock } from './terms';
import { transportBlock } from './transport';

export type WebsiteBlocks = Record<string, unknown>;

export const defaultBlocks: WebsiteBlocks = {
  'home.community': homeCommunityBlock,
  'pages.about': aboutBlock,
  'pages.academics': academicsBlock,
  'pages.admissions': admissionsBlock,
  'pages.boarding': boardingBlock,
  'pages.activities': activitiesBlock,
  'pages.church': churchBlock,
  'pages.community': communityBlock,
  'pages.transport': transportBlock,
  'pages.assessment': assessmentPageBlock,
  'pages.staff': staffPageBlock,
  'pages.gallery': galleryPageBlock,
  'pages.contact': contactPageBlock,
  'pages.privacy': privacyBlock,
  'pages.terms': termsBlock,
};

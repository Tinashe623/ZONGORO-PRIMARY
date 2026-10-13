import { useWebsiteContent } from '../context/WebsiteContentContext';
import { deepMerge } from './websiteContent';

/**
 * Read a free-form content block from the CMS, merged over its bundled default.
 *
 * `key` is the block id used in the management system (e.g. `pages.admissions`).
 * The page or section always supplies its own default, so the site renders the
 * original content when the CMS is unreachable or has no data for the block.
 *
 * Usage:
 *   const block = useBlock<AboutBlock>('pages.about', aboutBlock);
 */
export function useBlock<T extends object>(key: string, fallback: T): T {
  const { content } = useWebsiteContent();
  const remote = content.blocks?.[key];
  if (remote === undefined || remote === null || typeof remote !== 'object') {
    return fallback;
  }
  return deepMerge(fallback, remote);
}

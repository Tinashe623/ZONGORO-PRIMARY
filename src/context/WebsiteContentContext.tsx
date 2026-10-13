import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { defaultWebsiteContent } from '../data/websiteDefaults';
import { fetchWebsiteContent, mergeWebsiteContent } from '../lib/websiteContent';
import type { WebsiteContent } from '../types/website';

/**
 * Provides the merged website content (live CMS over bundled defaults) to the
 * whole public site. Renders instantly with the bundled defaults, then swaps in
 * CMS content on the next page load if the management system is reachable.
 */

interface WebsiteContentContextValue {
  content: WebsiteContent;
  /** True while the initial CMS request is in flight. */
  isLoading: boolean;
}

const WebsiteContentContext = createContext<WebsiteContentContextValue>({
  content: defaultWebsiteContent,
  isLoading: false,
});

// eslint-disable-next-line react-refresh/only-export-components
export function useWebsiteContent(): WebsiteContentContextValue {
  return useContext(WebsiteContentContext);
}

export function WebsiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<WebsiteContent>(defaultWebsiteContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    fetchWebsiteContent(controller.signal)
      .then((payload) => {
        if (active && payload) setContent(mergeWebsiteContent(payload));
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  const value = useMemo(() => ({ content, isLoading }), [content, isLoading]);

  return (
    <WebsiteContentContext.Provider value={value}>{children}</WebsiteContentContext.Provider>
  );
}

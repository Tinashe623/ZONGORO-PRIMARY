import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';
import WhatsAppButton from '../ui/WhatsAppButton';
import BackToTop from '../ui/BackToTop';
import { getPageMeta, SITE_URL, DEFAULT_OG_IMAGE } from '../../lib/seo';
interface LayoutProps {
  children: React.ReactNode;
}

const SCROLL_THRESHOLD = 50;

const setMetaTag = (
  selector: string,
  attr: 'name' | 'property',
  key: string,
  content: string
) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const Layout = ({ children }: LayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`;
    const image = meta.image ?? DEFAULT_OG_IMAGE;

    document.title = meta.title;

    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);

    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', image);

    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    setScrollPosition(position);
    setIsScrolled(position > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  const navbarProps = useMemo(() => ({ scrollPosition, isScrolled }), [scrollPosition, isScrolled]);

  return (
    <Box 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      overflowX="hidden"
    >
      <ScrollProgress />
      <TopBar />
      <Navbar {...navbarProps} />
      <Box as="main" flex="1" pt={{ base: '80px', md: '100px' }}>
        {children}
      </Box>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </Box>
  );
};

export default Layout;
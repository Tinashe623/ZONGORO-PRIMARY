import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from '../ui/ScrollProgress';
import WhatsAppButton from '../ui/WhatsAppButton';
import { getPageMeta } from '../../lib/seo';

interface LayoutProps {
  children: React.ReactNode;
}

const SCROLL_THRESHOLD = 50;

const Layout = ({ children }: LayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    document.title = meta.title;
    const descriptionEl = document.querySelector('meta[name="description"]');
    if (descriptionEl) descriptionEl.setAttribute('content', meta.description);
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
    </Box>
  );
};

export default Layout;
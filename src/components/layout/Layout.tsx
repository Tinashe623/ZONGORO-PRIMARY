import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const SCROLL_THRESHOLD = 50;

const Layout = ({ children }: LayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <TopBar />
      <Navbar {...navbarProps} />
      <Box as="main" flex="1" pt={{ base: '80px', md: '100px' }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
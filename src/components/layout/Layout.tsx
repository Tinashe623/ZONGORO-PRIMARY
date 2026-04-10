import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box minH="100vh" display="flex" flexDirection="column" overflowX="hidden">
      <TopBar />
      <Navbar scrollPosition={scrollPosition} />
      <Box as="main" flex="1" pt="100px">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
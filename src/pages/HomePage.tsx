import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import StatsSection from '../components/sections/StatsSection';
import About from '../components/sections/About';
import ChurchSection from '../components/sections/ChurchSection';
import CommunitySection from '../components/sections/CommunitySection';
import Academics from '../components/sections/Academics';
import ResultsSection from '../components/sections/ResultsSection';
import Testimonials from '../components/sections/Testimonials';
import Transport from '../components/sections/Transport';
import Gallery from '../components/sections/Gallery';
import Announcements from '../components/sections/Announcements';
import Contact from '../components/sections/Contact';
import BackToTop from '../components/ui/BackToTop';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Hero />
      <WhyChooseUs />
      <StatsSection />
      <About />
      <ChurchSection />
      <CommunitySection />
      <Academics />
      <ResultsSection />
      <Testimonials />
      <Transport />
      <Gallery />
      <Announcements />
      <Contact />
      <BackToTop />
    </Box>
  );
};

export default HomePage;
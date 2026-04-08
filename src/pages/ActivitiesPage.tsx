import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import ActivitiesGrid from '../components/sections/ActivitiesGrid';
import Achievements from '../components/sections/Achievements';
import CTABanner from '../components/ui/CTABanner';

const ActivitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Co-Curricular Activities" 
        subtitle="Discover your talents through our diverse range of sports, arts, and clubs"
      />
      <ActivitiesGrid />
      <Achievements />
      <CTABanner 
        title="Join Our Activities" 
        subtitle="Enroll your child in any of our exciting activities and watch them grow"
        buttonText="Enroll Now"
        buttonLink="/admissions"
      />
    </Box>
  );
};

export default ActivitiesPage;
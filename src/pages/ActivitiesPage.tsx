import { useEffect } from 'react';
import { Box, VStack, useColorModeValue } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import ActivitiesGrid from '../components/sections/ActivitiesGrid';
import Achievements from '../components/sections/Achievements';
import CTABanner from '../components/ui/CTABanner';

const ActivitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgGradient = useColorModeValue(
    'linear(to-br, cream.50, white, cream.50)',
    'linear(to-br, #242019, #171412, #242019)'
  );

  return (
    <Box bg={bgGradient} minH="100vh">
      <PageHero
        title="Co-Curricular Activities"
        subtitle="Discover your talents through our diverse range of sports, arts, and clubs"
        image="/images/gallery/sports/vollyball.webp"
        imageAlt="Pupils in a volleyball match"
      />
      <VStack spacing={0} w="full">
        <ActivitiesGrid />
        <Achievements />
        <CTABanner
          eyebrow="Get Involved"
          title="Join Our Activities"
          subtitle="Enroll your child in any of our exciting activities and watch them grow."
          buttonText="Enroll Now"
          enroll
          secondaryText="Learn More"
          secondaryLink="/contact"
        />
      </VStack>
    </Box>
  );
};

export default ActivitiesPage;
import { useEffect } from 'react';
import { Box, VStack, useColorModeValue } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import ActivitiesGrid from '../components/sections/ActivitiesGrid';
import Achievements from '../components/sections/Achievements';
import CTABanner from '../components/ui/CTABanner';
import { useBlock } from '../lib/blocks';
import { activitiesBlock, type ActivitiesBlock } from '../data/blocks/activities';

const ActivitiesPage = () => {
  const block = useBlock<ActivitiesBlock>('pages.activities', activitiesBlock);

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
        title={block.hero.title}
        subtitle={block.hero.subtitle}
        image={block.hero.image}
        imageAlt={block.hero.imageAlt}
      />
      <VStack spacing={0} w="full">
        <ActivitiesGrid
          activities={block.activities}
          heading={block.intro.heading}
          subtitle={block.intro.subtitle}
          categories={block.categories}
          cardLabels={block.card}
        />
        <Achievements />
        <CTABanner
          eyebrow={block.cta.eyebrow}
          title={block.cta.title}
          subtitle={block.cta.subtitle}
          buttonText={block.cta.buttonText}
          enroll
          secondaryText={block.cta.secondaryText}
          secondaryLink={block.cta.secondaryLink}
        />
      </VStack>
    </Box>
  );
};

export default ActivitiesPage;
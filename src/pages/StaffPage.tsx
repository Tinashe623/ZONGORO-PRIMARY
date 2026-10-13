import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import StaffLeadership from '../components/sections/StaffLeadership';
import CTABanner from '../components/ui/CTABanner';
import { useBlock } from '../lib/blocks';
import { staffPageBlock, type StaffPageBlock } from '../data/blocks/staffPage';

const StaffPage = () => {
  const block = useBlock<StaffPageBlock>('pages.staff', staffPageBlock);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero
        title={block.hero.title}
        subtitle={block.hero.subtitle}
        image={block.hero.image}
        imageAlt={block.hero.imageAlt}
      />
      <StaffLeadership />
      <CTABanner
        eyebrow={block.cta.eyebrow}
        title={block.cta.title}
        subtitle={block.cta.subtitle}
        buttonText={block.cta.buttonText}
        buttonLink={block.cta.buttonLink}
      />
    </Box>
  );
};

export default StaffPage;
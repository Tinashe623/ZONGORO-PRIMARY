import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import StaffLeadership from '../components/sections/StaffLeadership';
import CTABanner from '../components/ui/CTABanner';

const StaffPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero
        title="Our Team"
        subtitle="Meet the dedicated educators and staff who make St James Zongoro a place of excellence"
        image="/images/headmaster.webp"
        imageAlt="The headmaster in his office"
      />
      <StaffLeadership />
      <CTABanner
        eyebrow="Join Our Team"
        title="Be Part of Something Meaningful"
        subtitle="We're always looking for passionate educators. Reach out to learn about opportunities at St James Zongoro."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </Box>
  );
};

export default StaffPage;
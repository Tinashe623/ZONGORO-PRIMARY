import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import StaffLeadership from '../components/sections/StaffLeadership';
import StaffGrid from '../components/sections/StaffGrid';
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
      />
      <StaffLeadership />
      <StaffGrid />
      <CTABanner 
        title="Want to Join Our Team?" 
        subtitle="We are always looking for passionate educators. Contact us to learn about career opportunities."
        buttonText="Contact Us"
        buttonLink="/#contact"
      />
    </Box>
  );
};

export default StaffPage;
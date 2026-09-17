import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import StaffLeadership from '../components/sections/StaffLeadership';

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
    </Box>
  );
};

export default StaffPage;
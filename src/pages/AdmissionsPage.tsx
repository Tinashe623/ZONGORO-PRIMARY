import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import AdmissionRequirements from '../components/sections/AdmissionRequirements';
import ApplicationSteps from '../components/sections/ApplicationSteps';
import DocumentsChecklist from '../components/sections/DocumentsChecklist';
import FeesOverview from '../components/sections/FeesOverview';
import CTABanner from '../components/ui/CTABanner';

const AdmissionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Admissions" 
        subtitle="Join the St James Zongoro family and give your child the gift of quality education"
      />
      <AdmissionRequirements />
      <ApplicationSteps />
      <DocumentsChecklist />
      <FeesOverview />
      <CTABanner 
        title="Ready to Apply?" 
        subtitle="Take the first step towards your child's bright future"
        buttonText="Apply Now"
        buttonLink="/contact"
      />
    </Box>
  );
};

export default AdmissionsPage;
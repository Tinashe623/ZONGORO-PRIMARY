import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import AdmissionRequirements from '../components/sections/AdmissionRequirements';
import ApplicationSteps from '../components/sections/ApplicationSteps';
import DocumentsChecklist from '../components/sections/DocumentsChecklist';
import FeesOverview from '../components/sections/FeesOverview';

const MotionBox = motion(Box);

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
      
      {/* Why Choose Us - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {[
              { title: 'Quality Education', desc: 'ZIMSEC-aligned curriculum with experienced teachers' },
              { title: 'Holistic Development', desc: 'Sports, music, and spiritual growth programs' },
              { title: 'Safe Environment', desc: 'Secure campus with caring staff' },
            ].map((item, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box 
                  bg="white" 
                  p={8} 
                  borderRadius="2xl"
                  boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                  textAlign="center"
                  _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 30px rgba(130,0,0,0.12)' }}
                  transition="all 0.3s ease"
                >
                  <Heading size="md" color="maroon.500" mb={3}>
                    {item.title}
                  </Heading>
                  <Text color="gray.600">
                    {item.desc}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <AdmissionRequirements />
      <ApplicationSteps />
      <DocumentsChecklist />
      <FeesOverview />
    </Box>
  );
};

export default AdmissionsPage;
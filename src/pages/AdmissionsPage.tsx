import { useEffect } from 'react';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
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
      <Box py={{ base: 16, md: 20 }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
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
                  p={{ base: 6, md: 8 }}
                  borderRadius="2xl"
                  boxShadow="0 8px 32px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)"
                  border="1px solid"
                  borderColor="gray.100"
                  textAlign="center"
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgGradient: 'linear(to-br, rgba(255,255,255,0.9), rgba(130,0,32,0.02))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  _hover={{
                    transform: 'translateY(-6px) scale(1.02)',
                    boxShadow: '0 16px 48px rgba(130,0,32,0.18), 0 8px 24px rgba(0,0,0,0.12)',
                    borderColor: 'maroon.200',
                    _before: { opacity: 1 }
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  height="100%"
                >
                  <Heading size="md" color="maroon.500" mb={3}>
                    {item.title}
                  </Heading>
                  <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
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
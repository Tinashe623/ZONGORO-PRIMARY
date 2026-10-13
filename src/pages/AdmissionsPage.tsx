import { useEffect } from 'react';
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import AdmissionRequirements from '../components/sections/AdmissionRequirements';
import ApplicationSteps from '../components/sections/ApplicationSteps';
import DocumentsChecklist from '../components/sections/DocumentsChecklist';
import FeesOverview from '../components/sections/FeesOverview';
import CTABanner from '../components/ui/CTABanner';
import { useBlock } from '../lib/blocks';
import { admissionsBlock, type AdmissionsBlock } from '../data/blocks/admissions';

const AdmissionsPage = () => {
  const block = useBlock<AdmissionsBlock>('pages.admissions', admissionsBlock);

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
      
      {/* Why Choose Us - Cream Background */}
      <Box py={{ base: 16, md: 20 }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
            {block.highlights.map((item, index) => (
              <Box
                key={index}
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
                    bgGradient: 'linear(to-br, rgba(255,255,255,0.9), rgba(130,0,0,0.02))',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  _hover={{
                    transform: 'translateY(-6px) scale(1.02)',
                    boxShadow: '0 16px 48px rgba(130,0,0,0.18), 0 8px 24px rgba(0,0,0,0.12)',
                    borderColor: 'maroon.200',
                    _before: { opacity: 1 }
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  height="100%"
                >
                  <Heading size="md" color="brand" mb={3}>
                    {item.title}
                  </Heading>
                  <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                    {item.desc}
                  </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <AdmissionRequirements content={block.requirements} />
      <ApplicationSteps content={block.applicationSteps} />
      <DocumentsChecklist content={block.documents} />
      <FeesOverview content={block.fees} />
      <CTABanner
        eyebrow={block.cta.eyebrow}
        title={block.cta.title}
        subtitle={block.cta.subtitle}
        buttonText={block.cta.buttonText}
        enroll
        secondaryText={block.cta.secondaryText}
        secondaryLink={block.cta.secondaryLink}
      />
    </Box>
  );
};

export default AdmissionsPage;
import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import StatsSection from '../components/sections/StatsSection';
import Testimonials from '../components/sections/Testimonials';
import ScrollReveal from '../components/ui/ScrollReveal';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Hero />
      <WhyChooseUs />
      <StatsSection />
      
      <Box
        py={{ base: 12, md: 20 }}
        px={4}
        bgGradient="linear(135deg, #fdf2f4 0%, #fff9f0 25%, #f8f4ff 50%, #f0f7f4 75%, #fdf2f4 100%)"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgGradient: 'radial(circle at 80% 20%, rgba(128, 0, 32, 0.03) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      >
        <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 16 }} alignItems="center">
              <Box position="relative" p={{ base: 4, md: 8 }}>
                <Box
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="0 30px 60px rgba(128, 0, 32, 0.2)"
                  position="relative"
                >
                  <Image
                    src="/images/chief-image.jpg"
                    alt="Chief Mutasa"
                    w="100%"
                    h={{ base: '400px', md: '600px' }}
                    objectFit="cover"
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    h="80px"
                    bgGradient="linear(to-t, blackAlpha.600, transparent)"
                  />
                </Box>
                <Box
                  position="absolute"
                  bottom={8}
                  left={8}
                  bg="white"
                  borderRadius="xl"
                  px={4}
                  py={2}
                  boxShadow="0 4px 20px rgba(0,0,0,0.15)"
                >
                  <Text color="maroon.500" fontWeight="700" fontSize="sm">
                    Chief Mutasa
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    Community Leader
                  </Text>
                </Box>
              </Box>
              <VStack align="start" spacing={6}>
                <Heading
                  size="xl"
                  bgGradient="linear(to-r, maroon.500, maroon.700)"
                  bgClip="text"
                  fontWeight="700"
                >
                  Our Community Partnership
                </Heading>
                <Box w="60px" h="4px" bgGradient="linear(to-r, maroon.500, maroon.600)" borderRadius="full" />
                <Text color="gray.600" lineHeight="1.8" fontSize="lg">
                  St James Zongoro Primary School is deeply rooted in the Zongoro community. 
                  Our partnership with local leaders, parents, and villagers creates a supportive 
                  environment where every child can succeed.
                </Text>
                <Text color="gray.600" lineHeight="1.8" fontSize="lg">
                  Together with Chief Mutasa, we're building a brighter future for our children 
                  through quality education and community engagement.
                </Text>
                <Button
                  as={RouterLink}
                  to="/community"
                  bgGradient="linear(to-r, maroon.500, maroon.600)"
                  color="white"
                  size="lg"
                  px={8}
                  mt={2}
                  _hover={{ bgGradient: 'linear(to-r, maroon.600, maroon.700)', transform: 'translateY(-2px)' }}
                >
                  Read More
                </Button>
              </VStack>
            </SimpleGrid>
          </ScrollReveal>
        </Box>
      </Box>

      <Testimonials />
    </Box>
  );
};

export default HomePage;
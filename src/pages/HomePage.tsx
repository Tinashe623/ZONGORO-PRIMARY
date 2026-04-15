import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FacilitiesSection from '../components/sections/FacilitiesSection';
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
      <FacilitiesSection />
      
      <Box
        py={{ base: 12, md: 20 }}
        px={4}
        bg="cream.50"
        position="relative"
        overflow="hidden"
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        
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
                  bottom={{ base: 4, md: 8 }}
                  left={{ base: 4, md: 8 }}
                  bg="white"
                  borderRadius="xl"
                  px={{ base: 3, md: 4 }}
                  py={{ base: 1.5, md: 2 }}
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
                   size={{ base: "lg", md: "xl" }}
                   bg="maroon.500"
                   bgClip="text"
                   fontWeight="700"
                 >
                   Our Community Partnership
                 </Heading>
                 <Box w="60px" h="4px" bg="maroon.500" borderRadius="full" />
                 <Text color="gray.600" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }}>
                   St James Zongoro Primary School is deeply rooted in the Ndorikanda community.
                   Our partnership with local leaders, parents, and villagers creates a supportive
                   environment where every child can succeed.
                 </Text>
                 <Text color="gray.600" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }}>
                   Together with Chief James Mutasa, we're building a brighter future for our children
                   through quality education and community engagement.
                 </Text>
                <Button
                  as={RouterLink}
                  to="/community"
                  bg="maroon.500"
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
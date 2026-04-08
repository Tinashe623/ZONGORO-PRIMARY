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
      
      <Box py={16} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <Box>
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                  alt="Community"
                  borderRadius="2xl"
                  boxShadow="lg"
                  w="100%"
                  h="300px"
                  objectFit="cover"
                />
              </Box>
              <VStack align="start" spacing={4}>
                <Heading size="lg" color="maroon.500">
                  Our Community Partnership
                </Heading>
                <Text color="gray.600" lineHeight="1.8">
                  St James Zongoro Primary School is deeply rooted in the Zongoro community. 
                  Our partnership with local leaders, parents, and villagers creates a supportive 
                  environment where every child can succeed.
                </Text>
                <Text color="gray.600" lineHeight="1.8">
                  Together with Chief Zongoro, we're building a brighter future for our children 
                  through quality education and community engagement.
                </Text>
                <Button
                  as={RouterLink}
                  to="/community"
                  bg="maroon.500"
                  color="white"
                  size="md"
                  mt={2}
                  _hover={{ bg: 'maroon.600', transform: 'translateY(-2px)' }}
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
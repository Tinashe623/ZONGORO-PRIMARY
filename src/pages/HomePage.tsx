import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Button, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FacilitiesSection from '../components/sections/FacilitiesSection';
import Announcements from '../components/sections/Announcements';
import LatestMoments from '../components/sections/LatestMoments';
import SchoolStats from '../components/sections/SchoolStats';
import Testimonials from '../components/sections/Testimonials';
import { useBlock } from '../lib/blocks';
import { homeCommunityBlock, type HomeCommunityBlock } from '../data/blocks/homeCommunity';

const HomePage = () => {
  const community = useBlock<HomeCommunityBlock>('home.community', homeCommunityBlock);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Hero />
      <WhyChooseUs />
      <FacilitiesSection />
      <SchoolStats />
      <Announcements />
      <LatestMoments />
      
      <Box
        py={{ base: 12, md: 20 }}
        px={4}
        bg="cream.50"
        position="relative"
        overflow="hidden"
      >
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="forest.500" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        
        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 16 }} alignItems="center">
              <Box position="relative" p={{ base: 4, md: 8 }}>
                <Box
                  borderRadius="3xl"
                  overflow="hidden"
                  boxShadow="0 30px 60px rgba(130, 0, 0, 0.2)"
                  position="relative"
                >
                  <Image
                    src={community.image}
                    alt={community.imageAlt}
                    loading="lazy"
                    decoding="async"
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
                    bgGradient="linear(to-t, rgba(0, 0, 0, 0.6), transparent)"
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
                  <Text color="brand" fontWeight="700" fontSize="sm">
                    {community.leaderName}
                  </Text>
                  <Text color="gray.500" fontSize="xs">
                    {community.leaderRole}
                  </Text>
                </Box>
              </Box>
               <VStack align="start" spacing={6}>
                 <Heading
                   fontSize={{ base: "lg", md: "xl" }}
                   bg="brand"
                   bgClip="text"
                   fontWeight="700"
                 >
                   {community.heading}
                 </Heading>
                 <Box w="60px" h="4px" bg="maroon.500" borderRadius="full" />
                  {community.paragraphs.map((paragraph, index) => (
                    <Text key={index} color="gray.700" lineHeight="1.8" fontSize={{ base: "md", md: "lg" }}>
                      {paragraph}
                    </Text>
                  ))}
                <Button
                  as={RouterLink}
                  to={community.buttonLink}
                  bg="maroon.500"
                  color="onAccent"
                  size="lg"
                  px={8}
                  mt={2}
                  _hover={{ bgGradient: 'linear(to-r, maroon.600, maroon.700)', transform: 'translateY(-2px)' }}
                >
                  {community.buttonText}
                </Button>
              </VStack>
            </SimpleGrid>
        </Box>
      </Box>

      <Testimonials />
    </Box>
  );
};

export default HomePage;
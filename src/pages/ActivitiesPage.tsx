import { useEffect } from 'react';
import { Box, VStack, useColorModeValue, Heading, Text } from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import ActivitiesGrid from '../components/sections/ActivitiesGrid';
import Achievements from '../components/sections/Achievements';
import EnrollButton from '../components/ui/EnrollButton';

const ActivitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgGradient = useColorModeValue(
    'linear(to-br, cream.50, white, cream.50)',
    'linear(to-br, #242019, #171412, #242019)'
  );

  return (
    <Box bg={bgGradient} minH="100vh">
      <PageHero
        title="Co-Curricular Activities"
        subtitle="Discover your talents through our diverse range of sports, arts, and clubs"
        image="/images/gallery/sports/vollyball.webp"
        imageAlt="Pupils in a volleyball match"
      />
      <VStack spacing={0} w="full">
        <ActivitiesGrid />
        <Achievements />
        <Box w="full" py={16} px={4} bg="maroon.500">
          <Box maxW="1200px" mx="auto" textAlign="center">
            <Heading
              size="2xl"
              color="onAccent"
              fontWeight="700"
              lineHeight="1.2"
              mb={4}
            >
              Join Our Activities
            </Heading>
            <Text
              fontSize="lg"
              color="whiteAlpha.900"
              maxW="600px"
              mx="auto"
              lineHeight="1.7"
              mb={8}
            >
              Enroll your child in any of our exciting activities and watch them grow
            </Text>
            <EnrollButton
              bg="forest.500"
              color="onAccent"
              size="lg"
              px={10}
              fontWeight="600"
              borderRadius="full"
              _hover={{
                bg: 'forest.600',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(45, 106, 79, 0.3)'
              }}
              transition="all 0.3s ease"
            >
              Enroll Now
            </EnrollButton>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default ActivitiesPage;
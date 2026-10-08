import { useEffect } from 'react';
import { Box, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero title="Page Not Found" subtitle="The page you're looking for doesn't exist or has moved" />
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={8} textAlign="center">
              <Heading
                fontSize={{ base: '7xl', md: '9rem' }}
                bgGradient="linear(to-r, maroon.500, maroon.400)"
                bgClip="text"
                fontWeight="800"
                lineHeight="1"
              >
                404
              </Heading>
              <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} maxW="520px" lineHeight="1.7">
                This page seems to have been misplaced. Let's get you back on track.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button as={RouterLink} to="/" colorScheme="maroon" size="lg" px={8}>
                  Back to Home
                </Button>
                <Button as={RouterLink} to="/contact" variant="outline" colorScheme="maroon" size="lg" px={8}>
                  Contact Us
                </Button>
              </HStack>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
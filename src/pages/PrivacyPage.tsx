import { useEffect } from 'react';
import { Box, Heading, Text, VStack, Container, Button, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import NeonDivider from '../components/ui/NeonDivider';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Privacy Policy" 
        subtitle="Your privacy is important to us"
      />
      <NeonDivider />
      
      <Box py={16} px={4} bg="white">
        <Container maxW="900px">
          <VStack spacing={8} align="start">
            <Box>
              <Heading size="lg" color="maroon.500" mb={4}>
                Data Collection Notice
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                St James Zongoro Primary School website is an informative platform designed to provide 
                information about our school to parents, students, and the community. We do not 
                collect, store, or process any personal data from visitors to this website.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                No Personal Information Collected
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                This website does not use cookies, tracking mechanisms, or any form of data collection 
                tools. You can browse our website anonymously without providing any personal information.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Information We Provide
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                The information on this website includes general details about our school's history, 
                academic programs, admission procedures, and contact information. This content is 
                provided for informational purposes only.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Third-Party Links
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                Our website may contain links to external websites. Please note that we are not 
                responsible for the privacy practices or content of these third-party sites.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Contact Us
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                If you have any questions about this Privacy Policy, please contact us at 
                zongoro.primary@gmail.com or call +263 77 321 1929 / +263 71 854 6070.
              </Text>
            </Box>

            <Flex pt={4} w="100%" justify="center">
              <Button
                as={RouterLink}
                to="/"
                leftIcon={<FaArrowLeft />}
                bgGradient="linear(to-r, maroon.500, maroon.600)"
                color="white"
                _hover={{ bgGradient: 'linear(to-r, maroon.600, maroon.700)' }}
              >
                Back to Home
              </Button>
            </Flex>

            <Text color="gray.500" fontSize="sm">
              Last updated: April 2026
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default PrivacyPage;
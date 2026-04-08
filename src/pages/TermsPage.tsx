import { useEffect } from 'react';
import { Box, Heading, Text, VStack, Container, Button, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import NeonDivider from '../components/ui/NeonDivider';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Terms of Service" 
        subtitle="Please read these terms carefully"
      />
      <NeonDivider />
      
      <Box py={16} px={4} bg="white">
        <Container maxW="900px">
          <VStack spacing={8} align="start">
            <Box>
              <Heading size="lg" color="maroon.500" mb={4}>
                Acceptance of Terms
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                By accessing and using the St James Zongoro Primary School website, you accept and 
                agree to be bound by the terms and provisions of this agreement.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Website Purpose
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                This website is an informational platform operated by St James Zongoro Primary School. 
                It provides general information about our educational programs, admission procedures, 
                school policies, and contact information.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Information Accuracy
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                While we strive to provide accurate and up-to-date information, we make no 
                representations or warranties of any kind, express or implied, about the completeness, 
                accuracy, reliability, or suitability of the information contained on this website.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Use of Website
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                You agree to use this website only for lawful purposes and in a manner that does not 
                infringe upon the rights of others or restrict their use of the website.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Intellectual Property
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                All content on this website, including logos, images, text, and design elements, 
                are the intellectual property of St James Zongoro Primary School. Unauthorized 
                reproduction or distribution is prohibited.
              </Text>
            </Box>

            <Box>
              <Heading size="md" color="maroon.500" mb={3}>
                Contact Information
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                For questions about these Terms of Service, please contact us at:
              </Text>
              <Text color="gray.600" mt={2}>
                Email: info@stjameszongoro.ac.zw<br />
                Phone: +263 772 123 456<br />
                Address: Zongoro Village, Gutu District, Masvingo, Zimbabwe
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

export default TermsPage;
import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Link,
  Heading,
  Divider,
  Flex,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="cream.50" pt={12} pb={6}>
      <Box maxW="1400px" mx="auto" px={4}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          <VStack align="start">
            <Heading size="md" color="maroon.500" mb={2}>
              St James Zongoro Primary
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Providing quality education rooted in Anglican values and community
              partnership since 1985.
            </Text>
          </VStack>

          <VStack align="start">
            <Heading size="sm" mb={3}>
              Quick Links
            </Heading>
            <Link href="#home" _hover={{ color: 'maroon.500' }}>
              Home
            </Link>
            <Link href="#about" _hover={{ color: 'maroon.500' }}>
              About
            </Link>
            <Link href="#academics" _hover={{ color: 'maroon.500' }}>
              Academics
            </Link>
            <Link href="#contact" _hover={{ color: 'maroon.500' }}>
              Contact
            </Link>
          </VStack>

          <VStack align="start">
            <Heading size="sm" mb={3}>
              Contact Info
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Zongoro Village
            </Text>
            <Text fontSize="sm" color="gray.600">
              Gutu District, Masvingo
            </Text>
            <Text fontSize="sm" color="gray.600" mt={2}>
              +263 772 123 456
            </Text>
            <Text fontSize="sm" color="gray.600">
              info@stjameszongoro.ac.zw
            </Text>
          </VStack>

          <VStack align="start">
            <Heading size="sm" mb={3}>
              School Hours
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Monday - Friday
            </Text>
            <Text fontSize="sm" color="gray.600">
              7:30 AM - 3:30 PM
            </Text>
            <Text fontSize="sm" color="gray.600" mt={2}>
              Saturday: Closed
            </Text>
            <Text fontSize="sm" color="gray.600">
              Sunday: Church Services
            </Text>
          </VStack>
        </SimpleGrid>

        <Divider my={8} />

        <Flex justify="center">
          <Text fontSize="sm" color="gray.500">
            © 2026 St James Zongoro Primary School. All rights reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
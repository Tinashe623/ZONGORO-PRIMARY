import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Link,
  Heading,
  Flex,
  Icon,
  IconButton,
  HStack,
  Image,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaCode } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { MANAGEMENT_LOGIN_URL } from '../../config';
import { schoolContact } from '../../data/contact';
import EnrollButton from '../ui/EnrollButton';

const Footer = () => {
  return (
    <Box
      bg="maroon.800"
      pt={16}
      pb={6}
      position="relative"
      overflow="hidden"
      borderTopWidth="1px"
      borderTopStyle="solid"
      borderTopColor="whiteAlpha.300"
    >
      <Box
        position="absolute"
        top={-50}
        right={-50}
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
      />
      <Box
        position="absolute"
        bottom={-30}
        left={-30}
        w="150px"
        h="150px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.05)"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="3px"
        bg="maroon.400"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.05}
        backgroundImage="radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)"
        backgroundSize="40px 40px"
        pointerEvents="none"
      />
      
      <Box maxW="1200px" mx="auto" px={4} position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <VStack align="start" spacing={4}>
            <Flex align="center" gap={4} flexWrap="wrap">
              <Box
                w="64px"
                h="64px"
              >
                <Image
                  src="/images/st-james-zongoro-primary-logo.webp"
                  alt="St James Zongoro Primary School Logo"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Box>
                <Heading size="md" color="onAccent" fontWeight="700" lineHeight="1.1" letterSpacing="-0.02em">
                  {schoolContact.shortName}
                </Heading>
                <Text fontSize="xs" color="whiteAlpha.900" letterSpacing="0.15em" mt={0.5}>
                  {schoolContact.tagline}
                </Text>
              </Box>
            </Flex>
            <Text fontSize="sm" color="whiteAlpha.900" lineHeight="1.8">
              {schoolContact.description}
            </Text>
            <HStack spacing={2} pt={2}>
              <IconButton
                as={Link}
                href={schoolContact.facebook}
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                color="whiteAlpha.900"
                _hover={{ bg: 'forest.400', color: 'onAccent', transform: 'translateY(-3px)' }}
                size="sm"
                transition="all 0.3s ease"
                isExternal
              />
            </HStack>
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" color="onAccent" fontWeight="600" mb={1}>
              Quick Links
            </Heading>
            <Link as={RouterLink} to="/" color="whiteAlpha.900" fontSize={{ base: "xs", md: "sm" }} fontWeight="500" _hover={{ color: 'onAccent', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Home
            </Link>
            <Link as={RouterLink} to="/about" color="whiteAlpha.900" fontSize={{ base: "xs", md: "sm" }} fontWeight="500" _hover={{ color: 'onAccent', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              About Us
            </Link>
            <Link as={RouterLink} to="/admissions" color="whiteAlpha.900" fontSize={{ base: "xs", md: "sm" }} fontWeight="500" _hover={{ color: 'onAccent', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Admissions
            </Link>
            <Link href={MANAGEMENT_LOGIN_URL} isExternal color="whiteAlpha.900" fontSize={{ base: "xs", md: "sm" }} fontWeight="500" _hover={{ color: 'onAccent', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Parent / Staff Login
            </Link>
            <Link as={RouterLink} to="/academics" color="whiteAlpha.900" fontSize={{ base: "xs", md: "sm" }} fontWeight="500" _hover={{ color: 'onAccent', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Academics
            </Link>
            <Link as={RouterLink} to="/contact" color="whiteAlpha.900" fontSize={{ base: "xs", md: "sm" }} fontWeight="500" _hover={{ color: 'onAccent', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Contact
            </Link>
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" color="onAccent" fontWeight="600" mb={1}>
              Contact Info
            </Heading>
            <Flex align="start" gap={3}>
              <Icon as={FaMapMarkerAlt} color="whiteAlpha.900" mt={1} />
              <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900">
                {schoolContact.address}
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={FaPhone} color="whiteAlpha.900" />
              <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900">
                {schoolContact.phoneInternational}
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={FaEnvelope} color="whiteAlpha.900" />
              <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900">
                {schoolContact.email}
              </Text>
            </Flex>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm" color="onAccent" fontWeight="600" mb={1}>
              Get Started
            </Heading>
            <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900">
              Enrollment is open for ECD to Grade 7. Start your child's learning journey with us today.
            </Text>
            <EnrollButton
              size="sm"
              w="100%"
              bgGradient="linear(to-r, white, gray.100)"
              color="maroon.500"
              fontWeight="600"
              _hover={{ bgGradient: 'linear(to-r, gray.100, gray.200)', transform: 'translateY(-2px)' }}
            >
              Apply Now
            </EnrollButton>
          </VStack>
        </SimpleGrid>

        <Box
          mt={12}
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.300"
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900">
              © {new Date().getFullYear()} St James Zongoro Primary School. All rights reserved.
            </Text>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/privacy" fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900" _hover={{ color: 'cream.100' }} transition="all 0.3s ease">
                Privacy Policy
              </Link>
              <Link as={RouterLink} to="/terms" fontSize={{ base: "xs", md: "sm" }} color="whiteAlpha.900" _hover={{ color: 'cream.100' }} transition="all 0.3s ease">
                Terms of Service
              </Link>
            </HStack>
          </Flex>
        </Box>

        <Box
          mt={6}
          pt={4}
          pb={2}
          borderTop="1px solid"
          borderColor="whiteAlpha.300"
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={2}
          >
            <Flex align="center" gap={2}>
              <Text fontSize="xs" color="whiteAlpha.900">
                Website designed & developed by
              </Text>
              <Link 
                href="https://tinashe-mundieta.vercel.app" 
                isExternal
                fontSize="xs" 
                color="cream.100" 
                fontWeight="600"
                _hover={{ color: 'onAccent', textDecoration: 'none' }}
                transition="all 0.3s ease"
              >
                Tinashe Mundieta
              </Link>
              <Icon as={FaCode} color="whiteAlpha.700" fontSize="xs" />
            </Flex>
            <Text fontSize="xs" color="whiteAlpha.900">
              Alumnus | Software Developer
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
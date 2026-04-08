import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Link,
  Heading,
  Flex,
  Icon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPaperPlane, FaSchool, FaCode } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      bgGradient="linear(135deg, maroon.500 0%, maroon.700 100%)"
      pt={16}
      pb={6}
      position="relative"
      overflow="hidden"
      boxShadow="0 10px 40px rgba(128, 0, 32, 0.3)"
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
        h="4px"
        bgGradient="linear(to-r, #00ff88, #00cc6a, #00ff88)"
        boxShadow="0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3)"
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
      
      <Box maxW="1400px" mx="auto" px={4} position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <VStack align="start" spacing={4}>
            <Flex align="center" gap={3}>
              <Flex
                align="center"
                justify="center"
                w="50px"
                h="50px"
                borderRadius="xl"
                bgGradient="linear(135deg, whiteAlpha.200 0%, whiteAlpha.100 100%)"
                backdropFilter="blur(10px)"
              >
                <Icon as={FaSchool} color="white" fontSize="xl" />
              </Flex>
              <Heading size="md" color="white" fontWeight="700">
                St James Zongoro
              </Heading>
            </Flex>
            <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.8">
              Providing quality education rooted in Anglican values and community 
              partnership for over 100 years.
            </Text>
            <HStack spacing={2} pt={2}>
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                color="whiteAlpha.800"
                _hover={{ bg: '#00ff88', color: 'maroon.600', transform: 'translateY(-3px)' }}
                size="sm"
                transition="all 0.3s ease"
              />
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                color="whiteAlpha.800"
                _hover={{ bg: '#00ff88', color: 'maroon.600', transform: 'translateY(-3px)' }}
                size="sm"
                transition="all 0.3s ease"
              />
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="whiteAlpha.800"
                _hover={{ bg: '#00ff88', color: 'maroon.600', transform: 'translateY(-3px)' }}
                size="sm"
                transition="all 0.3s ease"
              />
              <IconButton
                aria-label="Youtube"
                icon={<FaYoutube />}
                variant="ghost"
                color="whiteAlpha.800"
                _hover={{ bg: '#00ff88', color: 'maroon.600', transform: 'translateY(-3px)' }}
                size="sm"
                transition="all 0.3s ease"
              />
            </HStack>
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" color="white" fontWeight="600" mb={1}>
              Quick Links
            </Heading>
            <Link as={RouterLink} to="/" color="whiteAlpha.800" fontSize="sm" fontWeight="500" _hover={{ color: 'white', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Home
            </Link>
            <Link as={RouterLink} to="/about" color="whiteAlpha.800" fontSize="sm" fontWeight="500" _hover={{ color: 'white', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              About Us
            </Link>
            <Link as={RouterLink} to="/admissions" color="whiteAlpha.800" fontSize="sm" fontWeight="500" _hover={{ color: 'white', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Admissions
            </Link>
            <Link as={RouterLink} to="/academics" color="whiteAlpha.800" fontSize="sm" fontWeight="500" _hover={{ color: 'white', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Academics
            </Link>
            <Link as={RouterLink} to="/contact" color="whiteAlpha.800" fontSize="sm" fontWeight="500" _hover={{ color: 'white', transform: 'translateX(5px)', textDecoration: 'none' }} transition="all 0.3s ease">
              Contact
            </Link>
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" color="white" fontWeight="600" mb={1}>
              Contact Info
            </Heading>
            <Flex align="start" gap={3}>
              <Icon as={FaMapMarkerAlt} color="whiteAlpha.700" mt={1} />
              <Text fontSize="sm" color="whiteAlpha.800">
                Zongoro Village, Gutu District, Masvingo, Zimbabwe
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={FaPhone} color="whiteAlpha.700" />
              <Text fontSize="sm" color="whiteAlpha.800">
                +263 772 123 456
              </Text>
            </Flex>
            <Flex align="center" gap={3}>
              <Icon as={FaEnvelope} color="whiteAlpha.700" />
              <Text fontSize="sm" color="whiteAlpha.800">
                info@stjameszongoro.ac.zw
              </Text>
            </Flex>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="sm" color="white" fontWeight="600" mb={1}>
              Stay Updated
            </Heading>
            <Text fontSize="sm" color="whiteAlpha.800">
              Subscribe to our newsletter for latest updates and news.
            </Text>
            <InputGroup size="md">
              <Input
                placeholder="Enter your email"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.300"
                color="white"
                _placeholder={{ color: 'whiteAlpha.500' }}
                _focus={{ borderColor: 'white', boxShadow: 'none' }}
                borderRadius="lg"
              />
              <InputRightElement>
                <IconButton
                  aria-label="Subscribe"
                  icon={<FaPaperPlane />}
                  size="sm"
                  bgGradient="linear(to-r, white, gray.100)"
                  color="maroon.600"
                  _hover={{ bgGradient: 'linear(to-r, gray.100, gray.200)' }}
                />
              </InputRightElement>
            </InputGroup>
            <Button
              as={RouterLink}
              to="/admissions"
              size="sm"
              w="100%"
              bgGradient="linear(to-r, white, gray.100)"
              color="maroon.600"
              fontWeight="600"
              _hover={{ bgGradient: 'linear(to-r, gray.100, gray.200)', transform: 'translateY(-2px)' }}
            >
              Apply Now
            </Button>
          </VStack>
        </SimpleGrid>

        <Box
          mt={12}
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text fontSize="sm" color="whiteAlpha.600">
              © 2026 St James Zongoro Primary School. All rights reserved.
            </Text>
            <HStack spacing={4}>
              <Link as={RouterLink} to="/privacy" fontSize="sm" color="whiteAlpha.600" _hover={{ color: '#00ff88' }} transition="all 0.3s ease">
                Privacy Policy
              </Link>
              <Link as={RouterLink} to="/terms" fontSize="sm" color="whiteAlpha.600" _hover={{ color: '#00ff88' }} transition="all 0.3s ease">
                Terms of Service
              </Link>
            </HStack>
          </Flex>
        </Box>

        <Box
          mt={6}
          pt={4}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
        >
          <VStack spacing={2}>
            <Flex align="center" gap={2}>
              <Text fontSize="xs" color="whiteAlpha.600">
                Website designed & developed by
              </Text>
              <Link 
                href="https://tinashe-mundieta.vercel.app" 
                isExternal
                fontSize="xs" 
                color="#00ff88" 
                fontWeight="600"
                _hover={{ color: 'white', textDecoration: 'none' }}
                transition="all 0.3s ease"
              >
                Tinashe Mundieta
              </Link>
              <Icon as={FaCode} color="whiteAlpha.500" fontSize="xs" />
            </Flex>
            <Text fontSize="xs" color="whiteAlpha.500">
              Alumnus | Software Developer
            </Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
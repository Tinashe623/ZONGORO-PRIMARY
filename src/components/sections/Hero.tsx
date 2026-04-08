import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const Hero = () => {
  return (
    <Box
      id="home"
      position="relative"
      h="100vh"
      minH="600px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop')"
      bgSize="cover"
      bgPosition="center"
    >
      <Container maxW="1400px" textAlign="center">
        <VStack spacing={6}>
          <Box
            as={motion.div}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Heading
              size="3xl"
              color="white"
              lineHeight="1.2"
              fontWeight="700"
            >
              Welcome to St James Zongoro Primary School
            </Heading>
          </Box>

          <Box
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <Text
              fontSize="xl"
              color="whiteAlpha.900"
              maxW="700px"
            >
              Providing quality education rooted in Anglican values and community
              partnership since 1985.
            </Text>
          </Box>

          <Box
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.4 }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={RouterLink}
                to="/admissions"
                bg="maroon.500"
                color="white"
                size="lg"
                px={8}
                _hover={{ bg: 'maroon.600', transform: 'translateY(-2px)' }}
              >
                Apply for Admission
              </Button>
              <ScrollLink to="contact" smooth={true} offset={-70}>
                <Button
                  variant="outline"
                  borderColor="white"
                  color="white"
                  size="lg"
                  px={8}
                  _hover={{ bg: 'white', color: 'maroon.500' }}
                >
                  Contact Us
                </Button>
              </ScrollLink>
              <ScrollLink to="about" smooth={true} offset={-70}>
                <Button
                  variant="ghost"
                  color="white"
                  size="lg"
                  px={8}
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Learn More
                </Button>
              </ScrollLink>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
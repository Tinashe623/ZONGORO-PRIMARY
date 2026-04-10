import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  Flex
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
    <Box id="home" position="relative">
      <Flex
        position="relative"
        h="100vh"
        minH="600px"
        alignItems="center"
        justifyContent="center"
        bgImage="linear-gradient(135deg, rgba(128, 0, 32, 0.8) 0%, rgba(26, 26, 26, 0.7) 100%), url('/images/hero-image.png')"
        bgSize="cover"
        bgPosition="center"
        zIndex={1}
      >
        <Container maxW="1400px" textAlign="center">
          <VStack spacing={8}>
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
                Welcome to St James The Great, Zongoro Primary School
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
              <HStack spacing={6} flexWrap="wrap" justify="center">
                <Button
                  as={RouterLink}
                  to="/admissions"
                  bg="white"
                  color="maroon.500"
                  size="lg"
                  px={10}
                  fontWeight="600"
                  _hover={{ bg: 'whiteAlpha.900', transform: 'translateY(-2px)' }}
                >
                  Apply for Admission
                </Button>
                <ScrollLink to="contact" smooth={true} offset={-70}>
                  <Button
                    variant="outline"
                    borderColor="white"
                    color="white"
                    size="lg"
                    px={10}
                    fontWeight="600"
                    _hover={{ bg: 'whiteAlpha.200' }}
                  >
                    Contact Us
                  </Button>
                </ScrollLink>
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Flex>
      {/* Downward triangle pointer */}
      <Box
        position="absolute"
        bottom="-20px"
        left="50%"
        transform="translateX(-50%)"
        w="0"
        h="0"
        borderLeft="20px solid transparent"
        borderRight="20px solid transparent"
        borderTop="20px solid"
        borderTopColor="maroon.500"
        zIndex={2}
      />
    </Box>
  );
};

export default Hero;
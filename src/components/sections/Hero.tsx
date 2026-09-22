import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { MANAGEMENT_ENROLL_URL } from '../../config';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const fadeInUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Hero = () => {
  return (
    <Box id="home" position="relative" overflow="hidden">
      {/* Background image with gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="linear-gradient(180deg, rgba(80, 15, 15, 0.55) 0%, rgba(18, 55, 40, 0.72) 100%), url('/images/bus-welcoming.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      />

      <Box
        position="relative"
        h="100vh"
        minH={{ base: "600px", md: "700px" }}
        zIndex={1}
      >
        <Container maxW="1000px" h="full" display="flex" alignItems="center">
          <Box
            as={motion.div}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            w="full"
          >
            <VStack spacing={{ base: 5, md: 6 }} align="center" textAlign="center">
              <motion.div variants={fadeInUpItem}>
                <Heading
                  as="h1"
                  size={{ base: "xl", md: "2xl", lg: "3xl" }}
                  color="white"
                  lineHeight={{ base: "1.2", md: "1.1" }}
                  fontWeight="800"
                  textShadow="0 2px 20px rgba(0,0,0,0.3)"
                >
                  St James Zongoro{' '}
                  <Text as="span" color="cream.200">
                    Primary School
                  </Text>
                </Heading>
              </motion.div>

              <motion.div variants={fadeInUpItem}>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="whiteAlpha.900"
                  fontWeight="500"
                  maxW="600px"
                  lineHeight="1.7"
                >
                  Where academic excellence meets Anglican values, shaping future leaders through quality education and community spirit.
                </Text>
              </motion.div>

              <motion.div variants={fadeInUpItem}>
                <HStack 
                  spacing={{ base: 3, md: 5 }} 
                  flexWrap="wrap" 
                  justify="center"
                >
                  <Button
                    as="a"
                    href={MANAGEMENT_ENROLL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="cream.100"
                    color="maroon.700"
                    size={{ base: "md", md: "lg" }}
                    px={{ base: 6, md: 9 }}
                    fontWeight="600"
                    _hover={{ bg: "cream.200", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                  >
                    Apply Now
                  </Button>
                  <ScrollLink to="contact" smooth={true} offset={-70}>
                    <Button
                      variant="outline"
                      borderColor="whiteAlpha.400"
                      color="white"
                      size={{ base: "md", md: "lg" }}
                      px={{ base: 6, md: 9 }}
                      fontWeight="600"
                      _hover={{ bg: "whiteAlpha.100", borderColor: "white" }}
                    >
                      Contact Us
                    </Button>
                  </ScrollLink>
                </HStack>
              </motion.div>

              <motion.div variants={fadeInUpItem}>
                <HStack 
                  spacing={{ base: 6, md: 10 }} 
                  color="whiteAlpha.800"
                  fontSize="sm"
                  fontWeight="500"
                  flexWrap="wrap"
                  justify="center"
                >
                  <Flex align="center" gap={2}>
                    <Box w="6px" h="6px" borderRadius="full" bg="forest.400" />
                    <Text>Enrolling for 2026</Text>
                  </Flex>
                  <Flex align="center" gap={2}>
                    <Box w="6px" h="6px" borderRadius="full" bg="maroon.400" />
                    <Text>ECD to Grade 7</Text>
                  </Flex>
                </HStack>
              </motion.div>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
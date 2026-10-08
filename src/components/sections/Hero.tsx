import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  Flex,
  Image,
} from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { PhoneIcon, StarIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import EnrollButton from '../ui/EnrollButton';

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
  const reduceMotion = useReducedMotion();
  const enrollingYear = new Date().getFullYear() + 1;

  return (
    <Box id="home" position="relative" overflow="hidden">
      <Image
        src="/images/hero-2026.webp"
        alt=""
        role="presentation"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
        sx={{ filter: 'saturate(1.12) contrast(1.05)' }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage={{
          base: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%), radial-gradient(ellipse 120% 78% at 50% 54%, rgba(6, 18, 12, 0.44) 0%, rgba(6, 18, 12, 0.2) 55%, rgba(6, 18, 12, 0) 100%), linear-gradient(180deg, rgba(6, 18, 12, 0.4) 0%, rgba(6, 18, 12, 0.02) 22%, rgba(6, 18, 12, 0.08) 58%, rgba(6, 18, 12, 0.55) 100%), linear-gradient(115deg, rgba(130, 0, 0, 0.22) 0%, rgba(130, 0, 0, 0) 42%)",
          md: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%), radial-gradient(ellipse 95% 72% at 50% 50%, rgba(6, 18, 12, 0.56) 0%, rgba(6, 18, 12, 0.26) 55%, rgba(6, 18, 12, 0) 100%), linear-gradient(180deg, rgba(6, 18, 12, 0.5) 0%, rgba(6, 18, 12, 0.03) 20%, rgba(6, 18, 12, 0.08) 55%, rgba(6, 18, 12, 0.68) 100%), linear-gradient(115deg, rgba(130, 0, 0, 0.3) 0%, rgba(130, 0, 0, 0) 45%)"
        }}
      />

      <Box
        position="relative"
        h={{ base: "92vh", md: "90vh" }}
        minH={{ base: "600px", md: "700px" }}
        zIndex={1}
      >
        <Container maxW="1200px" h="full" display="flex" alignItems="center">
          <Box
            as={motion.div}
            variants={staggerContainer}
            initial={reduceMotion ? 'visible' : 'hidden'}
            animate="visible"
            w="full"
          >
            <VStack spacing={{ base: 5, md: 6 }} align="center" textAlign="center">
              <Box as={motion.div} variants={fadeInUpItem} mb={{ base: 3, md: 4 }}>
                <HStack spacing={3} flexWrap="wrap" justify="center">
                  <Flex
                    align="center"
                    gap={2}
                    px={4}
                    py={1.5}
                    borderRadius="full"
                    bg="whiteAlpha.100"
                    borderWidth="1px"
                    borderColor="whiteAlpha.300"
                    backdropFilter="auto"
                    backdropBlur="6px"
                  >
                    <Box
                      w="8px"
                      h="8px"
                      borderRadius="full"
                      bg="forest.300"
                      boxShadow="0 0 0 4px rgba(45, 106, 79, 0.25)"
                    />
                    <Text fontSize="sm" fontWeight="600" color="whiteAlpha.900">
                      Now accepting {enrollingYear} enrolments
                    </Text>
                  </Flex>
                  <Flex
                    align="center"
                    gap={2}
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="whiteAlpha.300"
                    color="whiteAlpha.900"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    <StarIcon color="maroon.300" />
                    <Text>ECD to Grade 7</Text>
                  </Flex>
                </HStack>
              </Box>

              <motion.div variants={fadeInUpItem}>
                <Heading
                  as="h1"
                  fontSize={{ base: "2xl", md: "5xl", lg: "6xl", xl: "5rem" }}
                  color="onAccent"
                  lineHeight={{ base: "1.15", md: "1.05" }}
                  fontWeight="800"
                  textShadow="0 2px 18px rgba(6, 18, 12, 0.5)"
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
                  maxW="2xl"
                  mx="auto"
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
                  <EnrollButton
                    bg="cream.100"
                    color="maroon.700"
                    size="lg"
                    px={{ base: 6, md: 9 }}
                    fontWeight="600"
                    _hover={{ bg: "cream.200", transform: "translateY(-2px)" }}
                    transition="all 0.2s"
                  >
                    Apply Now
                  </EnrollButton>
                  <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="outline"
                      borderWidth="1px"
                      borderColor="whiteAlpha.400"
                      bg="whiteAlpha.100"
                      color="onAccent"
                      size="lg"
                      px={{ base: 6, md: 9 }}
                      fontWeight="600"
                      backdropFilter="auto"
                      backdropBlur={{ base: '4px', md: '6px' }}
                      leftIcon={<PhoneIcon />}
                      boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
                      transition="all 0.2s ease"
                      _hover={{
                        bg: 'whiteAlpha.200',
                        borderColor: 'onAccent',
                        transform: 'translateY(-2px)',
                      }}
                    >
                      Contact Us
                    </Button>
                  </RouterLink>
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
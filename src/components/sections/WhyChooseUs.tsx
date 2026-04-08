import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  CardBody,
  Icon,
  Flex,
  Button,
} from '@chakra-ui/react';
import { FaGraduationCap, FaChurch, FaUsers, FaBus, FaHome, FaBullseye, FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { Link as RouterLink } from 'react-router-dom';

const features = [
  {
    icon: FaGraduationCap,
    title: 'Academic Excellence',
    description: 'Consistent Grade 7 pass rates above 90%, preparing students for success in secondary education and beyond.',
  },
  {
    icon: FaChurch,
    title: 'Christian Foundation',
    description: 'Rooted in Anglican values and morals, fostering character development alongside academic achievement.',
  },
  {
    icon: FaUsers,
    title: 'Community Partnership',
    description: 'Strong ties with local leadership and village community, creating a supportive learning environment.',
  },
  {
    icon: FaBus,
    title: 'Reliable Transport',
    description: 'Safe daily school bus service ensuring all students can attend school reliably and safely.',
  },
  {
    icon: FaHome,
    title: 'Boarding Facilities',
    description: 'Modern boarding institute with comfortable dormitories, supervised study, and nutritious meals.',
  },
  {
    icon: FaBullseye,
    title: 'Holistic Development',
    description: 'Sports, arts, and extracurricular activities that develop well-rounded individuals.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box
      py={20}
      px={4}
      bgGradient="linear(135deg, #fdf2f4 0%, #fff9f0 25%, #f8f4ff 50%, #f0f7f4 75%, #fdf2f4 100%)"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgGradient: 'radial(circle at 20% 80%, rgba(128, 0, 32, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
      }}
    >
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <SectionHeading
            title="Why Choose St James Zongoro?"
            subtitle="Discover what makes our school special"
          />
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Card
                bg="rgba(255, 255, 255, 0.85)"
                backdropFilter="blur(10px)"
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.04)"
                border="1px solid"
                borderColor="whiteAlpha.700"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(128, 0, 32, 0.15)',
                  borderColor: 'maroon.200',
                  bg: 'rgba(255, 255, 255, 0.95)',
                }}
                h="100%"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient="linear(to-r, maroon.500, maroon.600)"
                  opacity={0}
                  transition="opacity 0.3s ease"
                  _groupHover={{ opacity: 1 }}
                  sx={{
                    '.chakra-card:hover &': {
                      opacity: 1,
                    },
                  }}
                />
                <CardBody p={8}>
                  <VStack align="start" spacing={4}>
                    <Flex
                      align="center"
                      justify="center"
                      w="64px"
                      h="64px"
                      borderRadius="xl"
                      bgGradient="linear(135deg, maroon.500 0%, maroon.700 100%)"
                      boxShadow="0 4px 14px rgba(128, 0, 32, 0.3)"
                    >
                      <Icon as={feature.icon} color="white" fontSize="xl" />
                    </Flex>
                    <Heading
                      size="md"
                      fontWeight="600"
                      color="gray.800"
                      letterSpacing="-0.01em"
                    >
                      {feature.title}
                    </Heading>
                    <Text color="gray.500" lineHeight="1.7" fontSize="sm">
                      {feature.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>

        <ScrollReveal delay={0.3}>
          <Box
            mt={16}
            p={{ base: 8, md: 12 }}
            bgGradient="linear(135deg, maroon.500 0%, maroon.700 100%)"
            borderRadius="3xl"
            textAlign="center"
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
            <VStack spacing={4} position="relative" zIndex={1}>
              <Heading size="xl" color="white" fontWeight="700">
                Ready to Join Our Community?
              </Heading>
              <Text color="whiteAlpha.900" fontSize="lg" maxW="600px">
                Give your child the gift of quality education rooted in faith, excellence, and community.
              </Text>
              <HStack spacing={4} pt={2}>
                <Button
                  as={RouterLink}
                  to="/admissions"
                  size="lg"
                  bg="white"
                  color="maroon.600"
                  fontWeight="600"
                  px={8}
                  _hover={{
                    bg: 'gray.100',
                    transform: 'translateY(-2px)',
                  }}
                  rightIcon={<FaArrowRight />}
                >
                  Apply Now
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  fontWeight="600"
                  px={8}
                  _hover={{
                    bg: 'whiteAlpha.200',
                  }}
                >
                  Contact Us
                </Button>
              </HStack>
            </VStack>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
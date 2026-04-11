import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Heading,
  Text,
  Icon,
  Flex,
  Button,
  Circle,
} from '@chakra-ui/react';
import { FaGraduationCap, FaChurch, FaUsers, FaHeart, FaArrowRight, FaBus, FaHome, FaBullseye } from 'react-icons/fa';
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
    <Box py={20} px={4} bg="cream.50" position="relative" overflow="hidden">
      <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
        <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
        <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
      </Box>
      <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
      
      <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
        <ScrollReveal>
          <SectionHeading
            title="Why Choose St James Zongoro?"
            subtitle="Discover what makes our school special"
          />
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Box
                p={8}
                borderRadius="2xl"
                bg="white"
                border="1px solid"
                borderColor="gray.100"
                boxShadow="0 4px 20px rgba(0,0,0,0.04)"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(128, 0, 32, 0.15)',
                  borderColor: 'maroon.200',
                }}
                h="100%"
                position="relative"
                overflow="hidden"
                role="group"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  h="4px"
                  bgGradient="linear(to-r, maroon.400, maroon.600)"
                  transform="scaleX(0)"
                  _groupHover={{ transform: 'scaleX(1)' }}
                  transition="transform 0.3s ease"
                  transformOrigin="left"
                />
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
                    fontWeight="700"
                    color="gray.800"
                  >
                    {feature.title}
                  </Heading>
                  <Text color="gray.500" lineHeight="1.7" fontSize="sm">
                    {feature.description}
                  </Text>
                </VStack>
              </Box>
            </ScrollReveal>
          ))}
        </SimpleGrid>

        <ScrollReveal delay={0.3}>
          <Box
            mt={16}
            p={{ base: 8, md: 12 }}
            bgGradient="linear(135deg, maroon.600 0%, maroon.700 100%)"
            borderRadius="3xl"
            textAlign="center"
            position="relative"
            overflow="hidden"
            boxShadow="0 10px 40px rgba(128, 0, 32, 0.3)"
          >
            <Box position="absolute" top={0} left={0} right={0} h="4px" bg="#00ff88" boxShadow="0 0 20px rgba(0, 255, 136, 0.5)" />
            <Box
              position="absolute"
              top={-50}
              right={-50}
              w="200px"
              h="200px"
              borderRadius="full"
              bg="rgba(255, 255, 255, 0.1)"
              filter="blur(40px)"
            />
            <Box
              position="absolute"
              bottom={-30}
              left={-30}
              w="150px"
              h="150px"
              borderRadius="full"
              bg="rgba(255, 255, 255, 0.05)"
              filter="blur(30px)"
            />
            <VStack spacing={8} position="relative" zIndex={1}>
              <Heading size="xl" color="white" fontWeight="700">
                Start Your Child's Journey Today
              </Heading>
              <Text color="whiteAlpha.900" fontSize="lg" maxW="600px">
                Join over 700 students who have built successful futures at St James Zongoro
              </Text>
              
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="100%" pt={4}>
                {[
                  { icon: FaGraduationCap, number: '88%', label: 'Pass Rate' },
                  { icon: FaUsers, number: '711', label: 'Students' },
                  { icon: FaChurch, number: '100+', label: 'Years Legacy' },
                  { icon: FaHeart, number: '25+', label: 'Staff & Teachers' },
                ].map((stat, index) => (
                  <VStack key={index} spacing={1}>
                    <Circle size="50px" bg="rgba(255,255,255,0.15)" color="white">
                      <Icon as={stat.icon} fontSize="xl" />
                    </Circle>
                    <Text color="white" fontWeight="800" fontSize="2xl">{stat.number}</Text>
                    <Text color="whiteAlpha.800" fontSize="xs">{stat.label}</Text>
                  </VStack>
                ))}
              </SimpleGrid>

              <HStack spacing={4} pt={4}>
                <Button
                  as={RouterLink}
                  to="/admissions"
                  size="lg"
                  bg="#00ff88"
                  color="maroon.700"
                  fontWeight="700"
                  px={8}
                  _hover={{
                    bg: '#00dd77',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(0, 255, 136, 0.4)',
                  }}
                  rightIcon={<FaArrowRight />}
                >
                  Enroll Now
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
                  Learn More
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
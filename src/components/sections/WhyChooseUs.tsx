import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaGraduationCap, FaChurch, FaUsers, FaBus, FaHome, FaBullseye } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

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
    <Box py={20} px={4} bg="white">
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
                bg="cream.50"
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}
                h="100%"
              >
                <CardBody p={8}>
                  <VStack align="start" spacing={4}>
                    <Flex
                      align="center"
                      justify="center"
                      w="60px"
                      h="60px"
                      borderRadius="full"
                      bg="maroon.500"
                    >
                      <Icon as={feature.icon} color="white" fontSize="xl" />
                    </Flex>
                    <Heading size="md" color="dark.500">
                      {feature.title}
                    </Heading>
                    <Text color="gray.600" lineHeight="1.7">
                      {feature.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
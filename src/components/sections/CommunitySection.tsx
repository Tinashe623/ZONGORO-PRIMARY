import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Avatar,
  Flex,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { FaUsers, FaCalendarAlt, FaHandshake } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const communityHighlights = [
  {
    icon: FaUsers,
    title: 'Community Support',
    description:
      'Local villagers actively participate in school events, providing resources and volunteer support.',
  },
  {
    icon: FaCalendarAlt,
    title: 'School Events',
    description:
      'Annual events bring together students, parents, and community members for celebrations.',
  },
  {
    icon: FaHandshake,
    title: 'Local Partnerships',
    description:
      'Collaboration with the local chief and community leaders ensures sustainable growth.',
  },
];

const CommunitySection = () => {
  return (
    <Box id="community" bg="cream.50" py={20} px={4}>
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <SectionHeading
            title="Community Partnership"
            subtitle="Working together for our children's future"
          />
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          <ScrollReveal>
            <Card
              bg="white"
              borderRadius="2xl"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              overflow="hidden"
            >
              <CardBody p={8}>
                <VStack spacing={4} align="center" textAlign="center">
                  <Avatar
                    size="2xl"
                    name="Chief Zongoro"
                    bg="maroon.500"
                    mb={2}
                  />
                  <Heading size="md" color="maroon.500">
                    Chief Zongoro
                  </Heading>
                  <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                    Community Leader
                  </Badge>
                  <Text color="gray.600" fontStyle="italic" mt={4}>
                    "Our partnership with St James Zongoro Primary School has
                    transformed our community. Education is the key to our village's
                    future, and together we are building something special for the
                    next generation."
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </ScrollReveal>

          <VStack spacing={4}>
            {communityHighlights.map((highlight, index) => (
              <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                <Card
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                  w="100%"
                  transition="all 0.3s ease"
                  _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
                >
                  <CardBody p={6}>
                    <Flex align="center" gap={4}>
                      <Flex
                        align="center"
                        justify="center"
                        w="60px"
                        h="60px"
                        borderRadius="full"
                        bg="maroon.500"
                        flexShrink={0}
                      >
                        <Icon as={highlight.icon} color="white" fontSize="xl" />
                      </Flex>
                      <Box>
                        <Heading size="sm" color="maroon.500" mb={1}>
                          {highlight.title}
                        </Heading>
                        <Text color="gray.600" fontSize="sm">
                          {highlight.description}
                        </Text>
                      </Box>
                    </Flex>
                  </CardBody>
                </Card>
              </ScrollReveal>
            ))}
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default CommunitySection;
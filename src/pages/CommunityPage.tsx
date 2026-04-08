import { useEffect } from 'react';
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
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/ui/CTABanner';

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

const CommunityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Community Partnership" 
        subtitle="Working together for our children's future"
      />
      
      <Box py={16} px={4} bg="white">
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <VStack spacing={8} maxW="800px" mx="auto" textAlign="center">
              <Heading size="lg" color="maroon.500">
                Our Community Connection
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                St James Zongoro Primary School is deeply rooted in the Zongoro community.
                Our partnership with local leaders, parents, and villagers creates a supportive
                environment where every child can succeed.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} mt={12}>
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

      <CTABanner 
        title="Get Involved" 
        subtitle="Join our community and support our school"
        buttonText="Contact Us"
        buttonLink="/#contact"
      />
    </Box>
  );
};

export default CommunityPage;
import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Flex,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FaUsers, FaBus, FaGift, FaPlay } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const communityHighlights = [
  {
    icon: FaBus,
    title: 'School Transport',
    description: 'Chief James Mutasa Mobilized community funds to purchase a school bus for safe student transportation.',
  },
  {
    icon: FaGift,
    title: 'Donations & Support',
    description: 'Regularly supports students with learning materials, uniforms, and daily necessities.',
  },
  {
    icon: FaUsers,
    title: 'Community Events',
    description: 'Organizes school events and encourages parent participation in educational activities.',
  },
];

const activities = [
  {
    title: 'Drama & Performance',
    description: 'Students showcase their talents through plays and performances celebrating our community heritage.',
    type: 'placeholder',
    placeholder: 'Video Content Coming Soon',
  },
  {
    title: 'Fundraising Events',
    description: 'Community comes together to raise funds for school developments and student needs.',
    type: 'placeholder',
    placeholder: 'Video Content Coming Soon',
  },
  {
    title: 'Mentorship Programs',
    description: 'Chief Mutasa mentors students, instilling values of leadership and service.',
    type: 'placeholder',
    placeholder: 'Video Content Coming Soon',
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
      
      <Box py={16} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        
        <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={8} maxW="800px" mx="auto" textAlign="center">
              <Heading size="2xl" color="maroon.600" fontWeight="800">
                Our Community Connection
              </Heading>
              <Box w="80px" h="3px" bg="maroon.500" borderRadius="full" />
              <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                St James Zongoro Primary School is deeply rooted in the Ndorikanda community. 
                Our partnership with Chief James Mutasa, local leaders, parents, and villagers creates a supportive 
                environment where every child can succeed.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mt={16}>
            <ScrollReveal>
              <Box 
                borderRadius="2xl" 
                overflow="hidden" 
                bg="white" 
                boxShadow="0 20px 60px rgba(128, 0, 32, 0.2)"
                position="relative"
              >
                <Image 
                  src="/images/chief-image.jpg" 
                  alt="Chief James Mutasa"
                  w="100%"
                  h={{ base: '350px', md: '450px' }}
                  objectFit="cover"
                />
                <Box 
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="100px"
                  bgGradient="linear(to-t, blackAlpha.700, transparent)"
                />
                <Box 
                  position="absolute"
                  bottom={6}
                  left={6}
                  bg="white"
                  borderRadius="xl"
                  px={4}
                  py={3}
                  boxShadow="0 4px 20px rgba(0,0,0,0.15)"
                >
                  <Text fontWeight="800" fontSize="lg" color="gray.800">Chief James Mutasa</Text>
                  <Text fontSize="sm" color="gray.500">Community Leader & School Patron</Text>
                </Box>
              </Box>
            </ScrollReveal>

            <VStack align="start" spacing={6}>
              <Heading size="xl" color="maroon.600" fontWeight="700">
                Chief's Contributions
              </Heading>
              <Text color="gray.600" fontSize="md" lineHeight="1.8">
                Chief James Mutasa has been instrumental in transforming our school. His dedication 
                to education has mobilised the entire community, leading initiatives that ensure every 
                child has access to quality learning.
              </Text>
              
              <Box 
                p={6} 
                bg="maroon.500"
                borderRadius="xl"
                w="100%"
                boxShadow="0 8px 30px rgba(128, 0, 32, 0.2)"
                position="relative"
                overflow="hidden"
              >
                <Box position="absolute" top={0} left={0} right={0} h="3px" bg="#00ff88" />
                <Text color="white" fontSize="md" fontStyle="italic" fontWeight="500" lineHeight="1.7" mt={1}>
                  "Our partnership with St James Zongoro Primary School has
                  transformed our community. Education is the key to our village's
                  future, and together we are building something special for the
                  next generation."
                </Text>
                <Text color="whiteAlpha.700" fontSize="sm" mt={2}>— Chief James Mutasa</Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%">
                {communityHighlights.map((highlight) => (
                  <Box 
                    key={highlight.title}
                    p={7} 
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="0 8px 32px rgba(128, 0, 32, 0.1)"
                    _hover={{ transform: 'translateY(-6px)', boxShadow: '0 16px 48px rgba(128, 0, 32, 0.18)' }}
                    transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    <Flex direction="column" align="center" textAlign="center" gap={4}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="64px"
                        h="64px"
                        borderRadius="full"
                        bg="maroon.500"
                        boxShadow="0 6px 20px rgba(128, 0, 32, 0.3)"
                      >
                        <Icon as={highlight.icon} color="white" fontSize="2xl" />
                      </Box>
                      <Box>
                        <Text color="gray.800" fontWeight="700" fontSize="lg" mb={2}>
                          {highlight.title}
                        </Text>
                        <Text color="gray.500" fontSize="sm" lineHeight="1.7">
                          {highlight.description}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>

      <Box py={16} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        
        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={10}>
              <Box textAlign="center">
                <Heading size="xl" color="maroon.600" fontWeight="800">
                  Community Activities
                </Heading>
                <Text color="gray.500" fontSize="lg" mt={2}>
                  Highlights of Chief's involvement in school life
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {activities.map((activity, index) => (
                  <ScrollReveal key={activity.title} delay={0.1 * index}>
                    <Box 
                      borderRadius="2xl" 
                      overflow="hidden" 
                      bg="white"
                      border="1px solid"
                      borderColor="maroon.100"
                      boxShadow="0 4px 20px rgba(128, 0, 32, 0.08)"
                      _hover={{ borderColor: 'maroon.300', transform: 'translateY(-6px)', boxShadow: '0 12px 40px rgba(128, 0, 32, 0.15)' }}
                      transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      <Box 
                        h={{ base: '200px', md: '180px' }} 
                        bg="maroon.500"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        position="relative"
                        flexDirection="column"
                        p={4}
                      >
                        <Icon as={FaPlay} color="white" fontSize="2xl" mb={2} opacity={0.8} />
                        <Text color="white" fontWeight="700" fontSize="sm" textAlign="center">
                          {activity.placeholder}
                        </Text>
                        <Text color="whiteAlpha.700" fontSize="xs" mt={2} textAlign="center" maxW="200px">
                          We're partnering with the school to capture authentic content. School videos will be featured here once available.
                        </Text>
                      </Box>
                      <Box p={5}>
                        <Heading size="sm" color="gray.800" mb={2}>
                          {activity.title}
                        </Heading>
                        <Text color="gray.500" fontSize="sm">
                          {activity.description}
                        </Text>
                      </Box>
                    </Box>
                  </ScrollReveal>
                ))}
              </SimpleGrid>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>
    </Box>
  );
};

export default CommunityPage;
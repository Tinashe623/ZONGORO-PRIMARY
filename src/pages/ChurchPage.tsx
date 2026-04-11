import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
  Icon,
} from '@chakra-ui/react';
import { FaCross, FaHeart, FaBook, FaPrayingHands, FaChurch, FaPlaceOfWorship } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const churchValues = [
  { icon: FaCross, text: 'Faith & Trust in God' },
  { icon: FaHeart, text: 'Love & Compassion' },
  { icon: FaBook, text: 'Scripture-Based Learning' },
  { icon: FaPrayingHands, text: 'Prayer & Worship' },
  { icon: FaChurch, text: 'Community Fellowship' },
];

const ChurchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Our Anglican Heritage" 
        subtitle="Building character through Christian values and worship"
      />
      
      <Box py={16} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
        </Box>
        
        <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <Box position="relative">
                <Box 
                  borderRadius="2xl" 
                  overflow="hidden" 
                  boxShadow="0 20px 60px rgba(128, 0, 32, 0.25)"
                >
                  <Image 
                    src="/images/students-inchurch.jpg" 
                    alt="Students in Anglican Church"
                    w="100%"
                    h={{ base: '300px', md: '450px' }}
                    objectFit="cover"
                  />
                  <Box 
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    h="80px"
                    bgGradient="linear(to-t, blackAlpha.700, transparent)"
                  />
                </Box>
                <Box
                  position="absolute"
                  top={6}
                  right={6}
                  bg="white"
                  borderRadius="xl"
                  px={4}
                  py={3}
                  boxShadow="0 4px 20px rgba(0,0,0,0.15)"
                >
                  <Image 
                    src="/images/anglican-logo.png" 
                    alt="Anglican Logo"
                    h="50px"
                    objectFit="contain"
                  />
                </Box>
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
                  <Flex align="center" gap={3}>
                    <Icon as={FaPlaceOfWorship} color="maroon.500" fontSize="xl" />
                    <Box>
                      <Text fontWeight="700" fontSize="sm" color="gray.800">St James Anglican Church</Text>
                      <Text fontSize="xs" color="gray.500">Zongoro</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>

              <VStack align="start" spacing={6}>
                <Heading size="xl" color="maroon.600" fontWeight="800">
                  Our Christian Foundation
                </Heading>
                <Box w="80px" h="3px" bg="maroon.500" borderRadius="full" />
                <Text color="gray.600" lineHeight="1.9" fontSize="lg">
                  Our Anglican foundation shapes every aspect of school life, from daily
                  prayers to character education. We believe that integrating faith with
                  learning creates well-rounded individuals who serve their communities
                  with integrity.
                </Text>
                <Text color="gray.600" lineHeight="1.9" fontSize="lg">
                  Students participate in daily devotionals, weekly chapel services, and
                  learn Christian values that guide them throughout their lives. Our
                  partnership with St James Anglican Church ensures spiritual growth
                  alongside academic achievement.
                </Text>
                <Box 
                  mt={2}
                  p={8}
                  bg="white"
                  borderRadius="2xl"
                  border="2px solid"
                  borderColor="maroon.100"
                  w="100%"
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} h="4px" w="100%" bgGradient="linear(to-r, maroon.400, maroon.600)" />
                  <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={6}>
                    <Image 
                      src="/images/anglican-logo.png" 
                      alt="Anglican Logo"
                      h={{ base: '80px', md: '100px' }}
                      objectFit="contain"
                    />
                    <Box flex={1}>
                      <Text fontWeight="800" color="maroon.600" fontSize="xl" mb={2}>Responsible Authority</Text>
                      <Text color="gray.600" fontSize="md" lineHeight="1.8">
                        St James Zongoro Primary School is governed by the Anglican Diocese of Manicaland,
                        under the guidance of the Church. Our Christian values are embedded in
                        everything we do, fostering holistic development grounded in faith.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </VStack>
            </SimpleGrid>
          </ScrollReveal>
        </Box>
      </Box>

      <Box py={16} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        
        <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <Box>
                <Box 
                  borderRadius="2xl" 
                  overflow="hidden" 
                  boxShadow="0 20px 60px rgba(128, 0, 32, 0.25)"
                  bg="cream.50"
                  h={{ base: '300px', md: '450px' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  border="2px dashed"
                  borderColor="maroon.200"
                >
                  <Box textAlign="center" p={6}>
                    <Icon as={FaPlaceOfWorship} color="maroon.400" fontSize="4xl" mb={4} />
                    <Text color="gray.500" fontSize="lg" fontWeight="600">Church Building</Text>
                    <Text color="gray.400" fontSize="sm">Image coming soon</Text>
                  </Box>
                </Box>
              </Box>

              <VStack align="start" spacing={6}>
                <Heading size="xl" color="maroon.600" fontWeight="800">
                  Our Church Values
                </Heading>
                <Box w="80px" h="3px" bg="maroon.500" borderRadius="full" />
                <Text color="gray.500" fontSize="lg">
                  The principles that guide our spiritual journey
                </Text>

                <Box 
                  p={6} 
                  bgGradient="linear(135deg, maroon.600, maroon.700)"
                  borderRadius="xl"
                  w="100%"
                  boxShadow="0 8px 30px rgba(128, 0, 32, 0.2)"
                  position="relative"
                  overflow="hidden"
                >
                  <Box position="absolute" top={0} left={0} right={0} h="3px" bg="#00ff88" />
                  <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={4}>
                    <Image 
                      src="/images/anglican-logo.png" 
                      alt="Anglican Logo"
                      h="40px"
                      objectFit="contain"
                    />
                    <Text 
                      flex={1}
                      color="white" 
                      fontSize="md" 
                      fontStyle="italic" 
                      fontWeight="500"
                      lineHeight="1.6"
                    >
                      "Train up a child in the way he should go: and when he is old, he will not depart from it." — Proverbs 22:6
                    </Text>
                  </Flex>
                </Box>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                  {churchValues.map((value) => (
                    <Box 
                      key={value.text}
                      p={4} 
                      borderRadius="xl" 
                      bg="white"
                      border="1px solid"
                      borderColor="maroon.100"
                      _hover={{ borderColor: 'maroon.300', transform: 'translateY(-4px)', boxShadow: 'lg' }}
                      transition="all 0.3s ease"
                      role="group"
                    >
                      <Flex align="center" gap={3}>
                        <Flex
                          align="center"
                          justify="center"
                          w="40px"
                          h="40px"
                          borderRadius="full"
                          bgGradient="linear(135deg, maroon.500, maroon.600)"
                          flexShrink={0}
                          transition="all 0.3s ease"
                          _groupHover={{ bg: '#00ff88' }}
                        >
                          <Icon as={value.icon} color="white" fontSize="md" />
                        </Flex>
                        <Text color="gray.700" fontWeight="600" fontSize="sm">
                          {value.text}
                        </Text>
                      </Flex>
                    </Box>
                  ))}
                </SimpleGrid>
              </VStack>
</SimpleGrid>
          </ScrollReveal>
        </Box>
      </Box>
    </Box>
  );
};

export default ChurchPage;
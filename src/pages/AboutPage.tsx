import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Flex, Icon, Badge, Button, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaMedal, FaEye, FaBullseye, FaUsers, FaLightbulb, FaHeart, FaShieldAlt, FaStar, FaCalendarAlt, FaFire, FaAward, FaUserTie, FaGlobeAfrica, FaFlag } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schoolHistory = [
    { year: '1925', icon: FaCalendarAlt, title: 'Founded', description: 'Opened by the Anglican Diocese of Mashonaland (now Diocese of Manicaland) under Father Baker, establishing a legacy of educational excellence.' },
    { year: '1949', icon: FaFire, title: 'Trial by Fire', description: 'Dormitories destroyed in a suspected arson incident. Yet, from the ashes, our community grew stronger.' },
    { year: 'Present', icon: FaAward, title: 'Excellence', description: 'Produced notable national leaders including Zimbabwe\'s Minister of Defense and distinguished Senators.' },
  ];

  const values = [
    { icon: FaShieldAlt, title: 'Patriotism', description: 'Love and dedication to our nation' },
    { icon: FaUsers, title: 'Inclusivity', description: 'Embracing diversity in all forms' },
    { icon: FaHeart, title: 'Teamwork', description: 'Collaborating for greater impact' },
    { icon: FaLightbulb, title: 'Innovation', description: 'Creative solutions for progress' },
    { icon: FaStar, title: 'Commitment', description: 'Dedication to our mission' },
    { icon: FaMedal, title: 'Efficiency', description: 'Maximizing resources effectively' },
    { icon: FaEye, title: 'Transparency', description: 'Open and honest operations' },
    { icon: FaShieldAlt, title: 'Accountability', description: 'Taking responsibility seriously' },
    { icon: FaHeart, title: 'Integrity', description: 'Unwavering moral principles' },
  ];

  const alumni = [
    { name: 'Cde Oppah Chamu Zvipange Muchinguri Kashiri', title: 'Minister of Defense', description: 'Zimbabwe', icon: FaGlobeAfrica },
    { name: 'Hon. Irene Zindi', title: 'Senator', description: 'Zimbabwe', icon: FaUserTie },
    { name: 'Hon. Senator Chief James Kurauone Ndorikanda Man\'ai Mutasa ', title: 'Senator', description: 'Zimbabwe', icon: FaFlag },
  ];

  return (
    <Box>
      <PageHero 
        title="About Our School" 
        subtitle="A century of educational excellence rooted in Anglican heritage"
      />
      
      <Box py={16} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={16}>
              <Box textAlign="center" maxW="800px">
                <Heading size="2xl" color="maroon.600" mb={4}>
                  Our Legacy Since 1925
                </Heading>
                <Text color="gray.600" fontSize="lg" lineHeight="1.8">
                  St James Zongoro Primary School stands as a testament to nearly a century of educational 
                  excellence in the heart of Ndorikanda Village, Mutasa District, Mutare, Zimbabwe. 
                  Founded by the Anglican Diocese and evolving through challenges, we continue to shape the future 
                  of generations to come.
                </Text>
              </Box>

              <Box 
                mt={12} 
                w="100%" 
                h={{ base: '300px', md: '400px' }} 
                borderRadius="2xl" 
                overflow="hidden"
                position="relative"
              >
                <Image 
                  src="/images/about.jpg" 
                  alt="St James Zongoro Primary School" 
                  w="100%" 
                  h="100%" 
                  objectFit="cover"
                />
                <Box 
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="50%"
                  bgGradient="linear(to-t, blackAlpha.700, transparent)"
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="center"
                  pb={8}
                >
                  <Box textAlign="center" color="white">
                    <Text fontSize="2xl" fontWeight="700">St James Zongoro Primary School</Text>
                    <Text fontSize="md" opacity={0.9}>Established 1925</Text>
                  </Box>
                </Box>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%" position="relative">
                {schoolHistory.map((item, index) => (
                  <ScrollReveal key={item.year} delay={0.1 * index}>
                    <Box 
                      position="relative"
                      p={0}
                      overflow="hidden"
                    >
                      <Box 
                        position="relative"
                        bg="white" 
                        borderRadius="2xl" 
                        overflow="hidden"
                        boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
                        _hover={{ transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(128, 0, 32, 0.15)' }}
                        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      >
                        <Box 
                          position="absolute" 
                          top={0} 
                          left={0} 
                          right={0} 
                          h="6px" 
                          bgGradient="linear(to-r, maroon.500, maroon.600)" 
                        />
                        <Box p={8} pt={10}>
                          <Flex align="center" gap={4} mb={4}>
                            <Box 
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              w="60px"
                              h="60px"
                              borderRadius="xl"
                              bgGradient="linear(135deg, maroon.500, maroon.600)"
                              boxShadow="0 4px 14px rgba(128, 0, 32, 0.3)"
                            >
                              <Icon as={item.icon} color="white" fontSize="xl" />
                            </Box>
                            <Badge 
                              bg="gray.100"
                              color="gray.700"
                              fontSize="2xl" 
                              fontWeight="800"
                              px={4} 
                              py={2} 
                              borderRadius="lg"
                              letterSpacing="wider"
                            >
                              {item.year}
                            </Badge>
                          </Flex>
                          <Heading size="lg" color="gray.800" mb={3} fontWeight="700">
                            {item.title}
                          </Heading>
                          <Text color="gray.600" lineHeight="1.8" fontSize="md">
                            {item.description}
                          </Text>
                        </Box>
                        <Box 
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          h="4px"
                          bgGradient="linear(to-r, transparent, gray.200, transparent)"
                        />
                      </Box>
                      {index < schoolHistory.length - 1 && (
                        <Box display={{ base: 'none', md: 'block' }} position="absolute" top="50%" right="-24px" transform="translateY(-50%)" zIndex={2}>
                          <Box w="48px" h="2px" bg="gray.200" borderRadius="full" />
                        </Box>
                      )}
                    </Box>
                  </ScrollReveal>
                ))}
              </SimpleGrid>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>

      <Box py={16} px={4} bgGradient="linear(135deg, maroon.600 0%, maroon.700 100%)" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.1}>
          <Box position="absolute" top="20%" left="10%" w="300px" h="300px" borderRadius="full" bg="white" filter="blur(80px)" />
          <Box position="absolute" bottom="20%" right="10%" w="250px" h="250px" borderRadius="full" bg="white" filter="blur(60px)" />
        </Box>
        
        <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={12}>
              <Box textAlign="center" maxW="700px">
                <Heading size="2xl" color="white" mb={4}>
                  Vision & Mission
                </Heading>
                <Box w="80px" h="3px" bg="#00ff88" borderRadius="full" mx="auto" mb={6} />
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
                <ScrollReveal>
                  <Box 
                    p={8} 
                    borderRadius="2xl" 
                    bg="rgba(255, 255, 255, 0.1)" 
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.2)"
                  >
                    <Flex align="center" gap={3} mb={4}>
                      <Box p={3} borderRadius="xl" bg="#00ff88">
                        <Icon as={FaEye} color="maroon.700" fontSize="xl" />
                      </Box>
                      <Heading size="lg" color="white">
                        Vision
                      </Heading>
                    </Flex>
                    <Text color="whiteAlpha.900" fontSize="lg" lineHeight="1.8">
                      To be a prosperous, united, empowered, and life-giving school by 2030.
                    </Text>
                  </Box>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <Box 
                    p={8} 
                    borderRadius="2xl" 
                    bg="rgba(255, 255, 255, 0.1)" 
                    backdropFilter="blur(10px)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.2)"
                  >
                    <Flex align="center" gap={3} mb={4}>
                      <Box p={3} borderRadius="xl" bg="#00ff88">
                        <Icon as={FaBullseye} color="maroon.700" fontSize="xl" />
                      </Box>
                      <Heading size="lg" color="white">
                        Mission
                      </Heading>
                    </Flex>
                    <Text color="whiteAlpha.900" fontSize="lg" lineHeight="1.8">
                      To roll out an inclusive, skills-oriented and heritage-based curriculum grounded on traditional culture, moral principles, value systems, sport, arts, science, innovation, design and technology.
                    </Text>
                  </Box>
                </ScrollReveal>
              </SimpleGrid>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>

      <Box py={20} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={16}>
              <Box textAlign="center">
                <Heading size="2xl" color="maroon.600" mb={4} fontWeight="800">
                  Our Core Values
                </Heading>
                <Text color="gray.500" fontSize="lg" maxW="500px" mx="auto">
                  The guiding principles that shape every aspect of our school community
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {values.slice(0, 3).map((value, index) => (
                  <ScrollReveal key={value.title} delay={0.1 * index}>
                    <Box 
                      p={8} 
                      borderRadius="2xl" 
                      bg="white"
                      border="1px solid"
                      borderColor="gray.100"
                      position="relative"
                      _hover={{ borderColor: 'maroon.200', transform: 'translateY(-4px)', shadow: 'xl' }}
                      transition="all 0.3s ease"
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
                      <Flex align="start" gap={4}>
                        <Box 
                          flexShrink={0}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w="56px"
                          h="56px"
                          borderRadius="xl"
                          bgGradient="linear(135deg, maroon.500, maroon.600)"
                          boxShadow="0 4px 14px rgba(128, 0, 32, 0.25)"
                        >
                          <Icon as={value.icon} color="white" fontSize="xl" />
                        </Box>
                        <Box>
                          <Heading size="md" color="gray.800" mb={2} fontWeight="700">
                            {value.title}
                          </Heading>
                          <Text color="gray.500" fontSize="sm" lineHeight="1.7">
                            {value.description}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </ScrollReveal>
                ))}
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {values.slice(3, 6).map((value, index) => (
                  <ScrollReveal key={value.title} delay={0.1 * (index + 3)}>
                    <Box 
                      p={8} 
                      borderRadius="2xl" 
                      bg="white"
                      border="1px solid"
                      borderColor="gray.100"
                      _hover={{ borderColor: 'maroon.200', transform: 'translateY(-4px)', shadow: 'xl' }}
                      transition="all 0.3s ease"
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
                      <Flex align="start" gap={4}>
                        <Box 
                          flexShrink={0}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w="56px"
                          h="56px"
                          borderRadius="xl"
                          bgGradient="linear(135deg, maroon.500, maroon.600)"
                          boxShadow="0 4px 14px rgba(128, 0, 32, 0.25)"
                        >
                          <Icon as={value.icon} color="white" fontSize="xl" />
                        </Box>
                        <Box>
                          <Heading size="md" color="gray.800" mb={2} fontWeight="700">
                            {value.title}
                          </Heading>
                          <Text color="gray.500" fontSize="sm" lineHeight="1.7">
                            {value.description}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </ScrollReveal>
                ))}
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {values.slice(6, 9).map((value, index) => (
                  <ScrollReveal key={value.title} delay={0.1 * (index + 6)}>
                    <Box 
                      p={8} 
                      borderRadius="2xl" 
                      bg="white"
                      border="1px solid"
                      borderColor="gray.100"
                      _hover={{ borderColor: 'maroon.200', transform: 'translateY(-4px)', shadow: 'xl' }}
                      transition="all 0.3s ease"
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
                      <Flex align="start" gap={4}>
                        <Box 
                          flexShrink={0}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w="56px"
                          h="56px"
                          borderRadius="xl"
                          bgGradient="linear(135deg, maroon.500, maroon.600)"
                          boxShadow="0 4px 14px rgba(128, 0, 32, 0.25)"
                        >
                          <Icon as={value.icon} color="white" fontSize="xl" />
                        </Box>
                        <Box>
                          <Heading size="md" color="gray.800" mb={2} fontWeight="700">
                            {value.title}
                          </Heading>
                          <Text color="gray.500" fontSize="sm" lineHeight="1.7">
                            {value.description}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </ScrollReveal>
                ))}
              </SimpleGrid>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>

      <Box py={20} px={4} bgGradient="linear(135deg, maroon.600 0%, maroon.700 100%)" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.1}>
          <Box position="absolute" top="-20%" right="-10%" w="600px" h="600px" borderRadius="full" bg="white" filter="blur(100px)" />
          <Box position="absolute" bottom="-30%" left="-10%" w="500px" h="500px" borderRadius="full" bg="white" filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="4px" bg="#00ff88" boxShadow="0 0 20px rgba(0, 255, 136, 0.5)" />
        <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={16}>
              <Box textAlign="center">
                <Heading size="2xl" color="white" mb={4} fontWeight="800">
                  Notable Alumni
                </Heading>
                <Text color="whiteAlpha.800" fontSize="lg" maxW="600px" mx="auto">
                  Distinguished leaders who began their journey at St James Zongoro
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {alumni.map((person, index) => (
                  <ScrollReveal key={person.name} delay={0.1 * index}>
                    <Box 
                      p={10} 
                      borderRadius="2xl" 
                      bg="rgba(255, 255, 255, 0.08)"
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor="rgba(255, 255, 255, 0.15)"
                      textAlign="center"
                      position="relative"
                      overflow="hidden"
                      _hover={{ borderColor: 'rgba(255, 255, 255, 0.3)', transform: 'translateY(-8px)', shadow: '2xl', bg: 'rgba(255, 255, 255, 0.12)' }}
                      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      role="group"
                    >
                      <Box 
                        position="absolute" 
                        top={0} 
                        left={0} 
                        right={0} 
                        h="4px" 
                        bg="#00ff88" 
                      />
                      <Flex direction="column" align="center">
                        <Box 
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w="100px"
                          h="100px"
                          borderRadius="full"
                          bg="rgba(255, 255, 255, 0.15)"
                          border="2px solid"
                          borderColor="rgba(255, 255, 255, 0.3)"
                          boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                          mb={6}
                        >
                          <Icon as={person.icon} color="white" fontSize="3xl" />
                        </Box>
                        <Heading size="md" color="white" mb={3} fontWeight="700">
                          {person.name}
                        </Heading>
                        <Badge bg="#00ff88" color="maroon.700" borderRadius="full" px={4} py={1.5} fontSize="sm" fontWeight="700">
                          {person.title}
                        </Badge>
                        <Text color="whiteAlpha.700" mt={4} fontSize="md" fontWeight="500">
                          {person.description}
                        </Text>
                      </Flex>
                    </Box>
                  </ScrollReveal>
                ))}
              </SimpleGrid>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>

      <Box py={20} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" left="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" right="5%" w="300px" h="300px" borderRadius="full" bg="#00ff88" opacity={0.03} filter="blur(80px)" />
        </Box>
        
        <Box maxW="1000px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={8}>
              <Heading size="2xl" color="maroon.600" fontWeight="800">
                Join Our School Community
              </Heading>
              <Box w="80px" h="3px" bg="maroon.500" borderRadius="full" />
              <Text color="gray.600" fontSize="lg" maxW="600px" mx="auto" lineHeight="1.8">
                Enroll your child today and give them the opportunity to thrive in an environment that values academic excellence, heritage, and holistic development.
              </Text>
              <Flex gap={4} flexWrap="wrap" justify="center" mt={4}>
                <Button 
                  as={RouterLink}
                  to="/admissions"
                  px={8} 
                  py={4}
                  bgGradient="linear(135deg, maroon.500, maroon.600)"
                  color="white"
                  fontWeight="700"
                  fontSize="lg"
                  borderRadius="xl"
                  _hover={{ transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(128, 0, 32, 0.3)' }}
                >
                  Apply Now
                </Button>
                <Button 
                  as={RouterLink}
                  to="/contact"
                  px={8} 
                  py={4}
                  variant="outline"
                  color="maroon.600"
                  fontWeight="700"
                  fontSize="lg"
                  borderRadius="xl"
                  borderColor="maroon.500"
                  _hover={{ bg: 'maroon.500', color: 'white' }}
                >
                  Contact Us
                </Button>
              </Flex>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
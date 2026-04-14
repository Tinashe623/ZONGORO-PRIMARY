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
                <Heading size={{ base: "xl", md: "2xl" }} color="maroon.600" mb={4}>
                  Our Legacy Since 1925
                </Heading>
                <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
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
                     <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="700">St James Zongoro Primary School</Text>
                     <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9}>Established 1925</Text>
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
                         _hover={{
                           transform: 'translateY(-8px) scale(1.02)',
                           boxShadow: '0 20px 40px rgba(128, 0, 32, 0.15), 0 0 20px rgba(130, 0, 32, 0.1)',
                           bg: 'gray.50',
                           _before: { opacity: 1 }
                         }}
                         transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                         role="group"
                         _before={{
                           content: '""',
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           right: 0,
                           bottom: 0,
                           bg: 'linear-gradient(135deg, rgba(130, 0, 32, 0.05) 0%, transparent 50%)',
                           opacity: 0,
                           transition: 'opacity 0.4s ease',
                           pointerEvents: 'none',
                         }}
                       >
                         <Box p={{ base: 6, md: 8 }} pt={10}>
                           <Flex align="center" gap={{ base: 3, md: 4 }} mb={4} flexWrap="wrap">
                             <Box
                               display="flex"
                               alignItems="center"
                               justifyContent="center"
                               w={{ base: "50px", md: "60px" }}
                               h={{ base: "50px", md: "60px" }}
                               borderRadius="xl"
                               bgGradient="linear(135deg, maroon.500, maroon.600)"
                               boxShadow="0 4px 14px rgba(128, 0, 32, 0.3)"
                               transition="all 0.4s ease"
                               _groupHover={{
                                 transform: 'scale(1.1)',
                                 boxShadow: '0 6px 20px rgba(128, 0, 32, 0.4)'
                               }}
                             >
                               <Icon as={item.icon} color="white" fontSize={{ base: "lg", md: "xl" }} />
                             </Box>
                             <Badge
                               bg="gray.100"
                               color="gray.700"
                               fontSize={{ base: "xl", md: "2xl" }}
                               fontWeight="800"
                               px={{ base: 3, md: 4 }}
                               py={{ base: 1.5, md: 2 }}
                               borderRadius="lg"
                               letterSpacing="wider"
                               transition="all 0.3s ease"
                               _groupHover={{
                                 bg: 'maroon.500',
                                 color: 'white',
                                 transform: 'scale(1.05)'
                               }}
                             >
                               {item.year}
                             </Badge>
                           </Flex>
                           <Heading
                             size={{ base: "md", md: "lg" }}
                             color="gray.800"
                             mb={3}
                             fontWeight="700"
                             transition="color 0.3s ease"
                             _groupHover={{ color: 'maroon.600' }}
                           >
                             {item.title}
                           </Heading>
                           <Text
                             color="gray.600"
                             lineHeight="1.8"
                             fontSize={{ base: "sm", md: "md" }}
                             transition="color 0.3s ease"
                             _groupHover={{ color: 'gray.700' }}
                           >
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
                <Heading size={{ base: "xl", md: "2xl" }} color="white" mb={4}>
                  Vision & Mission
                </Heading>
                <Box w={{ base: "60px", md: "80px" }} h="3px" bg="#00ff88" borderRadius="full" mx="auto" mb={6} />
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="100%">
                 <ScrollReveal>
                   <Box
                     p={{ base: 6, md: 8 }}
                     borderRadius="2xl"
                     bg="rgba(255, 255, 255, 0.1)"
                     backdropFilter="blur(10px)"
                     border="1px solid"
                     borderColor="rgba(255, 255, 255, 0.2)"
                     position="relative"
                     overflow="hidden"
                     _hover={{
                       borderColor: 'rgba(255, 255, 255, 0.4)',
                       transform: 'translateY(-8px) scale(1.02)',
                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.15), 0 0 20px rgba(0, 255, 136, 0.1)',
                       bg: 'rgba(255, 255, 255, 0.15)',
                       _before: { opacity: 1 }
                     }}
                     transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                     role="group"
                     _before={{
                       content: '""',
                       position: 'absolute',
                       top: 0,
                       left: 0,
                       right: 0,
                       bottom: 0,
                       bg: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
                       opacity: 0,
                       transition: 'opacity 0.4s ease',
                       pointerEvents: 'none',
                     }}
                   >
                     <Flex align="center" gap={3} mb={4} flexWrap="wrap">
                       <Box
                         p={{ base: 2, md: 3 }}
                         borderRadius="xl"
                         bg="#00ff88"
                         transition="all 0.4s ease"
                         _groupHover={{
                           transform: 'scale(1.1)',
                           boxShadow: '0 6px 20px rgba(0, 255, 136, 0.4)'
                         }}
                       >
                         <Icon as={FaEye} color="maroon.700" fontSize={{ base: "lg", md: "xl" }} />
                       </Box>
                       <Heading size={{ base: "md", md: "lg" }} color="white" transition="color 0.3s ease" _groupHover={{ color: '#00ff88' }}>
                         Vision
                       </Heading>
                     </Flex>
                     <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" transition="color 0.3s ease" _groupHover={{ color: 'white' }}>
                       To be a prosperous, united, empowered, and life-giving school by 2030.
                     </Text>
                   </Box>
                 </ScrollReveal>

                 <ScrollReveal delay={0.1}>
                   <Box
                     p={{ base: 6, md: 8 }}
                     borderRadius="2xl"
                     bg="rgba(255, 255, 255, 0.1)"
                     backdropFilter="blur(10px)"
                     border="1px solid"
                     borderColor="rgba(255, 255, 255, 0.2)"
                     position="relative"
                     overflow="hidden"
                     _hover={{
                       borderColor: 'rgba(255, 255, 255, 0.4)',
                       transform: 'translateY(-8px) scale(1.02)',
                       boxShadow: '0 20px 40px rgba(0, 255, 136, 0.15), 0 0 20px rgba(0, 255, 136, 0.1)',
                       bg: 'rgba(255, 255, 255, 0.15)',
                       _before: { opacity: 1 }
                     }}
                     transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                     role="group"
                     _before={{
                       content: '""',
                       position: 'absolute',
                       top: 0,
                       left: 0,
                       right: 0,
                       bottom: 0,
                       bg: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
                       opacity: 0,
                       transition: 'opacity 0.4s ease',
                       pointerEvents: 'none',
                     }}
                   >
                     <Flex align="center" gap={3} mb={4} flexWrap="wrap">
                       <Box
                         p={{ base: 2, md: 3 }}
                         borderRadius="xl"
                         bg="#00ff88"
                         transition="all 0.4s ease"
                         _groupHover={{
                           transform: 'scale(1.1)',
                           boxShadow: '0 6px 20px rgba(0, 255, 136, 0.4)'
                         }}
                       >
                         <Icon as={FaBullseye} color="maroon.700" fontSize={{ base: "lg", md: "xl" }} />
                       </Box>
                       <Heading size={{ base: "md", md: "lg" }} color="white" transition="color 0.3s ease" _groupHover={{ color: '#00ff88' }}>
                         Mission
                       </Heading>
                     </Flex>
                     <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8" transition="color 0.3s ease" _groupHover={{ color: 'white' }}>
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
                <Heading size={{ base: "xl", md: "2xl" }} color="maroon.600" mb={4} fontWeight="800">
                  Our Core Values
                </Heading>
                <Text color="gray.500" fontSize={{ base: "md", md: "lg" }} maxW="500px" mx="auto">
                  The guiding principles that shape every aspect of our school community
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {values.slice(0, 3).map((value, index) => (
                  <ScrollReveal key={value.title} delay={0.1 * index}>
                    <Box
                      p={{ base: 6, md: 8 }}
                      borderRadius="2xl"
                      bg="white"
                      border="1px solid"
                      borderColor="gray.100"
                      position="relative"
                      overflow="hidden"
                      _hover={{
                        borderColor: 'maroon.300',
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 20px 40px rgba(128, 0, 32, 0.15), 0 0 20px rgba(130, 0, 32, 0.1)',
                        bg: 'gray.50',
                        _before: { opacity: 1 }
                      }}
                      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      role="group"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bg: 'linear-gradient(135deg, rgba(130, 0, 32, 0.05) 0%, transparent 50%)',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        pointerEvents: 'none',
                      }}
                    >
                      <Flex align="start" gap={{ base: 3, md: 4 }} flexWrap="wrap">
                        <Box
                          flexShrink={0}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          w={{ base: "48px", md: "56px" }}
                          h={{ base: "48px", md: "56px" }}
                          borderRadius="xl"
                          bgGradient="linear(135deg, maroon.500, maroon.600)"
                          boxShadow="0 4px 14px rgba(128, 0, 32, 0.25)"
                          transition="all 0.4s ease"
                          _groupHover={{
                            transform: 'scale(1.1)',
                            boxShadow: '0 6px 20px rgba(128, 0, 32, 0.4)'
                          }}
                        >
                          <Icon as={value.icon} color="white" fontSize={{ base: "lg", md: "xl" }} />
                        </Box>
                        <Box minW={0} flex={1}>
                          <Heading
                            size="md"
                            color="gray.800"
                            mb={2}
                            fontWeight="700"
                            transition="color 0.3s ease"
                            _groupHover={{ color: 'maroon.600' }}
                          >
                            {value.title}
                          </Heading>
                          <Text
                            color="gray.500"
                            fontSize="sm"
                            lineHeight="1.7"
                            transition="color 0.3s ease"
                            _groupHover={{ color: 'gray.700' }}
                          >
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
                       p={{ base: 6, md: 8 }}
                       borderRadius="2xl"
                       bg="white"
                       border="1px solid"
                       borderColor="gray.100"
                       position="relative"
                       overflow="hidden"
                       _hover={{
                         borderColor: 'maroon.300',
                         transform: 'translateY(-8px) scale(1.02)',
                         boxShadow: '0 20px 40px rgba(128, 0, 32, 0.15), 0 0 20px rgba(130, 0, 32, 0.1)',
                         bg: 'gray.50',
                         _before: { opacity: 1 }
                       }}
                       transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                       role="group"
                       _before={{
                         content: '""',
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         bottom: 0,
                         bg: 'linear-gradient(135deg, rgba(130, 0, 32, 0.05) 0%, transparent 50%)',
                         opacity: 0,
                         transition: 'opacity 0.4s ease',
                         pointerEvents: 'none',
                       }}
                     >
                       <Flex align="start" gap={{ base: 3, md: 4 }} flexWrap="wrap">
                         <Box
                           flexShrink={0}
                           display="flex"
                           alignItems="center"
                           justifyContent="center"
                           w={{ base: "48px", md: "56px" }}
                           h={{ base: "48px", md: "56px" }}
                           borderRadius="xl"
                           bgGradient="linear(135deg, maroon.500, maroon.600)"
                           boxShadow="0 4px 14px rgba(128, 0, 32, 0.25)"
                           transition="all 0.4s ease"
                           _groupHover={{
                             transform: 'scale(1.1)',
                             boxShadow: '0 6px 20px rgba(128, 0, 32, 0.4)'
                           }}
                         >
                           <Icon as={value.icon} color="white" fontSize={{ base: "lg", md: "xl" }} />
                         </Box>
                         <Box minW={0} flex={1}>
                           <Heading
                             size="md"
                             color="gray.800"
                             mb={2}
                             fontWeight="700"
                             transition="color 0.3s ease"
                             _groupHover={{ color: 'maroon.600' }}
                           >
                             {value.title}
                           </Heading>
                           <Text
                             color="gray.500"
                             fontSize="sm"
                             lineHeight="1.7"
                             transition="color 0.3s ease"
                             _groupHover={{ color: 'gray.700' }}
                           >
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
                       p={{ base: 6, md: 8 }}
                       borderRadius="2xl"
                       bg="white"
                       border="1px solid"
                       borderColor="gray.100"
                       position="relative"
                       overflow="hidden"
                       _hover={{
                         borderColor: 'maroon.300',
                         transform: 'translateY(-8px) scale(1.02)',
                         boxShadow: '0 20px 40px rgba(128, 0, 32, 0.15), 0 0 20px rgba(130, 0, 32, 0.1)',
                         bg: 'gray.50',
                         _before: { opacity: 1 }
                       }}
                       transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                       role="group"
                       _before={{
                         content: '""',
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         bottom: 0,
                         bg: 'linear-gradient(135deg, rgba(130, 0, 32, 0.05) 0%, transparent 50%)',
                         opacity: 0,
                         transition: 'opacity 0.4s ease',
                         pointerEvents: 'none',
                       }}
                     >
                       <Flex align="start" gap={{ base: 3, md: 4 }} flexWrap="wrap">
                         <Box
                           flexShrink={0}
                           display="flex"
                           alignItems="center"
                           justifyContent="center"
                           w={{ base: "48px", md: "56px" }}
                           h={{ base: "48px", md: "56px" }}
                           borderRadius="xl"
                           bgGradient="linear(135deg, maroon.500, maroon.600)"
                           boxShadow="0 4px 14px rgba(128, 0, 32, 0.25)"
                           transition="all 0.4s ease"
                           _groupHover={{
                             transform: 'scale(1.1)',
                             boxShadow: '0 6px 20px rgba(128, 0, 32, 0.4)'
                           }}
                         >
                           <Icon as={value.icon} color="white" fontSize={{ base: "lg", md: "xl" }} />
                         </Box>
                         <Box minW={0} flex={1}>
                           <Heading
                             size="md"
                             color="gray.800"
                             mb={2}
                             fontWeight="700"
                             transition="color 0.3s ease"
                             _groupHover={{ color: 'maroon.600' }}
                           >
                             {value.title}
                           </Heading>
                           <Text
                             color="gray.500"
                             fontSize="sm"
                             lineHeight="1.7"
                             transition="color 0.3s ease"
                             _groupHover={{ color: 'gray.700' }}
                           >
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
                <Heading size={{ base: "xl", md: "2xl" }} color="white" mb={4} fontWeight="800">
                  Notable Alumni
                </Heading>
                <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} maxW="600px" mx="auto">
                  Distinguished leaders who began their journey at St James Zongoro
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {alumni.map((person, index) => (
                  <ScrollReveal key={person.name} delay={0.1 * index}>
                    <Box
                      p={{ base: 6, md: 10 }}
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
                          w={{ base: "80px", md: "100px" }}
                          h={{ base: "80px", md: "100px" }}
                          borderRadius="full"
                          bg="rgba(255, 255, 255, 0.15)"
                          border="2px solid"
                          borderColor="rgba(255, 255, 255, 0.3)"
                          boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
                          mb={6}
                        >
                          <Icon as={person.icon} color="white" fontSize={{ base: "2xl", md: "3xl" }} />
                        </Box>
                        <Heading size="md" color="white" mb={3} fontWeight="700" wordBreak="break-word">
                          {person.name}
                        </Heading>
                        <Badge bg="#00ff88" color="maroon.700" borderRadius="full" px={{ base: 3, md: 4 }} py={{ base: 1, md: 1.5 }} fontSize="sm" fontWeight="700">
                          {person.title}
                        </Badge>
                        <Text color="whiteAlpha.700" mt={4} fontSize={{ base: "sm", md: "md" }} fontWeight="500">
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
              <Heading size={{ base: "xl", md: "2xl" }} color="maroon.600" fontWeight="800">
                Join Our School Community
              </Heading>
              <Box w={{ base: "60px", md: "80px" }} h="3px" bg="maroon.500" borderRadius="full" />
              <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} maxW="600px" mx="auto" lineHeight="1.8">
                Enroll your child today and give them the opportunity to thrive in an environment that values academic excellence, heritage, and holistic development.
              </Text>
              <Flex gap={{ base: 3, md: 4 }} flexWrap="wrap" justify="center" mt={4}>
                <Button
                  as={RouterLink}
                  to="/admissions"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 3, md: 4 }}
                  bgGradient="linear(135deg, maroon.500, maroon.600)"
                  color="white"
                  fontWeight="700"
                  fontSize={{ base: "md", md: "lg" }}
                  borderRadius="xl"
                  _hover={{ transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(128, 0, 32, 0.3)' }}
                >
                  Apply Now
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  px={{ base: 6, md: 8 }}
                  py={{ base: 3, md: 4 }}
                  variant="outline"
                  color="maroon.600"
                  fontWeight="700"
                  fontSize={{ base: "md", md: "lg" }}
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
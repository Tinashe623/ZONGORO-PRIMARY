import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaGraduationCap, FaUsers, FaHeart, FaShieldAlt } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import BoardingFacilities from '../components/sections/BoardingFacilities';
import DailySchedule from '../components/sections/DailySchedule';
import BoardingRules from '../components/sections/BoardingRules';
import { boardingFees } from '../data/boarding';
import ScrollReveal from '../components/ui/ScrollReveal';

const BoardingPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Boarding" 
        subtitle="Our modern boarding institute provides a safe, supportive home away from home"
      />
      
      {/* Introduction - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <ScrollReveal>
              <VStack align="start" spacing={6}>
                <Heading size="2xl" color="maroon.500" fontWeight="700">
                  Welcome to Our Boarding Institute
                </Heading>
                <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                  St James Zongoro Primary School is proud to offer a modern boarding facility 
                  that provides a safe, nurturing environment for students. Our boarding 
                  community fosters independence, discipline, and lifelong friendships.
                </Text>
                <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                  With comfortable dormitories, nutritious meals, supervised study sessions, 
                  and engaging recreational activities, our boarders thrive academically 
                  and personally.
                </Text>
                
                {/* Benefits */}
                <SimpleGrid columns={2} spacing={4} pt={4} w="100%">
                  {[
                    { icon: FaShieldAlt, text: 'Safe & Secure' },
                    { icon: FaGraduationCap, text: 'Study Support' },
                    { icon: FaUsers, text: 'Community' },
                    { icon: FaHeart, text: 'Pastoral Care' },
                  ].map((item, index) => (
                    <Flex key={index} align="center" gap={3}>
                      <Flex 
                        w="35px" 
                        h="35px" 
                        borderRadius="full" 
                        bg="forest.50" 
                        align="center" 
                        justify="center"
                      >
                        <Icon as={item.icon} color="forest.500" fontSize="sm" />
                      </Flex>
                      <Text color="dark.500" fontWeight="600" fontSize="sm">{item.text}</Text>
                    </Flex>
                  ))}
                </SimpleGrid>
              </VStack>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <Box
                bg="white"
                borderRadius="2xl"
                p={8}
                boxShadow="0 10px 40px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)"
                border="1px solid"
                borderColor="gray.100"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgGradient: 'linear(to-br, rgba(255,255,255,0.9), rgba(45,106,79,0.02))',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  borderRadius: '2xl'
                }}
                _hover={{
                  transform: 'translateY(-4px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.1)',
                  borderColor: 'forest.200',
                  _before: { opacity: 1 }
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                <Heading size="md" color="maroon.500" mb={6}>
                  Boarding Fees
                </Heading>
                <VStack spacing={4}>
                  {boardingFees.map((fee, index) => (
                    isMobile ? (
                      <Box
                        key={index}
                        w="100%"
                        p={4}
                        bg="cream.50"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.100"
                        boxShadow="0 2px 8px rgba(0,0,0,0.06)"
                        position="relative"
                        overflow="hidden"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgGradient: 'linear(to-br, rgba(255,255,255,0.8), rgba(45,106,79,0.02))',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          borderRadius: 'xl'
                        }}
                        _hover={{
                          bg: 'forest.50',
                          borderColor: 'forest.200',
                          boxShadow: '0 8px 25px rgba(45,106,79,0.15), 0 4px 12px rgba(0,0,0,0.08)',
                          transform: 'translateY(-2px)',
                          _before: { opacity: 1 }
                        }}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      >
                        <VStack align="start" spacing={2}>
                          <Text color="gray.700" fontWeight="600" fontSize="sm">
                            {fee.item}
                          </Text>
                          <Text
                            color="forest.500"
                            fontWeight="700"
                            fontSize="lg"
                            bg="white"
                            px={4}
                            py={2}
                            borderRadius="full"
                            boxShadow="0 4px 12px rgba(45,106,79,0.2), 0 2px 6px rgba(0,0,0,0.1)"
                            border="1px solid"
                            borderColor="forest.100"
                            alignSelf="flex-start"
                            position="relative"
                            _hover={{
                              transform: 'scale(1.05)',
                              boxShadow: '0 6px 16px rgba(45,106,79,0.3), 0 3px 8px rgba(0,0,0,0.15)'
                            }}
                            transition="all 0.2s ease"
                          >
                            {fee.amount}
                          </Text>
                        </VStack>
                      </Box>
                    ) : (
                      <Flex
                        key={index}
                        w="100%"
                        justify="space-between"
                        align="center"
                        p={4}
                        bg="cream.50"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.100"
                        boxShadow="0 2px 8px rgba(0,0,0,0.06)"
                        position="relative"
                        overflow="hidden"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgGradient: 'linear(to-br, rgba(255,255,255,0.8), rgba(45,106,79,0.02))',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          borderRadius: 'xl'
                        }}
                        _hover={{
                          bg: 'forest.50',
                          borderColor: 'forest.200',
                          boxShadow: '0 8px 25px rgba(45,106,79,0.15), 0 4px 12px rgba(0,0,0,0.08)',
                          transform: 'translateY(-2px)',
                          _before: { opacity: 1 }
                        }}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      >
                        <Text color="gray.700" fontWeight="500">{fee.item}</Text>
                        <Text
                          color="forest.500"
                          fontWeight="700"
                          fontSize="lg"
                          bg="white"
                          px={4}
                          py={2}
                          borderRadius="full"
                          boxShadow="0 4px 12px rgba(45,106,79,0.2), 0 2px 6px rgba(0,0,0,0.1)"
                          border="1px solid"
                          borderColor="forest.100"
                          _hover={{
                            transform: 'scale(1.05)',
                            boxShadow: '0 6px 16px rgba(45,106,79,0.3), 0 3px 8px rgba(0,0,0,0.15)'
                          }}
                          transition="all 0.2s ease"
                        >
                          {fee.amount}
                        </Text>
                      </Flex>
                    )
                  ))}
                </VStack>
              </Box>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      <BoardingFacilities />
      <DailySchedule />
      <BoardingRules />
    </Box>
  );
};

export default BoardingPage;
import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Flex, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaHome, FaGraduationCap, FaUsers, FaHeart, FaShieldAlt } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import BoardingFacilities from '../components/sections/BoardingFacilities';
import DailySchedule from '../components/sections/DailySchedule';
import BoardingRules from '../components/sections/BoardingRules';
import { boardingFees } from '../data/boarding';
import ScrollReveal from '../components/ui/ScrollReveal';

const MotionBox = motion(Box);

const BoardingPage = () => {
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
                boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                borderLeft="4px solid"
                borderLeftColor="forest.500"
              >
                <Heading size="md" color="maroon.500" mb={6}>
                  Boarding Fees
                </Heading>
                <VStack spacing={4}>
                  {boardingFees.map((fee, index) => (
                    <Flex 
                      key={index} 
                      w="100%" 
                      justify="space-between" 
                      align="center"
                      p={4}
                      bg="cream.50"
                      borderRadius="xl"
                      _hover={{ bg: 'forest.50' }}
                      transition="all 0.2s ease"
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
                        boxShadow="sm"
                      >
                        {fee.amount}
                      </Text>
                    </Flex>
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
import { Box, SimpleGrid, VStack, Heading, Text, Icon } from '@chakra-ui/react';
import { FaBook, FaLaptop, FaTree, FaFutbol, FaMusic, FaBus } from 'react-icons/fa';
import ScrollReveal from '../ui/ScrollReveal';
import { Link as RouterLink } from 'react-router-dom';

const facilities = [
  { icon: FaBook, title: 'Library', description: 'Well-stocked resource center' },
  { icon: FaLaptop, title: 'Computer Lab', description: 'Modern tech hub' },
  { icon: FaTree, title: 'Green Campus', description: 'Lush learning environment' },
  { icon: FaFutbol, title: 'Sports Field', description: 'Athletic development' },
  { icon: FaMusic, title: 'Music Room', description: 'Arts & creativity' },
  { icon: FaBus, title: 'Transport', description: 'Reliable bus service' },
];

const StatsSection = () => {
  return (
    <Box py={16} px={4} bg="maroon.500" position="relative" overflow="hidden">
      <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.1}>
        <Box position="absolute" top="-20%" right="-10%" w="400px" h="400px" borderRadius="full" bg="white" filter="blur(100px)" />
        <Box position="absolute" bottom="-30%" left="-10%" w="300px" h="300px" borderRadius="full" bg="white" filter="blur(80px)" />
      </Box>

      
      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <ScrollReveal>
            <VStack spacing={12}>
             <VStack spacing={3} textAlign="center">
               <Heading size={{ base: "lg", md: "xl" }} color="white" fontWeight="800">
                 Our Facilities
               </Heading>
               <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} maxW="500px">
                 Modern infrastructure supporting holistic education
               </Text>
             </VStack>

            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} w="100%">
              {facilities.map((item, index) => (
                <ScrollReveal key={item.title} delay={0.1 * index}>
                  <Box 
                    p={6} 
                    borderRadius="xl" 
                    bg="rgba(255, 255, 255, 0.1)"
                    border="1px solid"
                    borderColor="rgba(255, 255, 255, 0.15)"
                    textAlign="center"
                    _hover={{ borderColor: 'rgba(255, 255, 255, 0.3)', transform: 'translateY(-4px)', bg: 'rgba(255, 255, 255, 0.15)' }}
                    transition="all 0.3s ease"
                    role="group"
                  >
                    <Box 
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="50px"
                      h="50px"
                      borderRadius="xl"
                      bg="rgba(255, 255, 255, 0.15)"
                      mx="auto"
                      mb={4}
                    >
                      <Icon as={item.icon} color="white" fontSize="xl" />
                    </Box>
                    <Heading size="sm" color="white" mb={1} fontWeight="700">
                      {item.title}
                    </Heading>
                    <Text color="whiteAlpha.700" fontSize="xs">
                      {item.description}
                    </Text>
                  </Box>
                </ScrollReveal>
              ))}
            </SimpleGrid>

            <Box 
              as={RouterLink}
              to="/about"
              px={8} 
              py={3} 
              bg="#00ff88"
              color="maroon.700"
              fontWeight="700"
              borderRadius="xl"
              _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 20px rgba(0, 255, 136, 0.4)' }}
              transition="all 0.3s ease"
            >
              View All Facilities
            </Box>
          </VStack>
        </ScrollReveal>
      </Box>
    </Box>
  );
};

export default StatsSection;
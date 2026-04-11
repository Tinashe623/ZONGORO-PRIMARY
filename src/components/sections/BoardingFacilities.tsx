import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaBed, FaUtensils, FaBook, FaHospital, FaRunning, FaShieldAlt } from 'react-icons/fa';
import { boardingFacilities } from '../../data/boarding';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<string, React.ComponentType> = {
  FaBed,
  FaUtensils,
  FaBook,
  FaHospital,
  FaRunning,
  FaShieldAlt,
};

const BoardingFacilities = () => {
  return (
    <Box py={20} px={4} bg="white">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="maroon.500" fontWeight="700">
              Boarding Facilities
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              Our boarding facility is equipped with modern amenities to ensure comfort and safety.
            </Text>
          </VStack>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {boardingFacilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Box
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-6px)',
                    boxShadow: '0 15px 50px rgba(130,0,0,0.15)',
                    borderColor: 'maroon.200',
                  }}
                  h="100%"
                >
                  {/* Gradient top bar */}
                  <Box 
                    h="4px" 
                    bgGradient="linear(to-r, maroon.500, forest.500)" 
                  />
                  <Box p={8}>
                    <VStack align="start" spacing={5}>
                      <Flex
                        align="center"
                        justify="center"
                        w="70px"
                        h="70px"
                        borderRadius="2xl"
                        bgGradient="linear(135deg, maroon.500, maroon.700)"
                        boxShadow="0 6px 20px rgba(128, 0, 32, 0.3)"
                      >
                        {IconComponent && <Icon as={IconComponent} color="white" fontSize="2xl" />}
                      </Flex>
                      <Heading size="md" color="dark.500" fontWeight="700">
                        {facility.name}
                      </Heading>
                      <Text color="gray.600" lineHeight="1.8" fontSize="md">
                        {facility.description}
                      </Text>
                    </VStack>
                  </Box>
                </Box>
              </ScrollReveal>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BoardingFacilities;
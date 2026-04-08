import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Icon,
  Flex,
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
    <Box py={16} px={4} bg="white">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            Boarding Facilities
          </Heading>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {boardingFacilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon];
            return (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Card
                  bg="cream.50"
                  borderRadius="2xl"
                  boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  }}
                  h="100%"
                >
                  <CardBody p={6}>
                    <VStack align="start" spacing={4}>
                      <Flex
                        align="center"
                        justify="center"
                        w="60px"
                        h="60px"
                        borderRadius="full"
                        bg="maroon.500"
                      >
                        {IconComponent && <Icon as={IconComponent} color="white" fontSize="xl" />}
                      </Flex>
                      <Heading size="md" color="dark.500">
                        {facility.name}
                      </Heading>
                      <Text color="gray.600" lineHeight="1.7">
                        {facility.description}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              </ScrollReveal>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BoardingFacilities;
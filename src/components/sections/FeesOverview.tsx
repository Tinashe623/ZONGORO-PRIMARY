import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Flex,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaMoneyBillWave, FaClock, FaCalendarAlt } from 'react-icons/fa';
import ScrollReveal from '../ui/ScrollReveal';
import { feeStructure } from '../../data/admissions';

const FeesOverview = () => {
  return (
    <Box py={20} px={4} bg="cream.50">
      <Box maxW="900px" mx="auto">
        <ScrollReveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="maroon.500" fontWeight="700">
              Fee Structure
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              Transparent and affordable fees with flexible payment options for all families.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Quick Stats */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
          {[
            { icon: FaMoneyBillWave, label: 'Affordable Fees', value: 'Z$', color: 'maroon.500' },
            { icon: FaClock, label: 'Payment Plans', value: 'Available', color: 'forest.500' },
            { icon: FaCalendarAlt, label: 'Per Term', value: '3/Year', color: 'maroon.500' },
          ].map((stat, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Flex 
                bg="white" 
                p={6} 
                borderRadius="2xl" 
                align="center" 
                gap={4}
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(130,0,0,0.1)' }}
                transition="all 0.3s ease"
              >
                <Flex 
                  align="center" 
                  justify="center" 
                  w="50px" 
                  h="50px" 
                  borderRadius="full" 
                  bg="cream.50"
                >
                  <Icon as={stat.icon} color={stat.color} fontSize="xl" />
                </Flex>
                <Box>
                  <Text color="gray.500" fontSize="sm">{stat.label}</Text>
                  <Text color="dark.500" fontWeight="700" fontSize="lg">{stat.value}</Text>
                </Box>
              </Flex>
            </ScrollReveal>
          ))}
        </SimpleGrid>

        <ScrollReveal delay={0.2}>
          <Box 
            bg="white" 
            borderRadius="2xl" 
            boxShadow="0 8px 30px rgba(0,0,0,0.1)" 
            overflow="hidden"
            border="1px solid"
            borderColor="gray.100"
          >
            <Box 
              bgGradient="linear(to-r, maroon.500, maroon.700)" 
              py={5} 
              px={8}
            >
              <Heading size="md" color="white" fontWeight="600">
                Fee Categories
              </Heading>
            </Box>
            <Box overflowX="auto">
              <Table variant="simple" size="lg">
                <Thead bg="cream.50">
                  <Tr>
                    <Th color="maroon.500" fontWeight="700" fontSize="md" py={5} borderBottom="2px solid" borderColor="maroon.200">Category</Th>
                    <Th color="forest.500" fontWeight="700" fontSize="md" py={5} textAlign="center" borderBottom="2px solid" borderColor="forest.200">Amount</Th>
                    <Th color="maroon.500" fontWeight="700" fontSize="md" py={5} textAlign="center" borderBottom="2px solid" borderColor="maroon.200">Period</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {feeStructure.map((fee, index) => (
                    <Tr 
                      key={index} 
                      _hover={{ bg: 'cream.50' }}
                      transition="all 0.2s ease"
                    >
                      <Td py={5} fontWeight="600" color="dark.500" borderBottom="1px solid" borderColor="gray.100">{fee.category}</Td>
                      <Td py={5} textAlign="center" borderBottom="1px solid" borderColor="gray.100">
                        <Text 
                          bg={index === 0 ? 'forest.50' : 'cream.50'} 
                          color="forest.500" 
                          fontWeight="700" 
                          fontSize="lg" 
                          px={5} 
                          py={2} 
                          borderRadius="full"
                          display="inline-block"
                        >
                          {fee.amount}
                        </Text>
                      </Td>
                      <Td py={5} textAlign="center" color="gray.600" fontWeight="500" borderBottom="1px solid" borderColor="gray.100">{fee.period}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </ScrollReveal>

        <Box 
          mt={10} 
          bg="white" 
          borderRadius="2xl" 
          p={6}
          boxShadow="0 4px 20px rgba(0,0,0,0.08)"
          borderLeft="4px solid"
          borderLeftColor="forest.500"
        >
          <Text color="gray.600" fontSize="md" textAlign="center">
            * Fees are subject to change. Please contact the school office for the most current fee structure and payment plan options.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FeesOverview;
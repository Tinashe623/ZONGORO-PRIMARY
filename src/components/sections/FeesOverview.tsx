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
  Badge,
} from '@chakra-ui/react';
import ScrollReveal from '../ui/ScrollReveal';
import { feeStructure } from '../../data/admissions';

const FeesOverview = () => {
  return (
    <Box py={16} px={4} bg="cream.50">
      <Box maxW="800px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            Fee Structure
          </Heading>
        </ScrollReveal>

        <Box bg="white" borderRadius="2xl" boxShadow="0 4px 20px rgba(0,0,0,0.08)" overflow="hidden">
          <Table variant="simple">
            <Thead bg="maroon.500">
              <Tr>
                <Th color="white" py={4}>Category</Th>
                <Th color="white" py={4}>Amount</Th>
                <Th color="white" py={4}>Period</Th>
              </Tr>
            </Thead>
            <Tbody>
              {feeStructure.map((fee, index) => (
                <Tr key={index} _even={{ bg: 'gray.50' }}>
                  <Td py={4} fontWeight="500">{fee.category}</Td>
                  <Td py={4}>
                    <Badge colorScheme="green" fontSize="md" px={3} py={1}>
                      {fee.amount}
                    </Badge>
                  </Td>
                  <Td py={4} color="gray.500">{fee.period}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Text mt={6} color="gray.500" fontSize="sm" textAlign="center">
          * Fees are subject to change. Please contact the school office for the most current fee structure.
        </Text>
      </Box>
    </Box>
  );
};

export default FeesOverview;
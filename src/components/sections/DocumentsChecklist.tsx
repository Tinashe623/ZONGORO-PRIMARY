import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Card,
  CardBody,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaCheckSquare } from 'react-icons/fa';
import { requiredDocuments } from '../../data/admissions';
import ScrollReveal from '../ui/ScrollReveal';

const DocumentsChecklist = () => {
  return (
    <Box py={16} px={4} bg="white">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            Required Documents
          </Heading>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {requiredDocuments.map((doc, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Card
                bg="cream.50"
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              >
                <CardBody p={5}>
                  <Flex align="center" gap={4}>
                    <Flex
                      align="center"
                      justify="center"
                      w="45px"
                      h="45px"
                      borderRadius="lg"
                      bg="maroon.500"
                      flexShrink={0}
                    >
                      <Icon as={FaCheckSquare} color="white" fontSize="xl" />
                    </Flex>
                    <Box>
                      <Heading size="sm" color="dark.500">
                        {doc.name}
                      </Heading>
                      <Text color="gray.500" fontSize="sm">
                        {doc.description}
                      </Text>
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>

        <Box mt={8} textAlign="center">
          <Text color="gray.500" fontSize="sm">
            * Application forms can be collected from the school office or downloaded from our website
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentsChecklist;
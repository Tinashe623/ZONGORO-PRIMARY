import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { admissionRequirements } from '../../data/admissions';
import ScrollReveal from '../ui/ScrollReveal';

const AdmissionRequirements = () => {
  return (
    <Box py={16} px={4} bg="white">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            Admission Requirements
          </Heading>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {admissionRequirements.map((req, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Card
                bg="cream.50"
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                overflow="hidden"
              >
                <CardBody p={6}>
                  <VStack align="start" spacing={4}>
                    <Box>
                      <Badge
                        bg="maroon.500"
                        color="white"
                        px={4}
                        py={1}
                        borderRadius="full"
                        fontSize="md"
                      >
                        {req.grade}
                      </Badge>
                      <Text color="gray.500" fontSize="sm" mt={1}>
                        Age: {req.ageRange}
                      </Text>
                    </Box>
                    <List spacing={2}>
                      {req.requirements.map((r, i) => (
                        <ListItem key={i} display="flex" alignItems="center">
                          <ListIcon as={FaCheckCircle} color="forest.500" />
                          <Text color="gray.600">{r}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </CardBody>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AdmissionRequirements;
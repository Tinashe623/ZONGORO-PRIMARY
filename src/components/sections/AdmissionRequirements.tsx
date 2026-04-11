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
    <Box py={20} px={4} bg="white" id="requirements">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="maroon.500" fontWeight="700">
              Admission Requirements
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              We welcome students from ECD to Grade 7. Each grade level has specific 
              requirements to ensure appropriate placement.
            </Text>
          </VStack>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {admissionRequirements.map((req, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Box
                bg="white"
                borderRadius="2xl"
                boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                overflow="hidden"
                border="1px solid"
                borderColor="gray.100"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(130,0,0,0.15)', borderColor: 'maroon.200' }}
                transition="all 0.3s ease"
              >
                {/* Colored top bar */}
                <Box 
                  h="6px" 
                  bgGradient="linear(to-r, maroon.500, forest.500)" 
                />
                <Box p={8}>
                  <VStack align="start" spacing={5}>
                    <Box>
                      <Badge
                        bg="maroon.500"
                        color="white"
                        px={5}
                        py={2}
                        borderRadius="full"
                        fontSize="md"
                        fontWeight="600"
                      >
                        {req.grade}
                      </Badge>
                      <Text color="gray.500" fontSize="md" mt={2} fontWeight="500">
                        Age: {req.ageRange}
                      </Text>
                    </Box>
                    <List spacing={3}>
                      {req.requirements.map((r, i) => (
                        <ListItem key={i} display="flex" alignItems="center">
                          <ListIcon as={FaCheckCircle} color="forest.500" fontSize="lg" />
                          <Text color="gray.700" fontSize="md">{r}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </Box>
              </Box>
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default AdmissionRequirements;
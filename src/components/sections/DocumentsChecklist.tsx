import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaFileAlt, FaFilePdf, FaBirthdayCake, FaHome, FaUserMd, FaIdCard } from 'react-icons/fa';
import { requiredDocuments } from '../../data/admissions';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<string, React.ComponentType> = {
  'Birth Certificate': FaBirthdayCake,
  'Application Form': FaFileAlt,
  'Immunization Records': FaUserMd,
  'Proof of Residence': FaHome,
  'Previous Records': FaFilePdf,
  'Parent ID': FaIdCard,
};

const DocumentsChecklist = () => {
  return (
    <Box py={20} px={4} bg="white">
      <Box maxW="1200px" mx="auto">
        <ScrollReveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="maroon.500" fontWeight="700">
              Required Documents
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              Please gather all required documents before submitting your application.
            </Text>
          </VStack>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {requiredDocuments.map((doc, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Flex
                bg="cream.50"
                borderRadius="2xl"
                p={6}
                align="center"
                gap={5}
                _hover={{ transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(130,0,0,0.12)', bg: 'white' }}
                transition="all 0.3s ease"
                cursor="default"
              >
                <Flex
                  align="center"
                  justify="center"
                  w="60px"
                  h="60px"
                  borderRadius="2xl"
                  bgGradient="linear(135deg, maroon.500, maroon.700)"
                  boxShadow="0 4px 15px rgba(128, 0, 32, 0.3)"
                  flexShrink={0}
                >
                  <Icon as={iconMap[doc.name] || FaFileAlt} color="white" fontSize="xl" />
                </Flex>
                <Box>
                  <Heading size="md" color="dark.500" mb={1}>
                    {doc.name}
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    {doc.description}
                  </Text>
                </Box>
              </Flex>
            </ScrollReveal>
          ))}
        </SimpleGrid>

        <Box 
          mt={12} 
          bg="maroon.50" 
          borderRadius="2xl" 
          p={8}
          borderLeft="4px solid"
          borderLeftColor="maroon.500"
        >
          <Text color="gray.700" fontSize="md" textAlign="center" fontWeight="500">
            * Application forms can be collected from the school office or contact us to request a digital copy.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentsChecklist;
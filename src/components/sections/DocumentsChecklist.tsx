import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaBirthdayCake } from 'react-icons/fa';
import { getWebsiteIcon } from '../../lib/websiteIcons';
import type { AdmissionsBlock } from '../../data/blocks/admissions';

interface DocumentsChecklistProps {
  content: AdmissionsBlock['documents'];
}

const DocumentsChecklist = ({ content }: DocumentsChecklistProps) => {
  return (
    <Box py={20} px={4} bg="white">
      <Box maxW="1200px" mx="auto">
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="brand" fontWeight="700">
              {content.heading}
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              {content.subtitle}
            </Text>
          </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {content.items.map((doc, index) => (
              <Flex key={index}
                bg="cream.50"
                borderRadius="2xl"
                p={6}
                align="center"
                gap={5}
                _hover={{ transform: 'translateY(-4px)', boxShadow: '0 10px 30px rgba(130,0,0,0.1)', bg: 'white' }}
                transition="all 0.3s ease"
                cursor="default"
              >
                <Flex
                  align="center"
                  justify="center"
                  w="60px"
                  h="60px"
                  borderRadius="2xl"
                  bg="maroon.500"
                  boxShadow="0 4px 15px rgba(130, 0, 0, 0.3)"
                  flexShrink={0}
                >
                  <Icon as={getWebsiteIcon(doc.icon, FaBirthdayCake)} color="onAccent" fontSize="xl" />
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
            {content.note}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentsChecklist;
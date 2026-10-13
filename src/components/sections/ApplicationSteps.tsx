import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Icon,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaPencilAlt } from 'react-icons/fa';
import { getWebsiteIcon } from '../../lib/websiteIcons';
import type { AdmissionsBlock } from '../../data/blocks/admissions';

interface ApplicationStepsProps {
  content: AdmissionsBlock['applicationSteps'];
}

const ApplicationSteps = ({ content }: ApplicationStepsProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={20} px={4} bg="cream.50">
      <Box maxW="1200px" mx="auto">
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="brand" fontWeight="700">
              {content.heading}
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              {content.subtitle}
            </Text>
          </VStack>

        {isMobile ? (
          <VStack spacing={6} align="stretch">
            {content.items.map((step) => (
                <Flex key={step.step}
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                  p={6}
                  gap={5}
                  align="start"
                  _hover={{ transform: 'translateX(4px)', boxShadow: '0 10px 30px rgba(130,0,0,0.1)' }}
                  transition="all 0.3s ease"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w="60px"
                    h="60px"
                    borderRadius="2xl"
                    bg="maroon.500"
                    boxShadow="0 3px 10px rgba(130, 0, 0, 0.2)"
                    flexShrink={0}
                  >
                    <Icon as={getWebsiteIcon(step.icon, FaPencilAlt)} color="onAccent" fontSize="2xl" />
                  </Flex>
                  <Box>
                    <Text color="brand" fontWeight="700" fontSize="sm" mb={1}>
                      {content.stepLabel} {step.step}
                    </Text>
                    <Heading size="md" color="dark.500" mb={2}>
                      {step.title}
                    </Heading>
                    <Text color="gray.600" fontSize="md" lineHeight="1.7">
                      {step.description}
                    </Text>
                  </Box>
                </Flex>
            ))}
          </VStack>
        ) : (
          <SimpleGrid columns={5} spacing={4}>
              {content.items.map((step) => (
                  <VStack key={step.step} spacing={4} position="relative" zIndex={1}>
                    <Flex
                      align="center"
                      justify="center"
                      w="70px"
                      h="70px"
                      borderRadius="2xl"
                      bg="maroon.500"
                      boxShadow="0 8px 25px rgba(130, 0, 0, 0.22)"
                    >
                      <Icon as={getWebsiteIcon(step.icon, FaPencilAlt)} color="onAccent" fontSize="2xl" />
                    </Flex>
                    <Box 
                      bg="white" 
                      p={6} 
                      borderRadius="2xl" 
                  boxShadow="0 6px 20px rgba(0,0,0,0.06)"
                      textAlign="center" 
                      w="100%"
                      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 10px 30px rgba(130,0,0,0.1)' }}
                      transition="all 0.3s ease"
                    >
                      <Text color="brand" fontWeight="700" fontSize="sm" mb={2}>
                        {content.stepLabel} {step.step}
                      </Text>
                      <Heading size="sm" color="dark.500" mb={3}>
                        {step.title}
                      </Heading>
                      <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                        {step.description}
                      </Text>
                    </Box>
                  </VStack>
              ))}
            </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default ApplicationSteps;
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
import { FaClipboardList, FaFileAlt, FaPencilAlt, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';
import { applicationSteps } from '../../data/admissions';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<number, React.ComponentType> = {
  1: FaClipboardList,
  2: FaFileAlt,
  3: FaPencilAlt,
  4: FaClipboardCheck,
  5: FaCheckCircle,
};

const ApplicationSteps = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box py={16} px={4} bg="cream.50">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            Application Process
          </Heading>
        </ScrollReveal>

        {isMobile ? (
          <VStack spacing={6} align="stretch">
            {applicationSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={0.1 * index}>
                <Flex
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                  p={6}
                  gap={4}
                  align="start"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w="50px"
                    h="50px"
                    borderRadius="full"
                    bg="maroon.500"
                    flexShrink={0}
                  >
                    <Icon as={iconMap[step.step]} color="white" fontSize="xl" />
                  </Flex>
                  <Box>
                    <Text color="maroon.500" fontWeight="700" fontSize="sm">
                      Step {step.step}
                    </Text>
                    <Heading size="md" color="dark.500" mb={2}>
                      {step.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm">
                      {step.description}
                    </Text>
                  </Box>
                </Flex>
              </ScrollReveal>
            ))}
          </VStack>
        ) : (
          <Box position="relative">
            <Box
              position="absolute"
              top="50px"
              left="0"
              right="0"
              h="2px"
              bg="maroon.200"
              zIndex={0}
            />
            <SimpleGrid columns={5} spacing={4}>
              {applicationSteps.map((step, index) => (
                <ScrollReveal key={step.step} delay={0.1 * index}>
                  <VStack spacing={4} position="relative" zIndex={1}>
                    <Flex
                      align="center"
                      justify="center"
                      w="60px"
                      h="60px"
                      borderRadius="full"
                      bg="maroon.500"
                      boxShadow="0 4px 15px rgba(128, 0, 32, 0.3)"
                    >
                      <Icon as={iconMap[step.step]} color="white" fontSize="2xl" />
                    </Flex>
                    <Box bg="white" p={6} borderRadius="2xl" boxShadow="0 4px 20px rgba(0,0,0,0.08)" textAlign="center" w="100%">
                      <Text color="maroon.500" fontWeight="700" fontSize="sm" mb={2}>
                        Step {step.step}
                      </Text>
                      <Heading size="sm" color="dark.500" mb={2}>
                        {step.title}
                      </Heading>
                      <Text color="gray.600" fontSize="sm">
                        {step.description}
                      </Text>
                    </Box>
                  </VStack>
                </ScrollReveal>
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ApplicationSteps;
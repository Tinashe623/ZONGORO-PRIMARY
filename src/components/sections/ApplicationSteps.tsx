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
    <Box py={20} px={4} bg="cream.50">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="maroon.500" fontWeight="700">
              Application Process
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              Our simple 5-step application process makes enrolling your child easy and straightforward.
            </Text>
          </VStack>
        </ScrollReveal>

        {isMobile ? (
          <VStack spacing={6} align="stretch">
            {applicationSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={0.1 * index}>
                <Flex
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                  p={6}
                  gap={5}
                  align="start"
                  _hover={{ transform: 'translateX(4px)', boxShadow: '0 12px 40px rgba(130,0,0,0.12)' }}
                  transition="all 0.3s ease"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w="60px"
                    h="60px"
                    borderRadius="2xl"
                    bg="maroon.500"
                    boxShadow="0 4px 15px rgba(128, 0, 32, 0.3)"
                    flexShrink={0}
                  >
                    <Icon as={iconMap[step.step]} color="white" fontSize="2xl" />
                  </Flex>
                  <Box>
                    <Text color="maroon.500" fontWeight="700" fontSize="sm" mb={1}>
                      Step {step.step}
                    </Text>
                    <Heading size="md" color="dark.500" mb={2}>
                      {step.title}
                    </Heading>
                    <Text color="gray.600" fontSize="md" lineHeight="1.7">
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
              top="60px"
              left="0"
              right="0"
              h="3px"
              bgGradient="linear(to-r, maroon.300, forest.500, maroon.300)"
              zIndex={0}
            />
            <SimpleGrid columns={5} spacing={4}>
              {applicationSteps.map((step, index) => (
                <ScrollReveal key={step.step} delay={0.1 * index}>
                  <VStack spacing={4} position="relative" zIndex={1}>
                    <Flex
                      align="center"
                      justify="center"
                      w="70px"
                      h="70px"
                      borderRadius="2xl"
                      bg="maroon.500"
                      boxShadow="0 8px 25px rgba(128, 0, 32, 0.4)"
                    >
                      <Icon as={iconMap[step.step]} color="white" fontSize="2xl" />
                    </Flex>
                    <Box 
                      bg="white" 
                      p={6} 
                      borderRadius="2xl" 
                      boxShadow="0 8px 30px rgba(0,0,0,0.1)" 
                      textAlign="center" 
                      w="100%"
                      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(130,0,0,0.15)' }}
                      transition="all 0.3s ease"
                    >
                      <Text color="maroon.500" fontWeight="700" fontSize="sm" mb={2}>
                        Step {step.step}
                      </Text>
                      <Heading size="sm" color="dark.500" mb={3}>
                        {step.title}
                      </Heading>
                      <Text color="gray.600" fontSize="sm" lineHeight="1.6">
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
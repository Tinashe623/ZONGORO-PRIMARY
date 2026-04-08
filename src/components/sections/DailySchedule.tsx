import {
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { dailySchedule } from '../../data/boarding';
import ScrollReveal from '../ui/ScrollReveal';

const DailySchedule = () => {
  const morningItems = dailySchedule.slice(0, 4);
  const afternoonItems = dailySchedule.slice(4, 8);
  const eveningItems = dailySchedule.slice(8);

  const isMealTime = (activity: string) => {
    return activity.toLowerCase().includes('breakfast') || 
           activity.toLowerCase().includes('lunch') || 
           activity.toLowerCase().includes('dinner');
  };

  return (
    <Box py={16} px={4} bg="cream.50">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            Daily Schedule
          </Heading>
        </ScrollReveal>

        <Box position="relative">
          <Box
            display={{ base: 'none', lg: 'block' }}
            position="absolute"
            top="60px"
            left="50%"
            transform="translateX(-50%)"
            w="4px"
            h="calc(100% - 120px)"
            bg="maroon.200"
            borderRadius="full"
          />

          <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={8}>
            <GridItem>
              <VStack spacing={4} align="stretch">
                {morningItems.map((item, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <Flex
                      bg="white"
                      borderRadius="2xl"
                      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                      p={5}
                      gap={4}
                      align="center"
                    >
                      <Box
                        w="80px"
                        textAlign="center"
                        py={2}
                        bg={isMealTime(item.activity) ? 'forest.500' : 'maroon.500'}
                        borderRadius="lg"
                        color="white"
                        fontWeight="600"
                        fontSize="sm"
                        flexShrink={0}
                      >
                        {item.time}
                      </Box>
                      <Text color="gray.700" fontWeight="500">
                        {item.activity}
                      </Text>
                    </Flex>
                  </ScrollReveal>
                ))}
              </VStack>
            </GridItem>

            <GridItem>
              <VStack spacing={4} align="stretch">
                {afternoonItems.map((item, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <Flex
                      bg="white"
                      borderRadius="2xl"
                      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                      p={5}
                      gap={4}
                      align="center"
                    >
                      <Box
                        w="80px"
                        textAlign="center"
                        py={2}
                        bg={isMealTime(item.activity) ? 'forest.500' : 'maroon.500'}
                        borderRadius="lg"
                        color="white"
                        fontWeight="600"
                        fontSize="sm"
                        flexShrink={0}
                      >
                        {item.time}
                      </Box>
                      <Text color="gray.700" fontWeight="500">
                        {item.activity}
                      </Text>
                    </Flex>
                  </ScrollReveal>
                ))}
              </VStack>
            </GridItem>

            <GridItem>
              <VStack spacing={4} align="stretch">
                {eveningItems.map((item, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <Flex
                      bg="white"
                      borderRadius="2xl"
                      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                      p={5}
                      gap={4}
                      align="center"
                    >
                      <Box
                        w="80px"
                        textAlign="center"
                        py={2}
                        bg={isMealTime(item.activity) ? 'forest.500' : 'maroon.500'}
                        borderRadius="lg"
                        color="white"
                        fontWeight="600"
                        fontSize="sm"
                        flexShrink={0}
                      >
                        {item.time}
                      </Box>
                      <Text color="gray.700" fontWeight="500">
                        {item.activity}
                      </Text>
                    </Flex>
                  </ScrollReveal>
                ))}
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DailySchedule;
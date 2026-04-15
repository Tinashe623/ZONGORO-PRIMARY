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
    <Box py={20} px={4} bg="cream.50">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="maroon.500" fontWeight="700">
              Daily Schedule
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              Our structured daily routine ensures a balanced mix of studies, meals, and recreation.
            </Text>
          </VStack>
        </ScrollReveal>

        <Box position="relative">

          <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={8}>
            <GridItem>
              <VStack spacing={4} align="stretch">
                {morningItems.map((item, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <Flex
                      bg="white"
                      borderRadius="2xl"
                      boxShadow="0 6px 25px rgba(0,0,0,0.1)"
                      p={5}
                      gap={4}
                      align="center"
                      _hover={{ transform: 'translateX(4px)', boxShadow: '0 8px 30px rgba(130,0,0,0.12)' }}
                      transition="all 0.3s ease"
                    >
                      <Box
                        w="90px"
                        textAlign="center"
                        py={3}
                        bgGradient={isMealTime(item.activity) ? 'linear(to-r, forest.500, forest.600)' : 'linear(to-r, maroon.500, maroon.700)'}
                        borderRadius="xl"
                        color="white"
                        fontWeight="700"
                        fontSize="sm"
                        flexShrink={0}
                        boxShadow={isMealTime(item.activity) ? '0 4px 15px rgba(45,106,79,0.3)' : '0 4px 15px rgba(128,0,0,0.3)'}
                      >
                        {item.time}
                      </Box>
                      <Text color="gray.700" fontWeight="600" fontSize="md">
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
                      boxShadow="0 6px 25px rgba(0,0,0,0.1)"
                      p={5}
                      gap={4}
                      align="center"
                      _hover={{ transform: 'translateX(4px)', boxShadow: '0 8px 30px rgba(130,0,0,0.12)' }}
                      transition="all 0.3s ease"
                    >
                      <Box
                        w="90px"
                        textAlign="center"
                        py={3}
                        bgGradient={isMealTime(item.activity) ? 'linear(to-r, forest.500, forest.600)' : 'linear(to-r, maroon.500, maroon.700)'}
                        borderRadius="xl"
                        color="white"
                        fontWeight="700"
                        fontSize="sm"
                        flexShrink={0}
                        boxShadow={isMealTime(item.activity) ? '0 4px 15px rgba(45,106,79,0.3)' : '0 4px 15px rgba(128,0,0,0.3)'}
                      >
                        {item.time}
                      </Box>
                      <Text color="gray.700" fontWeight="600" fontSize="md">
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
                      boxShadow="0 6px 25px rgba(0,0,0,0.1)"
                      p={5}
                      gap={4}
                      align="center"
                      _hover={{ transform: 'translateX(4px)', boxShadow: '0 8px 30px rgba(130,0,0,0.12)' }}
                      transition="all 0.3s ease"
                    >
                      <Box
                        w="90px"
                        textAlign="center"
                        py={3}
                        bgGradient={isMealTime(item.activity) ? 'linear(to-r, forest.500, forest.600)' : 'linear(to-r, maroon.500, maroon.700)'}
                        borderRadius="xl"
                        color="white"
                        fontWeight="700"
                        fontSize="sm"
                        flexShrink={0}
                        boxShadow={isMealTime(item.activity) ? '0 4px 15px rgba(45,106,79,0.3)' : '0 4px 15px rgba(128,0,0,0.3)'}
                      >
                        {item.time}
                      </Box>
                      <Text color="gray.700" fontWeight="600" fontSize="md">
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
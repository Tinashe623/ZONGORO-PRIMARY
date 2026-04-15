import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import ScrollReveal from '../ui/ScrollReveal';

const achievements = [
  { icon: FaTrophy, count: 12, label: 'District Titles' },
  { icon: FaMedal, count: 28, label: 'Provincial Medals' },
  { icon: FaStar, count: 8, label: 'National Competitions' },
];

const Achievements = () => {
  return (
    <Box bgGradient="linear(to-r, maroon.500, maroon.600)" py={16} px={4} w="full">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Icon as={FaTrophy} color="white" fontSize="4xl" />
              <Heading size="xl" color="white">
                Our Achievements
              </Heading>
              <Text color="whiteAlpha.900" maxW="600px">
                Over the years, our students have excelled in various competitions, 
                bringing pride to our school and community.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
              {achievements.map((item, index) => (
                <ScrollReveal key={index} delay={0.2 * index}>
                  <VStack
                    bg="whiteAlpha.200"
                    borderRadius="2xl"
                    p={8}
                    spacing={4}
                    transition="all 0.3s ease"
                    _hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-4px)' }}
                  >
                    <Icon as={item.icon} color="white" fontSize="3xl" />
                    <Heading size="3xl" color="white">
                      {item.count}+
                    </Heading>
                    <Text color="whiteAlpha.900" fontWeight="600">
                      {item.label}
                    </Text>
                  </VStack>
                </ScrollReveal>
              ))}
            </SimpleGrid>
          </VStack>
        </ScrollReveal>
      </Box>
    </Box>
  );
};

export default Achievements;
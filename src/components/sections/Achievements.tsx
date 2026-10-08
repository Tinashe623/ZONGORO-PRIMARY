import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const achievements = [
  { icon: FaTrophy, count: 12, label: 'District Titles' },
  { icon: FaMedal, count: 28, label: 'Provincial Medals' },
  { icon: FaStar, count: 8, label: 'National Competitions' },
];

const Achievements = () => {
  return (
    <Box bg="maroon.500" py={16} px={4} w="full">
      <Box maxW="1200px" mx="auto">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Icon as={FaTrophy} color="onAccent" fontSize="4xl" />
              <Heading size="xl" color="onAccent">
                Our Achievements
              </Heading>
              <Text color="whiteAlpha.900" maxW="600px">
                Over the years, our students have excelled in various competitions, 
                bringing pride to our school and community.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
              {achievements.map((item, index) => (
                  <VStack key={index}
                    bg="whiteAlpha.200"
                    borderRadius="2xl"
                    p={8}
                    spacing={4}
                    transition="all 0.3s ease"
                    _hover={{ bg: 'whiteAlpha.300', transform: 'translateY(-4px)' }}
                  >
                    <Icon as={item.icon} color="onAccent" fontSize="3xl" />
                    <Heading size="3xl" color="onAccent">
                      {item.count}+
                    </Heading>
                    <Text color="whiteAlpha.900" fontWeight="600">
                      {item.label}
                    </Text>
                  </VStack>
              ))}
            </SimpleGrid>
          </VStack>
      </Box>
    </Box>
  );
};

export default Achievements;
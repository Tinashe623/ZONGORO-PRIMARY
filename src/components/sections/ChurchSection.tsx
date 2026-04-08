import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Flex,
} from '@chakra-ui/react';
import { FaCross, FaHeart, FaBook, FaPrayingHands, FaChurch } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import SectionDivider from '../ui/SectionDivider';

const churchValues = [
  { icon: FaCross, text: 'Faith & Trust in God' },
  { icon: FaHeart, text: 'Love & Compassion' },
  { icon: FaBook, text: 'Scripture-Based Learning' },
  { icon: FaPrayingHands, text: 'Prayer & Worship' },
  { icon: FaChurch, text: 'Community Fellowship' },
];

const ChurchSection = () => {
  return (
    <Box id="church" py={20} px={4}>
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <SectionHeading
            title="Our Anglican Heritage"
            subtitle="Building character through Christian values and worship"
          />
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
          <ScrollReveal>
            <VStack align="start" spacing={6}>
              <Box
                bg="cream.50"
                p={8}
                borderRadius="2xl"
                borderLeft="4px solid"
                borderLeftColor="maroon.500"
                position="relative"
              >
                <Text
                  fontSize="6xl"
                  color="maroon.500"
                  position="absolute"
                  top={2}
                  left={4}
                  opacity={0.3}
                >
                  "
                </Text>
                <Text
                  fontSize="lg"
                  fontStyle="italic"
                  color="gray.700"
                  lineHeight="1.8"
                  pl={6}
                >
                  "Train up a child in the way he should go: and when he is old, he will
                  not depart from it." — Proverbs 22:6
                </Text>
                <Text
                  fontSize="lg"
                  fontStyle="italic"
                  color="gray.700"
                  lineHeight="1.8"
                  pl={6}
                  mt={4}
                >
                  Our Anglican foundation shapes every aspect of school life, from daily
                  prayers to character education. We believe that integrating faith with
                  learning creates well-rounded individuals who serve their communities
                  with integrity.
                </Text>
              </Box>
            </VStack>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <VStack align="start" spacing={6}>
              <Heading size="lg" color="forest.500">
                Our Church Values
              </Heading>
              <List spacing={4}>
                {churchValues.map((value, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <Flex
                      align="center"
                      justify="center"
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="forest.50"
                      mr={4}
                    >
                      <ListIcon as={value.icon} color="forest.500" fontSize="lg" />
                    </Flex>
                    <Text color="gray.700" fontWeight="500">
                      {value.text}
                    </Text>
                  </ListItem>
                ))}
              </List>
            </VStack>
          </ScrollReveal>
        </SimpleGrid>

        <Box mt={12}>
          <SectionDivider color="green" />
        </Box>
      </Box>
    </Box>
  );
};

export default ChurchSection;
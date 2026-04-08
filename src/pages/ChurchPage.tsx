import { useEffect } from 'react';
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
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/ui/CTABanner';

const churchValues = [
  { icon: FaCross, text: 'Faith & Trust in God' },
  { icon: FaHeart, text: 'Love & Compassion' },
  { icon: FaBook, text: 'Scripture-Based Learning' },
  { icon: FaPrayingHands, text: 'Prayer & Worship' },
  { icon: FaChurch, text: 'Community Fellowship' },
];

const ChurchPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Our Anglican Heritage" 
        subtitle="Building character through Christian values and worship"
      />
      
      <Box py={16} px={4}>
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
              <VStack align="start" spacing={6}>
                <Heading size="lg" color="maroon.500">
                  Our Christian Foundation
                </Heading>
                <Text color="gray.600" lineHeight="1.8">
                  Our Anglican foundation shapes every aspect of school life, from daily
                  prayers to character education. We believe that integrating faith with
                  learning creates well-rounded individuals who serve their communities
                  with integrity.
                </Text>
                <Text color="gray.600" lineHeight="1.8">
                  Students participate in daily devotionals, weekly chapel services, and
                  learn Christian values that guide them throughout their lives. Our
                  partnership with St James Anglican Church ensures spiritual growth
                  alongside academic achievement.
                </Text>
              </VStack>

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
            </SimpleGrid>
          </ScrollReveal>
        </Box>
      </Box>

      <Box bg="cream.50" py={16} px={4}>
        <Box maxW="800px" mx="auto" textAlign="center">
          <ScrollReveal>
            <Text
              fontSize="2xl"
              fontStyle="italic"
              color="gray.700"
              lineHeight="1.8"
              mb={4}
            >
              "Train up a child in the way he should go: and when he is old, he will
              not depart from it." — Proverbs 22:6
            </Text>
          </ScrollReveal>
        </Box>
      </Box>

      <CTABanner 
        title="Learn More About Our Faith" 
        subtitle="Schedule a visit to learn about our Christian programs"
        buttonText="Contact Us"
        buttonLink="/#contact"
      />
    </Box>
  );
};

export default ChurchPage;
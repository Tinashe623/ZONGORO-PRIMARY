import { Box, SimpleGrid, VStack, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const About = () => {
  const coreValues = [
    'Academic Excellence',
    'Christian Values',
    'Community Service',
    'Respect & Integrity',
    'Inclusive Education',
  ];

  return (
    <Box id="about" bg="cream.50" py={20} px={4}>
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <SectionHeading
            title="About Our School"
            subtitle="Building a legacy of educational excellence since 1985"
          />
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="start">
          <ScrollReveal>
            <VStack align="start" spacing={4}>
              <Heading size="lg" color="maroon.500">
                Our History
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                St James Zongoro Primary School was established in 1985 as a small
                community school serving the rural village of Zongoro in Gutu District,
                Masvingo Province. What began as a modest initiative has grown into a
                respected institution that has produced generations of successful
                students.
              </Text>
              <Text color="gray.600" lineHeight="1.8">
                Founded in partnership with the Anglican Church and the local chief, our
                school has maintained its commitment to providing quality education while
                preserving our cultural heritage and Christian values.
              </Text>
            </VStack>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <VStack align="start" spacing={6}>
              <Box>
                <Heading size="lg" color="maroon.500" mb={4}>
                  Vision & Mission
                </Heading>
                <Text color="gray.600" mb={4} lineHeight="1.8">
                  <strong>Vision:</strong> To be a center of academic excellence and
                  Christian leadership that empowers students to become responsible
                  citizens who contribute positively to their communities.
                </Text>
                <Text color="gray.600" lineHeight="1.8">
                  <strong>Mission:</strong> To provide quality, affordable education
                  grounded in Anglican principles, fostering holistic development of
                  every child through innovative teaching and community partnership.
                </Text>
              </Box>

              <Box>
                <Heading size="md" color="maroon.500" mb={3}>
                  Core Values
                </Heading>
                <List spacing={2}>
                  {coreValues.map((value) => (
                    <ListItem key={value} display="flex" alignItems="center">
                      <ListIcon as={FaCheck} color="maroon.500" />
                      <Text color="gray.600">{value}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </VStack>
          </ScrollReveal>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
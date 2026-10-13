import { Box, SimpleGrid, VStack, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import { useWebsiteContent } from '../../context/WebsiteContentContext';

const About = () => {
  const { content } = useWebsiteContent();
  const { history, vision, mission, coreValues } = content.about;
  const historyParagraphs = history
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <Box id="about" bg="cream.50" py={20} px={4}>
      <Box maxW="1200px" mx="auto">
          <SectionHeading
            title="About Our School"
            subtitle="Building a legacy of educational excellence since 1925"
          />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="start">
            <VStack align="start" spacing={4}>
              <Heading size="lg" color="brand">
                Our History
              </Heading>
              {historyParagraphs.map((paragraph, index) => (
                <Text key={index} color="gray.600" lineHeight="1.8">
                  {paragraph}
                </Text>
              ))}
            </VStack>

            <VStack align="start" spacing={6}>
              <Box>
                <Heading size="lg" color="brand" mb={4}>
                  Vision &amp; Mission
                </Heading>
                <Text color="gray.600" mb={4} lineHeight="1.8">
                  <strong>Vision:</strong> {vision}
                </Text>
                <Text color="gray.600" lineHeight="1.8">
                  <strong>Mission:</strong> {mission}
                </Text>
              </Box>

              <Box>
                <Heading size="md" color="brand" mb={3}>
                  Core Values
                </Heading>
                <List spacing={2}>
                  {coreValues.map((value) => (
                    <ListItem key={value} display="flex" alignItems="center">
                      <ListIcon as={FaCheck} color="brand" />
                      <Text color="gray.600">{value}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;

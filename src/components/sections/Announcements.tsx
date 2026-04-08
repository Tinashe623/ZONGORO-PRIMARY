import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
  Link,
} from '@chakra-ui/react';
import { announcements } from '../../data/announcements';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const AnnouncementCard = ({
  date,
  title,
  excerpt,
}: {
  date: string;
  title: string;
  excerpt: string;
}) => {
  return (
    <Card
      bg="white"
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      transition="all 0.3s ease"
      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      h="100%"
    >
      <CardBody p={6}>
        <VStack align="start" spacing={4}>
          <Badge
            bg="maroon.500"
            color="white"
            px={3}
            py={1}
            borderRadius="md"
            fontSize="sm"
          >
            {formatDate(date)}
          </Badge>
          <Heading size="md" color="dark.500">
            {title}
          </Heading>
          <Text color="gray.600" lineHeight="1.7">
            {excerpt}
          </Text>
          <Link
            color="maroon.500"
            fontWeight="600"
            _hover={{ textDecoration: 'underline' }}
          >
            Read More →
          </Link>
        </VStack>
      </CardBody>
    </Card>
  );
};

const Announcements = () => {
  return (
    <Box id="announcements" bg="cream.50" py={20} px={4}>
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <SectionHeading
            title="Latest News & Announcements"
            subtitle="Stay updated with school activities and events"
          />
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {announcements.map((announcement, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <AnnouncementCard {...announcement} />
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Announcements;
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
  Button,
  Collapse,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { announcements } from '../../data/announcements';
import SectionHeading from '../ui/SectionHeading';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

interface Announcement {
  date: string;
  title: string;
  excerpt: string;
  content?: string;
  sourceUrl?: string;
}

const AnnouncementCard = ({
  date,
  title,
  excerpt,
  content,
  sourceUrl,
}: Announcement) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      transition="all 0.3s ease"
      h="100%"
      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
    >
      <CardBody p={6}>
        <VStack align="start" spacing={4}>
          <Badge
            bg="maroon.500"
            color="onAccent"
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
          <Text color="gray.700" lineHeight="1.7">
            {excerpt}
          </Text>
          {content && (
            <>
              <Collapse in={isExpanded} style={{ width: '100%' }}>
                <Text color="gray.700" lineHeight="1.7" whiteSpace="pre-wrap">
                  {content}
                </Text>
                {sourceUrl && (
                  <Link href={sourceUrl} isExternal color="maroon.500" fontWeight="600" _hover={{ textDecoration: 'underline', color: 'maroon.700' }} mt={2} display="block">
                    Read full article →
                  </Link>
                )}
              </Collapse>
              <Button
                size="sm"
                colorScheme="maroon"
                variant="link"
                transition="all 0.2s ease"
                _hover={{ color: 'maroon.700', textDecoration: 'underline', transform: 'translateX(4px)' }}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show less' : 'Read More →'}
              </Button>
            </>
          )}
        </VStack>
      </CardBody>
    </Card>
  );
};

const Announcements = () => {
  return (
    <Box id="announcements" bg="cream.50" py={20} px={4}>
      <Box maxW="1200px" mx="auto">
          <SectionHeading
            title="Latest News & Announcements"
            subtitle="Stay updated with school activities and events"
            textAlign="left"
          />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} alignItems="stretch">
          {announcements.map((announcement, index) => (
              <AnnouncementCard key={index} 
                date={announcement.date}
                title={announcement.title}
                excerpt={announcement.excerpt}
                content={announcement.content}
                sourceUrl={announcement.sourceUrl}
              />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Announcements;
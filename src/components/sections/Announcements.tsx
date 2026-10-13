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
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import { useWebsiteContent } from '../../context/WebsiteContentContext';

interface Announcement {
  date: string;
  title: string;
  excerpt: string;
  content?: string;
  sourceUrl?: string;
}

const parseDate = (dateString: string) => new Date(dateString);

const AnnouncementCard = ({
  date,
  title,
  excerpt,
  content,
  sourceUrl,
  featured = false,
}: Announcement & { featured?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const parsed = parseDate(date);
  const day = parsed.toLocaleDateString('en-US', { day: '2-digit' });
  const monthYear = parsed
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    .toUpperCase();

  return (
    <Card
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.100"
      boxShadow="0 4px 20px rgba(0,0,0,0.06)"
      transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
      h="100%"
      position="relative"
      overflow="hidden"
      role="group"
      _hover={{ transform: 'translateY(-6px)', boxShadow: '0 16px 40px rgba(130, 0, 0,0.12)', borderColor: 'maroon.100' }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bgGradient="linear(to-r, maroon.500, forest.500)"
        transform={featured ? 'scaleX(1)' : 'scaleX(0)'}
        transformOrigin="left"
        transition="transform 0.35s ease"
        _groupHover={{ transform: 'scaleX(1)' }}
      />
      <CardBody p={6}>
        <VStack align="start" spacing={4} h="100%">
          <Flex align="flex-start" justify="space-between" w="100%" gap={3}>
            <VStack
              spacing={0}
              justify="center"
              minW="58px"
              px={3}
              py={2}
              borderRadius="xl"
              bgGradient="linear(to-br, maroon.500, maroon.600)"
              color="onAccent"
              boxShadow="0 6px 16px rgba(130, 0, 0, 0.25)"
            >
              <Text fontSize="2xl" fontWeight="800" lineHeight="1">
                {day}
              </Text>
              <Text fontSize="9px" fontWeight="700" letterSpacing="0.08em" opacity={0.9}>
                {monthYear}
              </Text>
            </VStack>

            {featured && (
              <Badge
                display="flex"
                alignItems="center"
                gap={1.5}
                bg="maroon.50"
                color="brandStrong"
                px={2.5}
                py={1}
                borderRadius="full"
                fontSize="xs"
                fontWeight="700"
                textTransform="uppercase"
                letterSpacing="0.06em"
              >
                <Box w="6px" h="6px" borderRadius="full" bg="forest.500" />
                Latest
              </Badge>
            )}
          </Flex>

          <Heading size="md" color="dark.500" lineHeight="1.3">
            {title}
          </Heading>
          <Text color="gray.600" lineHeight="1.7" fontSize="sm" flex="1">
            {excerpt}
          </Text>

          {content && (
            <>
              <Collapse in={isExpanded} animateOpacity style={{ width: '100%' }}>
                <Text color="gray.600" lineHeight="1.7" fontSize="sm" whiteSpace="pre-wrap">
                  {content}
                </Text>
                {sourceUrl && (
                  <Link
                    href={sourceUrl}
                    isExternal
                    color="brand"
                    fontWeight="600"
                    fontSize="sm"
                    _hover={{ textDecoration: 'underline', color: 'brandStrong' }}
                    mt={2}
                    display="inline-flex"
                    alignItems="center"
                    gap={1}
                  >
                    Read full article <FaArrowRight size={10} />
                  </Link>
                )}
              </Collapse>
              <Button
                size="sm"
                variant="link"
                color="brand"
                alignSelf="flex-start"
                transition="all 0.2s ease"
                _hover={{ color: 'brandStrong', transform: 'translateX(4px)' }}
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
  const { content } = useWebsiteContent();
  const sorted = [...content.news].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return (
    <Box id="announcements" bg="cream.50" py={20} px={4}>
      <Box maxW="1200px" mx="auto">
          <SectionHeading
            eyebrow="Updates"
            title="Latest News & Announcements"
            subtitle="Stay updated with school activities and events"
            textAlign="left"
          />

        {sorted.length === 0 ? (
          <Box
            textAlign="center"
            py={14}
            px={6}
            borderRadius="2xl"
            border="1px dashed"
            borderColor="maroon.100"
            bg="whiteAlpha.400"
          >
            <Heading size="md" color="dark.500" mb={2}>
              No announcements yet
            </Heading>
            <Text color="gray.600" maxW="420px" mx="auto">
              New school updates will appear here as soon as they are published.
            </Text>
          </Box>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} alignItems="stretch">
            {sorted.map((announcement, index) => (
              <Reveal key={`${announcement.title}-${index}`} delay={index * 0.08} style={{ height: '100%' }}>
                <AnnouncementCard
                  date={announcement.date}
                  title={announcement.title}
                  excerpt={announcement.excerpt}
                  content={announcement.content}
                  sourceUrl={announcement.sourceUrl}
                  featured={index === 0}
                />
              </Reveal>
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
};

export default Announcements;
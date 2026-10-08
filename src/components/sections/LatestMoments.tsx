import { useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';

const moments = [
  { src: '/images/moments/campus-01.webp', caption: 'Our Campus', tag: 'Campus' },
  { src: '/images/moments/classroom-02.webp', caption: 'Learning in Action', tag: 'Classrooms' },
  { src: '/images/moments/chapel-01.webp', caption: 'Faith & Fellowship', tag: 'Chapel & Assembly' },
  { src: '/images/moments/classroom-05.webp', caption: 'Classroom Moments', tag: 'Classrooms' },
  { src: '/images/moments/campus-02.webp', caption: 'School Grounds', tag: 'Campus' },
  { src: '/images/moments/chapel-03.webp', caption: 'Assembly Time', tag: 'Chapel & Assembly' },
  { src: '/images/moments/classroom-08.webp', caption: 'Focused Learners', tag: 'Classrooms' },
  { src: '/images/moments/campus-03.webp', caption: 'A Bright Future', tag: 'Campus' },
];

const LatestMoments = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };

  return (
    <Box id="latest-moments" py={{ base: 14, md: 20 }} px={4} bg="white">
      <Box maxW="1200px" mx="auto">
        <Flex justify="space-between" align="flex-end" wrap="wrap" gap={4}>
            <SectionHeading
              title="Latest Moments"
              subtitle="Fresh glimpses of life and learning at St James Zongoro"
              textAlign="left"
            />
          <HStackButtons onPrev={() => scrollBy(-1)} onNext={() => scrollBy(1)} />
        </Flex>

          <Box
            ref={scrollerRef}
            display="flex"
            gap={4}
            overflowX="auto"
            pb={4}
            sx={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {moments.map((moment) => (
              <Box
                key={moment.src}
                as={RouterLink}
                to="/gallery"
                position="relative"
                flexShrink={0}
                w={{ base: '75%', sm: 300, md: 340 }}
                h={210}
                borderRadius="2xl"
                overflow="hidden"
                role="group"
                scrollSnapAlign="start"
                boxShadow="0 8px 30px rgba(0,0,0,0.1)"
              >
                <Image
                  src={moment.src}
                  alt={moment.caption}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy"
                  decoding="async"
                  transition="transform 0.5s ease"
                  _groupHover={{ transform: 'scale(1.08)' }}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-t, rgba(0,0,0,0.55), transparent 55%)"
                />
                <Badge
                  position="absolute"
                  top={3}
                  left={3}
                  bg="rgba(0,0,0,0.65)"
                  color="white"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  textTransform="uppercase"
                  fontWeight="700"
                >
                  {moment.tag}
                </Badge>
                <Box position="absolute" bottom={4} left={4} right={4}>
                  <Heading
                    size="sm"
                    color="onAccent"
                    fontWeight="700"
                    textShadow="0 1px 8px rgba(0,0,0,0.4)"
                    noOfLines={1}
                  >
                    {moment.caption}
                  </Heading>
                </Box>
              </Box>
            ))}
          </Box>

        <Text textAlign="center" mt={6}>
          <RouterLink to="/gallery">
            <Box
              as="span"
              color="maroon.500"
              fontWeight="700"
              fontSize={{ base: 'sm', md: 'md' }}
              _hover={{ textDecoration: 'underline' }}
            >
              View Full Gallery →
            </Box>
          </RouterLink>
        </Text>
      </Box>
    </Box>
  );
};

const HStackButtons = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => {
  return (
    <Flex gap={2} mb={10}>
      <IconButton
        aria-label="Scroll moments left"
        icon={<ChevronLeftIcon boxSize={6} />}
        onClick={onPrev}
        variant="outline"
        border="1px solid"
        borderColor="gray.300"
        color="gray.700"
        _hover={{ bg: 'gray.100' }}
        borderRadius="full"
      />
      <IconButton
        aria-label="Scroll moments right"
        icon={<ChevronRightIcon boxSize={6} />}
        onClick={onNext}
        variant="outline"
        border="1px solid"
        borderColor="gray.300"
        color="gray.700"
        _hover={{ bg: 'gray.100' }}
        borderRadius="full"
      />
    </Flex>
  );
};

export default LatestMoments;
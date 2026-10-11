import { useRef } from 'react';
import {
  Box,
  Heading,
  Image,
  IconButton,
  Flex,
  Badge,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons';
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
              eyebrow="Our Moments"
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
                  bgGradient="linear(to-t, rgba(60, 0, 10, 0.72), rgba(9, 38, 27, 0.1) 55%, transparent)"
                />
                <Badge
                  position="absolute"
                  top={3}
                  left={3}
                  bg="rgba(23, 20, 18, 0.5)"
                  color="cream.50"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  backdropFilter="blur(10px)"
                  style={{ WebkitBackdropFilter: 'blur(10px)' }}
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  fontWeight="700"
                  boxShadow="0 2px 12px rgba(0,0,0,0.25)"
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

        <Flex justify="center" mt={8}>
          <Button
            as={RouterLink}
            to="/gallery"
            bgGradient="linear(to-r, maroon.500, maroon.600)"
            color="onAccent"
            size="md"
            px={7}
            borderRadius="full"
            fontWeight="600"
            rightIcon={<ArrowForwardIcon />}
            boxShadow="0 4px 18px rgba(130, 0, 0, 0.25)"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 28px rgba(130, 0, 0, 0.32)',
              bgGradient: 'linear(to-r, maroon.600, maroon.700)',
            }}
            _active={{ transform: 'translateY(0)' }}
            transition="all 0.2s ease"
          >
            View Full Gallery
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const HStackButtons = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => {
  const bg = useColorModeValue('white', 'rgba(255, 255, 255, 0.06)');
  return (
    <Flex gap={2} mb={10}>
      <IconButton
        aria-label="Scroll moments left"
        icon={<ChevronLeftIcon boxSize={6} />}
        onClick={onPrev}
        variant="outline"
        border="1px solid"
        borderColor="maroon.200"
        bg={bg}
        color="maroon.500"
        boxShadow="0 2px 10px rgba(130, 0, 0, 0.08)"
        _hover={{ bg: 'maroon.500', color: 'white', borderColor: 'maroon.500', boxShadow: '0 6px 18px rgba(130, 0, 0, 0.28)' }}
        _active={{ transform: 'scale(0.96)' }}
        borderRadius="full"
        transition="all 0.2s ease"
      />
      <IconButton
        aria-label="Scroll moments right"
        icon={<ChevronRightIcon boxSize={6} />}
        onClick={onNext}
        variant="outline"
        border="1px solid"
        borderColor="maroon.200"
        bg={bg}
        color="maroon.500"
        boxShadow="0 2px 10px rgba(130, 0, 0, 0.08)"
        _hover={{ bg: 'maroon.500', color: 'white', borderColor: 'maroon.500', boxShadow: '0 6px 18px rgba(130, 0, 0, 0.28)' }}
        _active={{ transform: 'scale(0.96)' }}
        borderRadius="full"
        transition="all 0.2s ease"
      />
    </Flex>
  );
};

export default LatestMoments;
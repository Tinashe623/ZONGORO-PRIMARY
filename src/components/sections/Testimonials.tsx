import { useEffect, useState, useCallback } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Heading,
  Icon,
  IconButton,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaUserGraduate, FaUserTie, FaCrown, FaQuoteLeft } from 'react-icons/fa';
import Reveal from '../ui/Reveal';
import { useWebsiteContent } from '../../context/WebsiteContentContext';
import type { WebsiteTestimonial } from '../../types/website';

const AUTOPLAY_MS = 6000;

const getRoleIcon = (role: string) => {
  if (role.includes('Parent')) return FaUserTie;
  if (role.includes('Leader') || role.includes('Chief')) return FaCrown;
  return FaUserGraduate;
};

const TestimonialCard = ({ testimonial }: { testimonial: WebsiteTestimonial }) => {
  return (
    <Box
      position="relative"
      bg="white"
      borderRadius="2xl"
      p={{ base: 6, md: 8 }}
      boxShadow="0 14px 40px rgba(130, 0, 0, 0.12)"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="100%"
      _hover={{
        transform: 'translateY(-6px)',
        boxShadow: '0 22px 50px rgba(130, 0, 0, 0.18)',
      }}
      transition="all 0.25s ease"
    >
      <Icon
        as={FaQuoteLeft}
        position="absolute"
        top={{ base: 5, md: 6 }}
        right={{ base: 5, md: 7 }}
        boxSize={{ base: '36px', md: '44px' }}
        color="maroon.100"
        opacity={0.55}
        transform="scaleX(-1)"
      />
      <Text
        color="gray.700"
        fontStyle="italic"
        lineHeight="1.75"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight="medium"
        flex="1"
      >
        &ldquo;{testimonial.quote}&rdquo;
      </Text>
      <Flex as="footer" align="center" gap={3} mt={6} pt={5} position="relative">
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        <Box
          borderRadius="full"
          p="2px"
          bgGradient="linear(to-br, maroon.400, forest.500)"
          flexShrink={0}
          boxShadow="0 4px 14px rgba(130, 0, 0, 0.28)"
        >
          <Flex
            align="center"
            justify="center"
            w={{ base: '40px', md: '44px' }}
            h={{ base: '40px', md: '44px' }}
            borderRadius="full"
            bg="white"
          >
            <Icon as={getRoleIcon(testimonial.role)} color="brand" fontSize={{ base: 'md', md: 'lg' }} />
          </Flex>
        </Box>
        <Box>
          <Text color="gray.800" fontWeight="700" fontSize={{ base: 'sm', md: 'md' }}>
            {testimonial.author}
          </Text>
          <Text color="brandStrong" fontWeight="600" fontSize={{ base: 'xs', md: 'sm' }}>
            {testimonial.role}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Testimonials = () => {
  const { content } = useWebsiteContent();
  const testimonials = content.testimonials;
  const reduceMotion = useReducedMotion();
  const isDesktop = useBreakpointValue({ base: false, md: true }) ?? false;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (reduceMotion || paused || isDesktop) return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduceMotion, paused, isDesktop, count]);

  return (
    <Box
      id="testimonials"
      py={{ base: 16, md: 24 }}
      px={4}
      bgGradient="linear(160deg, maroon.800 0%, maroon.500 55%, forest.800 100%)"
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="-60px" right="-60px" w="280px" h="280px" borderRadius="full" bg="cream.100" opacity={0.08} filter="blur(80px)" />
      <Box position="absolute" bottom="-70px" left="-70px" w="340px" h="340px" borderRadius="full" bg="forest.400" opacity={0.12} filter="blur(90px)" />

      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <VStack spacing={3} textAlign="center" mb={{ base: 10, md: 14 }}>
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.24em"
            textTransform="uppercase"
            color="cream.200"
          >
            Community Voices
          </Text>
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            color="onAccent"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            What People Say
          </Heading>
          <Box
            w="72px"
            h="1px"
            bgGradient="linear(to-r, transparent, cream.100, transparent)"
          />
          <Text color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} fontWeight="500">
            Hear from our community
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} display={{ base: 'none', md: 'grid' }}>
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.1} style={{ height: '100%' }}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </SimpleGrid>

        <Box
          display={{ base: 'block', md: 'none' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <Box position="relative" minH={{ base: '340px', sm: '300px' }} aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -48 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                drag={reduceMotion ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(1);
                  else if (info.offset.x > 60) go(-1);
                }}
              >
                <TestimonialCard testimonial={testimonials[active]} />
              </motion.div>
            </AnimatePresence>
          </Box>

          <Flex align="center" justify="center" gap={4} mt={6}>
            <IconButton
              aria-label="Previous testimonial"
              icon={<ChevronLeftIcon boxSize={6} />}
              onClick={() => go(-1)}
              isRound
              size="sm"
              bg="whiteAlpha.200"
              color="onAccent"
              _hover={{ bg: 'whiteAlpha.300' }}
            />
            <HStack spacing={2}>
              {testimonials.map((_, i) => (
                <Box
                  key={i}
                  as="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  w={i === active ? '22px' : '8px'}
                  h="8px"
                  borderRadius="full"
                  bg={i === active ? 'cream.100' : 'whiteAlpha.500'}
                  transition="all 0.25s ease"
                />
              ))}
            </HStack>
            <IconButton
              aria-label="Next testimonial"
              icon={<ChevronRightIcon boxSize={6} />}
              onClick={() => go(1)}
              isRound
              size="sm"
              bg="whiteAlpha.200"
              color="onAccent"
              _hover={{ bg: 'whiteAlpha.300' }}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;

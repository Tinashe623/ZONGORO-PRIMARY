import { useEffect, useRef, useState } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Image } from '@chakra-ui/react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: 1925, label: 'Founded', suffix: '' },
  { value: 9, label: 'Levels Taught (ECD to Grade 7)', suffix: '' },
  { value: 6, label: 'Modern Facilities', suffix: '' },
  { value: 17, label: `Moments Captured in ${new Date().getFullYear()}`, suffix: '' },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduceMotion]);

  return (
    <motion.span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

const SchoolStats = () => {
  return (
    <Box py={16} px={4} position="relative" overflow="hidden">
      <Image
        src="/images/new/01.webp"
        alt=""
        role="presentation"
        loading="lazy"
        decoding="async"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(135deg, rgba(38, 0, 0, 0.92) 0%, rgba(26, 4, 4, 0.86) 45%, rgba(9, 38, 27, 0.9) 100%)"
      />
      <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.12}>
        <Box position="absolute" top="-20%" right="-10%" w="400px" h="400px" borderRadius="full" bg="white" filter="blur(100px)" />
        <Box position="absolute" bottom="-30%" left="-10%" w="300px" h="300px" borderRadius="full" bg="forest.400" filter="blur(80px)" />
      </Box>

      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 8, md: 10 }}>
            {stats.map((stat) => (
              <VStack key={stat.label} spacing={2} textAlign="center">
                <Heading
                  fontSize={{ base: '4xl', md: '5xl' }}
                  color="onAccent"
                  fontWeight="800"
                  lineHeight="1"
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </Heading>
                <Text color="white" fontWeight="medium" fontSize={{ base: 'xs', md: 'sm' }}>
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SchoolStats;
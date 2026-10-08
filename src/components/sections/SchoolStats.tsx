import { useEffect, useRef, useState } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const stats = [
  { value: 1925, label: 'Founded', suffix: '' },
  { value: 9, label: 'Levels Taught (ECD to Grade 7)', suffix: '' },
  { value: 6, label: 'Modern Facilities', suffix: '' },
  { value: 17, label: 'Moments Captured in 2026', suffix: '' },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, value]);

  return (
    <motion.span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

const SchoolStats = () => {
  return (
    <Box bgGradient="linear(to-br, maroon.600, maroon.700)" py={16} px={4} position="relative" overflow="hidden">
      <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.12}>
        <Box position="absolute" top="-20%" right="-10%" w="400px" h="400px" borderRadius="full" bg="white" filter="blur(100px)" />
        <Box position="absolute" bottom="-30%" left="-10%" w="300px" h="300px" borderRadius="full" bg="forest.400" filter="blur(80px)" />
      </Box>

      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <ScrollReveal>
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
                <Text color="whiteAlpha.800" fontSize={{ base: 'xs', md: 'sm' }} fontWeight="500">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </ScrollReveal>
      </Box>
    </Box>
  );
};

export default SchoolStats;
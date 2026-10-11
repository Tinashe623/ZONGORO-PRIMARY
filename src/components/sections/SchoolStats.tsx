import { useEffect, useRef, useState } from 'react';
import { Box, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { FaChurch, FaLayerGroup, FaBuilding, FaCamera } from 'react-icons/fa';

const stats = [
  { value: 1925, label: 'Founded', suffix: '' },
  { value: 9, label: 'Levels Taught (ECD to Grade 7)', suffix: '' },
  { value: 6, label: 'Modern Facilities', suffix: '' },
  { value: 17, label: `Moments Captured in ${new Date().getFullYear()}`, suffix: '' },
];

const statIcons = [FaChurch, FaLayerGroup, FaBuilding, FaCamera];

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
    <Box py={{ base: 14, md: 20 }} px={4} position="relative" overflow="hidden">
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
        bgGradient="linear(135deg, rgba(64, 4, 10, 0.76) 0%, rgba(112, 14, 28, 0.52) 45%, rgba(9, 38, 27, 0.7) 100%)"
      />
      <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.18}>
        <Box position="absolute" top="-20%" right="-10%" w="400px" h="400px" borderRadius="full" bg="white" filter="blur(100px)" />
        <Box position="absolute" bottom="-30%" left="-10%" w="300px" h="300px" borderRadius="full" bg="forest.400" filter="blur(80px)" />
      </Box>

      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={{ base: 4, md: 6 }}>
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx];
            return (
              <Box
                key={stat.label}
                textAlign="center"
                p={{ base: 5, md: 8 }}
                rounded="2xl"
                border="1px solid"
                borderColor="whiteAlpha.300"
                bg="whiteAlpha.100"
                backdropFilter="blur(12px)"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
                boxShadow="0 8px 32px rgba(6, 18, 12, 0.28)"
                _hover={{
                  transform: 'translateY(-5px)',
                  borderColor: 'whiteAlpha.400',
                  bg: 'whiteAlpha.200',
                  boxShadow: '0 18px 44px rgba(6, 18, 12, 0.38)',
                }}
                transition="all 0.25s ease"
              >
                <Box
                  as="span"
                  w={{ base: '36px', md: '46px' }}
                  h={{ base: '36px', md: '46px' }}
                  mx="auto"
                  mb={{ base: 2.5, md: 4 }}
                  rounded="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="whiteAlpha.100"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  color="cream.200"
                  fontSize={{ base: '16px', md: '22px' }}
                >
                  <Icon size="1em" />
                </Box>
                <Text
                  as="span"
                  fontSize={{ base: '3xl', md: '5xl' }}
                  fontWeight="800"
                  lineHeight="1"
                  bgGradient="linear(to-b, cream.100, maroon.300)"
                  bgClip="text"
                  display="inline-block"
                >
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </Text>
                <Box
                  w="36px"
                  h="2px"
                  mx="auto"
                  mt={{ base: 2, md: 3 }}
                  rounded="full"
                  bgGradient="linear(to-r, maroon.300, forest.300)"
                />
                <Text
                  color="whiteAlpha.900"
                  fontWeight="medium"
                  fontSize={{ base: 'xs', md: 'sm' }}
                  mt={2}
                  lineHeight="1.45"
                >
                  {stat.label}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SchoolStats;
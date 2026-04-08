import { useRef } from 'react';
import { Box, SimpleGrid, Text, Flex } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

const MotionFlex = motion(Flex);

const MotionText = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  return (
    <Text
      fontSize="4xl"
      fontWeight="700"
      color="white"
    >
      {value}
      {suffix}
    </Text>
  );
};

const stats = [
  { value: 500, suffix: '+', label: 'Students Enrolled' },
  { value: 30, suffix: '+', label: 'Qualified Staff' },
  { value: 95, suffix: '%', label: 'Grade 7 Pass Rate' },
  { value: 39, suffix: '+', label: 'Years of Excellence' },
];

const StatsSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  return (
    <Box
      ref={containerRef}
      bgGradient="linear(135deg, maroon.500, maroon.700)"
      py={16}
      px={4}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.1}
        backgroundImage="radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 30%, white 1px, transparent 1px)"
        backgroundSize="60px 60px"
      />
      
      <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {stats.map((stat, index) => (
            <MotionFlex
              key={index}
              direction="column"
              align="center"
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {inView && <MotionText value={stat.value} suffix={stat.suffix} />}
              <Text color="whiteAlpha.900" fontSize="lg" fontWeight="500" mt={2}>
                {stat.label}
              </Text>
            </MotionFlex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StatsSection;
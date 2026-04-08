import { useRef, useEffect, useState } from 'react';
import { Box, SimpleGrid, Text, Flex, Icon, Heading } from '@chakra-ui/react';
import { useInView } from 'framer-motion';
import { FaSchool, FaChalkboardTeacher, FaGraduationCap, FaBible } from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: IconType;
}

const stats: StatItem[] = [
  { value: 500, suffix: '+', label: 'Students Enrolled', icon: FaSchool },
  { value: 30, suffix: '+', label: 'Qualified Staff', icon: FaChalkboardTeacher },
  { value: 95, suffix: '%', label: 'Grade 7 Pass Rate', icon: FaGraduationCap },
  { value: 100, suffix: '+', label: 'Years of Excellence', icon: FaBible },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <Heading size="xl" fontWeight="700" color="white">
      {count}{suffix}
    </Heading>
  );
};

const StatsSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  return (
    <Box
      ref={containerRef}
      bgGradient="linear(135deg, maroon.500 0%, maroon.700 100%)"
      py={16}
      px={4}
      position="relative"
      overflow="hidden"
      boxShadow="0 10px 40px rgba(128, 0, 32, 0.3)"
    >
      <Box
        position="absolute"
        top={-50}
        right={-50}
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
      />
      <Box
        position="absolute"
        bottom={-30}
        left={-30}
        w="150px"
        h="150px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.05)"
      />
      
      <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
          {stats.map((stat, index) => (
            <Flex key={index} direction="column" align="center" textAlign="center">
              <Flex
                align="center"
                justify="center"
                w="60px"
                h="60px"
                borderRadius="full"
                bg="rgba(255, 255, 255, 0.2)"
                mb={3}
              >
                <Icon as={stat.icon} color="white" fontSize="xl" />
              </Flex>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <Text color="whiteAlpha.900" fontSize="sm" fontWeight="500" mt={2}>
                {stat.label}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StatsSection;
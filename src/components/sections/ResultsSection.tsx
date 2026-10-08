import { useEffect, useState } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { gradeSevenResults } from '../../data/results';
import SectionHeading from '../ui/SectionHeading';

const ResultCard = ({ year, passRate, students }: { year: number; passRate: number; students: number }) => {
  const [displayRate, setDisplayRate] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayRate(passRate);
    }, 300);
    return () => clearTimeout(timer);
  }, [passRate]);

  return (
    <Card
      bg="white"
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      transition="all 0.3s ease"
      _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
    >
      <CardBody p={6}>
        <VStack spacing={4}>
          <Badge
            bg="maroon.500"
            color="onAccent"
            fontSize="lg"
            px={4}
            py={2}
            borderRadius="full"
          >
            {year}
          </Badge>
          <Flex align="baseline" gap={1}>
            <Heading size="3xl" color="maroon.500">
              {displayRate}%
            </Heading>
          </Flex>
          <Text color="gray.600" fontWeight="500">
            Pass Rate
          </Text>
          <Text color="gray.500" fontSize="sm">
            {students} students
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

const ResultsSection = () => {
  return (
    <Box id="results" bg="cream.50" py={20} px={4}>
      <Box maxW="1200px" mx="auto">
          <SectionHeading
            title="Grade 7 Results"
            subtitle="Consistent academic performance and improvement over the years"
          />

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {gradeSevenResults.map((result) => (
              <ResultCard key={result.year} {...result} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ResultsSection;
import { useEffect } from 'react';
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
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/ui/CTABanner';
import { gradeSevenResults } from '../data/results';

const ResultCard = ({ year, passRate, students }: { year: number; passRate: number; students: number }) => {
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
            color="white"
            fontSize="lg"
            px={4}
            py={2}
            borderRadius="full"
          >
            {year}
          </Badge>
          <Flex align="baseline" gap={1}>
            <Heading size="3xl" color="maroon.500">
              {passRate}%
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

const ResultsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const latestResult = gradeSevenResults[0];
  const averagePassRate = Math.round(
    gradeSevenResults.reduce((sum, r) => sum + r.passRate, 0) / gradeSevenResults.length
  );

  return (
    <Box>
      <PageHero 
        title="Grade 7 Results" 
        subtitle="Consistent academic excellence through the years"
      />
      
      <Box py={16} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <VStack spacing={8} maxW="800px" mx="auto" textAlign="center" mb={12}>
              <Heading size="lg" color="maroon.500">
                Academic Excellence
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                Our students have consistently achieved excellent results in the Grade 7 
                national examinations. We take pride in our strong pass rates and the 
                successful transition of our students to secondary education.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6}>
            {gradeSevenResults.map((result, index) => (
              <ScrollReveal key={result.year} delay={0.1 * index}>
                <ResultCard {...result} />
              </ScrollReveal>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Box py={16} px={4} bg="white">
        <Box maxW="800px" mx="auto">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <ScrollReveal>
              <Card bg="maroon.500" borderRadius="2xl" color="white">
                <CardBody p={8} textAlign="center">
                  <Heading size="3xl" mb={2}>{latestResult.passRate}%</Heading>
                  <Text fontSize="lg" fontWeight="500">Latest Pass Rate ({latestResult.year})</Text>
                  <Text mt={2} opacity={0.9}>{latestResult.students} students sat for exams</Text>
                </CardBody>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Card bg="forest.500" borderRadius="2xl" color="white">
                <CardBody p={8} textAlign="center">
                  <Heading size="3xl" mb={2}>{averagePassRate}%</Heading>
                  <Text fontSize="lg" fontWeight="500">6-Year Average Pass Rate</Text>
                  <Text mt={2} opacity={0.9}>Consistently above national average</Text>
                </CardBody>
              </Card>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      <CTABanner 
        title="Enroll Your Child Today" 
        subtitle="Give your child the opportunity to excel academically"
        buttonText="Apply Now"
        buttonLink="/admissions"
      />
    </Box>
  );
};

export default ResultsPage;
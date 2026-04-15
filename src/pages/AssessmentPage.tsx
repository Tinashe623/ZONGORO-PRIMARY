import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaUsers, FaChartLine, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { enrollmentData, passRateData, enrollmentComment, passRateComment } from '../data/assessment';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const MotionBox = motion(Box);

const AssessmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate stats dynamically from data
  const latestEnrollment = enrollmentData[0];
  const firstEnrollment = enrollmentData[enrollmentData.length - 1];
  const growthPercent = (((latestEnrollment.total - firstEnrollment.total) / firstEnrollment.total) * 100).toFixed(1);

  return (
    <Box>
      <PageHero
        title="Assessment & Analysis"
        subtitle="Comprehensive evaluation of school performance and growth"
      />

      {/* School Enrolment Section - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="maroon.500" fontWeight="700">
                School Enrolment
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                A comprehensive overview of student enrollment trends across all grades
              </Text>
            </VStack>
          </ScrollReveal>

          {/* Stats Row */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
            {[
              { icon: FaUsers, label: `Total Enrollment (${latestEnrollment.year})`, value: latestEnrollment.total.toString(), color: 'maroon.500' },
              { icon: FaArrowUp, label: `Growth since ${firstEnrollment.year}`, value: `${growthPercent}%`, color: parseFloat(growthPercent) >= 0 ? 'forest.500' : 'gray.500' },
              { icon: FaChartLine, label: 'Projected by 2028', value: '1000', color: 'forest.500' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Box
                  bg="white"
                  borderRadius="2xl"
                  p={6}
                  textAlign="center"
                  boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{ boxShadow: '0 8px 30px rgba(130,0,0,0.12)', transform: 'translateY(-2px)' }}
                  transition="all 0.3s ease"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="cream.50"
                    mx="auto"
                    mb={4}
                  >
                    <Icon as={stat.icon} color={stat.color} fontSize="xl" />
                  </Flex>
                  <Heading size="xl" color={stat.color} fontWeight="700">
                    {stat.value}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" mt={1}>
                    {stat.label}
                  </Text>
                </Box>
              </ScrollReveal>
            ))}
          </SimpleGrid>

          {/* Modern Table */}
          <ScrollReveal delay={0.2}>
            <Box
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 8px 30px rgba(0,0,0,0.1)"
              border="1px solid"
              borderColor="gray.100"
            >
              <Box
                bg="maroon.500"
                py={4}
                px={6}
              >
                <Heading size="md" color="white" fontWeight="600">
                  Enrollment by Year
                </Heading>
              </Box>
              <Box overflowX="auto">
                <Table variant="simple" size="lg">
                  <Thead>
                    <Tr bg="cream.50">
                      <Th
                        color="maroon.500"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        YEAR
                      </Th>
                      <Th
                        color="maroon.500"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        MALE
                      </Th>
                      <Th
                        color="maroon.500"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        FEMALE
                      </Th>
                      <Th
                        color="forest.500"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="forest.200"
                      >
                        TOTAL
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {enrollmentData.map((row, index) => (
                      <Tr
                        key={row.year}
                        _hover={{ bg: 'cream.50' }}
                        transition="all 0.2s ease"
                      >
                        <Td
                          textAlign="center"
                          fontWeight="600"
                          color="maroon.600"
                          py={4}
                          borderBottom="1px solid"
                          borderColor="gray.100"
                        >
                          {row.year}
                        </Td>
                        <Td
                          textAlign="center"
                          color="gray.700"
                          py={4}
                          borderBottom="1px solid"
                          borderColor="gray.100"
                        >
                          {row.male}
                        </Td>
                        <Td
                          textAlign="center"
                          color="gray.700"
                          py={4}
                          borderBottom="1px solid"
                          borderColor="gray.100"
                        >
                          {row.female}
                        </Td>
                        <Td
                          textAlign="center"
                          fontWeight="700"
                          color="forest.500"
                          bg={index === 0 ? 'forest.50' : 'transparent'}
                          py={4}
                          borderBottom="1px solid"
                          borderColor="gray.100"
                        >
                          {row.total}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </ScrollReveal>
        </Box>
      </Box>

      {/* Analysis Section - Maroon Background */}
      <Box py={20} px={4} bg="maroon.500" position="relative" overflow="hidden">
        {/* Animated Orbs */}
        <MotionBox
          position="absolute"
          top="-100px"
          right="-100px"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="rgba(255,255,255,0.03)"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <MotionBox
          position="absolute"
          bottom="-150px"
          left="-50px"
          w="400px"
          h="400px"
          borderRadius="full"
          bg="rgba(0,255,136,0.05)"
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <Box maxW="1000px" mx="auto" position="relative" zIndex={1}>
          <ScrollReveal>
            <VStack spacing={8} align="start">
              <Heading size="xl" color="white" fontWeight="700">
                Assessment and Analysis
              </Heading>

              <Box
                bg="white"
                borderRadius="2xl"
                p={8}
                w="100%"
                boxShadow="0 8px 30px rgba(0,0,0,0.2)"
                borderLeft="4px solid"
                borderLeftColor="forest.500"
              >
                <Heading size="md" color="maroon.600" mb={4}>
                  3.1 School Enrolment
                </Heading>
                <Text
                  color="gray.700"
                  lineHeight="2"
                  fontSize="md"
                  whiteSpace="pre-line"
                >
{`This document contains an assessment and analysis of St James Zongoro Primary School, specifically focusing on enrollment trends and academic performance.

${enrollmentComment}`}
                </Text>
              </Box>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>

      {/* ZIMSEC Pass Rate Section - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="maroon.500" fontWeight="700">
                ZIMSEC National Grade 7 Pass-rate
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                Consistent academic performance and improvement over the years
              </Text>
            </VStack>
          </ScrollReveal>

          {/* Pass Rate Table */}
          <ScrollReveal delay={0.1}>
            <Box
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 8px 30px rgba(0,0,0,0.1)"
              border="1px solid"
              borderColor="gray.100"
              maxW="800px"
              mx="auto"
            >
              <Box
                bgGradient="linear(to-r, forest.500, forest.600)"
                py={4}
                px={6}
              >
                <Heading size="md" color="white" fontWeight="600">
                  Pass Rate Trends
                </Heading>
              </Box>
              <Box overflowX="auto">
                <Table variant="simple" size="lg">
                  <Thead>
                    <Tr bg="cream.50">
                      <Th
                        color="maroon.500"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        YEAR
                      </Th>
                      <Th
                        color="forest.500"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="forest.200"
                      >
                        PASS-RATE (%)
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {passRateData.map((row, index) => (
                      <Tr
                        key={row.year}
                        _hover={{ bg: 'cream.50' }}
                        transition="all 0.2s ease"
                      >
                        <Td
                          textAlign="center"
                          fontWeight="600"
                          color="maroon.600"
                          py={4}
                          borderBottom="1px solid"
                          borderColor="gray.100"
                        >
                          {row.year}
                        </Td>
                        <Td
                          textAlign="center"
                          fontWeight="700"
                          color={row.rate >= 80 ? 'forest.500' : row.rate >= 70 ? 'maroon.500' : 'gray.600'}
                          bg={index === 0 ? row.rate >= 80 ? 'forest.50' : 'transparent' : 'transparent'}
                          py={4}
                          borderBottom="1px solid"
                          borderColor="gray.100"
                        >
                          {row.rate}%
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </ScrollReveal>

          {/* Analysis Comment */}
          <ScrollReveal delay={0.2}>
            <Box
              bg="white"
              borderRadius="2xl"
              p={8}
              mt={12}
              boxShadow="0 8px 30px rgba(0,0,0,0.2)"
              borderLeft="4px solid"
              borderLeftColor="forest.500"
              maxW="1000px"
              mx="auto"
            >
              <Heading size="md" color="forest.600" mb={4}>
                3.2 ZIMSEC National Grade 7 Pass-rate
              </Heading>
              <Text
                color="gray.700"
                lineHeight="2"
                fontSize="md"
                whiteSpace="pre-line"
              >
{passRateComment}
              </Text>
            </Box>
          </ScrollReveal>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        py={20}
        px={4}
        bgGradient="linear(135deg, forest.500 0%, forest.600 100%)"
        position="relative"
        overflow="hidden"
      >
        <MotionBox
          position="absolute"
          top="-80px"
          right="-80px"
          w="250px"
          h="250px"
          borderRadius="full"
          bg="rgba(255,255,255,0.05)"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <MotionBox
          position="absolute"
          bottom="-100px"
          left="-50px"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="rgba(130,0,0,0.1)"
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <Box maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <VStack spacing={6}>
            <Heading size="2xl" color="white" fontWeight="700">
              Join Our Learning Community
            </Heading>
            <Text color="whiteAlpha.900" fontSize="lg" maxW="600px" lineHeight="1.8">
              Enroll your child at St James Zongoro Primary School and give them
              the opportunity to excel academically and grow in faith.
            </Text>
            <Flex gap={4} mt={4} direction={{ base: 'column', md: 'row' }}>
              <Button
                as="a"
                href="/admissions"
                bg="white"
                color="forest.500"
                size="lg"
                px={10}
                fontWeight="700"
                borderRadius="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                transition="all 0.3s ease"
              >
                Apply Now
              </Button>
              <Button
                as="a"
                href="/contact"
                bg="transparent"
                color="white"
                size="lg"
                px={10}
                fontWeight="700"
                borderRadius="full"
                border="2px solid"
                borderColor="whiteAlpha.400"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
                transition="all 0.3s ease"
              >
                Contact Us
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default AssessmentPage;
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
import PageHero from '../components/ui/PageHero';
import EnrollButton from '../components/ui/EnrollButton';
import { useWebsiteContent } from '../context/WebsiteContentContext';
import { useBlock } from '../lib/blocks';
import { assessmentPageBlock, type AssessmentPageBlock } from '../data/blocks/assessmentPage';

const MotionBox = motion(Box);

const AssessmentPage = () => {
  const { content } = useWebsiteContent();
  const block = useBlock<AssessmentPageBlock>('pages.assessment', assessmentPageBlock);
  const {
    enrollment: enrollmentData,
    passRates: passRateData,
    enrollmentComment,
    passRateComment,
  } = content.results;

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
        title={block.hero.title}
        subtitle={block.hero.subtitle}
        image={block.hero.image}
        imageAlt={block.hero.imageAlt}
      />

      {/* School Enrolment Section - Cream Background */}
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="brand" fontWeight="700">
                {block.enrollment.heading}
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                {block.enrollment.subtitle}
              </Text>
            </VStack>

          {/* Stats Row */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={12}>
            {[
              { icon: FaUsers, label: `${block.enrollment.stats.totalLabel} (${latestEnrollment.year})`, value: latestEnrollment.total.toString(), color: 'brand' },
              { icon: FaArrowUp, label: `${block.enrollment.stats.growthLabel} ${firstEnrollment.year}`, value: `${growthPercent}%`, color: parseFloat(growthPercent) >= 0 ? 'forest.500' : 'gray.500' },
              { icon: FaChartLine, label: block.enrollment.stats.projectedLabel, value: block.enrollment.stats.projectedValue, color: 'brandGreen' },
            ].map((stat, index) => (
                <Box key={index}
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
            ))}
          </SimpleGrid>

          {/* Modern Table */}
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
                <Heading size="md" color="onAccent" fontWeight="600">
                  {block.enrollment.table.heading}
                </Heading>
              </Box>
              <Box overflowX="auto">
                <Table variant="simple" size="lg">
                  <Thead>
                    <Tr bg="cream.50">
                      <Th
                        color="brand"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        {block.enrollment.table.columns.year}
                      </Th>
                      <Th
                        color="brand"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        {block.enrollment.table.columns.male}
                      </Th>
                      <Th
                        color="brand"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        {block.enrollment.table.columns.female}
                      </Th>
                      <Th
                        color="brandGreen"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="forest.200"
                      >
                        {block.enrollment.table.columns.total}
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
                          color="brandStrong"
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
                          color="brandGreen"
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
        </Box>
      </Box>

      {/* Analysis Section - Maroon Background */}
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="maroon.500" position="relative" overflow="hidden">
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
          bg="rgba(45,106,79,0.05)"
          animate={{ scale: [1.1, 1, 1.1], rotate: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
            <VStack spacing={8} align="start">
              <Heading size="xl" color="onAccent" fontWeight="700">
                {block.analysis.heading}
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
                <Heading size="md" color="brandStrong" mb={4}>
                  {block.analysis.cardHeading}
                </Heading>
                <Text
                  color="gray.700"
                  lineHeight="2"
                  fontSize="md"
                  whiteSpace="pre-line"
                >
{`${block.analysis.intro}

${enrollmentComment}`}
                </Text>
              </Box>
            </VStack>
        </Box>
      </Box>

      {/* ZIMSEC Pass Rate Section - Cream Background */}
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="brand" fontWeight="700">
                {block.passRate.heading}
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                {block.passRate.subtitle}
              </Text>
            </VStack>

          {/* Pass Rate Table */}
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
                <Heading size="md" color="onAccent" fontWeight="600">
                  {block.passRate.tableHeading}
                </Heading>
              </Box>
              <Box overflowX="auto">
                <Table variant="simple" size="lg">
                  <Thead>
                    <Tr bg="cream.50">
                      <Th
                        color="brand"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="maroon.200"
                      >
                        {block.passRate.columns.year}
                      </Th>
                      <Th
                        color="brandGreen"
                        fontWeight="700"
                        fontSize="md"
                        py={4}
                        textAlign="center"
                        borderBottom="2px solid"
                        borderColor="forest.200"
                      >
                        {block.passRate.columns.rate}
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
                          color="brandStrong"
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

          {/* Analysis Comment */}
            <Box
              bg="white"
              borderRadius="2xl"
              p={8}
              mt={12}
              boxShadow="0 8px 30px rgba(0,0,0,0.2)"
              borderLeft="4px solid"
              borderLeftColor="forest.500"
              maxW="1200px"
              mx="auto"
            >
              <Heading size="md" color="brandGreenStrong" mb={4}>
                {block.passRate.cardHeading}
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
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        py={{ base: 'sectionTight', md: 'section' }}
        px={4}
        bg="maroon.600"
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
            <Heading size="2xl" color="onAccent" fontWeight="700">
              {block.cta.heading}
            </Heading>
            <Text color="whiteAlpha.900" fontSize="lg" maxW="600px" lineHeight="1.8">
              {block.cta.subtitle}
            </Text>
            <Flex gap={4} mt={4} direction={{ base: 'column', md: 'row' }}>
              <EnrollButton
                size="lg"
                px={10}
                fontWeight="700"
              >
                {block.cta.primaryButtonText}
              </EnrollButton>
              <Button
                as="a"
                href={block.cta.secondaryButtonLink}
                bg="transparent"
                color="onAccent"
                size="lg"
                px={10}
                fontWeight="700"
                borderRadius="full"
                border="2px solid"
                borderColor="whiteAlpha.400"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'onAccent' }}
                transition="all 0.3s ease"
              >
                {block.cta.secondaryButtonText}
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default AssessmentPage;
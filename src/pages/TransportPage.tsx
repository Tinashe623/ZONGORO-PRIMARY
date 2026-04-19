import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, List, ListItem, ListIcon, Icon, Image, Flex, Button, Badge } from '@chakra-ui/react';
import { FaBus, FaCheckCircle, FaClock, FaShieldAlt, FaPhone, FaCalendarAlt, FaMapMarkedAlt, FaUsers, FaArrowRight } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const features = [
  {
    icon: FaBus,
    title: '72-Seater Capacity',
    description: 'Spacious 2025 bus seating up to 72 passengers with comfortable seating.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Event Transportation',
    description: 'Specialized transport for sports, trips, church events, and school activities.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safety First',
    description: 'Professional drivers, safety equipment, and full insurance coverage.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Flexible Hiring',
    description: 'Available for hire by schools, churches, and organizations across Zimbabwe.',
  },
];

const services = [
  'School sports team transportation to competitions',
  'Educational trips and excursions',
  'Church and community group travel',
  'Private hire for events and functions',
  'Inter-city and regional travel available',
  'Professional driver and fuel included',
];

const hireInfo = [
  { label: 'Year Acquired', value: '2025', icon: FaCalendarAlt },
  { label: 'Availability', value: 'Open for Hire', icon: FaClock },
  { label: 'Service Area', value: 'Nationwide - Zimbabwe', icon: FaMapMarkedAlt },
  { label: 'Capacity', value: '72 Passengers', icon: FaUsers },
];

const TransportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero
        title="School Transport & Bus Hire"
        subtitle="Modern bus services for school activities, events, and private hire across Zimbabwe"
      />

      {/* Introduction - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <ScrollReveal>
              <VStack align="start" spacing={6}>
                <Heading size="2xl" color="maroon.500" fontWeight="700">
                  Transport Services for All Occasions
                </Heading>
                <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                  St James Zongoro Primary School operates a 72-seater bus acquired in 2025,
                  providing professional transportation services for school sports events, educational
                  trips, church outings, and community activities. The bus is also available for hire
                  by schools, churches, and organizations throughout Zimbabwe.
                </Text>

                <List spacing={4} pt={4} w="100%">
                  {services.map((service, index) => (
                    <ListItem key={index} display="flex" alignItems="center" p={3} bg="white" borderRadius="xl" _hover={{ transform: 'translateX(4px)' }} transition="all 0.2s ease">
                      <ListIcon as={FaCheckCircle} color="forest.500" fontSize="lg" />
                      <Text color="gray.700" fontSize="md" fontWeight="500">{service}</Text>
                    </ListItem>
                  ))}
                </List>
              </VStack>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Box
                position="relative"
              >
                <Image
                  src="/images/school-bus.png"
                  alt="St James Zongoro School Bus - Available for Hire"
                  w="100%"
                  h={{ base: "280px", md: "380px" }}
                  objectFit="contain"
                  objectPosition="top right"
                />
              </Box>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Features - White Background */}
      <Box py={{ base: 12, md: 16 }} px={4}>
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="maroon.500" fontWeight="700">
                Why Choose Our Transport Services
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                Professional transportation for school events, sports, and private hire across Zimbabwe.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Box
                  bg="white"
                  p={8}
                  borderRadius="2xl"
                  boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  textAlign="center"
                  _hover={{ transform: 'translateY(-6px)', boxShadow: '0 15px 50px rgba(130,0,0,0.15)', borderColor: 'maroon.200' }}
                  transition="all 0.3s ease"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w="70px"
                    h="70px"
                    borderRadius="2xl"
                    bg="maroon.500"
                    boxShadow="0 6px 20px rgba(128, 0, 32, 0.3)"
                    mx="auto"
                    mb={5}
                  >
                    <Icon as={feature.icon} color="white" fontSize="2xl" />
                  </Flex>
                  <Heading size="md" color="dark.500" fontWeight="700" mb={3}>
                    {feature.title}
                  </Heading>
                  <Text color="gray.600" fontSize="md" lineHeight="1.7">
                    {feature.description}
                  </Text>
                </Box>
              </ScrollReveal>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Bus Hire Info Section */}
      <Box py={{ base: 12, md: 16 }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="maroon.500" fontWeight="700">
                Bus Hire Services
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                Our modern bus is available for hire by schools, churches, organizations, and private groups throughout Zimbabwe.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <ScrollReveal delay={0.1}>
              <Box
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                border="1px solid"
                borderColor="gray.100"
              >
                <VStack align="start" spacing={5}>
                  <Flex align="center" gap={3}>
                    <Box w="12" h="1" bg="maroon.500" borderRadius="full" />
                    <Heading size="lg" color="maroon.600" fontWeight="700">
                      Fleet Details
                    </Heading>
                  </Flex>
                  <SimpleGrid columns={2} spacing={4} w="100%">
                    {hireInfo.map((item, idx) => (
                      <Box key={idx}>
                        <Flex align="center" gap={2} mb={2}>
                          <Icon as={item.icon} color="maroon.500" fontSize="md" />
                          <Text fontSize="sm" fontWeight="600" color="gray.500" textTransform="uppercase" letterSpacing="0.5px">
                            {item.label}
                          </Text>
                        </Flex>
                        <Text fontSize="lg" fontWeight="700" color="maroon.600">
                          {item.value}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Box
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="2xl"
                boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                border="1px solid"
                borderColor="gray.100"
              >
                <VStack align="start" spacing={5}>
                  <Badge bg="forest.500" color="white" fontWeight="700" fontSize="sm" px={3} py={1} borderRadius="full">
                    Hire Conditions
                  </Badge>
                  <Text color="gray.600" fontSize="md" lineHeight="1.8">
                    Our bus hire services are available for:
                  </Text>
                  <VStack align="start" spacing={3}>
                    {[
                      'School sporting events and competitions',
                      'Educational excursions and field trips',
                      'Church conferences, retreats, and outings',
                      'Corporate events and team building',
                      'Private group tours and travel',
                    ].map((condition, idx) => (
                      <Flex key={idx} align="center" gap={3}>
                        <Box w="2" h="2" borderRadius="full" bg="forest.500" />
                        <Text color="gray.700" fontSize="md">{condition}</Text>
                      </Flex>
                    ))}
                  </VStack>
                  <Text color="gray.500" fontSize="sm" mt={2}>
                    * Professional driver and fuel charges included in hire rates. Contact us for a customized quote.
                  </Text>
                </VStack>
              </Box>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      {/* CTA Section - Maroon Background */}
      <Box
        py={{ base: 12, md: 16 }}
        px={4}
        bg="maroon.500"
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top="-50%"
          right="-10%"
          w="350px"
          h="350px"
          borderRadius="full"
          bg="rgba(255,255,255,0.03)"
        />
        <Box
          position="absolute"
          bottom="-30%"
          left="-10%"
          w="300px"
          h="300px"
          borderRadius="full"
          bg="rgba(0,255,136,0.05)"
        />

        <Box maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <VStack spacing={6}>
            <Heading size="2xl" color="white" fontWeight="700">
              Book Our Bus for Your Next Event
            </Heading>
            <Text color="whiteAlpha.900" fontSize="lg" maxW="600px" lineHeight="1.8">
              Available for hire across Zimbabwe for school sports, trips, church events, and organizational functions.
              Contact us for rates and availability.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              bg="forest.500"
              color="white"
              size="lg"
              px={10}
              fontWeight="700"
              borderRadius="full"
              leftIcon={<FaPhone />}
              _hover={{ bg: 'forest.600', transform: 'translateY(-2px)', boxShadow: '0 10px 30px rgba(0,255,136,0.3)' }}
              transition="all 0.3s ease"
            >
              Enquire Now
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default TransportPage;
import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  Image,
  Flex,
  Button,
  Badge,
  HStack,
} from '@chakra-ui/react';
import {
  FaBus,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaUsers,
} from 'react-icons/fa';
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
  { label: 'Service Area', value: 'Nationwide', icon: FaMapMarkedAlt },
  { label: 'Capacity', value: '72 Passengers', icon: FaUsers },
];

const TransportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero
        title="School Transport"
        subtitle="Safe and reliable bus services for our students"
      />

      {/* ── Introduction Section ───────────────────────────────────── */}
      <Box py={{ base: 10, md: 16, lg: 20 }} px={{ base: 4, md: 6, lg: 8 }} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10, lg: 16 }}
            alignItems="center"
          >
            {/* Text column */}
            <ScrollReveal>
              <VStack align="start" spacing={{ base: 4, md: 6 }}>
                <Badge
                  bg="maroon.500"
                  color="white"
                  fontSize="xs"
                  fontWeight="700"
                  px={3}
                  py={1}
                  borderRadius="full"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                >
                  Est. 2025 Fleet
                </Badge>

                <Heading
                  size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  color="maroon.500"
                  fontWeight="700"
                  lineHeight="1.2"
                >
                  Transport Services for All Occasions
                </Heading>

                <Text
                  color="gray.600"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  lineHeight="1.9"
                >
                  St James Zongoro Primary School operates a 72-seater bus acquired in 2025,
                  providing professional transportation services for school sports events,
                  educational trips, church outings, and community activities. The bus is also
                  available for hire by schools, churches, and organizations throughout Zimbabwe.
                </Text>

                <List spacing={{ base: 2, md: 3 }} pt={1} w="100%">
                  {services.map((service, index) => (
                    <ListItem
                      key={index}
                      display="flex"
                      alignItems="center"
                      px={{ base: 3, md: 4 }}
                      py={{ base: 2, md: 3 }}
                      bg="white"
                      borderRadius="xl"
                      boxShadow="0 2px 8px rgba(0,0,0,0.05)"
                      border="1px solid"
                      borderColor="gray.100"
                      _hover={{
                        transform: 'translateX(6px)',
                        borderColor: 'maroon.200',
                        boxShadow: '0 4px 16px rgba(130,0,0,0.08)',
                      }}
                      transition="all 0.25s ease"
                    >
                      <ListIcon
                        as={FaCheckCircle}
                        color="forest.500"
                        fontSize={{ base: 'md', md: 'lg' }}
                        flexShrink={0}
                        mr={2}
                      />
                      <Text
                        color="gray.700"
                        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                        fontWeight="500"
                      >
                        {service}
                      </Text>
                    </ListItem>
                  ))}
                </List>
              </VStack>
            </ScrollReveal>

            {/* Image column */}
            <ScrollReveal delay={0.2}>
              <Box position="relative" mt={{ base: 2, lg: 0 }}>
                {/* Decorative background blob */}
                <Box
                  position="absolute"
                  inset={{ base: '-8px', md: '-12px' }}
                  borderRadius="3xl"
                  bgGradient="linear(135deg, maroon.50, cream.100)"
                  zIndex={0}
                />

                {/* Image card */}
                <Box
                  position="relative"
                  zIndex={1}
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="0 20px 60px rgba(130,0,0,0.15)"
                  bg="white"
                >
                  {/* Responsive aspect-ratio wrapper */}
                  <Box
                    position="relative"
                    w="100%"
                    pt={{ base: '62%', sm: '56%', md: '50%', lg: '52%' }}
                    overflow="hidden"
                  >
                    <Image
                      src="/images/school-bus.jpg"
                      alt="St James Zongoro School Bus – Available for Hire"
                      position="absolute"
                      top="0"
                      left="0"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      objectPosition="center"
                    />
                    {/* Gradient overlay */}
                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      h="40%"
                      bgGradient="linear(to-t, blackAlpha.500, transparent)"
                      pointerEvents="none"
                    />
                  </Box>

                  {/* Caption strip */}
                  <Flex
                    align="center"
                    justify="space-between"
                    px={{ base: 4, md: 6 }}
                    py={{ base: 3, md: 4 }}
                    bg="white"
                    borderTop="1px solid"
                    borderColor="gray.100"
                    flexWrap="wrap"
                    gap={2}
                  >
                    <HStack spacing={2}>
                      <Icon as={FaBus} color="maroon.500" fontSize={{ base: 'sm', md: 'md' }} />
                      <Text
                        fontWeight="700"
                        color="dark.500"
                        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                      >
                        2025 School Bus
                      </Text>
                    </HStack>
                    <Badge
                      colorScheme="green"
                      borderRadius="full"
                      px={3}
                      py={1}
                      fontSize="xs"
                      fontWeight="700"
                    >
                      Available for Hire
                    </Badge>
                  </Flex>
                </Box>
              </Box>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      {/* ── Features Section ──────────────────────────────────────── */}
      <Box py={{ base: 10, md: 16, lg: 20 }} px={{ base: 4, md: 6, lg: 8 }} bg="white">
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={{ base: 3, md: 4 }} textAlign="center" mb={{ base: 8, md: 12, lg: 16 }}>
              <Heading
                size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="maroon.500"
                fontWeight="700"
              >
                Why Choose Our Transport Services
              </Heading>
              <Text
                color="gray.600"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                maxW="680px"
                lineHeight="1.8"
              >
                Professional transportation for school events, sports, and private hire across Zimbabwe.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
          >
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Flex
                  direction="column"
                  align="center"
                  bg="white"
                  p={{ base: 5, md: 6, lg: 8 }}
                  borderRadius="2xl"
                  boxShadow="0 4px 20px rgba(0,0,0,0.07)"
                  border="1px solid"
                  borderColor="gray.100"
                  textAlign="center"
                  minH={{ base: 'auto', sm: '220px' }}
                  _hover={{
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 50px rgba(130,0,0,0.14)',
                    borderColor: 'maroon.200',
                  }}
                  transition="all 0.3s ease"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w={{ base: '56px', md: '64px', lg: '70px' }}
                    h={{ base: '56px', md: '64px', lg: '70px' }}
                    borderRadius="2xl"
                    bgGradient="linear(135deg, maroon.500, maroon.700)"
                    boxShadow="0 6px 20px rgba(128,0,32,0.3)"
                    mb={{ base: 4, md: 5 }}
                    flexShrink={0}
                  >
                    <Icon
                      as={feature.icon}
                      color="white"
                      fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    />
                  </Flex>
                  <Heading
                    size={{ base: 'sm', md: 'md' }}
                    color="dark.500"
                    fontWeight="700"
                    mb={3}
                  >
                    {feature.title}
                  </Heading>
                  <Text
                    color="gray.600"
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight="1.7"
                  >
                    {feature.description}
                  </Text>
                </Flex>
              </ScrollReveal>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* ── Bus Hire Services Section ─────────────────────────────── */}
      <Box py={{ base: 10, md: 16, lg: 20 }} px={{ base: 4, md: 6, lg: 8 }} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={{ base: 3, md: 4 }} textAlign="center" mb={{ base: 8, md: 12, lg: 16 }}>
              <Heading
                size={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="maroon.500"
                fontWeight="700"
              >
                Bus Hire Services
              </Heading>
              <Text
                color="gray.600"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                maxW="680px"
                lineHeight="1.8"
              >
                Our modern bus is available for hire by schools, churches, organizations, and
                private groups throughout Zimbabwe.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6, lg: 8 }}>

            {/* Fleet details card */}
            <ScrollReveal delay={0.1}>
              <Box
                bg="white"
                p={{ base: 5, md: 6, lg: 8 }}
                borderRadius="2xl"
                boxShadow="0 8px 30px rgba(0,0,0,0.08)"
                border="1px solid"
                borderColor="gray.100"
              >
                <VStack align="start" spacing={{ base: 4, md: 6 }}>
                  <Heading
                      size={{ base: 'md', md: 'lg' }}
                      color="maroon.600"
                      fontWeight="700"
                    >
                      Fleet Details
                    </Heading>

                  {/* Stats grid: 1 col on xs, 2 cols from sm up */}
                  <SimpleGrid
                    columns={{ base: 1, sm: 2 }}
                    spacing={{ base: 3, md: 4 }}
                    w="100%"
                  >
                    {hireInfo.map((item, idx) => (
                      <Box
                        key={idx}
                        p={{ base: 3, md: 4 }}
                        bg="cream.50"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.100"
                      >
                        <Flex align="center" gap={2} mb={1} flexWrap="wrap">
                          <Icon as={item.icon} color="maroon.500" fontSize="sm" flexShrink={0} />
                          <Text
                            fontSize="xs"
                            fontWeight="600"
                            color="gray.400"
                            textTransform="uppercase"
                            letterSpacing="0.06em"
                          >
                            {item.label}
                          </Text>
                        </Flex>
                        <Text
                          fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                          fontWeight="700"
                          color="maroon.600"
                        >
                          {item.value}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </ScrollReveal>

            {/* Hire conditions card */}
            <ScrollReveal delay={0.2}>
              <Box
                bg="white"
                p={{ base: 5, md: 6, lg: 8 }}
                borderRadius="2xl"
                boxShadow="0 8px 30px rgba(0,0,0,0.08)"
                border="1px solid"
                borderColor="gray.100"
              >
                <VStack align="start" spacing={{ base: 4, md: 5 }}>
                  <Badge
                    bg="forest.500"
                    color="white"
                    fontWeight="700"
                    fontSize={{ base: 'xs', md: 'sm' }}
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    Hire Conditions
                  </Badge>

                  <Text
                    color="gray.600"
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight="1.8"
                  >
                    Our bus hire services are available for:
                  </Text>

                  <VStack align="start" spacing={{ base: 2, md: 3 }} w="100%">
                    {[
                      'School sporting events and competitions',
                      'Educational excursions and field trips',
                      'Church conferences, retreats, and outings',
                      'Corporate events and team building',
                      'Private group tours and travel',
                    ].map((condition, idx) => (
                      <Flex key={idx} align="flex-start" gap={3}>
                        <Box
                          w="8px"
                          h="8px"
                          borderRadius="full"
                          bg="forest.500"
                          flexShrink={0}
                          mt="6px"
                        />
                        <Text
                          color="gray.700"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.6"
                        >
                          {condition}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>

                  <Box
                    w="100%"
                    p={{ base: 3, md: 4 }}
                    bg="cream.50"
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.100"
                  >
                    <Text
                      color="gray.500"
                      fontSize={{ base: 'xs', md: 'sm' }}
                      lineHeight="1.7"
                    >
                      ✦ Professional driver and fuel charges included in hire rates. Contact us
                      for a customized quote.
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </ScrollReveal>

          </SimpleGrid>
        </Box>
      </Box>

      {/* ── CTA Section ───────────────────────────────────────────── */}
      <Box
        py={{ base: 12, md: 20, lg: 24 }}
        px={{ base: 4, md: 6, lg: 8 }}
        bg="maroon.500"
        position="relative"
        overflow="hidden"
      >
        {/* Decorative circles */}
        <Box
          position="absolute"
          top="-40%"
          right="-8%"
          w={{ base: '180px', sm: '250px', md: '380px' }}
          h={{ base: '180px', sm: '250px', md: '380px' }}
          borderRadius="full"
          bg="rgba(255,255,255,0.04)"
          pointerEvents="none"
        />
        <Box
          position="absolute"
          bottom="-35%"
          left="-8%"
          w={{ base: '160px', sm: '220px', md: '320px' }}
          h={{ base: '160px', sm: '220px', md: '320px' }}
          borderRadius="full"
          bg="rgba(0,255,136,0.06)"
          pointerEvents="none"
        />

        <Box maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <VStack spacing={{ base: 4, md: 6, lg: 7 }}>
            <Badge
              bg="whiteAlpha.200"
              color="whiteAlpha.900"
              fontSize="xs"
              fontWeight="700"
              px={4}
              py={1}
              borderRadius="full"
              letterSpacing="0.1em"
              textTransform="uppercase"
            >
              Open for Bookings
            </Badge>

            <Heading
              size={{ base: 'lg', md: 'xl', lg: '2xl' }}
              color="white"
              fontWeight="700"
              lineHeight="1.2"
            >
              Book Our Bus for Your Next Event
            </Heading>

            <Text
              color="whiteAlpha.900"
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              maxW="560px"
              lineHeight="1.8"
              px={{ base: 2, md: 0 }}
            >
              Available for hire across Zimbabwe for school sports, trips, church events, and
              organizational functions. Contact us for rates and availability.
            </Text>

            <Button
              as={RouterLink}
              to="/contact"
              bg="forest.500"
              color="white"
              size={{ base: 'md', md: 'lg' }}
              w={{ base: 'full', sm: 'auto' }}
              maxW={{ base: '320px', sm: 'none' }}
              px={{ base: 8, md: 10 }}
              fontWeight="700"
              borderRadius="full"
              leftIcon={<FaPhone />}
              _hover={{
                bg: 'forest.600',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 35px rgba(0,200,100,0.4)',
              }}
              transition="all 0.3s ease"
              mt={{ base: 1, md: 2 }}
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
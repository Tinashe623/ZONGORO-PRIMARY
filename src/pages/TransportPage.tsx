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
import { useBlock } from '../lib/blocks';
import { getWebsiteIcon } from '../lib/websiteIcons';
import { transportBlock, type TransportBlock } from '../data/blocks/transport';

const featureIconFallbacks = [FaBus, FaMapMarkedAlt, FaShieldAlt, FaCalendarAlt];
const hireIconFallbacks = [FaCalendarAlt, FaClock, FaMapMarkedAlt, FaUsers];

const TransportPage = () => {
  const block = useBlock<TransportBlock>('pages.transport', transportBlock);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero
        title={block.hero.title}
        subtitle={block.hero.subtitle}
        image={block.hero.image}
        imageAlt={block.hero.imageAlt}
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
              <VStack align="start" spacing={{ base: 4, md: 6 }}>
                <Badge
                  bg="maroon.500"
                  color="onAccent"
                  fontSize="xs"
                  fontWeight="700"
                  px={3}
                  py={1}
                  borderRadius="full"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                >
                  {block.intro.badge}
                </Badge>

                <Heading
                  fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                  color="brand"
                  fontWeight="700"
                  lineHeight="1.2"
                >
                  {block.intro.heading}
                </Heading>

                <Text
                  color="gray.600"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  lineHeight="1.9"
                >
                  {block.intro.paragraph}
                </Text>

                <List spacing={{ base: 2, md: 3 }} pt={1} w="100%">
                  {block.intro.services.map((service, index) => (
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
                        color="brandGreen"
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

            {/* Image column */}
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
                      src={block.intro.image}
                      alt={block.intro.imageAlt}
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
                      <Icon as={FaBus} color="brand" fontSize={{ base: 'sm', md: 'md' }} />
                      <Text
                        fontWeight="700"
                        color="dark.500"
                        fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                      >
                        {block.intro.caption}
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
                      {block.intro.availableBadge}
                    </Badge>
                  </Flex>
                </Box>
              </Box>
          </SimpleGrid>
        </Box>
      </Box>

      {/* ── Features Section ──────────────────────────────────────── */}
      <Box py={{ base: 10, md: 16, lg: 20 }} px={{ base: 4, md: 6, lg: 8 }} bg="white">
        <Box maxW="1200px" mx="auto">
            <VStack spacing={{ base: 3, md: 4 }} textAlign="center" mb={{ base: 8, md: 12, lg: 16 }}>
              <Heading
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="brand"
                fontWeight="700"
              >
                {block.features.heading}
              </Heading>
              <Text
                color="gray.600"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                maxW="680px"
                lineHeight="1.8"
              >
                {block.features.subtitle}
              </Text>
            </VStack>

          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
          >
            {block.features.items.map((feature, index) => (
                <Flex key={index}
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
                    boxShadow="0 6px 20px rgba(130, 0, 0,0.3)"
                    mb={{ base: 4, md: 5 }}
                    flexShrink={0}
                  >
                    <Icon
                      as={getWebsiteIcon(feature.icon, featureIconFallbacks[index] ?? FaBus)}
                      color="onAccent"
                      fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                    />
                  </Flex>
                  <Heading
                    fontSize={{ base: 'sm', md: 'md' }}
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
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* ── Bus Hire Services Section ─────────────────────────────── */}
      <Box py={{ base: 10, md: 16, lg: 20 }} px={{ base: 4, md: 6, lg: 8 }} bg="cream.50">
        <Box maxW="1200px" mx="auto">
            <VStack spacing={{ base: 3, md: 4 }} textAlign="center" mb={{ base: 8, md: 12, lg: 16 }}>
              <Heading
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="brand"
                fontWeight="700"
              >
                {block.hire.heading}
              </Heading>
              <Text
                color="gray.600"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                maxW="680px"
                lineHeight="1.8"
              >
                {block.hire.subtitle}
              </Text>
            </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6, lg: 8 }}>

            {/* Fleet details card */}
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
                      fontSize={{ base: 'md', md: 'lg' }}
                      color="brandStrong"
                      fontWeight="700"
                    >
                      {block.hire.fleetHeading}
                    </Heading>

                  {/* Stats grid: 1 col on xs, 2 cols from sm up */}
                  <SimpleGrid
                    columns={{ base: 1, sm: 2 }}
                    spacing={{ base: 3, md: 4 }}
                    w="100%"
                  >
                    {block.hire.fleetItems.map((item, idx) => (
                      <Box
                        key={idx}
                        p={{ base: 3, md: 4 }}
                        bg="cream.50"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.100"
                      >
                        <Flex align="center" gap={2} mb={1} flexWrap="wrap">
                          <Icon as={getWebsiteIcon(item.icon, hireIconFallbacks[idx] ?? FaUsers)} color="brand" fontSize="sm" flexShrink={0} />
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
                          color="brandStrong"
                        >
                          {item.value}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>

            {/* Hire conditions card */}
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
                    color="onAccent"
                    fontWeight="700"
                    fontSize={{ base: 'xs', md: 'sm' }}
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    {block.hire.conditionsBadge}
                  </Badge>

                  <Text
                    color="gray.600"
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight="1.8"
                  >
                    {block.hire.conditionsIntro}
                  </Text>

                  <VStack align="start" spacing={{ base: 2, md: 3 }} w="100%">
                    {block.hire.conditions.map((condition, idx) => (
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
                      {block.hire.note}
                    </Text>
                  </Box>
                </VStack>
              </Box>

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
          bg="rgba(45,106,79,0.06)"
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
              {block.cta.badge}
            </Badge>

            <Heading
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              color="onAccent"
              fontWeight="700"
              lineHeight="1.2"
            >
              {block.cta.heading}
            </Heading>

            <Text
              color="whiteAlpha.900"
              fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
              maxW="560px"
              lineHeight="1.8"
              px={{ base: 2, md: 0 }}
            >
              {block.cta.description}
            </Text>

            <Button
              as={RouterLink}
              to={block.cta.buttonLink}
              bg="forest.500"
              color="onAccent"
              size="lg"
              w={{ base: 'full', sm: 'auto' }}
              maxW={{ base: '320px', sm: 'none' }}
              px={{ base: 8, md: 10 }}
              fontWeight="700"
              borderRadius="full"
              leftIcon={<FaPhone />}
              _hover={{
                bg: 'forest.600',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 35px rgba(45,106,79,0.35)',
              }}
              transition="all 0.3s ease"
              mt={{ base: 1, md: 2 }}
            >
              {block.cta.buttonText}
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default TransportPage;
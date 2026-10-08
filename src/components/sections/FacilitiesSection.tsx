import { Box, SimpleGrid, VStack, Heading, Text, Icon, Flex, Image } from '@chakra-ui/react';
import { FaBook, FaLaptop, FaTree, FaFutbol, FaMusic, FaBus } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const facilities = [
  {
    icon: FaBook,
    title: 'Library',
    description: 'Well-stocked resource center',
    image: '/images/moments/classroom-09.webp',
    alt: 'Pupils during study time at St James Zongoro',
  },
  {
    icon: FaLaptop,
    title: 'Computer Lab',
    description: 'Modern tech hub',
    image: '/images/new/07.webp',
    alt: 'Learning with technology at St James Zongoro',
  },
  {
    icon: FaTree,
    title: 'Green Campus',
    description: 'Lush learning environment',
    image: '/images/moments/campus-02.webp',
    alt: 'The school grounds at St James Zongoro',
  },
  {
    icon: FaFutbol,
    title: 'Sports Field',
    description: 'Athletic development',
    image: '/images/gallery/sports/vollyball.webp',
    alt: 'Volleyball match on the school sports field',
  },
  {
    icon: FaMusic,
    title: 'Music Room',
    description: 'Arts & creativity',
    image: '/images/gallery/marimba-club.webp',
    alt: 'Marimba club performance at St James Zongoro',
  },
  {
    icon: FaBus,
    title: 'Transport',
    description: 'Reliable bus service',
    image: '/images/school-bus.jpg',
    alt: 'The St James Zongoro school bus',
  },
];

const FacilitiesSection = () => {
  return (
    <Box py={16} px={4} bg="maroon.500" position="relative" overflow="hidden">
      <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.1}>
        <Box position="absolute" top="-20%" right="-10%" w="400px" h="400px" borderRadius="full" bg="white" filter="blur(100px)" />
        <Box position="absolute" bottom="-30%" left="-10%" w="300px" h="300px" borderRadius="full" bg="white" filter="blur(80px)" />
      </Box>

      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
          <VStack spacing={12}>
            <VStack spacing={3} textAlign="center">
              <Heading fontSize={{ base: "lg", md: "xl" }} color="onAccent" fontWeight="800">
                Our Facilities
              </Heading>
              <Text color="whiteAlpha.800" fontSize={{ base: "md", md: "lg" }} maxW="500px">
                Modern infrastructure supporting holistic education
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={6} w="100%">
              {facilities.map((item) => (
                  <Box key={item.title}
                    position="relative"
                    borderRadius="xl"
                    overflow="hidden"
                    h={{ base: '175px', md: '215px' }}
                    boxShadow="0 8px 24px rgba(38, 0, 0, 0.35)"
                    _hover={{
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 36px rgba(38, 0, 0, 0.45)',
                    }}
                    transition="all 0.3s ease"
                    role="group"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="transform 0.5s ease"
                      _groupHover={{ transform: 'scale(1.07)' }}
                    />
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient="linear(to top, rgba(38, 0, 0, 0.92) 0%, rgba(38, 0, 0, 0.45) 45%, rgba(38, 0, 0, 0.08) 100%)"
                    />
                    <Flex
                      position="absolute"
                      left={0}
                      right={0}
                      bottom={0}
                      p={4}
                      align="center"
                      gap={3}
                    >
                      <Flex
                        align="center"
                        justify="center"
                        w="36px"
                        h="36px"
                        flexShrink={0}
                        borderRadius="lg"
                        bg="rgba(255, 255, 255, 0.16)"
                        backdropFilter="blur(4px)"
                        style={{ WebkitBackdropFilter: 'blur(4px)' }}
                      >
                        <Icon as={item.icon} color="onAccent" fontSize="md" />
                      </Flex>
                      <Box minW={0}>
                        <Heading size="sm" color="onAccent" fontWeight="700" lineHeight="1.2">
                          {item.title}
                        </Heading>
                        <Text color="whiteAlpha.700" fontSize="xs" lineHeight="1.3" noOfLines={1}>
                          {item.description}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
              ))}
            </SimpleGrid>

            <Box
              as={RouterLink}
              to="/about"
              px={8}
              py={3}
              bg="forest.500"
              color="onAccent"
              fontWeight="700"
              borderRadius="xl"
              _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 20px rgba(45, 106, 79, 0.4)' }}
              transition="all 0.3s ease"
            >
              View All Facilities
            </Box>
          </VStack>
      </Box>
    </Box>
  );
};

export default FacilitiesSection;

import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Flex,
  Icon,
  Image,
  Link,
} from '@chakra-ui/react';
import { FaUsers, FaBus, FaGift, FaPlay } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/ui/CTABanner';
import { useBlock } from '../lib/blocks';
import { getWebsiteIcon } from '../lib/websiteIcons';
import { communityBlock, type CommunityBlock } from '../data/blocks/community';

const highlightIconFallbacks = [FaBus, FaGift, FaUsers];

const CommunityPage = () => {
  const block = useBlock<CommunityBlock>('pages.community', communityBlock);

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
      
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="forest.500" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        
        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
            <VStack spacing={8} maxW="800px" mx="auto" textAlign="center">
              <Heading size="2xl" color="brandStrong" fontWeight="800">
                {block.intro.heading}
              </Heading>
              <Box w="80px" h="3px" bg="maroon.500" borderRadius="full" />
              <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                {block.intro.paragraph}
              </Text>
            </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} mt={16}>
              <Box 
                borderRadius="2xl" 
                overflow="hidden" 
                bg="white" 
                boxShadow="0 20px 60px rgba(130, 0, 0, 0.2)"
                position="relative"
                h={{ base: '350px', md: '480px', lg: 'full' }}
                minH={{ lg: '480px' }}
              >
                <Image 
                  src={block.chief.image} 
                  alt={block.chief.imageAlt}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
                <Box 
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="100px"
                  bgGradient="linear(to-t, blackAlpha.700, transparent)"
                />
                <Box 
                  position="absolute"
                  bottom={6}
                  left={6}
                  bg="white"
                  borderRadius="xl"
                  px={4}
                  py={3}
                  boxShadow="0 4px 20px rgba(0,0,0,0.15)"
                >
                  <Text fontWeight="800" fontSize="lg" color="gray.800">{block.chief.name}</Text>
                  <Text fontSize="sm" color="gray.500">{block.chief.role}</Text>
                </Box>
              </Box>

            <VStack align="start" spacing={6}>
              <Heading size="xl" color="brandStrong" fontWeight="700">
                {block.chief.contributionsHeading}
              </Heading>
              <Text color="gray.600" fontSize="md" lineHeight="1.8">
                {block.chief.contributionsParagraph}
              </Text>
              
              <Box 
                p={6} 
                bg="maroon.500"
                borderRadius="xl"
                w="100%"
                boxShadow="0 8px 30px rgba(130, 0, 0, 0.2)"
                position="relative"
                overflow="hidden"
              >
                <Box position="absolute" top={0} left={0} right={0} h="3px" bg="forest.400" />
                <Text color="onAccent" fontSize="md" fontStyle="italic" fontWeight="500" lineHeight="1.7" mt={1}>
                  {block.chief.quote}
                </Text>
                <Text color="whiteAlpha.700" fontSize="sm" mt={2}>{block.chief.quoteAttribution}</Text>
              </Box>

            </VStack>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="100%" mt={{ base: 10, lg: 12 }}>
                {block.highlights.map((highlight, index) => (
                  <Box
                    key={highlight.title}
                    p={6}
                    h="100%"
                    bg="white"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                    position="relative"
                    overflow="hidden"
                    role="group"
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ transform: 'translateY(-6px)', boxShadow: '0 16px 32px rgba(130, 0, 0, 0.12)', borderColor: 'maroon.200' }}
                  >
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      h="4px"
                      bg="maroon.500"
                      transform="scaleX(0)"
                      _groupHover={{ transform: 'scaleX(1)' }}
                      transition="transform 0.3s ease"
                      transformOrigin="left"
                    />
                    <VStack align="start" spacing={4}>
                      <Flex
                        align="center"
                        justify="center"
                        w="56px"
                        h="56px"
                        borderRadius="xl"
                        bg="maroon.500"
                        boxShadow="0 4px 14px rgba(130, 0, 0, 0.22)"
                      >
                        <Icon as={getWebsiteIcon(highlight.icon, highlightIconFallbacks[index] ?? FaUsers)} color="onAccent" fontSize="xl" />
                      </Flex>
                      <Box>
                        <Text color="gray.800" fontWeight="700" fontSize="md" mb={1.5}>
                          {highlight.title}
                        </Text>
                        <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                          {highlight.description}
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
        </Box>
      </Box>

      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="cream.50" position="relative" overflow="hidden">
        <Box position="absolute" top={0} left={0} right={0} bottom={0} opacity={0.4}>
          <Box position="absolute" top="10%" right="5%" w="400px" h="400px" borderRadius="full" bg="maroon.500" opacity={0.03} filter="blur(100px)" />
          <Box position="absolute" bottom="10%" left="5%" w="300px" h="300px" borderRadius="full" bg="forest.500" opacity={0.03} filter="blur(80px)" />
        </Box>
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        
        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
            <VStack spacing={10}>
              <Box textAlign="center">
                <Heading size="xl" color="brandStrong" fontWeight="800">
                  {block.activitiesSection.heading}
                </Heading>
                <Text color="gray.500" fontSize="lg" mt={2}>
                  {block.activitiesSection.subtitle}
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="100%">
                {block.activities.map((activity) => (
                    <Box key={activity.title} 
                      borderRadius="2xl" 
                      overflow="hidden" 
                      bg="white"
                      border="1px solid"
                      borderColor="maroon.100"
                      boxShadow="0 4px 20px rgba(130, 0, 0, 0.08)"
                      _hover={{ borderColor: 'maroon.300', transform: 'translateY(-6px)', boxShadow: '0 12px 40px rgba(130, 0, 0, 0.15)' }}
                      transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      {activity.type === 'video' && activity.videoId ? (
                        <Link 
                          href={`https://youtu.be/${activity.videoId}`} 
                          isExternal 
                          _hover={{ textDecoration: 'none' }}
                          w="100%"
                        >
                          <Box 
                            h={{ base: '200px', md: '180px' }} 
                            bg="maroon.500"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            position="relative"
                            flexDirection="column"
                            p={4}
                            cursor="pointer"
                            _hover={{ bg: 'maroon.600' }}
                            transition="all 0.3s ease"
                          >
                            <Icon as={FaPlay} color="onAccent" fontSize="3xl" mb={2} opacity={0.9} />
                            <Text color="onAccent" fontWeight="700" fontSize="sm" textAlign="center">
                              {block.activitiesSection.watchLabel}
                            </Text>
                            <Text color="whiteAlpha.700" fontSize="xs" mt={2} textAlign="center" maxW="200px">
                              {block.activitiesSection.watchHint}
                            </Text>
                          </Box>
                        </Link>
                      ) : (
                        <Box 
                          h={{ base: '200px', md: '180px' }} 
                          bg="maroon.500"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          position="relative"
                          flexDirection="column"
                          p={4}
                        >
                          <Icon as={FaPlay} color="onAccent" fontSize="2xl" mb={2} opacity={0.8} />
                          <Text color="onAccent" fontWeight="700" fontSize="sm" textAlign="center">
                            {activity.placeholder}
                          </Text>
                          <Text color="whiteAlpha.700" fontSize="xs" mt={2} textAlign="center" maxW="200px">
                            {block.activitiesSection.placeholderHint}
                          </Text>
                        </Box>
                      )}
                      <Box p={5}>
                        <Heading size="sm" color="gray.800" mb={2}>
                          {activity.title}
                        </Heading>
                        <Text color="gray.500" fontSize="sm">
                          {activity.description}
                        </Text>
                      </Box>
                    </Box>
                ))}
              </SimpleGrid>
            </VStack>
        </Box>
      </Box>
      <CTABanner
        eyebrow={block.cta.eyebrow}
        title={block.cta.title}
        subtitle={block.cta.subtitle}
        buttonText={block.cta.buttonText}
        buttonLink={block.cta.buttonLink}
      />
    </Box>
  );
};

export default CommunityPage;
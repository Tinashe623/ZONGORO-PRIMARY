import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Flex,
  Image,
  Icon,
} from '@chakra-ui/react';
import { FaPlaceOfWorship } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import CTABanner from '../components/ui/CTABanner';
import { useBlock } from '../lib/blocks';
import { getWebsiteIcon } from '../lib/websiteIcons';
import { churchBlock, type ChurchBlock } from '../data/blocks/church';

const ChurchPage = () => {
  const block = useBlock<ChurchBlock>('pages.church', churchBlock);

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

        <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <Box position="relative">
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 20px 60px rgba(130, 0, 0, 0.25)"
              >
                <Image
                  src={block.foundation.image}
                  alt={block.foundation.imageAlt}
                  loading="lazy"
                  decoding="async"
                  w="100%"
                  h={{ base: '300px', md: '450px' }}
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  h="80px"
                  bgGradient="linear(to-t, blackAlpha.700, transparent)"
                />
              </Box>
              <Box
                position="absolute"
                top={6}
                right={6}
                bg="white"
                borderRadius="xl"
                px={4}
                py={3}
                boxShadow="0 4px 20px rgba(0,0,0,0.15)"
              >
                <Image
                  src={block.foundation.logo}
                  alt="Anglican Logo"
                  h="50px"
                  objectFit="contain"
                />
              </Box>
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
                <Flex align="center" gap={3}>
                  <Icon as={FaPlaceOfWorship} color="brand" fontSize="xl" />
                  <Box>
                    <Text fontWeight="700" fontSize="sm" color="gray.800">{block.foundation.churchName}</Text>
                    <Text fontSize="xs" color="gray.500">{block.foundation.churchLocation}</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <VStack align="start" spacing={6}>
              <Heading size="xl" color="brandStrong" fontWeight="800">
                {block.foundation.heading}
              </Heading>
              <Box w="80px" h="3px" bg="maroon.500" borderRadius="full" />
              {block.foundation.paragraphs.map((paragraph, index) => (
                <Text key={index} color="gray.600" lineHeight="1.9" fontSize="lg">
                  {paragraph}
                </Text>
              ))}
              <Box
                mt={2}
                p={8}
                bg="white"
                borderRadius="2xl"
                border="2px solid"
                borderColor="maroon.100"
                w="100%"
                position="relative"
                overflow="hidden"
              >
                <Box position="absolute" top={0} left={0} h="4px" w="100%" bg="maroon.500" />
                <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={6}>
                  <Image
                    src={block.foundation.logo}
                    alt="Anglican Logo"
                    h={{ base: '80px', md: '100px' }}
                    objectFit="contain"
                  />
                  <Box flex={1}>
                    <Text fontWeight="800" color="brandStrong" fontSize="xl" mb={2}>{block.foundation.authorityTitle}</Text>
                    <Text color="gray.600" fontSize="md" lineHeight="1.8">
                      {block.foundation.authorityText}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </VStack>
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
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <Box>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 20px 60px rgba(130, 0, 0, 0.25)"
                bg="cream.50"
                h={{ base: '300px', md: '450px' }}
                position="relative"
              >
                <Image
                  src={block.values.image}
                  alt={block.values.imageAlt}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  loading="lazy"
                  decoding="async"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={4}
                  bgGradient="linear(to-t, rgba(0,0,0,0.6), transparent)"
                >
                  <Text color="onAccent" fontSize="md" fontWeight="700" textShadow="0 1px 8px rgba(0,0,0,0.4)">
                    {block.values.imageCaption}
                  </Text>
                </Box>
              </Box>
            </Box>

            <VStack align="start" spacing={6}>
              <Heading size="xl" color="brandStrong" fontWeight="800">
                {block.values.heading}
              </Heading>
              <Box w="80px" h="3px" bg="maroon.500" borderRadius="full" />
              <Text color="gray.500" fontSize="lg">
                {block.values.subtitle}
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
                <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={4}>
                  <Image
                    src={block.foundation.logo}
                    alt="Anglican Logo"
                    h="40px"
                    objectFit="contain"
                  />
                  <Text
                    flex={1}
                    color="onAccent"
                    fontSize="md"
                    fontStyle="italic"
                    fontWeight="500"
                    lineHeight="1.6"
                  >
                    {block.values.quote}
                  </Text>
                </Flex>
              </Box>

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="100%">
                {block.values.items.map((value) => (
                  <Box
                    key={value.text}
                    p={4}
                    borderRadius="xl"
                    bg="white"
                    border="1px solid"
                    borderColor="maroon.100"
                    _hover={{ borderColor: 'maroon.300', transform: 'translateY(-4px)', boxShadow: 'lg' }}
                    transition="all 0.3s ease"
                    role="group"
                  >
                    <Flex align="center" gap={3}>
                      <Flex
                        align="center"
                        justify="center"
                        w="40px"
                        h="40px"
                        borderRadius="full"
                        bg="maroon.500"
                        flexShrink={0}
                        transition="all 0.3s ease"
                        _groupHover={{ bg: 'forest.500' }}
                      >
                        <Icon as={getWebsiteIcon(value.icon, FaPlaceOfWorship)} color="onAccent" fontSize="md" />
                      </Flex>
                      <Text color="gray.700" fontWeight="600" fontSize="sm">
                        {value.text}
                      </Text>
                    </Flex>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </SimpleGrid>
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

export default ChurchPage;

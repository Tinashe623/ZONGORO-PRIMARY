import { useEffect, useState } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { galleryImages } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/ui/CTABanner';

const categories = ['All', 'School Activities', 'Church Events', 'Trips'];

const ImageCard = ({ image }: { image: GalleryImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      cursor="pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        w="100%"
        h="250px"
        objectFit="cover"
        transition="transform 0.3s ease"
        transform={isHovered ? 'scale(1.05)' : 'scale(1)'}
        loading="lazy"
      />
      <Flex
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        opacity={isHovered ? 1 : 0}
        transition="opacity 0.3s ease"
        align="center"
        justify="center"
        direction="column"
        p={4}
      >
        <Text color="white" fontWeight="600" textAlign="center">
          {image.alt}
        </Text>
        <Badge mt={2} colorScheme="whiteAlpha">
          {image.category}
        </Badge>
      </Flex>
    </Box>
  );
};

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Box>
      <PageHero 
        title="School Gallery" 
        subtitle="Capturing moments of learning, faith, and community"
      />
      
      <Box py={16} px={4}>
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <Tabs
              variant="soft-rounded"
              colorScheme="maroon"
              index={categories.indexOf(selectedCategory)}
              onChange={(index) => setSelectedCategory(categories[index])}
              mb={10}
            >
              <TabList justifyContent="center" flexWrap="wrap" gap={2}>
                {categories.map((category) => (
                  <Tab
                    key={category}
                    _selected={{ bg: 'maroon.500', color: 'white' }}
                    px={6}
                  >
                    {category}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            {filteredImages.map((image, index) => (
              <ScrollReveal key={index} delay={0.05 * index}>
                <ImageCard image={image} />
              </ScrollReveal>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <CTABanner 
        title="Visit Our School" 
        subtitle="See our facilities firsthand by scheduling a tour"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </Box>
  );
};

export default GalleryPage;
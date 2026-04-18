import { useEffect, useState, useCallback, memo } from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Tabs,
  TabList,
  Tab,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Skeleton,
  Button,
  VStack,
} from '@chakra-ui/react';
import { galleryImages } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const categories = ['All', 'School Activities', 'Church Events', 'Sports', 'Projects', 'Activities', 'Achievements'];

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const ImageCard = memo(({ image, onClick }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const shortDescription = image.description 
    ? image.description.slice(0, 80) + (image.description.length > 80 ? '...' : '')
    : '';

  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      bg="white"
      boxShadow="card"
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'cardHover',
      }}
    >
      <Box
        cursor="pointer"
        onClick={onClick}
        role="button"
        tabIndex={0}
        aria-label={`View ${image.alt}`}
        _focus={{ outline: '2px solid', outlineColor: 'maroon.500' }}
      >
        {!isLoaded && (
          <Skeleton 
            w="100%" 
            h="250px" 
            startColor="cream.50" 
            endColor="gray.100" 
          />
        )}
        <Image
          src={image.src}
          alt={image.alt}
          w="100%"
          h="250px"
          objectFit="contain"
          bg="cream.50"
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          opacity={isLoaded ? 1 : 0}
        />
      </Box>
      <Box p={4} bg="gray.50" borderTop="1px" borderColor="gray.100">
        <VStack align="start" spacing={2}>
          <Text fontWeight="600" fontSize="md" color="gray.800">
            {image.alt}
          </Text>
          {image.description && (
            <>
              <Text fontSize="sm" color="gray.600" noOfLines={isExpanded ? undefined : 2}>
                {isExpanded ? image.description : shortDescription}
              </Text>
              <Button 
                size="xs" 
                colorScheme="forest" 
                variant="link" 
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </Button>
            </>
          )}
        </VStack>
      </Box>
    </Box>
  );
});

ImageCard.displayName = 'ImageCard';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    onOpen();
  }, [onOpen]);

  const handleCategoryChange = useCallback((index: number) => {
    setSelectedCategory(categories[index]);
  }, []);

  return (
    <Box>
      <PageHero 
        title="School Gallery" 
        subtitle="Capturing moments of learning, faith, and community"
      />
      
      <Box py={16} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <Tabs
              variant="soft-rounded"
              colorScheme="maroon"
              index={categories.indexOf(selectedCategory)}
              onChange={handleCategoryChange}
              mb={8}
            >
              <TabList justifyContent="center" flexWrap="wrap" gap={2}>
                {categories.map((category) => (
                  <Tab
                    key={category}
                    bg="white"
                    color="gray.600"
                    _selected={{ bg: 'maroon.500', color: 'white' }}
                    _hover={{ bg: 'maroon.100', color: 'maroon.700' }}
                    px={6}
                    borderRadius="full"
                    fontWeight="500"
                    transition="all 0.2s ease"
                  >
                    {category}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </ScrollReveal>

          <Text textAlign="center" color="gray.500" fontSize="sm" mb={6}>
            Click on any image to view full screen
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            {filteredImages.map((image, index) => (
              <ScrollReveal key={`${image.src}-${index}`} delay={0.05 * index}>
                <ImageCard image={image} onClick={() => handleImageClick(image)} />
              </ScrollReveal>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(5px)" />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton 
            color="gray.800" 
            bg="white"
            size="lg" 
            top={4}
            right={4}
            zIndex={10}
            borderRadius="full"
            _hover={{ bg: 'gray.200' }}
          />
          <ModalBody p={0} display="flex" alignItems="center" justifyContent="center">
            {selectedImage && (
              <Box position="relative" maxH="90vh">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  maxH="85vh"
                  maxW="100%"
                  objectFit="contain"
                  borderRadius="lg"
                />
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="blackAlpha.700"
                  py={4}
                  px={6}
                  borderBottomRadius="lg"
                >
                  <Text color="white" fontWeight="600" fontSize="lg">
                    {selectedImage.alt}
                  </Text>
                  <Badge 
                    bg="forest.500" 
                    color="white" 
                    mt={1}
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    {selectedImage.category}
                  </Badge>
                </Box>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GalleryPage;
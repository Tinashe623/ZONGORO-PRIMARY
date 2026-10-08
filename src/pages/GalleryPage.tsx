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
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { galleryImages } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';
import PageHero from '../components/ui/PageHero';

const categories = ['All', 'Classrooms', 'Chapel & Assembly', 'Campus', 'School Activities', 'Church Events', 'Sports', 'Projects', 'Activities', 'Achievements'];

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
          objectFit="cover"
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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory);

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const handleImageClick = useCallback((index: number) => {
    setSelectedIndex(index);
    onOpen();
  }, [onOpen]);

  const handleCategoryChange = useCallback((index: number) => {
    setSelectedCategory(categories[index]);
  }, []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev === null || filteredImages.length === 0 ? prev : (prev - 1 + filteredImages.length) % filteredImages.length));
  }, [filteredImages.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null || filteredImages.length === 0 ? prev : (prev + 1) % filteredImages.length));
  }, [filteredImages.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, showPrevious, showNext]);

  return (
    <Box>
      <PageHero 
        title="School Gallery" 
        subtitle="Capturing moments of learning, faith, and community"
        image="/images/moments/chapel-04.webp"
        imageAlt="The school gathered for assembly"
      />
      
      <Box py={16} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
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
                    _selected={{ bg: 'maroon.500', color: 'onAccent' }}
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

          <Text textAlign="center" color="gray.500" fontSize="sm" mb={6}>
            Click on any image to view full screen
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
            {filteredImages.map((image, index) => (
                <ImageCard key={`${image.src}-${index}`} image={image} onClick={() => handleImageClick(index)} />
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
              <Box position="relative" maxH="90vh" w="100%" display="flex" alignItems="center" justifyContent="center">
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon boxSize={8} />}
                  position="absolute"
                  left={{ base: 2, md: 6 }}
                  zIndex={10}
                  size="lg"
                  borderRadius="full"
                  bg="blackAlpha.600"
                  color="onAccent"
                  _hover={{ bg: 'blackAlpha.800' }}
                  onClick={showPrevious}
                />
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  maxH="85vh"
                  maxW="100%"
                  objectFit="contain"
                  borderRadius="lg"
                />
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon boxSize={8} />}
                  position="absolute"
                  right={{ base: 2, md: 6 }}
                  zIndex={10}
                  size="lg"
                  borderRadius="full"
                  bg="blackAlpha.600"
                  color="onAccent"
                  _hover={{ bg: 'blackAlpha.800' }}
                  onClick={showNext}
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
                  <Flex align="center" gap={3} justify="space-between">
                    <Text color="onAccent" fontWeight="600" fontSize="lg" flex={1} minW={0}>
                      {selectedImage.alt}
                    </Text>
                    <Badge
                      flexShrink={0}
                      bg="forest.500"
                      color="onAccent"
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      {selectedImage.category}
                    </Badge>
                  </Flex>
                  <Text color="whiteAlpha.700" fontSize="sm" mt={1}>
                    {selectedIndex !== null ? `${selectedIndex + 1} / ${filteredImages.length}` : ''}
                  </Text>
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
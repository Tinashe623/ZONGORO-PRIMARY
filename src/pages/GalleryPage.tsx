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
  IconButton,
  Flex,
  VStack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaExpand } from 'react-icons/fa';
import { galleryImages } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';

const categories = ['All', 'Classrooms', 'Chapel & Assembly', 'Campus', 'School Activities', 'Church Events', 'Sports', 'Projects', 'Activities', 'Achievements'];

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const ImageCard = memo(({ image, onClick }: ImageCardProps) => {
  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      bg="white"
      cursor="pointer"
      role="group"
      tabIndex={0}
      aria-label={`View ${image.alt}`}
      boxShadow="0 4px 16px rgba(0,0,0,0.08)"
      _hover={{ transform: 'translateY(-6px)', boxShadow: '0 16px 32px rgba(128, 0, 32, 0.14)' }}
      _focus={{ outline: '2px solid', outlineColor: 'maroon.500' }}
      transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        w="100%"
        h="250px"
        objectFit="cover"
        loading="lazy"
        decoding="async"
        transition="transform 0.6s ease"
        transform="scale(1.001)"
        _groupHover={{ transform: 'scale(1.06)' }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to top, rgba(64, 4, 10, 0.9) 0%, rgba(64, 4, 10, 0.3) 40%, transparent 100%)"
      />
      <Box position="absolute" left={0} right={0} bottom={0} p={5}>
        <VStack align="start" spacing={2}>
          <Badge
            bg="rgba(255,255,255,0.18)"
            color="onAccent"
            backdropFilter="blur(6px)"
            style={{ WebkitBackdropFilter: 'blur(6px)' }}
            px={2.5}
            py={0.5}
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.08em"
          >
            {image.category}
          </Badge>
          <Text
            color="onAccent"
            fontWeight="600"
            fontSize="md"
            lineHeight="1.35"
            noOfLines={2}
            _groupHover={{ color: 'white' }}
          >
            {image.alt}
          </Text>
        </VStack>
      </Box>
      <Flex
        position="absolute"
        top={4}
        right={4}
        align="center"
        justify="center"
        w="38px"
        h="38px"
        borderRadius="full"
        bg="rgba(255,255,255,0.2)"
        backdropFilter="blur(6px)"
        style={{ WebkitBackdropFilter: 'blur(6px)' }}
        color="onAccent"
        opacity={0}
        transform="translateY(6px)"
        transition="opacity 0.3s ease, transform 0.3s ease"
        _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
        _groupFocus={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <FaExpand size={14} />
      </Flex>
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
            <SectionHeading
              eyebrow="Our Moments"
              title="School Gallery"
              subtitle="Browse life at St James Zongoro across the years"
            />

            <Tabs
              variant="soft-rounded"
              colorScheme="maroon"
              index={categories.indexOf(selectedCategory)}
              onChange={handleCategoryChange}
              mb={8}
            >
              <TabList
                justifyContent="center"
                flexWrap="wrap"
                gap={2}
                bg="white"
                p={2}
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              >
                {categories.map((category) => (
                  <Tab
                    key={category}
                    bg="white"
                    color="gray.600"
                    _selected={{ bg: 'maroon.500', color: 'onAccent', boxShadow: '0 4px 14px rgba(130, 0, 0, 0.3)' }}
                    _hover={{ bg: 'maroon.100', color: 'brandStrong' }}
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
        <ModalContent bg="transparent" boxShadow="none" overflow="hidden" borderRadius="2xl">
          <ModalCloseButton 
            color="white" 
            bg="blackAlpha.400"
            size="lg" 
            top={4}
            right={4}
            zIndex={10}
            borderRadius="full"
            _hover={{ bg: 'blackAlpha.600' }}
          />
          <ModalBody p={0}>
            {selectedImage && (
              <Box position="relative" maxH="90vh" w="100%">
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon boxSize={8} />}
                  position="absolute"
                  left={{ base: 2, md: 6 }}
                  top="50%"
                  transform="translateY(-50%)"
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
                  w="100%"
                  maxH="85vh"
                  objectFit="contain"
                  bg="black"
                />
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon boxSize={8} />}
                  position="absolute"
                  right={{ base: 2, md: 6 }}
                  top="50%"
                  transform="translateY(-50%)"
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
                  bgGradient="linear(to top, rgba(0,0,0,0.85), transparent)"
                  pt={12}
                  pb={{ base: 4, md: 6 }}
                  px={{ base: 4, md: 6 }}
                >
                  <Flex align="flex-start" gap={3} justify="space-between">
                    <Box minW={0}>
                      <Text color="onAccent" fontWeight="600" fontSize="lg" lineHeight="1.3" minW={0}>
                        {selectedImage.alt}
                      </Text>
                      {selectedImage.description && (
                        <Text color="whiteAlpha.800" fontSize="sm" mt={1} noOfLines={2}>
                          {selectedImage.description}
                        </Text>
                      )}
                    </Box>
                    <Badge
                      flexShrink={0}
                      bg="rgba(255,255,255,0.2)"
                      color="onAccent"
                      backdropFilter="blur(6px)"
                      style={{ WebkitBackdropFilter: 'blur(6px)' }}
                      px={3}
                      py={1}
                      borderRadius="full"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      {selectedImage.category}
                    </Badge>
                  </Flex>
                  <Text color="whiteAlpha.600" fontSize="sm" mt={2}>
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
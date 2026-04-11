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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { galleryImages } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const categories = ['All', 'School Activities', 'Church Events', 'Sports', 'Projects', 'Activities', 'Achievements'];

const ImageCard = ({ image, onClick }: { image: GalleryImage; onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      cursor="pointer"
      bg="white"
      boxShadow={isHovered ? '0 8px 30px rgba(130, 0, 0, 0.15)' : '0 4px 20px rgba(0,0,0,0.08)'}
      border="2px solid"
      borderColor={isHovered ? 'maroon.500' : 'transparent'}
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      _focus={{ outline: '2px solid', outlineColor: 'maroon.500' }}
    >
        <Image
        src={image.src}
        alt={image.alt}
        w="100%"
        h="250px"
        objectFit="contain"
        bg="cream.50"
        transition="transform 0.3s ease"
        transform={isHovered ? 'scale(1.02)' : 'scale(1)'}
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
        <Text color="white" fontWeight="600" textAlign="center" textShadow="0 2px 4px rgba(0,0,0,0.5)">
          {image.alt}
        </Text>
        <Badge mt={2} bg="forest.500" color="white" px={3} py={1} borderRadius="full" fontSize="xs">
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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    onOpen();
  };

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
              onChange={(index) => setSelectedCategory(categories[index])}
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
              <ScrollReveal key={index} delay={0.05 * index}>
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
            color="white" 
            size="lg" 
            top={4}
            right={4}
            zIndex={10}
            _hover={{ bg: 'whiteAlpha.300' }}
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
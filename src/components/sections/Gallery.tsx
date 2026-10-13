import { useMemo, useState } from 'react';
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
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { FaExpand } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import { useWebsiteContent } from '../../context/WebsiteContentContext';
import type { WebsiteGalleryItem } from '../../types/website';

const ImageCard = ({
  image,
  onOpen,
}: {
  image: WebsiteGalleryItem;
  onOpen: (image: WebsiteGalleryItem) => void;
}) => {
  return (
    <Box
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      cursor="pointer"
      onClick={() => onOpen(image)}
      role="group"
      boxShadow="0 4px 16px rgba(0,0,0,0.08)"
      _hover={{ transform: 'translateY(-6px)', boxShadow: '0 16px 32px rgba(130, 0, 0, 0.14)' }}
      transition="all 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
    >
      <Image
        src={image.src}
        alt={image.alt}
        w="100%"
        h="250px"
        objectFit="cover"
        transition="transform 0.6s ease"
        transform="scale(1.001)"
        _groupHover={{ transform: 'scale(1.06)' }}
        loading="lazy"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(to top, rgba(64, 4, 10, 0.9) 0%, rgba(64, 4, 10, 0.3) 40%, transparent 100%)"
        transition="opacity 0.3s ease"
      />
      <Flex
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        p={5}
        direction="column"
        align="start"
        gap={2}
      >
        <Badge
          colorScheme="whiteAlpha"
          bg="rgba(255,255,255,0.18)"
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
          textAlign="start"
          lineHeight="1.35"
          transform="translateY(0)"
          transition="transform 0.3s ease"
          _groupHover={{ color: 'white' }}
        >
          {image.alt}
        </Text>
      </Flex>
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
        transform={'translateY(6px)'}
        transition="opacity 0.3s ease, transform 0.3s ease"
        _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <FaExpand size={14} />
      </Flex>
    </Box>
  );
};

const Gallery = () => {
  const { content } = useWebsiteContent();
  const galleryImages = content.gallery;
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(galleryImages.map((image) => image.category)))],
    [galleryImages]
  );
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState<WebsiteGalleryItem | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <Box id="gallery" py={20} px={4}>
      <Box maxW="1200px" mx="auto">
          <SectionHeading
            eyebrow="Our Moments"
            title="School Gallery"
            subtitle="Capturing moments of learning, faith, and community"
          />

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
                  _selected={{ bg: 'maroon.500', color: 'onAccent', boxShadow: '0 4px 12px rgba(130, 0, 0, 0.25)' }}
                  px={6}
                >
                  {category}
                </Tab>
              ))}
            </TabList>
          </Tabs>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
          {filteredImages.map((image, index) => (
              <ImageCard key={index} image={image} onOpen={setActiveImage} />
          ))}
        </SimpleGrid>
      </Box>

      <Modal
        isOpen={activeImage !== null}
        onClose={() => setActiveImage(null)}
        isCentered
        size="4xl"
      >
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(8px)" style={{ WebkitBackdropFilter: 'blur(8px)' }} />
        <ModalContent bg="transparent" boxShadow="none" overflow="hidden" borderRadius="2xl">
          <ModalCloseButton color="white" bg="blackAlpha.400" _hover={{ bg: 'blackAlpha.600' }} zIndex={2} />
          <ModalBody p={0}>
            {activeImage && (
              <Box position="relative">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  w="100%"
                  maxH="80vh"
                  objectFit="contain"
                />
                <Box
                  position="absolute"
                  left={0}
                  right={0}
                  bottom={0}
                  p={4}
                  bgGradient="linear(to top, rgba(0,0,0,0.75), transparent)"
                >
                  <Badge
                    colorScheme="whiteAlpha"
                    bg="rgba(255,255,255,0.2)"
                    mb={1}
                  >
                    {activeImage.category}
                  </Badge>
                  <Text color="white" fontWeight="600" fontSize="md">
                    {activeImage.alt}
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

export default Gallery;
import { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  scrollPosition: number;
  isScrolled?: boolean;
}

interface DropdownItem {
  name: string;
  to: string;
}

interface DropdownGroup {
  name: string;
  items: DropdownItem[];
}

const Navbar = ({ scrollPosition, isScrolled: isScrolledProp }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isScrolled = isScrolledProp ?? scrollPosition > 50;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return false;
    }
    return location.pathname === path;
  };

  const isDropdownActive = (items: DropdownItem[]) => {
    return items.some(item => {
      if (item.to.startsWith('/#')) return false;
      return isActive(item.to);
    });
  };

  const dropdowns: DropdownGroup[] = [
    {
      name: 'About',
      items: [
        { name: 'Our School', to: '/about' },
        { name: 'Anglican Heritage', to: '/church' },
        { name: 'Community', to: '/community' },
        { name: 'Gallery', to: '/gallery' },
      ],
    },
    {
      name: 'Academics',
      items: [
        { name: 'Curriculum', to: '/academics' },
        { name: 'Assessment & Analysis', to: '/assessment' },
        { name: 'Activities', to: '/activities' },
      ],
    },
    {
      name: 'Admissions',
      items: [
        { name: 'Admissions', to: '/admissions' },
        { name: 'Boarding', to: '/boarding' },
        { name: 'Transport', to: '/transport' },
      ],
    },
  ];

  return (
    <Box
      position="fixed"
      top="40px"
      left={0}
      right={0}
      zIndex={1000}
      bg="cream.50"
      boxShadow={isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none'}
      backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      transition="all 0.3s ease"
      borderBottom={isScrolled ? 'none' : '1px solid'}
      borderColor="maroon.100"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1400px"
        mx="auto"
        py={3}
        px={4}
      >
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Flex align="center" gap={3} cursor="pointer">
            <Box 
              w="40px"
              h="40px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 4px 14px rgba(128, 0, 32, 0.3)"
              flexShrink={0}
            >
              <Image 
                src="/images/st-james-promary-logo.jpg" 
                alt="School Logo" 
                w="100%" 
                h="100%" 
                objectFit="cover"
              />
            </Box>
            <Box flexShrink={0}>
              <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="700" color="maroon.500" lineHeight="1.2">
                St James Zongoro
              </Text>
              <Text fontSize="xs" fontWeight="600" color="gray.500" letterSpacing="0.5px" display={{ base: 'none', sm: 'block' }}>
                PRIMARY SCHOOL
              </Text>
            </Box>
          </Flex>
        </RouterLink>

        <HStack spacing={1} display={{ base: 'none', lg: 'flex' }}>
<RouterLink to="/">
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive('/') ? 'maroon.500' : 'gray.600'}
              _hover={{ color: 'maroon.500', transform: 'translateY(-2px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
            >
              Home
            </Button>
          </RouterLink>

          {dropdowns.map((dropdown) => (
            <Box 
              key={dropdown.name}
              position="relative"
              onMouseEnter={() => setOpenDropdown(dropdown.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Button
                variant="ghost"
                fontWeight="600"
                color={isDropdownActive(dropdown.items) || openDropdown === dropdown.name ? 'maroon.500' : 'gray.600'}
                _hover={{ color: 'maroon.500', transform: 'translateY(-2px)' }}
                size="sm"
                px={3}
                transition="all 0.2s ease"
                rightIcon={<ChevronDownIcon 
                  transition="all 0.2s" 
                  transform={openDropdown === dropdown.name ? 'rotate(180deg)' : 'rotate(0)'} 
                />}
              >
                {dropdown.name}
              </Button>

              <Box
                position="absolute"
                top="100%"
                left={0}
                minW="200px"
                bg="cream.50"
                borderRadius="xl"
                shadow="0 10px 40px rgba(128, 0, 32, 0.15)"
                border="1px"
                borderColor="maroon.100"
                opacity={openDropdown === dropdown.name ? 1 : 0}
                visibility={openDropdown === dropdown.name ? 'visible' : 'hidden'}
                transform={openDropdown === dropdown.name ? 'translateY(0)' : 'translateY(-10px)'}
                transition="all 0.2s ease-in-out"
                zIndex={999}
                py={2}
                mt={1}
                overflow="hidden"
              >
                {dropdown.items.map((item, idx) => (
                  <RouterLink 
                    key={idx} 
                    to={item.to}
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      px={4}
                      py={3}
                      fontWeight="600"
                      fontSize="sm"
                      color={isActive(item.to) ? 'white' : 'gray.700'}
                      bg={isActive(item.to) ? 'maroon.500' : 'transparent'}
                      cursor="pointer"
                      _hover={{ bg: 'maroon.500', color: 'white', transform: 'translateX(4px)' }}
                      transition="all 0.2s"
                      position="relative"
                      borderLeft={isActive(item.to) ? '3px solid' : '3px solid'}
                      borderLeftColor={isActive(item.to) ? '#00ff88' : 'transparent'}
                    >
                      {item.name}
                    </Box>
                  </RouterLink>
                ))}
              </Box>
            </Box>
          ))}

          <RouterLink to="/staff">
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive('/staff') ? 'maroon.500' : 'gray.600'}
              _hover={{ color: 'maroon.500', transform: 'translateY(-2px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
            >
              Our Team
            </Button>
          </RouterLink>

          <RouterLink to="/gallery">
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive('/gallery') ? 'maroon.500' : 'gray.600'}
              _hover={{ color: 'maroon.500', transform: 'translateY(-2px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
            >
              Gallery
            </Button>
          </RouterLink>

          <RouterLink to="/contact">
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive('/contact') ? 'maroon.500' : 'gray.600'}
              _hover={{ color: 'maroon.500', transform: 'translateY(-2px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
            >
              Contact
            </Button>
          </RouterLink>
        </HStack>

        <HStack spacing={2}>
          <Button
            as={RouterLink}
            to="/admissions"
            size="sm"
            bg="maroon.500"
            color="white"
            fontWeight="600"
            display={{ base: 'none', md: 'flex' }}
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(128, 0, 32, 0.3)' }}
          >
            Apply Now
          </Button>
          
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            display={{ base: 'flex', lg: 'none' }}
            onClick={onOpen}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
        <DrawerOverlay bg="blackAlpha.600" />
        <DrawerContent bg="white" maxH="100vh">
          {/* Simple Header */}
          <Flex
            align="center"
            justify="space-between"
            px={6}
            py={4}
            borderBottom="1px solid"
            borderColor="gray.200"
            bg="cream.50"
          >
            <Flex align="center" gap={3}>
              <Box
                w="40px"
                h="40px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="0 2px 8px rgba(0,0,0,0.1)"
              >
                <Image
                  src="/images/st-james-promary-logo.jpg"
                  alt="School Logo"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="700" color="maroon.500">
                  St James Zongoro
                </Text>
                <Text fontSize="xs" fontWeight="500" color="gray.500" textTransform="uppercase" letterSpacing="0.5px">
                  Primary School
                </Text>
              </Box>
            </Flex>
            <DrawerCloseButton size="lg" color="maroon.500" _hover={{ bg: 'maroon.100' }} />
          </Flex>

          {/* Clean Navigation */}
          <Box
            flex={1}
            overflowY="auto"
            px={{ base: 4, md: 6 }}
            py={{ base: 4, md: 6 }}
            pb={{ base: 24, md: 12 }}
            sx={{
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0,0,0,0.05)',
                borderRadius: '10px',
                margin: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(128,0,32,0.4)',
                borderRadius: '10px',
                border: '2px solid rgba(255,255,255,0.3)',
                backdropFilter: 'blur(4px)',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: 'rgba(128,0,32,0.6)',
                border: '2px solid rgba(255,255,255,0.5)',
              },
              '&::-webkit-scrollbar-corner': {
                background: 'transparent',
              },
            }}
          >
            <VStack spacing={{ base: 4, md: 6 }} align="stretch">
              {/* Main Links */}
              <VStack spacing={1} align="stretch">
                <RouterLink to="/" onClick={onClose}>
                  <Box
                    p={{ base: 3, md: 4 }}
                    borderRadius="lg"
                    bg={isActive('/') ? 'maroon.50' : 'transparent'}
                    _hover={{ bg: 'gray.50', transform: 'translateX(4px)' }}
                    transition="all 0.2s ease"
                    borderLeft={isActive('/') ? '4px solid' : '4px solid'}
                    borderLeftColor={isActive('/') ? 'maroon.500' : 'transparent'}
                    minH={{ base: "48px", md: "auto" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    cursor="pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <Text fontWeight="600" color={isActive('/') ? 'maroon.500' : 'gray.700'} fontSize={{ base: "md", md: "lg" }}>
                      🏠 Home
                    </Text>
                    <Text fontSize="lg" color="gray.400" opacity={0.7}>›</Text>
                  </Box>
                </RouterLink>

                <RouterLink to="/contact" onClick={onClose}>
                  <Box
                    p={{ base: 3, md: 4 }}
                    borderRadius="lg"
                    bg={isActive('/contact') ? 'maroon.50' : 'transparent'}
                    _hover={{ bg: 'gray.50', transform: 'translateX(4px)' }}
                    transition="all 0.2s ease"
                    borderLeft={isActive('/contact') ? '4px solid' : '4px solid'}
                    borderLeftColor={isActive('/contact') ? 'maroon.500' : 'transparent'}
                    minH={{ base: "48px", md: "auto" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    cursor="pointer"
                    role="button"
                    tabIndex={0}
                  >
                    <Text fontWeight="600" color={isActive('/contact') ? 'maroon.500' : 'gray.700'} fontSize={{ base: "md", md: "lg" }}>
                      📞 Contact Us
                    </Text>
                    <Text fontSize="lg" color="gray.400" opacity={0.7}>›</Text>
                  </Box>
                </RouterLink>
              </VStack>

              {/* About Section */}
              <Box>
                <Text
                  fontWeight="700"
                  fontSize="sm"
                  color="maroon.500"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  mb={2}
                >
                  About Our School
                </Text>
                <VStack spacing={1} align="stretch">
                  {[
                    { name: 'Our Story', to: '/about', emoji: '📖' },
                    { name: 'Church Heritage', to: '/church', emoji: '⛪' },
                    { name: 'Our Community', to: '/community', emoji: '🤝' },
                    { name: 'Photo Gallery', to: '/gallery', emoji: '📸' },
                  ].map((item) => (
                    <RouterLink key={item.to} to={item.to} onClick={onClose}>
                      <Box
                        p={{ base: 2.5, md: 3 }}
                        borderRadius="lg"
                        bg={isActive(item.to) ? 'cream.50' : 'transparent'}
                        _hover={{ bg: 'cream.50', transform: 'translateX(2px)' }}
                        transition="all 0.2s ease"
                        borderLeft={isActive(item.to) ? '3px solid' : '3px solid'}
                        borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                        minH={{ base: "44px", md: "auto" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        cursor="pointer"
                        role="button"
                        tabIndex={0}
                      >
                        <Text fontWeight="500" color={isActive(item.to) ? 'maroon.500' : 'gray.600'} fontSize={{ base: "sm", md: "md" }}>
                          {item.emoji} {item.name}
                        </Text>
                        <Text fontSize="md" color="gray.400" opacity={0.6}>›</Text>
                      </Box>
                    </RouterLink>
                  ))}
                </VStack>
              </Box>

              {/* Academics Section */}
              <Box>
                <Text
                  fontWeight="700"
                  fontSize="sm"
                  color="maroon.500"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  mb={2}
                >
                  Academics
                </Text>
                <VStack spacing={1} align="stretch">
                  {[
                    { name: 'Our Curriculum', to: '/academics', emoji: '📚' },
                    { name: 'Assessment & Results', to: '/assessment', emoji: '📊' },
                    { name: 'School Activities', to: '/activities', emoji: '⚽' },
                  ].map((item) => (
                    <RouterLink key={item.to} to={item.to} onClick={onClose}>
                      <Box
                        p={{ base: 2.5, md: 3 }}
                        borderRadius="lg"
                        bg={isActive(item.to) ? 'cream.50' : 'transparent'}
                        _hover={{ bg: 'cream.50', transform: 'translateX(2px)' }}
                        transition="all 0.2s ease"
                        borderLeft={isActive(item.to) ? '3px solid' : '3px solid'}
                        borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                        minH={{ base: "44px", md: "auto" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        cursor="pointer"
                        role="button"
                        tabIndex={0}
                      >
                        <Text fontWeight="500" color={isActive(item.to) ? 'maroon.500' : 'gray.600'} fontSize={{ base: "sm", md: "md" }}>
                          {item.emoji} {item.name}
                        </Text>
                        <Text fontSize="md" color="gray.400" opacity={0.6}>›</Text>
                      </Box>
                    </RouterLink>
                  ))}
                </VStack>
              </Box>

              {/* Admissions Section */}
              <Box>
                <Text
                  fontWeight="700"
                  fontSize="sm"
                  color="maroon.500"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  mb={2}
                >
                  Join Our School
                </Text>
                <VStack spacing={1} align="stretch">
                  {[
                    { name: 'How to Apply', to: '/admissions', emoji: '📝' },
                    { name: 'Boarding Life', to: '/boarding', emoji: '🏠' },
                    { name: 'School Transport', to: '/transport', emoji: '🚌' },
                  ].map((item) => (
                    <RouterLink key={item.to} to={item.to} onClick={onClose}>
                      <Box
                        p={{ base: 2.5, md: 3 }}
                        borderRadius="lg"
                        bg={isActive(item.to) ? 'cream.50' : 'transparent'}
                        _hover={{ bg: 'cream.50', transform: 'translateX(2px)' }}
                        transition="all 0.2s ease"
                        borderLeft={isActive(item.to) ? '3px solid' : '3px solid'}
                        borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                        minH={{ base: "44px", md: "auto" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        cursor="pointer"
                        role="button"
                        tabIndex={0}
                      >
                        <Text fontWeight="500" color={isActive(item.to) ? 'maroon.500' : 'gray.600'} fontSize={{ base: "sm", md: "md" }}>
                          {item.emoji} {item.name}
                        </Text>
                        <Text fontSize="md" color="gray.400" opacity={0.6}>›</Text>
                      </Box>
                    </RouterLink>
                  ))}
                </VStack>
              </Box>

              {/* Our Team */}
              <RouterLink to="/staff" onClick={onClose}>
                <Box
                  p={{ base: 3, md: 4 }}
                  borderRadius="lg"
                  bg={isActive('/staff') ? 'maroon.50' : 'transparent'}
                  _hover={{ bg: 'gray.50', transform: 'translateX(4px)' }}
                  transition="all 0.2s ease"
                  borderLeft={isActive('/staff') ? '4px solid' : '4px solid'}
                  borderLeftColor={isActive('/staff') ? 'maroon.500' : 'transparent'}
                  minH={{ base: "48px", md: "auto" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  role="button"
                  tabIndex={0}
                >
                  <Text fontWeight="600" color={isActive('/staff') ? 'maroon.500' : 'gray.700'} fontSize={{ base: "md", md: "lg" }}>
                    👥 Meet Our Team
                  </Text>
                  <Text fontSize="lg" color="gray.400" opacity={0.7}>›</Text>
                </Box>
              </RouterLink>
            </VStack>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
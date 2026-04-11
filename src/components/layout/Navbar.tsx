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
  DrawerBody,
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
              <Text fontSize={{ base: 'sm', md: 'lg' }} fontWeight="700" color="maroon.600" lineHeight="1.2">
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
                      _hover={{ bg: 'maroon.600', color: 'white', transform: 'translateX(4px)' }}
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
            bgGradient="linear(to-r, maroon.500, maroon.600)"
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

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
        <DrawerContent bg="white">
          {/* Drawer Header with Logo */}
          <Flex 
            align="center" 
            justify="space-between"
            px={6}
            py={4}
            borderBottom="1px solid"
            borderColor="gray.100"
            bg="cream.50"
          >
            <Flex align="center" gap={3}>
              <Image 
                src="/images/st-james-promary-logo.jpg" 
                alt="School Logo" 
                h="45px"
                objectFit="contain"
              />
              <Box>
                <Text fontSize="md" fontWeight="700" color="maroon.600" lineHeight="1.2">
                  St James Zongoro
                </Text>
                <Text fontSize="xs" fontWeight="600" color="gray.500" letterSpacing="0.5px">
                  PRIMARY SCHOOL
                </Text>
              </Box>
            </Flex>
            <DrawerCloseButton 
              size="lg" 
              color="maroon.500"
              _hover={{ bg: 'maroon.100' }}
            />
          </Flex>
          
          {/* Navigation Links */}
          <DrawerBody px={0} py={4}>
            <VStack spacing={0} align="stretch">
              {/* Main Links */}
              {[
                { name: 'Home', to: '/' },
                { name: 'Contact', to: '/contact' },
              ].map((item) => (
                <RouterLink key={item.to} to={item.to} onClick={onClose}>
                  <Flex 
                    px={6} 
                    py={4} 
                    align="center" 
                    justify="space-between"
                    bg={isActive(item.to) ? 'cream.50' : 'transparent'}
                    borderLeft="3px solid"
                    borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                    _hover={{ bg: 'cream.50' }}
                    transition="all 0.2s ease"
                  >
                    <Text 
                      fontWeight="600" 
                      fontSize="md"
                      color={isActive(item.to) ? 'maroon.500' : 'dark.500'}
                    >
                      {item.name}
                    </Text>
                  </Flex>
                </RouterLink>
              ))}

              {/* About Section */}
              <Box pt={4}>
                <Text 
                  fontWeight="700" 
                  fontSize="xs" 
                  color="maroon.500" 
                  textTransform="uppercase" 
                  letterSpacing="1px"
                  px={6}
                  pb={2}
                >
                  About
                </Text>
                {[
                  { name: 'Our School', to: '/about' },
                  { name: 'Anglican Heritage', to: '/church' },
                  { name: 'Community', to: '/community' },
                  { name: 'Gallery', to: '/gallery' },
                ].map((item) => (
                  <RouterLink key={item.to} to={item.to} onClick={onClose}>
                    <Flex 
                      px={6} 
                      py={3}
                      align="center"
                      bg={isActive(item.to) ? 'cream.50' : 'transparent'}
                      borderLeft="3px solid"
                      borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                      _hover={{ bg: 'cream.50' }}
                      transition="all 0.2s ease"
                    >
                      <Text 
                        fontWeight="500" 
                        fontSize="md"
                        color={isActive(item.to) ? 'maroon.500' : 'gray.600'}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </RouterLink>
                ))}
              </Box>

              {/* Academics Section */}
              <Box pt={4}>
                <Text 
                  fontWeight="700" 
                  fontSize="xs" 
                  color="maroon.500" 
                  textTransform="uppercase" 
                  letterSpacing="1px"
                  px={6}
                  pb={2}
                >
                  Academics
                </Text>
                {[
                  { name: 'Curriculum', to: '/academics' },
                  { name: 'Assessment & Analysis', to: '/assessment' },
                  { name: 'Activities', to: '/activities' },
                ].map((item) => (
                  <RouterLink key={item.to} to={item.to} onClick={onClose}>
                    <Flex 
                      px={6} 
                      py={3}
                      align="center"
                      bg={isActive(item.to) ? 'cream.50' : 'transparent'}
                      borderLeft="3px solid"
                      borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                      _hover={{ bg: 'cream.50' }}
                      transition="all 0.2s ease"
                    >
                      <Text 
                        fontWeight="500" 
                        fontSize="md"
                        color={isActive(item.to) ? 'maroon.500' : 'gray.600'}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </RouterLink>
                ))}
              </Box>

              {/* Admissions Section */}
              <Box pt={4}>
                <Text 
                  fontWeight="700" 
                  fontSize="xs" 
                  color="maroon.500" 
                  textTransform="uppercase" 
                  letterSpacing="1px"
                  px={6}
                  pb={2}
                >
                  Admissions
                </Text>
                {[
                  { name: 'Admissions', to: '/admissions' },
                  { name: 'Boarding', to: '/boarding' },
                  { name: 'Transport', to: '/transport' },
                ].map((item) => (
                  <RouterLink key={item.to} to={item.to} onClick={onClose}>
                    <Flex 
                      px={6} 
                      py={3}
                      align="center"
                      bg={isActive(item.to) ? 'cream.50' : 'transparent'}
                      borderLeft="3px solid"
                      borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                      _hover={{ bg: 'cream.50' }}
                      transition="all 0.2s ease"
                    >
                      <Text 
                        fontWeight="500" 
                        fontSize="md"
                        color={isActive(item.to) ? 'maroon.500' : 'gray.600'}
                      >
                        {item.name}
                      </Text>
                    </Flex>
                  </RouterLink>
                ))}
              </Box>

              {/* Team */}
              <Box pt={4}>
                <RouterLink to="/staff" onClick={onClose}>
                  <Flex 
                    px={6} 
                    py={3}
                    align="center"
                    bg={isActive('/staff') ? 'cream.50' : 'transparent'}
                    borderLeft="3px solid"
                    borderLeftColor={isActive('/staff') ? 'maroon.500' : 'transparent'}
                    _hover={{ bg: 'cream.50' }}
                    transition="all 0.2s ease"
                  >
                    <Text 
                      fontWeight="600" 
                      fontSize="md"
                      color={isActive('/staff') ? 'maroon.500' : 'dark.500'}
                    >
                      Our Team
                    </Text>
                  </Flex>
                </RouterLink>
              </Box>
            </VStack>

            {/* CTA Button */}
            <Box px={6} pt={8}>
              <Button
                as={RouterLink}
                to="/admissions"
                onClick={onClose}
                w="100%"
                size="lg"
                bgGradient="linear(to-r, maroon.500, maroon.600)"
                color="white"
                fontWeight="700"
                borderRadius="xl"
                _hover={{ 
                  bgGradient: 'linear(to-r, maroon.600, maroon.700)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(128, 0, 32, 0.3)'
                }}
                transition="all 0.3s ease"
              >
                Apply Now
              </Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
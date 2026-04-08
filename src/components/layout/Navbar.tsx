import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
  scrollPosition: number;
}

const Navbar = ({ scrollPosition }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isScrolled = scrollPosition > 50;

  const scrollLinks = [
    { name: 'About', to: 'about' },
    { name: 'Academics', to: 'academics' },
    { name: 'Church', to: 'church' },
    { name: 'Community', to: 'community' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      bg={isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'white'}
      boxShadow={isScrolled ? 'md' : 'none'}
      backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      transition="all 0.3s ease"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="1400px"
        mx="auto"
        py={4}
        px={4}
      >
        <RouterLink to="/" style={{ textDecoration: 'none' }}>
          <Text fontSize="xl" fontWeight="700" color="maroon.500" _hover={{ textDecoration: 'none' }}>
            St James Zongoro Primary
          </Text>
        </RouterLink>

        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <RouterLink to="/">
            <Text 
              fontWeight="500" 
              color={location.pathname === '/' ? 'maroon.500' : 'dark.500'} 
              _hover={{ color: 'maroon.500' }}
              cursor="pointer"
            >
              Home
            </Text>
          </RouterLink>

          <Menu>
            <MenuButton as={Text} cursor="pointer" fontWeight="500" _hover={{ color: 'maroon.500' }}>
              Academics <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/#academics">Curriculum</MenuItem>
              <MenuItem as={RouterLink} to="/#results">Results</MenuItem>
              <MenuItem as={RouterLink} to="/activities">Activities</MenuItem>
            </MenuList>
          </Menu>

          <RouterLink to="/admissions">
            <Text fontWeight="500" _hover={{ color: 'maroon.500' }} cursor="pointer">
              Admissions
            </Text>
          </RouterLink>

          <RouterLink to="/boarding">
            <Text fontWeight="500" _hover={{ color: 'maroon.500' }} cursor="pointer">
              Boarding
            </Text>
          </RouterLink>

          <RouterLink to="/staff">
            <Text fontWeight="500" _hover={{ color: 'maroon.500' }} cursor="pointer">
              Our Team
            </Text>
          </RouterLink>

          {isHomePage && scrollLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Text cursor="pointer" fontWeight="500" _hover={{ color: 'maroon.500' }}>
                {link.name}
              </Text>
            </ScrollLink>
          ))}
        </HStack>

        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={12}>
            <VStack spacing={4} align="stretch">
              <RouterLink to="/" onClick={onClose}>
                <Text fontWeight="500" fontSize="lg" _hover={{ color: 'maroon.500' }}>Home</Text>
              </RouterLink>

              <RouterLink to="/admissions" onClick={onClose}>
                <Text fontWeight="500" fontSize="lg" _hover={{ color: 'maroon.500' }}>Admissions</Text>
              </RouterLink>

              <RouterLink to="/boarding" onClick={onClose}>
                <Text fontWeight="500" fontSize="lg" _hover={{ color: 'maroon.500' }}>Boarding</Text>
              </RouterLink>

              <RouterLink to="/staff" onClick={onClose}>
                <Text fontWeight="500" fontSize="lg" _hover={{ color: 'maroon.500' }}>Our Team</Text>
              </RouterLink>

              <RouterLink to="/activities" onClick={onClose}>
                <Text fontWeight="500" fontSize="lg" _hover={{ color: 'maroon.500' }}>Activities</Text>
              </RouterLink>

              {isHomePage && scrollLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={onClose}
                >
                  <Text cursor="pointer" fontSize="lg" fontWeight="500" _hover={{ color: 'maroon.500' }}>
                    {link.name}
                  </Text>
                </ScrollLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
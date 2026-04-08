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
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  scrollPosition: number;
}

interface DropdownItem {
  name: string;
  to: string;
}

interface DropdownGroup {
  name: string;
  items: DropdownItem[];
}

const Navbar = ({ scrollPosition }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isScrolled = scrollPosition > 50;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return false; // Hash links don't highlight dropdowns
    }
    return location.pathname === path;
  };

  const isDropdownActive = (items: DropdownItem[]) => {
    return items.some(item => {
      if (item.to.startsWith('/#')) return false; // Ignore hash links
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
        { name: 'Grade 7 Results', to: '/results' },
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

        <HStack spacing={3} display={{ base: 'none', lg: 'flex' }}>
          <RouterLink to="/">
            <Text 
              fontWeight="500" 
              color={isActive('/') ? 'maroon.500' : 'dark.500'} 
              _hover={{ color: 'maroon.500' }}
              cursor="pointer"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: isActive('/') ? '100%' : '0%',
                height: '2px',
                bg: 'maroon.500',
                transition: 'width 0.2s ease',
              }}
            >
              Home
            </Text>
          </RouterLink>

          {dropdowns.map((dropdown) => (
            <Box 
              key={dropdown.name}
              position="relative"
              onMouseEnter={() => setOpenDropdown(dropdown.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <HStack 
                cursor="pointer" 
                fontWeight="500"
                color={isDropdownActive(dropdown.items) || openDropdown === dropdown.name ? 'maroon.500' : 'dark.500'}
                _hover={{ color: 'maroon.500' }}
                spacing={1}
              >
                <Text>{dropdown.name}</Text>
                <ChevronDownIcon 
                  transition="all 0.2s" 
                  transform={openDropdown === dropdown.name ? 'rotate(180deg)' : 'rotate(0)'} 
                />
              </HStack>

              <Box
                position="absolute"
                top="100%"
                left={0}
                minW="180px"
                bg="white"
                borderRadius="lg"
                shadow="xl"
                border="1px"
                borderColor="gray.200"
                opacity={openDropdown === dropdown.name ? 1 : 0}
                visibility={openDropdown === dropdown.name ? 'visible' : 'hidden'}
                transform={openDropdown === dropdown.name ? 'translateY(0)' : 'translateY(-10px)'}
                transition="all 0.2s ease-in-out"
                zIndex={999}
                py={2}
              >
                {dropdown.items.map((item, idx) => (
                  <RouterLink 
                    key={idx} 
                    to={item.to}
                    style={{ textDecoration: 'none' }}
                  >
                    <Text
                      px={4}
                      py={2}
                      fontWeight="500"
                      color={isActive(item.to) ? 'maroon.500' : 'gray.700'}
                      bg={isActive(item.to) ? 'maroon.50' : 'transparent'}
                      cursor="pointer"
                      _hover={{ bg: 'maroon.500', color: 'white' }}
                      transition="all 0.2s"
                    >
                      {item.name}
                    </Text>
                  </RouterLink>
                ))}
              </Box>
            </Box>
          ))}

          <RouterLink to="/staff">
            <Text 
              fontWeight="500" 
              color={isActive('/staff') ? 'maroon.500' : 'dark.500'} 
              _hover={{ color: 'maroon.500' }} 
              cursor="pointer"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: isActive('/staff') ? '100%' : '0%',
                height: '2px',
                bg: 'maroon.500',
                transition: 'width 0.2s ease',
              }}
            >
              Our Team
            </Text>
          </RouterLink>

          <RouterLink to="/gallery">
            <Text 
              fontWeight="500" 
              color={isActive('/gallery') ? 'maroon.500' : 'dark.500'} 
              _hover={{ color: 'maroon.500' }} 
              cursor="pointer"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: isActive('/gallery') ? '100%' : '0%',
                height: '2px',
                bg: 'maroon.500',
                transition: 'width 0.2s ease',
              }}
            >
              Gallery
            </Text>
          </RouterLink>

          <RouterLink to="/contact">
            <Text 
              fontWeight="500" 
              color={isActive('/contact') ? 'maroon.500' : 'dark.500'} 
              _hover={{ color: 'maroon.500' }} 
              cursor="pointer"
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                width: isActive('/contact') ? '100%' : '0%',
                height: '2px',
                bg: 'maroon.500',
                transition: 'width 0.2s ease',
              }}
            >
              Contact
            </Text>
          </RouterLink>
        </HStack>

        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          variant="ghost"
          display={{ base: 'flex', lg: 'none' }}
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
                <Text fontWeight="500" fontSize="lg" color={isActive('/') ? 'maroon.500' : 'dark.500'} _hover={{ color: 'maroon.500' }}>Home</Text>
              </RouterLink>

              <Text fontWeight="600" fontSize="sm" color="gray.500" pt={2}>About</Text>
              <RouterLink to="/about" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/about') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Our School</Text>
              </RouterLink>
              <RouterLink to="/church" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/church') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Anglican Heritage</Text>
              </RouterLink>
              <RouterLink to="/community" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/community') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Community</Text>
              </RouterLink>
              <RouterLink to="/gallery" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/gallery') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Gallery</Text>
              </RouterLink>

              <Text fontWeight="600" fontSize="sm" color="gray.500" pt={2}>Academics</Text>
              <RouterLink to="/academics" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/academics') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Curriculum</Text>
              </RouterLink>
              <RouterLink to="/results" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/results') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Grade 7 Results</Text>
              </RouterLink>
              <RouterLink to="/activities" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/activities') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Activities</Text>
              </RouterLink>

              <Text fontWeight="600" fontSize="sm" color="gray.500" pt={2}>Admissions</Text>
              <RouterLink to="/admissions" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/admissions') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Admissions</Text>
              </RouterLink>
              <RouterLink to="/boarding" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/boarding') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Boarding</Text>
              </RouterLink>
              <RouterLink to="/transport" onClick={onClose}>
                <Text pl={4} fontWeight="500" color={isActive('/transport') ? 'maroon.500' : 'gray.600'} _hover={{ color: 'maroon.500' }}>Transport</Text>
              </RouterLink>

              <RouterLink to="/staff" onClick={onClose}>
                <Text fontWeight="500" fontSize="lg" color={isActive('/staff') ? 'maroon.500' : 'dark.500'} _hover={{ color: 'maroon.500' }}>Our Team</Text>
              </RouterLink>

              <RouterLink to="/contact" onClick={onClose}>
                <Text fontWeight="500" fontSize="lg" color={isActive('/contact') ? 'maroon.500' : 'dark.500'} _hover={{ color: 'maroon.500' }}>Contact</Text>
              </RouterLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
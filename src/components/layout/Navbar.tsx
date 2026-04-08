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
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaSchool } from 'react-icons/fa';

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
      boxShadow={isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none'}
      backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
      transition="all 0.3s ease"
      borderBottom={isScrolled ? 'none' : '1px solid'}
      borderColor="gray.100"
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
            <Flex
              align="center"
              justify="center"
              w="45px"
              h="45px"
              borderRadius="xl"
              bgGradient="linear(135deg, maroon.500 0%, maroon.700 100%)"
              boxShadow="0 4px 14px rgba(128, 0, 32, 0.3)"
            >
              <Icon as={FaSchool} color="white" fontSize="lg" />
            </Flex>
            <Box display={{ base: 'none', md: 'block' }}>
              <Text fontSize="lg" fontWeight="700" color="maroon.600" lineHeight="1.2">
                St James Zongoro
              </Text>
              <Text fontSize="xs" fontWeight="500" color="gray.500" letterSpacing="0.5px">
                PRIMARY SCHOOL
              </Text>
            </Box>
          </Flex>
        </RouterLink>

        <HStack spacing={1} display={{ base: 'none', lg: 'flex' }}>
          <RouterLink to="/">
            <Button
              variant="ghost"
              fontWeight="500"
              color={isActive('/') ? 'maroon.500' : 'gray.600'}
              _hover={{ bg: 'maroon.50', color: 'maroon.500' }}
              size="sm"
              px={3}
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
                fontWeight="500"
                color={isDropdownActive(dropdown.items) || openDropdown === dropdown.name ? 'maroon.500' : 'gray.600'}
                _hover={{ bg: 'maroon.50', color: 'maroon.500' }}
                size="sm"
                px={3}
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
                minW="180px"
                bg="white"
                borderRadius="xl"
                shadow="0 10px 40px rgba(0,0,0,0.12)"
                border="1px"
                borderColor="gray.100"
                opacity={openDropdown === dropdown.name ? 1 : 0}
                visibility={openDropdown === dropdown.name ? 'visible' : 'hidden'}
                transform={openDropdown === dropdown.name ? 'translateY(0)' : 'translateY(-10px)'}
                transition="all 0.2s ease-in-out"
                zIndex={999}
                py={2}
                mt={1}
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
                      fontSize="sm"
                      color={isActive(item.to) ? 'white' : 'gray.700'}
                      bg={isActive(item.to) ? 'maroon.500' : 'transparent'}
                      cursor="pointer"
                      _hover={{ bg: 'maroon.500', color: 'white' }}
                      transition="all 0.2s"
                      borderRadius="0"
                    >
                      {item.name}
                    </Text>
                  </RouterLink>
                ))}
              </Box>
            </Box>
          ))}

          <RouterLink to="/staff">
            <Button
              variant="ghost"
              fontWeight="500"
              color={isActive('/staff') ? 'maroon.500' : 'gray.600'}
              _hover={{ bg: 'maroon.50', color: 'maroon.500' }}
              size="sm"
              px={3}
            >
              Our Team
            </Button>
          </RouterLink>

          <RouterLink to="/gallery">
            <Button
              variant="ghost"
              fontWeight="500"
              color={isActive('/gallery') ? 'maroon.500' : 'gray.600'}
              _hover={{ bg: 'maroon.50', color: 'maroon.500' }}
              size="sm"
              px={3}
            >
              Gallery
            </Button>
          </RouterLink>

          <RouterLink to="/contact">
            <Button
              variant="ghost"
              fontWeight="500"
              color={isActive('/contact') ? 'maroon.500' : 'gray.600'}
              _hover={{ bg: 'maroon.50', color: 'maroon.500' }}
              size="sm"
              px={3}
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
            _hover={{ bgGradient: 'linear(to-r, maroon.600, maroon.700)', transform: 'translateY(-1px)' }}
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
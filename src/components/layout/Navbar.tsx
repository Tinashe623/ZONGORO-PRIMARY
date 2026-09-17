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
  Divider,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon, LockIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { MANAGEMENT_ENROLL_URL, MANAGEMENT_LOGIN_URL } from '../../config';

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
        { name: 'Our Team', to: '/staff' },
      ],
    },
    {
      name: 'Academics',
      items: [
        { name: 'Curriculum', to: '/academics' },
        { name: 'Assessment & Results', to: '/assessment' },
        { name: 'School Activities', to: '/activities' },
      ],
    },
    {
      name: 'Admissions',
      items: [
        { name: 'How to Apply', to: '/admissions' },
        { name: 'Boarding Life', to: '/boarding' },
        { name: 'School Transport', to: '/transport' },
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
      bg={isScrolled ? 'rgba(250, 243, 224, 0.92)' : 'rgba(250, 243, 224, 0.78)'}
      boxShadow={isScrolled ? '0 4px 24px rgba(130, 0, 0, 0.10)' : 'none'}
      backdropFilter={isScrolled ? 'blur(16px)' : 'blur(10px)'}
      style={{ WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'blur(10px)' }}
      transition="all 0.3s ease"
      borderBottom={isScrolled ? 'none' : '1px solid'}
      borderColor="maroon.100"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="3px"
        bgGradient="linear(to-r, maroon.500, forest.500)"
        boxShadow="0 2px 8px rgba(128, 0, 32, 0.25)"
      />
      <Flex
        justify="space-between"
        align="center"
        maxW="1400px"
        mx="auto"
        py={3}
        px={4}
        gap={4}
      >
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <Flex align="center" gap={4} cursor="pointer">
              <Box
                w="52px"
                h="52px"
                flexShrink={0}
              >
                <Image
                  src="/images/st-james-zongoro-primary-logo.png"
                  alt="St James Zongoro Primary School Logo"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Box flexShrink={0}>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  fontWeight="700"
                  color="maroon.500"
                  lineHeight="1.1"
                  letterSpacing="-0.02em"
                >
                  St James Zongoro
                </Text>
                <Text
                  fontSize="xs"
                  fontWeight="600"
                  color="forest.500"
                  letterSpacing="0.18em"
                  mt={0.5}
                  display={{ base: 'none', sm: 'block' }}
                >
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
              color={isActive('/') ? 'maroon.600' : 'gray.600'}
              bg={isActive('/') ? 'maroon.50' : 'transparent'}
              _hover={{ color: 'maroon.600', bg: 'maroon.50', transform: 'translateY(-1px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
              position="relative"
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
                color={isDropdownActive(dropdown.items) || openDropdown === dropdown.name ? 'maroon.600' : 'gray.600'}
                bg={isDropdownActive(dropdown.items) ? 'maroon.50' : 'transparent'}
                _hover={{ color: 'maroon.600', bg: 'maroon.50', transform: 'translateY(-1px)' }}
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
                minW="220px"
                bg="rgba(255, 255, 255, 0.94)"
                borderRadius="xl"
                shadow="0 12px 32px rgba(130, 0, 0, 0.14)"
                border="1px"
                borderColor="maroon.100"
                opacity={openDropdown === dropdown.name ? 1 : 0}
                visibility={openDropdown === dropdown.name ? 'visible' : 'hidden'}
                transform={openDropdown === dropdown.name ? 'translateY(0)' : 'translateY(-8px)'}
                transition="all 0.2s ease-in-out"
                backdropFilter="blur(12px)"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
                zIndex={999}
                py={2}
                mt={2}
                overflow="hidden"
              >
                {dropdown.items.map((item, idx) => (
                  <Box key={idx}>
                    <RouterLink 
                      to={item.to}
                      style={{ textDecoration: 'none' }}
                    >
                      <Box
                        px={4}
                        py={2.5}
                        fontWeight="600"
                        fontSize="sm"
                        color={isActive(item.to) ? 'maroon.600' : 'gray.700'}
                        bg={isActive(item.to) ? 'maroon.50' : 'transparent'}
                        cursor="pointer"
                        _hover={{ bg: 'maroon.50', color: 'maroon.600' }}
                        transition="all 0.15s ease"
                        borderLeftWidth="3px"
                        borderLeftColor={isActive(item.to) ? 'forest.500' : 'transparent'}
                      >
                        {item.name}
                      </Box>
                    </RouterLink>
                    {idx < dropdown.items.length - 1 && (
                      <Divider mx={4} borderColor="gray.100" />
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}

          <RouterLink to="/contact">
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive('/contact') ? 'maroon.600' : 'gray.600'}
              bg={isActive('/contact') ? 'maroon.50' : 'transparent'}
              _hover={{ color: 'maroon.600', bg: 'maroon.50', transform: 'translateY(-1px)' }}
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
            as="a"
            href={MANAGEMENT_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            leftIcon={<LockIcon />}
            variant="outline"
            borderColor="maroon.200"
            fontWeight="600"
            color="maroon.600"
            _hover={{ color: 'maroon.500', bg: 'maroon.50', borderColor: 'maroon.300', transform: 'translateY(-1px)' }}
            _active={{ transform: 'translateY(0)' }}
          >
            Login
          </Button>
          <Button
            as="a"
            href={MANAGEMENT_ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            rightIcon={<ArrowForwardIcon />}
            bgGradient="linear(to-r, maroon.500, maroon.600)"
            color="white"
            fontWeight="600"
            display={{ base: 'none', md: 'flex' }}
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(130, 0, 0, 0.3)', bgGradient: 'linear(to-r, maroon.500, maroon.600)' }}
          >
            Apply Now
          </Button>
          
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            size="lg"
            fontWeight="bold"
            color="maroon.600"
            display={{ base: 'flex', lg: 'none' }}
            onClick={onOpen}
            _hover={{ bg: 'maroon.100' }}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
        <DrawerOverlay bg="blackAlpha.600" />
        <DrawerContent bg="rgba(255, 252, 246, 0.98)" maxH="100vh">
          <Flex
            align="center"
            justify="space-between"
            px={6}
            py={4}
            borderBottom="1px solid"
            borderColor="maroon.100"
            bg="rgba(250, 243, 224, 0.9)"
            backdropFilter="blur(10px)"
            style={{ WebkitBackdropFilter: 'blur(10px)' }}
            position="sticky"
            top={0}
            zIndex={2}
          >
            <Flex align="center" gap={4}>
              <Box w="52px" h="52px">
                <Image
                  src="/images/st-james-zongoro-primary-logo.png"
                  alt="St James Zongoro Primary School Logo"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Box>
                <Text fontSize="lg" fontWeight="700" color="maroon.500" lineHeight="1.1" letterSpacing="-0.02em">
                  St James Zongoro
                </Text>
                <Text fontSize="xs" fontWeight="600" color="forest.500" letterSpacing="0.18em" mt={0.5} display={{ base: 'none', sm: 'block' }}>
                  PRIMARY SCHOOL
                </Text>
              </Box>
            </Flex>
            <DrawerCloseButton size="lg" color="maroon.500" _hover={{ bg: 'maroon.100' }} />
          </Flex>

          <Box
            flex={1}
            overflowY="auto"
            px={6}
            py={6}
            pb={6}
            sx={{
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(0,0,0,0.04)',
                borderRadius: '10px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(128,0,32,0.35)',
                borderRadius: '10px',
              },
            }}
          >
            <VStack spacing={5} align="stretch">
              <HStack spacing={3} align="stretch">
                <Button
                  as="a"
                  href={MANAGEMENT_ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  flex={1}
                  rightIcon={<ArrowForwardIcon />}
                  bgGradient="linear(to-r, maroon.500, maroon.600)"
                  color="white"
                  fontWeight="600"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(130, 0, 0, 0.3)' }}
                >
                  Apply Now
                </Button>
                <Button
                  as="a"
                  href={MANAGEMENT_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  flex={1}
                  leftIcon={<LockIcon />}
                  variant="outline"
                  borderColor="maroon.200"
                  color="maroon.600"
                  fontWeight="600"
                  _hover={{ bg: 'maroon.50', borderColor: 'maroon.300' }}
                >
                  Login
                </Button>
              </HStack>

              <Divider borderColor="maroon.100" />

              <RouterLink to="/" onClick={onClose}>
                <Box
                  px={4}
                  py={3}
                  borderRadius="lg"
                  bg={isActive('/') ? 'maroon.50' : 'transparent'}
                  _hover={{ bg: 'maroon.50', transform: 'translateX(4px)' }}
                  transition="all 0.2s ease"
                  borderLeftWidth="4px"
                  borderLeftColor={isActive('/') ? 'maroon.500' : 'transparent'}
                  cursor="pointer"
                >
                  <Text fontWeight="600" color={isActive('/') ? 'maroon.500' : 'gray.700'} fontSize="md">
                    Home
                  </Text>
                </Box>
              </RouterLink>

              <VStack align="stretch" spacing={4}>
                <Box>
                  <Text
                    fontWeight="700"
                    fontSize="xs"
                    color="forest.500"
                    textTransform="uppercase"
                    letterSpacing="0.12em"
                    mb={2}
                    px={4}
                  >
                    About Our School
                  </Text>
                  <VStack spacing={0.5} align="stretch">
                    {[
                      { name: 'Our School', to: '/about' },
                      { name: 'Anglican Heritage', to: '/church' },
                      { name: 'Community', to: '/community' },
                      { name: 'Gallery', to: '/gallery' },
                      { name: 'Our Team', to: '/staff' },
                    ].map((item) => (
                      <RouterLink key={item.to} to={item.to} onClick={onClose}>
                        <Box
                          px={4}
                          py={2.5}
                          borderRadius="md"
                          bg={isActive(item.to) ? 'maroon.50' : 'transparent'}
                          _hover={{ bg: 'maroon.50', transform: 'translateX(2px)' }}
                          transition="all 0.2s ease"
                          borderLeftWidth="3px"
                          borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                          cursor="pointer"
                        >
                          <Text fontWeight="500" color={isActive(item.to) ? 'maroon.500' : 'gray.600'} fontSize="md">
                            {item.name}
                          </Text>
                        </Box>
                      </RouterLink>
                    ))}
                  </VStack>
                </Box>

                <Box>
                  <Text
                    fontWeight="700"
                    fontSize="xs"
                    color="forest.500"
                    textTransform="uppercase"
                    letterSpacing="0.12em"
                    mb={2}
                    px={4}
                  >
                    Academic Programs
                  </Text>
                  <VStack spacing={0.5} align="stretch">
                    {[
                      { name: 'Curriculum', to: '/academics' },
                      { name: 'Assessment & Results', to: '/assessment' },
                      { name: 'School Activities', to: '/activities' },
                    ].map((item) => (
                      <RouterLink key={item.to} to={item.to} onClick={onClose}>
                        <Box
                          px={4}
                          py={2.5}
                          borderRadius="md"
                          bg={isActive(item.to) ? 'maroon.50' : 'transparent'}
                          _hover={{ bg: 'maroon.50', transform: 'translateX(2px)' }}
                          transition="all 0.2s ease"
                          borderLeftWidth="3px"
                          borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                          cursor="pointer"
                        >
                          <Text fontWeight="500" color={isActive(item.to) ? 'maroon.500' : 'gray.600'} fontSize="md">
                            {item.name}
                          </Text>
                        </Box>
                      </RouterLink>
                    ))}
                  </VStack>
                </Box>

                <Box>
                  <Text
                    fontWeight="700"
                    fontSize="xs"
                    color="forest.500"
                    textTransform="uppercase"
                    letterSpacing="0.12em"
                    mb={2}
                    px={4}
                  >
                    Join Our School
                  </Text>
                  <VStack spacing={0.5} align="stretch">
                    {[
                      { name: 'How to Apply', to: '/admissions' },
                      { name: 'Boarding Life', to: '/boarding' },
                      { name: 'School Transport', to: '/transport' },
                    ].map((item) => (
                      <RouterLink key={item.to} to={item.to} onClick={onClose}>
                        <Box
                          px={4}
                          py={2.5}
                          borderRadius="md"
                          bg={isActive(item.to) ? 'maroon.50' : 'transparent'}
                          _hover={{ bg: 'maroon.50', transform: 'translateX(2px)' }}
                          transition="all 0.2s ease"
                          borderLeftWidth="3px"
                          borderLeftColor={isActive(item.to) ? 'maroon.500' : 'transparent'}
                          cursor="pointer"
                        >
                          <Text fontWeight="500" color={isActive(item.to) ? 'maroon.500' : 'gray.600'} fontSize="md">
                            {item.name}
                          </Text>
                        </Box>
                      </RouterLink>
                    ))}
                  </VStack>
                </Box>

                <Divider borderColor="maroon.100" />

                <RouterLink to="/contact" onClick={onClose}>
                  <Box
                    px={4}
                    py={3.5}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="maroon.200"
                    color="maroon.600"
                    bg="white"
                    _hover={{ bg: 'maroon.50', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(130, 0, 0, 0.12)' }}
                    transition="all 0.2s ease"
                    cursor="pointer"
                  >
                    <Flex align="center" justify="space-between">
                      <Text fontWeight="600">Contact Us</Text>
                      <ArrowForwardIcon />
                    </Flex>
                  </Box>
                </RouterLink>
              </VStack>
            </VStack>
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
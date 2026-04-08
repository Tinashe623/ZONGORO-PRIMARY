import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
  scrollPosition: number;
}

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Academics', to: 'academics' },
  { name: 'Church', to: 'church' },
  { name: 'Community', to: 'community' },
  { name: 'Transport', to: 'transport' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ scrollPosition }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isScrolled = scrollPosition > 50;

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
        <Box fontSize="xl" fontWeight="700" color="maroon.500">
          St James Zongoro Primary
        </Box>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Link
                cursor="pointer"
                fontWeight="500"
                position="relative"
                _hover={{
                  color: 'maroon.500',
                }}
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  bg: 'maroon.500',
                  transition: 'width 0.3s ease',
                }}
                sx={{
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {link.name}
              </Link>
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
            <VStack spacing={6} align="stretch">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={onClose}
                >
                  <Link
                    cursor="pointer"
                    fontSize="lg"
                    fontWeight="500"
                    _hover={{ color: 'maroon.500' }}
                  >
                    {link.name}
                  </Link>
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
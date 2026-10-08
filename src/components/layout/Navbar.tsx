import { useState, useRef, useEffect, Fragment } from 'react';
import type { CSSProperties } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Text,
  Button,
  Image,
  Divider,
} from '@chakra-ui/react';
import { ChevronDownIcon, LockIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { MANAGEMENT_LOGIN_URL } from '../../config';
import EnrollButton from '../ui/EnrollButton';

interface NavbarProps {
  scrollPosition: number;
  isScrolled?: boolean;
}

interface NavLink {
  name: string;
  to: string;
}

interface NavGroup {
  name: string;
  label: string;
  items: NavLink[];
}

const WHATSAPP_HREF = `https://wa.me/263773211929?text=${encodeURIComponent(
  'Hello St James Zongoro Primary School, I would like to make an enquiry.'
)}`;

const homeLink: NavLink = { name: 'Home', to: '/' };
const galleryLink: NavLink = { name: 'Gallery', to: '/gallery' };
const contactLink: NavLink = { name: 'Contact', to: '/contact' };

const navGroups: NavGroup[] = [
  {
    name: 'About',
    label: 'About Our School',
    items: [
      { name: 'Our School', to: '/about' },
      { name: 'Anglican Heritage', to: '/church' },
      { name: 'Community', to: '/community' },
      { name: 'Our Team', to: '/staff' },
    ],
  },
  {
    name: 'Academics',
    label: 'Academic Programs',
    items: [
      { name: 'Curriculum', to: '/academics' },
      { name: 'Assessment & Results', to: '/assessment' },
      { name: 'School Activities', to: '/activities' },
    ],
  },
  {
    name: 'Admissions',
    label: 'Join Our School',
    items: [
      { name: 'How to Apply', to: '/admissions' },
      { name: 'Boarding Life', to: '/boarding' },
      { name: 'School Transport', to: '/transport' },
    ],
  },
];

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.035,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

interface MenuGlyphProps {
  turned: boolean;
}

const MenuGlyph = ({ turned }: MenuGlyphProps) => {
  const line = (extra: CSSProperties): CSSProperties => ({
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '2.5px',
    borderRadius: '9999px',
    background: 'currentColor',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
    ...extra,
  });

  return (
    <Box position="relative" w="24px" h="18px" display="inline-block">
      <Box
        as="span"
        style={line({
          top: 0,
          transform: turned ? 'translateY(7.75px) rotate(45deg)' : 'translateY(0)',
        })}
      />
      <Box
        as="span"
        style={line({
          top: '7.75px',
          opacity: turned ? 0 : 1,
          transform: turned ? 'scaleX(0.4)' : 'scaleX(1)',
        })}
      />
      <Box
        as="span"
        style={line({
          bottom: 0,
          transform: turned ? 'translateY(-7.75px) rotate(-45deg)' : 'translateY(0)',
        })}
      />
    </Box>
  );
};

const DrawerCloseControl = ({ onClose }: { onClose: () => void }) => {
  const [turned, setTurned] = useState(false);
  const color = useColorModeValue('maroon.500', 'maroon.300');
  const hoverBg = useColorModeValue('maroon.100', 'whiteAlpha.100');

  useEffect(() => {
    const timer = window.setTimeout(() => setTurned(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <IconButton
      aria-label="Close menu"
      icon={<MenuGlyph turned={turned} />}
      variant="ghost"
      size="lg"
      color={color}
      borderRadius="full"
      _hover={{ bg: hoverBg }}
      _active={{ bg: hoverBg }}
      onClick={() => {
        setTurned(false);
        onClose();
      }}
    />
  );
};

const Navbar = ({ scrollPosition, isScrolled: isScrolledProp }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isScrolled = isScrolledProp ?? scrollPosition > 50;
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const navBg = useColorModeValue(
    isScrolled ? 'rgba(250, 243, 224, 0.92)' : 'rgba(250, 243, 224, 0.78)',
    isScrolled ? 'rgba(23, 20, 18, 0.92)' : 'rgba(23, 20, 18, 0.85)'
  );
  const dropdownBg = useColorModeValue('rgba(255, 255, 255, 0.94)', 'rgba(37, 33, 29, 0.96)');
  const drawerBg = useColorModeValue('rgba(255, 252, 246, 0.98)', 'rgba(23, 20, 18, 0.99)');
  const drawerHeaderBg = useColorModeValue('rgba(250, 243, 224, 0.9)', 'rgba(31, 27, 23, 0.9)');
  const hamburgerColor = useColorModeValue('maroon.600', 'maroon.300');
  const hamburgerHoverBg = useColorModeValue('maroon.100', 'whiteAlpha.100');
  const hoverBg = useColorModeValue('maroon.50', 'whiteAlpha.100');
  const activeBg = useColorModeValue('maroon.50', 'rgba(130, 0, 0, 0.3)');
  const activeBar = useColorModeValue('maroon.500', 'maroon.300');
  const activeText = useColorModeValue('maroon.500', 'maroon.300');
  const linkText = useColorModeValue('gray.700', 'gray.300');
  const forestAccent = useColorModeValue('forest.500', 'forest.300');
  const contactColor = useColorModeValue('maroon.600', 'maroon.300');
  const contactBorder = useColorModeValue('maroon.200', 'maroon.400');
  const whatsAppColor = useColorModeValue('forest.500', 'forest.300');
  const whatsAppBorder = useColorModeValue('forest.200', 'forest.600');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return false;
    }
    return location.pathname === path;
  };

  const isDropdownActive = (items: NavLink[]) => {
    return items.some(item => {
      if (item.to.startsWith('/#')) return false;
      return isActive(item.to);
    });
  };

  const renderNavLink = (link: NavLink, large: boolean) => {
    const active = isActive(link.to);
    return (
      <RouterLink to={link.to} onClick={onClose} style={{ textDecoration: 'none', display: 'block' }}>
        <Box
          px={4}
          py={large ? 3 : 2.5}
          borderRadius="lg"
          bg={active ? activeBg : 'transparent'}
          borderLeftWidth="4px"
          borderLeftColor={active ? activeBar : 'transparent'}
          _hover={{ bg: hoverBg, transform: 'translateX(4px)' }}
          _active={{ transform: 'translateX(4px)' }}
          transition="all 0.2s ease"
          cursor="pointer"
        >
          <Text
            fontFamily="heading"
            fontSize={large ? '2xl' : 'xl'}
            fontWeight="600"
            lineHeight="1.25"
            color={active ? activeText : linkText}
          >
            {link.name}
          </Text>
        </Box>
      </RouterLink>
    );
  };

  return (
    <Box
      ref={navRef}
      position="fixed"
      top="40px"
      left={0}
      right={0}
      zIndex={1000}
      bg={navBg}
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
        maxW="1200px"
        mx="auto"
        py={3}
        px={4}
        gap={4}
      >
          <RouterLink to={homeLink.to} style={{ textDecoration: 'none' }}>
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
<RouterLink to={homeLink.to}>
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive(homeLink.to) ? 'maroon.600' : 'gray.600'}
              bg={isActive(homeLink.to) ? 'maroon.50' : 'transparent'}
              _hover={{ color: 'maroon.600', bg: 'maroon.50', transform: 'translateY(-1px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
              position="relative"
            >
              {homeLink.name}
            </Button>
          </RouterLink>

          {navGroups.map((dropdown) => (
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
                aria-expanded={openDropdown === dropdown.name}
                aria-haspopup="true"
                aria-controls={`nav-menu-${dropdown.name.toLowerCase()}`}
                onClick={() => setOpenDropdown(openDropdown === dropdown.name ? null : dropdown.name)}
                rightIcon={<ChevronDownIcon
                  transition="all 0.2s"
                  transform={openDropdown === dropdown.name ? 'rotate(180deg)' : 'rotate(0)'}
                />}
              >
                {dropdown.name}
              </Button>

              <Box
                id={`nav-menu-${dropdown.name.toLowerCase()}`}
                position="absolute"
                top="100%"
                left={0}
                minW="220px"
                bg={dropdownBg}
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
                onFocus={() => setOpenDropdown(dropdown.name)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown(null);
                  }
                }}
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

          <RouterLink to={galleryLink.to}>
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive(galleryLink.to) ? 'maroon.600' : 'gray.600'}
              bg={isActive(galleryLink.to) ? 'maroon.50' : 'transparent'}
              _hover={{ color: 'maroon.600', bg: 'maroon.50', transform: 'translateY(-1px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
            >
              {galleryLink.name}
            </Button>
          </RouterLink>

          <RouterLink to={contactLink.to}>
            <Button
              variant="ghost"
              fontWeight="600"
              color={isActive(contactLink.to) ? 'maroon.600' : 'gray.600'}
              bg={isActive(contactLink.to) ? 'maroon.50' : 'transparent'}
              _hover={{ color: 'maroon.600', bg: 'maroon.50', transform: 'translateY(-1px)' }}
              size="sm"
              px={3}
              transition="all 0.2s ease"
            >
              {contactLink.name}
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
          <EnrollButton
            size="sm"
            rightIcon={<ArrowForwardIcon />}
            bgGradient="linear(to-r, maroon.500, maroon.600)"
            color="onAccent"
            fontWeight="600"
            display={{ base: 'none', md: 'flex' }}
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(130, 0, 0, 0.3)', bgGradient: 'linear(to-r, maroon.500, maroon.600)' }}
          >
            Apply Now
          </EnrollButton>

          <IconButton
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'mobile-menu' : undefined}
            icon={<MenuGlyph turned={isOpen} />}
            variant="ghost"
            size="lg"
            color={hamburgerColor}
            display={{ base: 'flex', lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{ bg: hamburgerHoverBg }}
            _active={{ bg: hamburgerHoverBg }}
          />
        </HStack>
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} size="full">
        <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(6px)" style={{ WebkitBackdropFilter: 'blur(6px)' }} />
        <DrawerContent bg={drawerBg} maxH="100vh" id="mobile-menu">
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="3px"
            bgGradient="linear(to-r, maroon.500, forest.500)"
            zIndex={3}
          />
          <Flex
            align="center"
            justify="space-between"
            px={6}
            pt={5}
            pb={3}
            borderBottom="1px solid"
            borderColor="maroon.100"
            bg={drawerHeaderBg}
            backdropFilter="blur(10px)"
            style={{ WebkitBackdropFilter: 'blur(10px)' }}
            position="sticky"
            top={0}
            zIndex={2}
          >
            <Flex align="center" gap={3}>
              <Box w="40px" h="40px" flexShrink={0}>
                <Image
                  src="/images/st-james-zongoro-primary-logo.png"
                  alt="St James Zongoro Primary School Logo"
                  w="100%"
                  h="100%"
                  objectFit="contain"
                />
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="700" color="maroon.500" lineHeight="1.1" letterSpacing="-0.02em">
                  St James Zongoro
                </Text>
                <Text fontSize="10px" fontWeight="600" color={forestAccent} letterSpacing="0.18em" mt={1}>
                  PRIMARY SCHOOL
                </Text>
              </Box>
            </Flex>
            <DrawerCloseControl onClose={onClose} />
          </Flex>

          <Box
            flex={1}
            overflowY="auto"
            px={6}
            pt={6}
            pb={8}
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
            <motion.div
              initial={reduceMotion ? false : 'hidden'}
              animate="visible"
              variants={reduceMotion ? undefined : listVariants}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <motion.div variants={reduceMotion ? undefined : itemVariants}>
                <HStack spacing={3} align="stretch">
                  <EnrollButton
                    size="lg"
                    flex={1}
                    rightIcon={<ArrowForwardIcon />}
                    bgGradient="linear(to-r, maroon.500, maroon.600)"
                    color="onAccent"
                    fontWeight="600"
                    _hover={{ transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(130, 0, 0, 0.3)' }}
                  >
                    Apply Now
                  </EnrollButton>
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
              </motion.div>

              <motion.div
                variants={reduceMotion ? undefined : itemVariants}
                style={{ marginTop: '1.75rem' }}
              >
                {renderNavLink(homeLink, true)}
              </motion.div>

              {navGroups.map((group) => (
                <Fragment key={group.name}>
                  <motion.div
                    variants={reduceMotion ? undefined : itemVariants}
                    style={{ marginTop: '2rem' }}
                  >
                    <Text
                      fontWeight="700"
                      fontSize="xs"
                      color={forestAccent}
                      textTransform="uppercase"
                      letterSpacing="0.12em"
                      px={4}
                    >
                      {group.label}
                    </Text>
                  </motion.div>
                  {group.items.map((item) => (
                    <motion.div
                      key={item.to}
                      variants={reduceMotion ? undefined : itemVariants}
                      style={{ marginTop: '0.375rem' }}
                    >
                      {renderNavLink(item, false)}
                    </motion.div>
                  ))}
                </Fragment>
              ))}

              <motion.div
                variants={reduceMotion ? undefined : itemVariants}
                style={{ marginTop: '2rem' }}
              >
                {renderNavLink(galleryLink, true)}
              </motion.div>
            </motion.div>
          </Box>

          <Flex
            gap={3}
            px={6}
            py={4}
            borderTop="1px solid"
            borderColor="maroon.100"
            bg={drawerHeaderBg}
            backdropFilter="blur(10px)"
            style={{ WebkitBackdropFilter: 'blur(10px)' }}
            zIndex={2}
          >
            <Button
              as={RouterLink}
              to={contactLink.to}
              onClick={onClose}
              size="lg"
              flex={1}
              variant="outline"
              borderColor={contactBorder}
              color={contactColor}
              fontWeight="600"
              leftIcon={<ArrowForwardIcon />}
              _hover={{ bg: hoverBg, borderColor: contactColor, transform: 'translateY(-2px)' }}
            >
              Contact Us
            </Button>
            <Button
              as="a"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              flex={1}
              variant="outline"
              borderColor={whatsAppBorder}
              color={whatsAppColor}
              fontWeight="600"
              leftIcon={<FaWhatsapp />}
              _hover={{ bg: hoverBg, borderColor: whatsAppColor, transform: 'translateY(-2px)' }}
            >
              WhatsApp
            </Button>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;

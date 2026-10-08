import { Box, Flex, Text, IconButton, Link, Icon, useColorMode, HStack } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaFacebook, FaMapMarkerAlt, FaSun, FaMoon } from 'react-icons/fa';

import { schoolContact } from '../../data/contact';

const TopBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box bg="forest.800" color="onAccent" py={{ base: 1.5, md: 1 }} px={{ base: 4, md: 6 }} position="fixed" top={0} left={0} right={0} zIndex={1100}>
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" gap={4}>
        <Flex
          align="center"
          gap={{ base: 3, md: 5 }}
          minW={0}
          flex={1}
          flexWrap="wrap"
        >
          <Flex align="center" gap={2} flexShrink={0}>
            <Icon as={FaPhone} fontSize="xs" color="cream.200" />
            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600" color="whiteAlpha.900" whiteSpace="nowrap">
              {schoolContact.phoneDisplay}
            </Text>
          </Flex>
          <Box w="1px" h="12px" bg="whiteAlpha.300" flexShrink={0} display={{ base: 'none', sm: 'block' }} />
          <Flex align="center" gap={2} flexShrink={0} display={{ base: 'none', sm: 'flex' }}>
            <Icon as={FaEnvelope} fontSize="xs" color="cream.200" />
            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600" color="whiteAlpha.900" whiteSpace="nowrap">
              {schoolContact.email}
            </Text>
          </Flex>
          <Box w="1px" h="12px" bg="whiteAlpha.300" flexShrink={0} display={{ base: 'none', lg: 'block' }} />
          <Flex align="center" gap={2} flexShrink={0} display={{ base: 'none', lg: 'flex' }}>
            <Icon as={FaMapMarkerAlt} fontSize="xs" color="cream.200" />
            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600" color="whiteAlpha.900" whiteSpace="nowrap">
              {schoolContact.addressShort}
            </Text>
          </Flex>
        </Flex>

<HStack spacing={2} flexShrink={0}>
          <IconButton
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            icon={isDark ? <Icon as={FaSun} /> : <Icon as={FaMoon} />}
            variant="ghost"
            color="onAccent"
            size="sm"
            _hover={{ bg: 'whiteAlpha.200' }}
            onClick={toggleColorMode}
          />
          <Link
            href={schoolContact.facebook}
            isExternal
            _hover={{ opacity: 0.8 }}
            aria-label="Facebook"
            flexShrink={0}
          >
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="onAccent"
              size="sm"
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default TopBar;
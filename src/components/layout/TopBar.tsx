import { Box, Flex, Text, IconButton, Link, Icon } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <Box bg="maroon.500" color="white" py={{ base: 1.5, md: 1 }} px={4} position="fixed" top={0} left={0} right={0} zIndex={1100}>
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto" gap={4}>
        {/* Contact Information - Horizontal scrolling marquee */}
        <Box flex={1} overflow="hidden" position="relative">
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            whiteSpace="nowrap"
            animation={{
              base: "scroll 15s linear infinite",
              md: "scroll 35s linear infinite"
            }}
            sx={{
              '@keyframes scroll': {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
            }}
            _hover={{
              animationPlayState: 'paused',
            }}
          >
            <Flex align="center" gap={1.5} flexShrink={0}>
              <Icon as={FaPhone} fontSize="xs" color="#00ff88" />
              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600">
                0773211929 / 0718546070
              </Text>
            </Flex>
            <Flex align="center" gap={1.5} flexShrink={0}>
              <Icon as={FaEnvelope} fontSize="xs" color="#00ff88" />
              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600">
                zongoro.primary@gmail.com
              </Text>
            </Flex>
            <Flex align="center" gap={1.5} flexShrink={0}>
              <Icon as={FaMapMarkerAlt} fontSize="xs" color="#00ff88" />
              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600">
                P.O.Box 313, Mutare
              </Text>
            </Flex>
            {/* Duplicate for seamless loop */}
            <Flex align="center" gap={1.5} flexShrink={0} ml={4}>
              <Icon as={FaPhone} fontSize="xs" color="#00ff88" />
              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600">
                0773211929 / 0718546070
              </Text>
            </Flex>
            <Flex align="center" gap={1.5} flexShrink={0}>
              <Icon as={FaEnvelope} fontSize="xs" color="#00ff88" />
              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600">
                zongoro.primary@gmail.com
              </Text>
            </Flex>
            <Flex align="center" gap={1.5} flexShrink={0}>
              <Icon as={FaMapMarkerAlt} fontSize="xs" color="#00ff88" />
              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600">
                P.O.Box 313, Mutare
              </Text>
            </Flex>
          </Box>
        </Box>

        {/* Social Media */}
        <Box flexShrink={0}>
          <Link href="https://facebook.com" isExternal _hover={{ opacity: 0.8 }}>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="white"
              size={{ base: "sm", md: "sm" }}
              _hover={{ bg: 'whiteAlpha.200' }}
            />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopBar;
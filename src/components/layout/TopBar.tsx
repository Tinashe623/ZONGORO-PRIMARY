import { Box, Flex, Text, IconButton, Link, Hide } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaFacebook } from 'react-icons/fa';

const TopBar = () => {
  return (
    <Box bg="maroon.500" color="white" py={2} px={4}>
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
        <Hide below="md">
          <Flex gap={6} align="center">
            <Flex align="center" gap={2}>
              <FaPhone size={12} />
              <Text fontSize="sm">+263 772 123 456</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <FaEnvelope size={12} />
              <Text fontSize="sm">info@stjameszongoro.ac.zw</Text>
            </Flex>
          </Flex>
        </Hide>
        <Link href="https://facebook.com" isExternal _hover={{ opacity: 0.8 }}>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            color="white"
            size="sm"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default TopBar;
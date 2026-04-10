import { Box, Flex, Text, IconButton, Link, Hide, HStack, Icon } from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <Box bg="maroon.600" color="white" py={2} px={4} position="fixed" top={0} left={0} right={0} zIndex={1100}>
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
        <Hide below="md">
          <HStack spacing={6}>
            <Flex align="center" gap={2}>
              <Icon as={FaPhone} fontSize="xs" color="#00ff88" />
              <Text fontSize="sm" fontWeight="600">0773211929 / 0718546070</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaEnvelope} fontSize="xs" color="#00ff88" />
              <Text fontSize="sm" fontWeight="600">zongoro.primary@gmail.com</Text>
            </Flex>
            <Flex align="center" gap={2}>
              <Icon as={FaMapMarkerAlt} fontSize="xs" color="#00ff88" />
              <Text fontSize="sm" fontWeight="600">Ndorikanda Village, Mutasa District</Text>
            </Flex>
          </HStack>
        </Hide>
        <Link href="https://facebook.com" isExternal _hover={{ opacity: 0.8 }}>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant="ghost"
            color="white"
            size="sm"
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default TopBar;
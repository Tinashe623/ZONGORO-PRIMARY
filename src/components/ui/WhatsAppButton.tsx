import { Box, Link, Tooltip } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaWhatsapp } from 'react-icons/fa';

const ping = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
`;

const WhatsAppButton = () => {
  const message = encodeURIComponent(
    'Hello St James Zongoro Primary School, I would like to make an enquiry.'
  );
  const href = `https://wa.me/263773211929?text=${message}`;

  return (
    <Tooltip label="Chat with us on WhatsApp" placement="left" hasArrow bg="forest.500">
      <Box position="fixed" bottom={6} right={6} zIndex={1200} role="complementary">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with St James Zongoro on WhatsApp"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={14}
          h={14}
          borderRadius="full"
          bg="forest.500"
          color="onAccent"
          boxShadow="0 8px 24px rgba(45, 106, 79, 0.4)"
          transition="all 0.2s ease"
          _hover={{ transform: 'translateY(-3px) scale(1.05)', bg: 'forest.600' }}
        >
          <Box
            position="absolute"
            w={14}
            h={14}
            borderRadius="full"
            bg="forest.400"
            animation={`${ping} 2s ease-out infinite`}
            pointerEvents="none"
          />
          <FaWhatsapp size={28} style={{ position: 'relative' }} />
        </Link>
      </Box>
    </Tooltip>
  );
};

export default WhatsAppButton;
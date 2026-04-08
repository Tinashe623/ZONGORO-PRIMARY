import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner = ({ title, subtitle, buttonText = 'Contact Us', buttonLink = '/contact' }: CTABannerProps) => {
  const isHashLink = buttonLink?.startsWith('#');
  
  const handleClick = () => {
    if (isHashLink) {
      const sectionId = buttonLink.slice(1);
      window.location.href = '/#' + sectionId;
    }
  };

  return (
    <Box
      bgGradient="linear(to-r, maroon.500, maroon.600)"
      py={16}
      px={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading size="xl" color="white">
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize="lg" color="whiteAlpha.900" maxW="600px">
            {subtitle}
          </Text>
        )}
        {isHashLink ? (
          <Button
            as={RouterLink}
            to="/"
            onClick={handleClick}
            bg="white"
            color="maroon.500"
            size="lg"
            px={8}
            fontWeight="600"
            _hover={{ bg: 'whiteAlpha.900', transform: 'translateY(-2px)' }}
          >
            {buttonText}
          </Button>
        ) : (
          <Button
            as={RouterLink}
            to={buttonLink}
            bg="white"
            color="maroon.500"
            size="lg"
            px={8}
            fontWeight="600"
            _hover={{ bg: 'whiteAlpha.900', transform: 'translateY(-2px)' }}
          >
            {buttonText}
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default CTABanner;
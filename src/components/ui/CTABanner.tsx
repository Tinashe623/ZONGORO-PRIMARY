import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

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
    <Box position="relative" overflow="hidden" bgGradient="linear(to-r, maroon.500, maroon.600)" py={20} px={4}>
      {/* Decorative Orbs */}
      <MotionBox
        position="absolute"
        top="-50px"
        right="-50px"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(255,255,255,0.05)"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <MotionBox
        position="absolute"
        bottom="-80px"
        left="-80px"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="rgba(0,255,136,0.05)"
        animate={{ 
          scale: [1.1, 1, 1.1],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <Box maxW="800px" mx="auto" position="relative" zIndex={1} textAlign="center">
        <VStack spacing={6}>
          <Heading 
            size="2xl" 
            color="white"
            fontWeight="700"
            lineHeight="1.2"
          >
            {title}
          </Heading>
          {subtitle && (
            <Text 
              fontSize="lg" 
              color="whiteAlpha.900" 
              maxW="600px"
              lineHeight="1.7"
            >
              {subtitle}
            </Text>
          )}
          {isHashLink ? (
            <Button
              as={RouterLink}
              to="/"
              onClick={handleClick}
              bg="forest.500"
              color="white"
              size="lg"
              px={10}
              fontWeight="600"
              borderRadius="full"
              _hover={{ 
                bg: 'forest.600', 
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(0,255,136,0.3)'
              }}
              transition="all 0.3s ease"
            >
              {buttonText}
            </Button>
          ) : (
            <Button
              as={RouterLink}
              to={buttonLink}
              bg="forest.500"
              color="white"
              size="lg"
              px={10}
              fontWeight="600"
              borderRadius="full"
              _hover={{ 
                bg: 'forest.600', 
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(0,255,136,0.3)'
              }}
              transition="all 0.3s ease"
            >
              {buttonText}
            </Button>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default CTABanner;
import { Box, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Reveal from './Reveal';
import EnrollButton from './EnrollButton';

const MotionBox = motion(Box);

interface CTABannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  enroll?: boolean;
  secondaryText?: string;
  secondaryLink?: string;
}

const CTABanner = ({
  eyebrow,
  title,
  subtitle,
  buttonText = 'Contact Us',
  buttonLink = '/contact',
  enroll = false,
  secondaryText,
  secondaryLink,
}: CTABannerProps) => {
  const isHashLink = buttonLink.startsWith('#');

  const handleHashClick = () => {
    if (isHashLink) {
      window.location.href = '/#' + buttonLink.slice(1);
    }
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      bgGradient="linear(160deg, maroon.800 0%, maroon.500 55%, forest.800 100%)"
      py={{ base: 16, md: 24 }}
      px={4}
    >
      <MotionBox
        position="absolute"
        top="-60px"
        right="-60px"
        w="280px"
        h="280px"
        borderRadius="full"
        bg="cream.100"
        opacity={0.1}
        filter="blur(90px)"
        animate={{ scale: [1, 1.12, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <MotionBox
        position="absolute"
        bottom="-80px"
        left="-80px"
        w="320px"
        h="320px"
        borderRadius="full"
        bg="forest.400"
        opacity={0.14}
        filter="blur(100px)"
        animate={{ scale: [1.1, 1, 1.1], rotate: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <Box maxW="820px" mx="auto" position="relative" zIndex={1} textAlign="center">
        <Reveal>
          <VStack spacing={6}>
            {eyebrow && (
              <Text
                fontSize="xs"
                fontWeight="700"
                letterSpacing="0.24em"
                textTransform="uppercase"
                color="cream.200"
              >
                {eyebrow}
              </Text>
            )}
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="onAccent"
              fontWeight="800"
              letterSpacing="-0.02em"
              lineHeight="1.15"
            >
              {title}
            </Heading>
            {subtitle && (
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                maxW="620px"
                lineHeight="1.7"
              >
                {subtitle}
              </Text>
            )}
            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={3}
              pt={2}
              w={{ base: '100%', sm: 'auto' }}
              justify="center"
            >
              {enroll ? (
                <EnrollButton
                  variant="secondary"
                  size="lg"
                  px={10}
                  rightIcon={<FaArrowRight />}
                >
                  {buttonText}
                </EnrollButton>
              ) : (
                <Button
                  as={isHashLink ? 'a' : RouterLink}
                  {...(!isHashLink ? { to: buttonLink } : {})}
                  onClick={handleHashClick}
                  variant="secondary"
                  size="lg"
                  px={10}
                  rightIcon={<FaArrowRight />}
                >
                  {buttonText}
                </Button>
              )}
              {secondaryText && secondaryLink && (
                <Button
                  as={secondaryLink.startsWith('#') ? 'a' : RouterLink}
                  {...(!secondaryLink.startsWith('#') ? { to: secondaryLink } : {})}
                  onClick={() => {
                    if (secondaryLink.startsWith('#')) {
                      window.location.href = '/#' + secondaryLink.slice(1);
                    }
                  }}
                  variant="outline"
                  size="lg"
                  px={10}
                  borderWidth="2px"
                  borderColor="whiteAlpha.400"
                  color="onAccent"
                  _hover={{ bg: 'whiteAlpha.200', borderColor: 'onAccent', transform: 'translateY(-2px)' }}
                >
                  {secondaryText}
                </Button>
              )}
            </Flex>
          </VStack>
        </Reveal>
      </Box>
    </Box>
  );
};

export default CTABanner;
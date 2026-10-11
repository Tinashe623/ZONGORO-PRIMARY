import { Box, Heading, Text, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

const BREADCRUMB_LABELS: Record<string, string> = {
  '/about': 'Our School',
  '/church': 'Anglican Heritage',
  '/community': 'Community',
  '/academics': 'Curriculum',
  '/assessment': 'Assessment & Results',
  '/staff': 'Our Team',
  '/admissions': 'How to Apply',
  '/boarding': 'Boarding Life',
  '/activities': 'School Activities',
  '/transport': 'School Transport',
  '/gallery': 'School Gallery',
  '/contact': 'Contact',
  '/privacy': 'Privacy Policy',
  '/terms': 'Terms of Service',
};

const PageHero = ({ title, subtitle, image, imageAlt }: PageHeroProps) => {
  const { pathname } = useLocation();
  const currentLabel = BREADCRUMB_LABELS[pathname];
  const topFade = useColorModeValue(
    'linear(180deg, rgba(250, 243, 224, 0.55) 0%, rgba(250, 243, 224, 0) 100%)',
    'linear(180deg, rgba(23, 20, 18, 0.55) 0%, rgba(23, 20, 18, 0) 100%)'
  );

  return (
    <Box position="relative">
      <Flex
        position="relative"
        h={{ base: "190px", md: "200px" }}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        bg="maroon.500"
        overflow="hidden"
        zIndex={1}
        py={{ base: 4, md: 6 }}
      >
        {image && (
          <>
            <Image
              src={image}
              alt={imageAlt ?? ''}
              role={imageAlt ? undefined : 'presentation'}
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(90deg, rgba(96, 0, 16, 0.62) 0%, rgba(130, 0, 0, 0.4) 45%, rgba(27, 73, 53, 0.46) 100%)"
            />
          </>
        )}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          h="32px"
          bgGradient={topFade}
          pointerEvents="none"
        />
        {currentLabel && (
          <Flex
            align="center"
            gap={2}
            fontSize="sm"
            fontWeight="600"
            color="whiteAlpha.800"
            mb={2}
            flexWrap="wrap"
            justify="center"
            px={4}
            position="relative"
            zIndex={1}
          >
            <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text as="span" _hover={{ color: 'onAccent', textDecoration: 'underline' }}>Home</Text>
            </RouterLink>
            <Text as="span" color="whiteAlpha.500">/</Text>
            <Text as="span" color="onAccent">{currentLabel}</Text>
          </Flex>
        )}
        <Heading
          as="h1"
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          color="onAccent"
          fontWeight="700"
          textShadow="0 2px 16px rgba(6, 18, 12, 0.45)"
          position="relative"
          zIndex={1}
        >
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900" mt={{ base: 1, md: 2 }} textAlign="center" px={4} position="relative" zIndex={1}>
            {subtitle}
          </Text>
        )}
      </Flex>
      {/* Downward triangle pointer */}
      {!image && (
        <Box
          position="absolute"
          bottom="-15px"
          left="50%"
          transform="translateX(-50%)"
          w="0"
          h="0"
          borderLeft="15px solid transparent"
          borderRight="15px solid transparent"
          borderTop="15px solid"
          borderTopColor="maroon.500"
          zIndex={2}
        />
      )}
    </Box>
  );
};

export default PageHero;
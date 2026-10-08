import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle?: string;
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

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  const { pathname } = useLocation();
  const currentLabel = BREADCRUMB_LABELS[pathname];

  return (
    <Box position="relative">
      <Flex
        position="relative"
        h={{ base: "190px", md: "200px" }}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        bg="maroon.500"
        zIndex={1}
        py={{ base: 4, md: 6 }}
      >
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
          >
            <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text as="span" _hover={{ color: 'onAccent', textDecoration: 'underline' }}>Home</Text>
            </RouterLink>
            <Text as="span" color="whiteAlpha.500">/</Text>
            <Text as="span" color="onAccent">{currentLabel}</Text>
          </Flex>
        )}
        <Heading fontSize={{ base: "xl", md: "3xl", lg: "4xl" }} color="onAccent" fontWeight="700">
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize={{ base: "sm", md: "md" }} color="whiteAlpha.900" mt={{ base: 1, md: 2 }} textAlign="center" px={4}>
            {subtitle}
          </Text>
        )}
      </Flex>
      {/* Downward triangle pointer */}
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
    </Box>
  );
};

export default PageHero;
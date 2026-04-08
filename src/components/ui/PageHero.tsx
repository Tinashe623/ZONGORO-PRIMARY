import { Box, Heading, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getBreadcrumbText = () => {
    switch (currentPath) {
      case '/staff': return 'Our Team';
      case '/admissions': return 'Admissions';
      case '/boarding': return 'Boarding';
      case '/activities': return 'Activities';
      default: return 'Page';
    }
  };

  return (
    <Box
      position="relative"
      h="40vh"
      minH="300px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="linear-gradient(rgba(128, 0, 32, 0.85), rgba(26, 26, 26, 0.95)), url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=600&fit=crop')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box textAlign="center" color="white" px={4}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="whiteAlpha.700" />}
          justifyContent="center"
          mb={4}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/" color="whiteAlpha.800" _hover={{ color: 'white' }}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="white" fontWeight="600">
              {getBreadcrumbText()}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading size="2xl" fontWeight="700" mb={3}>
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize="lg" color="whiteAlpha.900" maxW="600px" mx="auto">
            {subtitle}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default PageHero;
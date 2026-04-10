import { Box, Heading, Text, Flex } from '@chakra-ui/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {

  return (
    <Box position="relative">
      <Flex
        position="relative"
        h={{ base: "140px", md: "180px" }}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        bg="maroon.500"
        zIndex={1}
      >
        <Heading size="2xl" color="white" fontWeight="700">
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize="md" color="whiteAlpha.900" mt={2} textAlign="center">
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
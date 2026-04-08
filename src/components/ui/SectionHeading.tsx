import { VStack, Heading, Text, Box } from '@chakra-ui/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  textAlign?: 'center' | 'left';
}

const SectionHeading = ({
  title,
  subtitle,
  textAlign = 'center',
}: SectionHeadingProps) => {
  return (
    <VStack spacing={3} textAlign={textAlign} mb={10}>
      <Heading
        size="xl"
        bgGradient="linear(to-r, maroon.500, maroon.700)"
        bgClip="text"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        {title}
      </Heading>
      <Box
        w="60px"
        h="4px"
        bgGradient="linear(to-r, maroon.500, maroon.600)"
        borderRadius="full"
      />
      {subtitle && (
        <Text color="gray.500" maxW="600px" fontSize="lg" fontWeight="500">
          {subtitle}
        </Text>
      )}
    </VStack>
  );
};

export default SectionHeading;
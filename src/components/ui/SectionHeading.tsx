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
  const isLeft = textAlign === 'left';

  return (
    <VStack
      spacing={3}
      textAlign={textAlign}
      mb={10}
      alignItems={isLeft ? 'flex-start' : 'center'}
      maxW={isLeft ? '640px' : undefined}
      w={isLeft ? '100%' : undefined}
    >
      <Heading
        size="xl"
        bg="maroon.500"
        bgClip="text"
        fontWeight="700"
        letterSpacing="-0.02em"
      >
        {title}
      </Heading>
      <Box
        w="60px"
        h="4px"
        bg="maroon.500"
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

import { VStack, Heading, Text, Box } from '@chakra-ui/react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accentColor?: string;
  textAlign?: 'center' | 'left';
}

const SectionHeading = ({
  title,
  subtitle,
  accentColor = 'maroon.500',
  textAlign = 'center',
}: SectionHeadingProps) => {
  return (
    <VStack spacing={3} textAlign={textAlign} mb={10}>
      <Heading size="xl" color="dark.500">
        {title}
      </Heading>
      <Box
        w="40px"
        h="3px"
        bg={accentColor}
        borderRadius="full"
      />
      {subtitle && (
        <Text color="gray.600" maxW="600px">
          {subtitle}
        </Text>
      )}
    </VStack>
  );
};

export default SectionHeading;
import { VStack, Heading, Text, Box } from '@chakra-ui/react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  textAlign?: 'center' | 'left';
  variant?: 'section' | 'sub';
}

const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  textAlign = 'center',
  variant = 'section',
}: SectionHeadingProps) => {
  const isLeft = textAlign === 'left';

  if (variant === 'sub') {
    return (
      <VStack align="flex-start" spacing={3} mb={5}>
        <Heading
          fontSize={{ base: 'xl', md: '2xl' }}
          bg="brand"
          bgClip="text"
          fontWeight="700"
          letterSpacing="-0.02em"
          lineHeight="1.25"
        >
          {title}
        </Heading>
        <Box
          w="48px"
          h="3px"
          bgGradient="linear(to-r, maroon.400, forest.400)"
          borderRadius="full"
        />
      </VStack>
    );
  }

  return (
    <Reveal style={{ width: isLeft ? '100%' : undefined }}>
      <VStack
        spacing={3}
        textAlign={textAlign}
        mb={10}
        alignItems={isLeft ? 'flex-start' : 'center'}
        maxW={isLeft ? '640px' : undefined}
        w={isLeft ? '100%' : undefined}
      >
        {eyebrow && (
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.22em"
            textTransform="uppercase"
            color="eyebrow"
          >
            {eyebrow}
          </Text>
        )}
        <Heading
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          bg="brand"
          bgClip="text"
          fontWeight="800"
          letterSpacing="-0.03em"
          lineHeight="1.15"
        >
          {title}
        </Heading>
        <Box
          w="72px"
          h="2px"
          bgGradient="linear(to-r, maroon.400, forest.400)"
          borderRadius="full"
        />
        {subtitle && (
          <Text color="gray.500" maxW="600px" fontSize="lg" fontWeight="500" lineHeight="1.6">
            {subtitle}
          </Text>
        )}
      </VStack>
    </Reveal>
  );
};

export default SectionHeading;
import { Box } from '@chakra-ui/react';

interface SectionDividerProps {
  color?: 'maroon' | 'green';
}

const SectionDivider = ({ color = 'maroon' }: SectionDividerProps) => {
  const gradient =
    color === 'green'
      ? 'linear(to-r, forest.500, transparent)'
      : 'linear(to-r, maroon.500, transparent)';

  return (
    <Box
      h="2px"
      bgGradient={gradient}
      w="100%"
      opacity={0.6}
    />
  );
};

export default SectionDivider;
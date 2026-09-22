import { Box } from '@chakra-ui/react';

interface NeonDividerProps {
  direction?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
}

const NeonDivider = ({
  direction = 'horizontal',
  width = '100%',
  height = '2px',
}: NeonDividerProps) => {
  const angle = direction === 'horizontal' ? '90deg' : '180deg';

  return (
    <Box
      w={direction === 'horizontal' ? width : height}
      h={direction === 'horizontal' ? height : width}
      position="relative"
      borderRadius="full"
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'full',
          background: `linear-gradient(${angle}, transparent, #820000 45%, #2D6A4F 55%, transparent)`,
        },
      }}
    />
  );
};

export default NeonDivider;
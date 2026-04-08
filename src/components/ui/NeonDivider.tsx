import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

interface NeonDividerProps {
  direction?: 'horizontal' | 'vertical';
  width?: string;
  height?: string;
}

const pulseGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.5), 0 0 30px rgba(0, 255, 136, 0.3);
  }
  50% { 
    box-shadow: 0 0 25px rgba(0, 255, 136, 0.7), 0 0 50px rgba(0, 255, 136, 0.5);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const NeonDivider = ({ 
  direction = 'horizontal', 
  width = '100%', 
  height = '4px',
}: NeonDividerProps) => {
  return (
    <Box
      w={direction === 'horizontal' ? width : height}
      h={direction === 'horizontal' ? height : width}
      position="relative"
      overflow="visible"
      borderRadius="full"
      bg="transparent"
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 'full',
          background: 'linear-gradient(90deg, #00ff88 0%, #00cc6a 25%, #00ff88 50%, #00cc6a 75%, #00ff88 100%)',
          backgroundSize: '200% 100%',
          animation: `${shimmer} 3s linear infinite`,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '-3px',
          left: '-3px',
          right: '-3px',
          bottom: '-3px',
          borderRadius: 'full',
          background: 'transparent',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.6), 0 0 40px rgba(0, 255, 136, 0.4), 0 0 60px rgba(0, 255, 136, 0.2)',
          animation: `${pulseGlow} 2s ease-in-out infinite`,
          zIndex: -1,
        },
      }}
    />
  );
};

export default NeonDivider;
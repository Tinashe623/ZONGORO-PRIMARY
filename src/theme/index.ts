import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    maroon: {
      50: '#fff5f5',
      100: '#fed7d7',
      500: '#D40000', // Brighter red as per screenshot
      600: '#B80000',
      700: '#9B0000',
    },
    cream: {
      50: '#FAF3E0',
      100: '#F5ECD3',
    },
    forest: {
      50: '#e6f5ed',
      500: '#2D6A4F',
      600: '#245a42',
    },
    dark: {
      500: '#1A1A1A',
      600: '#111111',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      'html': { scrollBehavior: 'smooth' },
      'body': { color: 'dark.500', bg: 'white' },
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      '::-webkit-scrollbar-track': {
        background: 'rgba(212, 0, 0, 0.1)',
        borderRadius: 'full',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'linear-gradient(180deg, #D40000 0%, #F54242 50%, #D40000 100%)',
        borderRadius: 'full',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        boxShadow: '0 0 10px rgba(212, 0, 0, 0.5), 0 0 20px rgba(212, 0, 0, 0.3)',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: 'linear-gradient(180deg, #B80000 0%, #D40000 50%, #B80000 100%)',
        boxShadow: '0 0 15px rgba(212, 0, 0, 0.7), 0 0 30px rgba(212, 0, 0, 0.4)',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'xl',
      },
      variants: {
        maroon: {
          bg: 'maroon.500',
          color: 'white',
          _hover: {
            bg: 'maroon.600',
            transform: 'translateY(-2px)',
          },
        },
        cream: {
          bg: 'cream.50',
          color: 'maroon.500',
          border: '2px solid',
          borderColor: 'maroon.500',
          _hover: {
            bg: 'maroon.500',
            color: 'white',
          },
        },
        green: {
          bg: 'forest.500',
          color: 'white',
          _hover: {
            bg: 'forest.600',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: '2xl',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
      },
    },
  },
});

export default theme;
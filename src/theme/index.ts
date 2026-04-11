import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(config, {
  colors: {
    maroon: {
      50: '#fff5f5',
      100: '#fed7d7',
      200: '#feb3b3',
      300: '#fc8f8f',
      400: '#fa6b6b',
      500: '#820000',
      600: '#6b0000',
      700: '#540000',
      800: '#3d0000',
      900: '#260000',
    },
    cream: {
      50: '#FAF3E0',
      100: '#F5ECD3',
    },
    forest: {
      50: '#e6f5ed',
      100: '#c2e6d1',
      200: '#9ed6b5',
      300: '#79c699',
      400: '#55b67d',
      500: '#2D6A4F',
      600: '#245a42',
      700: '#1b4935',
      800: '#123728',
      900: '#09261b',
    },
    dark: {
      50: '#4d4d4d',
      100: '#404040',
      200: '#333333',
      300: '#262626',
      400: '#1a1a1a',
      500: '#1A1A1A',
      600: '#111111',
      700: '#080808',
      800: '#000000',
      900: '#000000',
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  space: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  radii: {
    none: '0',
    sm: '0.25rem',
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    card: '0 4px 20px rgba(0,0,0,0.08)',
    cardHover: '0 8px 30px rgba(130,0,0,0.15)',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'xl',
        transition: 'all 0.2s ease',
      },
      sizes: {
        lg: {
          h: '3.5rem',
          fontSize: 'md',
          px: 8,
        },
        md: {
          h: '2.5rem',
          fontSize: 'sm',
          px: 6,
        },
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
      defaultProps: {
        variant: 'maroon',
        size: 'md',
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: '2xl',
          boxShadow: 'card',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: 'cardHover',
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
        color: 'dark.500',
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'lg',
        },
      },
      defaultProps: {
        focusBorderColor: 'maroon.500',
      },
    },
    Link: {
      baseStyle: {
        color: 'maroon.500',
        _hover: {
          textDecoration: 'none',
          color: 'maroon.600',
        },
      },
    },
  },
  styles: {
    global: {
      html: { 
        scrollBehavior: 'smooth',
        '@media (prefers-reduced-motion: reduce)': {
          scrollBehavior: 'auto',
        },
      },
      body: { 
        color: 'dark.500', 
        bg: 'white',
        lineHeight: '1.7',
      },
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      '::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: 'rgba(130, 0, 0, 0.05)',
      },
      '::-webkit-scrollbar-thumb': {
        background: 'maroon.500',
        borderRadius: 'full',
        '&:hover': {
          background: 'maroon.600',
        },
      },
      '@media (prefers-reduced-motion: reduce)': {
        '*': {
          animationDuration: '0.01ms !important',
          animationIterationCount: '1 !important',
          transitionDuration: '0.01ms !important',
        },
      },
    },
  },
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
});

export default theme;
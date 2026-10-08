import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(config, {
  semanticTokens: {
    colors: {
      onAccent: { default: '#FFFFFF', _dark: '#FFFFFF' },
      white: { default: '#FFFFFF', _dark: '#1F1C18' },
      'chakra-body-bg': { default: '#FFFFFF', _dark: '#171412' },
      'chakra-body-text': { default: '#1A1A1A', _dark: '#E7E1D8' },
      'cream.50': { default: '#FAF3E0', _dark: '#15120E' },
      'gray.50': { default: '#F7F5F2', _dark: '#1D1A16' },
      'gray.100': { default: '#EEEAE4', _dark: '#26221D' },
      'gray.200': { default: '#E1DCD4', _dark: '#322D26' },
      'gray.300': { default: '#C9C3B9', _dark: '#423C33' },
      'gray.400': { default: '#A39D93', _dark: '#565048' },
      'gray.500': { default: '#6B665E', _dark: '#8F877B' },
      'gray.600': { default: '#55504A', _dark: '#A89F93' },
      'gray.700': { default: '#38342F', _dark: '#C1B8AC' },
      'gray.800': { default: '#24221E', _dark: '#D8D0C4' },
      'gray.900': { default: '#1A1A1A', _dark: '#EFE9E0' },
      'dark.50': { default: '#4d4d4d', _dark: '#6F6A61' },
      'dark.100': { default: '#404040', _dark: '#8C867C' },
      'dark.200': { default: '#333333', _dark: '#A49E93' },
      'dark.300': { default: '#262626', _dark: '#B9B2A7' },
      'dark.400': { default: '#1a1a1a', _dark: '#C9C1B5' },
      'dark.500': { default: '#1A1A1A', _dark: '#E7E1D8' },
    },
  },
  colors: {
    maroon: {
      50: '#FBF1EF',
      100: '#F4DCD6',
      200: '#E9B7AE',
      300: '#D98D82',
      400: '#B84F41',
      500: '#820000',
      600: '#6b0000',
      700: '#540000',
      800: '#3d0000',
      900: '#260000',
    },
    cream: {
      50: '#FAF3E0',
      100: '#F5ECD3',
      200: '#EFE3C2',
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
    gray: {
      50: '#F7F5F2',
      100: '#EEEAE4',
      200: '#E1DCD4',
      300: '#C9C3B9',
      400: '#A39D93',
      500: '#6B665E',
      600: '#55504A',
      700: '#38342F',
      800: '#24221E',
      900: '#1A1A1A',
    },
  },
  fonts: {
    heading: `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
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
    '6xl': '3.75rem',
    '7xl': '4.5rem',
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
          color: 'onAccent',
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
            color: 'onAccent',
          },
        },
        green: {
          bg: 'forest.500',
          color: 'onAccent',
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
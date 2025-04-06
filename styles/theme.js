import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// Define breakpoints for responsive design
const breakpoints = createBreakpoints({
  sm: '30em',   // 480px
  md: '48em',   // 768px
  lg: '62em',   // 992px
  xl: '80em',   // 1280px
  '2xl': '96em', // 1536px
});

// Brand colors
const colors = {
  brand: {
    primary: '#2C5282',  // Deep blue
    accent: '#4299E1',   // Bright blue
    secondary: '#EDF2F7', // Light gray blue
    highlight: '#E6FFFA', // Light teal
    dark: '#1A365D',     // Navy
    light: '#EBF8FF',    // Light blue
  },
  // Override default Chakra colors as needed
  blue: {
    50: '#EBF8FF',
    100: '#BEE3F8',
    200: '#90CDF4',
    300: '#63B3ED',
    400: '#4299E1',
    500: '#3182CE',
    600: '#2B6CB0',
    700: '#2C5282',
    800: '#2A4365',
    900: '#1A365D',
  },
};

// Typography system
const fonts = {
  heading: '"Poppins", sans-serif',
  body: '"Open Sans", sans-serif',
  mono: 'Menlo, monospace',
};

const fontSizes = {
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
  '8xl': '6rem',
  '9xl': '8rem',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

// Component style overrides
const components = {
  Button: {
    // Base styles applied to all variants
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: 'md',
    },
    // Variants
    variants: {
      primary: {
        bg: 'brand.primary',
        color: 'white',
        _hover: {
          bg: 'brand.dark',
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
        _active: {
          bg: 'blue.800',
          transform: 'translateY(0)',
        },
      },
      secondary: {
        bg: 'brand.accent',
        color: 'white',
        _hover: {
          bg: 'blue.500',
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
      },
      outline: {
        border: '2px solid',
        borderColor: 'brand.primary',
        color: 'brand.primary',
        _hover: {
          bg: 'brand.light',
        },
      },
    },
    // Default values for size and variant
    defaultProps: {
      size: 'md',
      variant: 'primary',
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      color: 'brand.dark',
    },
  },
  Card: {
    baseStyle: {
      p: '4',
      borderRadius: 'lg',
      boxShadow: 'sm',
      bg: 'white',
      transition: 'all 0.3s ease',
      _hover: {
        boxShadow: 'md',
        transform: 'translateY(-4px)',
      },
    },
  },
  Link: {
    baseStyle: {
      color: 'brand.accent',
      _hover: {
        textDecoration: 'none',
        color: 'brand.primary',
      },
    },
  },
  Text: {
    variants: {
      subtitle: {
        color: 'gray.600',
        fontSize: 'md',
        fontWeight: 'medium',
      },
      caption: {
        color: 'gray.500',
        fontSize: 'sm',
      },
      price: {
        color: 'brand.primary',
        fontSize: 'xl',
        fontWeight: 'bold',
      },
    },
  },
};

// Spacing system
const space = {
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
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

// Global styles
const styles = {
  global: {
    body: {
      bg: 'gray.50',
      color: 'gray.800',
    },
    a: {
      color: 'brand.accent',
      _hover: {
        textDecoration: 'none',
        color: 'brand.primary',
      },
    },
  },
};

// Create the extended theme
const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  components,
  space,
  styles,
  breakpoints,
});

export default theme;

/**
 * @fileoverview Tigma Real Estate Theme Configuration
 * 
 * This file defines the custom theme configuration for the Tigma Real Estate
 * application using Chakra UI's theming system. It establishes consistent 
 * design tokens for colors, typography, spacing, and component styles.
 * 
 * The theme was updated from the original Realtor project to reflect
 * Tigma Real Estate's brand identity with a refined blue color palette
 * and enhanced component styling.
 * 
 * @version 2.0.0
 * @since 1.0.0
 * @updated 2025-04-06
 */

import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

/**
 * Responsive Breakpoints
 */
const breakpoints = {
  sm: '30em',   // 480px - Mobile landscape
  md: '48em',   // 768px - Tablets
  lg: '62em',   // 992px - Desktops
  xl: '80em',   // 1280px - Large desktops
  '2xl': '96em', // 1536px - Extra large screens
};

/**
 * Color Palette
 */
const colors = {
  brand: {
    primary: '#2C5282',  // Deep blue
    accent: '#4299E1',   // Bright blue
    secondary: '#EDF2F7', // Light gray blue
    highlight: '#E6FFFA', // Light teal
    dark: '#1A365D',     // Navy
    light: '#EBF8FF',    // Light blue
  },
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

/**
 * Typography System
 */
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

/**
 * Component Style Overrides
 */
// Define component styles using the new Chakra UI v2 API
const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'md',
  },
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
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
});

const components = {
  Button,
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

/**
 * Spacing System
 */
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

/**
 * Global Styles
 */
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

/**
 * Export the complete theme configuration
 */
// Create theme with components properly configured for Chakra UI v2
const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
  components,
  space,
  styles,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
});

export default theme;
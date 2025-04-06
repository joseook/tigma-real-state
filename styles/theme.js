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

import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

/**
 * Responsive Breakpoints
 * 
 * Defines the width thresholds for different device sizes.
 * These breakpoints follow industry standards and are used throughout
 * the application for consistent responsive behavior.
 * 
 * Usage: 
 * <Box width={{ base: "100%", md: "50%", lg: "33%" }}>
 *   Responsive width box
 * </Box>
 */
const breakpoints = createBreakpoints({
  sm: '30em',   // 480px - Mobile landscape
  md: '48em',   // 768px - Tablets
  lg: '62em',   // 992px - Desktops
  xl: '80em',   // 1280px - Large desktops
  '2xl': '96em', // 1536px - Extra large screens
});

/**
 * Color Palette
 * 
 * Defines the brand colors for Tigma Real Estate and overrides 
 * certain Chakra UI default colors.
 * 
 * The color scheme was specifically chosen to:
 * - Create a professional and trustworthy real estate brand identity
 * - Provide sufficient contrast for accessibility
 * - Create visual hierarchy with primary and accent colors
 * - Ensure color harmony throughout the interface
 * 
 * Recent changes:
 * - Updated from generic colors to Tigma brand-specific palette
 * - Added additional semantic color definitions for consistency
 * - Enhanced contrast for improved accessibility
 */
const colors = {
  brand: {
    primary: '#2C5282',  // Deep blue - Used for primary elements and main headings
    accent: '#4299E1',   // Bright blue - Used for interactive elements and highlights
    secondary: '#EDF2F7', // Light gray blue - Used for backgrounds and secondary elements
    highlight: '#E6FFFA', // Light teal - Used for highlighting important information
    dark: '#1A365D',     // Navy - Used for text and dark UI elements
    light: '#EBF8FF',    // Light blue - Used for light backgrounds and hover states
  },
  // Override default Chakra blue colors to align with brand palette
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
 * 
 * Defines the font families used throughout the application.
 * The combination of Poppins for headings and Open Sans for body text
 * creates a professional, modern look while maintaining readability.
 * 
 * Note: Make sure these fonts are properly loaded in the application,
 * either through Google Fonts or self-hosted webfonts.
 */
const fonts = {
  heading: '"Poppins", sans-serif', // Used for headings and display text
  body: '"Open Sans", sans-serif',  // Used for body text and UI elements
  mono: 'Menlo, monospace',         // Used for code and technical information
};
/**
 * Font Sizes
 * 
 * A comprehensive scale of font sizes from extra small to extra large.
 * Following a typographic scale ensures consistent visual hierarchy 
 * throughout the application.
 * 
 * Usage:
 * <Text fontSize="lg">Larger text</Text>
 */
const fontSizes = {
  xs: '0.75rem',    // 12px - Small print, footnotes
  sm: '0.875rem',   // 14px - Secondary text
  md: '1rem',       // 16px - Base body text size
  lg: '1.125rem',   // 18px - Enhanced body text
  xl: '1.25rem',    // 20px - Subheadings
  '2xl': '1.5rem',  // 24px - H3, section headings
  '3xl': '1.875rem',// 30px - H2, important headings
  '4xl': '2.25rem', // 36px - H1, page titles
  '5xl': '3rem',    // 48px - Hero text, major features
  '6xl': '3.75rem', // 60px - Large hero text
  '7xl': '4.5rem',  // 72px - Extra large display text
  '8xl': '6rem',    // 96px - Giant display text
  '9xl': '8rem',    // 128px - Maximum display text
};

/**
 * Font Weights
 * 
 * Defines the spectrum of font weights available for use in the application.
 * This provides options for creating emphasis and visual hierarchy.
 * 
 * Note: Not all font weights may be available for all font families.
 * Ensure the selected fonts have the weights specified here.
 */
const fontWeights = {
  hairline: 100,  // Extremely thin
  thin: 200,      // Very thin
  light: 300,     // Light weight
  normal: 400,    // Regular weight
  medium: 500,    // Slightly bolder than normal
  semibold: 600,  // Semi-bold weight
  bold: 700,      // Bold weight - commonly used for headings
  extrabold: 800, // Extra bold weight
  black: 900,     // Heaviest weight
};

/**
 * Component Style Overrides
 * 
 * This section contains style customizations for Chakra UI components.
 * These overrides ensure the components match the Tigma Real Estate brand
 * and provide consistent behavior across the application.
 * 
 * Recent changes:
 * - Added animation effects to buttons and cards
 * - Updated colors to match new brand palette
 * - Enhanced hover and focus states for better user experience
 * - Added custom variants for text elements
 */
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

/**
 * Spacing System
 * 
 * Defines a comprehensive scale of spacing values used for margins, padding,
 * and positioning throughout the application. This ensures consistent 
 * whitespace and layout throughout the interface.
 * 
 * The spacing follows a 0.25rem (4px) base increment system, which is 
 * standard in design systems and provides a harmonious visual rhythm.
 * 
 * Usage:
 * <Box margin={4} padding={6}>
 *   This box has 1rem margin and 1.5rem padding
 * </Box>
 */
const space = {
  px: '1px',          // Pixel value, for hairline borders
  0.5: '0.125rem',    // 2px - Tiny spacing
  1: '0.25rem',       // 4px - Extra small spacing
  1.5: '0.375rem',    // 6px - Small spacing
  2: '0.5rem',        // 8px - Small spacing
  2.5: '0.625rem',    // 10px - Small to medium spacing
  3: '0.75rem',       // 12px - Medium spacing
  3.5: '0.875rem',    // 14px - Medium spacing
  4: '1rem',          // 16px - Base spacing unit
  5: '1.25rem',       // 20px - Medium to large spacing
  6: '1.5rem',        // 24px - Large spacing
  7: '1.75rem',       // 28px - Large spacing
  8: '2rem',          // 32px - Extra large spacing
  9: '2.25rem',       // 36px - Extra large spacing
  10: '2.5rem',       // 40px - Component spacing
  12: '3rem',         // 48px - Section spacing
  14: '3.5rem',       // 56px - Section spacing
  16: '4rem',         // 64px - Large section spacing
  20: '5rem',         // 80px - Large section spacing
  24: '6rem',         // 96px - Large section spacing
  28: '7rem',         // 112px - Extra large section spacing
  32: '8rem',         // 128px - Extra large section spacing
  36: '9rem',         // 144px - Content area spacing
  40: '10rem',        // 160px - Content area spacing
  44: '11rem',        // 176px - Content width
  48: '12rem',        // 192px - Content width
  52: '13rem',        // 208px - Content width
  56: '14rem',        // 224px - Content width
  60: '15rem',        // 240px - Content width
  64: '16rem',        // 256px - Content width
  72: '18rem',        // 288px - Sidebar width
  80: '20rem',        // 320px - Sidebar width
  96: '24rem',        // 384px - Container width
};

/**
 * Global Styles
 * 
 * Defines application-wide style defaults that apply to HTML elements.
 * This ensures a consistent baseline appearance throughout the application.
 * 
 * Recent changes:
 * - Updated background color to a softer gray for better readability
 * - Enhanced link styling to match brand colors
 * - Improved overall color contrast for accessibility
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

// Create the extended theme
/**
 * Tigma Real Estate Theme
 * 
 * This combines all the theme tokens and configuration into a single theme object
 * that can be used with Chakra UI's ThemeProvider.
 * 
 * How to use:
 * 1. Import this theme in _app.js
 * 2

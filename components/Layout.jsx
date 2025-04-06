/**
 * @fileoverview Main Layout Component
 *
 * This file contains the Layout component which serves as the main structural
 * wrapper for all pages in the application. It provides a consistent layout
 * with navigation, main content area, and footer across the entire site.
 *
 * @version 1.2.0
 * @since 1.0.0
 */

import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

/**
 * Layout Component
 * 
 * Provides the main structural layout for all pages in the application.
 * Includes:
 * - Common <Head> with title and meta tags for SEO
 * - Responsive container with max-width constraint
 * - Consistent header with navigation
 * - Main content area where page-specific content is rendered
 * - Footer with site information and links
 * 
 * The layout uses Chakra UI's responsive design system to ensure
 * proper display across all device sizes, centered content with
 * appropriate maximum width, and consistent spacing.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to be rendered within the layout
 * @returns {React.ReactElement} Complete page layout with header, content area, and footer
 */
export default function Layout({ children }) {
  return (
    <>
      {/* Head component for setting document title and meta tags */}
      <Head>
        <title>Real Estate</title>
        {/* Additional meta tags can be added here for SEO optimization */}
      </Head>

      {/* Main container with responsive max-width */}
      <Box maxWidth='1280px' m='auto'>
        {/* Header section with navigation */}
        <header>
          <Navbar />
        </header>

        {/* Main content area where page content is rendered */}
        <main>{children}</main>

        {/* Footer section */}
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}

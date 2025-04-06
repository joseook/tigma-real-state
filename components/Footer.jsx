/**
 * @fileoverview Footer Component
 * 
 * This file contains the Footer component which provides navigation links,
 * social media connections, contact information, and newsletter subscription
 * functionality for the Tigma Real Estate application.
 * 
 * Recent updates include:
 * - Updated branding to Tigma Real Estate
 * - Added newsletter subscription functionality
 * - Enhanced social media integration with hover effects
 * - Improved responsive layout for better mobile experience
 * - Added contact information with icon integration
 * - Implemented accessible link structure with semantic HTML
 * 
 * @version 2.0.0
 * @since 1.0.0
 */

import { useState } from 'react';
import { 
  Box, 
  Container, 
  SimpleGrid, 
  Stack, 
  Text, 
  Flex, 
  Heading, 
  Input, 
  Button, 
  VStack, 
  HStack, 
  Divider, 
  Link, 
  IconButton, 
  useColorModeValue
} from '@chakra-ui/react';
import { 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedin, 
  FaHome,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt
} from 'react-icons/fa';
import NextLink from 'next/link';
/**
 * ListHeader Component
 * 
 * A presentational component that renders consistent section header styling
 * for each category of links in the footer.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The header text
 * @returns {React.ReactElement} A styled section header for the footer
 */
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="600" fontSize="lg" mb={2} color="brand.primary">
      {children}
    </Text>
  );
};

/**
 * SocialButton Component
 * 
 * A reusable social media button component that provides consistent styling
 * and interactive behavior for all social media links.
 * 
 * Features:
 * - Circular button design for social media icons
 * - Consistent sizing and spacing
 * - Interactive hover effects with brand colors
 * - Accessibility support with appropriate aria-labels
 * - Smooth transitions for visual feedback
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The icon to display (typically from react-icons)
 * @param {string} props.label - Accessible label describing the social platform
 * @param {string} props.href - URL the button should link to
 * @returns {React.ReactElement} A styled social media link button
 */
const SocialButton = ({ children, label, href }) => {
  return (
    <IconButton
      bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      aria-label={label}
      _hover={{ 
        bg: 'brand.primary',
        color: 'white'
      }}
      icon={children}
    />
  );
};

/**
 * Footer Component
 * 
 * Provides the main footer for the application with multiple sections:
 * - Brand information and description
 * - Social media links for various platforms
 * - Categorized navigation links (Explore, Company)
 * - Contact information with icons
 * - Newsletter subscription functionality
 * - Copyright and legal links
 * 
 * The component uses a responsive grid layout that adapts to different screen sizes:
 * - Single column on small mobile devices
 * - Two columns on larger mobiles/small tablets
 * - Four columns on desktop and larger screens
 * 
 * @returns {React.ReactElement} The footer component with all sections
 */
const Footer = () => {
  /**
   * State for the newsletter email input field
   * @type {[string, Function]} Email state and setter function
   */
  const [email, setEmail] = useState('');
  
  /**
   * Current year for copyright notice, automatically updates each year
   * @type {number}
   */
  const currentYear = new Date().getFullYear();
  
  /**
   * Theme-aware background color that changes based on color mode
   * @type {string} 
   */
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  
  /**
   * Theme-aware border color that changes based on color mode
   * @type {string}
   */
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  /**
   * Handles changes to the newsletter email input field
   * Updates the email state as the user types
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event
   */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  /**
   * Handles the newsletter subscription form submission
   * Currently logs the email to console and resets the form
   * In production, this would connect to a newsletter API
   */
  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
    // Show success message or call API
  };

  return (
    <Box
      bg={bgColor}
      color={useColorModeValue('gray.700', 'gray.200')}
      borderTop="1px"
      borderColor={borderColor}
      as="footer" // Semantic HTML5 footer element for better accessibility
      role="contentinfo" // ARIA role for screen readers
    >
      {/* Main footer content container */}
      <Container as={Stack} maxW={'container.xl'} py={10}>
        {/* 
          Responsive grid layout system:
          - Single column on mobile (default)
          - Two columns on small tablets (sm breakpoint)
          - Four columns with proportional sizing on desktop (md breakpoint)
        */}
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading 
                as="h2" 
                size="lg" 
                color="brand.primary" 
                fontFamily="heading"
              >
                Tigma Real Estate
              </Heading>
              <Text mt={2} color="gray.600" fontSize="sm" maxW={'sm'}>
                Your trusted partner in finding the perfect property. We connect buyers and sellers with exceptional real estate opportunities worldwide.
              </Text>
            </Box>
            <HStack spacing={5} mt={4}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
            </HStack>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Explore</ListHeader>
            <NextLink href="/search" passHref>
              <Link>Search</Link>
            </NextLink>
            <NextLink href="/search?purpose=for-sale" passHref>
              <Link>Buy Property</Link>
            </NextLink>
            <NextLink href="/search?purpose=for-rent" passHref>
              <Link>Rent Property</Link>
            </NextLink>
            <NextLink href="/search?furnishingStatus=furnished" passHref>
              <Link>Furnished Homes</Link>
            </NextLink>
            <NextLink href="/search?categoryExternalID=5" passHref>
              <Link>Apartments</Link>
            </NextLink>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Stay Connected</ListHeader>
            <HStack align="start" spacing={2}>
              <Box as={FaMapMarkerAlt} color="brand.accent" mt={1} />
              <Text>123 Real Estate Blvd, New York, NY 10001</Text>
            </HStack>
            <HStack align="start" spacing={2}>
              <Box as={FaPhone} color="brand.accent" mt={1} />
              <Text>+1 (555) 123-4567</Text>
            </HStack>
            <HStack align="start" spacing={2}>
              <Box as={FaEnvelope} color="brand.accent" mt={1} />
              <Text>contact@tigmarealestate.com</Text>
            </HStack>
            <Box mt={4} width="full">
              <Stack spacing={2}>
                <Text>Subscribe to our newsletter</Text>
                <Flex>
                  <Input
                    placeholder={'Your email address'}
                    bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                    border={0}
                    _focus={{
                      bg: 'whiteAlpha.300',
                    }}
                    value={email}
                    onChange={handleEmailChange}
                    aria-label="Email address for newsletter"
                  />
                  <Button
                    bg="brand.primary"
                    color="white"
                    _hover={{
                      bg: 'brand.dark',
                    }}
                    aria-label="Subscribe to newsletter"
                    onClick={handleSubscribe}
                    ml={2}
                  >
                    Subscribe
                  </Button>
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      
      {/* Divider between main content and copyright section */}
      <Divider borderColor={borderColor} />
      
      {/* Copyright and legal links section */}
      <Box py={5}>
        <Container
          as={Stack}
          maxW={'container.xl'}
          direction={{ base: 'column', md: 'row' }} // Stacked on mobile, row on desktop
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          {/* Copyright notice with dynamic year */}
          <Text fontSize="sm">
            © {currentYear} Tigma Real Estate. All rights reserved.
          </Text>
          
          {/* Secondary navigation for legal pages */}
          <Stack direction={'row'} spacing={6}>
            <NextLink href="/" passHref>
              <Link fontSize="sm">Home</Link>
            </NextLink>
            <Link href={'#'} fontSize="sm">Terms</Link>
            <Link href={'#'} fontSize="sm">Privacy</Link>
            <Link href={'#'} fontSize="sm">Cookies</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;

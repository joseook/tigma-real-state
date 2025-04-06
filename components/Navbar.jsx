/**
 * @fileoverview Navigation Bar Component
 * 
 * This file contains the Navbar component which serves as the main navigation
 * for the Tigma Real Estate application. It provides access to key sections
 * of the site and adapts to different screen sizes with a responsive design.
 * 
 * Recent updates include:
 * - Updated branding to Tigma Real Estate
 *const Navbar = () => {
  /**
   * Controls the mobile menu open/closed state
   * @type {Object} Disclosure state and handlers
   * @property {boolean} isOpen Whether the mobile menu is currently open
   * @property {Function} onToggle Function to toggle the mobile menu open/closed state
   */
  const { isOpen, onToggle } = useDisclosure();
  
  /**
   * Color values that adapt to light/dark mode
   * @type {string} Text color that changes based on color mode
   */
  const textColor = useColorModeValue('gray.600', 'white');
  
  /**
   * Hover color for links that adapts to light/dark mode
   * @type {string} Hover color that changes based on color mode
   */
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Box>
      <Flex
        minH={'60px'}
        py={{ base: 2 }}
        align={'center'}
        justify={'space-between'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Link href="/" passHref>
            <Text
              as="a"
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontSize="xl"
              fontWeight="bold"
              color="brand.primary"
              _hover={{
                textDecoration: 'none',
                color: 'brand.accent',
              }}
            >
              Tigma Real Estate
            </Text>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <HStack spacing={8}>
              <NavLink href="/search?purpose=for-rent">Rent</NavLink>
              <NavLink href="/search?purpose=for-sale">Buy</NavLink>
              <NavLink href="/search">Search</NavLink>
            </HStack>
          </Flex>
        </Flex>

        {/* Mobile Menu Button */}
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          justify="flex-end"
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        {/* Desktop Right Section */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          display={{ base: 'none', md: 'flex' }}
        >
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'ghost'}
            href={'/search'}
            leftIcon={<FaSearch />}
          >
            Advanced Search
          </Button>
        </Stack>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Stack
          p={4}
          display={{ md: 'none' }}
          spacing={4}
          bg={useColorModeValue('white', 'gray.800')}
          borderRadius="md"
          shadow="sm"
        >
          <NavLink href="/search?purpose=for-rent" mobile>Rent</NavLink>
          <NavLink href="/search?purpose=for-sale" mobile>Buy</NavLink>
          <NavLink href="/search" mobile>Search</NavLink>
        </Stack>
      </Collapse>
    </Box>
  );
};

/**
 * NavLink Component
 * 
 * A reusable navigation link component used within the Navbar.
 * Provides consistent styling for all navigation links with hover effects.
 * Adapts styling based on whether it's used in mobile or desktop view.
 * 
 * @param {Object} props - Component props
 * @param {string} props.href - URL the link should navigate to
 * @param {React.ReactNode} props.children - Link text or content
 * @param {boolean} [props.mobile] - Whether this link is rendered in the mobile menu
 * @returns {React.ReactElement} A styled navigation link
 */
const NavLink = ({ href, children, mobile }) => (
  <Link href={href} passHref>
    <Text
      as="a"
      px={2}
      py={mobile ? 2 : 1} // More padding on mobile for better touch targets
      rounded={'md'}
      color="gray.600"
      fontWeight="medium"
      _hover={{
        textDecoration: 'none',
        color: 'brand.primary',
        bg: 'gray.50',
      }}
      display="block"
      // Improved accessibility
      role="menuitem"
    >
      {children}
    </Text>
  </Link>
);

export default Navbar;


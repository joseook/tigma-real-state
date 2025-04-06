import { useState } from 'react';
import Link from 'next/link';
import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  Button, 
  Stack, 
  Collapse, 
  useColorModeValue, 
  useBreakpointValue, 
  useDisclosure,
  HStack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaHome, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue('gray.600', 'white');
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

const NavLink = ({ href, children, mobile }) => (
  <Link href={href} passHref>
    <Text
      as="a"
      px={2}
      py={mobile ? 2 : 1}
      rounded={'md'}
      color="gray.600"
      fontWeight="medium"
      _hover={{
        textDecoration: 'none',
        color: 'brand.primary',
        bg: 'gray.50',
      }}
      display="block"
    >
      {children}
    </Text>
  </Link>
);

export default Navbar;


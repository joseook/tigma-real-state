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

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="600" fontSize="lg" mb={2} color="brand.primary">
      {children}
    </Text>
  );
};

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

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
    >
      <Container as={Stack} maxW={'container.xl'} py={10}>
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
      
      <Divider borderColor={borderColor} />
      
      <Box py={5}>
        <Container
          as={Stack}
          maxW={'container.xl'}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize="sm">
            © {currentYear} Tigma Real Estate. All rights reserved.
          </Text>
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

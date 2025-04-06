import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Container, Heading, SimpleGrid, VStack } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Box 
    bg="white" 
    borderRadius="2xl" 
    overflow="hidden"
    shadow="sm"
    my={12}
  >
    <Flex 
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
    >
      <Box 
        position="relative"
        width={{ base: '100%', md: '50%' }}
        height={{ base: '300px', md: '400px' }}
      >
        <Image 
          src={imageUrl} 
          alt={title1}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </Box>
      
      <VStack 
        spacing={6}
        align="flex-start"
        p={{ base: 8, md: 12 }}
        maxW={{ base: '100%', md: '50%' }}
      >
        <Text 
          color="brand.accent"
          fontSize="md"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          {purpose}
        </Text>
        
        <Heading as="h2" size="xl" lineHeight="shorter">
          {title1} <br /> {title2}
        </Heading>
        
        <Text 
          fontSize="lg" 
          color="gray.600"
          lineHeight="tall"
        >
          {desc1} <br /> {desc2}
        </Text>
        
        <Link href={linkName} passHref>
          <Button 
            as="a"
            size="lg"
            colorScheme="brand"
            _hover={{
              transform: 'translateY(-2px)',
              shadow: 'md',
            }}
            transition="all 0.2s"
          >
            {buttonText}
          </Button>
        </Link>
      </VStack>
    </Flex>
  </Box>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1='Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />

    <Box my={12}>
      <Heading as="h2" size="lg" mb={8}>
        Featured Rental Properties
      </Heading>
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
      >
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </SimpleGrid>
    </Box>

    <Banner
      purpose='BUY A HOME'
      title1='Find, Buy & Own Your'
      title2='Dream Home'
      desc1='Explore from Apartments, land, builder floors,'
      desc2='villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />

    <Box my={12}>
      <Heading as="h2" size="lg" mb={8}>
        Featured Properties for Sale
      </Heading>
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
      >
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </SimpleGrid>
    </Box>
  </Container>
);

export async function getStaticProps() {
  // Define the essential fields to reduce data size
  const requiredFields = [
    'externalID',
    'title',
    'coverPhoto',
    'price',
    'rentFrequency',
    'rooms',
    'baths',
    'area',
    'agency',
    'isVerified',
    'score',
    'createdAt',
    'furnishingStatus',
    'purpose'
  ].join(',');

  // Fetch only 3 properties per category with selected fields
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=3&fields=${requiredFields}`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=3&fields=${requiredFields}`
  );
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;

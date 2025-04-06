import { 
  Box, 
  Flex, 
  Text, 
  Avatar, 
  Spacer, 
  Container, 
  SimpleGrid, 
  Icon, 
  Button, 
  VStack, 
  HStack, 
  Badge, 
  Link as ChakraLink,
  Skeleton,
  Alert,
  AlertIcon,
  useToast
} from '@chakra-ui/react';
import { FaBed, FaBath, FaSquareFull, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import millify from 'millify';
import { useState, useEffect } from 'react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

// Utility function to safely sanitize HTML content
const createSanitizedMarkup = (html) => {
  if (!html) return { __html: '' };
  return { __html: DOMPurify.sanitize(html) };
};

const PropertyDetails = ({ 
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
    phoneNumber,
    contactName,
    location
  } 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const toast = useToast();
  
  useEffect(() => {
    // Simulate checking if content is loaded
    if (title && description) {
      setIsLoading(false);
    }
    
    // Error handling example
    if (!photos || photos.length === 0) {
      toast({
        title: "Some images couldn't be loaded",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [title, description, photos, toast]);
  
  // WhatsApp link handler
  const getWhatsAppLink = () => {
    const baseUrl = "https://wa.me/";
    const formattedNumber = phoneNumber?.replace(/[^0-9]/g, "") || "";
    const message = encodeURIComponent(`Hi, I'm interested in the property: ${title}`);
    return `${baseUrl}${formattedNumber}?text=${message}`;
  };
  
  // Phone call link handler
  const getPhoneLink = () => {
    const formattedNumber = phoneNumber?.replace(/[^0-9]/g, "") || "";
    return `tel:${formattedNumber}`;
  };
  
  if (hasError) {
    return (
      <Container maxW="container.xl" py={8}>
        <Alert status="error">
          <AlertIcon />
          Failed to load property details. Please try again later.
        </Alert>
      </Container>
    );
  }
  
  return (
    <Container maxW="container.xl" py={8}>
      {isLoading ? (
        <>
          <Skeleton height="400px" width="100%" borderRadius="xl" mb={8} />
          <Box bg="white" borderRadius="2xl" overflow="hidden" shadow="sm" mt={8}>
            <Box p={8}>
              <Skeleton height="30px" width="70%" mb={4} />
              <Skeleton height="20px" width="40%" mb={6} />
              <Skeleton height="100px" width="100%" mb={8} />
            </Box>
          </Box>
        </>
      ) : (
        <>
          {photos && photos.length > 0 && <ImageScrollbar data={photos} />}
          
          <Box bg="white" borderRadius="2xl" overflow="hidden" shadow="sm" mt={8}>
            <Box p={8}>
              <Flex alignItems="center" gap={2} mb={4}>
                {isVerified && (
                  <Icon as={MdVerified} color="green.400" w={4} h={4} />
                )}
                <Text fontSize="2xl" fontWeight="bold">
                  AED {millify(price)}{rentFrequency && `/${rentFrequency}`}
                </Text>
                <Spacer />
                <Avatar size="sm" src={agency?.logo?.url} />
              </Flex>

              <HStack spacing={4} color="blue.600" mb={6}>
                <Flex align="center" gap={1}>
                  <Icon as={FaBed} /> <Text>{rooms}</Text>
                </Flex>
                <Flex align="center" gap={1}>
                  <Icon as={FaBath} /> <Text>{baths}</Text>
                </Flex>
                <Flex align="center" gap={1}>
                  <Icon as={FaSquareFull} /> <Text>{millify(area)} sqft</Text>
                </Flex>
              </HStack>

              <VStack align="stretch" spacing={4}>
                <Text fontSize="lg" fontWeight="semibold">
                  {title}
                </Text>
                
                <Box 
                  className="property-description" 
                  color="gray.600" 
                  lineHeight="tall"
                  sx={{
                    '& p': { mb: 2 },
                    '& strong, & b': { fontWeight: 'semibold', color: 'gray.800' },
                    '& ul': { pl: 5, mb: 2 },
                    '& li': { mb: 1 }
                  }}
                  dangerouslySetInnerHTML={createSanitizedMarkup(description)}
                />
              </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Property Details
            </Text>
            <VStack align="stretch" spacing={3}>
              <Flex justify="space-between">
                <Text color="gray.600">Type</Text>
                <Text fontWeight="medium">{type}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text color="gray.600">Purpose</Text>
                <Badge colorScheme={purpose === 'for-rent' ? 'green' : 'blue'}>
                  {purpose === 'for-rent' ? 'Rental' : 'Sale'}
                </Badge>
              </Flex>
              {furnishingStatus && (
              <Flex justify="space-between">
                <Text color="gray.600">Furnishing</Text>
                <Text fontWeight="medium">{furnishingStatus}</Text>
              </Flex>
              )}
            </VStack>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Location
            </Text>
            <Flex align="center" gap={2} color="gray.600">
              <Icon as={FaMapMarkerAlt} />
              <Text>{location?.map((item) => item.name).join(', ')}</Text>
            </Flex>
          </Box>
        </SimpleGrid>

        {amenities?.length > 0 && (
          <Box mt={8}>
            <Text fontSize="lg" fontWeight="semibold" mb={4}>
              Amenities
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
              {amenities.map((item) => (
                <Text 
                  key={item.text}
                  bg="gray.50"
                  px={4}
                  py={2}
                  borderRadius="md"
                  fontSize="sm"
                  textAlign="center"
                >
                  {item.text}
                </Text>
              ))}
            </SimpleGrid>
          </Box>
         )}

         <Flex gap={4} mt={8}>
           <ChakraLink 
            href={getPhoneLink()} 
            isExternal 
            flex={1} 
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              leftIcon={<FaPhone />}
              colorScheme="blue"
              variant="solid"
              width="100%"
            >
              Call Now
            </Button>
          </ChakraLink>
          <ChakraLink 
            href={getWhatsAppLink()} 
            isExternal 
            flex={1}
            _hover={{ textDecoration: 'none' }}
          >
            <Button
              leftIcon={<FaWhatsapp />}
              colorScheme="green"
              variant="solid"
              width="100%"
            >
              WhatsApp
            </Button>
          </ChakraLink>
        </Flex>
      </Box>
    </Box>
    </>
    )}
  </Container>
  );
};
export async function getServerSideProps({ params: { id } }) {
  try {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
    return {
      props: {
        propertyDetails: data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch property details:', error);
    return {
      props: {
        propertyDetails: {
          price: 0,
          rentFrequency: '',
          rooms: 0,
          title: 'Property information unavailable',
          baths: 0,
          area: 0,
          agency: {},
          isVerified: false,
          description: 'Property details could not be loaded at this time.',
          type: '',
          purpose: '',
          furnishingStatus: '',
          amenities: [],
          photos: [],
          location: []
        },
        error: true
      },
    };
  }
}

export default PropertyDetails;

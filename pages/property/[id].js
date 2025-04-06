import { Box, Flex, Text, Avatar, Spacer, Container, SimpleGrid, Icon, Button, VStack, HStack, Badge } from '@chakra-ui/react';
import { FaBed, FaBath, FaSquareFull, FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import millify from 'millify';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

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
    furnishing,
    amenities,
    photos,
    location
  } 
}) => (
  <Container maxW="container.xl" py={8}>
    {photos && <ImageScrollbar data={photos} />}
    
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
          
          <Text color="gray.600" lineHeight="tall">
            {description}
          </Text>
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
              {furnishing && (
                <Flex justify="space-between">
                  <Text color="gray.600">Furnishing</Text>
                  <Text fontWeight="medium">{furnishing}</Text>
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
          <Button
            leftIcon={<FaPhone />}
            colorScheme="blue"
            variant="solid"
            flex={1}
          >
            Call Now
          </Button>
          <Button
            leftIcon={<FaWhatsapp />}
            colorScheme="green"
            variant="solid"
            flex={1}
          >
            WhatsApp
          </Button>
        </Flex>
      </Box>
    </Box>
  </Container>
);

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  
  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default PropertyDetails;

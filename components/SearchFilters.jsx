import { useState, useEffect, useRef } from 'react';
import { 
  Flex, 
  Box, 
  Text, 
  Input, 
  Select, 
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  HStack,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  useToast,
  Spinner,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputRightElement,
  Icon,
  Badge,
} from '@chakra-ui/react';
import { FaFilter, FaSearch, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { baseUrl } from '../utils/fetchApi';

const MotionBox = motion(Box);

const LocationSearch = ({ value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  const searchLocations = async (term) => {
    if (!term) return;
    setIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/auto-complete?query=${term}`);
      const data = await response.json();
      setSuggestions(data?.hits || []);
    } catch (error) {
      console.error('Error fetching locations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (searchTerm) {
      timeoutRef.current = setTimeout(() => {
        searchLocations(searchTerm);
      }, 500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [searchTerm]);

  return (
    <Box position="relative">
      <InputGroup>
        <Input
          placeholder="Search location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          pr="4.5rem"
        />
        <InputRightElement width="4.5rem">
          {isLoading ? (
            <Spinner size="sm" />
          ) : searchTerm ? (
            <IconButton
              h="1.75rem"
              size="sm"
              icon={<FaTimes />}
              onClick={() => {
                setSearchTerm('');
                setSuggestions([]);
              }}
            />
          ) : (
            <Icon as={FaMapMarkerAlt} color="gray.500" />
          )}
        </InputRightElement>
      </InputGroup>

      {suggestions.length > 0 && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          right={0}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          mt={2}
          zIndex={10}
          maxH="200px"
          overflowY="auto"
        >
          {suggestions.map((item) => (
            <Box
              key={item.id}
              p={2}
              cursor="pointer"
              _hover={{ bg: 'gray.50' }}
              onClick={() => {
                onChange(item.externalID);
                setSearchTerm(item.name);
                setSuggestions([]);
              }}
            >
              <Text>{item.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {item.hierarchy?.map(h => h.name).join(', ')}
              </Text>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
const SearchFilters = () => {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    purpose: router.query.purpose || 'for-rent',
    minPrice: parseInt(router.query.minPrice) || 0,
    maxPrice: parseInt(router.query.maxPrice) || 1000000,
    roomsMin: parseInt(router.query.roomsMin) || 0,
    bathsMin: parseInt(router.query.bathsMin) || 0,
    sort: router.query.sort || 'price-desc',
    areaMin: parseInt(router.query.areaMin) || 0,
    categoryExternalID: parseInt(router.query.categoryExternalID) || 4,
    locationExternalIDs: router.query.locationExternalIDs || '',
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const searchProperties = async (fromMobile = false) => {
    try {
      setIsLoading(true);
      const path = '/search';
      const values = {
        ...router.query,
        ...filters,
      };

      await router.push({ pathname: path, query: values });
      
      if (fromMobile) {
        onClose();
      }

      toast({
        title: "Filters Applied",
        description: "Showing properties matching your criteria",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to apply filters. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const FilterContent = ({ isMobile = false }) => (
    <Stack spacing={6}>
      <Flex gap={4} wrap="wrap">
        <Box flex={1} minW={isMobile ? "100%" : "200px"}>
          <Text mb={2} fontWeight="medium">Purpose</Text>
          <Select
            value={filters.purpose}
            onChange={(e) => setFilters({ ...filters, purpose: e.target.value })}
          >
            <option value="for-rent">Rent</option>
            <option value="for-sale">Buy</option>
          </Select>
        </Box>

        <Box flex={1} minW={isMobile ? "100%" : "200px"}>
          <Text mb={2} fontWeight="medium">Property Type</Text>
          <Select
            value={filters.categoryExternalID}
            onChange={(e) => setFilters({ ...filters, categoryExternalID: e.target.value })}
          >
            <option value="4">Apartment</option>
            <option value="16">Villa</option>
            <option value="3">Townhouse</option>
          </Select>
        </Box>

        <Box flex={1} minW={isMobile ? "100%" : "200px"}>
          <Text mb={2} fontWeight="medium">Sort By</Text>
          <Select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          >
            <option value="price-desc">Price (High to Low)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="date-desc">Newest First</option>
          </Select>
        </Box>
      </Flex>

      {/* Add Location Search */}
      <Box flex={1} minW={isMobile ? "100%" : "200px"}>
        <Text mb={2} fontWeight="medium">Location</Text>
        <LocationSearch
          value={filters.locationExternalIDs}
          onChange={(value) => setFilters({ ...filters, locationExternalIDs: value })}
        />
      </Box>

      {/* Update Price Range with precise controls */}
      <Box>
        <Text mb={2} fontWeight="medium">Price Range</Text>
        <Stack spacing={4}>
          <RangeSlider
            min={0}
            max={1000000}
            step={10000}
            value={[filters.minPrice, filters.maxPrice]}
            onChange={(val) => setFilters({ ...filters, minPrice: val[0], maxPrice: val[1] })}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Flex gap={4}>
            <Box flex={1}>
              <Text fontSize="sm" mb={1}>Min Price</Text>
              <NumberInput
                value={filters.minPrice}
                onChange={(val) => setFilters({ ...filters, minPrice: parseInt(val) || 0 })}
                min={0}
                max={filters.maxPrice}
                step={10000}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box flex={1}>
              <Text fontSize="sm" mb={1}>Max Price</Text>
              <NumberInput
                value={filters.maxPrice}
                onChange={(val) => setFilters({ ...filters, maxPrice: parseInt(val) || 0 })}
                min={filters.minPrice}
                max={1000000}
                step={10000}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
          </Flex>
        </Stack>
      </Box>

      <HStack spacing={4}>
        <Box flex={1}>
          <Text mb={2} fontWeight="medium">Min Beds</Text>
          <Select
            value={filters.roomsMin}
            onChange={(e) => setFilters({ ...filters, roomsMin: e.target.value })}
          >
            {[0,1,2,3,4,5,6].map((num) => (
              <option key={num} value={num}>{num}+</option>
            ))}
          </Select>
        </Box>
        <Box flex={1}>
          <Text mb={2} fontWeight="medium">Min Baths</Text>
          <Select
            value={filters.bathsMin}
            onChange={(e) => setFilters({ ...filters, bathsMin: e.target.value })}
          >
            {[0,1,2,3,4,5].map((num) => (
              <option key={num} value={num}>{num}+</option>
            ))}
          </Select>
        </Box>
      </HStack>

      {!isMobile && (
        <Button 
          colorScheme="blue" 
          size="lg"
          leftIcon={isLoading ? <Spinner size="sm" /> : <FaSearch />}
          onClick={() => searchProperties()}
          isLoading={isLoading}
        >
          Search Properties
        </Button>
      )}
    </Stack>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <MotionBox
        display={{ base: 'block', md: 'none' }}
        position="fixed"
        bottom={4}
        right={4}
        zIndex={20}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconButton
          icon={<FaFilter />}
          onClick={onOpen}
          colorScheme="blue"
          size="lg"
          shadow="lg"
          rounded="full"
        />
      </MotionBox>

      {/* Desktop Filters */}
      <MotionBox 
        display={{ base: 'none', md: 'block' }}
        bg="white" 
        p={6} 
        borderRadius="xl"
        shadow="sm"
        mb={8}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Active Filters */}
        {Object.keys(filters).some(key => filters[key] !== 0 && filters[key] !== 'for-rent' && filters[key] !== 'price-desc') && (
          <Box mb={6}>
            <Flex align="center" gap={2} mb={3}>
              <Text fontWeight="medium">Active Filters:</Text>
              <Button
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={() => {
                  setFilters({
                    purpose: 'for-rent',
                    minPrice: 0,
                    maxPrice: 1000000,
                    roomsMin: 0,
                    bathsMin: 0,
                    sort: 'price-desc',
                    areaMin: 0,
                    categoryExternalID: 4,
                  });
                  searchProperties();
                }}
              >
                Reset All
              </Button>
            </Flex>
            <Flex wrap="wrap" gap={2}>
              {filters.purpose !== 'for-rent' && (
                <Badge 
                  colorScheme="blue" 
                  p={2} 
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                >
                  Purpose: For Sale
                </Badge>
              )}
              {filters.locationExternalIDs && (
                <Badge 
                  colorScheme="teal" 
                  p={2} 
                  borderRadius="md"
                >
                  Custom Location
                </Badge>
              )}
              {filters.minPrice > 0 && (
                <Badge 
                  colorScheme="green" 
                  p={2} 
                  borderRadius="md"
                >
                  Min Price: AED {filters.minPrice.toLocaleString()}
                </Badge>
              )}
              {filters.maxPrice < 1000000 && (
                <Badge 
                  colorScheme="green" 
                  p={2} 
                  borderRadius="md"
                >
                  Max Price: AED {filters.maxPrice.toLocaleString()}
                </Badge>
              )}
              {filters.roomsMin > 0 && (
                <Badge 
                  colorScheme="purple" 
                  p={2} 
                  borderRadius="md"
                >
                  Min Beds: {filters.roomsMin}+
                </Badge>
              )}
              {filters.bathsMin > 0 && (
                <Badge 
                  colorScheme="purple" 
                  p={2} 
                  borderRadius="md"
                >
                  Min Baths: {filters.bathsMin}+
                </Badge>
              )}
            </Flex>
          </Box>
        )}

        <FilterContent />
      </MotionBox>

      {/* Mobile Filters Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Flex justify="space-between" align="center">
              Filter Properties
              <Button
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={() => {
                  setFilters({
                    purpose: 'for-rent',
                    minPrice: 0,
                    maxPrice: 1000000,
                    roomsMin: 0,
                    bathsMin: 0,
                    sort: 'price-desc',
                    areaMin: 0,
                    categoryExternalID: 4,
                  });
                }}
              >
                Reset All
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box py={4}>
              {/* Active Filters for Mobile */}
              {Object.keys(filters).some(key => filters[key] !== 0 && filters[key] !== 'for-rent' && filters[key] !== 'price-desc') && (
                <Box mb={6}>
                  <Text fontWeight="medium" mb={3}>Active Filters:</Text>
                  <Flex wrap="wrap" gap={2}>
                    {filters.purpose !== 'for-rent' && (
                      <Badge colorScheme="blue" p={2} borderRadius="md">
                        Purpose: For Sale
                      </Badge>
                    )}
                    {filters.locationExternalIDs && (
                      <Badge colorScheme="teal" p={2} borderRadius="md">
                        Custom Location
                      </Badge>
                    )}
                    {filters.minPrice > 0 && (
                      <Badge colorScheme="green" p={2} borderRadius="md">
                        Min Price: AED {filters.minPrice.toLocaleString()}
                      </Badge>
                    )}
                    {filters.maxPrice < 1000000 && (
                      <Badge colorScheme="green" p={2} borderRadius="md">
                        Max Price: AED {filters.maxPrice.toLocaleString()}
                      </Badge>
                    )}
                    {filters.roomsMin > 0 && (
                      <Badge colorScheme="purple" p={2} borderRadius="md">
                        Min Beds: {filters.roomsMin}+
                      </Badge>
                    )}
                    {filters.bathsMin > 0 && (
                      <Badge colorScheme="purple" p={2} borderRadius="md">
                        Min Baths: {filters.bathsMin}+
                      </Badge>
                    )}
                  </Flex>
                </Box>
              )}
              <FilterContent isMobile={true} />
            </Box>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button 
              colorScheme="blue"
              leftIcon={isLoading ? <Spinner size="sm" /> : <FaSearch />}
              onClick={() => searchProperties(true)}
              isLoading={isLoading}
            >
              Apply Filters
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchFilters;

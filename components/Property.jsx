/**
 * @fileoverview Property Card Component
 * 
 * This file contains the Property component which displays a property card with
 * images, pricing details, property features, and agency information.
 * The component is optimized for performance with image loading states,
 * skeleton loading placeholders, and animations.
 * 
 * @version 2.1.0
 * @since 1.0.0
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Badge, HStack, VStack } from '@chakra-ui/react';
import { Skeleton, SkeletonText } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill, BsStarFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { motion } from 'framer-motion';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';
import styles from '../styles/Property.module.css';

/**
 * Motion-enhanced Box component for animations
 * Used to provide smooth hover and tap animations for the property card
 */
const MotionBox = motion(Box);

/**
 * Formats a price value with thousand separators and a currency symbol
 * 
 * @param {number} price - The price value to format
 * @param {string} currency - The currency code to prepend (default: 'AED')
 * @returns {string} Formatted price string with currency symbol
 * 
 * @example
 * // Returns "AED 1,250,000"
 * formatP}) => {
  /**
   * State for tracking image loading status
   * @type {[boolean, Function]} imageLoaded state and setter
   */
  const [imageLoaded, setImageLoaded] = useState(false);

  /**
   * State for tracking image loading errors
   * @type {[boolean, Function]} imageError state and setter
   */
  const [imageError, setImageError] = useState(false);
  
  /**
   * Determine if property should show "Featured" badge based on score
   * Properties with a score above 80 are considered featured
   * @type {boolean}
   */
  const isFeatured = score > 80;

  /**
   * Check if property is new (listed within the last 7 days)
   * @type {boolean}
   */
  const isNew = isNewProperty(createdAt);
  
  /**
   * Reset image states when property changes
   * This prevents showing the loaded state of the previous property
   * when navigating between properties
   */
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [externalID]);

  /**
   * Handles successful image loading
   * Sets imageLoaded to true to display the image and hide the loading placeholder
   */
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  /**
   * Handles image loading errors
   * Sets imageError to true to display the default fallback image
   */
  const handleImageError = () => {
    setImageError(true);
  };

  /**
   * Render skeleton loading state when data is being fetched
   * Using Chakra UI's Skeleton components to provide a nice loading experience
   * with motion animation for a smooth appearance
   */
  if (isLoading) {
    return (
      <MotionBox 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden" 
        boxShadow="sm"
        bg="white"
        w={{ base: "full", sm: "420px" }}
        m={2}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Skeleton height="260px" />
        <Box p={4}>
          <SkeletonText mt="2" noOfLines={1} spacing="2" />
          <Flex mt={4} justify="space-between">
            <SkeletonText noOfLines={1} width="40%" />
            <Skeleton width="40px" height="40px" borderRadius="full" />
          </Flex>
          <SkeletonText mt="4" noOfLines={2} spacing="2" />
        </Box>
      </MotionBox>
    );
  }

  /**
   * Render the property card with full content
   * Features:
   * - Animated hover and tap effects for better user interaction
   * -
        {/* Image container */}
        <Box className={styles.imageContainer}>
          {!imageLoaded && !imageError && (
            <Flex className={styles.loadingPlaceholder}>
              <Text color="gray.500">Loading image...</Text>
            </Flex>
          )}
          
          <Image 
            src={imageError || !coverPhoto ? DefaultImage : coverPhoto.url} 
            alt={title || 'Property Image'}
            layout="fill"
            objectFit="cover"
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={imageLoaded ? styles.imageLoaded : styles.imageLoading}
          />
          
          {/* Property badges */}
          <HStack className={styles.badgesContainer} spacing={2}>
            {isVerified && (
              <Badge 
                borderRadius="full" 
                px="2" 
                bg="green.400" 
                color="white"
                display="flex"
                alignItems="center"
              >
                <Box mr="1"><GoVerified /></Box> Verified
              </Badge>
            )}
            
            {isFeatured && (
              <Badge 
                borderRadius="full" 
                px="2" 
                bg="brand.accent" 
                color="white"
                display="flex"
                alignItems="center"
              >
                <Box mr="1"><BsStarFill /></Box> Featured
              </Badge>
            )}
            
            {isNew && (
              <Badge 
                borderRadius="full" 
                px="2" 
                bg="red.400" 
                color="white"
              >
                New
              </Badge>
            )}
            
            {purpose && (
              <Badge 
                borderRadius="full" 
                px="2" 
                bg={purpose === 'for-rent' ? 'blue.400' : 'purple.400'} 
                color="white"
              >
                {purpose === 'for-rent' ? 'Rent' : 'Sale'}
              </Badge>
            )}
          </HStack>
        </Box>
        
        {/* Content container */}
        <Box p={4}>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <VStack align="start" spacing={1}>
              <Text 
                fontWeight="bold" 
                fontSize="xl" 
                color="brand.primary"
                noOfLines={1}
              >
                {formatPrice(price)}{rentFrequency && `/${rentFrequency}`}
              </Text>
              
              <Text 
                fontSize="md" 
                fontWeight="medium" 
                color="gray.700"
                noOfLines={2}
              >
                {title}
              </Text>
            </VStack>
            
            <Box 
              position="relative"
              width="48px" 
              height="48px"
              minWidth="48px"
              minHeight="48px"
              maxWidth="48px"
              maxHeight="48px"
              flexShrink={0}
              className={styles.avatarContainer}
            >
              <Avatar 
                size="md"
                src={agency?.logo?.url} 
                name={agency?.name || 'Real Estate Agency'} 
                className={`${styles.agencyLogo} property-agency-logo`}
                width="48px"
                height="48px"
                boxSize="48px"
                minW="48px"
                minH="48px"
                sx={{
                  width: '48px !important',
                  height: '48px !important',
                  minWidth: '48px !important',
                  minHeight: '48px !important',
                  maxWidth: '48px !important',
                  maxHeight: '48px !important',
                  flexShrink: 0
                }}
              />
            </Box>
          </Flex>

          <HStack
            mt={4} 
            spacing={4} 
            color="gray.600"
            divider={
              <Box as="span" mx={2} color="gray.300">|</Box>
            }
          >
            <Flex align="center">
              <Box as={FaBed} mr={1} color="brand.accent" />
              <Text>{rooms} {rooms > 1 ? 'Beds' : 'Bed'}</Text>
            </Flex>
            
            <Flex align="center">
              <Box as={FaBath} mr={1} color="brand.accent" />
              <Text>{baths} {baths > 1 ? 'Baths' : 'Bath'}</Text>
            </Flex>
            
            <Flex align="center">
              <Box as={BsGridFill} mr={1} color="brand.accent" />
              <Text>{millify(area)} sqft</Text>
            </Flex>
          </HStack>
          
          {/* Additional details */}
          {furnishingStatus && (
            <Text mt={2} fontSize="sm" color="gray.500">
              {furnishingStatus}
            </Text>
          )}
        </Box>
      </MotionBox>
    </Link>
  );
};

export default Property;
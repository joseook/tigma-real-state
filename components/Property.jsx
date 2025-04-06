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

// Motion-enhanced Box component for animations
const MotionBox = motion(Box);

const Property = ({ 
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
    score,
    createdAt,
    furnishingStatus,
    purpose
  },
  isLoading = false
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const isFeatured = score > 80;
  const isNew = (new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24) <= 7;

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [externalID]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const formatPrice = (value) => {
    return `AED ${millify(value)}`;
  };

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

  return (
    <Link href={`/property/${externalID}`} passHref>
      <MotionBox
        as="a"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="sm"
        bg="white"
        w={{ base: "full", sm: "420px" }}
        m={2}
        cursor="pointer"
        whileHover={{ y: -4, boxShadow: "md" }}
        whileTap={{ y: 0 }}
        transition={{ duration: 0.2 }}
      >
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

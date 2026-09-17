import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const PageLoader = () => {
  return (
    <MotionBox
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="cream.50"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
      display="flex"
      flexDirection="column"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Box 
        position="relative" 
        w="180px" 
        h="180px" 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        mb={4}
      >
        <MotionBox
          position="absolute"
          w="170px"
          h="170px"
          borderRadius="full"
          border="3px solid"
          borderColor="maroon.500"
          boxShadow="0 0 20px rgba(130, 0, 0, 0.3)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
        <MotionBox
          position="absolute"
          w="155px"
          h="155px"
          borderRadius="full"
          border="3px dashed"
          borderColor="maroon.400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <MotionBox
          position="absolute"
          w="140px"
          h="140px"
          borderRadius="full"
          border="2px solid"
          borderColor="maroon.300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <MotionBox
          position="absolute"
          w="110px"
          h="110px"
          borderRadius="full"
          bg="maroon.500"
          opacity={0.15}
          boxShadow="0 0 40px rgba(130, 0, 0, 0.4)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <MotionBox
          bg="white"
          borderRadius="full"
          p={3}
          boxShadow="0 8px 32px rgba(130, 0, 0, 0.2), 0 0 60px rgba(130, 0, 0, 0.15)"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 100 }}
        >
          <Image
            src="/images/st-james-zongoro-primary-logo.png"
            alt="St James Zongoro"
            w="70px"
            h="70px"
            objectFit="contain"
            borderRadius="full"
          />
        </MotionBox>
      </Box>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <VStack spacing={3}>
          <Text
            color="maroon.600"
            fontSize="2xl"
            fontWeight="700"
            letterSpacing="0.08em"
          >
            St James Zongoro <Text as="span" color="maroon.500">Primary</Text>
          </Text>
          <Text
            color="gray.500"
            fontSize="sm"
            fontWeight="500"
            letterSpacing="0.15em"
            textTransform="uppercase"
          >
            Preparing Future Leaders
          </Text>
          <Flex gap={2} mt={2}>
            {[0, 1, 2].map((i) => (
              <MotionBox
                key={i}
                w="8px"
                h="8px"
                borderRadius="full"
                bg="maroon.400"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: i * 0.2
                }}
              />
            ))}
          </Flex>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
};

export default PageLoader;
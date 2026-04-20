import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const orbit1 = {
  animate: {
    rotate: 360,
    transition: { duration: 3, repeat: Infinity, ease: 'linear' as const },
  },
};

const orbit2 = {
  animate: {
    rotate: -360,
    transition: { duration: 4, repeat: Infinity, ease: 'linear' as const },
  },
};

const orbit3 = {
  animate: {
    rotate: 360,
    transition: { duration: 5, repeat: Infinity, ease: 'linear' as const },
  },
};

const pulse = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 2, repeat: Infinity },
  },
};

const PageLoader = () => {
  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="cream.50"
      align="center"
      justify="center"
      zIndex={9999}
      flexDirection="column"
    >
      <Box position="relative" w="180px" h="180px" display="flex" alignItems="center" justifyContent="center">
        <MotionBox
          position="absolute"
          w="170px"
          h="170px"
          borderRadius="full"
          border="3px solid"
          borderColor="maroon.500"
          boxShadow="0 0 20px rgba(130, 0, 0, 0.3)"
          {...orbit1}
        />
        <MotionBox
          position="absolute"
          w="155px"
          h="155px"
          borderRadius="full"
          border="3px dashed"
          borderColor="maroon.400"
          {...orbit2}
        />
        <MotionBox
          position="absolute"
          w="140px"
          h="140px"
          borderRadius="full"
          border="2px solid"
          borderColor="maroon.300"
          {...orbit3}
        />
        <MotionBox
          position="absolute"
          w="110px"
          h="110px"
          borderRadius="full"
          bg="maroon.500"
          opacity={0.15}
          boxShadow="0 0 40px rgba(130, 0, 0, 0.4)"
          {...pulse}
        />
        <Box
          bg="white"
          borderRadius="full"
          p={3}
          boxShadow="0 8px 32px rgba(130, 0, 0, 0.2)"
        >
          <Image
            src="/images/st-james-zongoro-primary-logo.png"
            alt="St James Zongoro"
            w="70px"
            h="70px"
            objectFit="contain"
            borderRadius="full"
          />
        </Box>
      </Box>
      <VStack mt={10} spacing={3}>
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
          Preparing Future Leaders...
        </Text>
      </VStack>
    </Flex>
  );
};

export default PageLoader;
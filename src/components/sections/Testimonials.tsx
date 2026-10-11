import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Heading,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaUserGraduate, FaUserTie, FaCrown, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';

const getRoleIcon = (role: string) => {
  if (role.includes('Parent')) return FaUserTie;
  if (role.includes('Leader') || role.includes('Chief')) return FaCrown;
  return FaUserGraduate;
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <Box
      position="relative"
      bg="white"
      borderRadius="2xl"
      p={{ base: 6, md: 8 }}
      boxShadow="0 18px 50px rgba(38, 0, 8, 0.28)"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="100%"
      _hover={{
        transform: 'translateY(-6px)',
        boxShadow: '0 30px 64px rgba(38, 0, 8, 0.36)',
      }}
      transition="all 0.25s ease"
    >
      <Icon
        as={FaQuoteLeft}
        position="absolute"
        top={{ base: 5, md: 6 }}
        right={{ base: 5, md: 7 }}
        boxSize={{ base: '36px', md: '44px' }}
        color="maroon.100"
        opacity={0.55}
        transform="scaleX(-1)"
      />
      <Text
        color="gray.700"
        fontStyle="italic"
        lineHeight="1.75"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight="medium"
        flex="1"
      >
        &ldquo;{testimonial.quote}&rdquo;
      </Text>
      <Flex as="footer" align="center" gap={3} mt={6} pt={5} position="relative">
        <Box position="absolute" top={0} left={0} right={0} h="1px" bgGradient="linear(to-r, transparent, maroon.100, transparent)" />
        <Box
          borderRadius="full"
          p="2px"
          bgGradient="linear(to-br, maroon.400, forest.500)"
          flexShrink={0}
          boxShadow="0 4px 14px rgba(130, 0, 0, 0.28)"
        >
          <Flex
            align="center"
            justify="center"
            w={{ base: '40px', md: '44px' }}
            h={{ base: '40px', md: '44px' }}
            borderRadius="full"
            bg="white"
          >
            <Icon as={getRoleIcon(testimonial.role)} color="maroon.500" fontSize={{ base: 'md', md: 'lg' }} />
          </Flex>
        </Box>
        <Box>
          <Text color="gray.800" fontWeight="700" fontSize={{ base: 'sm', md: 'md' }}>
            {testimonial.author}
          </Text>
          <Text color="maroon.600" fontWeight="600" fontSize={{ base: 'xs', md: 'sm' }}>
            {testimonial.role}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

const Testimonials = () => {
  return (
    <Box
      id="testimonials"
      py={{ base: 16, md: 24 }}
      px={4}
      bgGradient="linear(160deg, maroon.800 0%, maroon.500 55%, forest.800 100%)"
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="-60px" right="-60px" w="280px" h="280px" borderRadius="full" bg="cream.100" opacity={0.08} filter="blur(80px)" />
      <Box position="absolute" bottom="-70px" left="-70px" w="340px" h="340px" borderRadius="full" bg="forest.400" opacity={0.12} filter="blur(90px)" />

      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <VStack spacing={3} textAlign="center" mb={{ base: 10, md: 14 }}>
          <Text
            fontSize="xs"
            fontWeight="700"
            letterSpacing="0.24em"
            textTransform="uppercase"
            color="cream.200"
          >
            Community Voices
          </Text>
          <Heading
            fontSize={{ base: '2xl', md: '4xl' }}
            color="onAccent"
            fontWeight="800"
            letterSpacing="-0.02em"
          >
            What People Say
          </Heading>
          <Box
            w="72px"
            h="1px"
            bgGradient="linear(to-r, transparent, cream.100, transparent)"
          />
          <Text color="whiteAlpha.900" fontSize={{ base: 'md', md: 'lg' }} fontWeight="500">
            Hear from our community
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
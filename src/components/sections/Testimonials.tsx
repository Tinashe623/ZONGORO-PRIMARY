import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Heading,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaUserGraduate, FaUserTie, FaCrown } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';

const getRoleIcon = (role: string) => {
  if (role.includes('Parent')) return FaUserTie;
  if (role.includes('Leader') || role.includes('Chief')) return FaCrown;
  return FaUserGraduate;
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={{ base: 6, md: 8 }}
      boxShadow="0 15px 45px rgba(0, 0, 0, 0.18)"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      h="100%"
    >
      <Text
        color="gray.800"
        fontStyle="italic"
        lineHeight="1.75"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight="medium"
        flex="1"
      >
        &ldquo;{testimonial.quote}&rdquo;
      </Text>
      <Flex align="center" gap={3} mt={6} pt={5} borderTopWidth="1px" borderColor="gray.100">
        <Flex
          align="center"
          justify="center"
          w="40px"
          h="40px"
          borderRadius="full"
          bg="maroon.500"
          flexShrink={0}
        >
          <Icon as={getRoleIcon(testimonial.role)} color="onAccent" fontSize="md" />
        </Flex>
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
      bg="maroon.500"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        bottom={-30}
        left={-30}
        w="150px"
        h="150px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.05)"
      />

      <Box maxW="1200px" mx="auto" position="relative" zIndex={1}>
        <VStack spacing={3} textAlign="center" mb={12}>
          <Heading
            fontSize={{ base: 'lg', md: 'xl' }}
            color="onAccent"
            fontWeight="700"
          >
            What People Say
          </Heading>
          <Box w="60px" h="4px" bg="whiteAlpha.400" borderRadius="full" />
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

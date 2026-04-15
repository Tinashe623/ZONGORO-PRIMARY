import { useState } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Heading,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { FaQuoteLeft, FaUserGraduate, FaUserTie, FaCrown, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import ScrollReveal from '../ui/ScrollReveal';

const getRoleIcon = (role: string) => {
  if (role.includes('Parent')) return FaUserTie;
  if (role.includes('Leader') || role.includes('Chief')) return FaCrown;
  return FaUserGraduate;
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      role="group"
      h={{ base: "280px", md: "300px" }}
      position="relative"
      cursor="pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Box
        w="100%"
        h="100%"
        transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        opacity={isOpen ? 0 : 1}
        pointerEvents={isOpen ? 'none' : 'auto'}
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
      >
        <Box
          w="100%"
          h="100%"
          bgGradient="linear(135deg, #fdf2f4 0%, #fff9f0 100%)"
          borderRadius="2xl"
          boxShadow="0 10px 40px rgba(0, 0, 0, 0.15)"
          overflow="hidden"
          border="2px solid"
          borderColor="maroon.200"
        >
          <VStack
            h="100%"
            justify="center"
            align="center"
            p={8}
            textAlign="center"
            spacing={4}
          >
            <Flex
              align="center"
              justify="center"
              w="80px"
              h="80px"
              borderRadius="full"
              bg="maroon.500"
              boxShadow="0 6px 20px rgba(128, 0, 32, 0.4)"
            >
              <Icon as={getRoleIcon(testimonial.role)} color="white" fontSize="2xl" />
            </Flex>
            <Heading size="md" color="gray.800" fontWeight="700">
              {testimonial.author}
            </Heading>
            <Text color="maroon.600" fontWeight="600" fontSize="sm" textTransform="uppercase" letterSpacing="1px">
              {testimonial.role}
            </Text>
            <Box pt={4}>
              <Icon as={FaChevronDown} color="maroon.400" fontSize="xl" />
              <Text color="gray.500" fontSize="xs" mt={1}>Tap to read</Text>
            </Box>
          </VStack>
        </Box>
      </Box>
      
      <Box
        w="100%"
        h="100%"
        transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? 'auto' : 'none'}
        transform={isOpen ? 'translateY(0)' : 'translateY(20px)'}
        position="absolute"
        top={0}
        left={0}
        zIndex={2}
      >
        <Box
          w="100%"
          h="100%"
          bg="maroon.500"
          borderRadius="2xl"
          boxShadow="0 20px 50px rgba(128, 0, 32, 0.4)"
          overflow="hidden"
          border="3px solid"
          borderColor="whiteAlpha.300"
        >
          <Flex
            h="100%"
            align="center"
            justify="center"
            p={8}
          >
            <VStack spacing={5} maxH="100%" overflow="auto">
              <Box
                p={3}
                borderRadius="full"
                bg="rgba(255,255,255,0.15)"
              >
                <Icon as={FaQuoteLeft} color="white" fontSize="3xl" />
              </Box>
              <Text
                color="white"
                fontStyle="italic"
                lineHeight="1.9"
                fontSize="md"
                textAlign="center"
                fontWeight="500"
                px={4}
              >
                "{testimonial.quote}"
              </Text>
              <Text color="whiteAlpha.800" fontSize="sm" mt={2} fontWeight="600">
                — {testimonial.author}
              </Text>
              <Box pt={2}>
                <Icon as={FaChevronUp} color="whiteAlpha.700" fontSize="lg" />
                <Text color="whiteAlpha.700" fontSize="xs">Tap to close</Text>
              </Box>
            </VStack>
          </Flex>
        </Box>
      </Box>
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
      boxShadow="0 10px 40px rgba(128, 0, 32, 0.3)"
    >
      <Box
        position="absolute"
        top={-50}
        right={-50}
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
      />
      <Box
        position="absolute"
        bottom={-30}
        left={-30}
        w="150px"
        h="150px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.05)"
      />
      
      <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
        <ScrollReveal>
          <VStack spacing={3} textAlign="center" mb={12}>
            <Heading
              size={{ base: "lg", md: "xl" }}
              color="white"
              fontWeight="700"
            >
              What People Say
            </Heading>
            <Box w="60px" h="4px" bg="whiteAlpha.400" borderRadius="full" />
            <Text color="whiteAlpha.900" fontSize={{ base: "md", md: "lg" }} fontWeight="500">
              Hear from our community
            </Text>
          </VStack>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
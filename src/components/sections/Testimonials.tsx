import { useState } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Heading,
  Icon,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaQuoteLeft, FaUserGraduate, FaUserTie, FaCrown, FaChevronDown } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import ScrollReveal from '../ui/ScrollReveal';

const getRoleIcon = (role: string) => {
  if (role.includes('Parent')) return FaUserTie;
  if (role.includes('Leader') || role.includes('Chief')) return FaCrown;
  return FaUserGraduate;
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const interactionText = useBreakpointValue({
    base: "Tap to read",
    md: "Hover to read"
  });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      role="group"
      h={{ base: "280px", md: "300px" }}
      position="relative"
      cursor="pointer"
      onMouseEnter={() => isDesktop && setIsOpen(true)}
      onMouseLeave={() => isDesktop && setIsOpen(false)}
      onClick={() => !isDesktop && setIsOpen(!isOpen)}
      _active={{ transform: !isDesktop ? 'scale(0.98)' : 'none' }}
      transition="all 0.3s ease"
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
          borderRadius={{ base: "xl", md: "2xl" }}
          boxShadow={{ base: "0 8px 25px rgba(0, 0, 0, 0.12)", md: "0 10px 40px rgba(0, 0, 0, 0.15)" }}
          overflow="hidden"
          border="2px solid"
          borderColor="maroon.200"
          transition="all 0.3s ease"
        >
            <VStack
              h="100%"
              justify="center"
              align="center"
              p={{ base: 4, md: 8 }}
              textAlign="center"
              spacing={{ base: 3, md: 4 }}
            >
              <Flex
                align="center"
                justify="center"
                w={{ base: "60px", md: "80px" }}
                h={{ base: "60px", md: "80px" }}
                borderRadius="full"
                bg="maroon.500"
                boxShadow="0 6px 20px rgba(128, 0, 32, 0.4)"
              >
                <Icon as={getRoleIcon(testimonial.role)} color="white" fontSize={{ base: "xl", md: "2xl" }} />
              </Flex>
              <Heading size={{ base: "sm", md: "md" }} color="gray.800" fontWeight="700">
                {testimonial.author}
              </Heading>
              <Text color="maroon.600" fontWeight="600" fontSize={{ base: "xs", md: "sm" }} textTransform="uppercase" letterSpacing="1px">
                {testimonial.role}
              </Text>
              <Box pt={{ base: 2, md: 4 }}>
                <Icon as={FaChevronDown} color="maroon.400" fontSize={{ base: "lg", md: "xl" }} />
                <Text color="gray.500" fontSize="xs" mt={1}>{interactionText}</Text>
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
          borderRadius={{ base: "xl", md: "2xl" }}
          boxShadow={{ base: "0 15px 35px rgba(128, 0, 32, 0.3)", md: "0 20px 50px rgba(128, 0, 32, 0.4)" }}
          overflow="hidden"
          border={{ base: "2px", md: "3px" }}
          borderColor="whiteAlpha.300"
        >
          <Flex
            h="100%"
            align="center"
            justify="center"
            p={{ base: 4, md: 8 }}
          >
            <VStack
              spacing={{ base: 4, md: 5 }}
              maxH="100%"
              overflow="auto"
              sx={{
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(255,255,255,0.4)',
                  borderRadius: '3px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(255,255,255,0.6)',
                },
              }}
            >
              <Box
                p={{ base: 2, md: 3 }}
                borderRadius="full"
                bg="rgba(255,255,255,0.15)"
              >
                <Icon as={FaQuoteLeft} color="white" fontSize={{ base: "2xl", md: "3xl" }} />
              </Box>
              <Text
                color="white"
                fontStyle="italic"
                lineHeight="1.9"
                fontSize={{ base: "sm", md: "md" }}
                textAlign="center"
                fontWeight="500"
                px={{ base: 2, md: 4 }}
              >
                "{testimonial.quote}"
              </Text>
              <Text color="whiteAlpha.800" fontSize={{ base: "xs", md: "sm" }} mt={2} fontWeight="600">
                — {testimonial.author}
              </Text>
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
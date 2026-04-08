import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Card,
  CardBody,
  Avatar,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const Testimonials = () => {
  return (
    <Box id="testimonials" py={20} px={4}>
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <SectionHeading
            title="What People Say"
            subtitle="Hear from our community"
          />
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <Card
                bg="white"
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                h="100%"
                transition="all 0.3s ease"
                _hover={{ transform: 'translateY(-4px)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
              >
                <CardBody p={8}>
                  <VStack align="start" spacing={4}>
                    <Icon as={FaQuoteLeft} color="maroon.500" fontSize="3xl" />
                    <Text
                      color="gray.600"
                      fontStyle="italic"
                      lineHeight="1.8"
                    >
                      "{testimonial.quote}"
                    </Text>
                    <Flex align="center" gap={3} mt={2}>
                      <Avatar
                        size="sm"
                        name={testimonial.author}
                        bg="maroon.500"
                      />
                      <Box>
                        <Text fontWeight="600" color="dark.500">
                          {testimonial.author}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {testimonial.role}
                        </Text>
                      </Box>
                    </Flex>
                  </VStack>
                </CardBody>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
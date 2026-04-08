import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Button,
  List,
  ListItem,
  ListIcon,
  Flex,
  Image,
  Icon,
} from '@chakra-ui/react';
import { FaBus, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const services = [
  'Daily school transport for students',
  'Organized school trips and excursions',
  'Bus hire for school events',
  'Safe and reliable transportation',
  'Experienced and licensed drivers',
];

const Transport = () => {
  return (
    <Box id="transport" py={20} px={4} position="relative" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="4px"
        bgGradient="linear(to-r, forest.500, forest.50)"
      />
      
      <Box bg="cream.50" py={20}>
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <SectionHeading
              title="School Transport"
              subtitle="Safe and reliable transportation for our students"
            />
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
            <ScrollReveal>
              <VStack align="start" spacing={6}>
                <Heading size="lg" color="forest.500">
                  Reliable Transport Services
                </Heading>
                <Text color="gray.600" lineHeight="1.8">
                  We understand the challenges of rural transportation. That's why St
                  James Zongoro Primary School offers comprehensive transport services
                  to ensure every student can attend school safely and on time.
                </Text>

                <List spacing={3}>
                  {services.map((service, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon as={FaCheckCircle} color="forest.500" />
                      <Text color="gray.700">{service}</Text>
                    </ListItem>
                  ))}
                </List>

                <ScrollLink to="contact" smooth={true} offset={-70}>
                  <Button
                    bg="forest.500"
                    color="white"
                    size="lg"
                    rightIcon={<FaArrowRight />}
                    _hover={{ bg: 'forest.600', transform: 'translateY(-2px)' }}
                  >
                    Inquire About Transport
                  </Button>
                </ScrollLink>
                </VStack>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
              <Card
                bg="white"
                borderRadius="2xl"
                boxShadow="0 8px 30px rgba(0,0,0,0.12)"
                overflow="hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=600&h=400&fit=crop"
                  alt="School bus"
                  w="100%"
                  h="300px"
                  objectFit="cover"
                />
                <CardBody p={6}>
                  <VStack align="start" spacing={2}>
                    <Flex align="center" gap={2}>
                      <Icon as={FaBus} color="forest.500" fontSize="xl" />
                      <Heading size="sm" color="dark.500">
                        Our School Bus
                      </Heading>
                    </Flex>
                    <Text color="gray.600" fontSize="sm">
                      Safe, reliable, and well-maintained vehicles operated by
                      licensed drivers committed to student safety.
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default Transport;
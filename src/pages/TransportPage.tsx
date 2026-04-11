import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, List, ListItem, ListIcon, Icon, Image, Flex, Button } from '@chakra-ui/react';
import { FaBus, FaCheckCircle, FaClock, FaShieldAlt, FaPhone } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const features = [
  {
    icon: FaBus,
    title: 'School Bus Service',
    description: 'Reliable daily transportation for students from surrounding areas.',
  },
  {
    icon: FaShieldAlt,
    title: 'Safety First',
    description: 'All buses are equipped with safety features and supervised by staff.',
  },
  {
    icon: FaClock,
    title: 'Punctual Schedule',
    description: 'Consistent pickup and drop-off times for all students.',
  },
  {
    icon: FaCheckCircle,
    title: 'Experienced Drivers',
    description: 'Licensed and trained drivers with excellent safety records.',
  },
];

const services = [
  'Daily school transport for students',
  'Organized school trips and excursions',
  'Bus hire for school events',
  'Safe and reliable transportation',
];

const TransportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Transport Services" 
        subtitle="Safe and reliable transportation for our students"
      />
      
      {/* Introduction - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <ScrollReveal>
              <VStack align="start" spacing={6}>
                <Heading size="2xl" color="maroon.500" fontWeight="700">
                  Reliable Transport Services
                </Heading>
                <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                  We understand the challenges of rural transportation. That's why St
                  James Zongoro Primary School offers comprehensive transport services
                  to ensure every student can attend school safely and on time.
                </Text>

                <List spacing={4} pt={4} w="100%">
                  {services.map((service, index) => (
                    <ListItem key={index} display="flex" alignItems="center" p={3} bg="white" borderRadius="xl" _hover={{ transform: 'translateX(4px)' }} transition="all 0.2s ease">
                      <ListIcon as={FaCheckCircle} color="forest.500" fontSize="lg" />
                      <Text color="gray.700" fontSize="md" fontWeight="500">{service}</Text>
                    </ListItem>
                  ))}
                </List>
              </VStack>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Box 
                position="relative" 
                borderRadius="2xl" 
                overflow="hidden"
                boxShadow="0 20px 60px rgba(0,0,0,0.15)"
              >
                <Image 
                  src="/images/school-bus.png" 
                  alt="School Bus" 
                  w="100%" 
                  h="400px"
                  objectFit="cover"
                />
                <Box 
                  position="absolute" 
                  bottom={0} 
                  left={0} 
                  right={0} 
                  bgGradient="linear(to-t, blackAlpha.700, transparent)"
                  p={8}
                >
                  <Text color="white" fontWeight="700" fontSize="xl">
                    Safe & Reliable
                  </Text>
                  <Text color="whiteAlpha.900" fontSize="sm">
                    Transporting students since 2010
                  </Text>
                </Box>
              </Box>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Features - White Background */}
      <Box py={20} px={4}>
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="maroon.500" fontWeight="700">
                Why Choose Our Transport
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                Our transport system is designed with safety and reliability as top priorities.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Box 
                  bg="white" 
                  p={8} 
                  borderRadius="2xl" 
                  boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  textAlign="center"
                  _hover={{ transform: 'translateY(-6px)', boxShadow: '0 15px 50px rgba(130,0,0,0.15)', borderColor: 'maroon.200' }}
                  transition="all 0.3s ease"
                >
                  <Flex 
                    align="center" 
                    justify="center" 
                    w="70px" 
                    h="70px" 
                    borderRadius="2xl"
                    bgGradient="linear(135deg, maroon.500, maroon.700)"
                    boxShadow="0 6px 20px rgba(128, 0, 32, 0.3)"
                    mx="auto"
                    mb={5}
                  >
                    <Icon as={feature.icon} color="white" fontSize="2xl" />
                  </Flex>
                  <Heading size="md" color="dark.500" fontWeight="700" mb={3}>
                    {feature.title}
                  </Heading>
                  <Text color="gray.600" fontSize="md" lineHeight="1.7">
                    {feature.description}
                  </Text>
                </Box>
              </ScrollReveal>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* CTA Section - Maroon Background */}
      <Box 
        py={20} 
        px={4} 
        bgGradient="linear(135deg, maroon.500 0%, maroon.700 100%)"
        position="relative"
        overflow="hidden"
      >
        <Box 
          position="absolute" 
          top="-50%" 
          right="-10%" 
          w="350px" 
          h="350px" 
          borderRadius="full" 
          bg="rgba(255,255,255,0.03)"
        />
        <Box 
          position="absolute" 
          bottom="-30%" 
          left="-10%" 
          w="300px" 
          h="300px" 
          borderRadius="full" 
          bg="rgba(0,255,136,0.05)"
        />
        
        <Box maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <VStack spacing={6}>
            <Heading size="2xl" color="white" fontWeight="700">
              Need Transport Information?
            </Heading>
            <Text color="whiteAlpha.900" fontSize="lg" maxW="600px" lineHeight="1.8">
              Contact us to learn more about transport routes, schedules, and availability 
              for your area.
            </Text>
            <Button
              as={RouterLink}
              to="/contact"
              bg="forest.500"
              color="white"
              size="lg"
              px={10}
              fontWeight="700"
              borderRadius="full"
              leftIcon={<FaPhone />}
              _hover={{ bg: 'forest.600', transform: 'translateY(-2px)', boxShadow: '0 10px 30px rgba(0,255,136,0.3)' }}
              transition="all 0.3s ease"
            >
              Contact Us
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default TransportPage;
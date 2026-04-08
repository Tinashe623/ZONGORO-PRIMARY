import { useEffect } from 'react';
import { Box, SimpleGrid, VStack, Heading, Text, Card, CardBody, List, ListItem, ListIcon, Icon } from '@chakra-ui/react';
import { FaBus, FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/ui/CTABanner';

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
      
      <Box py={16} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <VStack align="start" spacing={6}>
                <Heading size="lg" color="maroon.500">
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
              </VStack>

              <SimpleGrid columns={2} spacing={4}>
                {features.map((feature, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <Card bg="white" borderRadius="xl" boxShadow="md" h="100%">
                      <CardBody p={5} textAlign="center">
                        <Icon as={feature.icon} color="maroon.500" fontSize="2xl" mb={3} />
                        <Heading size="sm" color="dark.500" mb={2}>{feature.title}</Heading>
                        <Text color="gray.600" fontSize="sm">{feature.description}</Text>
                      </CardBody>
                    </Card>
                  </ScrollReveal>
                ))}
              </SimpleGrid>
            </SimpleGrid>
          </ScrollReveal>
        </Box>
      </Box>

      <CTABanner 
        title="Inquire About Transport" 
        subtitle="Contact us to learn more about transport routes and availability"
        buttonText="Contact Us"
        buttonLink="/#contact"
      />
    </Box>
  );
};

export default TransportPage;
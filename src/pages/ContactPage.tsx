import { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'Ndorikanda Village, Mutasa District, Mutare, Zimbabwe',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+263 772 123 456',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@stjameszongoro.ac.zw',
    },
  ];

  return (
    <VStack spacing={6} align="stretch">
      {contactItems.map((item, index) => (
        <Card
          key={index}
          bg="cream.50"
          borderRadius="xl"
          boxShadow="none"
          border="1px solid"
          borderColor="gray.100"
        >
          <CardBody p={5}>
            <Flex align="center" gap={4}>
              <Flex
                align="center"
                justify="center"
                w="50px"
                h="50px"
                borderRadius="full"
                bg="maroon.500"
                flexShrink={0}
              >
                <Icon as={item.icon} color="white" fontSize="lg" />
              </Flex>
              <Box>
                <Text fontWeight="600" color="dark.500">
                  {item.title}
                </Text>
                <Text color="gray.600" fontSize="sm">
                  {item.content}
                </Text>
              </Box>
            </Flex>
          </CardBody>
        </Card>
      ))}
    </VStack>
  );
};

const ContactForm = () => {
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: 'Message sent!',
        description: 'We will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card
      bg="white"
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
    >
      <CardBody p={8}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={5}>
            <FormControl isRequired>
              <FormLabel color="dark.500">Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                borderRadius="lg"
                borderColor="gray.300"
                _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 1px #800020' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="dark.500">Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                borderRadius="lg"
                borderColor="gray.300"
                _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 1px #800020' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="dark.500">Subject</FormLabel>
              <Input
                type="text"
                placeholder="Enter subject"
                borderRadius="lg"
                borderColor="gray.300"
                _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 1px #800020' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="dark.500">Message</FormLabel>
              <Textarea
                placeholder="Enter your message"
                borderRadius="lg"
                borderColor="gray.300"
                rows={5}
                _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 1px #800020' }}
              />
            </FormControl>

            <Button
              type="submit"
              bg="maroon.500"
              color="white"
              size="lg"
              width="100%"
              leftIcon={<FaPaperPlane />}
              isLoading={isSubmitting}
              _hover={{ bg: 'maroon.600', transform: 'translateY(-2px)' }}
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </CardBody>
    </Card>
  );
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Contact Us" 
        subtitle="We'd love to hear from you"
      />
      
      <Box py={16} px={4}>
        <Box maxW="1400px" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
            <ScrollReveal>
              <VStack align="start" spacing={6}>
                <Heading size="lg" color="maroon.500">
                  Get in Touch
                </Heading>
                <Text color="gray.600" lineHeight="1.8">
                  Have questions about admissions, academics, or our school? Feel
                  free to reach out to us using the form or contact information below.
                  Our team is here to help!
                </Text>
                <ContactInfo />
              </VStack>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
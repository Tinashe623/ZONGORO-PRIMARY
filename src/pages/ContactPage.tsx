import { useState, useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaClock } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: 'St James Zongoro Primary School, P.O.Box 313, Mutare, Zimbabwe',
      color: 'maroon.500',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+263 77 321 1929 / +263 71 854 6070',
      color: 'forest.500',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'zongoro.primary@gmail.com',
      color: 'maroon.500',
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      content: 'Mon - Fri: 7:30 AM - 4:30 PM',
      color: 'forest.500',
    },
  ];

  return (
    <VStack spacing={5} align="stretch">
      {contactItems.map((item, index) => (
        <Box
          key={index}
          bg="white"
          p={{ base: 4, md: 6 }}
          borderRadius="2xl"
          boxShadow="0 6px 25px rgba(0,0,0,0.08)"
          border="1px solid"
          borderColor="gray.100"
          _hover={{ transform: 'translateX(4px)', boxShadow: '0 10px 35px rgba(130,0,0,0.12)', borderColor: 'maroon.200' }}
          transition="all 0.3s ease"
        >
          <Flex align="center" gap={{ base: 3, md: 5 }} flexWrap="wrap">
            <Flex
              align="center"
              justify="center"
              w={{ base: "45px", md: "55px" }}
              h={{ base: "45px", md: "55px" }}
              borderRadius="2xl"
              bgGradient="linear(135deg, maroon.500, maroon.700)"
              boxShadow="0 4px 15px rgba(128, 0, 32, 0.3)"
              flexShrink={0}
            >
              <Icon as={item.icon} color="white" fontSize={{ base: "md", md: "lg" }} />
            </Flex>
            <Box minW={0} flex={1}>
              <Text fontWeight="700" color="dark.500" fontSize={{ base: "sm", md: "md" }}>
                {item.title}
              </Text>
              <Text color="gray.600" fontSize={{ base: "sm", md: "md" }} wordBreak="break-word">
                {item.content}
              </Text>
            </Box>
          </Flex>
        </Box>
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
        position: 'top',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="0 8px 30px rgba(0,0,0,0.1)"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.100"
    >
      <Box
        bgGradient="linear(to-r, maroon.500, maroon.700)"
        py={{ base: 4, md: 5 }}
        px={{ base: 6, md: 8 }}
      >
        <Heading size={{ base: "sm", md: "md" }} color="white" fontWeight="600">
          Send us a Message
        </Heading>
      </Box>
      <Box p={{ base: 6, md: 8 }}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} w="100%">
              <FormControl isRequired>
                <FormLabel color="dark.500" fontWeight="600">Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  borderRadius="xl"
                  borderColor="gray.200"
                  bg="cream.50"
                  py={{ base: 4, md: 6 }}
                  _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 2px rgba(130,0,0,0.2)', bg: 'white' }}
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="dark.500" fontWeight="600">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  borderRadius="xl"
                  borderColor="gray.200"
                  bg="cream.50"
                  py={{ base: 4, md: 6 }}
                  _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 2px rgba(130,0,0,0.2)', bg: 'white' }}
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>
            </SimpleGrid>

            <FormControl isRequired>
              <FormLabel color="dark.500" fontWeight="600">Subject</FormLabel>
              <Input
                type="text"
                placeholder="Enter subject"
                borderRadius="xl"
                borderColor="gray.200"
                bg="cream.50"
                py={{ base: 4, md: 6 }}
                _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 2px rgba(130,0,0,0.2)', bg: 'white' }}
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="dark.500" fontWeight="600">Message</FormLabel>
              <Textarea
                placeholder="Enter your message..."
                borderRadius="xl"
                borderColor="gray.200"
                bg="cream.50"
                rows={5}
                _focus={{ borderColor: 'maroon.500', boxShadow: '0 0 0 2px rgba(130,0,0,0.2)', bg: 'white' }}
                _placeholder={{ color: 'gray.400' }}
              />
            </FormControl>

            <Button
              type="submit"
              bgGradient="linear(to-r, forest.500, forest.600)"
              color="white"
              size={{ base: "md", md: "lg" }}
              width="100%"
              leftIcon={<FaPaperPlane />}
              isLoading={isSubmitting}
              fontWeight="700"
              borderRadius="full"
              px={{ base: 6, md: 10 }}
              _hover={{
                bg: 'forest.600',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 30px rgba(45,106,79,0.3)'
              }}
              _active={{
                bg: 'forest.700',
                transform: 'translateY(0)'
              }}
              transition="all 0.3s ease"
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
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
      
      {/* Contact Section - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12}>
            <ScrollReveal>
              <VStack align="start" spacing={8}>
                <Box>
                  <Heading size={{ base: "xl", md: "2xl" }} color="maroon.500" fontWeight="700" mb={4}>
                    Get in Touch
                  </Heading>
                  <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="1.9">
                    Have questions about admissions, academics, or our school? Feel
                    free to reach out to us using the form or contact information below.
                    Our team is here to help!
                  </Text>
                </Box>
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
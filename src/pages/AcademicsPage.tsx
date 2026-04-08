import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaGraduationCap, FaBookOpen, FaLightbulb } from 'react-icons/fa';
import { academicCards } from '../data/academics';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';
import CTABanner from '../components/ui/CTABanner';

const iconMap: Record<string, React.ComponentType> = {
  FaGraduationCap,
  FaBookOpen,
  FaLightbulb,
};

const AcademicsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Academics" 
        subtitle="Quality education preparing students for success"
      />
      
      <Box py={16} px={4}>
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={12}>
              <Heading size="lg" color="maroon.500">
                Our Academic Programs
              </Heading>
              <Text color="gray.600" maxW="600px">
                We offer a comprehensive curriculum from ECD to Grade 7, designed to nurture 
                intellectual growth and critical thinking.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {academicCards.map((card, index) => {
              const IconComponent = iconMap[card.icon];
              return (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <Card
                    bg="cream.50"
                    borderRadius="2xl"
                    boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    }}
                    h="100%"
                  >
                    <CardBody p={8}>
                      <VStack align="start" spacing={4}>
                        <Flex
                          align="center"
                          justify="center"
                          w="70px"
                          h="70px"
                          borderRadius="full"
                          bg="maroon.500"
                        >
                          {IconComponent && (
                            <Icon as={IconComponent} color="white" fontSize="2xl" />
                          )}
                        </Flex>
                        <Heading size="md" color="maroon.500">
                          {card.title}
                        </Heading>
                        <Text color="gray.600" lineHeight="1.7">
                          {card.description}
                        </Text>
                        <List spacing={2} mt={2}>
                          {card.items.map((item, itemIndex) => (
                            <ListItem
                              key={itemIndex}
                              display="flex"
                              alignItems="center"
                              fontSize="sm"
                              color="gray.600"
                            >
                              <ListIcon as={() => <Box as="span" mr={2}>•</Box>} />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </VStack>
                    </CardBody>
                  </Card>
                </ScrollReveal>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>

      <Box py={16} px={4} bg="cream.50">
        <Box maxW="800px" mx="auto">
          <ScrollReveal>
            <VStack spacing={6} textAlign="center">
              <Heading size="lg" color="maroon.500">
                Why Academic Excellence Matters
              </Heading>
              <Text color="gray.600" lineHeight="1.8">
                Our curriculum is designed to develop not just knowledge, but critical thinking 
                skills, creativity, and a lifelong love for learning. We prepare students for 
                success in secondary school and beyond.
              </Text>
            </VStack>
          </ScrollReveal>
        </Box>
      </Box>

      <CTABanner 
        title="Enroll Today" 
        subtitle="Give your child the best start in education"
        buttonText="Apply Now"
        buttonLink="/admissions"
      />
    </Box>
  );
};

export default AcademicsPage;
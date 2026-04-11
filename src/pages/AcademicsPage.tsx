import { useEffect } from 'react';
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
  Icon,
} from '@chakra-ui/react';
import { FaGraduationCap, FaBookOpen, FaLightbulb, FaStar, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
import { academicCards } from '../data/academics';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

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
        title="Academic Excellence" 
        subtitle="Quality education preparing students for success"
      />
      
      {/* Main Content - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="maroon.500" fontWeight="700">
                Our Academic Programs
              </Heading>
              <Text color="gray.600" maxW="700px" fontSize="lg" lineHeight="1.8">
                We offer a comprehensive curriculum from ECD to Grade 7, designed to nurture 
                intellectual growth and critical thinking skills.
              </Text>
            </VStack>
          </ScrollReveal>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {academicCards.map((card, index) => {
              const IconComponent = iconMap[card.icon];
              return (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <Card
                    bg="white"
                    borderRadius="2xl"
                    boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                    border="2px solid transparent"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(130, 0, 0, 0.15)',
                      borderColor: 'maroon.200',
                    }}
                    h="100%"
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Decorative top bar */}
                    <Box 
                      position="absolute" 
                      top={0} 
                      left={0} 
                      right={0} 
                      h="4px" 
                      bgGradient="linear(to-r, maroon.500, forest.500)" 
                    />
                    <CardBody p={8} pt={10}>
                      <VStack align="start" spacing={5}>
                        <Flex
                          align="center"
                          justify="center"
                          w="80px"
                          h="80px"
                          borderRadius="2xl"
                          bgGradient="linear(135deg, maroon.500 0%, maroon.700 100%)"
                          boxShadow="0 8px 25px rgba(130, 0, 0, 0.3)"
                        >
                          {IconComponent && (
                            <Icon as={IconComponent} color="white" fontSize="3xl" />
                          )}
                        </Flex>
                        <Heading size="lg" color="dark.500" fontWeight="700">
                          {card.title}
                        </Heading>
                        <Text color="gray.600" lineHeight="1.8" fontSize="md">
                          {card.description}
                        </Text>
                        <List spacing={3} mt={2} w="100%">
                          {card.items.map((item, itemIndex) => (
                            <ListItem
                              key={itemIndex}
                              display="flex"
                              alignItems="center"
                              fontSize="md"
                              color="gray.700"
                            >
                              <ListIcon as={FaCheckCircle} color="forest.500" mr={3} />
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

      {/* Philosophy Section - Cream Background */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <ScrollReveal>
              <VStack align="start" spacing={6}>
                <Heading size="2xl" color="maroon.500" fontWeight="700">
                  Why Academic Excellence Matters
                </Heading>
                <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                  Our curriculum is designed to develop not just knowledge, but critical thinking 
                  skills, creativity, and a lifelong love for learning. We prepare students for 
                  success in secondary school and beyond.
                </Text>
                <Box pt={4}>
                  <SimpleGrid columns={2} spacing={4}>
                    {['ZIMSEC Aligned', 'Experienced Teachers', 'Small Class Sizes', 'Holistic Development'].map((item, i) => (
                      <Flex key={i} align="center" gap={2}>
                        <Icon as={FaStar} color="forest.500" />
                        <Text fontWeight="600" color="dark.500">{item}</Text>
                      </Flex>
                    ))}
                  </SimpleGrid>
                </Box>
              </VStack>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Box 
                bg="white" 
                borderRadius="2xl" 
                p={8}
                position="relative"
                overflow="hidden"
                boxShadow="0 10px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(130,0,0,0.05)"
                border="1px solid"
                borderColor="gray.100"
                _hover={{
                  boxShadow: '0 20px 60px rgba(130,0,0,0.15), 0 0 0 1px rgba(130,0,0,0.1)',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.3s ease"
              >
                <Box 
                  position="absolute" 
                  top="-20px" 
                  right="-20px" 
                  w="100px" 
                  h="100px" 
                  borderRadius="full" 
                  bg="maroon.500" 
                  opacity={0.1}
                />
                <Box 
                  position="absolute" 
                  bottom="-30px" 
                  left="-30px" 
                  w="150px" 
                  h="150px" 
                  borderRadius="full" 
                  bg="forest.500" 
                  opacity={0.1}
                />
                <VStack spacing={6} position="relative">
                  <Heading size="md" color="maroon.500" textAlign="center">
                    Our Learning Goals
                  </Heading>
                  <Box as="ul" listStyleType="none" pl={0} spacing={4}>
                    {[
                      'Develop strong literacy and numeracy skills',
                      'Foster critical thinking and problem-solving',
                      'Build confidence and self-esteem',
                      'Encourage creativity and innovation',
                      'Promote teamwork and collaboration',
                      'Instill moral values and ethics',
                    ].map((goal, i) => (
                      <Flex key={i} align="start" gap={3}>
                        <Box 
                          w="8px" 
                          h="8px" 
                          borderRadius="full" 
                          bg="forest.500" 
                          mt={2}
                          flexShrink={0}
                        />
                        <Text color="gray.700">{goal}</Text>
                      </Flex>
                    ))}
                  </Box>
                </VStack>
              </Box>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box 
        py={24} 
        px={4} 
        bgGradient="linear(135deg, maroon.500 0%, #5a0000 100%)"
        position="relative"
        overflow="hidden"
      >
        {/* Animated Orbs */}
        <MotionBox 
          position="absolute" 
          top="-100px" 
          right="-100px" 
          w="350px" 
          h="350px" 
          borderRadius="full" 
          bg="rgba(255,255,255,0.05)"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <MotionBox 
          position="absolute" 
          bottom="-150px" 
          left="-50px" 
          w="400px" 
          h="400px" 
          borderRadius="full" 
          bg="rgba(0,255,136,0.08)"
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [0, -25, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <Box maxW="800px" mx="auto" textAlign="center" position="relative" zIndex={1}>
          <VStack spacing={8}>
            <Heading 
              size="3xl" 
              color="white" 
              fontWeight="700"
              textShadow="0 4px 20px rgba(0,0,0,0.3)"
            >
              Ready to Enroll?
            </Heading>
            <Text 
              color="whiteAlpha.900" 
              fontSize="xl" 
              maxW="600px"
              lineHeight="1.8"
            >
              Give your child the best start in education. Join our community of learners 
              and watch them thrive academically and personally.
            </Text>
            
            <Flex 
              direction={{ base: 'column', md: 'row' }} 
              gap={4} 
              mt={4}
            >
              <MotionBox
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as="a"
                  href="/admissions"
                  bg="forest.500"
                  color="white"
                  size="lg"
                  px={12}
                  py={7}
                  fontWeight="700"
                  fontSize="lg"
                  borderRadius="full"
                  boxShadow="0 10px 30px rgba(0,255,136,0.3)"
                  _hover={{ 
                    bg: 'forest.600', 
                    boxShadow: '0 15px 50px rgba(0,255,136,0.4)'
                  }}
                  transition="all 0.3s ease"
                >
                  Apply Now
                </Button>
              </MotionBox>
              
              <MotionBox
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as="a"
                  href="/contact"
                  bg="transparent"
                  color="white"
                  size="lg"
                  px={12}
                  py={7}
                  fontWeight="700"
                  fontSize="lg"
                  borderRadius="full"
                  border="2px solid"
                  borderColor="whiteAlpha.400"
                  _hover={{ 
                    bg: 'whiteAlpha.200',
                    borderColor: 'white'
                  }}
                  transition="all 0.3s ease"
                >
                  Contact Us
                </Button>
              </MotionBox>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default AcademicsPage;
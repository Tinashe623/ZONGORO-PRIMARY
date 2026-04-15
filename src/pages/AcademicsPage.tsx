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
import { FaGraduationCap, FaBookOpen, FaLightbulb, FaStar, FaCheckCircle, FaGavel, FaTrophy, FaUtensils, FaLaptop } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { academicCards } from '../data/academics';
import PageHero from '../components/ui/PageHero';
import ScrollReveal from '../components/ui/ScrollReveal';

const MotionBox = motion(Box);

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
                    <Box 
                      position="absolute" 
                      top={0} 
                      left={0} 
                      right={0} 
                      h="4px" 
                      bg="maroon.500" 
                    />
                    <CardBody p={8} pt={10}>
                      <VStack align="start" spacing={5}>
                        <Flex
                          align="center"
                          justify="center"
                          w="80px"
                          h="80px"
                          borderRadius="2xl"
                          bg="maroon.500"
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
                  <VStack align="start" spacing={4} w="100%">
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
                  </VStack>
                </VStack>
              </Box>
            </ScrollReveal>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Tech-Voc Compliance & Achievements Section */}
      <Box py={20} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="maroon.500" fontWeight="700">
                Tech-Voc Compliance & Achievements
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                Excellence in Technical and Vocational Education Implementation
              </Text>
            </VStack>
          </ScrollReveal>

          {/* Hero Stats */}
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={16}>
            {[
              { icon: FaGraduationCap, label: 'Program Started', value: '2007', color: 'maroon.500' },
              { icon: FaStar, label: 'Latest Achievements', value: '2024', color: 'forest.500' },
              { icon: FaLightbulb, label: 'Tech-Voc Subjects', value: '4', color: 'maroon.600' },
              { icon: FaCheckCircle, label: 'SDGs Aligned', value: '✓', color: 'forest.600' },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Box
                  bg="white"
                  borderRadius="2xl"
                  p={6}
                  textAlign="center"
                  boxShadow="0 8px 32px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 48px rgba(130,0,0,0.15)',
                    borderColor: 'maroon.200'
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <Flex
                    align="center"
                    justify="center"
                    w="70px"
                    h="70px"
                    borderRadius="full"
                    bg="cream.50"
                    mx="auto"
                    mb={4}
                    boxShadow="0 4px 15px rgba(0,0,0,0.08)"
                  >
                    <Icon as={stat.icon} color={stat.color} fontSize="2xl" />
                  </Flex>
                  <Heading size="2xl" color={stat.color} fontWeight="800">
                    {stat.value}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" mt={1} fontWeight="600">
                    {stat.label}
                  </Text>
                </Box>
              </ScrollReveal>
            ))}
          </SimpleGrid>

          {/* Policy Frameworks Section */}
          <ScrollReveal>
            <VStack spacing={8} align="start" mb={16}>
              <Flex align="center" gap={4} mb={6}>
                <Box
                  w="60px"
                  h="60px"
                  borderRadius="full"
                  bg="maroon.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 6px 20px rgba(128,0,32,0.3)"
                >
                  <Icon as={FaGavel} color="white" fontSize="xl" />
                </Box>
                <Box>
                  <Heading size="lg" color="maroon.600" fontWeight="700">
                    4.1 Policy and Legal Frameworks
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    Tech-Voc Education Implementation
                  </Text>
                </Box>
              </Flex>

              <Box
                bg="white"
                borderRadius="2xl"
                p={8}
                w="100%"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                border="1px solid"
                borderColor="gray.200"
              >
                <Text
                  color="gray.700"
                  lineHeight="1.8"
                  fontSize="md"
                  whiteSpace="pre-line"
                >
{`The introduction of Tech-Voc education at St James Zongoro Primary School in 2007 was in compliance with the Zimbabwe's reviewed Technical and Vocational Education and Training (TVET) of 2005 towards the fulfilment of the recommendations of the Commission of Enquiry for Education and Training (CIET) of 1999 dubbed the Nziramasanga Commission. The advent of the Agenda 2063 and the SDGs on the international front and the Competency Based Curriculum buttressed the need to embrace Tech-Voc. Education and St James Zongoro Primary took it a notch higher by integrating it with Non-Formal Education (NFE). The Director's Circular Number 9 of 2016 the schools to vocationalize the curriculum through operationalising the implementation of Technical and Vocational Education. Even when the circular was cancelled and replaced by the Secretary's Circular of 2016 on Teacher Establishments, Tech-Voc Education became even more dominant and resonant.

In the spirit of "Leaving No-one Behind", Tech-Voc Education at St James Zongoro Primary School has been integrated with Non-Formal Education such that those who did not benefit fully from the skills orientation program during their days at school are reintegrated into the Functional Literacy Program in compliance with the Secretary's Circular Number 13 of 2016. This has seen the school doing very well in the area and scooped the overall first position at the District NFE exhibitions in the year 2024. The ICT, Design and Technology of the same department has also emerged the 2025 Provincial Champions at the Provincial Literacy Commemorations at Mutare Boys High.`}
                </Text>
              </Box>
            </VStack>
          </ScrollReveal>

          {/* Achievements Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={16}>
            {[
              {
                icon: FaUtensils,
                title: "Home-Grown Feeding Program",
                description: "Producing high-value crops and implementing 'rainbow plate' concept with micro-nutrients for balanced meals.",
                achievements: ["Kale, Kolrabhi, Parsley", "Swizz Chard, Brinjals, Basil", "Improved attendance rates"]
              },
              {
                icon: FaBookOpen,
                title: "Music Excellence",
                description: "Professional music performances at state functions and national competitions.",
                achievements: ["Manicaland Province representative", "Nhanga-Gota National Event", "Veld Fire Awareness campaigns"]
              },
              {
                icon: FaLaptop,
                title: "ICT & Design Technology",
                description: "Leading digital literacy and technology education initiatives.",
                achievements: ["2025 Provincial Champions", "Provincial Literacy Commemorations", "Modern tech integration"]
              },
              {
                icon: FaGraduationCap,
                title: "Agriculture Innovation",
                description: "Sustainable farming practices supporting school feeding programs.",
                achievements: ["High-value crop production", "Home-Grown Feeding Program", "Food security initiatives"]
              }
            ].map((achievement, index) => (
              <ScrollReveal key={index} delay={0.1 * index}>
                <Box
                  bg="white"
                  borderRadius="2xl"
                  p={8}
                  boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 48px rgba(130,0,0,0.15)',
                    borderColor: 'maroon.200'
                  }}
                  transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <Flex align="center" gap={4} mb={4}>
                    <Box
                      w="50px"
                      h="50px"
                      borderRadius="full"
                      bg="maroon.500"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      boxShadow="0 4px 15px rgba(128,0,32,0.3)"
                    >
                      <Icon as={achievement.icon} color="white" fontSize="lg" />
                    </Box>
                    <Heading size="md" color="maroon.600" fontWeight="700">
                      {achievement.title}
                    </Heading>
                  </Flex>

                  <Text color="gray.600" mb={4} lineHeight="1.7">
                    {achievement.description}
                  </Text>

                  <VStack align="start" spacing={2}>
                    <Text color="forest.600" fontSize="sm" fontWeight="600">
                      Key Achievements:
                    </Text>
                    {achievement.achievements.map((item, i) => (
                      <Flex key={i} align="center" gap={2}>
                        <Icon as={FaCheckCircle} color="forest.500" fontSize="xs" />
                        <Text color="gray.700" fontSize="sm">{item}</Text>
                      </Flex>
                    ))}
                  </VStack>
                </Box>
              </ScrollReveal>
            ))}
          </SimpleGrid>

          {/* Conclusion */}
          <ScrollReveal>
            <VStack spacing={8} align="center">
              <Flex align="center" gap={4} mb={6}>
                <Box
                  w="60px"
                  h="60px"
                  borderRadius="full"
                  bg="forest.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 6px 20px rgba(45,106,79,0.3)"
                >
                  <Icon as={FaTrophy} color="white" fontSize="xl" />
                </Box>
                <Box textAlign="center">
                  <Heading size="xl" color="forest.600" fontWeight="700">
                    Conclusion
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    Sustained Excellence in Tech-Voc Education
                  </Text>
                </Box>
              </Flex>

              <Box
                bg="white"
                borderRadius="2xl"
                p={8}
                w="100%"
                maxW="1000px"
                boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                border="1px solid"
                borderColor="gray.100"
              >
                <Text
                  color="gray.700"
                  lineHeight="1.8"
                  fontSize="md"
                  textAlign="center"
                  whiteSpace="pre-line"
                >
{`St James Zongoro has four (4) specialised Tech-Voc Subject areas (Agriculture, Music, ICT and Home Economics) adopted through the then policy and legal frameworks of the year 2007 and upgraded through the subsequent policy developments which saw the school outperforming its own records and also outperforming its peers. Through the embracing and operationalization of the Tech-Voc Education program, the school was able to consolidate its ground through synergizing with structural systems, and in the process, creating life-support subsystems in the community which cannot be easily undone without hurting the greater part of the community. The implementation of the Heritage Based Curriculum and sustainability of the Home-Grown School Feeding Program at St James Zongoro Primary School is anchored on the school's Tech-Voc Subject specialisation.`}
                </Text>
              </Box>


            </VStack>
          </ScrollReveal>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box 
        py={24} 
        px={4} 
        bg="maroon.500"
        position="relative"
        overflow="hidden"
      >
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
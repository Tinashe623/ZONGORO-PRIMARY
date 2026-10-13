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
import { FaStar, FaCheckCircle, FaGavel, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import EnrollButton from '../components/ui/EnrollButton';
import { useBlock } from '../lib/blocks';
import { getWebsiteIcon } from '../lib/websiteIcons';
import { academicsBlock, type AcademicsBlock } from '../data/blocks/academics';

const MotionBox = motion(Box);

const statColors = ['brand', 'brandGreen', 'brandStrong', 'brandGreenStrong'];

const AcademicsPage = () => {
  const block = useBlock<AcademicsBlock>('pages.academics', academicsBlock);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title={block.hero.title} 
        subtitle={block.hero.subtitle}
        image={block.hero.image}
        imageAlt={block.hero.imageAlt}
      />
      
      {/* Main Content - Cream Background */}
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="brand" fontWeight="700">
                {block.programs.heading}
              </Heading>
              <Text color="gray.600" maxW="700px" fontSize="lg" lineHeight="1.8">
                {block.programs.description}
              </Text>
            </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {block.programs.cards.map((card, index) => {
              const IconComponent = getWebsiteIcon(card.icon, FaStar);
              return (
                  <Card key={index}
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
                            <Icon as={IconComponent} color="onAccent" fontSize="3xl" />
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
                              <ListIcon as={FaCheckCircle} color="brandGreen" mr={3} />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </VStack>
                    </CardBody>
                  </Card>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Philosophy Section - Cream Background */}
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <VStack align="start" spacing={6}>
                <Heading size="2xl" color="brand" fontWeight="700">
                  {block.why.heading}
                </Heading>
                <Text color="gray.600" fontSize="lg" lineHeight="1.9">
                  {block.why.description}
                </Text>
                <Box pt={4}>
                  <SimpleGrid columns={2} spacing={4}>
                    {block.why.highlights.map((item, i) => (
                      <Flex key={i} align="center" gap={2}>
                        <Icon as={FaStar} color="brandGreen" />
                        <Text fontWeight="600" color="dark.500">{item}</Text>
                      </Flex>
                    ))}
                  </SimpleGrid>
                </Box>
              </VStack>
            
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
                  <Heading size="md" color="brand" textAlign="center">
                    {block.why.goalsHeading}
                  </Heading>
                  <VStack align="start" spacing={4} w="100%">
                    {block.why.goals.map((goal, i) => (
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
          </SimpleGrid>
        </Box>
      </Box>

      {/* Tech-Voc Compliance & Achievements Section */}
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="cream.50">
        <Box maxW="1200px" mx="auto">
            <VStack spacing={4} textAlign="center" mb={16}>
              <Heading size="2xl" color="brand" fontWeight="700">
                {block.techVoc.heading}
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
                {block.techVoc.subtitle}
              </Text>
            </VStack>

          {/* Hero Stats */}
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={16}>
            {block.techVoc.stats.map((stat, index) => (
                <Box key={index}
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
                    <Icon as={getWebsiteIcon(stat.icon, FaStar)} color={statColors[index]} fontSize="2xl" />
                  </Flex>
                  <Heading size="2xl" color={statColors[index]} fontWeight="800">
                    {stat.value}
                  </Heading>
                  <Text color="gray.600" fontSize="sm" mt={1} fontWeight="600">
                    {stat.label}
                  </Text>
                </Box>
            ))}
          </SimpleGrid>

          {/* Policy Frameworks Section */}
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
                  boxShadow="0 6px 20px rgba(130, 0, 0,0.3)"
                >
                  <Icon as={FaGavel} color="onAccent" fontSize="xl" />
                </Box>
                <Box>
                  <Heading size="lg" color="brandStrong" fontWeight="700">
                    {block.techVoc.policy.heading}
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    {block.techVoc.policy.subtitle}
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
                  {block.techVoc.policy.body}
                </Text>
              </Box>
            </VStack>

          {/* Achievements Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={16}>
            {block.techVoc.achievements.items.map((achievement, index) => (
                <Box key={index}
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
                      boxShadow="0 4px 15px rgba(130, 0, 0,0.3)"
                    >
                      <Icon as={getWebsiteIcon(achievement.icon, FaStar)} color="onAccent" fontSize="lg" />
                    </Box>
                    <Heading size="md" color="brandStrong" fontWeight="700">
                      {achievement.title}
                    </Heading>
                  </Flex>

                  <Text color="gray.600" mb={4} lineHeight="1.7">
                    {achievement.description}
                  </Text>

                  <VStack align="start" spacing={2}>
                    <Text color="brandGreenStrong" fontSize="sm" fontWeight="600">
                      {block.techVoc.achievements.label}
                    </Text>
                    {achievement.items.map((item, i) => (
                      <Flex key={i} align="center" gap={2}>
                        <Icon as={FaCheckCircle} color="brandGreen" fontSize="xs" />
                        <Text color="gray.700" fontSize="sm">{item}</Text>
                      </Flex>
                    ))}
                  </VStack>
                </Box>
            ))}
          </SimpleGrid>

          {/* Conclusion */}
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
                  <Icon as={FaTrophy} color="onAccent" fontSize="xl" />
                </Box>
                <Box textAlign="center">
                  <Heading size="xl" color="brandGreenStrong" fontWeight="700">
                    {block.techVoc.conclusion.heading}
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    {block.techVoc.conclusion.subtitle}
                  </Text>
                </Box>
              </Flex>

              <Box
                bg="white"
                borderRadius="2xl"
                p={8}
                w="100%"
                maxW="1200px"
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
                  {block.techVoc.conclusion.body}
                </Text>
              </Box>


            </VStack>
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
          bg="rgba(45,106,79,0.08)"
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
              color="onAccent" 
              fontWeight="700"
              textShadow="0 4px 20px rgba(0,0,0,0.3)"
            >
              {block.cta.heading}
            </Heading>
            <Text 
              color="whiteAlpha.900" 
              fontSize="xl" 
              maxW="600px"
              lineHeight="1.8"
            >
              {block.cta.description}
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
                <EnrollButton
                  size="lg"
                  px={12}
                  py={7}
                  fontWeight="700"
                  fontSize="lg"
                >
                  {block.cta.primaryButtonText}
                </EnrollButton>
              </MotionBox>
              
              <MotionBox
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as="a"
                  href={block.cta.secondaryButtonLink}
                  bg="transparent"
                  color="onAccent"
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
                    borderColor: 'onAccent'
                  }}
                  transition="all 0.3s ease"
                >
                  {block.cta.secondaryButtonText}
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
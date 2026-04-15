import { useState } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
  Tabs,
  TabList,
  Tab,
  Flex,
  Icon,
} from '@chakra-ui/react';
import {
  FaFutbol,
  FaBasketballBall,
  FaRunning,
  FaBaseballBall,
  FaSwimmer,
  FaMusic,
  FaTheaterMasks,
  FaPeopleCarry,
  FaBible,
  FaComments,
  FaLeaf,
  FaBookReader,
  FaQuestionCircle,
  FaFlask,
  FaCalculator,
  FaLightbulb,
  FaBookOpen,
  FaBook,
} from 'react-icons/fa';
import { activities } from '../../data/activities';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<string, React.ComponentType> = {
  FaFutbol,
  FaBasketballBall,
  FaRunning,
  FaBaseballBall,
  FaSwimmer,
  FaMusic,
  FaTheaterMasks,
  FaPeopleCarry,
  FaBible,
  FaComments,
  FaLeaf,
  FaBookReader,
  FaQuestionCircle,
  FaFlask,
  FaCalculator,
  FaLightbulb,
  FaBookOpen,
  FaBook,
};

const categoryColors: Record<string, string> = {
  sports: 'green',
  arts: 'maroon',
  clubs: 'forest',
  academic: 'blue',
};

const categories = ['All', 'Sports', 'Arts & Culture', 'Clubs', 'Academic'];

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[activity.icon];

  const isAcademic = activity.category === 'academic';
  const cardBg = isAcademic
    ? 'linear-gradient(135deg, white 0%, blue.50 100%)'
    : 'white';

  const badgeColor = categoryColors[activity.category];

  return (
    <Card
      bg={cardBg}
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: 'translateY(-2px) scale(1.02)',
        boxShadow: isAcademic
          ? '0 12px 40px rgba(59, 130, 246, 0.2)'
          : '0 12px 40px rgba(0,0,0,0.15)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      h="100%"
      overflow="hidden"
      border={isAcademic ? '1px solid' : 'none'}
      borderColor={isAcademic ? 'blue.200' : 'transparent'}
      position="relative"
    >
      <CardBody p={6}>
        <VStack align="start" spacing={4}>
          <Flex align="center" gap={3} w="100%">
            <Flex
              align="center"
              justify="center"
              w="50px"
              h="50px"
              borderRadius="full"
              bg={isAcademic
                ? 'linear-gradient(135deg, blue.500 0%, blue.600 100%)'
                : `${badgeColor}.500`
              }
              flexShrink={0}
              boxShadow={isAcademic ? '0 4px 14px rgba(59, 130, 246, 0.3)' : 'none'}
            >
              {IconComponent && <Icon as={IconComponent} color={isAcademic ? "gray.900" : "white"} fontSize="xl" />}
            </Flex>
            <Box flex="1">
              <Heading
                size="md"
                color={isAcademic ? 'blue.700' : 'dark.500'}
                fontWeight="600"
              >
                {activity.name}
              </Heading>
              <Badge
                colorScheme={badgeColor}
                fontSize="xs"
                fontWeight="600"
                px={2}
                py={0.5}
                borderRadius="full"
              >
                {activity.category}
              </Badge>
            </Box>
          </Flex>

          <Text color="gray.600" fontSize="sm" lineHeight="1.6">
            {activity.description}
          </Text>

          <Text color={isAcademic ? 'blue.600' : 'maroon.500'} fontSize="sm" fontWeight="600">
            📅 {activity.schedule}
          </Text>

          {activity.achievements && (
            <Box
              w="100%"
              minH="60px"
              transition="opacity 0.3s ease"
              opacity={isHovered ? 1 : 0}
              pointerEvents={isHovered ? "auto" : "none"}
            >
              <Box w="100%" pt={2} borderTop="1px" borderColor="gray.100">
                <Text color="gray.500" fontSize="xs" fontWeight="600" mb={1}>
                  Achievements:
                </Text>
                {activity.achievements.map((a, i) => (
                  <Text key={i} color={isAcademic ? 'blue.600' : 'forest.500'} fontSize="xs">
                    🏆 {a}
                  </Text>
                ))}
              </Box>
            </Box>
          )}

          {activity.achievements && !isHovered && (
            <Box
              position="absolute"
              bottom="3"
              right="3"
              bg="linear-gradient(135deg, white 0%, rgba(255,255,255,0.9) 100%)"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              px={3}
              py={1.5}
              fontSize="xs"
              color="gray.600"
              fontWeight="600"
              pointerEvents="none"
              transition="all 0.2s ease"
              boxShadow="0 2px 8px rgba(0,0,0,0.1)"
              backdropFilter="blur(4px)"
              display={{ base: "block", md: "none" }}
            >
              👆 Tap to expand
            </Box>
          )}

          {activity.achievements && !isHovered && (
            <Box
              position="absolute"
              bottom="3"
              right="3"
              bg="linear-gradient(135deg, white 0%, rgba(255,255,255,0.9) 100%)"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              px={3}
              py={1.5}
              fontSize="xs"
              color="gray.600"
              fontWeight="600"
              pointerEvents="none"
              transition="all 0.2s ease"
              boxShadow="0 2px 8px rgba(0,0,0,0.1)"
              backdropFilter="blur(4px)"
              display={{ base: "none", md: "block" }}
            >
              🖱️ Hover to view
            </Box>
          )}
        </VStack>
      </CardBody>
    </Card>
  );
};

const ActivitiesGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredActivities = selectedCategory === 'All'
    ? activities
    : activities.filter(activity => {
        if (selectedCategory === 'Sports') return activity.category === 'sports';
        if (selectedCategory === 'Arts & Culture') return activity.category === 'arts';
        if (selectedCategory === 'Clubs') return activity.category === 'clubs';
        if (selectedCategory === 'Academic') return activity.category === 'academic';
        return true;
      });

  return (
    <Box
      py={20}
      px={4}
      bg="linear-gradient(135deg, cream.50 0%, white 50%, cream.50 100%)"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(130, 0, 0, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(45, 106, 79, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none',
      }}
    >
      <Box maxW="1400px" mx="auto" position="relative" zIndex={1}>
        <ScrollReveal>
          <VStack spacing={8} mb={12}>
            <VStack spacing={4} textAlign="center">
              <Heading
                size="2xl"
                color="dark.500"
                fontWeight="700"
                bgGradient="linear(to-r, maroon.500, forest.500)"
                bgClip="text"
              >
                Explore Our Activities
              </Heading>
              <Text color="gray.600" fontSize="lg" maxW="600px">
                Choose from our diverse range of co-curricular activities designed to nurture talents and build character
              </Text>
            </VStack>

            <Tabs
              variant="soft-rounded"
              colorScheme="maroon"
              index={categories.indexOf(selectedCategory)}
              onChange={(index) => setSelectedCategory(categories[index])}
              size="lg"
            >
              <TabList
                justifyContent="center"
                flexWrap="wrap"
                gap={3}
                bg="white"
                p={2}
                borderRadius="2xl"
                boxShadow="0 4px 20px rgba(0,0,0,0.08)"
              >
                {categories.map((category) => (
                  <Tab
                    key={category}
                    _selected={{
                      bg: 'maroon.500',
                      color: 'white',
                      boxShadow: '0 4px 14px rgba(130, 0, 0, 0.3)'
                    }}
                    px={6}
                    py={3}
                    borderRadius="xl"
                    fontWeight="600"
                    transition="all 0.2s ease"
                  >
                    {category}
                  </Tab>
                ))}
              </TabList>
            </Tabs>
          </VStack>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={8}>
          {filteredActivities.map((activity, index) => (
            <ScrollReveal key={activity.id} delay={0.1 * index}>
              <ActivityCard activity={activity} />
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ActivitiesGrid;
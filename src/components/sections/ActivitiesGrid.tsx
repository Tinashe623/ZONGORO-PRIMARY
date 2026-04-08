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
  Collapse,
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
};

const categoryColors: Record<string, string> = {
  sports: 'green',
  arts: 'maroon',
  clubs: 'forest',
  academic: 'dark',
};

const categories = ['All', 'Sports', 'Arts & Culture', 'Clubs', 'Academic'];

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[activity.icon];

  return (
    <Card
      bg="white"
      borderRadius="2xl"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      h="100%"
      overflow="hidden"
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
              bg={`${categoryColors[activity.category]}.500`}
              flexShrink={0}
            >
              {IconComponent && <Icon as={IconComponent} color="white" fontSize="xl" />}
            </Flex>
            <Box flex="1">
              <Heading size="md" color="dark.500">
                {activity.name}
              </Heading>
              <Badge colorScheme={categoryColors[activity.category]} fontSize="xs">
                {activity.category}
              </Badge>
            </Box>
          </Flex>

          <Text color="gray.600" fontSize="sm" lineHeight="1.6">
            {activity.description}
          </Text>

          <Text color="maroon.500" fontSize="sm" fontWeight="600">
            📅 {activity.schedule}
          </Text>

          <Collapse in={isHovered && !!activity.achievements} animateOpacity>
            {activity.achievements && (
              <Box w="100%" pt={2} borderTop="1px" borderColor="gray.100">
                <Text color="gray.500" fontSize="xs" fontWeight="600" mb={1}>
                  Achievements:
                </Text>
                {activity.achievements.map((a, i) => (
                  <Text key={i} color="forest.500" fontSize="xs">
                    🏆 {a}
                  </Text>
                ))}
              </Box>
            )}
          </Collapse>
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
    <Box py={16} px={4} bg="cream.50">
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <Tabs
            variant="soft-rounded"
            colorScheme="maroon"
            index={categories.indexOf(selectedCategory)}
            onChange={(index) => setSelectedCategory(categories[index])}
            mb={10}
          >
            <TabList justifyContent="center" flexWrap="wrap" gap={2}>
              {categories.map((category) => (
                <Tab
                  key={category}
                  _selected={{ bg: 'maroon.500', color: 'white' }}
                  px={6}
                >
                  {category}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </ScrollReveal>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
          {filteredActivities.map((activity, index) => (
            <ScrollReveal key={activity.id} delay={0.05 * index}>
              <ActivityCard activity={activity} />
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ActivitiesGrid;
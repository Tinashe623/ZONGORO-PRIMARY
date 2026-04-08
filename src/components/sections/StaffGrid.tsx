import { useState } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Avatar,
  Badge,
  Tabs,
  TabList,
  Tab,
  Card,
  CardBody,
  Flex,
  Collapse,
} from '@chakra-ui/react';
import { staffMembers } from '../../data/staff';
import type { StaffMember } from '../../data/staff';
import ScrollReveal from '../ui/ScrollReveal';

const StaffCard = ({ member }: { member: StaffMember }) => {
  const [isHovered, setIsHovered] = useState(false);

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
    >
      <CardBody p={6}>
        <VStack spacing={4}>
          <Avatar
            size="2xl"
            name={member.name}
            src={member.image}
            border="4px solid"
            borderColor="maroon.500"
          />
          <Box textAlign="center">
            <Heading size="md" color="dark.500" mb={1}>
              {member.name}
            </Heading>
            <Text color="maroon.500" fontWeight="600" fontSize="sm">
              {member.title}
            </Text>
            <Text color="gray.500" fontSize="sm" mt={1}>
              {member.specialisation}
            </Text>
          </Box>
          
          <Flex gap={2} flexWrap="wrap" justify="center">
            <Badge colorScheme="gray" fontSize="xs">
              {member.qualifications}
            </Badge>
            <Badge colorScheme="green" fontSize="xs">
              {member.yearsAtSchool} years
            </Badge>
          </Flex>

          <Collapse in={isHovered} animateOpacity>
            <Text color="gray.600" fontSize="sm" textAlign="center" pt={2} borderTop="1px" borderColor="gray.100">
              {member.bio}
            </Text>
          </Collapse>
        </VStack>
      </CardBody>
    </Card>
  );
};

const categories = ['All', 'Leadership', 'Teaching Staff', 'Support Staff'];

const StaffGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStaff = selectedCategory === 'All'
    ? staffMembers
    : staffMembers.filter(member => {
        if (selectedCategory === 'Leadership') return member.category === 'leadership';
        if (selectedCategory === 'Teaching Staff') return member.category === 'teaching';
        if (selectedCategory === 'Support Staff') return member.category === 'support';
        return true;
      });

  return (
    <Box py={16} px={4}>
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

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
          {filteredStaff.map((member, index) => (
            <ScrollReveal key={member.id} delay={0.05 * index}>
              <StaffCard member={member} />
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StaffGrid;
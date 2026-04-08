import {
  Box,
  Heading,
  Text,
  Avatar,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { staffMembers } from '../../data/staff';
import ScrollReveal from '../ui/ScrollReveal';

const StaffLeadership = () => {
  const leadership = staffMembers.filter(m => m.category === 'leadership');

  return (
    <Box bg="cream.50" py={16} px={4}>
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            School Leadership
          </Heading>
        </ScrollReveal>

        <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={8}>
          {leadership.map((member, index) => (
            <GridItem key={member.id}>
              <ScrollReveal delay={0.1 * index}>
                <Card
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                  overflow="hidden"
                  h="100%"
                >
                  <Box
                    h="8px"
                    bg="maroon.500"
                  />
                  <CardBody p={8}>
                    <Flex direction="column" align="center" textAlign="center">
                      <Avatar
                        size="2xl"
                        name={member.name}
                        src={member.image}
                        mb={4}
                        border="4px solid"
                        borderColor="maroon.500"
                      />
                      <Heading size="md" color="dark.500" mb={1}>
                        {member.name}
                      </Heading>
                      <Text color="maroon.500" fontWeight="600" mb={2}>
                        {member.title}
                      </Text>
                      <Text color="gray.500" fontSize="sm" mb={4}>
                        {member.specialisation}
                      </Text>
                      <Text color="gray.600" fontSize="sm" lineHeight="1.7">
                        {member.bio}
                      </Text>
                    </Flex>
                  </CardBody>
                </Card>
              </ScrollReveal>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StaffLeadership;
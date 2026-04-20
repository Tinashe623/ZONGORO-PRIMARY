import {
  Box,
  Heading,
  Text,
  Avatar,
  Flex,
  VStack,
  Badge,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { staffMembers } from '../../data/staff';
import ScrollReveal from '../ui/ScrollReveal';

const StaffLeadership = () => {
  const leadership = staffMembers.filter(m => m.category === 'leadership');

  return (
    <>
      {/* ── Leadership Cards ────────────────────────────────── */}
      <Box bg="cream.50" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6, lg: 8 }}>
        <Box maxW="1200px" mx="auto">

          {/* Section header */}
          <ScrollReveal>
            <VStack spacing={3} textAlign="center" mb={{ base: 10, md: 16 }}>
              <Badge
                bg="maroon.500"
                color="white"
                fontSize="xs"
                fontWeight="700"
                px={3}
                py={1}
                borderRadius="full"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                School Leadership
              </Badge>
              <Heading
                size={{ base: 'lg', md: '2xl' }}
                color="maroon.500"
                fontWeight="700"
                lineHeight="1.2"
              >
                Meet Our Leaders
              </Heading>
              <Text
                color="gray.500"
                fontSize={{ base: 'sm', md: 'md' }}
                maxW="520px"
                lineHeight="1.8"
              >
                Experienced educators guiding our school with vision, dedication and heart.
              </Text>
            </VStack>
          </ScrollReveal>

          {/* Leadership cards */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 8 }}>
            {leadership.map((member, index) => (
              <ScrollReveal key={member.id} delay={0.1 * index}>
                <Box
                  bg="white"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="0 4px 24px rgba(0,0,0,0.08)"
                  border="1px solid"
                  borderColor="gray.100"
                  _hover={{
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 48px rgba(130,0,0,0.13)',
                    borderColor: 'maroon.200',
                  }}
                  transition="all 0.3s ease"
                >
                  {/* Top accent bar */}
                  <Box h="4px" bgGradient="linear(to-r, maroon.600, maroon.400)" />

                  <Flex direction="column" align="center" p={{ base: 6, md: 8 }} textAlign="center" gap={4}>
                    {/* Avatar with star badge */}
                    <Box position="relative">
                      <Avatar
                        size="xl"
                        name={member.name}
                        src={member.image || undefined}
                        showBorder
                        border="3px solid"
                        borderColor="maroon.500"
                        boxShadow="0 4px 20px rgba(130,0,0,0.2)"
                      />
                      <Flex
                        position="absolute"
                        bottom="-4px"
                        right="-4px"
                        w="26px"
                        h="26px"
                        borderRadius="full"
                        bg="maroon.500"
                        align="center"
                        justify="center"
                        border="2px solid white"
                      >
                        <Icon as={FaStar} color="white" fontSize="9px" />
                      </Flex>
                    </Box>

                    {/* Info */}
                    <VStack spacing={1}>
                      <Heading size={{ base: 'sm', md: 'md' }} color="dark.500" fontWeight="700">
                        {member.name}
                      </Heading>
                      <Text color="maroon.500" fontWeight="600" fontSize="sm">
                        {member.title}
                      </Text>
                      <Text color="gray.400" fontSize="xs" fontWeight="500">
                        {member.specialisation}
                      </Text>
                    </VStack>

                    {/* Divider */}
                    <Box w="40px" h="2px" bgGradient="linear(to-r, maroon.400, maroon.200)" borderRadius="full" />

                    {/* Bio */}
                    <Text color="gray.600" fontSize={{ base: 'xs', md: 'sm' }} lineHeight="1.8">
                      {member.bio}
                    </Text>

                    {/* Footer pill */}
                    <Badge
                      bg="cream.50"
                      color="maroon.600"
                      border="1px solid"
                      borderColor="maroon.100"
                      fontSize="xs"
                      fontWeight="600"
                      px={3}
                      py={1}
                      borderRadius="full"
                      whiteSpace="normal"
                      textAlign="center"
                    >
                      {member.qualifications === 'Coming Soon' ? 'Coming Soon' : `${member.yearsAtSchool} yrs · ${member.qualifications}`}
                    </Badge>
                  </Flex>
                </Box>
              </ScrollReveal>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* ── Group Photo Section ─────────────────────────────── */}
      <Box bg="maroon.50" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6, lg: 8 }}>
        <Box maxW="1200px" mx="auto">
          <ScrollReveal>
            <VStack spacing={3} textAlign="center" mb={{ base: 8, md: 12 }}>
              <Heading
                size={{ base: 'lg', md: '2xl' }}
                color="maroon.600"
                fontWeight="700"
              >
                Our Staff Family
              </Heading>
              <Text
                color="gray.500"
                fontSize={{ base: 'sm', md: 'md' }}
                maxW="560px"
                lineHeight="1.8"
              >
                United by a shared passion for education and community — the people behind
                every achievement at St James Zongoro.
              </Text>
            </VStack>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Box
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="0 20px 60px rgba(0,0,0,0.12)"
              bg="maroon.500"
              position="relative"
              minH={{ base: '200px', md: '300px' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                color="whiteAlpha.700"
                fontSize={{ base: 'lg', md: '2xl' }}
                fontWeight="600"
                textAlign="center"
                px={4}
              >
                School Teaching Staff Coming Soon
              </Text>
            </Box>
          </ScrollReveal>
        </Box>
      </Box>
    </>
  );
};

export default StaffLeadership;
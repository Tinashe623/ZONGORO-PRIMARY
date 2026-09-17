import { useState } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Avatar,
  Flex,
  Button,
  Icon,
} from '@chakra-ui/react';
import { FaGraduationCap, FaClock } from 'react-icons/fa';
import { staffMembers } from '../../data/staff';
import type { StaffMember } from '../../data/staff';
import ScrollReveal from '../ui/ScrollReveal';

/* ── Category filter config ───────────────────────── */
const categories = [
  { label: 'All', value: 'all' },
  { label: 'Leadership', value: 'leadership' },
  { label: 'Teaching Staff', value: 'teaching' },
  { label: 'Support Staff', value: 'support' },
];

/* ── Individual staff card ───────────────────────── */
const StaffCard = ({ member }: { member: StaffMember }) => (
  <Box
    bg="white"
    borderRadius="2xl"
    overflow="hidden"
    boxShadow="0 2px 16px rgba(0,0,0,0.07)"
    border="1px solid"
    borderColor="gray.100"
    _hover={{
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 40px rgba(130,0,0,0.11)',
      borderColor: 'maroon.200',
    }}
    transition="all 0.3s ease"
    h="100%"
  >
    {/* Category colour stripe */}
    <Box
      h="3px"
      bg={
        member.category === 'leadership'
          ? 'maroon.500'
          : member.category === 'teaching'
          ? 'forest.500'
          : 'gray.400'
      }
    />

    <Flex direction="column" align="center" p={{ base: 5, md: 6 }} textAlign="center" gap={3}>
      {/* Avatar */}
      <Avatar
        size="lg"
        name={member.name}
        src={member.image}
        border="2px solid"
        borderColor={
          member.category === 'leadership'
            ? 'maroon.500'
            : member.category === 'teaching'
            ? 'forest.500'
            : 'gray.300'
        }
        boxShadow="0 4px 14px rgba(0,0,0,0.12)"
      />

      {/* Name + role */}
      <VStack spacing={0.5}>
        <Heading size="sm" color="dark.500" fontWeight="700" noOfLines={1}>
          {member.name}
        </Heading>
        <Text
          color={member.category === 'leadership' ? 'maroon.500' : 'forest.500'}
          fontWeight="600"
          fontSize="xs"
        >
          {member.title}
        </Text>
        <Text color="gray.400" fontSize="xs" noOfLines={1}>
          {member.specialisation}
        </Text>
      </VStack>

      {/* Stats row */}
      <Flex gap={3} flexWrap="wrap" justify="center">
        <Flex align="center" gap={1}>
          <Icon as={FaGraduationCap} color="gray.400" fontSize="xs" />
          <Text fontSize="xs" color="gray.500">{member.qualifications}</Text>
        </Flex>
        <Flex align="center" gap={1}>
          <Icon as={FaClock} color="gray.400" fontSize="xs" />
          <Text fontSize="xs" color="gray.500">{member.yearsAtSchool} yrs</Text>
        </Flex>
      </Flex>

      {/* Divider */}
      <Box w="32px" h="1px" bg="gray.100" />

      {/* Bio */}
      <Text color="gray.500" fontSize="xs" lineHeight="1.7" noOfLines={3}>
        {member.bio}
      </Text>
    </Flex>
  </Box>
);

/* ── Main StaffGrid component ────────────────────── */
const StaffGrid = () => {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? staffMembers
      : staffMembers.filter(m => m.category === active);

  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 6, lg: 8 }} bg="white">
      <Box maxW="1200px" mx="auto">

        {/* Section header */}
        <ScrollReveal>
          <VStack spacing={3} textAlign="center" mb={{ base: 8, md: 14 }}>
            <Heading
              size={{ base: 'lg', md: '2xl' }}
              color="dark.500"
              fontWeight="700"
            >
              Our Full Team
            </Heading>
            <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }} maxW="480px" lineHeight="1.8">
              Every member of our team plays a vital role in shaping young minds and
              building a thriving school community.
            </Text>
          </VStack>
        </ScrollReveal>

        {/* Filter buttons */}
        <ScrollReveal>
          <Flex
            justify="center"
            flexWrap="wrap"
            gap={{ base: 2, md: 3 }}
            mb={{ base: 8, md: 12 }}
          >
            {categories.map(cat => (
              <Button
                key={cat.value}
                size={{ base: 'sm', md: 'md' }}
                borderRadius="full"
                fontWeight="600"
                px={{ base: 4, md: 6 }}
                bg={active === cat.value ? 'maroon.500' : 'gray.100'}
                color={active === cat.value ? 'white' : 'gray.600'}
                _hover={{
                  bg: active === cat.value ? 'maroon.600' : 'gray.200',
                }}
                onClick={() => setActive(cat.value)}
                transition="all 0.2s ease"
              >
                {cat.label}
              </Button>
            ))}
          </Flex>
        </ScrollReveal>

        {/* Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
          spacing={{ base: 4, md: 5, lg: 6 }}
        >
          {filtered.map((member, index) => (
            <ScrollReveal key={member.id} delay={0.05 * index}>
              <StaffCard member={member} />
            </ScrollReveal>
          ))}
        </SimpleGrid>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Box textAlign="center" py={16}>
            <Text color="gray.400" fontSize="md">No staff members found.</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default StaffGrid;
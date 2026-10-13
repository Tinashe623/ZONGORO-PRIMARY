import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaBed } from 'react-icons/fa';
import { useBlock } from '../../lib/blocks';
import { getWebsiteIcon } from '../../lib/websiteIcons';
import { boardingBlock, type BoardingBlock } from '../../data/blocks/boarding';

interface BoardingFacilitiesProps {
  facilities?: BoardingBlock['facilities'];
}

const BoardingFacilities = ({ facilities }: BoardingFacilitiesProps) => {
  const block = useBlock<BoardingBlock>('pages.boarding', boardingBlock);
  const { heading, subtitle, items } = facilities ?? block.facilities;

  return (
    <Box py={20} px={4} bg="white">
      <Box maxW="1200px" mx="auto">
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="brand" fontWeight="700">
              {heading}
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              {subtitle}
            </Text>
          </VStack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {items.map((facility, index) => {
            const IconComponent = getWebsiteIcon(facility.icon, FaBed);
            return (
                <Box key={index}
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="0 8px 30px rgba(0,0,0,0.1)"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="gray.100"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-6px)',
                    boxShadow: '0 15px 50px rgba(130,0,0,0.15)',
                    borderColor: 'maroon.200',
                  }}
                  h="100%"
                >
                  {/* Gradient top bar */}
                  <Box 
                    h="4px" 
                    bg="maroon.500" 
                  />
                  <Box p={8}>
                    <VStack align="start" spacing={5}>
                      <Flex
                        align="center"
                        justify="center"
                        w="70px"
                        h="70px"
                        borderRadius="2xl"
                        bg="maroon.500"
                        boxShadow="0 6px 20px rgba(130, 0, 0, 0.3)"
                      >
                        {IconComponent && <Icon as={IconComponent} color="onAccent" fontSize="2xl" />}
                      </Flex>
                      <Heading size="md" color="dark.500" fontWeight="700">
                        {facility.name}
                      </Heading>
                      <Text color="gray.600" lineHeight="1.8" fontSize="md">
                        {facility.description}
                      </Text>
                    </VStack>
                  </Box>
                </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default BoardingFacilities;
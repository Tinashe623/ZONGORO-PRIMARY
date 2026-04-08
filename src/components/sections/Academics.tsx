import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  List,
  ListItem,
  ListIcon,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FaGraduationCap, FaBookOpen, FaLightbulb } from 'react-icons/fa';
import { academicCards } from '../../data/academics';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

const iconMap: Record<string, React.ComponentType> = {
  FaGraduationCap,
  FaBookOpen,
  FaLightbulb,
};

const Academics = () => {
  return (
    <Box id="academics" py={20} px={4}>
      <Box maxW="1400px" mx="auto">
        <ScrollReveal>
          <SectionHeading
            title="Academic Excellence"
            subtitle="Preparing students for success in education and life"
          />
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
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  }}
                  h="100%"
                >
                  <CardBody p={8}>
                    <VStack align="start" spacing={4}>
                      <Flex
                        align="center"
                        justify="center"
                        w="70px"
                        h="70px"
                        borderRadius="full"
                        bg="maroon.500"
                      >
                        {IconComponent && (
                          <Icon as={IconComponent} color="white" fontSize="2xl" />
                        )}
                      </Flex>
                      <Heading size="md" color="maroon.500">
                        {card.title}
                      </Heading>
                      <Text color="gray.600" lineHeight="1.7">
                        {card.description}
                      </Text>
                      <List spacing={2} mt={2}>
                        {card.items.map((item, itemIndex) => (
                          <ListItem
                            key={itemIndex}
                            display="flex"
                            alignItems="center"
                            fontSize="sm"
                            color="gray.600"
                          >
                            <ListIcon as={() => null} />
                            <Box as="span" mr={2}>•</Box>
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
  );
};

export default Academics;
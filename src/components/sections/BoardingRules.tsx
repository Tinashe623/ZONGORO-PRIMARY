import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  VStack,
  Flex,
} from '@chakra-ui/react';
import { FaCheckCircle, FaSchool, FaUserShield, FaClock, FaHeart } from 'react-icons/fa';
import { boardingRules } from '../../data/boarding';
import ScrollReveal from '../ui/ScrollReveal';

const categoryIcons: Record<string, React.ComponentType> = {
  'General Rules': FaSchool,
  'Health & Safety': FaUserShield,
  'Study & Academic': FaClock,
  'Social & Pastoral': FaHeart,
};

const BoardingRules = () => {
  return (
    <Box py={20} px={4} bg="white">
      <Box maxW="900px" mx="auto">
        <ScrollReveal>
          <VStack spacing={4} textAlign="center" mb={16}>
            <Heading size="2xl" color="maroon.600" fontWeight="800">
              Boarding Rules & Expectations
            </Heading>
            <Text color="gray.600" fontSize="lg" maxW="700px" lineHeight="1.8">
              Our boarding community operates on principles of respect, discipline, and personal growth.
            </Text>
          </VStack>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion allowMultiple>
            {boardingRules.map((rule, index) => {
              const CategoryIcon = categoryIcons[rule.category] || FaSchool;
              return (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={5}
                >
                   <AccordionButton
                     bg="maroon.500"
                     color="white"
                     borderRadius="xl"
                     _hover={{ bgGradient: 'linear(to-r, maroon.600, maroon.700)', boxShadow: '0 6px 20px rgba(128,0,0,0.3)' }}
                     _expanded={{ bgGradient: 'linear(to-r, maroon.600, maroon.700)', borderBottomRadius: 0, boxShadow: '0 6px 20px rgba(128,0,0,0.3)' }}
                     p={5}
                     boxShadow="0 4px 15px rgba(128,0,0,0.2)"
                     transition="all 0.3s ease"
                   >
                    <Flex align="center" gap={3} flex="1" textAlign="left">
                      <Box 
                        w="40px" 
                        h="40px" 
                        borderRadius="lg" 
                        bg="whiteAlpha.200" 
                        display="flex" 
                        alignItems="center" 
                        justifyContent="center"
                      >
                        <Box as={CategoryIcon} />
                      </Box>
                       <Heading
                         size="md"
                         fontWeight="700"
                         color="white"
                         textShadow="0 2px 4px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)"
                         letterSpacing="wide"
                         textTransform="uppercase"
                         fontSize="sm"
                       >
                         {rule.category}
                       </Heading>
                    </Flex>
                    <AccordionIcon fontSize="2xl" />
                  </AccordionButton>
                  <AccordionPanel 
                    bg="cream.50" 
                    borderRadius="xl" 
                    borderTopRadius={0} 
                    p={8}
                    boxShadow="0 4px 20px rgba(0,0,0,0.08)"
                  >
                    <List spacing={4}>
                      {rule.rules.map((r, i) => (
                        <ListItem 
                          key={i} 
                          display="flex" 
                          alignItems="start"
                          p={3}
                          _hover={{ bg: 'white', borderRadius: 'lg' }}
                          transition="all 0.2s ease"
                        >
                          <ListIcon as={FaCheckCircle} color="forest.500" mt={1} fontSize="lg" />
                          <Text color="gray.700" fontSize="md" lineHeight="1.7">{r}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ScrollReveal>
      </Box>
    </Box>
  );
};

export default BoardingRules;
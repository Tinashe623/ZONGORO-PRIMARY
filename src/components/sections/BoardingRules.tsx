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
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { boardingRules } from '../../data/boarding';
import ScrollReveal from '../ui/ScrollReveal';

const BoardingRules = () => {
  return (
    <Box py={16} px={4} bg="white">
      <Box maxW="800px" mx="auto">
        <ScrollReveal>
          <Heading size="xl" textAlign="center" mb={12} color="dark.500">
            Boarding Rules & Expectations
          </Heading>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion allowMultiple>
            {boardingRules.map((rule, index) => (
              <AccordionItem
                key={index}
                border="none"
                mb={4}
              >
                <AccordionButton
                  bg="maroon.500"
                  color="white"
                  borderRadius="xl"
                  _hover={{ bg: 'maroon.600' }}
                  _expanded={{ bg: 'maroon.600', borderBottomRadius: 0 }}
                  p={4}
                >
                  <Heading size="md" flex="1" textAlign="left">
                    {rule.category}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel bg="cream.50" borderRadius="xl" borderTopRadius={0} p={6}>
                  <List spacing={3}>
                    {rule.rules.map((r, i) => (
                      <ListItem key={i} display="flex" alignItems="start">
                        <ListIcon as={FaCheckCircle} color="maroon.500" mt={1} />
                        <Text color="gray.700">{r}</Text>
                      </ListItem>
                    ))}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </Box>
    </Box>
  );
};

export default BoardingRules;
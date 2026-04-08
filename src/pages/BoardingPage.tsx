import { useEffect } from 'react';
import {
  Box,
  SimpleGrid,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Badge,
} from '@chakra-ui/react';
import PageHero from '../components/ui/PageHero';
import BoardingFacilities from '../components/sections/BoardingFacilities';
import DailySchedule from '../components/sections/DailySchedule';
import BoardingRules from '../components/sections/BoardingRules';
import { boardingFees } from '../data/boarding';
import CTABanner from '../components/ui/CTABanner';
import ScrollReveal from '../components/ui/ScrollReveal';

const BoardingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title="Boarding" 
        subtitle="Our modern boarding institute provides a safe, supportive home away from home"
      />
      
      <Box py={16} px={4} bg="cream.50">
        <Box maxW="1400px" mx="auto">
          <ScrollReveal>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <VStack align="start" spacing={6}>
                <Heading size="lg" color="maroon.500">
                  Welcome to Our Boarding Institute
                </Heading>
                <Text color="gray.600" lineHeight="1.8">
                  St James Zongoro Primary School is proud to offer a modern boarding facility 
                  that provides a safe, nurturing environment for students. Our boarding 
                  community fosters independence, discipline, and lifelong friendships.
                </Text>
                <Text color="gray.600" lineHeight="1.8">
                  With comfortable dormitories, nutritious meals, supervised study sessions, 
                  and engaging recreational activities, our boarders thrive academically 
                  and personally.
                </Text>
              </VStack>
              <SimpleGrid columns={1} spacing={4}>
                {boardingFees.map((fee, index) => (
                  <Card key={index} bg="white" borderRadius="xl" boxShadow="md">
                    <CardBody p={4}>
                      <VStack align="start" spacing={1}>
                        <Text color="gray.500" fontSize="sm">{fee.item}</Text>
                        <Badge colorScheme="green" fontSize="lg" px={3} py={1}>
                          {fee.amount}
                        </Badge>
                      </VStack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </SimpleGrid>
          </ScrollReveal>
        </Box>
      </Box>

      <BoardingFacilities />
      <DailySchedule />
      <BoardingRules />
      <CTABanner 
        title="Enquire About Boarding" 
        subtitle="Contact us to learn more about our boarding facilities and availability"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </Box>
  );
};

export default BoardingPage;
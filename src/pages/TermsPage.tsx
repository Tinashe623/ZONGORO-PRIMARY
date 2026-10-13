import { Fragment, useEffect } from 'react';
import { Box, Text, VStack, Container, Button, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PageHero from '../components/ui/PageHero';
import NeonDivider from '../components/ui/NeonDivider';
import SectionHeading from '../components/ui/SectionHeading';
import { useBlock } from '../lib/blocks';
import { termsBlock, type TermsBlock } from '../data/blocks/terms';

const TermsPage = () => {
  const block = useBlock<TermsBlock>('pages.terms', termsBlock);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <PageHero 
        title={block.hero.title} 
        subtitle={block.hero.subtitle}
      />
      <NeonDivider />
      
      <Box py={{ base: 'sectionTight', md: 'section' }} px={4} bg="white">
        <Container maxW="900px">
          <VStack spacing={8} align="start">
            {block.sections.map((section) => (
              <Box key={section.heading}>
                <SectionHeading variant="sub" title={section.heading} />
                {section.paragraphs.map((paragraph, index) => (
                  <Text key={index} color="gray.600" lineHeight="1.8">
                    {paragraph}
                  </Text>
                ))}
                {section.details ? (
                  <Text color="gray.600" mt={2}>
                    {section.details.map((line, index, lines) => (
                      <Fragment key={index}>
                        {line}
                        {index < lines.length - 1 ? <br /> : null}
                      </Fragment>
                    ))}
                  </Text>
                ) : null}
              </Box>
            ))}

            <Flex pt={4} w="100%" justify="center">
              <Button
                as={RouterLink}
                to="/"
                leftIcon={<FaArrowLeft />}
                bg="maroon.500"
                color="onAccent"
                _hover={{ bgGradient: 'linear(to-r, maroon.600, maroon.700)' }}
              >
                {block.footer.backButtonText}
              </Button>
            </Flex>

            <Text color="gray.500" fontSize="sm">
              {block.footer.lastUpdatedLabel} {block.footer.lastUpdatedValue}
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default TermsPage;
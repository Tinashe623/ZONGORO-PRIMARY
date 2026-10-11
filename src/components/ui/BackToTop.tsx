import { useState, useEffect } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          as={motion.div}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          position="fixed"
          bottom={{ base: '4.5rem', lg: '6.5rem' }}
          right={{ base: 1.5, lg: 6 }}
          zIndex={1150}
        >
          <IconButton
            aria-label="Back to top"
            icon={<FaArrowUp />}
            bgGradient="linear(to-br, maroon.500, forest.500)"
            color="onAccent"
            size="lg"
            borderRadius="full"
            boxShadow="0 8px 24px rgba(130, 0, 0, 0.32)"
            onClick={scrollToTop}
            _hover={{
              bgGradient: 'linear(to-br, maroon.600, forest.600)',
              transform: 'translateY(-3px)',
            }}
            transition="all 0.2s ease"
          />
        </Box>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
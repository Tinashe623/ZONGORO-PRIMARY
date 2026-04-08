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
          bottom={6}
          right={6}
          zIndex={999}
        >
          <IconButton
            aria-label="Back to top"
            icon={<FaArrowUp />}
            bg="maroon.500"
            color="white"
            size="lg"
            borderRadius="full"
            boxShadow="lg"
            onClick={scrollToTop}
            _hover={{
              bg: 'maroon.600',
              transform: 'translateY(-2px)',
            }}
          />
        </Box>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
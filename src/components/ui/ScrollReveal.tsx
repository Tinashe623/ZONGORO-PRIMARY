import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.5,
}: ScrollRevealProps) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Box
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: '-50px',
        amount: 0.1 
      }}
      variants={variants}
    >
      {children}
    </Box>
  );
};

export default ScrollReveal;
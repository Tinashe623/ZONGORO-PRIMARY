import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) => {
  const getInitialState = (): { opacity: number; x?: number; y?: number } => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -30 };
      case 'right':
        return { opacity: 0, x: 30 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const variants: Variants = {
    hidden: getInitialState(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return (
    <Box
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
    >
      {children}
    </Box>
  );
};

export default ScrollReveal;
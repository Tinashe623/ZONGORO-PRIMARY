import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

const ScrollProgress = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const scaleX = reduceMotion ? scrollYProgress : spring;

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #820000, #2D6A4F)',
        boxShadow: '0 0 12px rgba(130, 0, 0, 0.45), 0 1px 0 rgba(255,255,255,0.15)',
        zIndex: 1500,
      }}
    />
  );
};

export default ScrollProgress;

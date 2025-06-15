
import { motion, AnimatePresence } from 'framer-motion';
import SlideCard from './SlideCard';

interface SlideAnimationWrapperProps {
  currentSlide: number;
  slide: any;
  direction: number;
}

const SlideAnimationWrapper = ({ currentSlide, slide, direction }: SlideAnimationWrapperProps) => {
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.7,
      rotateY: direction > 0 ? 60 : -60,
      rotateX: 15,
      z: -300,
      filter: "blur(15px) brightness(0.8)",
      skewX: direction > 0 ? 10 : -10,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      filter: "blur(0px) brightness(1)",
      skewX: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.7,
      rotateY: direction < 0 ? 60 : -60,
      rotateX: -15,
      z: -300,
      filter: "blur(15px) brightness(0.8)",
      skewX: direction < 0 ? 10 : -10,
    })
  };

  return (
    <AnimatePresence initial={false} custom={direction} mode="wait">
      <motion.div
        key={currentSlide}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
          mass: 0.8,
          x: { 
            type: "spring", 
            stiffness: 200, 
            damping: 30,
            duration: 0.8 
          },
          opacity: { 
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
          },
          scale: { 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          },
          rotateY: { 
            duration: 1.0, 
            ease: [0.175, 0.885, 0.32, 1.275]
          },
          rotateX: {
            duration: 0.8,
            ease: "easeOut"
          },
          filter: { 
            duration: 0.6,
            ease: "easeInOut"
          },
          skewX: {
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1]
          }
        }}
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden"
        }}
      >
        <SlideCard slide={slide} />
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideAnimationWrapper;

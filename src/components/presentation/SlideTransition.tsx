
import { motion } from 'framer-motion';
import SlideAnimationWrapper from './transitions/SlideAnimationWrapper';

interface SlideTransitionProps {
  currentSlide: number;
  slide: any;
  direction: number;
}

const SlideTransition = ({ currentSlide, slide, direction }: SlideTransitionProps) => {
  return (
    <motion.div 
      className="w-full max-w-7xl perspective-1500"
      style={{ perspective: "1500px" }}
    >
      <SlideAnimationWrapper
        currentSlide={currentSlide}
        slide={slide}
        direction={direction}
      />
    </motion.div>
  );
};

export default SlideTransition;

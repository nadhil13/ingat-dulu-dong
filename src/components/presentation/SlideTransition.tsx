
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import SlideRenderer from './SlideRenderer';

interface SlideTransitionProps {
  currentSlide: number;
  slide: any;
  direction: number;
}

const SlideTransition = ({ currentSlide, slide, direction }: SlideTransitionProps) => {
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
    <motion.div 
      className="w-full max-w-7xl perspective-1500"
      style={{ perspective: "1500px" }}
    >
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
          <motion.div
            whileHover={{ 
              scale: 1.015,
              rotateX: 1,
              rotateY: 1.5,
              transition: { 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            className="transform-gpu will-change-transform"
          >
            <Card className="bg-white/97 backdrop-blur-3xl border-2 border-blue-200/60 shadow-2xl min-h-[550px] md:min-h-[650px] overflow-hidden relative">
              {/* Enhanced Card Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-purple-400/20 to-pink-400/15 rounded-lg"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.015, 1],
                  rotate: [0, 0.5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1]
                }}
              />
              
              {/* Subtle gradient overlay for better text readability */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-50/10 rounded-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <CardContent className="p-8 md:p-14 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    filter: "blur(0px)"
                  }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 1.0,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <SlideRenderer slide={slide} />
                </motion.div>
              </CardContent>

              {/* Corner accent elements */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400/20 to-transparent"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/20 to-transparent"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </Card>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SlideTransition;

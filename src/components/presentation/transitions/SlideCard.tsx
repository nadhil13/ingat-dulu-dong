
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import SlideRenderer from '../SlideRenderer';

interface SlideCardProps {
  slide: any;
}

const SlideCard = ({ slide }: SlideCardProps) => {
  return (
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
  );
};

export default SlideCard;

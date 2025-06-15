
import { motion } from 'framer-motion';

interface SlideIndicatorsProps {
  currentSlide: number;
  totalSlides: number;
  onGoToSlide: (index: number) => void;
}

const SlideIndicators = ({
  currentSlide,
  totalSlides,
  onGoToSlide
}: SlideIndicatorsProps) => {
  return (
    <div className="flex space-x-3 overflow-x-auto max-w-full px-2">
      {Array.from({ length: totalSlides }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onGoToSlide(index)}
          className={`relative rounded-full transition-all flex-shrink-0 ${
            index === currentSlide 
              ? 'w-4 h-4 bg-white shadow-2xl' 
              : 'w-3 h-3 bg-white/50 hover:bg-white/70'
          }`}
          whileHover={{ 
            scale: 1.4,
            boxShadow: "0 0 20px rgba(255,255,255,0.8)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={index === currentSlide ? { 
            scale: [1.2, 1.5, 1.2],
            boxShadow: [
              "0 0 10px rgba(59, 130, 246, 0.8)",
              "0 0 20px rgba(168, 85, 247, 0.8)",
              "0 0 10px rgba(59, 130, 246, 0.8)"
            ]
          } : {}}
          transition={{ 
            scale: { duration: 2, repeat: Infinity },
            boxShadow: { duration: 3, repeat: Infinity }
          }}
        >
          {index === currentSlide && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default SlideIndicators;

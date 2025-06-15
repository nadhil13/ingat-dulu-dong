
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SlideIndicators from './SlideIndicators';

interface NavigationFooterProps {
  currentSlide: number;
  totalSlides: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
}

const NavigationFooter = ({
  currentSlide,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onGoToSlide
}: NavigationFooterProps) => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative z-20 p-4 bg-black/30 backdrop-blur-3xl border-t border-white/40"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10"
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ backgroundSize: '200% 100%' }}
      />
      
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 relative z-10">
        <motion.div 
          whileHover={{ scale: 1.05, x: -5 }} 
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            onClick={onPrevSlide} 
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium w-full md:w-auto transition-all duration-500 relative overflow-hidden group shadow-2xl"
            disabled={currentSlide === 0}
          >
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ x: [-50, 50, -50] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <ChevronLeft className="w-4 h-4 mr-2 relative z-10" />
            <span className="relative z-10">Sebelumnya</span>
          </Button>
        </motion.div>

        <SlideIndicators
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onGoToSlide={onGoToSlide}
        />

        <motion.div 
          whileHover={{ scale: 1.05, x: 5 }} 
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            onClick={onNextSlide} 
            className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium w-full md:w-auto transition-all duration-500 relative overflow-hidden group shadow-2xl"
            disabled={currentSlide === totalSlides - 1}
          >
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ x: [50, -50, 50] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="relative z-10">Selanjutnya</span>
            <ChevronRight className="w-4 h-4 ml-2 relative z-10" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavigationFooter;

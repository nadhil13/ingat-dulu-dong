
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  isAutoPlay: boolean;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
  onToggleAutoPlay: () => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  isAutoPlay,
  onPrevSlide,
  onNextSlide,
  onGoToSlide,
  onToggleAutoPlay
}: SlideNavigationProps) => {
  return (
    <>
      {/* Navigation Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 p-4 bg-black/20 backdrop-blur-2xl border-b border-white/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="text-white hover:bg-white/20 font-medium">
                <Home className="w-4 h-4 mr-2" />
                Beranda
              </Button>
            </motion.div>
          </Link>
          
          <div className="text-white text-center">
            <motion.h1 
              className="text-lg md:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Metode Dekomposisi LU Gauss
            </motion.h1>
            <p className="text-sm opacity-90">Slide {currentSlide + 1} dari {totalSlides}</p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={onToggleAutoPlay}
              className={`font-medium transition-all duration-300 ${isAutoPlay ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"}`}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAutoPlay ? "Pause" : "Auto Play"}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 p-4 bg-black/20 backdrop-blur-2xl border-t border-white/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={onPrevSlide} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium w-full md:w-auto transition-all duration-300"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Sebelumnya
            </Button>
          </motion.div>

          <div className="flex space-x-2 overflow-x-auto max-w-full px-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => onGoToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={index === currentSlide ? { scale: [1.25, 1.4, 1.25] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={onNextSlide} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium w-full md:w-auto transition-all duration-300"
              disabled={currentSlide === totalSlides - 1}
            >
              Selanjutnya
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SlideNavigation;

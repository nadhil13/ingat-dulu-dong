
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home, Play, Pause, Sparkles } from 'lucide-react';
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
      {/* Navigation Header with Enhanced Animation */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 p-4 bg-black/30 backdrop-blur-3xl border-b border-white/40"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4 relative z-10">
          <Link to="/">
            <motion.div 
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.4 }
              }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="ghost" className="text-white hover:bg-white/20 font-medium relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ scale: [0, 1] }}
                  transition={{ duration: 0.3 }}
                />
                <Home className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Beranda</span>
              </Button>
            </motion.div>
          </Link>
          
          <div className="text-white text-center relative">
            <motion.h1 
              className="text-lg md:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent relative"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
                textShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 30px rgba(168, 85, 247, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ 
                backgroundPosition: { duration: 6, repeat: Infinity },
                textShadow: { duration: 4, repeat: Infinity }
              }}
              style={{ backgroundSize: '200% 100%' }}
            >
              <Sparkles className="inline w-6 h-6 mr-2 animate-pulse" />
              Metode Dekomposisi LU Gauss
            </motion.h1>
            <motion.p 
              className="text-sm opacity-90"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Slide {currentSlide + 1} dari {totalSlides}
            </motion.p>
          </div>

          <motion.div 
            whileHover={{ 
              scale: 1.1,
              rotate: [0, 3, -3, 0],
              transition: { duration: 0.5 }
            }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={onToggleAutoPlay}
              className={`font-medium transition-all duration-500 relative overflow-hidden group ${
                isAutoPlay 
                  ? "bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-700 hover:to-emerald-800" 
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:to-purple-800"
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={isAutoPlay ? { x: [-100, 100] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {isAutoPlay ? <Pause className="w-4 h-4 mr-2 relative z-10" /> : <Play className="w-4 h-4 mr-2 relative z-10" />}
              <span className="relative z-10">{isAutoPlay ? "Pause" : "Auto Play"}</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Navigation with Enhanced Effects */}
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
    </>
  );
};

export default SlideNavigation;

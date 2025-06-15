
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, CheckCircle, BookOpen } from 'lucide-react';

interface DefaultSlideProps {
  title: string;
  content: string;
  details?: string[];
}

const DefaultSlide = ({ title, content, details }: DefaultSlideProps) => {
  const getRandomIcon = () => {
    const icons = [ArrowRight, Sparkles, Target, Zap, CheckCircle, BookOpen];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className="space-y-8 min-h-[450px] relative">
      {/* Enhanced Background Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Enhanced Title with Better Typography */}
      <motion.h1 
        className="text-3xl md:text-5xl lg:text-6xl font-black text-center relative leading-tight"
        initial={{ opacity: 0, y: -60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 }
        }}
      >
        <motion.span
          className="bg-gradient-to-r from-blue-800 via-purple-700 to-blue-900 bg-clip-text text-transparent font-extrabold"
          animate={{ 
            backgroundPosition: ['0%', '100%', '0%'],
            textShadow: [
              '0 0 40px rgba(59, 130, 246, 0.3)',
              '0 0 60px rgba(168, 85, 247, 0.4)',
              '0 0 40px rgba(59, 130, 246, 0.3)'
            ]
          }}
          transition={{ 
            backgroundPosition: { duration: 8, repeat: Infinity },
            textShadow: { duration: 4, repeat: Infinity }
          }}
          style={{ backgroundSize: '300% 100%' }}
        >
          {title}
        </motion.span>
        
        {/* Enhanced Animated Underline */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full shadow-lg"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80%", opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
        />
      </motion.h1>
      
      {/* Enhanced Content Box */}
      <motion.div 
        className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold relative p-8 bg-gradient-to-r from-blue-50/80 via-white/90 to-purple-50/80 rounded-3xl border-2 border-blue-100/60 shadow-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-blue-100/30 rounded-3xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.span
          className="relative z-10 leading-relaxed font-bold text-gray-900"
          animate={{
            color: ['#1F2937', '#3B82F6', '#8B5CF6', '#1F2937']
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          {content}
        </motion.span>

        {/* Enhanced Floating Sparkle */}
        <motion.div
          className="absolute top-4 right-4 text-blue-500"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Enhanced Details List */}
      {details && (
        <motion.div 
          className="space-y-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
        >
          {details.map((detail, index) => {
            const IconComponent = getRandomIcon();
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  delay: 0.9 + index * 0.2, 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="flex items-start space-x-6 p-7 bg-gradient-to-r from-blue-50/90 via-white/95 to-purple-50/90 rounded-2xl border-l-6 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden backdrop-blur-sm"
                whileHover={{ 
                  x: 12,
                  scale: 1.03,
                  borderLeftWidth: "8px",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Enhanced Background Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1 }}
                />

                <motion.div
                  className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-2xl text-white shadow-xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, delay: index * 0.7 }
                  }}
                  whileHover={{ scale: 1.25, transition: { duration: 0.3 } }}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.div>

                <motion.span 
                  className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold relative z-10 leading-relaxed"
                  whileHover={{ 
                    color: "#3B82F6",
                    textShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {detail}
                </motion.span>

                {/* Enhanced Pulse Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Enhanced Corner Decoration */}
                <motion.div
                  className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.4
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Enhanced Bottom Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, -25, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, delay: 3 }}
      />
    </div>
  );
};

export default DefaultSlide;

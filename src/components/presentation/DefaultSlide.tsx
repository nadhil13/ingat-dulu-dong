
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

interface DefaultSlideProps {
  title: string;
  content: string;
  details?: string[];
}

const DefaultSlide = ({ title, content, details }: DefaultSlideProps) => {
  const getRandomIcon = () => {
    const icons = [ArrowRight, Sparkles, Target, Zap];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <div className="space-y-6 min-h-[400px] relative">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.h1 
        className="text-2xl md:text-4xl font-bold text-blue-800 mb-6 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.02,
          textShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
        }}
      >
        <motion.span
          className="bg-gradient-to-r from-blue-800 via-purple-700 to-blue-900 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: '200% 100%' }}
        >
          {title}
        </motion.span>
        
        {/* Animated Underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </motion.h1>
      
      <motion.div 
        className="text-lg md:text-xl text-gray-700 mb-6 font-medium relative p-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-2xl border border-blue-100/50 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-blue-100/20 rounded-2xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <motion.span
          className="relative z-10"
          animate={{
            color: ['#374151', '#4F46E5', '#374151']
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {content}
        </motion.span>

        {/* Floating Sparkle */}
        <motion.div
          className="absolute top-2 right-2 text-blue-400"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {details && (
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {details.map((detail, index) => {
            const IconComponent = getRandomIcon();
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                className="flex items-start space-x-4 p-5 bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                whileHover={{ 
                  x: 8,
                  scale: 1.02,
                  borderLeftWidth: "6px"
                }}
              >
                {/* Animated Background Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />

                <motion.div
                  className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white shadow-lg"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: index * 0.5 }
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <IconComponent className="w-4 h-4" />
                </motion.div>

                <motion.span 
                  className="text-gray-700 font-medium relative z-10 leading-relaxed"
                  whileHover={{ 
                    color: "#3B82F6",
                    textShadow: "0 0 10px rgba(59, 130, 246, 0.3)"
                  }}
                >
                  {detail}
                </motion.span>

                {/* Pulse Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Corner Decoration */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-60"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Bottom Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0],
          y: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      />
    </div>
  );
};

export default DefaultSlide;

import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Zap, Stars } from 'lucide-react';

interface CoverSlideProps {
  title: string;
  subtitle: string;
  content: string;
}

const CoverSlide = ({ title, subtitle, content }: CoverSlideProps) => {
  const iconComponents = [BookOpen, Sparkles, Zap, Stars];

  return (
    <div className="text-center space-y-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
      {/* Floating Icons Background */}
      {[...Array(6)].map((_, i) => {
        const IconComponent = iconComponents[i % 4];
        return (
          <motion.div
            key={i}
            className="absolute text-blue-200/20"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              fontSize: `${20 + Math.random() * 30}px`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5
            }}
          >
            <IconComponent className="w-full h-full" />
          </motion.div>
        );
      })}

      <motion.h1 
        className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 bg-clip-text text-transparent leading-tight relative z-10"
        style={{ backgroundSize: '200% 100%' }}
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          scale: [1, 1.03, 1],
          backgroundPosition: ['0%', '100%', '0%'],
          textShadow: [
            '0 0 30px rgba(59, 130, 246, 0.5)',
            '0 0 50px rgba(168, 85, 247, 0.7)',
            '0 0 30px rgba(59, 130, 246, 0.5)'
          ]
        }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          backgroundPosition: { duration: 5, repeat: Infinity },
          textShadow: { duration: 3, repeat: Infinity }
        }}
      >
        {title.split(' ').map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.1,
              color: "#8B5CF6",
              transition: { duration: 0.3 }
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      
      <motion.h2 
        className="text-lg md:text-2xl lg:text-3xl text-gray-700 font-semibold relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        whileHover={{
          scale: 1.05,
          color: "#374151",
          textShadow: "0 0 20px rgba(0,0,0,0.3)"
        }}
      >
        <motion.span
          animate={{ 
            background: [
              'linear-gradient(45deg, #374151, #6B7280)',
              'linear-gradient(45deg, #6B7280, #9CA3AF)',
              'linear-gradient(45deg, #374151, #6B7280)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="bg-clip-text text-transparent"
          style={{ backgroundSize: '200% 100%' }}
        >
          {subtitle}
        </motion.span>
      </motion.h2>

      
      <motion.div 
        className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl relative overflow-hidden group cursor-pointer"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 150 }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          y: -5
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated Background Shine */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: [-100, 300] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Pulsing Ring Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-white/50 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <BookOpen className="w-7 h-7 relative z-10" />
        </motion.div>
        
        <motion.span
          className="relative z-10"
          animate={{ 
            textShadow: [
              '0 0 10px rgba(255,255,255,0.5)',
              '0 0 20px rgba(255,255,255,0.8)',
              '0 0 10px rgba(255,255,255,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {content}
        </motion.span>

        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default CoverSlide;

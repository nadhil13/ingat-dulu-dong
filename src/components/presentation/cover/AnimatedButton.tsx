
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface AnimatedButtonProps {
  content: string;
}

const AnimatedButton = ({ content }: AnimatedButtonProps) => {
  return (
    <motion.div 
      className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl relative overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 150 }}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
        y: -5,
        backgroundColor: "#1D4ED8"
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
        className="relative z-10 text-white"
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
  );
};

export default AnimatedButton;

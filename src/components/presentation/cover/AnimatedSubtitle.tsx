
import { motion } from 'framer-motion';

interface AnimatedSubtitleProps {
  subtitle: string;
}

const AnimatedSubtitle = ({ subtitle }: AnimatedSubtitleProps) => {
  return (
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
  );
};

export default AnimatedSubtitle;

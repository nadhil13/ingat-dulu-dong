
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  title: string;
}

const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
  return (
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
  );
};

export default AnimatedTitle;

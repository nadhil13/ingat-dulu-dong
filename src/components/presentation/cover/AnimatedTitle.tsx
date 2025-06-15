
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  title: string;
}

const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
  return (
    <motion.h1 
      className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight relative z-10"
      style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: [1, 1.03, 1]
      }}
      transition={{ 
        duration: 1.2, 
        ease: "easeOut",
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {title.split(' ').map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-3 text-gray-900"
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
            color: "#374151",
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

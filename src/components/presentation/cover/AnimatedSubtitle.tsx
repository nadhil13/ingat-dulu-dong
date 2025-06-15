
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
        textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
      }}
    >
      <motion.span
        className="text-gray-700"
      >
        {subtitle}
      </motion.span>
    </motion.h2>
  );
};

export default AnimatedSubtitle;


import { motion } from 'framer-motion';

interface SlideTitleProps {
  title: string;
}

const SlideTitle = ({ title }: SlideTitleProps) => {
  return (
    <motion.h1 
      className="text-3xl md:text-5xl lg:text-6xl font-black text-center relative leading-tight text-gray-900"
      initial={{ opacity: 0, y: -60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      <motion.span
        className="font-extrabold text-gray-900"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
      >
        {title}
      </motion.span>
      
      {/* Enhanced Animated Underline */}
      <motion.div
        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-2 bg-blue-600 rounded-full shadow-lg"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "80%", opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
      />
    </motion.h1>
  );
};

export default SlideTitle;

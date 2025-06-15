
import { motion } from 'framer-motion';

const BackgroundDecorations = () => {
  return (
    <>
      {/* Top Right Decoration */}
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

      {/* Bottom Left Decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-100/30 to-gray-200/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, -25, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, delay: 3 }}
      />
    </>
  );
};

export default BackgroundDecorations;

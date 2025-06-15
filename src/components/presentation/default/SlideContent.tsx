
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SlideContentProps {
  content: string;
}

const SlideContent = ({ content }: SlideContentProps) => {
  return (
    <motion.div 
      className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold relative p-8 bg-white/90 rounded-3xl border-2 border-gray-200 shadow-xl backdrop-blur-sm"
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
        className="absolute inset-0 bg-gray-50/30 rounded-3xl"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <motion.span
        className="relative z-10 leading-relaxed font-bold text-gray-900"
      >
        {content}
      </motion.span>

      {/* Enhanced Floating Sparkle */}
      <motion.div
        className="absolute top-4 right-4 text-gray-600"
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
  );
};

export default SlideContent;

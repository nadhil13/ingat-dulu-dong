
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface CoverSlideProps {
  title: string;
  subtitle: string;
  content: string;
}

const CoverSlide = ({ title, subtitle, content }: CoverSlideProps) => {
  return (
    <div className="text-center space-y-8 min-h-[400px] flex flex-col justify-center">
      <motion.h1 
        className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 bg-clip-text text-transparent leading-tight"
        animate={{ 
          scale: [1, 1.02, 1],
          backgroundPosition: ['0%', '100%', '0%']
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundSize: '200% 100%' }}
      >
        {title}
      </motion.h1>
      <motion.h2 
        className="text-lg md:text-2xl lg:text-3xl text-gray-700 font-semibold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {subtitle}
      </motion.h2>
      <motion.div 
        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
      >
        <BookOpen className="w-6 h-6" />
        {content}
      </motion.div>
    </div>
  );
};

export default CoverSlide;

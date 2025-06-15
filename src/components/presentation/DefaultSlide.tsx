
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface DefaultSlideProps {
  title: string;
  content: string;
  details?: string[];
}

const DefaultSlide = ({ title, content, details }: DefaultSlideProps) => {
  return (
    <div className="space-y-6 min-h-[400px]">
      <motion.h1 
        className="text-2xl md:text-4xl font-bold text-blue-800 mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>
      
      <motion.div 
        className="text-lg md:text-xl text-gray-700 mb-6 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {content}
      </motion.div>

      {details && (
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
              className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-100"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{detail}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DefaultSlide;

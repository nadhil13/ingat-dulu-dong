
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, CheckCircle, BookOpen } from 'lucide-react';

interface SlideDetailsProps {
  details: string[];
}

const SlideDetails = ({ details }: SlideDetailsProps) => {
  const getRandomIcon = () => {
    const icons = [ArrowRight, Sparkles, Target, Zap, CheckCircle, BookOpen];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <motion.div 
      className="space-y-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
    >
      {details.map((detail, index) => {
        const IconComponent = getRandomIcon();
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 0.9 + index * 0.2, 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="flex items-start space-x-6 p-7 bg-white/95 rounded-2xl border-l-6 border-blue-600 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden backdrop-blur-sm"
            whileHover={{ 
              x: 12,
              scale: 1.03,
              borderLeftWidth: "8px",
              transition: { duration: 0.3 }
            }}
          >
            {/* Enhanced Background Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/40 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1 }}
            />

            <motion.div
              className="flex-shrink-0 p-3 bg-blue-600 rounded-2xl text-white shadow-xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.15, 1]
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, delay: index * 0.7 }
              }}
              whileHover={{ scale: 1.25, transition: { duration: 0.3 } }}
            >
              <IconComponent className="w-6 h-6" />
            </motion.div>

            <motion.span 
              className="text-lg md:text-xl lg:text-2xl text-gray-800 font-bold relative z-10 leading-relaxed"
              whileHover={{ 
                color: "#1F2937",
                transition: { duration: 0.3 }
              }}
            >
              {detail}
            </motion.span>

            {/* Enhanced Pulse Effect */}
            <motion.div
              className="absolute inset-0 bg-gray-100/5 rounded-2xl opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Enhanced Corner Decoration */}
            <motion.div
              className="absolute top-3 right-3 w-3 h-3 bg-gray-400 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.4
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SlideDetails;

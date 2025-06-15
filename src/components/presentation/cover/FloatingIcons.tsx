
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Zap, Stars } from 'lucide-react';

const FloatingIcons = () => {
  const iconComponents = [BookOpen, Sparkles, Zap, Stars];

  return (
    <>
      {[...Array(6)].map((_, i) => {
        const IconComponent = iconComponents[i % 4];
        return (
          <motion.div
            key={i}
            className="absolute text-blue-200/20"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              fontSize: `${20 + Math.random() * 30}px`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5
            }}
          >
            <IconComponent className="w-full h-full" />
          </motion.div>
        );
      })}
    </>
  );
};

export default FloatingIcons;

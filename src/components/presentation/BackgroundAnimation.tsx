
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0">
      {/* Enhanced Gradient Background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 70%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 70%), radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.3) 0%, transparent 70%), radial-gradient(circle at 60% 80%, rgba(239, 68, 68, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 60% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 70%), radial-gradient(circle at 20% 60%, rgba(245, 158, 11, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 70%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)'
          ]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles - Enhanced */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            background: [
              'rgba(59, 130, 246, 0.6)',
              'rgba(168, 85, 247, 0.6)',
              'rgba(34, 197, 94, 0.6)',
              'rgba(239, 68, 68, 0.6)',
              'rgba(245, 158, 11, 0.6)'
            ][Math.floor(Math.random() * 5)]
          }}
          animate={{
            y: [0, -200 - Math.random() * 100, 0],
            x: [0, Math.sin(i) * 150 + Math.random() * 100 - 50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.8, 1],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: 18 + i * 2 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute border-2 border-white/20"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            width: `${40 + Math.random() * 60}px`,
            height: `${40 + Math.random() * 60}px`,
            borderRadius: i % 2 === 0 ? '50%' : '0%'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, Math.sin(i) * 50, 0],
            y: [0, Math.cos(i) * 50, 0]
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
        />
      ))}

      {/* Pulsing Rings */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute border-2 border-blue-400/20 rounded-full"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Shooting Stars */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            x: [0, 300, 600],
            y: [0, 150, 300],
            opacity: [0, 1, 0],
            scale: [0, 2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 8 + Math.random() * 5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;

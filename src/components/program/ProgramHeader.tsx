
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, Copy, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramHeaderProps {
  onCopyCode: () => void;
  onRunDemo: () => void;
  isRunning: boolean;
}

const ProgramHeader = ({ onCopyCode, onRunDemo, isRunning }: ProgramHeaderProps) => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-20 p-4 bg-white/15 backdrop-blur-2xl border-b border-white/30"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <Link to="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" className="text-white hover:bg-white/20 font-medium">
              <Home className="w-4 h-4 mr-2" />
              Beranda
            </Button>
          </motion.div>
        </Link>
        
        <div className="text-white text-center">
          <motion.h1 
            className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% 100%' }}
          >
            Program C++ - Dekomposisi LU Gauss
          </motion.h1>
          <p className="text-sm opacity-90">Implementasi dengan Grafik Realtime</p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={onCopyCode} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-sm font-medium">
              <Copy className="w-4 h-4 mr-2" />
              Salin Kode
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={onRunDemo} 
              disabled={isRunning}
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-sm font-medium"
            >
              {isRunning ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                </motion.div>
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {isRunning ? "Running..." : "Demo + Grafik"}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgramHeader;

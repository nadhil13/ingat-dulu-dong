
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

interface MatrixDisplayProps {
  matrixExample: {
    description: string;
    matrices: Record<string, string>;
  };
}

const MatrixDisplay = ({ matrixExample }: MatrixDisplayProps) => {
  const matrixEntries = Object.entries(matrixExample.matrices);

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Calculator className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-bold text-blue-800">{matrixExample.description}</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matrixEntries.map(([label, matrix], index) => (
          <motion.div
            key={label}
            className="bg-white/80 p-4 rounded-xl border border-blue-300 shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
            }}
          >
            <div className="text-center mb-3">
              <span className="text-lg font-bold text-blue-700">{label}</span>
            </div>
            <div className="text-center">
              <pre className="text-sm md:text-base font-mono text-gray-800 leading-relaxed whitespace-pre-wrap">
                {matrix}
              </pre>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MatrixDisplay;

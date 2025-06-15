
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface OutputTabProps {
  isRunning: boolean;
  outputLines: string[];
  executionStep: number;
  totalLines: number;
}

const OutputTab = ({ isRunning, outputLines, executionStep, totalLines }: OutputTabProps) => {
  const staticOutput = `╔══════════════════════════════════════════╗
║        METODE DEKOMPOSISI LU GAUSS       ║
║     Solusi Sistem Persamaan Linier      ║
║              Kelompok 5                  ║
╚══════════════════════════════════════════╝

🚀 Klik tombol "Demo + Grafik" untuk menjalankan program secara realtime!

📊 Fitur Realtime:
• Output program muncul bertahap (seperti eksekusi asli)
• Grafik konvergensi diperbarui seiring progress
• Performance analysis berdasarkan step eksekusi
• Visual feedback dengan indikator running

💡 Simulasi akan menampilkan:
✓ Proses dekomposisi LU step-by-step
✓ Eliminasi Gauss dengan pivoting
✓ Forward & backward substitution
✓ Verifikasi solusi otomatis
✓ Statistik performa realtime

Tekan tombol "Demo + Grafik" di header untuk memulai! 🚀`;

  // Show executed output if we have any, otherwise show static content
  const hasExecutedOutput = outputLines.length > 0;
  const showExecutionContent = isRunning || hasExecutedOutput;

  return (
    <Card className="bg-white/95 backdrop-blur-2xl border-2 border-blue-200/50 shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-blue-800 text-lg font-bold">
          <Play className="w-6 h-6 mr-3" />
          Output Demo Program (Realtime)
          {isRunning && (
            <motion.div 
              className="ml-3 flex items-center text-green-600"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <span className="text-sm font-medium">Executing...</span>
            </motion.div>
          )}
          {!isRunning && hasExecutedOutput && (
            <div className="ml-3 flex items-center text-blue-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              <span className="text-sm font-medium">Completed</span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-black rounded-lg p-4 overflow-auto max-h-[600px] shadow-inner relative">
          {isRunning && (
            <div className="absolute top-2 right-2 bg-gray-800 rounded px-2 py-1">
              <div className="text-green-400 text-xs">
                Progress: {Math.round((executionStep / totalLines) * 100)}%
              </div>
            </div>
          )}
          
          <pre className="text-green-400 font-mono text-sm leading-relaxed">
            {showExecutionContent ? (
              <motion.div>
                {outputLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={line.includes('✓') || line.includes('🎯') || line.includes('✅') ? 'text-yellow-400' : ''}
                  >
                    {line}
                  </motion.div>
                ))}
                {isRunning && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-green-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ) : (
              <code>{staticOutput}</code>
            )}
          </pre>
        </div>
        
        {!showExecutionContent && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-700 font-medium">
              💡 Tips: Klik tombol "Demo + Grafik" di bagian header untuk melihat simulasi eksekusi program C++ secara realtime!
            </p>
          </div>
        )}

        {!isRunning && hasExecutedOutput && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
            <p className="text-green-700 font-medium">
              ✅ Program berhasil dijalankan! Output di atas menunjukkan hasil eksekusi terakhir.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OutputTab;

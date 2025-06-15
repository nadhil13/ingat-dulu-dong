import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

interface GraphsTabProps {
  convergenceData: any[];
  performanceData: any[];
  isRunning: boolean;
}

const GraphsTab = ({ convergenceData, performanceData, isRunning }: GraphsTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="bg-white/95 backdrop-blur-2xl border-2 border-blue-200/50 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-blue-800 text-lg font-bold">
              <TrendingUp className="w-6 h-6 mr-3" />
              Konvergensi Error (Realtime)
              {isRunning && (
                <motion.div 
                  className="ml-2 flex items-center"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1" />
                  <span className="text-xs text-green-600 font-medium">LIVE</span>
                </motion.div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={convergenceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                  <XAxis 
                    dataKey="iteration" 
                    stroke="#3b82f6"
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Iterasi', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="#3b82f6"
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Error', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255,255,255,0.95)', 
                      border: '1px solid #3b82f6',
                      borderRadius: '8px'
                    }}
                    formatter={(value: any, name: string) => [
                      typeof value === 'number' ? value.toFixed(6) : value,
                      name
                    ]}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="error" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                    name="Error"
                    animationDuration={300}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="residual" 
                    stroke="#f59e0b" 
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                    name="Residual"
                    animationDuration={300}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                {isRunning 
                  ? `📊 Grafik diperbarui secara realtime berdasarkan eksekusi matriks ${convergenceData[0]?.matrixSize || 3}x${convergenceData[0]?.matrixSize || 3}...` 
                  : "Grafik menunjukkan konvergensi error dan residual selama proses iterasi LU decomposition."
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-white/95 backdrop-blur-2xl border-2 border-blue-200/50 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-blue-800 text-lg font-bold">
              <BarChart3 className="w-6 h-6 mr-3" />
              Performance Analysis
              {isRunning && (
                <motion.div 
                  className="ml-2 flex items-center"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-1" />
                  <span className="text-xs text-orange-600 font-medium">ACTIVE</span>
                </motion.div>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                  <XAxis 
                    dataKey="matrixSize" 
                    stroke="#3b82f6"
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Ukuran Matriks', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    stroke="#3b82f6"
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Waktu (ms)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255,255,255,0.95)', 
                      border: '1px solid #3b82f6',
                      borderRadius: '8px'
                    }}
                    formatter={(value: any, name: string) => [
                      typeof value === 'number' ? value.toFixed(3) + ' ms' : value,
                      name
                    ]}
                  />
                  <Legend />
                  <Bar 
                    dataKey="luTime" 
                    fill="#3b82f6" 
                    name="LU Decomposition"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="forwardTime" 
                    fill="#10b981" 
                    name="Forward Substitution"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="backwardTime" 
                    fill="#f59e0b" 
                    name="Backward Substitution"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-700">
                {isRunning 
                  ? `⚡ Analisis performa sedang berjalan berdasarkan input pengguna realtime...` 
                  : "Analisis performa menunjukkan waktu eksekusi untuk berbagai ukuran matriks."
                }
              </p>
              {performanceData.some(item => item.isActive) && (
                <p className="text-xs text-green-600 mt-1 font-medium">
                  🎯 Matriks aktif: {performanceData.find(item => item.isActive)?.matrixSize}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="lg:col-span-2"
      >
        <Card className="bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-800 text-lg font-bold">
              <BarChart3 className="w-6 h-6 mr-3" />
              Cara Implementasi Grafik Realtime dalam Program C++
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-700 mb-3">📊 Library yang Dibutuhkan:</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• <strong>SFML:</strong> Untuk grafik 2D realtime</li>
                  <li>• <strong>OpenGL:</strong> Untuk rendering grafik</li>
                  <li>• <strong>ImGui:</strong> Untuk interface grafis</li>
                  <li>• <strong>Matplotlib-cpp:</strong> Python binding untuk C++</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 mb-3">🔧 Implementasi:</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Simpan data iterasi dalam vector</li>
                  <li>• Update grafik setiap step eliminasi</li>
                  <li>• Gunakan thread terpisah untuk rendering</li>
                  <li>• Export data ke format CSV untuk analisis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GraphsTab;

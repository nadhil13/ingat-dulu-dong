
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const ExplanationTab = () => {
  return (
    <Card className="bg-white/95 backdrop-blur-2xl border-2 border-blue-200/50 shadow-2xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-blue-800 text-lg font-bold">
          <FileText className="w-6 h-6 mr-3" />
          Penjelasan Program
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-blue-700 mb-3">🎯 Fitur Utama Program</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Class LUDecomposition:</strong> Implementasi lengkap algoritma dekomposisi LU</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Partial Pivoting:</strong> Penanganan kasus pivot nol untuk stabilitas numerik</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Forward & Backward Substitution:</strong> Solusi sistem persamaan lengkap</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span><strong>Verifikasi Otomatis:</strong> Cek kebenaran solusi dengan menghitung Ax = b</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-blue-700 mb-3">🔧 Struktur Program</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ol className="space-y-2 text-gray-700">
              <li><strong>1. Input:</strong> Matriks A dan vektor b</li>
              <li><strong>2. Dekomposisi:</strong> A = LU dengan pivoting</li>
              <li><strong>3. Substitusi Maju:</strong> Ly = Pb</li>
              <li><strong>4. Substitusi Mundur:</strong> Ux = y</li>
              <li><strong>5. Output:</strong> Solusi x dan verifikasi</li>
            </ol>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-xl font-bold text-blue-700 mb-3">💡 Keunggulan Implementasi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700">Efisiensi</h4>
              <p className="text-sm text-gray-600">Kompleksitas O(n³/3) untuk dekomposisi</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700">Stabilitas</h4>
              <p className="text-sm text-gray-600">Partial pivoting mencegah error numerik</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700">Fleksibilitas</h4>
              <p className="text-sm text-gray-600">Mendukung matriks ukuran variabel</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700">User-Friendly</h4>
              <p className="text-sm text-gray-600">Interface menu dan output detail</p>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ExplanationTab;

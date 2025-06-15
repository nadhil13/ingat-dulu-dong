
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Settings, Calculator, Play } from 'lucide-react';
import { toast } from 'sonner';

interface InteractiveInputTabProps {
  onRunWithInput: (inputData: any) => void;
  isRunning: boolean;
}

const InteractiveInputTab = ({ onRunWithInput, isRunning }: InteractiveInputTabProps) => {
  const [mode, setMode] = useState<'example' | 'manual'>('example');
  const [matrixSize, setMatrixSize] = useState(3);
  const [matrixA, setMatrixA] = useState<number[][]>([
    [2, 1, 1],
    [4, 3, 3],
    [8, 7, 9]
  ]);
  const [vectorB, setVectorB] = useState<number[]>([4, 10, 24]);

  const initializeMatrix = (size: number) => {
    const newMatrix = Array(size).fill(0).map(() => Array(size).fill(0));
    const newVector = Array(size).fill(0);
    setMatrixA(newMatrix);
    setVectorB(newVector);
  };

  const handleMatrixSizeChange = (size: number) => {
    if (size < 2 || size > 5) {
      toast.error("Ukuran matriks harus antara 2x2 sampai 5x5");
      return;
    }
    setMatrixSize(size);
    initializeMatrix(size);
  };

  const handleMatrixChange = (i: number, j: number, value: string) => {
    const newMatrix = [...matrixA];
    newMatrix[i][j] = parseFloat(value) || 0;
    setMatrixA(newMatrix);
  };

  const handleVectorChange = (i: number, value: string) => {
    const newVector = [...vectorB];
    newVector[i] = parseFloat(value) || 0;
    setVectorB(newVector);
  };

  const handleRun = () => {
    if (mode === 'manual') {
      // Validate input
      const hasZeroInMatrix = matrixA.some(row => row.some(val => val === 0));
      const hasZeroInVector = vectorB.some(val => val === 0);
      
      if (hasZeroInMatrix || hasZeroInVector) {
        toast.error("Mohon isi semua nilai matriks dan vektor (tidak boleh kosong atau 0)");
        return;
      }
    }

    const inputData = {
      mode,
      matrixSize,
      matrixA: mode === 'example' ? [[2, 1, 1], [4, 3, 3], [8, 7, 9]] : matrixA,
      vectorB: mode === 'example' ? [4, 10, 24] : vectorB
    };

    onRunWithInput(inputData);
  };

  const loadExample = (exampleType: string) => {
    switch(exampleType) {
      case 'simple':
        setMatrixA([[2, 1], [1, 3]]);
        setVectorB([3, 4]);
        setMatrixSize(2);
        break;
      case 'medium':
        setMatrixA([[2, 1, 1], [4, 3, 3], [8, 7, 9]]);
        setVectorB([4, 10, 24]);
        setMatrixSize(3);
        break;
      case 'complex':
        setMatrixA([[1, 2, 1, 1], [2, 1, 3, 2], [1, 3, 2, 1], [3, 1, 2, 4]]);
        setVectorB([6, 11, 7, 14]);
        setMatrixSize(4);
        break;
    }
    toast.success(`Contoh ${exampleType} berhasil dimuat!`);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/95 backdrop-blur-2xl border-2 border-blue-200/50 shadow-2xl">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center text-blue-800 text-lg font-bold">
            <Settings className="w-6 h-6 mr-3" />
            Input Interaktif - Pilih Data untuk Demo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-semibold text-gray-700 mb-3 block">
              Pilih Mode Input:
            </Label>
            <RadioGroup value={mode} onValueChange={(value: 'example' | 'manual') => setMode(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="example" id="example" />
                <Label htmlFor="example" className="cursor-pointer">
                  🚀 Gunakan Contoh Default (Otomatis)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="manual" id="manual" />
                <Label htmlFor="manual" className="cursor-pointer">
                  ✏️ Input Manual (Kustom)
                </Label>
              </div>
            </RadioGroup>
          </div>

          {mode === 'example' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4"
            >
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-700 font-medium mb-3">
                  📊 Pilih Tingkat Kompleksitas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => loadExample('simple')}
                    className="text-sm"
                  >
                    Simple (2x2)
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => loadExample('medium')}
                    className="text-sm"
                  >
                    Medium (3x3)
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => loadExample('complex')}
                    className="text-sm"
                  >
                    Complex (4x4)
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {mode === 'manual' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="size" className="text-sm font-medium">
                  Ukuran Matriks (n x n):
                </Label>
                <Input
                  id="size"
                  type="number"
                  min="2"
                  max="5"
                  value={matrixSize}
                  onChange={(e) => handleMatrixSizeChange(parseInt(e.target.value))}
                  className="w-20 mt-1"
                />
                <p className="text-xs text-gray-500 mt-1">Ukuran 2-5 didukung</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    Matriks A ({matrixSize}x{matrixSize}):
                  </Label>
                  <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${matrixSize}, 1fr)` }}>
                    {matrixA.slice(0, matrixSize).map((row, i) =>
                      row.slice(0, matrixSize).map((val, j) => (
                        <Input
                          key={`${i}-${j}`}
                          type="number"
                          step="0.1"
                          value={val}
                          onChange={(e) => handleMatrixChange(i, j, e.target.value)}
                          className="text-center text-sm"
                          placeholder={`a${i+1}${j+1}`}
                        />
                      ))
                    )}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-2 block">
                    Vektor b ({matrixSize}x1):
                  </Label>
                  <div className="space-y-2">
                    {vectorB.slice(0, matrixSize).map((val, i) => (
                      <Input
                        key={i}
                        type="number"
                        step="0.1"
                        value={val}
                        onChange={(e) => handleVectorChange(i, e.target.value)}
                        className="text-center"
                        placeholder={`b${i+1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleRun}
              disabled={isRunning}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3"
            >
              {isRunning ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="flex items-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Sedang Berjalan...
                </motion.div>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Jalankan Demo dengan Input Ini
                </>
              )}
            </Button>
          </motion.div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center text-green-800 text-lg font-bold">
            <Calculator className="w-6 h-6 mr-3" />
            Preview Input Saat Ini
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Matriks A:</h4>
              <div className="bg-white p-3 rounded border">
                {matrixA.slice(0, matrixSize).map((row, i) => (
                  <div key={i} className="flex justify-center space-x-2 mb-1">
                    <span>[</span>
                    {row.slice(0, matrixSize).map((val, j) => (
                      <span key={j} className="w-12 text-center">
                        {val.toFixed(1)}
                        {j < matrixSize - 1 && ','}
                      </span>
                    ))}
                    <span>]</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Vektor b:</h4>
              <div className="bg-white p-3 rounded border">
                {vectorB.slice(0, matrixSize).map((val, i) => (
                  <div key={i} className="text-center mb-1">
                    [ {val.toFixed(1)} ]
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveInputTab;

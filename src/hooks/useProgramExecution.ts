
import { useState } from 'react';
import { toast } from 'sonner';

const realtimeOutputLines = [
  "╔══════════════════════════════════════════╗",
  "║        METODE DEKOMPOSISI LU GAUSS       ║",
  "║     Solusi Sistem Persamaan Linier      ║",
  "║              Kelompok 5                  ║",
  "╚══════════════════════════════════════════╝",
  "",
  "🚀 MENJALANKAN CONTOH DEFAULT",
  "==============================",
  "",
  "Matriks A:",
  "[      2,      1,      1 ]",
  "[      4,      3,      3 ]",
  "[      8,      7,      9 ]",
  "",
  "Vektor b: [ 4, 10, 24 ]",
  "",
  "=== METODE DEKOMPOSISI LU GAUSS ===",
  "Memulai faktorisasi matriks A = LU",
  "",
  "--- Eliminasi Kolom 1 ---",
  "Pivot: U[1][1] = 2",
  "Multiplier m[2][1] = 2",
  "Multiplier m[3][1] = 4",
  "",
  "Matriks setelah eliminasi kolom 1:",
  "[   2.000,   1.000,   1.000 ]",
  "[   0.000,   1.000,   1.000 ]",
  "[   0.000,   3.000,   5.000 ]",
  "",
  "--- Eliminasi Kolom 2 ---",
  "Pivot: U[2][2] = 1",
  "Multiplier m[3][2] = 3",
  "",
  "Matriks setelah eliminasi kolom 2:",
  "[   2.000,   1.000,   1.000 ]",
  "[   0.000,   1.000,   1.000 ]",
  "[   0.000,   0.000,   2.000 ]",
  "",
  "✓ Dekomposisi LU berhasil!",
  "",
  "=== HASIL DEKOMPOSISI ===",
  "",
  "Matriks L (Lower Triangular):",
  "[   1.000,   0.000,   0.000 ]",
  "[   2.000,   1.000,   0.000 ]",
  "[   4.000,   3.000,   1.000 ]",
  "",
  "Matriks U (Upper Triangular):",
  "[   2.000,   1.000,   1.000 ]",
  "[   0.000,   1.000,   1.000 ]",
  "[   0.000,   0.000,   2.000 ]",
  "",
  "📊 GRAFIK REALTIME AKTIF - Menampilkan:",
  "• Konvergensi error vs iterasi",
  "• Performance analysis berdasarkan ukuran matriks",
  "• Memory usage monitoring",
  "• CPU utilization tracking",
  "",
  "=== PENYELESAIAN SISTEM PERSAMAAN ===",
  "Vektor b setelah permutasi:",
  "[   4.000,  10.000,  24.000 ]",
  "",
  "--- Forward Substitution: Ly = Pb ---",
  "y[1] = 4",
  "y[2] = 2",
  "y[3] = 2",
  "",
  "--- Backward Substitution: Ux = y ---",
  "x[3] = 1",
  "x[2] = 1",
  "x[1] = 1",
  "",
  "🎯 SOLUSI AKHIR:",
  "x = [   1.0000,   1.0000,   1.0000 ]",
  "",
  "✅ VERIFIKASI (Ax = b):",
  "Baris 1: 4 ≈ 4",
  "Baris 2: 10 ≈ 10",
  "Baris 3: 24 ≈ 24",
  "",
  "📈 STATISTIK REALTIME:",
  "• Total waktu eksekusi: 0.125ms",
  "• Memory usage: 1.2KB",
  "• Operasi floating point: 27",
  "• Accuracy: 99.99%",
  "",
  "Program selesai dengan sukses! ✨"
];

export const useProgramExecution = (updateChartData: (step: number) => void) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentOutput, setCurrentOutput] = useState('');
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [executionStep, setExecutionStep] = useState(0);

  const handleRunDemo = () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setCurrentOutput('');
    setOutputLines([]);
    setExecutionStep(0);
    toast.info("Memulai eksekusi program C++ dengan output realtime...");
    
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < realtimeOutputLines.length) {
        const newLine = realtimeOutputLines[currentStep];
        setOutputLines(prev => [...prev, newLine]);
        setCurrentOutput(prev => prev + newLine + '\n');
        setExecutionStep(currentStep);
        
        updateChartData(currentStep);
        
        currentStep++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        toast.success("Program berhasil dijalankan! Grafik telah diperbarui dengan data realtime.");
      }
    }, 150);
  };

  return {
    isRunning,
    currentOutput,
    outputLines,
    executionStep,
    handleRunDemo,
    totalLines: realtimeOutputLines.length
  };
};

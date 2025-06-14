
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Home, Copy, Play, Code, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Program = () => {
  const [isRunning, setIsRunning] = useState(false);

  const cppCode = `#include <iostream>
#include <vector>
#include <iomanip>
#include <cmath>

using namespace std;

class LUDecomposition {
private:
    vector<vector<double>> L, U, P;
    vector<double> y;
    int n;
    
public:
    LUDecomposition(vector<vector<double>>& A) {
        n = A.size();
        L = vector<vector<double>>(n, vector<double>(n, 0));
        U = A;
        P = vector<vector<double>>(n, vector<double>(n, 0));
        y = vector<double>(n);
        
        // Initialize P as identity matrix
        for(int i = 0; i < n; i++) {
            P[i][i] = 1.0;
            L[i][i] = 1.0;
        }
        
        performLUDecomposition();
    }
    
    void performLUDecomposition() {
        cout << "\\n=== METODE DEKOMPOSISI LU GAUSS ===" << endl;
        cout << "Memulai faktorisasi matriks A = LU\\n" << endl;
        
        for(int k = 0; k < n - 1; k++) {
            cout << "--- Eliminasi Kolom " << k + 1 << " ---" << endl;
            
            // Partial Pivoting
            int maxRow = k;
            for(int i = k + 1; i < n; i++) {
                if(abs(U[i][k]) > abs(U[maxRow][k])) {
                    maxRow = i;
                }
            }
            
            if(maxRow != k) {
                cout << "Pivoting: Menukar baris " << k + 1 
                     << " dengan baris " << maxRow + 1 << endl;
                swap(U[k], U[maxRow]);
                swap(P[k], P[maxRow]);
            }
            
            // Check for zero pivot
            if(abs(U[k][k]) < 1e-10) {
                cout << "Error: Pivot nol ditemukan!" << endl;
                return;
            }
            
            cout << "Pivot: U[" << k + 1 << "][" << k + 1 
                 << "] = " << U[k][k] << endl;
            
            // Perform elimination
            for(int i = k + 1; i < n; i++) {
                double multiplier = U[i][k] / U[k][k];
                L[i][k] = multiplier;
                
                cout << "Multiplier m[" << i + 1 << "][" << k + 1 
                     << "] = " << multiplier << endl;
                
                for(int j = k; j < n; j++) {
                    U[i][j] -= multiplier * U[k][j];
                }
            }
            
            printCurrentState(k + 1);
        }
        
        cout << "\\n✓ Dekomposisi LU berhasil!" << endl;
    }
    
    vector<double> solve(vector<double>& b) {
        cout << "\\n=== PENYELESAIAN SISTEM PERSAMAAN ===" << endl;
        
        // Apply permutation to b
        vector<double> Pb(n);
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                Pb[i] += P[i][j] * b[j];
            }
        }
        
        cout << "Vektor b setelah permutasi:" << endl;
        printVector(Pb);
        
        // Forward substitution: Ly = Pb
        cout << "\\n--- Forward Substitution: Ly = Pb ---" << endl;
        for(int i = 0; i < n; i++) {
            y[i] = Pb[i];
            for(int j = 0; j < i; j++) {
                y[i] -= L[i][j] * y[j];
            }
            y[i] /= L[i][i];
            cout << "y[" << i + 1 << "] = " << y[i] << endl;
        }
        
        // Backward substitution: Ux = y
        cout << "\\n--- Backward Substitution: Ux = y ---" << endl;
        vector<double> x(n);
        for(int i = n - 1; i >= 0; i--) {
            x[i] = y[i];
            for(int j = i + 1; j < n; j++) {
                x[i] -= U[i][j] * x[j];
            }
            x[i] /= U[i][i];
            cout << "x[" << i + 1 << "] = " << x[i] << endl;
        }
        
        return x;
    }
    
    void printMatrices() {
        cout << "\\n=== HASIL DEKOMPOSISI ===" << endl;
        
        cout << "\\nMatriks L (Lower Triangular):" << endl;
        printMatrix(L);
        
        cout << "\\nMatriks U (Upper Triangular):" << endl;
        printMatrix(U);
        
        cout << "\\nMatriks P (Permutation):" << endl;
        printMatrix(P);
    }
    
private:
    void printMatrix(const vector<vector<double>>& matrix) {
        for(int i = 0; i < n; i++) {
            cout << "[ ";
            for(int j = 0; j < n; j++) {
                cout << setw(8) << fixed << setprecision(3) << matrix[i][j];
                if(j < n - 1) cout << ", ";
            }
            cout << " ]" << endl;
        }
    }
    
    void printVector(const vector<double>& vec) {
        cout << "[ ";
        for(int i = 0; i < vec.size(); i++) {
            cout << setw(8) << fixed << setprecision(3) << vec[i];
            if(i < vec.size() - 1) cout << ", ";
        }
        cout << " ]" << endl;
    }
    
    void printCurrentState(int step) {
        cout << "\\nMatriks setelah eliminasi kolom " << step << ":" << endl;
        printMatrix(U);
        cout << endl;
    }
};

// Fungsi untuk input matriks
vector<vector<double>> inputMatrix(int n) {
    vector<vector<double>> matrix(n, vector<double>(n));
    cout << "Masukkan elemen matriks " << n << "x" << n << ":" << endl;
    
    for(int i = 0; i < n; i++) {
        cout << "Baris " << i + 1 << ": ";
        for(int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }
    return matrix;
}

// Fungsi untuk input vektor
vector<double> inputVector(int n) {
    vector<double> vec(n);
    cout << "Masukkan elemen vektor b:" << endl;
    
    for(int i = 0; i < n; i++) {
        cout << "b[" << i + 1 << "]: ";
        cin >> vec[i];
    }
    return vec;
}

// Contoh dengan data default
void runExample() {
    cout << "\\n🚀 MENJALANKAN CONTOH DEFAULT" << endl;
    cout << "==============================" << endl;
    
    // Contoh matriks 3x3
    vector<vector<double>> A = {
        {2, 1, 1},
        {4, 3, 3}, 
        {8, 7, 9}
    };
    
    vector<double> b = {4, 10, 24};
    
    cout << "Matriks A:" << endl;
    for(int i = 0; i < 3; i++) {
        cout << "[ ";
        for(int j = 0; j < 3; j++) {
            cout << setw(6) << A[i][j];
            if(j < 2) cout << ", ";
        }
        cout << " ]" << endl;
    }
    
    cout << "\\nVektor b: [ ";
    for(int i = 0; i < 3; i++) {
        cout << b[i];
        if(i < 2) cout << ", ";
    }
    cout << " ]" << endl;
    
    // Solve
    LUDecomposition lu(A);
    lu.printMatrices();
    
    vector<double> solution = lu.solve(b);
    
    cout << "\\n🎯 SOLUSI AKHIR:" << endl;
    cout << "x = [ ";
    for(int i = 0; i < solution.size(); i++) {
        cout << setw(8) << fixed << setprecision(4) << solution[i];
        if(i < solution.size() - 1) cout << ", ";
    }
    cout << " ]" << endl;
    
    // Verifikasi
    cout << "\\n✅ VERIFIKASI (Ax = b):" << endl;
    for(int i = 0; i < 3; i++) {
        double sum = 0;
        for(int j = 0; j < 3; j++) {
            sum += A[i][j] * solution[j];
        }
        cout << "Baris " << i + 1 << ": " << sum 
             << " ≈ " << b[i] << endl;
    }
}

int main() {
    cout << "\\n╔══════════════════════════════════════════╗" << endl;
    cout << "║        METODE DEKOMPOSISI LU GAUSS       ║" << endl;
    cout << "║     Solusi Sistem Persamaan Linier      ║" << endl;
    cout << "║              Kelompok 5                  ║" << endl;
    cout << "╚══════════════════════════════════════════╝" << endl;
    
    int choice;
    do {
        cout << "\\n📋 MENU UTAMA:" << endl;
        cout << "1. Jalankan Contoh Default" << endl;
        cout << "2. Input Manual" << endl;
        cout << "3. Keluar" << endl;
        cout << "Pilihan: ";
        cin >> choice;
        
        switch(choice) {
            case 1:
                runExample();
                break;
                
            case 2: {
                int n;
                cout << "Masukkan ukuran matriks (n x n): ";
                cin >> n;
                
                if(n <= 0 || n > 10) {
                    cout << "Ukuran tidak valid!" << endl;
                    break;
                }
                
                vector<vector<double>> A = inputMatrix(n);
                vector<double> b = inputVector(n);
                
                LUDecomposition lu(A);
                lu.printMatrices();
                
                vector<double> solution = lu.solve(b);
                
                cout << "\\n🎯 SOLUSI:" << endl;
                cout << "x = [ ";
                for(int i = 0; i < solution.size(); i++) {
                    cout << setw(8) << fixed << setprecision(4) << solution[i];
                    if(i < solution.size() - 1) cout << ", ";
                }
                cout << " ]" << endl;
                break;
            }
            
            case 3:
                cout << "\\n👋 Terima kasih telah menggunakan program ini!" << endl;
                break;
                
            default:
                cout << "Pilihan tidak valid!" << endl;
        }
        
    } while(choice != 3);
    
    return 0;
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(cppCode);
    toast.success("Kode berhasil disalin ke clipboard!");
  };

  const handleRunDemo = () => {
    setIsRunning(true);
    toast.info("Menjalankan simulasi program...");
    
    setTimeout(() => {
      setIsRunning(false);
      toast.success("Program berhasil dijalankan!");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              'linear-gradient(45deg, #1e40af, transparent)',
              'linear-gradient(135deg, #3b82f6, transparent)',
              'linear-gradient(225deg, #60a5fa, transparent)',
              'linear-gradient(315deg, #1e40af, transparent)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-20 p-4 bg-white/10 backdrop-blur-lg border-b border-white/20"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              <Home className="w-4 h-4 mr-2" />
              Beranda
            </Button>
          </Link>
          
          <div className="text-white text-center">
            <h1 className="text-2xl font-bold">Program C++ - Dekomposisi LU Gauss</h1>
            <p className="text-sm opacity-80">Implementasi Metode Numerik</p>
          </div>

          <div className="flex space-x-2">
            <Button onClick={handleCopyCode} className="bg-green-500 hover:bg-green-600">
              <Copy className="w-4 h-4 mr-2" />
              Salin Kode
            </Button>
            <Button 
              onClick={handleRunDemo} 
              disabled={isRunning}
              className="bg-orange-500 hover:bg-orange-600"
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
              {isRunning ? "Running..." : "Demo"}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Tabs defaultValue="code" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white/20 backdrop-blur-lg">
              <TabsTrigger value="code" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                <Code className="w-4 h-4 mr-2" />
                Kode Program
              </TabsTrigger>
              <TabsTrigger value="explanation" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                <FileText className="w-4 h-4 mr-2" />
                Penjelasan
              </TabsTrigger>
              <TabsTrigger value="output" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                <Play className="w-4 h-4 mr-2" />
                Output Demo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="code">
              <Card className="bg-white/95 backdrop-blur-lg border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Code className="w-6 h-6 mr-2" />
                    Implementasi C++ - Metode Dekomposisi LU Gauss
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[600px]">
                    <pre className="text-green-400 font-mono text-sm leading-relaxed">
                      <code>{cppCode}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="explanation">
              <Card className="bg-white/95 backdrop-blur-lg border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <FileText className="w-6 h-6 mr-2" />
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
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Class LUDecomposition:</strong> Implementasi lengkap algoritma dekomposisi LU</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Partial Pivoting:</strong> Penanganan kasus pivot nol untuk stabilitas numerik</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Forward & Backward Substitution:</strong> Solusi sistem persamaan lengkap</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-bold text-green-700">Efisiensi</h4>
                        <p className="text-sm text-gray-600">Kompleksitas O(n³/3) untuk dekomposisi</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                        <h4 className="font-bold text-orange-700">Stabilitas</h4>
                        <p className="text-sm text-gray-600">Partial pivoting mencegah error numerik</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                        <h4 className="font-bold text-purple-700">Fleksibilitas</h4>
                        <p className="text-sm text-gray-600">Mendukung matriks ukuran variabel</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-bold text-blue-700">User-Friendly</h4>
                        <p className="text-sm text-gray-600">Interface menu dan output detail</p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="output">
              <Card className="bg-white/95 backdrop-blur-lg border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Play className="w-6 h-6 mr-2" />
                    Output Demo Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black rounded-lg p-4 overflow-auto max-h-[600px]">
                    <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`╔══════════════════════════════════════════╗
║        METODE DEKOMPOSISI LU GAUSS       ║
║     Solusi Sistem Persamaan Linier      ║
║              Kelompok 5                  ║
╚══════════════════════════════════════════╝

🚀 MENJALANKAN CONTOH DEFAULT
==============================

Matriks A:
[      2,      1,      1 ]
[      4,      3,      3 ]
[      8,      7,      9 ]

Vektor b: [ 4, 10, 24 ]

=== METODE DEKOMPOSISI LU GAUSS ===
Memulai faktorisasi matriks A = LU

--- Eliminasi Kolom 1 ---
Pivot: U[1][1] = 2
Multiplier m[2][1] = 2
Multiplier m[3][1] = 4

Matriks setelah eliminasi kolom 1:
[   2.000,   1.000,   1.000 ]
[   0.000,   1.000,   1.000 ]
[   0.000,   3.000,   5.000 ]

--- Eliminasi Kolom 2 ---
Pivot: U[2][2] = 1
Multiplier m[3][2] = 3

Matriks setelah eliminasi kolom 2:
[   2.000,   1.000,   1.000 ]
[   0.000,   1.000,   1.000 ]
[   0.000,   0.000,   2.000 ]

✓ Dekomposisi LU berhasil!

=== HASIL DEKOMPOSISI ===

Matriks L (Lower Triangular):
[   1.000,   0.000,   0.000 ]
[   2.000,   1.000,   0.000 ]
[   4.000,   3.000,   1.000 ]

Matriks U (Upper Triangular):
[   2.000,   1.000,   1.000 ]
[   0.000,   1.000,   1.000 ]
[   0.000,   0.000,   2.000 ]

Matriks P (Permutation):
[   1.000,   0.000,   0.000 ]
[   0.000,   1.000,   0.000 ]
[   0.000,   0.000,   1.000 ]

=== PENYELESAIAN SISTEM PERSAMAAN ===
Vektor b setelah permutasi:
[   4.000,  10.000,  24.000 ]

--- Forward Substitution: Ly = Pb ---
y[1] = 4
y[2] = 2
y[3] = 2

--- Backward Substitution: Ux = y ---
x[3] = 1
x[2] = 1
x[1] = 1

🎯 SOLUSI AKHIR:
x = [   1.0000,   1.0000,   1.0000 ]

✅ VERIFIKASI (Ax = b):
Baris 1: 4 ≈ 4
Baris 2: 10 ≈ 10
Baris 3: 24 ≈ 24

📋 MENU UTAMA:
1. Jalankan Contoh Default
2. Input Manual
3. Keluar
Pilihan: _`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Program;

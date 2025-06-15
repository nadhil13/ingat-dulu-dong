import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, FileText, TrendingUp, Play, Settings } from 'lucide-react';
import { toast } from 'sonner';
import ProgramHeader from '@/components/program/ProgramHeader';
import CodeTab from '@/components/program/CodeTab';
import ExplanationTab from '@/components/program/ExplanationTab';
import GraphsTab from '@/components/program/GraphsTab';
import OutputTab from '@/components/program/OutputTab';
import InteractiveInputTab from '@/components/program/InteractiveInputTab';
import { useProgramData } from '@/hooks/useProgramData';
import { useProgramExecution } from '@/hooks/useProgramExecution';

const Program = () => {
  const { convergenceData, performanceData, updateChartData } = useProgramData(false);
  const { 
    isRunning, 
    outputLines, 
    executionStep, 
    handleRunDemo,
    handleRunWithInput,
    totalLines 
  } = useProgramExecution(updateChartData);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'linear-gradient(45deg, #1e40af, transparent)',
              'linear-gradient(135deg, #7c3aed, transparent)',
              'linear-gradient(225deg, #059669, transparent)',
              'linear-gradient(315deg, #1e40af, transparent)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <ProgramHeader 
        onCopyCode={handleCopyCode}
        onRunDemo={handleRunDemo}
        isRunning={isRunning}
      />

      <div className="relative z-10 p-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Tabs defaultValue="input" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-white/20 backdrop-blur-2xl border border-white/30">
              <TabsTrigger value="input" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 text-sm font-medium">
                <Settings className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Input Dinamis</span>
                <span className="sm:hidden">Input</span>
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 text-sm font-medium">
                <Code className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Kode Program</span>
                <span className="sm:hidden">Kode</span>
              </TabsTrigger>
              <TabsTrigger value="explanation" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 text-sm font-medium">
                <FileText className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Penjelasan</span>
                <span className="sm:hidden">Info</span>
              </TabsTrigger>
              <TabsTrigger value="graphs" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Grafik Realtime</span>
                <span className="sm:hidden">Grafik</span>
              </TabsTrigger>
              <TabsTrigger value="output" className="data-[state=active]:bg-white data-[state=active]:text-blue-700 text-sm font-medium">
                <Play className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Output Demo</span>
                <span className="sm:hidden">Demo</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="input">
              <InteractiveInputTab 
                onRunWithInput={handleRunWithInput}
                isRunning={isRunning}
              />
            </TabsContent>

            <TabsContent value="code">
              <CodeTab cppCode={cppCode} />
            </TabsContent>

            <TabsContent value="explanation">
              <ExplanationTab />
            </TabsContent>

            <TabsContent value="graphs">
              <GraphsTab 
                convergenceData={convergenceData}
                performanceData={performanceData}
                isRunning={isRunning}
              />
            </TabsContent>

            <TabsContent value="output">
              <OutputTab 
                isRunning={isRunning}
                outputLines={outputLines}
                executionStep={executionStep}
                totalLines={totalLines}
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Program;

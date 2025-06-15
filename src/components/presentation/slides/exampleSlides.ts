
export const exampleSlides = [
  {
    id: 7,
    title: "Contoh Perhitungan Manual",
    content: "Implementasi step-by-step dekomposisi LU dengan matriks 3×3",
    details: [
      "Diberikan matriks: A = [[2, 1, 1], [4, 3, 3], [8, 7, 9]]",
      "Langkah 1 - Eliminasi kolom 1:",
      "  l₂₁ = 4/2 = 2, l₃₁ = 8/2 = 4",
      "  Baris 2: [4, 3, 3] - 2×[2, 1, 1] = [0, 1, 1]",
      "  Baris 3: [8, 7, 9] - 4×[2, 1, 1] = [0, 3, 5]",
      "Langkah 2 - Eliminasi kolom 2:",
      "  l₃₂ = 3/1 = 3",
      "  Baris 3: [0, 3, 5] - 3×[0, 1, 1] = [0, 0, 2]"
    ],
    type: "example"
  },
  {
    id: 8,
    title: "Hasil Dekomposisi",
    content: "Matriks L dan U yang diperoleh dari contoh perhitungan",
    details: [
      "Matriks L (Lower triangular):",
      "L = [[1, 0, 0], [2, 1, 0], [4, 3, 1]]",
      "Matriks U (Upper triangular):",
      "U = [[2, 1, 1], [0, 1, 1], [0, 0, 2]]",
      "Verifikasi: L × U = [[2, 1, 1], [4, 3, 3], [8, 7, 9]] = A ✓",
      "Dekomposisi berhasil dan siap untuk penyelesaian SPL"
    ],
    type: "result"
  },
  {
    id: 9,
    title: "Penyelesaian SPL dengan LU",
    content: "Menggunakan hasil dekomposisi untuk menyelesaikan sistem persamaan",
    details: [
      "Sistem: Ax = b, dengan b = [5, 11, 21]",
      "Substitusi maju (Ly = b):",
      "  y₁ = 5",
      "  y₂ = 11 - 2(5) = 1", 
      "  y₃ = 21 - 4(5) - 3(1) = -2",
      "Substitusi mundur (Ux = y):",
      "  x₃ = -2/2 = -1",
      "  x₂ = 1 - 1(-1) = 2",
      "  x₁ = (5 - 1(2) - 1(-1))/2 = 2",
      "Solusi: x = [2, 2, -1]"
    ],
    type: "solution"
  },
  {
    id: 11,
    title: "Contoh Perhitungan - Bagian 1",
    content: "Faktorisasi Matriks A (Eliminasi Kolom Pertama)",
    details: [
      "Matriks awal A = [[2,1,1], [4,3,3], [8,7,9]]",
      "Multiplier: m₂₁ = 4/2 = 2, m₃₁ = 8/2 = 4", 
      "Eliminasi baris 2 dan 3",
      "Hasil setelah eliminasi kolom 1"
    ],
    type: "example1"
  },
  {
    id: 12,
    title: "Contoh Perhitungan - Bagian 2", 
    content: "Eliminasi Kolom Kedua dan Hasil Akhir",
    details: [
      "Multiplier kolom 2: m₃₂ = 3/1 = 3",
      "Eliminasi baris 3 kolom 2",
      "Hasil akhir: L dan U terbentuk",
      "Verifikasi: L × U = A"
    ],
    type: "example2"
  }
];

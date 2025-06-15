export const conceptSlides = [
  {
    id: 3,
    title: "Konsep Dasar Dekomposisi LU",
    content: "Pemahaman fundamental tentang dekomposisi LU untuk sistem persamaan linier",
    details: [
      "Dekomposisi LU adalah sebuah metode untuk menyelesaikan sistem persamaan linier Ax=b.",
      "Metode ini bekerja dengan memfaktorkan atau menguraikan matriks koefisien A yang non-singular menjadi dua matriks:",
      "• L: Matriks segitiga bawah (Lower triangular).",
      "• U: Matriks segitiga atas (Upper triangular).",
      "Sehingga diperoleh persamaan: A=LU."
    ],
    type: "definition"
  },
  {
    id: 4,
    title: "Mengenal Matriks L dan U",
    content: "Karakteristik dan struktur matriks L dan U dalam dekomposisi",
    details: [
      "Matriks L memiliki elemen diagonal bernilai 1, elemen di atas diagonal bernilai 0, dan elemen di bawah diagonal berisi faktor pengali dari eliminasi Gauss.",
      "Matriks U adalah hasil dari eliminasi Gauss pada matriks A, di mana semua elemen di bawah diagonalnya bernilai 0."
    ],
    matrixExample: {
      description: "A = LU",
      matrices: {
        A: "⎡ a₁₁  a₁₂  a₁₃ ⎤\n⎢ a₂₁  a₂₂  a₂₃ ⎥\n⎣ a₃₁  a₃₂  a₃₃ ⎦",
        L: "⎡  1   0   0 ⎤\n⎢ l₂₁   1   0 ⎥\n⎣ l₃₁  l₃₂   1 ⎦",
        U: "⎡ u₁₁  u₁₂  u₁₃ ⎤\n⎢  0   u₂₂  u₂₃ ⎥\n⎣  0    0   u₃₃ ⎦"
      }
    },
    type: "matrix-explanation"
  },
  {
    id: 5,
    title: "Tujuan dan Manfaat",
    content: "Keunggulan menggunakan metode dekomposisi LU",
    details: [
      "Tujuan utama adalah untuk mengubah satu sistem persamaan yang kompleks (Ax=b) menjadi dua sistem persamaan yang lebih mudah diselesaikan.",
      "Prosesnya:",
      "1. Mulai dengan Ax=b.",
      "2. Substitusi A dengan LU, menjadi LUx=b.",
      "3. Misalkan Ux=y.",
      "4. Maka, kita mendapatkan dua persamaan:",
      "   • Ly=b (Forward substitution)",
      "   • Ux=y (Backward substitution)"
    ],
    type: "benefits"
  },
  {
    id: 6,
    title: "Algoritma Penyelesaian",
    content: "Langkah-langkah sistematis dalam menyelesaikan sistem LU",
    details: [
      "Langkah 1: Dekomposisi",
      "• Faktorkan matriks A menjadi matriks L dan U.",
      "Langkah 2: Substitusi Maju",
      "• Selesaikan persamaan Ly=b untuk mendapatkan vektor y.",
      "Langkah 3: Substitusi Mundur",
      "• Selesaikan persamaan Ux=y untuk mendapatkan solusi akhir, yaitu vektor x."
    ],
    type: "algorithm-steps"
  },
  {
    id: 7,
    title: "Algoritma Dekomposisi LU",
    content: "Langkah-langkah sistematis dalam melakukan dekomposisi LU",
    details: [
      "1. Inisialisasi: buat matriks L sebagai matriks identitas dan U sebagai salinan matriks A",
      "2. Untuk setiap kolom k dari 1 hingga n-1:",
      "   - Hitung multiplier: l[i,k] = u[i,k] / u[k,k] untuk i > k",
      "   - Simpan multiplier di matriks L",
      "   - Lakukan eliminasi: u[i,j] = u[i,j] - l[i,k] * u[k,j]",
      "3. Hasil: matriks L (segitiga bawah) dan U (segitiga atas)",
      "4. Verifikasi: pastikan L × U = A"
    ],
    type: "algorithm"
  }
];

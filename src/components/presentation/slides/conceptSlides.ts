
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
      "Matriks U adalah hasil dari eliminasi Gauss pada matriks A, di mana semua elemen di bawah diagonalnya bernilai 0.",
      "",
      "Contoh visual dekomposisi:"
    ],
    matrixExample: {
      description: "A = L × U",
      matrices: {
        A: "⎡ 2  1  1 ⎤\n⎢ 4  3  3 ⎥\n⎣ 8  7  9 ⎦",
        L: "⎡ 1  0  0 ⎤\n⎢ 2  1  0 ⎥\n⎣ 4  3  1 ⎦",
        U: "⎡ 2  1  1 ⎤\n⎢ 0  1  1 ⎥\n⎣ 0  0  2 ⎦"
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
      "",
      "Prosesnya:",
      "1. Mulai dengan Ax=b.",
      "2. Substitusi A dengan LU, menjadi LUx=b.",
      "3. Misalkan Ux=y.",
      "4. Maka, kita mendapatkan dua persamaan:",
      "   • Ly=b (Forward substitution)",
      "   • Ux=y (Backward substitution)",
      "",
      "Keuntungan metode ini:",
      "• Efisien untuk menyelesaikan sistem dengan banyak vektor ruas kanan (b)",
      "• Sekali dekomposisi dilakukan, dapat digunakan berulang kali",
      "• Mengurangi kompleksitas komputasi",
      "• Lebih stable secara numerik dengan teknik pivoting"
    ],
    type: "benefits"
  }
];


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
    title: "Menyelesaikan Ly=b",
    content: "Forward Substitution - Substitusi Maju",
    details: [
      "Karena L adalah matriks segitiga bawah, kita dapat dengan mudah menemukan nilai y secara berurutan dari y₁, y₂, ..., yₙ",
      "Dimulai dari y₁ = b₁, kemudian substitusikan ke baris kedua untuk mendapatkan y₂, dan seterusnya.",
      "Rumus umum untuk forward substitution:",
      "y₁ = b₁",
      "y₂ = b₂ - L₂₁y₁", 
      "y₃ = b₃ - L₃₁y₁ - L₃₂y₂",
      "yᵢ = bᵢ - Σⱼ₌₁ⁱ⁻¹ Lᵢⱼyⱼ untuk i = 1,2,...,n"
    ],
    matrixExample: {
      description: "Sistem persamaan Ly = b",
      matrices: {
        "L×y=b": "⎡  1   0  ...  0 ⎤ ⎡y₁⎤   ⎡b₁⎤\n⎢ L₂₁   1  ...  0 ⎥ ⎢y₂⎥ = ⎢b₂⎥\n⎢  ⋮   ⋮   ⋱   ⋮ ⎥ ⎢ ⋮⎥   ⎢ ⋮⎥\n⎣ Lₙ₁  Lₙ₂ ...  1 ⎦ ⎣yₙ⎦   ⎣bₙ⎦"
      }
    },
    type: "forward-substitution"
  },
  {
    id: 8,
    title: "Menyelesaikan Ux=y",
    content: "Backward Substitution - Substitusi Mundur",
    details: [
      "Setelah y diperoleh, kita selesaikan Ux=y.",
      "Karena U adalah matriks segitiga atas, kita dapat menemukan solusi x secara berurutan dari xₙ, xₙ₋₁, ..., x₁.",
      "Rumus umum untuk backward substitution:",
      "xₙ = yₙ / Uₙₙ",
      "xₙ₋₁ = (yₙ₋₁ - Uₙ₋₁,ₙxₙ) / Uₙ₋₁,ₙ₋₁",
      "xᵢ = (yᵢ - Σⱼ₌ᵢ₊₁ⁿ Uᵢⱼxⱼ) / Uᵢᵢ untuk i = n, n-1, ..., 1"
    ],
    imageSlot: {
      description: "Gambar matriks sistem Ux=y akan ditempatkan di sini",
      placeholder: "Placeholder untuk Matriks Ux=y"
    },
    type: "backward-substitution"
  },
  {
    id: 9,
    title: "Bagaimana Cara Mendapatkan L dan U?",
    content: "Metode LU Gauss menggunakan prinsip dasar eliminasi Gauss",
    details: [
      "Metode LU Gauss menggunakan prinsip dasar eliminasi Gauss.",
      "Prosesnya:",
      "1. Matriks U diperoleh dari hasil akhir proses eliminasi Gauss pada matriks A.",
      "2. Matriks L dibentuk dari faktor-faktor pengali (mᵢⱼ) yang digunakan selama proses eliminasi.",
      "3. Setiap faktor pengali yang digunakan untuk mengeliminasi elemen akan disimpan pada posisi yang sesuai di matriks L."
    ],
    type: "lu-method"
  }
];

export const presentationSlides = [
  {
    id: 1,
    title: "Metode Dekomposisi LU Gauss",
    subtitle: "Solusi Sistem Persamaan Linier (SPL) dengan Faktorisasi Matriks",
    content: "Kelompok 5 - Metode Numerik",
    type: "cover"
  },
  {
    id: 2,
    title: "Anggota Kelompok",
    content: [
      { name: "Muhammad Nadhil Arsy Al-Wafi", role: "Leader", nim: "202331303" },
      { name: "Nadila Kusuma Dewi", role: "Developer", nim: "202331035" }, 
      { name: "Antonio Gerald Renjaan", role: "Analyst", nim: "202331289" }
    ],
    type: "team"
  },
  {
    id: 3,
    title: "Pendahuluan: Apa itu Dekomposisi LU?",
    content: "Konsep Dasar Dekomposisi LU",
    details: [
      "Dekomposisi LU adalah sebuah metode untuk menyelesaikan sistem persamaan linier Ax = b",
      "Metode ini bekerja dengan memfaktorkan atau menguraikan matriks koefisien A yang non-singular menjadi dua matriks:",
      "L: Matriks segitiga bawah (Lower triangular)",
      "U: Matriks segitiga atas (Upper triangular)",
      "Sehingga diperoleh persamaan: A = LU"
    ],
    type: "intro"
  },
  {
    id: 4,
    title: "Bentuk Matriks L dan U",
    content: "Mengenal Matriks L dan U",
    details: [
      "Matriks L memiliki elemen diagonal bernilai 1, elemen di atas diagonal bernilai 0, dan elemen di bawah diagonal berisi faktor pengali dari eliminasi Gauss",
      "Matriks U adalah hasil dari eliminasi Gauss pada matriks A, di mana semua elemen di bawah diagonalnya bernilai 0",
      "Contoh: A = [[a₁₁, a₁₂, a₁₃], [a₂₁, a₂₂, a₂₃], [a₃₁, a₃₂, a₃₃]] = [[1, 0, 0], [l₂₁, 1, 0], [l₃₁, l₃₂, 1]] × [[u₁₁, u₁₂, u₁₃], [0, u₂₂, u₂₃], [0, 0, u₃₃]] = LU"
    ],
    type: "matrix"
  },
  {
    id: 5,
    title: "Mengapa Menggunakan Dekomposisi LU?",
    content: "Tujuan dan Manfaat",
    details: [
      "Tujuan utama adalah untuk mengubah satu sistem persamaan yang kompleks (Ax = b) menjadi dua sistem persamaan yang lebih mudah diselesaikan",
      "Prosesnya:",
      "1. Mulai dengan Ax = b",
      "2. Substitusi A dengan LU, menjadi LUx = b",
      "3. Misalkan Ux = y",
      "4. Maka, kita mendapatkan dua persamaan: Ly = b dan Ux = y"
    ],
    type: "benefits"
  },
  {
    id: 6,
    title: "Langkah Penyelesaian SPL dengan Dekomposisi LU",
    content: "Algoritma Penyelesaian",
    details: [
      "Langkah 1: Dekomposisi - Faktorkan matriks A menjadi matriks L dan U",
      "Langkah 2: Substitusi Maju - Selesaikan persamaan Ly = b untuk mendapatkan vektor y",
      "Langkah 3: Substitusi Mundur - Selesaikan persamaan Ux = y untuk mendapatkan solusi akhir, yaitu vektor x"
    ],
    type: "steps"
  },
  {
    id: 7,
    title: "Langkah 2: Teknik Penyulihan Maju (Forward Substitution)",
    content: "Menyelesaikan Ly = b",
    details: [
      "Karena L adalah matriks segitiga bawah, kita dapat dengan mudah menemukan nilai y secara berurutan dari y₁, y₂, ..., yₙ",
      "Matriks dalam bentuk: [[1, 0, ..., 0], [l₂₁, 1, ..., 0], [..., ..., ..., ...], [lₙ₁, lₙ₂, ..., 1]] × [y₁, y₂, ..., yₙ] = [b₁, b₂, ..., bₙ]",
      "Dimulai dari y₁ = b₁, kemudian substitusikan ke baris kedua untuk mendapatkan y₂, dan seterusnya"
    ],
    type: "forward"
  },
  {
    id: 8,
    title: "Langkah 3: Teknik Penyulihan Mundur (Backward Substitution)",
    content: "Menyelesaikan Ux = y",
    details: [
      "Setelah y diperoleh, kita selesaikan Ux = y",
      "Karena U adalah matriks segitiga atas, kita dapat menemukan solusi x secara berurutan dari xₙ, xₙ₋₁, ..., x₁",
      "Matriks dalam bentuk: [[u₁₁, u₁₂, ..., u₁ₙ], [0, u₂₂, ..., u₂ₙ], [..., ..., ..., ...], [0, 0, ..., uₙₙ]] × [x₁, x₂, ..., xₙ] = [y₁, y₂, ..., yₙ]",
      "Dimulai dari xₙ = yₙ/uₙₙ, kemudian substitusikan ke baris di atasnya untuk mendapatkan xₙ₋₁, dan seterusnya"
    ],
    type: "backward"
  },
  {
    id: 9,
    title: "Pembentukan L dan U: Metode LU Gauss",
    content: "Bagaimana Cara Mendapatkan L dan U?",
    details: [
      "Metode LU Gauss menggunakan prinsip dasar eliminasi Gauss",
      "Prosesnya:",
      "1. Matriks U diperoleh dari hasil akhir proses eliminasi Gauss pada matriks A",
      "2. Matriks L dibentuk dari faktor-faktor pengali (mᵢⱼ) yang digunakan selama proses eliminasi"
    ],
    type: "formation"
  },
  {
    id: 10,
    title: "Algoritma Metode LU Gauss",
    content: "Langkah-langkah Faktorisasi",
    details: [
      "1. Inisialisasi: Nyatakan A sebagai IA (I adalah matriks identitas). Matriks I akan menjadi L dan A akan menjadi U",
      "2. Eliminasi: Lakukan eliminasi Gauss pada matriks A. Untuk setiap operasi baris, misalnya Rᵢ ← Rᵢ - mᵢⱼRⱼ, lakukan hal berikut:",
      "3. Simpan Pengali: Simpan nilai pengali mᵢⱼ pada posisi (i, j) di matriks L",
      "4. Hasil Akhir: Setelah semua proses eliminasi selesai, matriks A akan menjadi matriks U (segitiga atas), dan matriks I akan menjadi matriks L (segitiga bawah dengan diagonal 1)"
    ],
    type: "algorithm"
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
  },
  {
    id: 13,
    title: "Masalah Pivot: Elemen Diagonal Nol",
    content: "Penanganan Kasus Khusus",
    details: [
      "Masalah: Pembagian dengan nol (fatal error)",
      "Solusi: Partial Pivoting",
      "Tukar baris untuk mendapat pivot terbesar", 
      "Meningkatkan akurasi numerik"
    ],
    type: "pivoting"
  },
  {
    id: 14,
    title: "Aturan Pivoting",
    content: "Prosedur Pertukaran Baris",
    details: [
      "Cari elemen terbesar di kolom pivot",
      "Tukar baris jika diperlukan",
      "Update matriks permutasi P",
      "Hasil: PA = LU"
    ],
    type: "pivot-rules"
  },
  {
    id: 15,
    title: "Skalabilitas Metode",
    content: "Keunggulan untuk Berbagai Dimensi",
    details: [
      "Kompleksitas: O(n³/3) untuk dekomposisi",
      "O(n²) untuk setiap substitusi",
      "Efisien untuk multiple RHS",
      "Cocok untuk sistem besar"
    ],
    type: "scalability"
  },
  {
    id: 16,
    title: "Ringkasan",
    content: "Kesimpulan Metode Dekomposisi LU Gauss",
    details: [
      "Metode efisien untuk menyelesaikan SPL",
      "Faktorisasi A = LU atau PA = LU",
      "Tiga tahap: Dekomposisi, Forward, Backward",
      "Pivoting penting untuk stabilitas"
    ],
    type: "summary"
  },
  {
    id: 17,
    title: "Terima Kasih",
    content: "Presentasi Kelompok 5",
    subtitle: "Metode Numerik - Dekomposisi LU Gauss",
    type: "thanks"
  }
];

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
    title: "Pendahuluan",
    content: "Konsep dasar tentang sistem persamaan linear dan metode penyelesaiannya",
    details: [
      "Sistem Persamaan Linear (SPL) adalah kumpulan persamaan linear yang saling berkaitan",
      "Bentuk umum SPL: Ax = b, dimana A adalah matriks koefisien, x adalah vektor variabel, dan b adalah vektor konstanta",
      "Metode penyelesaian SPL meliputi eliminasi Gauss, eliminasi Gauss-Jordan, dan dekomposisi matriks",
      "Dekomposisi LU adalah salah satu metode yang efisien untuk menyelesaikan SPL, terutama untuk sistem yang berukuran besar",
      "Metode ini memecah matriks A menjadi dua matriks segitiga: L (Lower) dan U (Upper)"
    ],
    type: "intro"
  },
  {
    id: 4,
    title: "Apa itu Dekomposisi LU?",
    content: "Pemahaman fundamental tentang faktorisasi matriks LU",
    details: [
      "Dekomposisi LU adalah proses memfaktorkan matriks A menjadi perkalian dua matriks: A = LU",
      "L adalah matriks segitiga bawah (Lower triangular) dengan elemen diagonal = 1",
      "U adalah matriks segitiga atas (Upper triangular) hasil eliminasi Gauss",
      "Tujuan: mengubah sistem Ax = b menjadi dua sistem yang lebih mudah diselesaikan",
      "Langkah penyelesaian: Ly = b (substitusi maju), kemudian Ux = y (substitusi mundur)"
    ],
    type: "definition"
  },
  {
    id: 5,
    title: "Mengapa Menggunakan Dekomposisi LU?",
    content: "Keunggulan dan manfaat metode dekomposisi LU",
    details: [
      "Efisiensi komputasi: sekali dekomposisi dilakukan, dapat digunakan untuk multiple RHS",
      "Stabilitas numerik yang baik dengan pivoting",
      "Mengurangi operasi floating point dibanding metode eliminasi langsung",
      "Mudah diimplementasikan dalam program komputer",
      "Cocok untuk sistem persamaan berukuran besar",
      "Memungkinkan analisis sensitivitas dan perhitungan determinan matriks"
    ],
    type: "benefits"
  },
  {
    id: 6,
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
  },
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
    id: 10,
    title: "Pivoting dalam Dekomposisi LU",
    content: "Penanganan masalah pivot nol dan peningkatan akurasi numerik",
    details: [
      "Masalah: pembagian dengan nol ketika elemen diagonal = 0",
      "Solusi: Partial Pivoting - tukar baris untuk mendapatkan pivot terbesar",
      "Algoritma pivoting:",
      "  1. Cari elemen terbesar di kolom pivot",
      "  2. Tukar baris jika diperlukan",
      "  3. Update matriks permutasi P",
      "Hasil: PA = LU (dengan P adalah matriks permutasi)",
      "Keuntungan: stabilitas numerik yang lebih baik dan menghindari overflow"
    ],
    type: "pivoting"
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

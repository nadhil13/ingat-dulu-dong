
export const algorithmSlides = [
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
  }
];

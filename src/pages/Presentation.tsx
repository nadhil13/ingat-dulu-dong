
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Users, Target, BookOpen, Zap, ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
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
        "1. Anggota Kelompok 1 - Leader",
        "2. Anggota Kelompok 2 - Developer", 
        "3. Anggota Kelompok 3 - Analyst"
      ],
      type: "team"
    },
    {
      id: 3,
      title: "Pendahuluan",
      content: "Dekomposisi LU adalah faktorisasi matriks A menjadi perkalian dua matriks segitiga: A = LU",
      details: [
        "L = Lower triangular matrix (matriks segitiga bawah)",
        "U = Upper triangular matrix (matriks segitiga atas)",
        "Metode ini sangat efisien untuk menyelesaikan SPL"
      ],
      type: "intro"
    },
    {
      id: 4,
      title: "Bentuk Matriks L dan U",
      content: "Struktur matriks setelah dekomposisi",
      details: [
        "Matriks L: Elemen diagonal = 1, elemen atas diagonal = 0",
        "Matriks U: Elemen bawah diagonal = 0",
        "Hasil: A = L × U"
      ],
      type: "matrix"
    },
    {
      id: 5,
      title: "Tujuan dan Manfaat",
      content: "Mengapa menggunakan Dekomposisi LU?",
      details: [
        "Efisiensi komputasi untuk SPL dengan multiple RHS",
        "Stabilitas numerik yang baik",
        "Dapat mendeteksi singular matrix",
        "Basis untuk algoritma lanjutan"
      ],
      type: "benefits"
    },
    {
      id: 6,
      title: "Langkah Penyelesaian",
      content: "3 Tahap Utama:",
      details: [
        "1. Dekomposisi: A = LU",
        "2. Forward Substitution: Ly = b", 
        "3. Backward Substitution: Ux = y"
      ],
      type: "steps"
    },
    {
      id: 7,
      title: "Forward Substitution",
      content: "Menyelesaikan Ly = b",
      details: [
        "Mulai dari baris pertama",
        "y₁ = b₁/L₁₁",
        "yᵢ = (bᵢ - Σ Lᵢⱼyⱼ)/Lᵢᵢ untuk j<i"
      ],
      type: "forward"
    },
    {
      id: 8,
      title: "Backward Substitution", 
      content: "Menyelesaikan Ux = y",
      details: [
        "Mulai dari baris terakhir",
        "xₙ = yₙ/Uₙₙ",
        "xᵢ = (yᵢ - Σ Uᵢⱼxⱼ)/Uᵢᵢ untuk j>i"
      ],
      type: "backward"
    },
    {
      id: 9,
      title: "Pembentukan L dan U",
      content: "Metode LU Gauss",
      details: [
        "Eliminasi Gauss dengan penyimpanan multiplier",
        "Multiplier disimpan di posisi elemen yang dieliminasi",
        "Menghasilkan L dan U secara bersamaan"
      ],
      type: "formation"
    },
    {
      id: 10,
      title: "Algoritma Metode LU Gauss",
      content: "Langkah-langkah implementasi:",
      details: [
        "1. Inisialisasi: L = I, U = A",
        "2. Untuk setiap kolom k:",
        "   - Hitung multiplier: mᵢₖ = Uᵢₖ/Uₖₖ",
        "   - Update baris: Uᵢⱼ = Uᵢⱼ - mᵢₖ × Uₖⱼ",
        "   - Simpan: Lᵢₖ = mᵢₖ"
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

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlide = () => slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-500 to-slate-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-8"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #1e40af 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, #60a5fa 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Navigation Header */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-20 p-2 sm:p-3 lg:p-4 bg-white/12 backdrop-blur-lg border-b border-white/25"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-2 sm:gap-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 text-xs sm:text-sm">
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Beranda
            </Button>
          </Link>
          
          <div className="text-white text-center">
            <h1 className="text-sm sm:text-lg lg:text-xl font-bold">Metode Dekomposisi LU Gauss</h1>
            <p className="text-xs sm:text-sm opacity-80">Slide {currentSlide + 1} dari {slides.length}</p>
          </div>

          <Button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`text-xs sm:text-sm ${isAutoPlay ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {isAutoPlay ? "Pause" : "Auto Play"}
          </Button>
        </div>
      </motion.div>

      {/* Main Slide Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-2 sm:p-4">
        <motion.div className="w-full max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -45 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Card className="bg-white/95 backdrop-blur-lg border-2 border-blue-100 shadow-2xl min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                <CardContent className="p-4 sm:p-6 lg:p-8 xl:p-12">
                  {renderSlideContent(getCurrentSlide())}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Slide Navigation */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="relative z-20 p-2 sm:p-4 lg:p-6 bg-white/12 backdrop-blur-lg border-t border-white/25"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-2 sm:gap-4">
          <Button onClick={prevSlide} className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm w-full sm:w-auto">
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Sebelumnya
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-1 sm:space-x-2 overflow-x-auto max-w-full px-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all flex-shrink-0 ${
                  index === currentSlide ? 'bg-blue-300 scale-125' : 'bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <Button onClick={nextSlide} className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm w-full sm:w-auto">
            Selanjutnya
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
          </Button>
        </div>
      </motion.div>
    </div>
  );

  function renderSlideContent(slide: any) {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {slide.title}
            </motion.h1>
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {slide.subtitle}
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-blue-700 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {slide.content}
            </motion.p>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-blue-800 mb-4 sm:mb-6 lg:mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Users className="inline w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-2 sm:mr-4" />
              {slide.title}
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {slide.content.map((member: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg border-2 border-blue-150"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-2 sm:mb-3 lg:mb-4 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-4xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-800">{member}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-800 mb-3 sm:mb-4 lg:mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {slide.title}
            </motion.h1>
            
            <motion.div 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-3 sm:mb-4 lg:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slide.content}
            </motion.div>

            {slide.details && (
              <motion.div 
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {slide.details.map((detail: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 lg:p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        );
    }
  }
};

export default Presentation;

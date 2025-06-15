import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home, Users, Target, BookOpen, Zap, ArrowRight, ArrowDown, Play, Pause, Camera, Upload } from 'lucide-react';
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
        { name: "Muhammad Nadhil Arsy Al-Wafi", role: "Leader", nim: "202331303" },
        { name: "Nadila Kusuma Dewi", role: "Developer", nim: "202331035" }, 
        { name: "Antonio Gerald Renjaan", role: "Analyst", nim: "202331289" }
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
      }, 7000);
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

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="text-center space-y-8 min-h-[400px] flex flex-col justify-center">
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 bg-clip-text text-transparent leading-tight"
              animate={{ 
                scale: [1, 1.02, 1],
                backgroundPosition: ['0%', '100%', '0%']
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: '200% 100%' }}
            >
              {slide.title}
            </motion.h1>
            <motion.h2 
              className="text-lg md:text-2xl lg:text-3xl text-gray-700 font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {slide.subtitle}
            </motion.h2>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            >
              <BookOpen className="w-6 h-6" />
              {slide.content}
            </motion.div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-8">
            <motion.h1 
              className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Users className="inline w-8 h-8 mr-4" />
              {slide.title}
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {slide.content.map((member: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border-2 border-blue-100 hover:shadow-2xl transition-all duration-500 group"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  {/* Enhanced Circular Photo Container */}
                  <motion.div 
                    className="relative w-40 h-40 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Animated Border Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full rounded-full bg-white"></div>
                    </motion.div>
                    
                    {/* Inner Circle for Photo */}
                    <motion.div 
                      className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white shadow-2xl overflow-hidden cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Photo Upload Area */}
                      <div className="w-full h-full flex flex-col items-center justify-center relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                        >
                          <Camera className="w-8 h-8 mb-2 opacity-90" />
                        </motion.div>
                        <motion.span 
                          className="text-sm font-medium opacity-90"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.9 }}
                          transition={{ delay: 0.7 + index * 0.2 }}
                        >
                          Foto
                        </motion.span>
                        
                        {/* Floating Upload Icon */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-600"
                          animate={{ 
                            y: [0, -5, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.5 
                          }}
                        >
                          <Upload className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Member Info with Enhanced Animations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 mb-2"
                      whileHover={{ scale: 1.05, color: "#3B82F6" }}
                    >
                      {member.name}
                    </motion.h3>
                    
                    <motion.div
                      className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-2 shadow-lg"
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                    >
                      {member.role}
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-600 font-medium"
                      whileHover={{ scale: 1.05, color: "#6B7280" }}
                    >
                      NIM: {member.nim}
                    </motion.p>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-60"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.3 
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      delay: index * 0.4 
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6 min-h-[400px]">
            <motion.h1 
              className="text-2xl md:text-4xl font-bold text-blue-800 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {slide.title}
            </motion.h1>
            
            <motion.div 
              className="text-lg md:text-xl text-gray-700 mb-6 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {slide.content}
            </motion.div>

            {slide.details && (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slide.details.map((detail: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
                    className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-blue-100"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{detail}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Ultra Enhanced Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.2) 0%, transparent 60%)',
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 60%)'
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles with smoother animations */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 100, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation Header */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 p-4 bg-black/20 backdrop-blur-2xl border-b border-white/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="text-white hover:bg-white/20 font-medium">
                <Home className="w-4 h-4 mr-2" />
                Beranda
              </Button>
            </motion.div>
          </Link>
          
          <div className="text-white text-center">
            <motion.h1 
              className="text-lg md:text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 100%' }}
            >
              Metode Dekomposisi LU Gauss
            </motion.h1>
            <p className="text-sm opacity-90">Slide {currentSlide + 1} dari {slides.length}</p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`font-medium transition-all duration-300 ${isAutoPlay ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"}`}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isAutoPlay ? "Pause" : "Auto Play"}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Ultra Enhanced Main Slide Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-4 min-h-[calc(100vh-200px)]">
        <motion.div className="w-full max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.9, rotateY: 30, z: -100 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -30, z: -100 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100,
                ease: "easeInOut"
              }}
            >
              <Card className="bg-white/95 backdrop-blur-2xl border-2 border-blue-200/50 shadow-2xl min-h-[500px] md:min-h-[600px] overflow-hidden">
                <CardContent className="p-6 md:p-12">
                  {renderSlideContent(getCurrentSlide())}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Slide Navigation */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 p-4 bg-black/20 backdrop-blur-2xl border-t border-white/30"
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={prevSlide} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium w-full md:w-auto transition-all duration-300"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Sebelumnya
            </Button>
          </motion.div>

          {/* Ultra Enhanced Slide Indicators */}
          <div className="flex space-x-2 overflow-x-auto max-w-full px-2">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all flex-shrink-0 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={index === currentSlide ? { scale: [1.25, 1.4, 1.25] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              onClick={nextSlide} 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium w-full md:w-auto transition-all duration-300"
              disabled={currentSlide === slides.length - 1}
            >
              Selanjutnya
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Presentation;

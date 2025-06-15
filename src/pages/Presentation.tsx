
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import CoverSlide from '@/components/presentation/CoverSlide';
import TeamSlide from '@/components/presentation/TeamSlide';
import DefaultSlide from '@/components/presentation/DefaultSlide';
import SlideNavigation from '@/components/presentation/SlideNavigation';
import BackgroundAnimation from '@/components/presentation/BackgroundAnimation';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [direction, setDirection] = useState(0);

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
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const getCurrentSlide = () => slides[currentSlide];

  // Enhanced slide variants with ultra-smooth morph transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.7,
      rotateY: direction > 0 ? 60 : -60,
      rotateX: 15,
      z: -300,
      filter: "blur(15px) brightness(0.8)",
      skewX: direction > 0 ? 10 : -10,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      filter: "blur(0px) brightness(1)",
      skewX: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
      scale: 0.7,
      rotateY: direction < 0 ? 60 : -60,
      rotateX: -15,
      z: -300,
      filter: "blur(15px) brightness(0.8)",
      skewX: direction < 0 ? 10 : -10,
    })
  };

  const renderSlideContent = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <CoverSlide 
            title={slide.title}
            subtitle={slide.subtitle}
            content={slide.content}
          />
        );

      case 'team':
        return (
          <TeamSlide 
            title={slide.title}
            members={slide.content}
          />
        );

      default:
        return (
          <DefaultSlide 
            title={slide.title}
            content={slide.content}
            details={slide.details}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <BackgroundAnimation />

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        isAutoPlay={isAutoPlay}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onGoToSlide={goToSlide}
        onToggleAutoPlay={() => setIsAutoPlay(!isAutoPlay)}
      />

      {/* Main Slide Content with Ultra-Smooth Morph Transitions */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6 min-h-[calc(100vh-200px)]">
        <motion.div 
          className="w-full max-w-7xl perspective-1500"
          style={{ perspective: "1500px" }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 25,
                mass: 0.8,
                x: { 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 30,
                  duration: 0.8 
                },
                opacity: { 
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                },
                scale: { 
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                },
                rotateY: { 
                  duration: 1.0, 
                  ease: [0.175, 0.885, 0.32, 1.275]
                },
                rotateX: {
                  duration: 0.8,
                  ease: "easeOut"
                },
                filter: { 
                  duration: 0.6,
                  ease: "easeInOut"
                },
                skewX: {
                  duration: 0.7,
                  ease: [0.23, 1, 0.32, 1]
                }
              }}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.015,
                  rotateX: 1,
                  rotateY: 1.5,
                  transition: { 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                className="transform-gpu will-change-transform"
              >
                <Card className="bg-white/97 backdrop-blur-3xl border-2 border-blue-200/60 shadow-2xl min-h-[550px] md:min-h-[650px] overflow-hidden relative">
                  {/* Enhanced Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-purple-400/20 to-pink-400/15 rounded-lg"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                      scale: [1, 1.015, 1],
                      rotate: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: [0.4, 0, 0.6, 1]
                    }}
                  />
                  
                  {/* Subtle gradient overlay for better text readability */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-blue-50/10 rounded-lg"
                    animate={{
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <CardContent className="p-8 md:p-14 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        filter: "blur(0px)"
                      }}
                      transition={{ 
                        delay: 0.3, 
                        duration: 1.0,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                    >
                      {renderSlideContent(getCurrentSlide())}
                    </motion.div>
                  </CardContent>

                  {/* Corner accent elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400/20 to-transparent"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-400/20 to-transparent"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </Card>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;


import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calculator, Clock, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    { 
      name: "Anggota 1", 
      role: "Team Leader", 
      avatar: "/placeholder.svg", 
      description: "Spesialis Algoritma",
      nim: "12345678"
    },
    { 
      name: "Anggota 2", 
      role: "Developer", 
      avatar: "/placeholder.svg", 
      description: "Expert Programming",
      nim: "12345679"
    },
    { 
      name: "Anggota 3", 
      role: "Analyst", 
      avatar: "/placeholder.svg", 
      description: "Mathematical Analyst",
      nim: "12345680"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-2xl backdrop-blur-sm ${
              i % 3 === 0 ? 'bg-blue-500/10' : 
              i % 3 === 1 ? 'bg-purple-500/10' : 'bg-emerald-500/10'
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + (i * 12)}%`,
              top: `${15 + Math.sin(i) * 25}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Enhanced Header with smoother animations */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Time Display with glassmorphism */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 mb-8 shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className="w-6 h-6 text-blue-200" />
            <div className="text-white font-medium">
              {currentTime.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {currentTime.toLocaleTimeString('id-ID')}
            </div>
          </motion.div>
          
          {/* Ultra Modern Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-9xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 tracking-tight"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: '300% 100%' }}
          >
            KELOMPOK 5
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold tracking-wide mb-4">
              METODE NUMERIK
            </h2>
            <motion.div 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="w-6 h-6" />
              Metode Dekomposisi LU Gauss
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ultra Enhanced Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <Card className="bg-gray-900/80 backdrop-blur-2xl border-2 border-white/20 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />
            <CardHeader className="relative pb-8">
              <CardTitle className="text-center text-3xl md:text-4xl font-bold flex items-center justify-center gap-4">
                <Users className="w-10 h-10 text-blue-200" />
                Tim Kelompok 5
              </CardTitle>
              <p className="text-center text-blue-200 mt-4 text-lg">
                Tim ahli dalam implementasi algoritma numerik
              </p>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 2 + index * 0.3, 
                      type: "spring", 
                      stiffness: 100,
                      duration: 0.8
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -15,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="text-center p-8 rounded-3xl bg-gradient-to-b from-gray-800/60 to-gray-900/40 backdrop-blur-xl border-2 border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:bg-gradient-to-b hover:from-gray-700/60 hover:to-gray-800/40">
                      <div className="relative mb-6">
                        <Avatar className="w-32 h-32 mx-auto ring-4 ring-white/40 group-hover:ring-white/60 transition-all duration-300 shadow-2xl">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-700 text-white text-3xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-200 font-semibold mb-2 text-lg">{member.role}</p>
                      <p className="text-purple-200 font-medium mb-3">NIM: {member.nim}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ultra Enhanced Navigation Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Enhanced Presentation Card */}
          <Link to="/presentation" className="block group">
            <motion.div
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-2xl border-2 border-white/20 text-white h-full hover:shadow-2xl transition-all duration-700 hover:border-white/40 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-gray-800/80 group-hover:to-gray-700/60">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardContent className="relative p-10 text-center h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-8"
                  >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                      <BookOpen className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-blue-200 transition-colors">
                    Presentasi PPT
                  </h3>
                  <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                    Lihat presentasi lengkap tentang Metode Dekomposisi LU Gauss dengan visualisasi interaktif dan animasi smooth
                  </p>
                  <motion.div 
                    className="inline-flex items-center gap-3 bg-gray-800/80 text-white hover:bg-gray-700/80 font-bold px-8 py-4 rounded-full group-hover:scale-105 transition-all shadow-lg border border-white/20"
                    whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  >
                    Mulai Presentasi
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>

          {/* Enhanced Program Card */}
          <Link to="/program" className="block group">
            <motion.div
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-2xl border-2 border-white/20 text-white h-full hover:shadow-2xl transition-all duration-700 hover:border-white/40 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-gray-800/80 group-hover:to-gray-700/60">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardContent className="relative p-10 text-center h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateY: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-8"
                  >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                      <Calculator className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-orange-200 transition-colors">
                    Program C++
                  </h3>
                  <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                    Implementasi kode C++ lengkap untuk Metode Dekomposisi LU Gauss dengan demo interaktif dan grafik realtime
                  </p>
                  <motion.div 
                    className="inline-flex items-center gap-3 bg-gray-800/80 text-white hover:bg-gray-700/80 font-bold px-8 py-4 rounded-full group-hover:scale-105 transition-all shadow-lg border border-white/20"
                    whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                  >
                    Lihat Program
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-2xl backdrop-blur-sm ${
            i % 2 === 0 ? 'bg-gradient-to-br from-white/10 to-blue-300/20' : 'bg-gradient-to-br from-blue-200/15 to-white/10'
          }`}
          style={{
            width: `${20 + i * 8}px`,
            height: `${20 + i * 8}px`,
            left: `${5 + i * 15}%`,
            top: `${10 + i * 12}%`,
          }}
          animate={{ 
            y: [0, -30, 0], 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default Home;

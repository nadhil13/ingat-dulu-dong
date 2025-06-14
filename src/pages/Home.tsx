
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
    { name: "Anggota 1", role: "Team Leader", avatar: "/placeholder.svg", description: "Spesialis Algoritma" },
    { name: "Anggota 2", role: "Developer", avatar: "/placeholder.svg", description: "Expert Programming" },
    { name: "Anggota 3", role: "Analyst", avatar: "/placeholder.svg", description: "Mathematical Analyst" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 relative overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary geometric shapes */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-white/5 to-blue-300/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '10%', left: '20%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-l from-blue-200/8 to-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          style={{ bottom: '15%', right: '25%' }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${10 + (i * 4)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          {/* Time Display */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Clock className="w-5 h-5 text-blue-100" />
            <div className="text-white/90 text-sm font-medium">
              {currentTime.toLocaleDateString('id-ID', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} • {currentTime.toLocaleTimeString('id-ID')}
            </div>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4 tracking-tight"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% 100%' }}
          >
            KELOMPOK 5
          </motion.h1>
          
          {/* Subtitle */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide">
              METODE NUMERIK
            </h2>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
              <Star className="w-5 h-5" />
              Metode Dekomposisi LU Gauss
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
            <CardHeader className="relative pb-6">
              <CardTitle className="text-center text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
                <Users className="w-8 h-8 text-blue-200" />
                Tim Kelompok 5
              </CardTitle>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.3, type: "spring" }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="group"
                  >
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl">
                      <div className="relative mb-4">
                        <Avatar className="w-24 h-24 mx-auto ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-200 font-medium mb-2">{member.role}</p>
                      <p className="text-white/70 text-sm">{member.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Navigation Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Presentation Card */}
          <Link to="/presentation" className="block group">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white h-full hover:shadow-2xl transition-all duration-500 hover:border-white/50 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-8 text-center h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-200 transition-colors">
                    Presentasi PPT
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Lihat presentasi lengkap tentang Metode Dekomposisi LU Gauss dengan visualisasi interaktif
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-full group-hover:scale-105 transition-transform">
                    Mulai Presentasi
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>

          {/* Program Card */}
          <Link to="/program" className="block group">
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white h-full hover:shadow-2xl transition-all duration-500 hover:border-white/50 overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white/20 group-hover:to-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative p-8 text-center h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateY: [0, 180, 360]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="mb-6"
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <Calculator className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-200 transition-colors">
                    Program C++
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Implementasi kode C++ lengkap untuk Metode Dekomposisi LU Gauss dengan demo interaktif
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 font-bold px-6 py-3 rounded-full group-hover:scale-105 transition-transform">
                    Lihat Program
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-white/10 to-blue-300/20 rounded-2xl backdrop-blur-sm"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-blue-200/15 to-white/10 rounded-full backdrop-blur-sm"
        animate={{ 
          y: [0, 20, 0], 
          rotate: [360, 180, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default Home;

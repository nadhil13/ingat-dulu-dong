
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const teamMembers = [
    { name: "Anggota 1", role: "Team Leader", avatar: "/placeholder.svg" },
    { name: "Anggota 2", role: "Developer", avatar: "/placeholder.svg" },
    { name: "Anggota 3", role: "Analyst", avatar: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-500 to-slate-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/10 rounded-full"
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Header with Time */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <div className="text-white/90 text-sm sm:text-base lg:text-lg mb-2">
            {currentTime.toLocaleDateString('id-ID', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} - {currentTime.toLocaleTimeString('id-ID')}
          </div>
          
          <motion.h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-2 sm:mb-4"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            KELOMPOK 5
          </motion.h1>
          
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-50 mb-1 sm:mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            METODE NUMERIK
          </motion.h2>
          
          <motion.div 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Metode Dekomposisi LU Gauss
          </motion.div>
        </motion.div>

        {/* Team Members */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-6 sm:mb-8 lg:mb-12"
        >
          <Card className="bg-white/15 backdrop-blur-lg border-white/25 text-white shadow-xl">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-center text-xl sm:text-2xl lg:text-3xl flex items-center justify-center gap-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                Tim Kelompok 5
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    whileHover={{ scale: 1.03, rotateY: 3 }}
                    className="text-center p-3 sm:p-4 lg:p-6 rounded-lg bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12 transition-all duration-300"
                  >
                    <Avatar className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-2 sm:mb-3 lg:mb-4 ring-2 sm:ring-4 ring-white/40">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-blue-600 text-white text-sm sm:text-base lg:text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2">{member.name}</h3>
                    <p className="text-xs sm:text-sm lg:text-base text-blue-100">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          <Link to="/presentation" className="block">
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2 }}
              whileTap={{ scale: 0.98 }}
              className="group h-full"
            >
              <Card className="bg-gradient-to-br from-white/20 to-blue-600/15 backdrop-blur-lg border-white/30 text-white h-full hover:shadow-2xl transition-all duration-300 hover:border-white/40">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="mb-3 sm:mb-4"
                  >
                    <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto text-blue-100" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">Presentasi PPT</h3>
                  <p className="text-sm sm:text-base text-blue-50 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                    Lihat presentasi lengkap tentang Metode Dekomposisi LU Gauss
                  </p>
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold group-hover:scale-105 transition-transform text-sm sm:text-base w-full sm:w-auto">
                    Mulai Presentasi
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Link>

          <Link to="/program" className="block">
            <motion.div
              whileHover={{ scale: 1.02, rotateX: 2 }}
              whileTap={{ scale: 0.98 }}
              className="group h-full"
            >
              <Card className="bg-gradient-to-br from-white/20 to-blue-600/15 backdrop-blur-lg border-white/30 text-white h-full hover:shadow-2xl transition-all duration-300 hover:border-white/40">
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-3 sm:mb-4"
                  >
                    <Calculator className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto text-blue-100" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4">Program C++</h3>
                  <p className="text-sm sm:text-base text-blue-50 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                    Implementasi kode C++ untuk Metode Dekomposisi LU Gauss
                  </p>
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 font-bold group-hover:scale-105 transition-transform text-sm sm:text-base w-full sm:w-auto">
                    Lihat Program
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 sm:top-16 lg:top-20 left-4 sm:left-8 lg:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/8 rounded-full"
        animate={{ y: [0, -15, 0], rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-16 lg:bottom-20 right-4 sm:right-8 lg:right-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-blue-200/15 rounded-full"
        animate={{ y: [0, 15, 0], rotate: -360 }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
};

export default Home;

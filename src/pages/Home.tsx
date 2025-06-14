
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Time */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="text-white/80 text-lg mb-2">
            {currentTime.toLocaleDateString('id-ID', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} - {currentTime.toLocaleTimeString('id-ID')}
          </div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            KELOMPOK 5
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl text-blue-100 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            METODE NUMERIK
          </motion.h2>
          
          <motion.div 
            className="text-xl text-white/90"
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
          className="mb-12"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardHeader>
              <CardTitle className="text-center text-3xl flex items-center justify-center gap-2">
                <Users className="w-8 h-8" />
                Tim Kelompok 5
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white/30">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-blue-500 text-white text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-200">{member.role}</p>
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
          className="grid md:grid-cols-2 gap-8"
        >
          <Link to="/presentation" className="block">
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-white/20 to-blue-500/20 backdrop-blur-lg border-white/30 text-white h-full hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Presentasi PPT</h3>
                  <p className="text-blue-100 mb-6">
                    Lihat presentasi lengkap tentang Metode Dekomposisi LU Gauss
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold group-hover:scale-105 transition-transform">
                    Mulai Presentasi
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Link>

          <Link to="/program" className="block">
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Card className="bg-gradient-to-br from-white/20 to-blue-500/20 backdrop-blur-lg border-white/30 text-white h-full hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Calculator className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Program C++</h3>
                  <p className="text-blue-100 mb-6">
                    Implementasi kode C++ untuk Metode Dekomposisi LU Gauss
                  </p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold group-hover:scale-105 transition-transform">
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
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        animate={{ y: [0, -20, 0], rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300/20 rounded-full"
        animate={{ y: [0, 20, 0], rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default Home;

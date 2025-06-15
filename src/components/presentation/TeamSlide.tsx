
import { motion } from 'framer-motion';
import { Users, Camera, Upload } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  nim: string;
}

interface TeamSlideProps {
  title: string;
  members: TeamMember[];
}

const TeamSlide = ({ title, members }: TeamSlideProps) => {
  return (
    <div className="space-y-8">
      <motion.h1 
        className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Users className="inline w-8 h-8 mr-4" />
        {title}
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl border-2 border-blue-100 hover:shadow-2xl transition-all duration-500 group"
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <motion.div 
              className="relative w-40 h-40 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-white"></div>
              </motion.div>
              
              <motion.div 
                className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white shadow-2xl overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
};

export default TeamSlide;


import { motion } from 'framer-motion';
import SlideTitle from './default/SlideTitle';
import SlideContent from './default/SlideContent';
import SlideDetails from './default/SlideDetails';
import BackgroundDecorations from './default/BackgroundDecorations';
import { ImageIcon } from 'lucide-react';

interface ImageSlotSlideProps {
  title: string;
  content: string;
  details: string[];
  imageSlot: {
    description: string;
    placeholder: string;
  };
}

const ImageSlotSlide = ({ title, content, details, imageSlot }: ImageSlotSlideProps) => {
  return (
    <div className="relative min-h-full flex flex-col justify-center items-center space-y-8 p-4">
      <BackgroundDecorations />
      
      <div className="w-full max-w-6xl space-y-8">
        <SlideTitle title={title} />
        
        <SlideContent content={content} />
        
        <SlideDetails details={details} />
        
        {/* Image Slot Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl border-4 border-dashed border-gray-400 shadow-xl"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
            className="p-4 bg-white rounded-full shadow-lg"
          >
            <ImageIcon className="w-12 h-12 text-gray-600" />
          </motion.div>
          
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-gray-800">{imageSlot.placeholder}</h3>
            <p className="text-lg text-gray-600 font-medium">{imageSlot.description}</p>
          </div>
          
          <motion.div
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
          >
            Gambar Matriks Akan Ditempatkan Di Sini
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSlotSlide;

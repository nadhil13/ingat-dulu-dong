
import FloatingIcons from './cover/FloatingIcons';
import AnimatedTitle from './cover/AnimatedTitle';
import AnimatedSubtitle from './cover/AnimatedSubtitle';
import AnimatedButton from './cover/AnimatedButton';
import DecorativeElements from './cover/DecorativeElements';

interface CoverSlideProps {
  title: string;
  subtitle: string;
  content: string;
}

const CoverSlide = ({ title, subtitle, content }: CoverSlideProps) => {
  return (
    <div className="text-center space-y-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
      <FloatingIcons />
      <AnimatedTitle title={title} />
      <AnimatedSubtitle subtitle={subtitle} />
      <AnimatedButton content={content} />
      <DecorativeElements />
    </div>
  );
};

export default CoverSlide;
